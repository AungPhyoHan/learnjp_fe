import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import Header from "./common/Header";
import AboutPage from "./pages/user/AboutPage";
import Footer from "./common/Footer";
import KanjiUserPage from "./pages/user/KanjiPage";
import KanjiAdminPage from "./pages/admin/KanjiPage";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-[#A8D5BA] font-mono">
            <Header />
            <Routes>
              {/* User */}
              <Route path="/" Component={HomePage} />
              <Route path="/about" Component={AboutPage} />
              <Route path="/kanji/:level" Component={KanjiUserPage} />

              {/* Admin */}
              <Route path="/admin/word" Component={KanjiAdminPage} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
