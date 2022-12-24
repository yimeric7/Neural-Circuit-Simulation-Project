import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { useNavigate } from "react-router";

export default function UserNavbar() {
    const nav = useNavigate();


    return (
        <div style={{ padding: '3rem', backgroundColor: '#F5F5F5' }}>
            <Navbar fixed='top' expand="lg" variant="light" >
                <Container >
                    <h1 onClick={() => nav('/')}><img src={logo} height='40px' /><span className='neuro'>neuro</span ><span className='Sim'>SIM</span></h1>
                    <div className="menu-me-left">
                        <button className='btn-ms-2' margin-right='20px' onClick={() => nav('/')}><span className='btnText' >Home</span></button>
                        <button className='btn-ms-2' onClick={() => nav('/about')}><span className='btnText' >About Us</span></button>
                        <button className='btn-ms-2' onClick={() => nav('/test')}><span className='btnText' >Test</span></button>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}