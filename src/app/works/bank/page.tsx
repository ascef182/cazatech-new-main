import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  FaCreditCard, 
  FaShieldAlt, 
  FaRocket, 
  FaMobileAlt,
  FaArrowLeft
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiGreensock } from "react-icons/si";

export const metadata: Metadata = {
  title: "HooBank - Solução de Pagamentos Moderna | CazaTech",
  description: "Landing page premium para serviços financeiros com design inovador e alta performance.",
};

const HoobankPage = () => {
  const primaryColor = "#48cedb";
  const primaryDark = "#3aa8b8";
  
  const projectData = {
    title: "HooBank - Plataforma Financeira",
    category: "Fintech",
    description: "Solução digital premium para serviços bancários modernos com foco em experiência do usuário e segurança.",
    image: "/images/Payment.png",
    overview: {
      client: "HooBank",
      role: "Plataforma de Pagamentos Digital",
      location: "Solução Global",
      services: ["Web Design Premium", "Desenvolvimento Frontend", "Otimização de Performance"],
      year: "2024",
    },
    designSystem: {
      colors: [primaryColor, "#333333", "#777777", "#F9FAFB"],
      typography: {
        primary: "Inter (Textos)",
        secondary: "Manrope (Títulos)",
      },
      principles: ["Minimalismo", "Confiança", "Performance"],
    },
    features: [
      {
        icon: <FaCreditCard />,
        title: "Pagamentos Seguros",
        description: "Tecnologia avançada de criptografia"
      },
      {
        icon: <FaShieldAlt />,
        title: "Segurança",
        description: "Proteção de dados de última geração"
      },
      {
        icon: <FaRocket />,
        title: "Performance",
        description: "Carregamento ultrarrápido"
      },
      {
        icon: <FaMobileAlt />,
        title: "Responsivo",
        description: "Experiência perfeita em todos dispositivos"
      },
    ],
    technologies: {
      frontend: ["Next.js 14", "React 18", "Tailwind CSS"],
      integrations: ["GSAP Animations", "API de Pagamentos"],
    },
    demoUrl: "https://hoobank-app-pi.vercel.app/",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section com nova cor */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src="/images/Modern Credit Card Close-Up.jpeg"
          alt="Background abstrato financeiro"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <div className="mb-6">
            <Link 
              href="/works" 
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Voltar para Works
            </Link>
          </div>
          
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm mb-4">
            {projectData.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            {projectData.title}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            {projectData.description}
          </p>
          <a
            href={projectData.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Ver Demonstração
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>
      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="relative aspect-video w-full" style={{ backgroundColor: `${primaryColor}10` }}>
              <Image
                src={projectData.image}
                alt="Visualização da plataforma HooBank"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Visão Geral</h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Cliente</h3>
                <p className="text-lg">{projectData.overview.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Tipo</h3>
                <p className="text-lg">{projectData.overview.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Localização</h3>
                <p className="text-lg">{projectData.overview.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">Ano</h3>
                <p className="text-lg">{projectData.overview.year}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Serviços</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.overview.services.map((service, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: `${primaryColor}20`,
                      color: primaryDark
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sistema de Design</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Paleta de Cores</h3>
              <div className="flex flex-wrap gap-3">
                {projectData.designSystem.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-lg shadow-sm border border-gray-200"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tipografia</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Títulos</p>
                  <p className="text-2xl font-bold" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {projectData.designSystem.typography.secondary}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Texto</p>
                  <p className="text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {projectData.designSystem.typography.primary}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Princípios</h3>
              <ul className="space-y-3">
                {projectData.designSystem.principles.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 mr-2 mt-0.5" 
                      style={{ color: primaryColor }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl hover:shadow-md transition-all border"
                style={{
                  backgroundColor: `${primaryColor}08`,
                  borderColor: `${primaryColor}20`
                }}
              >
                <div 
                  className="text-3xl mb-4"
                  style={{ color: primaryColor }}
                >
                  {feature.icon}
                </div>
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: primaryDark }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Tecnologias</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {projectData.technologies.frontend.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-lg flex items-center gap-2"
                    style={{
                      backgroundColor: `${primaryColor}10`,
                      color: primaryDark
                    }}
                  >
                    {tech === "Next.js 14" && <SiNextdotjs className="text-black" />}
                    {tech === "React 18" && <SiReact className={tech === "React 18" ? "text-[#61DAFB]" : ""} />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Integrações</h3>
              <div className="flex flex-wrap gap-3">
                {projectData.technologies.integrations.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-lg flex items-center gap-2"
                    style={{
                      backgroundColor: `${primaryColor}10`,
                      color: primaryDark
                    }}
                  >
                    {tech === "GSAP Animations" && <SiGreensock className="text-green-600" />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 text-white bg-gray-900">
  {/* Efeitos de fundo modernos */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Padrão geométrico sutil */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dots-pattern.svg')]"></div>
    </div>
    
    {/* Efeitos de luz */}
    <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#48cedb] opacity-10 mix-blend-screen filter blur-[80px]"></div>
    <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-[#3aa8b8] opacity-10 mix-blend-screen filter blur-[80px]"></div>
  </div>

  {/* Conteúdo */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#48cedb] to-[#3aa8b8]">
        Pronto para revolucionar seus pagamentos?
      </h2>
      
      <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
        Esta solução combina design premium com tecnologia de ponta para serviços financeiros.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Botão primário com gradiente */}
        <a
          href={projectData.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#48cedb] to-[#3aa8b8] hover:from-[#3aa8b8] hover:to-[#48cedb] text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-[#48cedb]/20"
        >
          Ver Demonstração
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* Botão secundário com borda luminosa */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center border border-[#48cedb] text-[#48cedb] hover:bg-[#48cedb]/10 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(72,206,219,0.3)]"
        >
          Fale com Especialistas
        </a>
      </div>

      {/* Elementos decorativos */}
      <div className="mt-12 flex justify-center space-x-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="w-2 h-2 rounded-full bg-[#48cedb] opacity-30"></div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default HoobankPage;