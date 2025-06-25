import { Form, Link, useActionData } from "react-router";
import type { UserLoginErrors } from "../schemas/schemas";

import PageWrapper from "../components/PageWrapper";
import WhiteBox from "../components/WhiteBox";
import FormField from "../components/FormField";
import StandardButton from "../components/StandardButton";
import CtaBanner from "../components/CtaBanner";

import usePageTitle, { useRedirectAfterAuth } from "../utils/helpers";


export default function Login() {
    const errors = useActionData<UserLoginErrors>();

    usePageTitle("Log in");

    useRedirectAfterAuth();

    return (
        <PageWrapper obj={{ heading: "Login" }}>
            <div className="flex flex-col gap-8">
                <WhiteBox>
                    <h2 className="pb-2 text-2xl font-semibold uppercase">
                        Registered Customers
                    </h2>
                    <p className="text-sm">
                        If you have an account, sign in with your email address.
                    </p>

                    <Form method="POST" id="loginForm" className="mt-12">
                        <div className="mb-12 flex flex-col gap-8">
                            <FormField
                                obj={{
                                    label: "Email",
                                    required: true,
                                    errorMessage:
                                        errors && errors?.email?.errors[0],
                                }}
                            >
                                <input type="email" name="email" id="email" />
                            </FormField>

                            <FormField
                                obj={{
                                    label: "Password",
                                    required: true,
                                    errorMessage:
                                        errors && errors?.password?.errors[0],
                                }}
                            >
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </FormField>

                            <div className="flex gap-3 text-sm">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    className="bg-hifi-gray-light"
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                        </div>
                        <StandardButton
                            obj={{ text: "Sign in", form: "loginForm" }}
                        />
                        <Link
                            to="#"
                            className="mt-4 inline-block text-sm hover:underline"
                        >
                            Forgot your password?
                        </Link>
                    </Form>
                </WhiteBox>

                <CtaBanner obj={{ heading: "New customer", text: "Creating an account has many benefits: check out faster, track orders and more." }}>
                    <StandardButton obj={{ text: "Create an account", href: "/signup" }}/>
                </CtaBanner>
            </div>
        </PageWrapper>
    );
}
