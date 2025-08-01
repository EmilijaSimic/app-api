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
  tip: 'potpisani' | 'nepotpisani'; 
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentMikrokredencijali;