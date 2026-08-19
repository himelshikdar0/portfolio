import ScrollReveal from './ScrollReveal';

interface Props {
  title: string;
  highlight?: string;
}

export default function SectionTitle({ title, highlight }: Props) {
  return (
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan mx-auto rounded-full" />
      </div>
    </ScrollReveal>
  );
}
