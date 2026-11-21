interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({ eyebrow, title, description, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <Tag className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </Tag>
      {description && <p className="mt-4 text-lg text-slate-400">{description}</p>}
    </div>
  );
}
