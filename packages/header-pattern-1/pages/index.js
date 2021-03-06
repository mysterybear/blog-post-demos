import React, { useState } from "react"
import theme from "tailwindcss/defaultTheme"
import {
  Backdrop,
  Container,
  MenuToggle,
  Root,
  Viewport,
  styles,
} from "../components"

function Header() {
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
        <MenuToggle onClick={toggleOpen} />
      </Container>
    </Root>
  )
}

function SideBar() {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => void setOpen(p => !p)
  return (
    <Root animate={open ? "open" : "closed"} initial="closed">
      <Backdrop
        variants={{
          closed: {
            x: `calc(-100% + ${theme.spacing[12]})`,
          },
          open: {
            x: 0,
          },
        }}
        transition={{
          type: "spring",
          damping: 25,
          mass: 0.9,
          stiffness: 120,
        }}
      />
      <Container className={styles.containerLeft}>
        <MenuToggle onClick={toggleOpen} />
      </Container>
    </Root>
  )
}
export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Viewport>
        <Header />
      </Viewport>
      <Viewport>
        <SideBar />
      </Viewport>
    </div>
  )
}
