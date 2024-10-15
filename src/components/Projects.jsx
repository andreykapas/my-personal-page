import { useEffect, useState } from 'react';
import fetch from 'cross-fetch';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/projects');
        const data = await res.json();
        console.log('Projects data:', data); // Добавляем отладочный вывод
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Projects
        </h2>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li
              key={p.id}
              className={`project-card border p-4 sm:p-6 rounded-lg shadow-md
                          hover:shadow-lg transition-shadow duration-300
                          hover:scale-105`}
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-500 hover:text-blue-700 font-semibold
                            text-base md:text-lg transition-colors duration-300
                            ease-in-out`}
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
