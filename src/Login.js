import React           from 'react';
import BankForm        from './BankForm';
import { Card, Container } from 'react-bootstrap';
import pic from './badbank.png';

function Login() {
  

  return (
    <Container className='container'>
      <div className='row'>
        <div className='col'>
          <p className='welcome'><span className='welcome-word'>Welcome</span> back to your My Bad Bank login. Future features of the My Bad Bank app will include: 
              <br/> <span className='highlighted-text'>Financial market report feed</span> 
              <br/> <span className='highlighted-text'>User history database</span> 
              <br/> <span className='highlighted-text'>Personal loan advisor, provided by chatBot3000.</span> 
          </p>
        </div>
        <div className='col'>
    <Card>
      <h2 className="card-header">Login</h2>
      <div className="card-body">
        
        <BankForm 
          hideEmail={true}
          formName="Login"
        />
      </div>
      <img src={pic} className='homePageLogo'alt='logo'></img>

    </Card>
    </div>
    </div>
    </Container>
  )
}

export default Login;