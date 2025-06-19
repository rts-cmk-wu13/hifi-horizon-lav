import PageWrapper from "../components/PageWrapper"
import WhiteBox from "../components/WhiteBox"
import FormField from "../components/FormField"
import StandardButton from "../components/StandardButton"

export default function SignUp() {
    return (
        <PageWrapper obj={{ heading: "Create an account" }}>
            <WhiteBox>
                <h2 className="text-2xl font-semibold uppercase">Create new customer account</h2>

                <form action="" method="post" id="signupForm" className="mt-9 flex flex-col gap-8">
                    <FormField obj={{ label: "Full name", required: true }}>
                        <input type="text" name="fullname" id="fullname" />
                    </FormField>

                    <FormField obj={{ label: "Address", required: true }}>
                        <input type="text" name="address" id="address" />
                    </FormField>

                    <FormField obj={{ label: "Address - line 2" }}>
                        <input type="text" name="address2" id="address2" />
                    </FormField>

                    <div className="grid grid-cols-2 gap-6">
                        <FormField obj={{ label: "Zip code", required: true }}>
                            <input type="number" name="zip" id="zip" />
                        </FormField>

                        <FormField obj={{ label: "City", required: true }}>
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

                    <FormField obj={{ label: "Email", required: true }}>
                        <input type="email" name="email" id="email" />
                    </FormField>

                    <FormField obj={{ label: "Password", required: true }}>
                        <input type="password" name="password" id="password" />
                    </FormField>

                    <FormField obj={{ label: "Repeat password", required: true }}>
                        <input type="password" name="password2" id="password2" />
                    </FormField>

                    <div className="flex flex-col gap-4 *:flex *:gap-3 *:*:[&>span]:text-red-500 *:*:[&>span]:font-bold">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">
                                By using this form you agree with the storage and handling of your data by this website. <span>*</span>
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="marketing" id="marketing" />
                            <label htmlFor="marketing">
                                Accept marketing from HiFi Horizon (newsletter and discount offers by email). <span>*</span>
                            </label>
                        </div>
                    </div>

                    <StandardButton obj={{ text: "Create an account", form: "signupForm" }} />
                </form>
            </WhiteBox>
        </PageWrapper>
    )
}