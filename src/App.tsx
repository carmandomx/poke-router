import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import PublicPage from './components/PublicPage';
import { fakeFirebase } from './auth'
import RequireAuth from './components/RequireAuth';
import PrivatePage from './components/PrivatePage';

function App() {
  return (
      <AuthProvider>

        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<PublicPage />} />
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/protected' element={
              <RequireAuth>
                <PrivatePage />
              </RequireAuth>
            } />
          </Route>
        </Routes>
      </AuthProvider>

  );
}

export default App;

// HOC -> Higher Order Component
// Context API

interface IAuthContext {
  user: any;
  signIn: (user: string, cb: VoidFunction) => void;
  signOut: (cb: VoidFunction) => void;
}

let AuthContext = React.createContext<IAuthContext>(null!)

type AuthProviderProps = {
  children: React.ReactNode
}


function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);

  const signIn = (user: string, cb: VoidFunction) => {
    return fakeFirebase.signin(() => {
      setUser(user);
      cb();
    })
  }

  const signOut = (cb: VoidFunction) => {
    return fakeFirebase.signout(() => {

      setUser(null);
      cb();

    })
  }

  let value = {user, signIn, signOut};

  return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext);
}

