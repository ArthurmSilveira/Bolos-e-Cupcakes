import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&q=80&w=1200&h=450",
    title: "Bolos Artesanais",
    description: "Feitos com amor e ingredientes selecionados"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=1200&h=450",
    title: "Bolos Especiais",
    description: "Para momentos únicos e memoráveis"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=1200&h=450",
    title: "Sabores Exclusivos",
    description: "Experimente nossas criações especiais"
  }
];

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary-50">
      <Carousel items={banners} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Bolos e Cakes Artesanais
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Descubra nossas delícias feitas com ingredientes premium e muito carinho
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
          >
            Ver Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;