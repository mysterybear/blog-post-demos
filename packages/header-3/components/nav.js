import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

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
export default function Nav({ children, ...props }) {
  return (
    <motion.nav {...props}>
      {links.map(linkProps => (
        <NavLink key={linkProps.href} children={children} {...linkProps} />
      ))}
    </motion.nav>
  )
}
