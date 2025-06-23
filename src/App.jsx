import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { MainLayout } from "./layout"
import { HomePage, SignUpPage, SignInPage, EventDetailPage, CreateEventPage, ProfilePage } from "./pages" 
import { Error404 } from "./components";
import { AllEventCall, EventDetailCall } from "./api";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route 
        index
        loader={AllEventCall}
        hydrateFallbackElement={<>Loading. . .</>} 
        errorElement={<Error404 />}
        element={<HomePage />} 
        />
        <Route
        path="/signup"
        element={<SignUpPage/>}
        />
        <Route
        path="/signin"
        element={<SignInPage/>}
        />
        <Route
          path="/events/:eventId"
          loader={EventDetailCall} // <-- loader for specific event
          hydrateFallbackElement={<>Loading. . .</>}
          errorElement={<Error404 />}
          element={<EventDetailPage />}
        />
        <Route
        path="/create"
        element={<CreateEventPage/>}
        />
        <Route
        path="/profile"
        element={<ProfilePage/>}
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />;
}

export default App
