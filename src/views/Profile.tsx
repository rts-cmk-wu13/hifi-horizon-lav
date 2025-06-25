import { useEffect, useState } from "react";
import {
    Form,
    useActionData,
    useLoaderData,
    useNavigate,
    useNavigation,
    useRevalidator,
} from "react-router";
import { FaUser, FaPhoneAlt, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import WhiteBox from "../components/WhiteBox";
import StandardButton from "../components/StandardButton";
import type { CurrentUser, CurrentUserErrors } from "../schemas/schemas";
import {
    readFromSessionStorage,
    removeFromSessionStorage,
} from "../utils/localstorage";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const userInfoSections = [
    {
        id: "name",
        title: "Name",
        icon: <FaUser />,
    },
    {
        id: "phone",
        title: "Phone number",
        icon: <FaPhoneAlt />,
    },
    {
        id: "email",
        title: "Mail",
        icon: <FaEnvelope />,
    },
    {
        id: "address",
        title: "Address",
        icon: <FaLocationDot />,
    },
    {
        id: "marketing",
        title: "Marketing",
        icon: <FaInfoCircle />,
        body: "Marketing from HiFi Horizon (newsletter and discount offers by email).",
    },
];

export default function Profile() {
    const navigation = useNavigation();
    const actionData = useActionData();
    const revalidator = useRevalidator();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const success = actionData && "success" in actionData && actionData.success;
    const errors: CurrentUserErrors | null =
        actionData && !("success" in actionData)
            ? (actionData as CurrentUserErrors)
            : null;

    const loaderData = useLoaderData<CurrentUser>();
    const [userData, setUserData] = useState<CurrentUser>(loaderData);

    console.log("Profile loader data", loaderData);

    const [editFields, setEditFields] = useState(false);

    useEffect(() => {
        removeFromSessionStorage("redirectTo");
    }, []);

    useEffect(() => {
        const justLoggedIn = readFromSessionStorage("justLoggedIn");

        if (justLoggedIn === true) {
            removeFromSessionStorage("justLoggedIn");
            revalidator.revalidate();
        }
    }, []);

    useEffect(() => {
        if (navigation.state === "idle") {
            if (!success) {
                return; // Don't close on validation error
            }
            setEditFields(false);
        }
    }, [navigation.state, success]);

    useEffect(() => {
        if (success && actionData?.user) {
            setUserData((prev) => ({ ...prev, ...actionData.user }));
        }
    }, [success, actionData]);

    const handleEditFields = () => {
        setEditFields(!editFields);
    };

    const handleLogout = () => {
        logout();
        navigate("/")
        toast.success("You have been logged out successfully!", {
            className: "mt-24",
        });
    };

    return (
        <div className="p-hifi-default pt-32">
            <WhiteBox>
                <div className="flex justify-between items-start">
                    <h2 className="mb-8 text-2xl font-semibold uppercase">
                        Your Profile Information
                    </h2>

                    <div className="flex gap-4">
                        <StandardButton
                            obj={{ text: "Log out", func: handleLogout }}
                            className="bg-hifi-gray-dark"
                        />
                        <StandardButton
                            obj={{
                                text: editFields
                                    ? "Undo changes"
                                    : "Edit user information",
                                func: handleEditFields,
                            }}
                            className={
                                editFields
                                    ? "bg-hifi-gray-light text-hifi-black!"
                                    : ""
                            }
                        />
                    </div>
                </div>

                <Form
                    method="post"
                    noValidate
                    id="profileForm"
                    className="flex flex-col"
                >
                    <ul>
                        {userInfoSections.map((info, i) => (
                            <li
                                key={i}
                                className="py-8 flex justify-between border-hifi-gray-light border-b-2 last:border-b-0"
                            >
                                <div className="flex items-center gap-8 w-full">
                                    <span className="text-4xl">
                                        {info.icon}
                                    </span>

                                    <div className="w-full *:last:h-9">
                                        <h3 className="font-bold">
                                            {info.title}
                                        </h3>

                                        {editFields &&
                                        info.id !== "marketing" ? (
                                            <>
                                                <input
                                                    type="text"
                                                    name={info.id}
                                                    id={info.id}
                                                    defaultValue={String(
                                                        userData[
                                                            info.id as keyof typeof userData
                                                        ]
                                                    )}
                                                    className="px-3 w-full rounded-sm bg-hifi-gray-light shadow-hifi-sm focus:outline-0"
                                                />
                                                {errors?.[
                                                    info.id as keyof CurrentUserErrors
                                                ]?.errors?.[0] && (
                                                    <span className="text-red-600">
                                                        {String(
                                                            errors[
                                                                info.id as keyof CurrentUserErrors
                                                            ]?.errors?.[0]
                                                        )}
                                                    </span>
                                                )}
                                            </>
                                        ) : editFields &&
                                          info.id === "marketing" ? (
                                            <select
                                                name="marketing"
                                                id="marketing"
                                                defaultValue={String(
                                                    userData.marketing
                                                )}
                                                className="px-3 w-full rounded-sm bg-hifi-gray-light shadow-hifi-sm"
                                            >
                                                <option value="true">
                                                    Accept marketing from HiFi
                                                    Horizon (newsletter and
                                                    discount offers by email).
                                                </option>
                                                <option value="false">
                                                    Don't accept marketing from
                                                    HiFi Horizon (newsletter and
                                                    discount offers by email).
                                                </option>
                                            </select>
                                        ) : (
                                            <p className="content-center">
                                                {info.body
                                                    ? info.body
                                                    : String(
                                                          userData[
                                                              info.id as keyof typeof userData
                                                          ] ?? ""
                                                      )}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {editFields && (
                        <StandardButton
                            obj={{
                                text: "Save changes",
                                form: "profileForm",
                                type: "submit",
                            }}
                            className="self-end"
                        />
                    )}
                </Form>
            </WhiteBox>
        </div>
    );
}
