import PageWrapper from "../components/PageWrapper"
import { useLoaderData } from "react-router";
import FAQItem, { type FAQItemData } from "../components/FAQItem";
import WhiteBox from "../components/WhiteBox";

export default function FAQ() {
    const data = useLoaderData();

    return (
        <PageWrapper obj={{ heading: "FAQ" }}>
            <WhiteBox className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{data.headline}</h2>
                <p> {data.headlineSubtext}</p>

                {data.sections.map((obj: FAQItemData, index: number) => (
                    <FAQItem key={index} data={obj} />
                ))}
            </WhiteBox>
        </PageWrapper>
    )

}