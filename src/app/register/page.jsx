'use client';

import React, { useState } from 'react';
import { registerUser } from '../../services/api';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess('');

    const userData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    try {
      const response = await registerUser(userData);
      console.log(response.data);
      setSuccess('Registration successful!');
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data.message || 'Registration failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Registrasi</h2>
        <form onSubmit={handleSubmit}>
          {/* Input name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Input Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Input Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Input Password Confirmation */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirmation Password</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Submit button and error message */}
          <div className="flex items-center justify-between">
            <button type='submit' className='bg-blue-500 hove:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'>Register</button>
          </div>
          {error && <p className='text-red-500 text-center text-sm mt-4'>{error}</p>}
          {success && <p className='text-green-500 text-center text-sm mt-4'>{success}</p>}
        </form>
      </div>
    </div>
  );
}
