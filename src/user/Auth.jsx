import React, { useState } from 'react';
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      onClose();
      toast.success('¡Inicio de sesión exitoso!');
    } else {
      console.error('Error en el inicio de sesión');
      toast.error('Error en el inicio de sesión');
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const user = {
      user: { email, password, password_confirmation: passwordConfirmation },
    };

    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      toast.success('¡Registro exitoso! Por favor, inicia sesión.');
      setIsLogin(true); // Cambia el estado para mostrar el formulario de inicio de sesión
    } else {
      console.error('Error en el registro');
      toast.error('Error en el registro');
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="max-w-sm w-full p-6 bg-white rounded-md shadow-lg">
        <IconButton
            onClick={onClose}
            style={{ right: -310, top: -12, color: '#dd8ea4' }} 
          >
            <CloseIcon />
          </IconButton>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {isLogin ? 'Iniciar Sesión' : 'Registro'}
            </h2>
            <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
              <div className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="passwordConfirmation"
                        className="sr-only"
                      >
                        Confirmación de Contraseña
                      </label>
                      <input
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder="Confirmación de Contraseña"
                        value={passwordConfirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                      />
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {isLogin ? 'Iniciar Sesión' : 'Registrar'}
                  </button>
                </div>
                <div className="text-sm text-center">
                  {isLogin ? (
                    <p>
                      ¿No tienes una cuenta?{' '}
                      <button
                        type="button"
                        className="font-medium text-blue-600 hover:text-blue-500"
                        onClick={() => setIsLogin(false)}
                      >
                        Regístrate
                      </button>
                    </p>
                  ) : (
                    <p>
                      ¿Ya tienes una cuenta?{' '}
                      <button
                        type="button"
                        className="font-medium text-blue-600 hover:text-blue-500"
                        onClick={() => setIsLogin(true)}
                      >
                        Inicia Sesión
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Auth;
