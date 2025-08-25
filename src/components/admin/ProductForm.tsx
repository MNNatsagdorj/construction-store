import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Product, ProductCategory } from '../../types';

interface ProductFormProps {
  product?: Product;
  onSave: (product: Partial<Product>) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    unit: product?.unit || 'piece',
    category: product?.category || 'cement',
    image: product?.image || '',
    specifications: product?.specifications || [''],
    inStock: product?.inStock ?? true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addSpecification = () => {
    setFormData(prev => ({
      ...prev,
      specifications: [...prev.specifications, '']
    }));
  };

  const removeSpecification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.filter((_, i) => i !== index)
    }));
  };

  const updateSpecification = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      specifications: prev.specifications.map((spec, i) => i === index ? value : spec)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {product ? 'Бүтээгдэхүүн засах' : 'Шинэ бүтээгдэхүүн'}
            </h2>
            <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Бүтээгдэхүүний нэр *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Үнэ *
              </label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Нэгж
              </label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value as any }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
              >
                <option value="piece">Ширхэг</option>
                <option value="kg">Килограмм</option>
                <option value="bag">Уут</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категори
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as ProductCategory }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
              >
                <option value="exterior-facade">Гадна фасад</option>
                <option value="interior-finishing">Дотор заслын</option>
                <option value="quick-drying">Түргэн хатдаг</option>
                <option value="paint-coating">Өнгөлгөө</option>
                <option value="cement">Цемент</option>
                <option value="bricks">Тоосго</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Тайлбар
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Зураг URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Техникийн үзүүлэлтүүд
            </label>
            <div className="space-y-2">
              {formData.specifications.map((spec, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={spec}
                    onChange={(e) => updateSpecification(index, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-construction-brown focus:border-transparent"
                    placeholder="Техникийн үзүүлэлт"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpecification(index)}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addSpecification}
                className="text-construction-brown hover:text-construction-sand text-sm"
              >
                + Үзүүлэлт нэмэх
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="inStock"
              checked={formData.inStock}
              onChange={(e) => setFormData(prev => ({ ...prev, inStock: e.target.checked }))}
              className="h-4 w-4 text-construction-brown focus:ring-construction-brown border-gray-300 rounded"
            />
            <label htmlFor="inStock" className="ml-2 block text-sm text-gray-900">
              Нөөцөд байгаа
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Цуцлах
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-construction-brown text-white rounded-lg hover:bg-construction-sand"
            >
              {product ? 'Хадгалах' : 'Нэмэх'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
