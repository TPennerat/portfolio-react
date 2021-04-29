import "./Header.css";
import Nav from 'react-bootstrap/Nav';

function Header () {
    return (
        <div className="Header">
 <Nav justify variant="tabs" className="justify-content-center" defaultActiveKey="/profil">
  <Nav.Item>
    <Nav.Link  href="/profil" >Profil</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link key="test" eventKey="link-1" href="/skills" onSelect={() => this.selected(test)}>Compétences</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" href="/exp">Expériences</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    );
}

function selected(selectedKey) {
  console.log('cc')
  alert(selectedKey);
}

export default Header;