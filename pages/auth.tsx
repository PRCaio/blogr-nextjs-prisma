import Head from 'next/head'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn, isAuthenticated } = useContext(AuthContext)


  async function handleSignIn(data) {
    await signIn(data)
    console.log(isAuthenticated)
  }

   

  return (
    <div className={styles.main}>
      <Head>
        <title>Signin</title>
      </Head>

      <div className={styles.container}>
        <div>
          
         <h2 className={styles.title}>Faça login</h2>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(handleSignIn)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className={styles.form}>
            <div>
              <label htmlFor="email-address" className={styles.email}>
                <p className={styles.email}>Email </p>
              </label>
              
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={styles.input}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
              <p className={styles.email}> Senha </p>
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={styles.input}
                placeholder="Password"
              />
            </div>
          </div>

          

          <div>
            <button
              type="submit"
              className={styles.submit}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className={styles.icone} aria-hidden="true" />
              </span>
              <a>Sign in</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
