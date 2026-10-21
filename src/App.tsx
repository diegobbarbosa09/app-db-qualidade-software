import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { ProjectItem } from "./types/project";

export function App() {
  // Lista de projetos pronta para receber os dados dos seus READMEs
  const projectsList: ProjectItem[] = [];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Projects projectsList={projectsList} />
        <Contacts />
      </main>
      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-zinc-900">
        &copy; {new Date().getFullYear()} DB Qualidade de Software. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;