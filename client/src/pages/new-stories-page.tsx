import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { FeedType } from "@/features/stories/feed";

export const NewStoriesPage = () => {
  return (
    <>
      <FeedTitle title="New Stories" />
      <Feed type={FeedType.NEW} />
    </>
  );
};
