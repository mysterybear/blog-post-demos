import Spinner3D from "../components/spinner-3d"

export default function IndexPage() {
  return (
    <div className="absolute w-full h-full">
      <h1 className="absolute">Some Text</h1>
      <div className="absolute w-full h-full bg-indigo-300">
        <Spinner3D />
      </div>
    </div>
  )
}