import { Form, Link, useActionData } from "react-router";

import PageWrapper from "../components/PageWrapper";
import FormField from "../components/FormField";
import StandardButton from "../components/StandardButton";
import type { ContactErrors } from "../schemas/schemas";
import usePageTitle from "../utils/helpers";
import WhiteBox from "../components/WhiteBox";

export default function Contact() {
    const errors = useActionData<ContactErrors>();

    console.log(errors);

    usePageTitle("Contact");

    return (

        <PageWrapper obj={{ heading: "Get in touch" }}>
            <WhiteBox>
                <Form
                    method="POST"
                    id="contactForm"
                    className="flex flex-col gap-2 *:last:mt-12 *:last:self-end"
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


            </WhiteBox>
            <h2 className="mt-9 text-lg font-semibold text-center *:text-hifi-accent *:hover:underline">
                Visit our sister companies <Link to="#">Home Sound</Link> and <Link to="#">The Movie Rooms</Link> part of the HiFi Horizon Group.
            </h2>
        </PageWrapper>
    );
}
