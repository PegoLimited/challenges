import { Drawer, Stack } from "rsuite";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ProfileDrawerProps {
  open: boolean;
  setOpen: (x: boolean) => void;
  user: any;
}

export const ProfileDrawer = ({ open, setOpen, user }: ProfileDrawerProps) => {
  const navigate = useNavigate();
  const { nickname, email, picture } = user;

  return (
    <Drawer open={open} onClose={() => setOpen(false)} size="sm">
      <Drawer.Body>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={20}>
          <Avatar src={picture} alt="user-profile"></Avatar>
          <h3>{nickname}</h3>
          <h4>{email}</h4>
          <a style={{ cursor: "pointer" }} onClick={() => navigate("/favorites")}>
            My favorites
          </a>
        </Stack>
      </Drawer.Body>
    </Drawer>
  );
};

// Styles
const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: 10rem;
`;
