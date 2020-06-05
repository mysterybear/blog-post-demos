import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import theme from "tailwindcss/defaultTheme"
import styles from "./index.module.css"
import { useRouter } from "next/router"

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

const Branding = () => (
  <div>
    <h1>Branding</h1>
  </div>
)

const links = [
  { href: "/", label: "Page One" },
  { href: "/page-two", label: "Page Two" },
]

const NavLink = ({ children, href, label, ...props }) => {
  const { pathname } = useRouter()
  const pathBeginning = `/${pathname.split("/")[1]}`
  const active = pathBeginning === href
  return children ? (
    children({ href, label, active, ...props })
  ) : (
    <Link key={href} href={href} {...props}>
      <a>{label}</a>
    </Link>
  )
}
const Nav = ({ children, ...props }) => {
  return (
    <motion.nav {...props}>
      {links.map(linkProps => (
        <NavLink key={linkProps.href} children={children} {...linkProps} />
      ))}
    </motion.nav>
  )
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => void setOpen(p => !p)
  const transition = {
    type: "spring",
    damping: 25,
    mass: 0.9,
    stiffness: 120,
  }

  return (
    <Root animate={open ? "open" : "closed"} initial="closed">
      <Backdrop
        variants={{
          closed: {
            y: `calc(-100% + ${theme.spacing[12]})`,
            transition: {
              ...transition,
              delay: 0.6,
            },
          },
          open: {
            y: 0,
            transition,
          },
        }}
        data-open={open}
      />
      <Container>
        <Branding />
        <MenuToggle onClick={toggleOpen} className={styles.menu} />
        <AnimatePresence>
          {open && (
            <Nav
              className={styles.navMobile}
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.5,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.3,
                    staggerDirection: -1,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {({ href, label, active }) => (
                <motion.div
                  initial="closed"
                  variants={{
                    open: {
                      opacity: 1,
                    },
                    closed: {
                      opacity: 0,
                    },
                  }}
                  onClick={() => void setOpen(false)}
                >
                  <Link href={href}>
                    <a data-active={active}>{label}</a>
                  </Link>
                </motion.div>
              )}
            </Nav>
          )}
        </AnimatePresence>
        <AnimateSharedLayout>
          <Nav className={styles.navDesktop}>
            {({ href, label, active }) => (
              <Link href={href}>
                <a>
                  <span>{label}</span>
                  {active && <motion.div layoutId="underline" />}
                </a>
              </Link>
            )}
          </Nav>
        </AnimateSharedLayout>
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
