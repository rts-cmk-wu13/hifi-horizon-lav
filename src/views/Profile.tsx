import { FaUser, FaPhoneAlt, FaEnvelope, FaPen } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import WhiteBox from "../components/WhiteBox"


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
}

const userDummy: userDummyType = {
	"id": 7,
	"email": "loke@test.dk",
	"name": "Loke",
	"address": "Roskildevej 187",
	"address2": "3. tv",
	"zip": "2500",
	"city": "København",
	"country": "Danmark",
	"phone": 52651653,
	"terms": false,
	"marketing": false
}

const userInfoSections = [
    {
        "id": "name",
        "title": "Name",
        "icon": <FaUser />
    },
    {
        "id": "phone",
        "title": "Phone number",
        "icon": <FaPhoneAlt />
    },
    {
        "id": "email",
        "title": "Mail",
        "icon": <FaEnvelope />
    },
    {
        "id": "address",
        "title": "Address",
        "icon": <FaLocationDot />
    }
]


export default function Profile() {

    return (
        <div className="p-hifi-default">
            <WhiteBox>
                <h2 className="mb-8 text-2xl font-semibold uppercase">Your Profile Information</h2>

                <ul>
                    {userInfoSections.map((info, i) => (
                        <li key={i} className="py-12 flex justify-between border-hifi-gray-light border-b-2 last:border-b-0">
                            <div className="flex gap-8">
                                <span className="text-4xl mt-1">
                                    {info.icon}
                                </span>

                                <div>
                                    <h3 className="font-bold">{info.title}</h3>
                                    <p>{userDummy[info.id as keyof typeof userDummy]}</p>
                                </div>
                            </div>

                            <button className="p-3.5 rounded border-2 border-hifi-gray-medium shadow-hifi-sm text-hifi-gray-dark text-lg cursor-pointer">
                                <FaPen />
                            </button>
                        </li>
                    ))}
                </ul>
            </WhiteBox>
        </div>
    )
}