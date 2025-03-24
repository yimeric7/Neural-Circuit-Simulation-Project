import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div style={{paddingBottom: '4rem'}}>
      <MDBFooter className='footer'>
      <div style={{backgroundColor: '#1E2D7B'}}>
      <h1 onClick={() => nav('/')}><span className='neuroFooter'>neuro</span ><span className='SimFooter'>SIM</span></h1>
        <div style={{width: '100%', textAlign: 'center'}}>
          <h1  class = 'footerHead'>Thank you for checking out our project!</h1>
        </div>
        <section style={{width: '66%', display: 'flex', justifySelf: 'center',
          justifyContent: 'center'}}>
          <p  class = 'footerText' style={{fontSize: '17px', lineHeight: '20px' }}>
            Thanks for trying out the tool! I hope you have a great day - Zen Lin
          </p>
        </section>
      </div>
    </MDBFooter>
    </div>
    
  );
}