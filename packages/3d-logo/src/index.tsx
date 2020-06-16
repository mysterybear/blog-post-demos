import React from "react"
import ReactDOM from "react-dom"
import { Canvas } from "react-three-fiber"
import { OrbitControls } from "drei"
import styles from "./index.module.css"

const App3D = () => (
  <mesh>
    <boxGeometry attach="geometry" />
    {["red", "blue", "green"]
      .flatMap(x => [x, x])
      .map(color => (
        <meshBasicMaterial color={color} attachArray="material" />
      ))}
  </mesh>
)

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.root}>
      <Canvas>
        <App3D />
        <OrbitControls />
      </Canvas>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
