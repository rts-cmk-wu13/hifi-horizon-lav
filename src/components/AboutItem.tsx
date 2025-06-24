import ReactMarkdown from 'react-markdown';
import { MarkdownStyle } from '../utils/markdown-styling';

export type AboutItemData = {
    id: string;
    title: string;
    images: string;
    subtitle: string;
    body: string;
};

export type AboutItemProps = {
  data: AboutItemData;
  className?: string;
};

export default function AboutItem({ data, className }: AboutItemProps) {
  return (
    <section
      id={data.id}
      className={`flex flex-col-reverse gap-4 justify-center *:w-full lg:*:max-w-[520px] lg:gap-12 ${className ?? ""}`}
    >
      <div>
        <img src={data.images[0]} alt="" className="object-cover size-full" loading="lazy"/>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-bold">{data.title}</h2>
        <p className="text-hifi-accent text-sm">{data.subtitle}</p>
        <ReactMarkdown components={MarkdownStyle}>
          {data.body}
        </ReactMarkdown>
      </div>
    </section>
  );
}