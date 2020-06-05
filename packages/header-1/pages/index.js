import React, { useState } from "react";
import theme from "tailwindcss/defaultTheme";
import { Backdrop, Container, MenuToggle, Root, Viewport } from "../components";

function HeaderTop() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => void setOpen((p) => !p);
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
  );
}

export default function Index() {
  return (
    <Viewport>
      <HeaderTop />
    </Viewport>
  );
}
