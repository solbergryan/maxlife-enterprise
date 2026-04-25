interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group">
      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
