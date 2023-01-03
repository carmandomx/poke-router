import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import AuthStatus from './AuthStatus';
type Props = {}

const Layout = (props: Props) => {
  return (
    <div className="App">
      <header className='App-header'>
        <AuthStatus />
        
        <ul>
            <li>
                <Link to="/" >Public Page</Link>
            </li>
            <li>
                <Link to="/protected"> Private Page </Link>
            </li>
        </ul>

        <main>
            <Outlet />
        </main>

      </header>
    </div>
  )
}

export default Layout;