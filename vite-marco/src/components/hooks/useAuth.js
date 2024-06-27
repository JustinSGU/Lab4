import { useState } from 'react';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.100.6:8080/usuario/allUsuario');
      const data = await response.json();
      return data;
    } catch (error) {
      setError('Error fetching users');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (user, password) => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.100.6:8080/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error registering user');
      }
      return data;
    } catch (error) {
      setError('Error registering user');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchUsers,
    registerUser,
    loading,
    error
  };
}
