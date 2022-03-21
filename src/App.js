import HomePage from "./layout/main/Home";
import About from "./layout/main/About.jsx";
import { Routes, Route } from "react-router-dom";
import Error404 from "./layout/main/Error404";
import Header from "./layout/header/Header.jsx";
import Footer from "./layout/footer/footer.jsx";
import BizSignup from "./layout/main/BizSignup";
import Logout from "./layout/main/Logout";
import MyCards from "./layout/main/MyCards";
import MyFavoriteCards from "./layout/main/MyFavoriteCards";
import Login from "./layout/main/Login";
import Signup from "./layout/main/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./services/userService";
import CreateCard from "./layout/main/CreateCard";
import EditCardConvertor from "./layout/main/editCardConvertor";
import CardInfoConvertor from "./layout/main/CardInfoConvertor";

function App() {
  const user = getCurrentUser();
  return (
    <div className="App">
      <Header user={user} />
      <ToastContainer />

      <main style={{ minHeight: "85vh" }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/biz-signup" element={<BizSignup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/my-cards" element={<MyCards user={user} />} />
          <Route path="/create-card" element={<CreateCard user={user} />} />
          <Route
            path="/edit-card/:id"
            element={<EditCardConvertor user={user} />}
          />
          <Route
            path="/card-info/:id"
            element={<CardInfoConvertor user={user} />}
          />
          <Route path="/my-fav-cards" element={<MyFavoriteCards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
