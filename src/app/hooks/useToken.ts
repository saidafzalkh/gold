import { useState, useEffect } from 'react';

interface UseTokenReturn {
  token: string | null;
  setToken: (newToken: string) => void;
  removeToken: () => void;
}

function useToken(): UseTokenReturn {
  const key = 'token';

  // Initialize the token state from localStorage
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem(key);
  });

  // Function to set the token both in state and localStorage
  const setToken = (newToken: string) => {
    localStorage.setItem(key, newToken);
    setTokenState(newToken);
  };

  // Function to remove the token both from state and localStorage
  const removeToken = () => {
    localStorage.removeItem(key);
    setTokenState(null);
  };

  // Listen for storage changes (when the token is updated in another tab/window)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setTokenState(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return { token, setToken, removeToken };
}

export default useToken;
