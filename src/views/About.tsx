import PageWrapper from "../components/PageWrapper"
import AboutItem from "../components/AboutItem";
import { useLoaderData } from "react-router";
import { type AboutItemData } from "../components/AboutItem";
import WhiteBox from "../components/WhiteBox";

export default function About() {
    const data = useLoaderData();
    return (
        <PageWrapper obj={{ heading: "About us" }}>
            <WhiteBox className="flex flex-col gap-10">
                {data.map((obj: AboutItemData, index: number) => (
                    <AboutItem
                        key={index}
                        data={obj}
                        className={index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
                    />
                ))}
            </WhiteBox>
        </PageWrapper>
    )
}