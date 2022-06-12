import Link from "next/link"
import Image from "next/image"
import styles from "./Logo.module.scss"

const Logo = ({ titleLogo }) => {
  return (
    <Link href="/" passHref>
      <div className={styles.logoPosition}>
        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo.webp"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            alt="logo silesia sites produkcja lepszych stron SEO"
            priority
          />
        </div>
        <span>{titleLogo}</span>
      </div>
    </Link>
  )
}

export default Logo
