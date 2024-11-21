import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface AddProductFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onSubmit, onCancel }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Imagem do Produto */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Imagem do Produto
        </label>
        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mx-auto h-32 w-32 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 text-xs"
                >
                  ×
                </button>
              </div>
            ) : (
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
            )}
            <div className="flex text-sm text-gray-600">
              <label htmlFor="image-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500">
                <span>Upload uma imagem</span>
                <input
                  id="image-upload"
                  name="image-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG até 5MB</p>
          </div>
        </div>
      </div>

      {/* Informações Básicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome do Produto
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select
            id="category"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Selecione uma categoria</option>
            <option value="bolos">Bolos</option>
            <option value="cupcakes">Cupcakes</option>
            <option value="tortas">Tortas</option>
            <option value="doces">Doces</option>
          </select>
        </div>
      </div>

      {/* Preço e Estoque */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Preço (R$)
          </label>
          <input
            type="number"
            id="price"
            step="0.01"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Estoque
          </label>
          <input
            type="number"
            id="stock"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Peso (g)
          </label>
          <input
            type="number"
            id="weight"
            required
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Descrição */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          id="description"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      {/* Informações Nutricionais */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Informações Nutricionais</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="calories" className="block text-xs text-gray-500">
              Calorias (kcal)
            </label>
            <input
              type="number"
              id="calories"
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="protein" className="block text-xs text-gray-500">
              Proteínas (g)
            </label>
            <input
              type="number"
              id="protein"
              min="0"
              step="0.1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="carbs" className="block text-xs text-gray-500">
              Carboidratos (g)
            </label>
            <input
              type="number"
              id="carbs"
              min="0"
              step="0.1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="fat" className="block text-xs text-gray-500">
              Gorduras (g)
            </label>
            <input
              type="number"
              id="fat"
              min="0"
              step="0.1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Características */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Características</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="gluten_free"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="gluten_free" className="ml-2 text-sm text-gray-700">
              Sem Glúten
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="vegan"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="vegan" className="ml-2 text-sm text-gray-700">
              Vegano
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sugar_free"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="sugar_free" className="ml-2 text-sm text-gray-700">
              Sem Açúcar
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lactose_free"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="lactose_free" className="ml-2 text-sm text-gray-700">
              Sem Lactose
            </label>
          </div>
        </div>
      </div>

      {/* Métodos de Envio */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Métodos de Envio</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="delivery"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="delivery" className="ml-2 text-sm text-gray-700">
              Entrega a Domicílio
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pickup"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="pickup" className="ml-2 text-sm text-gray-700">
              Retirada na Loja
            </label>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
        >
          Adicionar Produto
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;