import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
//        <h1><img src = {logo} height = '33px'/><span className='neuroFooter' fontSize ='33px'>neuro</span ><span className='SimFooter'>SIM</span></h1>


export default function Footer() {
  return (
    <MDBFooter className='footer'>

      <div style={{backgroundColor: '#FFE5B4'}}>
        <div style={{width: '100%', textAlign: 'center', padding: '1rem'}}>
          <h1>Thank you for checking out our project!</h1>
        </div>
        <section style={{width: '66%', display: 'flex', justifySelf: 'center',
          justifyContent: 'center', marginTop: '1rem',
          margin: 'auto'}}>
          <span style={{fontSize: '20px', lineHeight: '20px'}}>
            If you enjoyed it, we encourage you to check out the LinkedIn profiles of
            the contributors below to learn more about us and our work. We hope you have a great day!
          </span>
        </section>
        <section style={{marginTop: '2rem', marginBottom: '2rem'}}>
          <MDBBtn outline color="light" floating className='m- btn-floating'
                  href='https://www.linkedin.com/in/eric-hashmap/' role='button'>
            <span >Eric Yim - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <span >Ricardo Gato - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1'
                  href='https://www.linkedin.com/in/mohammad-al-robaie-2b3572205/' role='button'>
            <span>Mohammad Al-Robaie &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1'
                  href='https://www.linkedin.com/in/asim-ali-5780b8239/' role='button'>
            <span>Asim Ali - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1'
                  href='https://www.linkedin.com/in/owen-kluck-b86ba81a3/' role='button'>
            <span>Owen Kluck - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>

          <p style={{width: '80%', display: 'flex', justifySelf: 'center',
            justifyContent: 'center', marginTop: '2rem',
            margin: 'auto'}}>

          </p>
      </div>

    </MDBFooter>
  );
}