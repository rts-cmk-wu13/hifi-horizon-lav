import { redirect } from "react-router";
import { ContactSchema, type ContactErrors } from "../schemas/schemas";
import { z } from "zod/v4";
import { toast } from "react-toastify";

export async function handleSubmit({ request }: { request: Request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const result = ContactSchema.safeParse(data);

    console.log("result", result);

    console.log("data", result.data);

    if (!result.success) {
        const zodError = z.treeifyError(result.error);
        console.log(zodError);

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
