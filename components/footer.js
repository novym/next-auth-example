import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer
      className={styles.footer}
    >
      <hr />
      <p>
        <strong>I am a footer, but I don't wear shoes!</strong>
      </p>
      <ul className={styles.navItems}>
      <li className={styles.navItem}><Link href="/"><a>Home</a></Link></li>
        <li className={styles.navItem}><Link href="/client"><a>Client</a></Link></li>
        <li className={styles.navItem}><Link href="/server"><a>Server</a></Link></li>
        <li className={styles.navItem}><Link href="/protected"><a>Protected</a></Link></li>
        <li className={styles.navItem}><Link href="/api-example"><a>API</a></Link></li>
        {/* <li className={styles.navItem}>
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className={styles.navItem}>
          <Link href="/policy">
            <a>Policy</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        </li> */}
      </ul>
    </footer>
  )
}
