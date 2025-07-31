import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Korisnik {
  id: number;
  email: string;
  ime: string;
  tipKorisnika: string;
}

interface LoginFormaProps {
  setUser: (user: Korisnik) => void;
}

function LoginForma({ setUser }: LoginFormaProps) {
  const [email, setEmail] = useState('');
  const [lozinka, setLozinka] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3000/korisnik/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lozinka }),
      });

      if (!res.ok) {
        const text = await res.text();
        if (res.status === 401) {
          setError('Pogrešan email ili lozinka.');
        } else {
          setError(`Greška na serveru (${res.status}): ${text}`);
        }
        return;
      }

      const data = await res.json();
      const { korisnik, access_token } = data;

      localStorage.setItem('token', access_token);
      localStorage.setItem('korisnik', JSON.stringify(korisnik));

      setUser(korisnik);
      navigate('/');
    } catch {
      setError('Greška na mreži, pokušajte ponovo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '0 auto' }}>
      <h2>Prijava</h2>

      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="username"
      />

      <label style={{ marginTop: 10 }}>Lozinka:</label>
      <input
        type="password"
        value={lozinka}
        onChange={(e) => setLozinka(e.target.value)}
        required
        autoComplete="current-password"
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" style={{ marginTop: 15 }}>
        Prijavi se
      </button>
    </form>
  );
}

export default LoginForma;
