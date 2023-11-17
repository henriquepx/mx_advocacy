import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./GlobalStyles";
import MainPage from './pages/MainPage';
import Profissionais from './pages/Profissionais';
import Contato from './pages/Contato';
import AreasAtuacao from './pages/AreasAtuacao';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/areasatuacao" element={<AreasAtuacao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
