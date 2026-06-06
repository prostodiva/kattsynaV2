type ProjectCardProps = {
  title: string;
  src: string;
  url: string;
  srcActive?: string; 
  isActive?: boolean;
};

export default function ProjectCard({ title, src, url, srcActive, isActive }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-colors duration-300"
    >
      <img
        src={isActive ? srcActive : src}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-5">
        <h3 className="font-stack font-bold text-xl text-text-primary">{title}</h3>
      </div>
    </a>
  );
}
