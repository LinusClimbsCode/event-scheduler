import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { MainLayout } from "./layout"
import { HomePage, SignUpPage, SignInPage, EventDetailPage, CreateEventPage } from "./pages" 
import { Error404 } from "./components";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
        path="/signup"
        element={<SignUpPage/>}
        />
        <Route
        path="/signin"
        element={<SignInPage/>}
        />
        <Route
        path="/events"
        element={<EventDetailPage/>}
        />
        <Route
        path="/create"
        element={<CreateEventPage/>}
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />;
}

export default App
