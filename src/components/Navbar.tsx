import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <Link to="/" style={{ color: "darkred" }}>
        SUPER CRAFT
      </Link>
      <Link to="/about"> About Us</Link>
    </div>
  )
}
export default Navbar
