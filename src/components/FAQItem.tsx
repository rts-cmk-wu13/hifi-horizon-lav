import ReactMarkdown from 'react-markdown';
import { MarkdownStyle } from '../utils/markdown-styling';

export type FAQItemData = {
    id: string;
    subtitle: string;
    body: string;
};

export type FAQItemProps = {
    data: FAQItemData;
};

export default function FAQItem({ data }: FAQItemProps) {
    return (
        <section id={data.id} className="flex flex-col gap-4 text-pretty">
            <h3 className='text-xl font-bold uppercase'>{data.subtitle}</h3>
            <ReactMarkdown components={MarkdownStyle}>
                {data.body}
            </ReactMarkdown>
        </section>
    );
}