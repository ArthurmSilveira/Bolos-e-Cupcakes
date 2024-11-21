import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart, Heart } from 'lucide-react';
import { addToCart } from '../store/slices/cartSlice';
import Toast from '../components/Toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const [showToast, setShowToast] = React.useState(false);

  // Mock product data (em um app real, isso viria de uma API)
  const product = {
    id: 1,
    name: "Sonho de Baunilha",
    description: "Nosso cupcake clássico de baunilha é feito com baunilha de Madagascar premium e coberto com um creme de manteiga suave e sedoso. Cada mordida é um equilíbrio perfeito entre bolo leve e fofo e cobertura cremosa e rica.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=800",
    category: "Clássicos",
    featured: true
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setShowToast(true);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl text-pink-600 font-semibold mb-6">R$ {product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-md hover:border-pink-600 hover:text-pink-600 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <Toast
          message="Produto adicionado ao carrinho!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;