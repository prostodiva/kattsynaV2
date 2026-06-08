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
    >
      <img
        src={isActive ? srcActive : src}
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-200 group-hover:scale-105"
      />
    </a>
  );
}
