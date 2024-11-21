import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Seção Hero */}
      <div className="relative bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Bolos e Cakes começou com uma paixão por criar bolos perfeitos. Desde 2010, 
              temos trazido sorrisos aos nossos clientes com produtos artesanais feitos com 
              os melhores ingredientes.
            </p>
          </div>
        </div>
      </div>

      {/* Seção Valores */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualidade Primeiro</h3>
              <p className="text-gray-600">Apenas os melhores ingredientes em nossos produtos</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Feito com Amor</h3>
              <p className="text-gray-600">Cada produto é preparado com carinho e atenção</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clientes Satisfeitos</h3>
              <p className="text-gray-600">Milhares de clientes satisfeitos e contando</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sempre Frescos</h3>
              <p className="text-gray-600">Produtos frescos todos os dias para o melhor sabor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Equipe */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Arthur Silveira"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Arthur Silveira</h3>
              <p className="text-gray-600">CEO Executivo</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Maria Santos"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Maria Santos</h3>
              <p className="text-gray-600">Chef de Confeitaria</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Ana Oliveira"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Ana Oliveira</h3>
              <p className="text-gray-600">Decoradora</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Contato */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Entre em Contato</h2>
          <form
            action="https://formsubmit.co/cotejipe@gmail.com"
            method="POST"
            className="bg-white rounded-lg shadow-md p-8"
          >
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_subject" value="Novo contato do site Bolos e Cakes" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;