import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './header.module.css'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header () {
  const [ session, loading ] = useSession()

  return (
    <header
      style={{
        background: 'rgb(255 0 255 / 20%)',
        padding: '.5rem'
      }}
    >
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}><Link href="/"><a>Home</a></Link></li>
          <li className={styles.navItem}><Link href="/auth/signup"><a>Sign Up</a></Link></li>
          <li className={styles.navItem}><Link href="/auth/signin"><a>Sign In</a></Link></li>
          <li className={styles.navItem}><Link href="/client"><a>Client</a></Link></li>
          <li className={styles.navItem}><Link href="/server"><a>Server</a></Link></li>
          <li className={styles.navItem}><Link href="/protected"><a>Protected</a></Link></li>
          <li className={styles.navItem}><Link href="/api-example"><a>API</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
