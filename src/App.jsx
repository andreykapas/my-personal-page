import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800 text-white p-4 w-full mt-auto">
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
    </div>
  );
}

export default App;
