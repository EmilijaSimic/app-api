import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import AdminPrikaz from './pages/Admin/AdminPrikaz';
import LoginForma from './pages/Login/LoginForma';
import OdgovornoLicePrikaz from './pages/OdgovornoLice/OdgovornoLicePrikaz';
import PolaznikPrikaz from './pages/Polaznik/PolaznikPrikaz';

interface Korisnik {
  id: number;
  email: string;
  ime: string;
  tipKorisnika: string;
}

function App() {
  const [user, setUser] = useState<Korisnik | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const korisnikJson = localStorage.getItem('korisnik');
    if (korisnikJson) setUser(JSON.parse(korisnikJson));
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>Ucitavanje...</h1>;
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForma setUser={setUser} />} />

        <Route
          path="/admin"
          element={
            user?.tipKorisnika === 'Admin' ? (
              <AdminPrikaz user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/polaznik"
          element={
            user?.tipKorisnika === 'Polaznik' ? (
              <PolaznikPrikaz user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/odgovorno_lice"
          element={
            user?.tipKorisnika === 'OdgovornoLice' ? (
              <OdgovornoLicePrikaz user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/"
          element={
            !user ? (
              <Navigate to="/login" />
            ) : user.tipKorisnika === 'Admin' ? (
              <Navigate to="/admin" />
            ) : user.tipKorisnika === 'Polaznik' ? (
              <Navigate to="/polaznik" />
            ) : user.tipKorisnika === 'OdgovornoLice' ? (
              <Navigate to="/odgovorno_lice" />
            ) : (
              <p>Neuspesan login</p>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
