import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import userRoutes from './routers/user';
import adminRoutes from './routers/admin';
import team2Routes from './routers/team2';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const isTeam2Page = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isTeam2Page && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      )}
      <div className={`flex-grow ${!isTeam2Page ? 'mt-16' : ''}`}>
        <Routes>
          {[...adminRoutes, ...userRoutes, ...team2Routes].map((route, index) => {
            const Component = route.component;
            return (
              <Route 
                key={index} 
                path={route.path} 
                element={<Component />} 
              />
            );
          })}
        </Routes>
      </div>
      {!isTeam2Page && <Footer className="mt-auto" />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
