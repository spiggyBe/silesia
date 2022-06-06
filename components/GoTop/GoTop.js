import React, { useState, useEffect, useRef } from "react"
import { FaChevronUp } from "react-icons/fa"

import styles from "./GoTop.module.scss"

const GoTop = ({ scrollStepInPx, delayInMs }) => {
  const [thePosition, setThePosition] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true), { passive: true }
      } else {
        setThePosition(false), { passive: true }
      }
    })
  }, [])

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current)
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx)
  }

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs)
  }

  const renderGoTopIcon = () => {
    return (
      <>
        <div
          className={`${styles.goTop} ${thePosition ? "active" : ""}`}
          onClick={scrollToTop}
        >
          <FaChevronUp
            style={{
              color: "#fff",
              fontSize: "2rem",
              transform: "translateX(4%)",
            }}
          />
        </div>
      </>
    )
  }

  return <>{renderGoTopIcon()}</>
}

export default GoTop
