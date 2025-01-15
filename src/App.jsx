import meny from "./data/variables.js";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import Title from "./Title.jsx";

function App() {
  return (
    <>
      <Title />
      <Menu data={meny} />
      <Footer />
    </>
  );
}

export default App;
