import { useSession, getSession, getCsrfToken, signOut } from 'next-auth/client'
import Layout from '../../components/layout'
import styles from '../../components/header.module.css'
export default function SignUp({ csrfToken }) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.
  const [session] = useSession();

  console.log('signup session:', session)

  return (
    <Layout>
      <h1>Sign UP</h1>
      <form method="post" action="/api/auth/signup">
        <div>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            <input
              style={{
                height: '2rem',
                padding: '.5rem',
                marginBottom: '2rem'
              }}
              type="text"
              name="email"
              id="email"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              style={{
                height: '2rem',
                padding: '.5rem'
              }}
              type="password"
              name="password"
              id="password"
            />
          </label>
        </div>
        <button
          className={styles.buttonPrimary}
          type="submit">
          Sign Up
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
      csrfToken: await getCsrfToken(context)
    }
  }
}