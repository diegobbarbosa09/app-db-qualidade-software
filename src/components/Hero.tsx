import { motion } from "motion/react";
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaRocket, FaHandshake } from "react-icons/fa";

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero / Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-4 inline-block">
              Desenvolvimento & Qualidade de Software
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">
              DB Qualidade de Software
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed mb-8">
              Empresa dedicada ao desenvolvimento de sites de alta performance para pequenas empresas, unindo engenharia robusta e testes rigorosos de qualidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
              >
                Ver Portfólio
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium transition-all cursor-pointer"
              >
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        </div>

        {/* Missão e Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm relative group hover:border-zinc-700 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 text-xl">
              <FaRocket />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Missão</h3>
            <p className="text-zinc-400 leading-relaxed">
              Capacitar pequenas empresas a expandirem sua presença online e alcançarem o sucesso com plataformas digitais seguras, rápidas e eficientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm relative group hover:border-zinc-700 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 text-xl">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Visão</h3>
            <p className="text-zinc-400 leading-relaxed">
              Acreditamos no poder da internet como ferramenta essencial para impulsionar o crescimento e conectar empresas a seus clientes de forma significativa.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">Nossos Valores</h2>
            <p className="text-zinc-400">Os princípios que norteiam cada entrega do nosso trabalho</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Qualidade",
                desc: "Entregamos produtos e serviços de alta qualidade, sempre visando a total satisfação dos nossos clientes.",
                icon: <FaShieldAlt />,
              },
              {
                title: "Inovação",
                desc: "Buscamos constantemente novas ideias e soluções criativas alinhadas às tendências do mercado.",
                icon: <FaLightbulb />,
              },
              {
                title: "Satisfação do Cliente",
                desc: "Nossa principal prioridade é exceder as expectativas em todos os projetos desenvolvidos.",
                icon: <FaHandshake />,
              },
            ].map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:bg-zinc-900/60 transition-all"
              >
                <div className="text-blue-400 text-lg mb-4">{val.icon}</div>
                <h4 className="font-semibold text-white mb-2">{val.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">Diferenciais</h2>
            <p className="text-zinc-400">O que torna os nossos serviços únicos no mercado</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Atendimento Personalizado",
                desc: "Trabalhamos de perto com cada cliente para entender suas necessidades reais.",
              },
              {
                title: "Soluções Criativas",
                desc: "Designs modernos, funcionais e otimizados para conversão.",
              },
              {
                title: "Prazos Ágeis",
                desc: "Eficiência total na entrega dos projetos dentro dos prazos acordados.",
              },
            ].map((diff, idx) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-zinc-800/40 bg-zinc-950 flex items-start gap-4"
              >
                <span className="text-blue-500 mt-1"><FaCheckCircle /></span>
                <div>
                  <h5 className="font-semibold text-white mb-1">{diff.title}</h5>
                  <p className="text-zinc-400 text-sm">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}