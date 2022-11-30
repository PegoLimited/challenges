import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <p>
        404 :/ back to <a onClick={() => navigate("/stories/top")}>stories?</a>
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & a {
    display: inline-block;
    margin: 0 4px;
    cursor: pointer;
  }
`;
