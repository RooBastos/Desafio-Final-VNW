import "./global.scss";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/header.jsx"
import Main from "./components/main/main.jsx"
import Footer from "./components/footer/footer.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
