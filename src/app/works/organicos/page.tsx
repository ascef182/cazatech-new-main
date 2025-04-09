import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingBasket, FaLeaf, FaClock, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { SiStripe } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'FoodFarm - Template de Ecommerce Orgânico | CazaTech',
  description: 'Template demonstrativo de loja online de produtos orgânicos com design moderno e funcionalidades completas.',
};

const FoodFarmPage = () => {
  const projectData = {
    id: "organicos",
    title: "FoodFarm - Ecommerce Orgânico",
    category: "Template Demonstrativo",
    description: "Template completo para loja online de produtos orgânicos, com design moderno e todas as funcionalidades necessárias para um ecommerce de alimentos saudáveis.",
    image: "https://templatesjungle.com/wp-content/uploads/edd/2024/04/foodfarm-grocery-store-cover-1400x1050.jpg",
    overview: {
      client: "FoodFarm (Template)",
      role: "Ecommerce de Produtos Orgânicos",
      location: "Demonstração Online",
      services: ["Desenvolvimento FrontEnd", "UX Design", "Template Customizável"],
      year: "2024",
    },
    designSystem: {
      colors: ["#2e7d32", "#4caf50", "#b10105", "#f1f8e9", "#ffffff"],
      typography: {
        primary: "Montserrat (Sans-serif)",
        secondary: "Open Sans (Textos)",
      },
      principles: ["Foco na experiência do usuário", "Destaque para produtos", "Navegação intuitiva"],
    },
    features: [
      {
        icon: <FaShoppingBasket />,
        title: "Carrinho Inteligente",
        description: "Sistema de carrinho com atualização em tempo real"
      },
      {
        icon: <FaLeaf />,
        title: "Produtos Orgânicos",
        description: "Destaque para produtos saudáveis e sustentáveis"
      },
      {
        icon: <FaClock />,
        title: "Entrega Rápida",
        description: "Integração com sistema de entregas expressas"
      },
      {
        icon: <FaSearch />,
        title: "Busca Avançada",
        description: "Filtros por categorias e preferências alimentares"
      },
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript", "React"],
      plugins: ["Stripe (Pagamentos)", "SEO Otimizado"],
    },
    demoUrl: "https://ascef182.github.io/foodfarm-template/",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Compacta */}
<section className="relative bg-green-800 text-white py-12 md:py-16">
  <div className="absolute inset-0 bg-black/30 z-10" />
  <Image
    src="/images/Rustic Produce and Bread Arrangement.jpeg"
    alt="Padrão de folhas orgânicas"
    fill
    className="object-cover"
    priority
  />
  <div className="container mx-auto px-6 relative z-20">
    <div className="mb-4">
      <Link href="/works" className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm">
        <FaArrowLeft className="mr-2" />
        Voltar para Works
      </Link>
    </div>
    
    <div className="max-w-2xl">
      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs mb-3">
        {projectData.category}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {projectData.title}
      </h1>
      <p className="text-lg text-green-100 mb-6">
        {projectData.description}
      </p>
      <a
        href={projectData.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-green-800 px-5 py-2.5 rounded-lg font-medium hover:bg-green-50 transition-colors text-sm md:text-base"
      >
        Ver Demonstração Online
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
  </div>
</section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video w-full">
              <Image
                src={projectData.image}
                alt="Visualização do template FoodFarm"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Sobre este Template</h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Cliente
                </h3>
                <p className="text-lg">{projectData.overview.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Finalidade
                </h3>
                <p className="text-lg">{projectData.overview.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">
                  Disponibilidade
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
                Características Principais
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.overview.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
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
              <p className="mt-3 text-gray-600">Cores naturais que remetem a produtos orgânicos e frescos</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tipografia</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Títulos</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {projectData.designSystem.typography.primary}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Texto</p>
                  <p
                    className="text-lg"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {projectData.designSystem.typography.secondary}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Princípios de Design</h3>
              <ul className="space-y-3">
                {projectData.designSystem.principles.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600 mt-0.5"
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
            Funcionalidades do Template
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-green-50 p-6 rounded-xl hover:shadow-md transition-all border border-green-100"
              >
                <div className="text-3xl mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tecnologias Utilizadas
          </h2>

          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {projectData.technologies.frontend.map((tech, index) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Plugins & Integrações</h3>
              <div className="flex flex-wrap gap-3 items-center">
                {projectData.technologies.plugins.map((plugin, index) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg flex items-center">
                    {plugin.includes('Stripe') && <SiStripe className="mr-2 text-blue-500" />}
                    {plugin}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-green-700 text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-48 h-48 bg-green-400 rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-48 h-48 bg-lime-400 rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Pronto para lançar sua loja de produtos orgânicos?
            </h2>

            <p className="text-lg text-green-100 mb-8 max-w-xl mx-auto">
              Este template possui tudo que você precisa para começar seu ecommerce de alimentos saudáveis.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={projectData.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Demonstração Completa
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
                Personalizar para seu Negócio
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 text-green-200 text-sm">
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
                Design Responsivo
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
                Checkout Otimizado
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodFarmPage;