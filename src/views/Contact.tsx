import FormField from "../components/FormField"


export default function Contact() {

    return (
        <>
            <h1 className="text-5xl font-semibold uppercase text-hifi-gray-dark">Get in touch with us</h1>

            <form action="POST" className="p-12 pb-20 bg-hifi-white shadow-hifi-lg">
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
                    <textarea name="message" id="message"></textarea>
                </FormField>
            </form>
        </>
    )

}