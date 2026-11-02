import Link from 'next/link';
import Button from '@/components/Button';
import Section from '@/components/Section';

export default function NotFound() {
  return (
    <Section eyebrow="404" title="Page Not Found">
      <p className="text-lg text-[#52525B] dark:text-zinc-400 max-w-xl mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div>
        <Button variant="primary" href="/">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
