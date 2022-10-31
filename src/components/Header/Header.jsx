import {NavLink as Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/footer' >Contact</Link>
    </nav>
  )
}

export default Header