import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ProjectItem } from "../types/project";

interface ProjectsProps {
  projectsList?: ProjectItem[];
}

export function Projects({ projectsList = [] }: ProjectsProps) {
  const defaultProjects: ProjectItem[] = [
    {
      title: "Nexa Assistência",
      description: "Interface inicial para um sistema de assistência técnica com painel de demonstração e integração com Supabase Auth[cite: 18].",
      techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Motion", "Recharts", "Supabase"],
      imageUrl: "nexa.png",
    },
    {
      title: "Buldogue Guincho",
      description: "Migração de site institucional focado em serviços de guincho para uma estrutura moderna em React com configuração dinâmica de WhatsApp[cite: 19].",
      techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Lucide React"],
      imageUrl: "buldogue.png",
      liveUrl: "https://buldogue-guincho.vercel.app/",
    },
    {
      title: "Salões React",
      description: "Aplicação para consulta de profissionais e serviços, agendamentos inteligentes e sincronização de horários com o Google Calendar[cite: 20].",
      techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "Google Calendar API", "Vitest"],
      imageUrl: "saloes.png",
    },
    {
      title: "Simplesmente Amor Eventos",
      description: "Landing page para empresa de eventos com seção de depoimentos dinâmica integrada ao banco de dados Supabase[cite: 21].",
      techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase"],
      imageUrl: "simplesmente-amor.png",
      liveUrl: "https://simplesmenteamor-page.vercel.app",
    },
    {
      title: "SR Bolsas Femininas",
      description: "Aplicação de catálogo para bolsas e acessórios com painel administrativo completo, gerenciamento de estoque e pedidos via WhatsApp[cite: 22].",
      techs: ["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "Supabase Storage"],
      imageUrl: "sr-bolsas.png",
      liveUrl: "https://sr-bolsas-femininas.vercel.app/",
    },
  ];


  const items = projectsList.length > 0 ? projectsList : defaultProjects;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const currentProject = items[currentIndex];

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/60 bg-zinc-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Portfólio
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-3 text-white">Nossos Trabalhos</h2>
          <p className="text-zinc-400">
            Explore nossos projetos através do carrossel abaixo.
          </p>
        </div>

        {/* Container do Carrossel */}
        <div className="relative max-w-3xl mx-auto min-h-[520px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full rounded-2xl bg-zinc-900/50 border border-zinc-800 overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-sm group hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Imagem do Projeto */}
                {currentProject.imageUrl && (
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-zinc-950 relative border-b border-zinc-800/80">
                    <img
                      src={currentProject.imageUrl}
                      alt={`Preview do projeto ${currentProject.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Detalhes do Projeto */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {currentProject.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {currentProject.techs?.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links de Ação */}
              <div className="px-6 py-4 bg-zinc-900/90 border-t border-zinc-800/60 flex items-center justify-between">
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors"
                  >
                    <FiGithub size={18} /> Ver Código
                  </a>
                )}
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-medium transition-colors ml-auto"
                  >
                    <FiExternalLink size={18} /> Visitar Aplicação
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botão Anterior */}
          <button
            onClick={handlePrev}
            aria-label="Projeto Anterior"
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/80 border border-zinc-700 text-white flex items-center justify-center hover:bg-zinc-800 transition-all z-10 shadow-lg cursor-pointer"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={handleNext}
            aria-label="Próximo Projeto"
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/80 border border-zinc-700 text-white flex items-center justify-center hover:bg-zinc-800 transition-all z-10 shadow-lg cursor-pointer"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Ir para o projeto ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                  ? "w-8 bg-blue-500"
                  : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}