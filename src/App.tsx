import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import ScrollToTop from "./routes/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
