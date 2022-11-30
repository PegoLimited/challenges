import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { FeedType } from "@/features/stories/feed";

export const TopStoriesPage = () => {
  return (
    <>
      <FeedTitle title="Top Stories" />
      <Feed type={FeedType.TOP} />
    </>
  );
};
