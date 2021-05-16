import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/partials/Header'
import Content from './components/Content'
import Footer from './components/partials/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
