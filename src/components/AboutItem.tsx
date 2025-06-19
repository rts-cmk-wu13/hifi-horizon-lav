import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';

export type AboutItemData = {
    id: string;
    title: string;
    img: string;
    subtitle: string;
    body: string;
};

export const MarkdownStyle: Components = {
    p: ({ node, ...props }) => (
        <p className="text-xs text-gray-700 leading-relaxed" {...props} />
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
        <h4 className="text-base font-semibold -mb-3" {...props} />
    ),
    strong: ({ node, ...props }) => (
        <strong className="font-semibold text-gray-900" {...props} />
    ),
    ul: ({ node, ...props }) => (
        <ul className="list-disc pl-5 space-y-1" {...props} />
    ),
    li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
};

export type AboutItemProps = {
  data: AboutItemData;
  className?: string;
};

export default function AboutItem({ data, className }: AboutItemProps) {
  return (
    <section id={data.id} className={`flex gap-12 *:w-full ${className ?? ""}`}>
      <div>
        <img src={data.img} alt="" className="object-cover h-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <p className="text-amber-400 font-semibold">{data.subtitle}</p>
        <ReactMarkdown components={MarkdownStyle}>
          {data.body}
        </ReactMarkdown>
      </div>
    </section>
  );
}