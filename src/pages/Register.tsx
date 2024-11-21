import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { User, Mail, Lock, Phone } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      cpf: '',
      birthDate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Nome é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas não conferem')
        .required('Confirmação de senha é obrigatória'),
      phone: Yup.string()
        .required('Telefone é obrigatório'),
      cpf: Yup.string()
        .required('CPF é obrigatório'),
      birthDate: Yup.date()
        .required('Data de nascimento é obrigatória'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Implementar lógica de registro aqui
      navigate('/login');
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{' '}
          <Link to="/login" className="font-medium text-pink-600 hover:text-pink-500">
            entrar na sua conta existente
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome completo
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                  className="pl-10 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="pl-10 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                CPF
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="cpf"
                  type="text"
                  {...formik.getFieldProps('cpf')}
                  className="pl-10 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.cpf && formik.errors.cpf && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.cpf}</p>
              )}
            </div>

            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                Data de Nascimento
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="birthDate"
                  type="date"
                  {...formik.getFieldProps('birthDate')}
                  className="focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.birthDate && formik.errors.birthDate && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.birthDate}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  {...formik.getFieldProps('phone')}
                  className="pl-10 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                  className="pl-10 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar senha
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  {...formik.getFieldProps('confirmPassword')}
                  className="pl-10 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;