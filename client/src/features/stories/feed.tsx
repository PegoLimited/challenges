import { PageLoading } from "@/components";
import { useQuery } from "@apollo/client";
import { GET_STORIES_BY_TYPE } from "../../queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import styled from "styled-components";
import { FeedItem } from "./feed-item";
import type { Story as StoryType } from "@/gql/graphql";

export enum FeedType {
  TOP = "top",
  BEST = "best",
  NEW = "new",
}

interface FeedProps {
  type: FeedType;
}

export const Feed = ({ type }: FeedProps) => {
  const limit = 20; // pagination limit
  const dispatch = useAppDispatch();
  const { loading, data, error, fetchMore } = useQuery(GET_STORIES_BY_TYPE, {
    variables: {
      offset: 0,
      limit,
      storyType: type,
    },
  });

  if (loading) {
    return <PageLoading desc="loading stories.." />;
  }

  if (error) {
    dispatch(
      setAlert({
        type: "error",
        message: `Can't load the stories at the moment. Details: ${error.message}`,
      })
    );

    return <p>No stories.</p>;
  }

  // Fetches more according to offset & limit
  const loadMore = () => {
    const currentLength = data.stories.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit,
      },
    });
  };

  return (
    <Container>
      <FeedGrid>
        {data?.stories.map((story: StoryType, index: number) => {
          return <FeedItem isUserFav={true} story={story} index={index} key={story.id} />;
        })}
      </FeedGrid>
      {data && <LoadMore onClick={loadMore}>Load more</LoadMore>}
    </Container>
  );
};

// Styles
const Container = styled.div``;

const FeedGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: larger;
  color: #a7a9af;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
