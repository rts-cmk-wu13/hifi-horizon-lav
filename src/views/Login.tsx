import { Link } from "react-router"

import PageWrapper from "../components/PageWrapper"
import FormField from "../components/FormField"
import StandardButton from "../components/StandardButton"


export default function Login() {

    return (
        <PageWrapper obj={{ heading: "Login" }}>
            <section>
                <h2 className="text-2xl font-semibold uppercase">Registered Customers</h2>
                <p className="mt-2 text-sm">If you have an account, sign in with your email address.</p>

                <form action="POST" id="loginForm" className="mt-12">
                    <FormField obj={{ label: "Email", required: true }}>
                        <input type="email" name="email" id="email" />
                    </FormField>

                    <FormField obj={{ label: "Password", required: true }}>
                        <input type="password" name="password" id="password" />
                    </FormField>

                    <div className="flex gap-3">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <StandardButton obj={{ text: "Sign in" }} />
                    <Link to="#">Forgot your password?</Link>
                </form>
            </section>
        </PageWrapper>
    )

}