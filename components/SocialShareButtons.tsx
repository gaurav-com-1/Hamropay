import { Twitter, Linkedin, Facebook } from 'lucide-react';

type SocialShareButtonsProps = {
  title: string;
  url: string;
};

export const SocialShareButtons = ({ title, url }: SocialShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      colorClass: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      colorClass: 'hover:text-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      colorClass: 'hover:text-[#0A66C2]'
    }
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-text-secondary">Share:</span>
      {shareLinks.map(link => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className={`text-gray-400 transition-colors ${link.colorClass}`}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
};