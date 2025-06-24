import {
    ContactSchema,
    CurrentUserSchema,
    NewsletterSchema,
    UserLoginSchema,
    UserSchema,
    type ContactErrors,
    type CurrentUserErrors,
    type NewsletterErrors,
    type UserErrors,
    type UserLoginErrors,
} from "../schemas/schemas";
import { z } from "zod/v4";
import { toast } from "react-toastify";
import {
    readFromSessionStorage,
    saveToSessionStorage,
} from "../utils/localstorage";
import { fetchCurrentUser } from "./jsonserver";
import { checkUserSession, json } from "../utils/helpers";


export async function handleContactSubmit({ request }: { request: Request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const result = ContactSchema.safeParse(data);

    console.log("result", result);

    console.log("data", result.data);

    if (!result.success) {
        const zodError = z.treeifyError(result.error);

        return zodError.properties as ContactErrors;
    }

    let response = await fetch("http://localhost:4000/contact_inquiries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
    });

    if (!response.ok) {
        throw new Error("Could not save data");
    }

    toast.success("Your message was sent!");

    const form = document.getElementById("contactForm") as HTMLFormElement;
    form.reset();
}

export async function handleNewsletterSubmit({
    request,
}: {
    request: Request;
}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const result = NewsletterSchema.safeParse(data);

    if (!result.success) {
        const zodError = z.treeifyError(result.error);
        const errorMessage =
            zodError.properties?.email?.errors[0] || "Invalid input";

        toast.error(errorMessage, {
            className: "mt-24",
        });
        console.log(zodError);

        return zodError.properties as NewsletterErrors;
    }

    const getExisting = await fetch(
        `http://localhost:4000/newsletter_list?email=${result.data.email}`
    );
    const existing = await getExisting.json();

    const accessToken = readFromSessionStorage("token");

    const user = await fetchCurrentUser({
        queryString: `email=${result.data.email}`,
        token: accessToken,
    });

    console.log("user", user);
    

    let checkUserToken = await fetch(
        `http://localhost:4000/users/${user.id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    console.log("hello");
    

    if (checkUserToken.ok) {
        let userResponse = await fetch(
            `http://localhost:4000/users/${user.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ marketing: true }),
            }
        );

        if (!userResponse.ok) {
            throw new Error("Could not update user data");
        }
    }

    if (existing.length === 0) {
        let response = await fetch("http://localhost:4000/newsletter_list", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.data),
        });

        if (!response.ok) {
            throw new Error("Could not save data");
        }
    }

    toast.success("Thank you for signing up to our newsletter!", {
        className: "mt-24",
    });
}

export async function handleSignupSubmit({ request }: { request: Request }) {
    // Parse the form data from the request
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    if (!data.hasOwnProperty("marketing")) {
        data.marketing = "false";
    }
    if (!data.hasOwnProperty("terms")) {
        data.terms = "false"; // defensive, in case users bypass frontend
    }

    const result = UserSchema.safeParse(data);

    console.log("result", result);

    console.log("data", result.data);



    // Check if the parsed data is valid
    if (!result.success) {
        // If not, convert the error into a tree structure
        const zodError = z.treeifyError(result.error);

        // Show an error message using toast
        return zodError.properties as UserErrors;
    }

    delete result.data.cnf_password;

    // Send the parsed data to the server
    let response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
    });

    if (!response.ok) {
        toast.error("A user with that email already exists. Please try again.");

        return;
    }

    // Parse the response data
    const responseData = await response.json();

    console.log(responseData);

    if (responseData.user.marketing === true) {
        // If the user has opted in for marketing, check if they are already in the newsletter list
        const getExisting = await fetch(
            `http://localhost:4000/newsletter_list?email=${responseData.user.email}`
        );
        const existing = await getExisting.json();

        console.log(existing);

        // If they are not in the newsletter list, add them
        if (existing.length === 0) {
            const newsLetterData = {
                email: responseData.user.email,
            };

            let response = await fetch(
                "http://localhost:4000/newsletter_list",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newsLetterData),
                }
            );

            if (!response.ok) {
                throw new Error("Could not save data");
            }
        }
    }

    // Check if the response contains an access token
    if (!responseData.accessToken) {
        // If not, show an error message
        toast.error("Registration failed. Please try again.");
        return;
    }

    // If registration is successful, show a success message
    toast.success("Registration successful! You are now logged in.", {
        className: "mt-24",
    });

    // Save the access token to session storage
    saveToSessionStorage("token", responseData.accessToken);

    // Redirect the user to the home page or a specified page

    // const redirectTo = readFromSessionStorage<string>("redirectTo") || "/";

    console.log("data was sent!");

    //    return redirect(redirectTo);

    return null;
}

export async function handleLoginSubmit({ request }: { request: Request }) {
    console.log("handleLoginSubmit called");

    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const result = UserLoginSchema.safeParse(data);

    console.log("result", result);
    if (!result.success) {
        const zodError = z.treeifyError(result.error);
        return zodError.properties as UserLoginErrors;
    }

    let response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
    });

    const responseData = await response.json();

    console.log("responseData", responseData);

    if (!response.ok) {
        
        // If the response is not ok, throw an error
        throw new Error(responseData.message || "Login failed");

    }

    saveToSessionStorage("token", responseData.accessToken);

    toast.success("Login successful!", {
        className: "mt-24",
    });

    // const redirectTo = readFromSessionStorage<string>("redirectTo") || "/";

    // return redirect(redirectTo);

    return null; // Return null to indicate no errors, and let the router handle the redirect
}

export async function handleUpdateSubmit({request}:{request : Request}) {
    
    console.log("handleUpdateSubmit called");
    const formData = await request.formData();
    
    const data = Object.fromEntries(formData.entries());

    const result = CurrentUserSchema.safeParse(data);

    console.log("result", result);

    if (!result.success) {
        // If not, convert the error into a tree structure
        const zodError = z.treeifyError(result.error);

        return zodError.properties as CurrentUserErrors;
    }
    
    const accessToken = readFromSessionStorage("token");

    const user = await fetchCurrentUser({
        token: accessToken,
    });

    console.log("user", user);
    
    if (checkUserSession()) {
        let userResponse = await fetch(
            `http://localhost:4000/users/${user.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(result.data),
            }
        );

        if (!userResponse.ok) {
            throw new Error("Could not update user data");
        }

        toast.success("Profile updated successfully!");

        console.log("userResponse", userResponse);
        
    }

    


    console.log("updated data", result.data);
    
    return json({success: true, user: result.data})
}
