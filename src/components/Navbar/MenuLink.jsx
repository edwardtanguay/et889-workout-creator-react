import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

const MenuLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={`uppercase hidden md:block text-xl p-2 text-green-500 hover:text-green-600 transition [&.active]:text-green-600 [&.active]:underline`}
    >
      {children}
    </NavLink>
  )
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default MenuLink
