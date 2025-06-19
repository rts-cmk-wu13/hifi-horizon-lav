import PageWrapper from "../components/PageWrapper"
import AboutItem from "../components/AboutItem";
import { useLoaderData } from "react-router";
import { type AboutItemData } from "../components/AboutItem";

export default function About() {
    const data = useLoaderData();
    return (
        <PageWrapper obj={{ heading: "Our History" }}>
            <div className="flex flex-col gap-4 p-8">
                {data.map((obj: AboutItemData, index: number) => (
                    <AboutItem key={index} data={obj} />
                ))}
            </div>
        </PageWrapper>
    )
}