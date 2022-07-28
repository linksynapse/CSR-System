import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/logo.png';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand style={{paddingLeft:'15px'}}href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Customer Service Responsibility
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;