import { PageLoading } from "@/components";
import { GET_FAVS_OF_USERS } from "@/queries";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { FeedItem } from "../stories/feed-item";
import type { Story as StoryType } from "@/gql/graphql";

export const UserFavoritesFeed = ({ userEmail }: { userEmail: string }) => {
  const limit = 20;
  const dispatch = useAppDispatch();
  const { loading, data, error, fetchMore } = useQuery(GET_FAVS_OF_USERS, {
    variables: {
      userEmail,
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
  }

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
        {data?.getFavsOfUsers.map((story: StoryType, index: number) => {
          return <FeedItem story={story} index={index} key={story.id} />;
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
