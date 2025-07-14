
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleEditorPage from './pages/StyleEditorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StyleEditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;