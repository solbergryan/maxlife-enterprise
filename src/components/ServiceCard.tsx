import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const content = (
    <>
      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group block">
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group">
      {content}
    </div>
  );
}
