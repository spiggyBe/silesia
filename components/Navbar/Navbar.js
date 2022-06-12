import Link from "next/link"
import { useRouter } from "next/router"
import Logo from "../Logo/Logo"
import Hamburger from "../Hamburger/Hamburger"
import { menu } from "../../utils/menuData"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  const router = useRouter()

  return (
    <header className={styles.container}>
      <nav className={styles.navContainer}>
        <Logo titleLogo={"<silesiaSites/>"} />
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
