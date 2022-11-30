import { Feed } from "@/features/stories/feed";
import { FeedTitle } from "@/features/stories/feed-title";
import { FeedType } from "@/features/stories/feed";

export const BestStoriesPage = () => {
  return (
    <>
      <FeedTitle title="Best Stories" />
      <Feed type={FeedType.BEST} />
    </>
  );
};
