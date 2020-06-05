import { motion } from "framer-motion"
import React, { useState } from "react"
import styles from "./index.module.css"
import Link from "next/link"
import theme from "tailwindcss/defaultTheme"

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

const Nav = props => (
  <nav {...props}>
    <Link href="/">Page One</Link>
    <Link href="/page-two">Page Two</Link>
  </nav>
)

const Branding = () => (
  <div>
    <h1>Branding</h1>
  </div>
)

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => void setOpen(p => !p)
  return (
    <Root animate={open ? "open" : "closed"} initial="closed">
      <Backdrop
        variants={{
          closed: {
            y: `calc(-100% + ${theme.spacing[12]})`,
          },
          open: {
            y: 0,
          },
        }}
        transition={{
          type: "spring",
          damping: 25,
          mass: 0.9,
          stiffness: 120,
        }}
      />
      <Container>
        <Branding />
        <MenuToggle onClick={toggleOpen} className={styles.menu} />
        {open && <Nav className={styles.navMobile} />}
        <Nav className={styles.navDesktop} />
      </Container>
    </Root>
  )
}

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
  </>
)
