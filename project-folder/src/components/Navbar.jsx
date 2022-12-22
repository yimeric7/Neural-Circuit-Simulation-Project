import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'


function ContainerInsideExample() {
  return (
    <Navbar fixed='top' expand="lg" variant="light" >
      <Container >
        <h1><img src = {logo} height = '40px'/><span className='neuro'>neuro</span ><span className='Sim'>SIM</span></h1>
        <div className="menu-me-left">
            <button className='btn-ms-2' margin-right='20px' href="#home">Home</button>
            <button className='btn-ms-2' href="">Explore</button>
            <button className='btn-ms-2' href="">About Us</button>
          </div>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;