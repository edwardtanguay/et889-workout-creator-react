import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

const DropdownLink = ({ to, children, toggleMenu }) => {
  return (
    <NavLink
      onClick={toggleMenu}
      to={to}
      className="py-5 w-3/4 uppercase bg-green-500 [&.active]:bg-green-600 hover:bg-green-600 transition rounded text-blue-50 text-xl text-center"
    >
      {children}
    </NavLink>
  )
}

DropdownLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default DropdownLink
