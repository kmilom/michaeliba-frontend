import { Container } from 'react-bootstrap';
import './App.css';
import PageTop from './components/PageTop';
import Header from "./components/Header";
import Services from "./components/Services";

function App() {
  return (
    <Container fluid>
      <Header />
      <PageTop />
      <Services />
    </Container>
  );
}

export default App;
