import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      subject: Yup.string().required('Campo obrigatório'),
      message: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Implementar envio do formulário
    },
  });

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-600">Estamos aqui para atender você!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Quadra 7 Conjunto F Lote 6<br />
                      Setor Sul (Gama), Brasília - DF<br />
                      72415-106
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(61) 3384-5946</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
                    <p className="text-gray-600">cotejipe@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sábado: 9:00 - 18:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.89843880835837!2d-48.11869309871472!3d-15.844099899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcd07c0418605%3A0xb10f93b07c4f35be!2sTECIDOS%20SILVEIRA!5e0!3m2!1spt-BR!2sbr!4v1710814149767!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envie uma Mensagem</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...formik.getFieldProps('name')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...formik.getFieldProps('email')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...formik.getFieldProps('subject')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...formik.getFieldProps('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="mt-2 text-sm text-red-600">{formik.errors.message}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;