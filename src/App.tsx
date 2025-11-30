import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage } from "./app/pages/create-trip";
import { TripDetailsPage } from "./app/pages/trip-details";

const router = createBrowserRouter([
  { path: "/", element: <CreateTripPage /> },
  { path: "/detalhes-da-viajem/:viajem-id", element: <TripDetailsPage /> },
]);
export function App() {
  return <RouterProvider router={router} />;
}

