import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Comment } from "./comment";
import { GET_COMMENTS_BY_STORY_ID } from "../../queries";
import type { Comment as CommentType } from "@/gql/graphql";
import { setAlert } from "@/redux/alert-slice";
import { useAppDispatch } from "@/redux/hooks";
import { FingerprintSpinner } from "react-epic-spinners";
import { Stack } from "rsuite";

interface FeedItemCommentsProps {
  storyId: string;
}

export const FeedItemComments = ({ storyId }: FeedItemCommentsProps) => {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useQuery(GET_COMMENTS_BY_STORY_ID, {
    variables: {
      storyId,
    },
  });

  console.log(data);

  if (loading) {
    return (
      <Stack justifyContent="center">
        <FingerprintSpinner size={40} />
      </Stack>
    );
  }

  if (error) {
    dispatch(
      setAlert({
        type: "error",
        message: `Can't load the stories at the moment. Details: ${error.message}`,
      })
    );
  }

  return (
    <CommentGrid>
      {data?.comments.map((comment: CommentType) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </CommentGrid>
  );
};

const CommentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2rem 4rem;
`;
