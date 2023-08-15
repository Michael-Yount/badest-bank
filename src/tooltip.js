import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipFunc() {
  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <div>{children}</div>
    </OverlayTrigger>
  );

  return (
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <ul className="navbar-nav">
        <li className="navbar-item" >
          <Link id="login" title="So surprised that you came back...">
            <a className="nav-link" data-tooltip="So surprised that your back..."aria-current="page"  href="#/Login">Login</a>
        </Link>{' '}
        </li>    
        <li className="navbar-item">
            <Link id="create-account" title="Create an account, but do not expect it to be secure.">
            <a className="nav-link " aria-current="page"  href="#/CreateAccount">Create Account</a>
            </Link>{' '}
        </li>
        <li className="navbar-item">
            <Link id="deposit" title="Deposit here and you may never see your money again!">
        <a className="nav-link" aria-current="page" href="#/Deposit">Deposit</a>
             </Link>{' '}
        </li>
        <li className="navbar-item">
        <Link id="withdraw" title="Withdraw your money here and take it all out, while you still can.">
        <a className="nav-link" aria-current="page" href="#/Withdraw">Withdraw</a>
        </Link>{' '}
        </li>
        <li className="navbar-item">
        <Link id="customer-data" title="This is where all account info is kept.">
        <a className="nav-link" aria-current="page" href="#/AllData">Customer Data</a>
        </Link>{' '}
        </li>
        <li className="navbar-item">
            <Link id="home" title="This will take you to the home page.">
        <a className="nav-link" aria-current="page" href="#/Home">Home</a>
        </Link>{' '}
        </li>
       
      </ul>
  </div>    
  )
}



export default TooltipFunc;