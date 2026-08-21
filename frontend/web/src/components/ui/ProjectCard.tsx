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
      // The carousel renders three copies of every project, and only the
      // centered one takes clicks — keep the rest out of the tab order too.
      tabIndex={isActive ? undefined : -1}
      aria-hidden={isActive ? undefined : true}
      className="block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-primary"
    >
      <img
        src={isActive ? srcActive : src}
        alt={title}
        // Native image dragging would fight the container's drag-to-scroll.
        draggable={false}
        className="w-full h-auto object-cover transition-transform duration-200 hover:scale-105"
      />
    </a>
  );
}
