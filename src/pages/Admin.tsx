import React, { useState } from 'react';
import { Package, Users, ShoppingBag, DollarSign, Plus } from 'lucide-react';
import Modal from '../components/Modal';
import AddProductForm from '../components/admin/AddProductForm';
import Dashboard from '../components/admin/Dashboard';

const Admin: React.FC = () => {
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de adição de produto aqui
    setIsAddProductModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
            <button
              onClick={() => setIsAddProductModalOpen(true)}
              className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Adicionar Produto
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard />
      </div>

      <Modal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        title="Adicionar Novo Produto"
      >
        <AddProductForm
          onSubmit={handleAddProduct}
          onCancel={() => setIsAddProductModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Admin;