import { Col, Row, Nav, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const HomeTabs = () => {

//   const [currentKey , setCurrentKey] = useState("home");

  return (
    <Tab.Container onSelect={(key)=> {
          console.log(key)
    }} id="tab-container-example" defaultActiveKey="HomePage">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
          <Nav.Item >
                <Link className="nav-link" to={'/'}>Home</Link>
            </Nav.Item>
            <Nav.Item >
                <Link className="nav-link" to={'/users'}>Users</Link>
            </Nav.Item>
            <Nav.Item >
                <Link className="nav-link" to={'/profile'}>Profile</Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="HomePage" active>
                <Outlet/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default HomeTabs;