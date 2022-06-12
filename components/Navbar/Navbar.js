import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import Hamburger from "../Hamburger/Hamburger"

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

const titleLogo = "<silesiaSites/>"

const Navbar = () => {
  const router = useRouter()

  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <Link href="/">
          <div className={styles.logoPosition}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo.webp"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                alt="logo silesia sites produkcja lepszych stron SEO"
              />
            </div>
            <span>{titleLogo}</span>
          </div>
        </Link>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {menu.map((el, i) => (
              <li key={i} className={styles.item}>
                <Link href={el.path} passHref>
                  <a
                    className={
                      router.pathname == el.path
                        ? `${styles.activeLink}`
                        : `${styles.normallA}`
                    }
                  >
                    {el.link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Hamburger />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
