import React, { Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext.jsx';

const Header = React.lazy(() => import('./components/Header.jsx'));
const About = React.lazy(() => import('./components/About.jsx'));
const Projects = React.lazy(() => import('./components/Projects.jsx'));
const Footer = React.lazy(() => import('./components/Footer.jsx'));

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-800 text-white p-4 w-full mt-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="flex-grow">
            <section id="about" className="py-10">
              <About />
            </section>
            <section id="project" className="py-10 bg-white">
              <Projects />
            </section>
          </main>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
