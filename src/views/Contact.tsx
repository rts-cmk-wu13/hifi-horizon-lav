import FormField from "../components/FormField"
import StandardButton from "../components/StandardButton"


export default function Contact() {

    return (
        <div className="p-8">
            <h1 className="text-5xl font-semibold uppercase text-hifi-gray-dark">Get in touch with us</h1>

            <form action="POST" id="contactForm" className="mt-12 p-12 pb-20 flex flex-col gap-2 bg-hifi-white shadow-hifi-lg *:last:mt-12 *:last:self-end">
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
        </div>
    )

}