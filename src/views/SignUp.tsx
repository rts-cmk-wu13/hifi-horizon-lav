import PageWrapper from "../components/PageWrapper";
import WhiteBox from "../components/WhiteBox";
import FormField from "../components/FormField";
import StandardButton from "../components/StandardButton";
import { Form, useActionData } from "react-router";
import type { UserErrors } from "../schemas/schemas";
import usePageTitle, { useRedirectAfterAuth } from "../utils/helpers";

export default function SignUp() {
    const errors = useActionData<UserErrors>();

    usePageTitle("Sign up");

    useRedirectAfterAuth();

    return (
        <PageWrapper obj={{ heading: "Create an account" }}>
            <WhiteBox>
                <h2 className="text-2xl font-semibold uppercase mb-2">
                    Create new customer account
                </h2>
                <p className="text-sm">
                   Fill in the required information below to create an account.
                </p>

                <Form
                    method="POST"
                    noValidate
                    id="signupForm"
                    className="mt-6 flex flex-col gap-6"
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
                            label: "Address",
                            required: true,
                            errorMessage: errors && errors?.address?.errors[0],
                        }}
                    >
                        <input type="text" name="address" id="address" />
                    </FormField>

                    <FormField obj={{ label: "Address - line 2" }}>
                        <input type="text" name="address2" id="address2" />
                    </FormField>

                    <div className="grid grid-cols-2 gap-6">
                        <FormField
                            obj={{
                                label: "Zip code",
                                required: true,
                                errorMessage: errors && errors?.zip?.errors[0],
                            }}
                        >
                            <input type="number" name="zip" id="zip" />
                        </FormField>

                        <FormField
                            obj={{
                                label: "City",
                                required: true,
                                errorMessage: errors && errors?.city?.errors[0],
                            }}
                        >
                            <input type="text" name="city" id="city" />
                        </FormField>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <FormField obj={{ label: "Country" }}>
                            <input type="text" name="country" id="country" />
                        </FormField>

                        <FormField obj={{ label: "Phone no." }}>
                            <input type="tel" name="phone" id="phone" />
                        </FormField>
                    </div>

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
                            label: "Password",
                            required: true,
                            errorMessage: errors && errors?.password?.errors[0],
                        }}
                    >
                        <input type="password" name="password" id="password" />
                    </FormField>

                    <FormField
                        obj={{
                            label: "Repeat password",
                            required: true,
                            errorMessage: errors && errors?.cnf_password?.errors[0],
                        }}
                    >
                        <input
                            type="password"
                            name="cnf_password"
                            id="cnf_password"
                        />
                    </FormField>

                    <div className="flex flex-col gap-4 *:flex *:gap-3 *:*:[&>span]:text-red-500 *:*:[&>span]:font-bold">
                        <div className="flex flex-row items-center">
                            <input type="checkbox" name="terms" id="terms" className="hifi-checkbox"/>
                            <label htmlFor="">
                                By using this form you agree with the storage
                                and handling of your data by this website.{" "}
                                <span>*</span>
                            </label>
                            {errors?.terms && (
                                <p className="text-red-600">
                                    {errors?.terms?.errors[0]}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-row items-center">
                            <input
                                type="checkbox"
                                name="marketing"
                                id="marketing"
                                className="hifi-checkbox"
                            />
                            <label htmlFor="marketing">
                                Accept marketing from HiFi Horizon (newsletter
                                and discount offers by email).
                            </label>
                        </div>
                    </div>

                    <StandardButton
                        obj={{
                            text: "Create an account",
                            form: "signupForm",
                            type: "submit",
                        }}
                    />
                </Form>
            </WhiteBox>
        </PageWrapper>
    );
}
