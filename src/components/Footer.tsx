import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bolos e Cupcakes</h3>
            <p className="text-gray-600">Bolos e cupcakes artesanais feitos com amor e ingredientes premium.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary-600">Sobre Nós</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-primary-600">Produtos</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary-600">Contato</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-primary-600">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Quadra 7 Conjunto F Lote 6</li>
              <li>Setor Sul (Gama), Brasília - DF</li>
              <li>Telefone: (61) 3384-5946</li>
              <li>Email: cotejipe@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Bolos e Cupcakes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;