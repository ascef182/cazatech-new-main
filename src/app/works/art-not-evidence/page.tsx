import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaUserMd, FaCalendarAlt, FaQuoteLeft, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { TbEngine } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Dr. Eduardo Costa | Portfólio Profissional | CazaTech",
  description: "Plataforma moderna para apresentação do portfólio médico do Dr. Eduardo Costa.",
};

const EduardoCostaPage = () => {
  const projectData = {
    title: "Dr. Eduardo Costa - Portfólio Médico",
    category: "Portfólio Profissional",
    description: "Solução digital elegante para médicos apresentarem seu trabalho com credibilidade e sofisticação.",
    image: "/images/eduardo.png",
    overview: {
      client: "Dr. Eduardo Costa",
      role: "Médico Especialista",
      location: "São Paulo, SP",
      services: [
        "Desenvolvimento Web Completo",
        "Design de Interface Profissional",
        "Sistema de Agendamento"
      ],
      year: "2024",
    },
    designSystem: {
      colors: ["#1E3A8A", "#3B82F6", "#EFF6FF", "#FFFFFF"],
      typography: {
        primary: "Archivo (Sans-serif)",
        secondary: "Space Grotesk (Headings)",
      },
      principles: ["Credibilidade", "Clareza", "Profissionalismo"],
    },
    features: [
      {
        icon: <FaUserMd />,
        title: "Perfil Completo",
        description: "Currículo detalhado com formação e especializações"
      },
      {
        icon: <FaQuoteLeft />,
        title: "Depoimentos",
        description: "Avaliações verificadas de pacientes e colegas"
      },
      {
        icon: <FaCalendarAlt />,
        title: "Agendamento",
        description: "Sistema integrado para marcação de consultas"
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Localização",
        description: "Mapa interativo com local do consultório"
      },
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      integrations: ["Google Maps API", "Unreal Engine"],
    },
    demoUrl: "https://ascef182.github.io/Dr-Eduardo-Co0sta/",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-95 z-10" />
        <Image
          src="/images/Medical Glove Prep.jpeg"
          alt="Padrão médico abstrato"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <div className="mb-6">
            <Link href="/works" className="inline-flex items-center text-blue-200 hover:text-white transition-colors">
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
            Ver Plataforma Online
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
            <div className="relative aspect-video w-full bg-blue-50">
              <Image
                src={projectData.image}
                alt="Visualização da plataforma médica"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Visão Geral do Projeto</h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Cliente
                </h3>
                <p className="text-lg">{projectData.overview.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Atuação
                </h3>
                <p className="text-lg">{projectData.overview.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Localização
                </h3>
                <p className="text-lg">{projectData.overview.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Ano
                </h3>
                <p className="text-lg">{projectData.overview.year}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Serviços Prestados
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.overview.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Sistema de Design
          </h2>

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
              <p className="mt-3 text-gray-600">Cores profissionais que transmitem confiança médica</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tipografia</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Títulos</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {projectData.designSystem.typography.secondary}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Texto</p>
                  <p
                    className="text-lg"
                    style={{ fontFamily: "'Archivo', sans-serif" }}
                  >
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
                      className="w-5 h-5 mr-2 text-blue-600 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{principle}</span>
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Funcionalidades Principais
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl hover:shadow-md transition-all border border-blue-100"
              >
                <div className="text-3xl mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tecnologias Utilizadas
          </h2>

          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {projectData.technologies.frontend.map((tech, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                    {tech === "Bootstrap" && <SiBootstrap className="mr-2 text-purple-500" />}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Integrações</h3>
              <div className="flex flex-wrap gap-3">
                {projectData.technologies.integrations.map((integration, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                    {integration === "Google Maps API" && <FaMapMarkerAlt className="mr-2 text-red-500" />}
                    {integration === "Unreal Engine" && <TbEngine className="mr-2 text-gray-600" />}
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-blue-800 text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-48 h-48 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-blue-600 rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Pronto para elevar sua presença digital?
            </h2>

            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
              Esta plataforma é um exemplo do que podemos criar para profissionais da saúde.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={projectData.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Plataforma Online
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

              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Fale com nossos especialistas
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 text-blue-200 text-sm">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Design Profissional
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Tecnologia Avançada
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EduardoCostaPage;