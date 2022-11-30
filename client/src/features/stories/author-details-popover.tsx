import { Popover, Whisper } from "rsuite";
import type { User as UserType } from "@/gql/graphql";
import styled from "styled-components";
import { Person } from "@styled-icons/bootstrap";
import { timeDifferenceForDate } from "@/utils/time-converter";
import { Stack } from "rsuite";
import ReactHtmlParser from "react-html-parser";

interface AuthorDetailsPopoverProps {
  children: any;
  user?: UserType;
}

export const AuthorDetailsPopover = ({ children, user }: AuthorDetailsPopoverProps) => {
  const speaker = (
    <StyledPopover>
      {user && (
        <>
          <Stack spacing={15} alignItems="flex-start">
            <Person size={30} />
            <h4>{user.id}</h4>
          </Stack>
          <hr />
          <p>
            <span>About:</span>
            {ReactHtmlParser(user.about as string)}
          </p>
          <p>
            <span>Karma:</span>
            {user.karma}
          </p>
          <p>
            <span>Joined:</span>
            {timeDifferenceForDate(user.created)}
          </p>
          <p>
            <span>Submitted stories:</span>
            {user.submitted?.length}
          </p>
          <p></p>
        </>
      )}
    </StyledPopover>
  );

  return (
    <Whisper placement="auto" trigger="click" controlId="control-id-click" speaker={speaker}>
      {children}
    </Whisper>
  );
};

const StyledPopover = styled(Popover)`
  padding: 1rem;
  width: 400px;
  overflow-y: auto;

  p {
    word-wrap: break-word;
  }

  span {
    font-weight: bold;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  i {
    margin-top: 2rem;
  }

  a {
    cursor: pointer;
    margin-top: 2rem;
    font-size: larger;
  }
`;
