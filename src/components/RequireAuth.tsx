import React from 'react'
import { useAuth } from '../App'
import { Navigate, useLocation } from 'react-router-dom'
type Props = {

    children: JSX.Element // JSX.Element
}

const RequireAuth = ({ children }: Props) => {
    // Detectar si un usuario esta logueado
    //         True -> Debe acceder a la ruta definada
    //         False -> Debe de ser redirigido a la ruta /login

    const auth = useAuth();
    const location = useLocation();


    if (!auth.user) {
        return <Navigate to="/login" state={{from: location}} replace />
    }





  return children;
     
  
}

export default RequireAuth