const projects = [
  {
    name: 'Project 1',
    link: 'https://github.com/andreykapas/word-analytics',
  },
  {
    name: 'Project 2',
    link: 'https://github.com/andreykapas/my-personal-page',
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Projects
        </h2>
        <ul className="space-y-4">
          {projects.map((p, index) => (
            <li
              key={index}
              className="border-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
              >
                {p.name} - View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
