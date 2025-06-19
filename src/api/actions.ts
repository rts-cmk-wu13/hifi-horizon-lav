import { ContactSchema, NewsletterSchema, type ContactErrors } from "../schemas/schemas";
import { z } from "zod/v4";
import { toast } from "react-toastify";

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
    form.reset()

    

    console.log("data was sent!");
}

export async function handleNewsletterSubmit({request}:{request : Request}) {

    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const result = NewsletterSchema.safeParse(data);

    console.log("result", result);

    console.log("data", result.data);

    if (!result.success) {        

        const zodError = z.treeifyError(result.error);
        const errorMessage = zodError.properties?.email?.errors[0] || "Invalid input";

        toast.error(errorMessage, {
            className: "mt-24"
        })
        console.log(zodError);

        return zodError.properties as ContactErrors;
    }

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

    toast.success("Thank you for signing up to our newsletter!", {
        className: "mt-24"
    });

    console.log("data was sent!");
}
