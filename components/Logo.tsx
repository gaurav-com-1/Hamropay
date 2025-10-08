import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  lang: string;
  part1: string;
  part2: string;
};

export const Logo = ({ lang, part1, part2 }: LogoProps) => {
  return (
    <Link href={`/${lang}`} className="flex items-center gap-3">
      <div className="bg-white p-2 rounded-full shadow-md">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} />
      </div>
      <span className="text-xl font-bold tracking-tight whitespace-nowrap">
        <span className="text-primary">{part1}</span>
        <span className="text-toggle-red">{part2}</span>
      </span>
    </Link>
  );
};