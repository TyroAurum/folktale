import './Titlebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink } from 'reactstrap';
import { Instagram, Facebook, Reddit } from 'react-bootstrap-icons';


const TitleBar = ()=>{
  return (
    <div id='title-bar'>
      <Navbar 
        id='title-name'
        className="my-2 bg-transparent">
      <NavbarBrand href='/'>
        <span id='web-title'>
          Folktale Talkies
        </span>
      </NavbarBrand>
      <Nav className='nav-content'>
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/verse'>Multiverse</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Heros</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>About us</NavLink>
        </NavItem>
        <NavItem className='nav-icon' id='first-icon'>
          <a href='/'><Facebook color='white' /></a>
        </NavItem>
        <NavItem className='nav-icon'>
        <a href='/'><Instagram color='white' /></a>
        </NavItem>
        <NavItem className='nav-icon'>
          <a href='/'><Reddit color='white' /></a>
        </NavItem>
      </Nav>
      <a href='/login'><NavbarText id='user-name'><Button block>LOG IN</Button></NavbarText></a>
      <a href='/register'><NavbarText id='user-name'><Button block>REGISTER</Button></NavbarText></a>
      </Navbar>
    </div>
  );
}

export default TitleBar;
