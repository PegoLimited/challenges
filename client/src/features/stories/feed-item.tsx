import { Divider } from "rsuite";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { timeDifferenceForDate } from "@/utils/time-converter";
import { FeedItemComments } from "./feed-item-comments";
import { useState } from "react";
import type { Story as StoryType } from "@/gql/graphql";
import { AuthorDetailsPopover } from "./author-details-popover";
import { useMutation } from "@apollo/client";
import { ADD_TO_FAV } from "@/mutations";
import { selectTheme } from "@/redux/theme-slice";
import { useAuth0 } from "@auth0/auth0-react";
import { setAlert } from "@/redux/alert-slice";

interface FeedItemProps {
  story: StoryType;
  index: number;
  isUserFav?: boolean;
}

export const FeedItem = ({ story, index, isUserFav }: FeedItemProps) => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [showCommentsForId, setShowCommentsForId] = useState<string>("");
  const [addToFav] = useMutation(ADD_TO_FAV);
  const { user } = useAuth0();

  const handleShowComments = (storyId: string) => {
    showCommentsForId === storyId ? setShowCommentsForId("") : setShowCommentsForId(storyId);
  };

  const handleVote = async (storyId: string) => {
    const res = await addToFav({ variables: { userEmail: user?.email, storyId } });
    if (res.data.addToFav === "success") {
      dispatch(
        setAlert({
          type: "success",
          message: `Added to your favorites!`,
        })
      );
    }
  };

  return (
    <Container className={theme}>
      <Title href={story.url ? story.url : "#"} target="_blank" className={theme}>
        {index + 1}
        <Divider vertical />
        {story.title}
      </Title>
      <Details>
        <DetailText className={theme}>{story.score} likes</DetailText>
        <Divider vertical />
        <AuthorDetailsPopover user={story.by}>
          <DetailLink className={theme}>by {story.by.id}</DetailLink>
        </AuthorDetailsPopover>
        <Divider vertical />
        <DetailText className={theme}>{timeDifferenceForDate(story.time)}</DetailText>
        <Divider vertical />
        <DetailLink
          className={theme}
          onClick={() => handleShowComments(story.id)}
          style={
            (story.descendants as number) > 0
              ? { pointerEvents: "auto" }
              : { pointerEvents: "none" }
          }
        >
          {showCommentsForId === story.id ? `Hide` : `${story.descendants} comments`}
        </DetailLink>
        {isUserFav && (
          <>
            <Divider vertical />

            <DetailLink className={theme} onClick={() => handleVote(story.id)}>
              Add to favorites
            </DetailLink>
          </>
        )}
      </Details>
      {showCommentsForId === story.id && <FeedItemComments storyId={story.id} />}
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 1rem;
  border: 1px solid #8d919b;
  border-radius: 5px;

  &.light {
    background-color: #f6f6f6;
  }
  &.dark {
    background-color: #19191c;
  }

  &:hover {
    border-color: #fff;
  }
`;

const Title = styled.a`
  cursor: pointer;

  &.dark {
    color: #fff;
  }
  &.light {
    color: #1a1d24;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 0.5rem;
  font-size: smaller;
`;

const DetailLink = styled.a`
  cursor: pointer;

  &.dark {
    color: #a7a9af;
  }
  &.light {
    color: #6e6e6e;
  }
`;

const DetailText = styled.p`
  &.dark {
    color: #a7a9af;
  }
`;
