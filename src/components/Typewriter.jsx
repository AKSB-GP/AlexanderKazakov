
import { ReactTyped } from "react-typed";



const Typewriter = () => {
  return (
     //typed speed in miliseconds
    <>   
    <div class="bg-blue-400 text-7xl ">
      <h1>Alexander Kazakov</h1>
      </div >
      <div class="bg-blue-400 text-5xl">
      <ReactTyped
        strings={["Software Developer", "Technical Artist", "Student", "3D Artist","Visualization"]}
      typeSpeed={50} backSpeed={50}
      loop showCursor>
    </ReactTyped>
    </div>
    </>



  );
}

export default Typewriter;