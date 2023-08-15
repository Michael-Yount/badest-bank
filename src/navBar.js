import TooltipFunc from "./tooltip";
import logo from './badbank.png';



function NavBar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
       <div className="container-fluid ">
          <a className="navbar-brand" href="#/Home">
              <img src={logo} alt="logo" className="logo"></img>
              My <span className="bad">Bad</span> Bank
          </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
            <TooltipFunc/>
          </div>
        </div> 
      </nav>
    );
}

export default NavBar;
