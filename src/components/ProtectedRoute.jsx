import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('redglowAdmin');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const isAuthenticated = localStorage.getItem('redglowAdmin');
  
  if (!isAuthenticated) {
    return null;
  }

  return children;
}