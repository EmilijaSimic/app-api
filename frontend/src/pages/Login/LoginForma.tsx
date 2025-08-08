import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForma.module.css';
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
    <div className={styles.pozadina}>
      <div className={styles.okvir}>
        <form onSubmit={handleSubmit} className={styles.forma}>
          <h2>Prijavite se</h2>
          <div className={styles.polja}>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />

            <label>Lozinka:</label>
            <input
              type="password"
              value={lozinka}
              onChange={(e) => setLozinka(e.target.value)}
              required
              autoComplete="current-password"
            />

            {error && <p className={styles.greska}>{error}</p>}
          </div>
          <button className={styles.dugme} type="submit">
            Prijavi se
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForma;
