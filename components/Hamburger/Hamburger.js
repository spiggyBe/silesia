import React, { useState } from "react"
import styles from "./Hamburger.module.scss"

const Hamburger = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className={styles.hamburger}>
      <div
        className={` ${toggle ? styles.isActive : ""}`}
        onClick={handleToggle}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  )
}

export default Hamburger
