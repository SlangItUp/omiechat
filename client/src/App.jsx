import { useAuthContext } from "./context/AuthContext.jsx"
import Landing from "./pages/landing.jsx"
import UserHome from "./pages/userHome.jsx";
import NavBar from "./pages/navbar.jsx";

import {
 auto,
} from 'darkreader';

function App() {
  localStorage.setItem("darkmode", true);
  const {authUser} = useAuthContext();
  return (
    <>
      {
     auto()
      }
      <NavBar />
      {authUser? <UserHome /> : <Landing />}
    </>
  )
}

export default App
