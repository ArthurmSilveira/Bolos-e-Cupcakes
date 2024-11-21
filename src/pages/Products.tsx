import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const products: Product[] = [
  // Cupcakes
  {
    id: 1,
    name: "Cupcake de Baunilha",
    description: "Cupcake clássico de baunilha com cobertura de buttercream",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: true,
    weight: 120,
    stock: 50
  },
  {
    id: 2,
    name: "Cupcake de Chocolate",
    description: "Cupcake de chocolate com ganache",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: true,
    weight: 120,
    stock: 45
  },
  {
    id: 3,
    name: "Cupcake de Morango",
    description: "Cupcake de morango com cream cheese",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: true,
    weight: 120,
    stock: 40
  },
  {
    id: 4,
    name: "Cupcake Red Velvet",
    description: "Cupcake Red Velvet com cobertura de cream cheese",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: false,
    weight: 120,
    stock: 35
  },
  {
    id: 5,
    name: "Cupcake de Limão",
    description: "Cupcake de limão com cobertura de merengue",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: false,
    weight: 120,
    stock: 30
  },
  {
    id: 6,
    name: "Cupcake de Cenoura",
    description: "Cupcake de cenoura com cobertura de chocolate",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: false,
    weight: 120,
    stock: 25
  },
  {
    id: 7,
    name: "Cupcake de Coco",
    description: "Cupcake de coco com cobertura de beijinho",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: false,
    weight: 120,
    stock: 20
  },
  {
    id: 8,
    name: "Cupcake de Nutella",
    description: "Cupcake recheado e coberto com Nutella",
    price: 11.90,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: false,
    weight: 120,
    stock: 15
  },
  {
    id: 9,
    name: "Cupcake de Frutas Vermelhas",
    description: "Cupcake com recheio e cobertura de frutas vermelhas",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&q=80&w=800",
    category: "Cupcakes",
    featured: false,
    weight: 120,
    stock: 10
  },
  // Bolos
  {
    id: 10,
    name: "Bolo de Chocolate",
    description: "Bolo de chocolate com recheio e cobertura de brigadeiro",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1500,
    stock: 10
  },
  {
    id: 11,
    name: "Bolo Red Velvet",
    description: "Bolo Red Velvet com recheio e cobertura de cream cheese",
    price: 99.90,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1500,
    stock: 8
  },
  {
    id: 12,
    name: "Bolo de Morango",
    description: "Bolo recheado com creme e morangos frescos",
    price: 94.90,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: true,
    weight: 1500,
    stock: 12
  },
  {
    id: 13,
    name: "Bolo de Cenoura",
    description: "Bolo de cenoura com cobertura de chocolate",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: false,
    weight: 1200,
    stock: 15
  },
  {
    id: 14,
    name: "Bolo de Coco",
    description: "Bolo de coco com cobertura de beijinho",
    price: 84.90,
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: false,
    weight: 1200,
    stock: 20
  },
  {
    id: 15,
    name: "Bolo de Limão",
    description: "Bolo de limão com cobertura de merengue",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: false,
    weight: 1200,
    stock: 18
  },
  {
    id: 16,
    name: "Bolo Trufado",
    description: "Bolo de chocolate com recheio trufado",
    price: 109.90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: false,
    weight: 1600,
    stock: 6
  },
  {
    id: 17,
    name: "Bolo de Nozes",
    description: "Bolo de nozes com cobertura de doce de leite",
    price: 99.90,
    image: "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: false,
    weight: 1400,
    stock: 8
  },
  {
    id: 18,
    name: "Bolo de Frutas",
    description: "Bolo recheado com creme e mix de frutas",
    price: 94.90,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
    category: "Bolos",
    featured: false,
    weight: 1500,
    stock: 10
  }
];

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'todos');

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nossos Produtos</h1>

        {/* Filtro de Categorias */}
        <div className="mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'todos'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedCategory('cupcakes')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'cupcakes'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              Cupcakes
            </button>
            <button
              onClick={() => setSelectedCategory('bolos')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'bolos'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              Bolos
            </button>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;