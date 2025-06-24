import { use, useEffect, useState } from "react";
import { Form, redirect, useLoaderData, useNavigate } from "react-router";
import { FaUser, FaPhoneAlt, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import WhiteBox from "../components/WhiteBox";
import StandardButton from "../components/StandardButton";
import type { CurrentUser } from "../schemas/schemas";
import { checkUserSession } from "../utils/helpers";

type userDummyType = {
    id: number;
    email: string;
    name: string;
    address: string;
    address2: string;
    zip: string;
    city: string;
    country: string;
    phone: number;
    terms: boolean;
    marketing: boolean;
};

const userDummy: userDummyType = {
    id: 7,
    email: "loke@test.dk",
    name: "Loke",
    address: "Roskildevej 187",
    address2: "3. tv",
    zip: "2500",
    city: "København",
    country: "Danmark",
    phone: 52651653,
    terms: false,
    marketing: false,
};

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
    
    const data = useLoaderData<CurrentUser>();
    console.log("user data: ", data);

    const [editFields, setEditFields] = useState(false);

    const handleEditFields = () => {
        setEditFields(!editFields);
    };

    return (
        <div className="p-hifi-default">
            <WhiteBox>
                <div className="flex justify-between items-start">
                    <h2 className="mb-8 text-2xl font-semibold uppercase">
                        Your Profile Information
                    </h2>

                    <div className="flex gap-4">
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
                    method="POST"
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
                                            <input
                                                type="text"
                                                name={info.id}
                                                id={info.id}
                                                defaultValue={String(
                                                    data[
                                                        info.id as keyof typeof data
                                                    ]
                                                )}
                                                className="px-3 w-full rounded-sm bg-hifi-gray-light shadow-hifi-sm focus:outline-0"
                                            />
                                        ) : editFields &&
                                          info.id === "marketing" ? (
                                            <select
                                                name="marketing"
                                                id="marketing"
                                                defaultValue={String(
                                                    data.marketing
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
                                                    : data[
                                                          info.id as keyof typeof data
                                                      ]}
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
                                func: handleEditFields,
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
