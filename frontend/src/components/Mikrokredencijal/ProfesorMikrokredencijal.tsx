import { useEffect, useState } from "react";

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

type MikrokredencijalPolaznik = {
  id: number;
  mikrokredencijal: Mikrokredencijal;
  polaznik: {
    id: number;
    ime: string;
    prezime: string;
    brojIndeksa: string;
  };
};

type Props = {
  id: number;
};

function ProfesorMikrokredencijali({ id }: Props) {
  const [stavke, setStavke] = useState<MikrokredencijalPolaznik[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/mikrokredencijal/profesor/${id}/mikrokredencijali`)
      .then(res => res.json())
      .then(data => {console.log("Dobijeni mikrokredencijali:", data);
        setStavke(data)})
      .catch(err => console.error(err));
  }, [id]);

const potpisivanje = async (mpId: number) => {
  await fetch(`http://localhost:3000/mikrokredencijal-polaznik/${mpId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      potpisaoId: id,         
      ispunjenUslov: true,
    }),
  });

  setStavke(prev => prev.filter(mp => mp.id !== mpId));
};

    return (
    <div>
      <h2>Mikrokredencijali koje treba da potpiše profesor #{id}</h2>
      <ul>
        {stavke.map(mp => (
          <li key={mp.id}>
            <strong>{mp.mikrokredencijal.naziv}</strong><br />
              Ishodi: {mp.mikrokredencijal.ishodiUcenja}<br />
              Izdato: {new Date(mp.mikrokredencijal.datumIzdavanja).toLocaleDateString()}<br />
              ESPB: {mp.mikrokredencijal.ESPB}<br />
              Nivo: {mp.mikrokredencijal.nivo}<br />
              Trajanje: {mp.mikrokredencijal.trajanje}<br />
              Oblik: {mp.mikrokredencijal.odrzavanje}<br />
              Participacija: {mp.mikrokredencijal.formaParticipacije}<br />
              Vrsta provere: {mp.mikrokredencijal.vrstaProcene}<br />
              Supervizija: {mp.mikrokredencijal.supervizijaProcene}<br />
              Osiguranje kvaliteta: {mp.mikrokredencijal.tipOsiguranjaKvaliteta}<br />
              Integracija: {mp.mikrokredencijal.opcijeIntegracije}<br />
              Dodatno: {mp.mikrokredencijal.dodatneInformacije}<br />
            <strong>Polaznik: {mp.polaznik.ime} {mp.polaznik.prezime}</strong> ({mp.polaznik.brojIndeksa})<br />
            <button onClick={() => potpisivanje(mp.id)}>Potpiši</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProfesorMikrokredencijali;