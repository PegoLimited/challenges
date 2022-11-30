import { Divider } from "rsuite";
import styled from "styled-components";

export const FeedTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
    </>
  );
};

const Title = styled.h5`
  margin: 0;
  padding: 0;
`;
