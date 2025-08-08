import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

import styles from './MikrokredencijalPolaznik.module.css';

type Option = { value: number; label: string };
function MikrokredencijalPolaznik() {
  const [polaznici, setPolaznici] = useState<Option[]>([]);
  const [mikrokredencijali, setMikrokredencijali] = useState<Option[]>([]);
  const [selectedPolaznik, setSelectedPolaznik] = useState<number | null>(null);
  const [selectedMikro, setSelectedMikro] = useState<number | null>(null);

  useEffect(() => {
    // Uzimanje podataka iz baze
    fetch('http://localhost:3000/polaznik')
      .then((res) => res.json())
      .then((data) => {
        const options = data.map((p: any) => ({
          value: p.id,
          label: `${p.ime} ${p.prezime}`,
        }));
        setPolaznici(options);
      });

    fetch('http://localhost:3000/mikrokredencijal')
      .then((res) => res.json())
      .then((data) => {
        const options = data.map((m: any) => ({
          value: m.id,
          label: m.naziv,
        }));
        setMikrokredencijali(options);
      });
  }, []);

  const customStyles: StylesConfig<Option, false> = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgb(172, 200, 253)' : 'white',
      color: 'rgb(42, 96, 197)',
      padding: 10,
      cursor: 'pointer',
    }),
    control: (provided) => ({
      ...provided,
      borderColor: '#ccc',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#999',
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgb(42, 96, 197)',
    }),
  };

  const handleSubmit = () => {
    const opis = window.prompt('Unesite koje preduslove je ispunio kandidat:');

    if (opis === null || opis.trim() === '') {
      alert('Odobravanje otkazano. Opis uslova je obavezan.');
      return;
    }
    if (selectedPolaznik && selectedMikro) {
      fetch('http://localhost:3000/mikrokredencijal-polaznik', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          polaznikId: selectedPolaznik,
          mikrokredencijalId: selectedMikro,
          potpisaoId: null,
          blokcejnZapis: ' ',
          ispunjenUslov: false,
          opisUslova: opis,
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
            // Ako nije OK, pročitaj poruku greške iz JSON-a
            const errData = await res.json();
            throw new Error(errData.message || 'Greška pri dodavanju.');
          }
          return res.json();
        })
        .then(() => {
          alert('Uspešno dodato!');
        })
        .catch((err) => {
          console.error(err);
          alert(err.message);
        });
    } else {
      alert('Izaberi oba polja.');
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <h2 className={styles.naslov}>Dodajte polaznika na mikrokredencijal</h2>
      <div className={styles.okvir}>
        <label className={styles.naslov}>Polaznik:</label>
        <Select
          options={polaznici}
          onChange={(option) => setSelectedPolaznik(option?.value ?? null)}
          styles={customStyles}
        />

        <label style={{ marginTop: '1rem' }} className={styles.naslov}>
          Mikrokredencijal:
        </label>
        <Select
          options={mikrokredencijali}
          onChange={(option) => setSelectedMikro(option?.value ?? null)}
          styles={customStyles}
        />
      </div>
      <button onClick={handleSubmit} className={styles.dugme}>
        Dodaj prijavu
      </button>
    </div>
  );
}
export default MikrokredencijalPolaznik;
