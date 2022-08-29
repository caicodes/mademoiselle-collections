import Logo from "./Logo"
import NavLeft from "./NavLeft"
import NavRight from "./NavRight"
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <NavLeft />
      <Logo />
      <NavRight />
    </header>
  )
}

export default Header
