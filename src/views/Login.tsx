import { Form, Link, useActionData, useLocation, useNavigate } from "react-router"

import PageWrapper from "../components/PageWrapper"
import WhiteBox from "../components/WhiteBox"
import FormField from "../components/FormField"
import StandardButton from "../components/StandardButton"
import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import type { UserLoginErrors } from "../schemas/schemas"
import { readFromSessionStorage } from "../utils/localstorage"


export default function Login() {
    const errors = useActionData<UserLoginErrors>()
    const {login} = useAuth()
    const location = useLocation();
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        
        const token = readFromSessionStorage<string>("token");
        
        if (token) {
            login(token)
            navigate(from, { replace: true })
        }
    })

    return (
        <PageWrapper obj={{ heading: "Login" }}>
            <div className="flex flex-col gap-8">
                <WhiteBox>
                    <h2 className="pb-2 text-2xl font-semibold uppercase">Registered Customers</h2>
                    <p className="text-sm">If you have an account, sign in with your email address.</p>

                    <Form method="POST" id="loginForm" className="mt-12">
                        <div className="mb-12 flex flex-col gap-8">
                            <FormField obj={{ label: "Email", required: true, errorMessage: errors && errors?.email?.errors[0] }}>
                                <input type="email" name="email" id="email" />
                            </FormField>

                            <FormField obj={{ label: "Password", required: true, errorMessage: errors && errors?.password?.errors[0] }}>
                                <input type="password" name="password" id="password" />
                            </FormField>

                            <div className="flex gap-3 text-sm">
                                <input type="checkbox" name="remember" id="remember" className="bg-hifi-gray-light" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                        </div>
                        <StandardButton obj={{ text: "Sign in", form: "loginForm" }} />
                        <Link to="#" className="mt-4 inline-block text-sm hover:underline">Forgot your password?</Link>
                    </Form>
                </WhiteBox>

                <WhiteBox className="flex flex-col items-center">
                    <h2 className="pb-2 text-2xl font-semibold uppercase">New Customer</h2>
                    <p className="mb-6 text-sm">Creating an account has many benefits: check out faster, track orders and more.</p>

                    <StandardButton obj={{ text: "Create an account", href: "/signup" }} />
                </WhiteBox>
            </div>
        </PageWrapper>
    )
}