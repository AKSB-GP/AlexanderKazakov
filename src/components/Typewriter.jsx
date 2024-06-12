
import { ReactTyped } from "react-typed";


const Typewriter = () => {
  return (
     //typed speed in miliseconds
    <>   
    <div class ="flex flex-col inline items-center">
    <div class=" text-7xl ">
      <h1>ALEXANDER KAZAKOV</h1>
      </div >
      <div class=" text-5xl">
      <ReactTyped
        strings={["SOFTWARE DEVELOPER", "TECHNICAL ARTIST", "STUDENT", "3D ARTIST"]}
      typeSpeed={50} backSpeed={30}
      loop showCursor>
    </ReactTyped>
    </div>
    </div>
    </>



  );
}

export default Typewriter;