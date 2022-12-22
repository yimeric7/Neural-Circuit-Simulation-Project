import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import {useNavigate} from "react-router";

export default function UserNavbar() {
  const nav = useNavigate();

  return (
    <Navbar fixed='top' expand="lg" variant="light" >
      <Container >
        <h1><img src = {logo} height = '40px'/><span className='neuro'>neuro</span ><span className='Sim'>SIM</span></h1>
        <div className="menu-me-left">
            <button className='btn-ms-2' margin-right='20px' onClick={() => nav('/')}>Home</button>
            <button className='btn-ms-2' onClick={() => nav('/')}>Explore</button>
            <button className='btn-ms-2' onClick={() => nav('/about')}>About Us</button>
          </div>
      </Container>
    </Navbar>
  );
}