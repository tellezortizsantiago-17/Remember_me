import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../guards/ProtectedRoute";
import HomePage from "../pages/HomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute requireAuth={false}>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}