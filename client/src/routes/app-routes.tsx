import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { NotFoundPage, HomePage, ProfilePage } from "@/pages";
import { TopStoriesPage, BestStoriesPage, NewStoriesPage } from "@/pages";
import { UserFavouritesPage } from "@/pages/user-favourites-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
      <Route path="/stories/top" element={<ProtectedRoute component={TopStoriesPage} />} />
      <Route path="/stories/best" element={<ProtectedRoute component={BestStoriesPage} />} />
      <Route path="/stories/new" element={<ProtectedRoute component={NewStoriesPage} />} />
      <Route path="/favorites" element={<ProtectedRoute component={UserFavouritesPage} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
