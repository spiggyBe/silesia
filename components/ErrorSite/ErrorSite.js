import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import styles from "./ErrorSite.module.scss"

const ErrorSite = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace("/")
    }, 10000)
  })

  return (
    <main className={styles.imgWrapper}>
      <Image
        src="/images/logo-silesia-sites.svg"
        width={300}
        height={300}
        priority="lazy"
        alt="logo silesia sites produkcja lepszych stron internetowych SEO"
      />
      <h1>
        Produkcja lepszych SEO i samo-pozycjonujących się stron internetowych ze
        Śląska
      </h1>
      <h2>
        Jesteś na niezidentyfikowanej podstronie w domenie silesiasites.pl
      </h2>
      <h3>
        Strażnik kopalni duch skarbek za 10 sekund odeśle Cię na stronę główną
      </h3>
      <Link href="/" passhref>
        <button className={styles.redirectBtn}> Strona główna</button>
      </Link>
    </main>
  )
}

export default ErrorSite
