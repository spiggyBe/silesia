import Link from "next/link"
import Image from "next/image"

import styles from "./Navbar.module.scss"

const menu = [
  {
    link: "silesia",
    path: "/",
  },
  {
    link: "oferta",
    path: "/oferta",
  },
  {
    link: "blog",
    path: "/blog",
  },
  {
    link: "kontakt",
    path: "/kontakt",
  },
]

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <Link href="/" passhref>
        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo.webp"
            width={100}
            height={100}
            alt="logo silesia sites produkcja lepszych stron SEO"
          />
        </div>
      </Link>
      <div>
        <ul className={styles.menuList}>
          {menu.map((el, i) => (
            <li key={i}>
              <Link href={el.path} passhref>
                <a>{el.link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
