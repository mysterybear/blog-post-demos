import { motion } from "framer-motion"
import React from "react"
import Header from "./header"
import styles from "./index.module.css"

export { default as Nav } from "./nav"
export { styles }

export const Viewport = props => (
  <div className={styles.viewport}>
    <div {...props} />
  </div>
)

export const Root = props => (
  <motion.header className={styles.root} {...props} />
)

export const Backdrop = props => (
  <motion.div className={styles.backdrop} {...props} />
)

export const Container = props => (
  <div className={styles.container} {...props} />
)

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = props => (
  <button {...props}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

export const Branding = () => (
  <div>
    <h1>Branding</h1>
  </div>
)

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
  </>
)
