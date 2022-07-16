import { DefaultXRControllers, RayGrab, VRCanvas } from '@react-three/xr';
import './App.css';

function App() {
  return (
    <section className="App">
      <VRCanvas>
        <DefaultXRControllers />
        <ambientLight />
        <RayGrab>
          <mesh>
            <boxGeometry scale={2}/>
            <meshStandardMaterial />
          </mesh>
        </RayGrab>
      </VRCanvas>
    </section>
  );
}

export default App;
