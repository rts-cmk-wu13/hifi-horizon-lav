import { Form, Link, useLocation, useNavigate } from "react-router"

import PageWrapper from "../components/PageWrapper"
import WhiteBox from "../components/WhiteBox"
import FormField from "../components/FormField"
import StandardButton from "../components/StandardButton"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"


export default function Login() {
    const [error, setError] = useState();
    const {login} = useAuth()
    const location = useLocation();
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || "/"

    async function handleLogin(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(event.currentTarget.password.value)

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData.entries())

        console.log(data)
        // validér her...

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const userdata = await response.json()

        console.log(userdata)

        if(!response.ok) {
            setError(userdata.message || userdata.error || "Please provide login credentials")
        } else {
            login(userdata.accessToken)
            navigate(from, { replace: true })
        }

    }

    return (
        <PageWrapper obj={{ heading: "Login" }}>
            <div className="flex flex-col gap-8">
                <WhiteBox>
                    <h2 className="pb-2 text-2xl font-semibold uppercase">Registered Customers</h2>
                    <p className="text-sm">If you have an account, sign in with your email address.</p>

                    <Form onSubmit={handleLogin} id="loginForm" className="mt-12">
                        <div className="mb-12 flex flex-col gap-8">
                            <FormField obj={{ label: "Email", required: true }}>
                                <input type="email" name="email" id="email" />
                            </FormField>

                            <FormField obj={{ label: "Password", required: true }}>
                                <input type="password" name="password" id="password" />
                            </FormField>

                            <div className="flex gap-3 text-sm">
                                <input type="checkbox" name="remember" id="remember" className="bg-hifi-gray-light" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                        </div>
                        {error && (<div>{error}</div>)}
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