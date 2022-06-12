import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

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
  const router = useRouter()
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <Link href="/">
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
        </Link>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {menu.map((el, i) => (
              <li key={i} className={styles.item}>
                <Link href={el.path} passHref>
                  <a
                    className={
                      router.pathname == el.path
                        ? `${styles.active}`
                        : `${styles.normallA}`
                    }
                  >
                    {el.link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div
            id={styles.hamburger6}
            className={`${styles.hamburger} ${toggle ? styles.isActive : ""}`}
            onClick={handleToggle}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
