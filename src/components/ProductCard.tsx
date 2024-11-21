import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Product } from '../types';
import Toast from './Toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = React.useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setShowToast(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-pink-600">R$ {product.price.toFixed(2)}</span>
            <button 
              onClick={handleAddToCart}
              className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
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
    </>
  );
};

export default ProductCard;