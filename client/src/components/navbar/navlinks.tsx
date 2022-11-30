import { useState } from "react";
import { Nav, Stack } from "rsuite";
import { NavLink } from "./navlink";

export const NavLinks = () => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <Nav onSelect={setActiveKey} activeKey={activeKey}>
      <Stack>
        {/* <Nav.Menu title="Stories"> */}
        <Nav.Item eventKey="4" as={NavLink} to="/stories/top">
          Top Stories
        </Nav.Item>
        <Nav.Item eventKey="5" as={NavLink} to="/stories/best">
          Best Stories
        </Nav.Item>
        <Nav.Item eventKey="6" as={NavLink} to="/stories/new">
          New Stories
        </Nav.Item>
        <Nav>
          <Nav.Item eventKey="6" as={NavLink} to="/favorites">
            Favorites
          </Nav.Item>
        </Nav>

        {/* </Nav.Menu>
        <Divider vertical /> */}

        {/* <Nav.Item eventKey="1" as={NavLink} to="/stories/ask">
          Ask
        </Nav.Item>
        <Nav.Item eventKey="2" as={NavLink} to="/stories/show">
          Show
        </Nav.Item>
        <Nav.Item eventKey="3" as={NavLink} to="/stories/job">
          Job
        </Nav.Item> */}
      </Stack>
    </Nav>
  );
};
