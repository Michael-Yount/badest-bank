import React from 'react';
import { useContext } from 'react';
import { UserContext } from './App';
import { Card, Container} from 'react-bootstrap';
import pic from './badbank.png'

function Home() {
  const ctx = useContext(UserContext);

  return (
    <Container className="container">
        <div className='row'>
          <div className='col'>
              <p className="welcome"><span className='welcome-word'>Welcome</span> to My Bad Bank. 
              <br /> The bank where your money is our money. 
              <br /> No secrets, No security, thats our motto.
              <br /> Create an account and start Bad Banking right away.
              <br /> Check other accounts to see what they are up too as well.

              </p>
          </div>
            <div className='col'>
            {ctx.loggedInUser ? (
              <p>Logged in user: <b className="capitalize">{ctx.loggedInUser}</b>.</p>
              ) : (
                <Card className='card'>
                      <div className='card-header'>
                        <h1 className='header'>My <span style={{color: 'red'}}>Bad</span> Bank</h1>
                      </div>
                      
                  <img src={pic} className='homePageLogo'alt='logo'></img>
                </Card>
              )}
          </div>
        </div>
    </Container>
  )
}

export default Home;