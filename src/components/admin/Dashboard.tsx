import React, { useState, useEffect } from 'react';
import { Package, Users, ShoppingBag, DollarSign, Bell } from 'lucide-react';
import StatsCard from './StatsCard';
import ProductsTable from './ProductsTable';
import OrdersTable from './OrdersTable';
import Toast from '../Toast';

const Dashboard: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [lastOrderId, setLastOrderId] = useState<string | null>(null);

  const stats = [
    { title: 'Total de Pedidos', value: 156, Icon: ShoppingBag, color: 'bg-primary-100 text-primary-600' },
    { title: 'Clientes', value: 2451, Icon: Users, color: 'bg-blue-100 text-blue-600' },
    { title: 'Receita', value: 'R$ 12.345', Icon: DollarSign, color: 'bg-green-100 text-green-600' },
    { title: 'Produtos', value: 48, Icon: Package, color: 'bg-purple-100 text-purple-600' }
  ];

  const products = [
    {
      id: 1,
      name: "Sonho de Baunilha",
      price: 3.99,
      stock: 24,
      status: "Em Estoque"
    },
    {
      id: 2,
      name: "Delícia de Chocolate",
      price: 4.49,
      stock: 18,
      status: "Estoque Baixo"
    }
  ];

  const orders = [
    {
      id: "#12345",
      customer: "João Silva",
      date: "10/03/2024",
      status: "Entregue",
      total: 99.00
    },
    {
      id: "#12346",
      customer: "Maria Santos",
      date: "11/03/2024",
      status: "Em Processamento",
      total: 45.50
    }
  ];

  // Simula a chegada de novos pedidos
  useEffect(() => {
    const checkNewOrders = () => {
      // Simulação de novo pedido - em produção, isso seria uma chamada à API
      const mockNewOrder = {
        id: `#${Math.floor(Math.random() * 10000)}`,
        customer: "Cliente Novo",
        date: new Date().toLocaleDateString(),
        status: "Novo",
        total: Math.random() * 100
      };

      if (mockNewOrder.id !== lastOrderId) {
        setLastOrderId(mockNewOrder.id);
        playNotificationSound();
        setShowNotification(true);
      }
    };

    const interval = setInterval(checkNewOrders, 30000); // Verifica a cada 30 segundos
    return () => clearInterval(interval);
  }, [lastOrderId]);

  const playNotificationSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(error => {
      console.log('Erro ao reproduzir som:', error);
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Visão Geral do Painel</h1>
        <button
          className="relative p-2 text-gray-600 hover:text-primary-600 focus:outline-none"
          onClick={() => setShowNotification(false)}
        >
          <Bell className="h-6 w-6" />
          {showNotification && (
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
          )}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            Icon={stat.Icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pedidos Recentes</h2>
          <OrdersTable orders={orders} />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Visão Geral dos Produtos</h2>
          <ProductsTable 
            products={products}
            onEdit={(id) => console.log('Editar produto', id)}
            onDelete={(id) => console.log('Excluir produto', id)}
          />
        </div>
      </div>

      {showNotification && (
        <Toast
          message={`Novo pedido recebido! ID: ${lastOrderId}`}
          type="info"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;