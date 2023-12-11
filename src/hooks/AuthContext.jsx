import { useState, useEffect, createContext, useContext } from 'react'
import { supabase } from '../supabaseClient';

const AuthContext = createContext([{}, () => {}]);

const AuthContextProvider = ({ children }) => {
  const [ auth, setAuth ] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      setAuth(data.session?.access_token) 
      // ?. operator to prevent errror after log out.
    }
    fetchUser();
  }, [auth]);

  return (
    <AuthContext.Provider value={[ auth, setAuth ]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
