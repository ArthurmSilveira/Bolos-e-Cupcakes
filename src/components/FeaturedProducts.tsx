import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: "Bolo de Baunilha",
    description: "Bolo clássico de baunilha com cobertura de buttercream",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1200,
    stock: 50
  },
  {
    id: 2,
    name: "Bolo de Chocolate",
    description: "Bolo de chocolate com ganache",
    price: 94.90,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1200,
    stock: 45
  },
  {
    id: 3,
    name: "Bolo de Morango",
    description: "Bolo de morango com cream cheese",
    price: 99.90,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1200,
    stock: 40
  },
  {
    id: 4,
    name: "Red Velvet",
    description: "Bolo Red Velvet com cream cheese",
    price: 109.90,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1500,
    stock: 10
  },
  {
    id: 5,
    name: "Bolo Trufado",
    description: "Bolo de chocolate com recheio trufado",
    price: 119.90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1600,
    stock: 8
  },
  {
    id: 6,
    name: "Frutas Vermelhas",
    description: "Bolo com recheio de frutas vermelhas",
    price: 104.90,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1500,
    stock: 12
  },
  {
    id: 7,
    name: "Bolo de Cenoura",
    description: "Bolo de cenoura com cobertura de chocolate",
    price: 84.90,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1200,
    stock: 15
  },
  {
    id: 8,
    name: "Bolo de Coco",
    description: "Bolo de coco com cobertura de beijinho",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1200,
    stock: 20
  },
  {
    id: 9,
    name: "Bolo de Limão",
    description: "Bolo de limão com cobertura de merengue",
    price: 94.90,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1200,
    stock: 18
  }
];

const categories = [
  { id: 'bolos', name: 'Bolos', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800' },
  { id: 'tortas', name: 'Tortas', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categorias */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Nossas Categorias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Produtos em Destaque */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;