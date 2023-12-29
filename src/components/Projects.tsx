import { getAllProjects } from "../api/projects.api";

export function Projects() {
  const projects = getAllProjects();

  return (
    <div className="flex items-center justify-center pb-10" id="projects">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 dark:text-cyan-500 font-bold text-xl">
            Projects
          </h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 dark:text-white">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-5 md:p-8 text-center"
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.techs}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
