import { useInView } from "react-intersection-observer"
import loadable from "@loadable/component"
import { useState } from "react"
import { motion } from "framer-motion"

const Spinner3D = loadable(() => import("../components/spinner-3d"))

const Content = () => {
  return (
    <div className="flex justify-center items-center w-full h-64 py-64 border">
      <p>Some Content...</p>
    </div>
  )
}

export default () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: `-200px 0px`,
  })
  const [loading, setLoading] = useState(false)
  const load = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => void setLoading(false), 3000)
  }
  return (
    <div>
      <Content />
      <Content />
      <section
        ref={inViewRef}
        className="flex justify-center items-center h-64 w-full relative"
      >
        {inView && (
          <motion.div
            key="spinner"
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={loading ? { opacity: 1 } : { opacity: 0 }}
          >
            <Spinner3D />
          </motion.div>
        )}
        <motion.button
          key="button"
          className="rounded-md shadow-md focus:outline-none px-5 py-2 bg-indigo-500 z-50"
          onClick={load}
          initial={{ opacity: 1 }}
          animate={loading ? { opacity: 0 } : { opacity: 1 }}
        >
          Load
        </motion.button>
      </section>
      <Content />
    </div>
  )
}
