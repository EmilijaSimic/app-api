import { useEffect, useState } from 'react';

type Mikrokredencijal = {
  id: number;
  naziv: string;
  ishodiUcenja: string;
  datumIzdavanja: string;
  ESPB: number;
  dodatneInformacije: string;
  formaParticipacije: string;
  nivo: string;
  odrzavanje: string;
  opcijeIntegracije: string;
  supervizijaProcene: string;
  tipOsiguranjaKvaliteta: string;
  trajanje: string;
  vrstaProcene: string;
};

type Props = {
  id: number;  
  tip: 'potpisani' | 'nepotpisani' | 'informalni'; 
};

function StudentMikrokredencijali({ id, tip }: Props) { 
  const [mikros, setMikros] = useState<Mikrokredencijal[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/mikrokredencijal/polaznik/${id}/${tip}`) 
      .then(res => res.json())
      .then(data => {
      console.log("Dobijeni mikrokredencijali:", data);
      setMikros(data);
    })
      .catch(err => console.error(err));
  }, [id, tip]); 

  const apliciranje = async (mkId: number) => {

      fetch('http://localhost:3000/mikrokredencijal-polaznik', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          polaznikId: id,
          mikrokredencijalId: mkId,
          potpisaoId: null,
          blokcejnZapis: ' ',
          ispunjenUslov: false,
          opisUslova: ' ',
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
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

  };


  return (
    <div>
      <h2>Mikrokredencijali za polaznika #{id}</h2>
      <ul>
        {mikros.map(mk => (
          <li key={mk.id}>
            <strong>{mk.naziv}</strong><br />
              Ishodi: {mk.ishodiUcenja}<br />
              Izdato: {new Date(mk.datumIzdavanja).toLocaleDateString()}<br />
              ESPB: {mk.ESPB}<br />
              Nivo: {mk.nivo}<br />
              Trajanje: {mk.trajanje}<br />
              Oblik: {mk.odrzavanje}<br />
              Participacija: {mk.formaParticipacije}<br />
              Vrsta provere: {mk.vrstaProcene}<br />
              Supervizija: {mk.supervizijaProcene}<br />
              Osiguranje kvaliteta: {mk.tipOsiguranjaKvaliteta}<br />
              Integracija: {mk.opcijeIntegracije}<br />
              Dodatno: {mk.dodatneInformacije}
              {tip === 'informalni' && (<button onClick={() => apliciranje(mk.id)}>Apliciraj</button>) }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentMikrokredencijali;