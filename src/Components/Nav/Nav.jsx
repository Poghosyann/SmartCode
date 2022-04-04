import logo from '../../images/logo.svg'
import Apply from './Apply/Apply';
import Menu from './Menu/Menu';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <Menu />
      <Apply />
    </nav>
  );
}
  
export default Nav;