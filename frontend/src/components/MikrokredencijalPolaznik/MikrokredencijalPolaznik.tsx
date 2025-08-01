import { useEffect, useState } from 'react';
import Select from 'react-select';

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

  const handleSubmit = () => {
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
          opisUslova: ' ',
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
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Dodaj polaznika na mikrokredencijal</h2>

      <label>Polaznik:</label>
      <Select
        options={polaznici}
        onChange={(option) => setSelectedPolaznik(option?.value ?? null)}
      />

      <label style={{ marginTop: '1rem' }}>Mikrokredencijal:</label>
      <Select
        options={mikrokredencijali}
        onChange={(option) => setSelectedMikro(option?.value ?? null)}
      />

      <button style={{ marginTop: '1rem' }} onClick={handleSubmit}>
        Dodaj prijavu
      </button>
    </div>
  );
}
export default MikrokredencijalPolaznik;
