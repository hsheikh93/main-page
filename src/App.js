import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Page from "./Components/Page";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Container fixed>
        <Header />
        <Page />
      </Container>
    </Router>
  );
}

export default App;
