import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                {/* <Route path="/pictures" element={<Pictures />} /> */}
            </Routes>
        </Router>
    );
}

export default App;