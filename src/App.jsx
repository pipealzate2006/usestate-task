import ContactForm from "./components/ContactForm.jsx";
import TodoList from "./components/TodoList.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="todo" element={<TodoList />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="contactForm" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
