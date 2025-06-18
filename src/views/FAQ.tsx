import PageWrapper from "../components/PageWrapper"
import { useLoaderData } from "react-router";
import FAQItem, { type FAQItemData } from "../components/FAQItem";
import WhiteBox from "../components/WhiteBox";
import { useSmoothScrollToHash } from "../utils/helpers";

export default function FAQ() {
    const data = useLoaderData();
    useSmoothScrollToHash([data]); // <- re-run on loader data change always a fixed-length array

    return (
        <PageWrapper obj={{ heading: "FAQ" }}>
            <WhiteBox className="flex flex-col gap-4">
                <h2 className="text-2xl font-regular">{data.headline}</h2>
                <p className="text-sm text-gray-700 leading-relaxed"> {data.subheading}</p>

                {data.sections.map((obj: FAQItemData, index: number) => (
                    <FAQItem key={index} data={obj} />
                ))}
            </WhiteBox>
        </PageWrapper>
    )

}