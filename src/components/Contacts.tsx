import { motion } from "motion/react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export function Contacts() {
  // Configuração do WhatsApp
  const phone = "5511960702061"; // Insira aqui o seu número com DDD (apenas números)
  const defaultMessage = "Olá! Gostaria de saber mais sobre o desenvolvimento de sites e serviços da DB Qualidade de Software.";
  
  // Link formatado para o WhatsApp API
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact" 
      className="py-24 border-t border-zinc-800/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Contato
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-3 text-white">Vamos conversar?</h2>
          <p className="text-zinc-400">
            Entre em contato para transformar a presença digital da sua empresa ou solicitar um orçamento.
          </p>
        </div>

        {/* Card de Canais de Contato */}
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm text-center shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-white">Fale Conosco</h3>
          
          <div className="flex flex-col gap-4">
            {/* Botão do WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <FaWhatsapp size={22} />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Botão do Instagram */}
            <a
              href="https://www.instagram.com/db_qualidade_software?igsh=MWtob29qaDd2cm9zaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-medium shadow-lg hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              <FaInstagram size={22} />
              <span>Instagram Oficial</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}