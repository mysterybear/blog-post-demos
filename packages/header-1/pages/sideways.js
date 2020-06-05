import React, { useState } from "react";
import theme from "tailwindcss/defaultTheme";
import {
  Backdrop,
  Container,
  MenuToggle,
  Root,
  styles,
  Viewport,
} from "../components";

function HeaderLeft() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => void setOpen((p) => !p);
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
  );
}

export default function Sideways() {
  return (
    <Viewport>
      <HeaderLeft />
    </Viewport>
  );
}
