import { useInView } from "react-intersection-observer"
import dynamic from "next/dynamic"

const LoadingSection = dynamic(() => import("../components/loading-section"))

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
  return (
    <div>
      <Content />
      <Content />
      <div ref={inViewRef} className="relative w-full h-64 border">
        {inView && <LoadingSection />}
      </div>
      <Content />
    </div>
  )
}
