import React from "react"
import styles from "./index.module.css"
import { Nav } from "../components"
import Link from "next/link"
import { motion } from "framer-motion"

export default () => {
  return (
    <div className={styles.root}>
      <div>
        <Nav />
      </div>
      <div>
        <Nav>{({ href, label, active }) => <p>Hi</p>}</Nav>
      </div>
      <div>
        <Nav>
          {({ href, label, active }, i) => (
            <motion.div
              key={href}
              initial={{ x: i % 2 === 0 ? -200 : 200 }}
              animate={{ x: 0, color: active ? "#FE1299" : "#000000" }}
            >
              <Link href={href}>
                <a>
                  {label}
                  {` ${active}`}
                </a>
              </Link>
            </motion.div>
          )}
        </Nav>
      </div>
      <div>
        <Nav>
          {({ href, label, active }, i) => (
            <motion.div
              key={href}
              initial={{ x: i % 2 === 0 ? 200 : -200 }}
              animate={{ x: 0, color: active ? "#000000" : "#9912FE" }}
            >
              <Link href={href}>
                <a>
                  {label}
                  {` ${active}`}
                </a>
              </Link>
            </motion.div>
          )}
        </Nav>
      </div>
    </div>
  )
}
