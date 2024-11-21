import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CreditCard, Truck, MapPin } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import { RootState } from '../store';
import { validateCard, getCardType } from '../utils/validateCard';
import PaymentSuccess from '../components/PaymentSuccess';

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<{
    orderNumber: string;
    pixCode?: string;
    boletoUrl?: string;
  } | null>(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cpf: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Nome é obrigatório'),
      lastName: Yup.string().required('Sobrenome é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      address: Yup.string().required('Endereço é obrigatório'),
      city: Yup.string().required('Cidade é obrigatória'),
      state: Yup.string().required('Estado é obrigatório'),
      zipCode: Yup.string().required('CEP é obrigatório'),
      cardNumber: Yup.string().when('paymentMethod', {
        is: 'credit',
        then: Yup.string()
          .required('Número do cartão é obrigatório')
          .test('valid-card', 'Cartão inválido', value => value ? validateCard(value) : false)
      }),
      expiryDate: Yup.string().when('paymentMethod', {
        is: 'credit',
        then: Yup.string()
          .required('Data de validade é obrigatória')
          .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Formato inválido (MM/AA)')
      }),
      cvv: Yup.string().when('paymentMethod', {
        is: 'credit',
        then: Yup.string()
          .required('CVV é obrigatório')
          .matches(/^[0-9]{3,4}$/, 'CVV inválido')
      }),
      cpf: Yup.string()
        .required('CPF é obrigatório')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    }),
    onSubmit: async (values) => {
      // Simulação de processamento do pedido
      const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
      
      if (paymentMethod === 'pix') {
        const pixCode = `00020126580014BR.GOV.BCB.PIX0136${orderNumber}520400005303986540${total.toFixed(2)}5802BR5913Bolos e Cakes6008Brasilia62070503***63041234`;
        setPaymentDetails({ orderNumber, pixCode });
      } else if (paymentMethod === 'boleto') {
        const boletoUrl = `https://exemplo.com/boleto/${orderNumber}`;
        setPaymentDetails({ orderNumber, boletoUrl });
      } else {
        setPaymentDetails({ orderNumber });
      }

      dispatch(clearCart());
      setShowSuccess(true);
    }
  });

  if (showSuccess && paymentDetails) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PaymentSuccess
            paymentMethod={paymentMethod as 'credit' | 'pix' | 'boleto'}
            orderNumber={paymentDetails.orderNumber}
            pixCode={paymentDetails.pixCode}
            boletoUrl={paymentDetails.boletoUrl}
          />
        </div>
      </div>
    );
  }

  const cardType = formik.values.cardNumber ? getCardType(formik.values.cardNumber) : null;

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Finalizar Compra</h1>
        
        <form onSubmit={formik.handleSubmit} className="space-y-8">
          {/* Endereço de Entrega */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Endereço de Entrega</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...formik.getFieldProps('firstName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Sobrenome
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...formik.getFieldProps('lastName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.lastName}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                  CPF
                </label>
                <input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  {...formik.getFieldProps('cpf')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.cpf && formik.errors.cpf && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.cpf}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Endereço
                </label>
                <input
                  id="address"
                  type="text"
                  {...formik.getFieldProps('address')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.address}</p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Cidade
                </label>
                <input
                  id="city"
                  type="text"
                  {...formik.getFieldProps('city')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.city}</p>
                )}
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <input
                  id="state"
                  type="text"
                  {...formik.getFieldProps('state')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.state && formik.errors.state && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.state}</p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  CEP
                </label>
                <input
                  id="zipCode"
                  type="text"
                  {...formik.getFieldProps('zipCode')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {formik.touched.zipCode && formik.errors.zipCode && (
                  <p className="mt-1 text-sm text-red-600">{formik.errors.zipCode}</p>
                )}
              </div>
            </div>
          </div>

          {/* Método de Entrega */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Método de Entrega</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="standard"
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={deliveryMethod === 'standard'}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <label htmlFor="standard" className="ml-3">
                  <span className="block text-sm font-medium text-gray-900">Entrega Padrão</span>
                  <span className="block text-sm text-gray-500">3-5 dias úteis - Grátis</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="express"
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={deliveryMethod === 'express'}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                />
                <label htmlFor="express" className="ml-3">
                  <span className="block text-sm font-medium text-gray-900">Entrega Expressa</span>
                  <span className="block text-sm text-gray-500">1-2 dias úteis - R$ 15,00</span>
                </label>
              </div>
            </div>
          </div>

          {/* Método de Pagamento */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Método de Pagamento</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-4">
                  <input
                    id="credit"
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <label htmlFor="credit" className="ml-3 block text-sm font-medium text-gray-700">
                    Cartão de Crédito
                  </label>
                </div>
                {paymentMethod === 'credit' && (
                  <div className="space-y-4 pl-7">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                        Número do Cartão
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          {...formik.getFieldProps('cardNumber')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                        {cardType && (
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                            {cardType}
                          </span>
                        )}
                      </div>
                      {formik.touched.cardNumber && formik.errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-600">{formik.errors.cardNumber}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                          Data de Validade
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          placeholder="MM/AA"
                          {...formik.getFieldProps('expiryDate')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                        {formik.touched.expiryDate && formik.errors.expiryDate && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.expiryDate}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          {...formik.getFieldProps('cvv')}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                        {formik.touched.cvv && formik.errors.cvv && (
                          <p className="mt-1 text-sm text-red-600">{formik.errors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    id="pix"
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <label htmlFor="pix" className="ml-3 block text-sm font-medium text-gray-700">
                    PIX
                  </label>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    id="boleto"
                    type="radio"
                    name="payment"
                    value="boleto"
                    checked={paymentMethod === 'boleto'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                  />
                  <label htmlFor="boleto" className="ml-3 block text-sm font-medium text-gray-700">
                    Boleto Bancário
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumo do Pedido</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="text-gray-900">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">Frete</span>
                  <span className="text-gray-900">
                    {deliveryMethod === 'express' ? 'R$ 15,00' : 'Grátis'}
                  </span>
                </div>
                <div className="flex justify-between mt-2 text-lg font-semibold">
                  <span>Total</span>
                  <span>
                    R$ {(total + (deliveryMethod === 'express' ? 15 : 0)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;