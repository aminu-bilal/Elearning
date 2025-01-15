import "./App.css";
import { Colors } from "./globalStyles/colors";
import { Box } from "./globalStyles/customizableGlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/navBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/homePage";
import SignupPage from "./pages/signupPage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import CoursesPage from "./pages/coursesPage";
import LoginPage from "./pages/loginPage";
import PricingPage from "./pages/pricingPage";

function App() {
  return (
    <>
      <Router>
        <Box
          width="100%"
          height="100%"
          bgColor={Colors.WhiteShades97}
          p="10px 0"
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Box>
      </Router>
      <Footer />
    </>
  );
}

export default App;