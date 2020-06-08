import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import theme from "tailwindcss/defaultTheme"
import { Backdrop, Branding, Container, MenuToggle, Nav, Root } from "."
import styles from "./header.module.css"

const transition = {
  type: "spring",
  damping: 25,
  mass: 0.9,
  stiffness: 120,
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => void setOpen(p => !p)

  return (
    <Root animate={open ? "open" : "closed"} initial="closed">
      <Backdrop
        data-open={open}
        variants={{
          closed: {
            y: `calc(-100% + ${theme.spacing[12]})`,
            transition: {
              ...transition,
              delay: 0.5,
            },
          },
          open: {
            y: 0,
            transition,
          },
        }}
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
                    delayChildren: 0.3,
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
