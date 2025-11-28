function Navbar() {
  return (
    <>
      <nav className="henry">
        <p>Home</p>
        <p>Page</p>
        <p>Footer</p>
      </nav>
    </>
  );
}

function Body(props) {
  return(
    <>
    <section>
      <ul>
        <p>{props.number} list of things in my {props.name}</p>
        <li>Milk</li>
        <li>Bread</li>
        <li>Biscuit</li>
        <li>Chair</li>
        <li>Table</li>
      </ul>
    </section>
    </>
  )
}



import App from "../src/App";
export default Navbar;
import HeroSection from "../components/body.jsx";
export {Body}