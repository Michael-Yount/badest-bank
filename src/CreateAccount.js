import React    from "react";
import BankForm from './BankForm';
import { Card, Container } from "react-bootstrap";
import pic from './badbank.png'

function CreateAccount() {

  return (
    <Container className="container">
      <div className='row'>
        <div className='col'>
          <p className='welcome'><span className='welcome-word'>Welcome</span> create your My Bad Bank login account here. Enjoy futuristic banking practices. 
              <br/> <span className='highlighted-text-welcome'></span> 
              <br/> <span className='highlighted-text-welcome'></span> 
              <br/> <span className='highlighted-text-welcome'></span> 
          </p>
        </div>
        
        <div className='col'>
              <Card className="card">
                <h2 className="card-header">Create Account</h2>
                  <div className="card-body">
                    <BankForm
                      formName="Create Account"
                    />
                  </div>
                <img src={pic} className='homePageLogo'alt='logo'></img>
              </Card>
          </div>
      </div>
    </Container>
  )
}

export default CreateAccount;