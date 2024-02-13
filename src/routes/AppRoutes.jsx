import { HomePage, NewsDetail } from "../pages";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news/:id" element={<NewsDetail />} />
    </Routes>
  );
};
