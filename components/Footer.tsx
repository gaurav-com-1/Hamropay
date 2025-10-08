type FooterProps = {
  dictionary: {
    copyright: string;
  };
};

export const Footer = ({ dictionary }: FooterProps) => {
  return (
    <footer className="bg-gray-100 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-text-secondary">
        <p>{dictionary.copyright}</p>
      </div>
    </footer>
  );
};