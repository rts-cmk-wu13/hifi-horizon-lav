import { Form, Link, useActionData } from "react-router";

import PageWrapper from "../components/PageWrapper";
import FormField from "../components/FormField";
import StandardButton from "../components/StandardButton";
import type { ContactErrors } from "../schemas/schemas";
import { useEffect } from "react";

export default function Contact() {
    const errors = useActionData<ContactErrors>();

    console.log(errors);


    return (
        <PageWrapper obj={{ heading: "Get in touch with us" }}>
            <Form
                method="POST"
                id="contactForm"
                className="p-12 pb-20 flex flex-col gap-2 bg-hifi-white shadow-hifi-lg *:last:mt-12 *:last:self-end"
                noValidate
            >
                <FormField
                    obj={{
                        label: "Full name",
                        required: true,
                        errorMessage: errors && errors?.name?.errors[0],
                    }}
                >
                    <input type="text" name="name" id="name" />
                </FormField>

                <FormField
                    obj={{
                        label: "Email",
                        required: true,
                        errorMessage: errors && errors?.email?.errors[0],
                    }}
                >
                    <input type="email" name="email" id="email" />
                </FormField>

                <FormField
                    obj={{
                        label: "Subject",
                        required: true,
                        errorMessage: errors && errors?.subject?.errors[0],
                    }}
                >
                    <input type="text" name="subject" id="subject" />
                </FormField>

                <FormField
                    obj={{
                        label: "Message",
                        required: true,
                        errorMessage: errors && errors?.message?.errors[0],
                    }}
                >
                    <textarea
                        name="message"
                        id="message"
                        className="block h-40"
                    ></textarea>
                </FormField>

                <StandardButton obj={{ text: "Submit", form: "contactForm" }} />
            </Form>

            <h2 className="mt-9 text-2xl font-semibold text-center">
                Visit our sister companies{" "}
                <Link to="#" className="text-hifi-accent">
                    Home Sound
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-hifi-accent">
                    The Movie Rooms
                </Link>{" "}
                part of the HiFi Horizon Group.
            </h2>
        </PageWrapper>
    );
}
