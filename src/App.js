import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//?Pages
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={
        <HomeLayout>
          <Home />
        </HomeLayout>} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App