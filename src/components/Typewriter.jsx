
import { ReactTyped } from "react-typed";


const Typewriter = () => {
  return (
     //typed speed in miliseconds
    <>   
    <div class ="flex flex-col inline items-center bg-blue-400">
    <div class=" text-7xl ">
      <h1>Alexander Kazakov</h1>
      </div >
      <div class=" text-5xl">
      <ReactTyped
        strings={["Software Developer", "Technical Artist", "Student", "3D Artist"]}
      typeSpeed={50} backSpeed={30}
      loop showCursor>
    </ReactTyped>
    </div>
    </div>
    </>



  );
}

export default Typewriter;