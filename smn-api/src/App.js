
import './App.css';
import Footer from './Components/Footer';
import CiudadesPrincipales from './Components/CiudadesPrincipales';
import Header from './Components/Header';
import Main from './Components/Main';
import styled from 'styled-components';

function App() {
  return (
    <First>
      <Header />
      <CiudadesPrincipales />
      <Main />
      <Footer />
    </First>
  );
}

export default App;

export const First = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;
