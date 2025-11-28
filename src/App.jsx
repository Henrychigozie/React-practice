import HeroSection from "../components/body";
import Navbar from "../components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <p>Ben</p>
      <HeroSection name="oba" />
      <Body name="enivroment" number={5} />
    </>
  );
}

export default App;
import {Body} from "../components/navbar";
