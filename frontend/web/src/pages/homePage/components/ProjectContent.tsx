import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";

function ProjectContent() {
  return (
      <div className="w-full flex flex-col gap-5 px-10 md:px-8 lg:px-10 2xl:px-16 p-10">
          <div className="grid grid-cols-1 gap-10">
            <h1 className="text-center md:mt-20 xl:mt-0 font-unitea font-bold text-3xl md:text-5xl xl:text-5xl 2xl:text-7xl text-text-primary">
              My Best Projects
            </h1>

          <div>
            <ProjectCard />
          </div>

          <div className="flex items-center justify-center mt-5">
            <Button variant="secondary" rounded className="w-full md:w-auto">
              Explore Projects
            </Button>
          </div>
        </div>
    </div>
  );
}
export default ProjectContent;
