import PageWrapper from "../components/PageWrapper"
import { useLoaderData, useLocation } from "react-router";
import FAQItem, { type FAQItemData } from "../components/FAQItem";
import WhiteBox from "../components/WhiteBox";
import { useEffect } from "react";
import usePageTitle, { scrollToHashElement } from "../utils/helpers";

export default function FAQ() {
  const data = useLoaderData();
  const location = useLocation(); // detect URL changes (incl. hash)

  usePageTitle("FAQ");

  useEffect(() => {
    if (!data) return;

    const timeout = setTimeout(() => {
      scrollToHashElement();
    }, 0);

    return () => clearTimeout(timeout);
  }, [data, location.hash]); // rerun whenever hash changes

  return (
    <PageWrapper obj={{ heading: "FAQ" }}>
      <WhiteBox className="flex flex-col gap-4">
        <h2 className="text-2xl font-regular max-w-[1040px]">{data.headline}</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.subheading}</p>

        {data.sections.map((obj: FAQItemData, index: number) => (
          <FAQItem key={index} data={obj} />
        ))}
      </WhiteBox>
    </PageWrapper>
  );
}