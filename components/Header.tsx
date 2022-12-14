import React, {useContext, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from './../pages/contexts/AuthContext';
import Router from 'next/router'


const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  
    const { signIn, isAuthenticated } = useContext(AuthContext)

    useEffect(()=>{
      if(!isAuthenticated){
        Router.push('/auth');
      }
    })

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <Link href="/create">
        <a className="bold" data-active={isActive("/create")}>
          Cadastrar local
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
          
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
