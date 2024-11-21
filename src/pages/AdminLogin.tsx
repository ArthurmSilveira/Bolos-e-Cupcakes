import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Lock, Mail, ShieldCheck } from 'lucide-react';
import { setCredentials } from '../store/slices/authSlice';
import { RootState } from '../store';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  // Redirect if already authenticated as admin
  useEffect(() => {
    if (isAuthenticated && user?.role === 'admin') {
      const from = (location.state as any)?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, user, navigate, location]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      code: '', // Código de autenticação de dois fatores
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      password: Yup.string()
        .required('Senha é obrigatória')
        .min(8, 'A senha deve ter pelo menos 8 caracteres'),
      code: Yup.string()
        .required('Código de autenticação é obrigatório')
        .length(6, 'O código deve ter 6 dígitos'),
    }),
    onSubmit: (values) => {
      // Simulação de login bem-sucedido
      // Em um ambiente real, isso seria uma chamada à API
      dispatch(setCredentials({
        user: {
          id: 1,
          name: 'Admin',
          email: values.email,
          role: 'admin'
        },
        token: 'fake-jwt-token'
      }));

      // Redireciona para a página tentada anteriormente ou para o dashboard
      const from = (location.state as any)?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <ShieldCheck className="h-12 w-12 text-primary-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Área Administrativa
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Acesso restrito a administradores autorizados
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail Administrativo
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="pl-10 focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
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
                  className="pl-10 focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Código de Autenticação
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShieldCheck className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="code"
                  type="text"
                  maxLength={6}
                  placeholder="Digite o código de 6 dígitos"
                  {...formik.getFieldProps('code')}
                  className="pl-10 focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {formik.touched.code && formik.errors.code && (
                <p className="mt-2 text-sm text-red-600">{formik.errors.code}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Acessar Painel Administrativo
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Precisa de ajuda? Entre em contato com o suporte
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;