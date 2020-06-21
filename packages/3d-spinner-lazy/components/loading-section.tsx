import Spinner3D from "./spinner-3d"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const presenceProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export default function LoadingSection() {
  const [loading, setLoading] = useState(false)
  const load = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => void setLoading(false), 3000)
  }
  return (
    <section className="flex justify-center items-center h-64 w-full relative">
      <h1>hi</h1>
      <AnimatePresence exitBeforeEnter>
        {loading ? (
          <motion.div
            key="spinner"
            className="absolute w-full h-full"
            {...presenceProps}
          >
            <Spinner3D />
          </motion.div>
        ) : (
          <motion.button
            key="button"
            className="rounded-md shadow-md focus:outline-none px-5 py-2 bg-indigo-500"
            onClick={load}
            {...presenceProps}
          >
            Load
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  )
}
