import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./app/pages/create-trip";
import { TripDetailsPage } from "./app/pages/trip-details";

const router = createBrowserRouter([
  { path: "/", element: <CreateTripPage /> },
  { path: "/trip/:tripId", element: <TripDetailsPage /> },
]);
export function App() {
  return <RouterProvider router={router} />;
}
