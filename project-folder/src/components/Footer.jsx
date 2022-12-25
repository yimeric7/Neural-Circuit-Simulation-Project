import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='footer'>
      <div style={{backgroundColor: '#1E2D7B'}}>
      <h1 onClick={() => nav('/')}><span className='neuroFooter'>neuro</span ><span className='SimFooter'>SIM</span></h1>
        <div style={{width: '100%', textAlign: 'center', padding: '.5rem'}}>
          <h1  class = 'footerHead'>Thank you for checking out our project!</h1>
        </div>
        <section style={{width: '66%', display: 'flex', justifySelf: 'center',
          justifyContent: 'center', marginTop: '.5rem',
          margin: 'auto'}}>
          <p  class = 'footerText' style={{fontSize: '17px', lineHeight: '20px' }}>
            If you enjoyed it, we encourage you to check out the LinkedIn profiles of
            the contributors below to learn more about us and our work. We hope you have a great day!
          </p>
        </section>
        <section style={{marginTop: '2rem', marginBottom: '2rem'}}>
          <MDBBtn outline color="light" floating className='rounded-5'
                  href='https://www.linkedin.com/in/eric-hashmap/' role='button'>
            <span className='link-names'>Eric Yim - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='rounded-5' href='#!' role='button'>
            <span className='link-names'>Ricardo Gato - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='rounded-5'
                  href='https://www.linkedin.com/in/mohammad-al-robaie-2b3572205/' role='button'>
            <span className='link-names'>Mohammad Al-Robaie - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='rounded-5'
                  href='https://www.linkedin.com/in/owen-kluck-b86ba81a3/' role='button'>
            <span className='link-names'>Owen Kluck - &nbsp;</span>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='rounded-5'
                  href='https://www.linkedin.com/in/asim-ali-5780b8239/' role='button'>
            <span className='link-names'>Asim Ali - &nbsp;</span>
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