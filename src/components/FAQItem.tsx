import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';

export type FAQItemData = {
    id: string;
    subtitle: string;
    body: string;
};

export type FAQItemProps = {
    data: FAQItemData;
};

export const MarkdownStyle: Components = {
    p: ({ node, ...props }) => (
        <p className="text-sm text-gray-700 leading-relaxed" {...props} />
    ),
    h1: ({ node, ...props }) => (
        <h1 className="text-3xl font-bold" {...props} />
    ),
    h2: ({ node, ...props }) => (
        <h2 className="text-2xl font-semibold" {...props} />
    ),
    h3: ({ node, ...props }) => (
        <h3 className="text-xl font-semibold" {...props} />
    ),
    h4: ({ node, ...props }) => (
        <h4 className="text-sm font-semibold -mb-3" {...props} />
    ),
    strong: ({ node, ...props }) => (
        <strong className="font-semibold text-gray-900" {...props} />
    ),
    ul: ({ node, ...props }) => (
        <ul className="list-disc pl-5 space-y-1" {...props} />
    ),
    li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
};

export default function FAQItem({ data }: FAQItemProps) {
    return (
        <section id={data.id} className="flex flex-col gap-4">
            <h3 className='text-xl font-bold uppercase'>{data.subtitle}</h3>
            <ReactMarkdown components={MarkdownStyle}>
                {data.body}
            </ReactMarkdown>
        </section>
    );
}