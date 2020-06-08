import { motion } from "framer-motion"
import React from "react"
import styles from "./index.module.css"

export { styles }

export const Root = props => (
  <motion.header className={styles.root} {...props} />
)

export const Backdrop = props => (
  <motion.div className={styles.backdrop} {...props} />
)

export const Container = props => (
  <div className={styles.container} {...props} />
)

export const Viewport = props => (
  <div className={styles.viewport}>
    <div {...props} />
  </div>
)

export { MenuToggle } from "./menu-toggle"
