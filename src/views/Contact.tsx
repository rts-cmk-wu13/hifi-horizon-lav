import { Link } from "react-router"

import PageWrapper from "../components/PageWrapper"
import FormField from "../components/FormField"
import StandardButton from "../components/StandardButton"


export default function Contact() {

    return (
        <PageWrapper obj={{ heading: "Get in touch with us" }}>
            <form action="POST" id="contactForm" className="p-12 pb-20 flex flex-col gap-2 bg-hifi-white shadow-hifi-lg *:last:mt-12 *:last:self-end">
                <FormField obj={{label: "Full name", required: true}}>
                    <input type="text" name="fullname" id="fullname" />
                </FormField>

                <FormField obj={{label: "Email", required: true}}>
                    <input type="email" name="email" id="email" />
                </FormField>

                <FormField obj={{label: "Subject", required: true}}>
                    <input type="text" name="subject" id="subject" />
                </FormField>

                <FormField obj={{label: "Message", required: true}}>
                    <textarea name="message" id="message" className="block h-40"></textarea>
                </FormField>

                <StandardButton obj={{text: "Submit", form: "contactForm"}} />
            </form>

            <h2 className="mt-9 text-2xl font-semibold text-center">
                Visit our sister companies <Link to="#" className="text-hifi-accent">Home Sound</Link> and <Link to="#" className="text-hifi-accent">The Movie Rooms</Link> part of the HiFi Horizon Group.
            </h2>
        </PageWrapper>
    )

}