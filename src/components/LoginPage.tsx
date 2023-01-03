import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../App'

type Props = {}

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  return (
    <div>
      <button onClick={() => {

        auth.signIn('ITK', () => {
          navigate(from, { replace: true })
        })

      }}>
        Sign in!
      </button>
    </div>
  )
}

export default LoginPage