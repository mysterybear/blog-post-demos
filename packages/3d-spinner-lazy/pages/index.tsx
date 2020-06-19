import { useInView } from "react-intersection-observer"
import dynamic from "next/dynamic"

const Spinner3D = dynamic(() => import("../components/spinner-3d"))

const Content = ({ color }) => {
  const classNameContent = color => `
  flex justify-center items-center
  w-full h-64 py-64
  bg-${color}-500
  `
  return (
    <div className={classNameContent(color)}>
      <p>Some Content...</p>
    </div>
  )
}

export default () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: `-150px 0px`,
  })
  return (
    <div>
      <Content color="blue" />
      <Content color="pink" />
      <div ref={inViewRef} className="relative w-full h-64 bg-indigo-300">
        {inView && <Spinner3D />}
      </div>
      <Content color="green" />
    </div>
  )
}
