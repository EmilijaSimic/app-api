import { useEffect, useState } from "react";
import ProfesorOsnova from "../MikrokredencijalOsnova/ProfesorOsnova";
import styles from './ProfesorMikrokredencijal.module.css';

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

   const ukloniStavku = (mpId: number) => {
    setStavke(prev => prev.filter(mp => mp.id !== mpId));
  };
    return (
    <div>
      <h2>Zahtevi za potpis</h2>
      <div className={styles.cards}>
      {stavke.map(mp => 
      <ProfesorOsnova key={mp.id} id={id} mp={mp} onUkloni={ukloniStavku}/>)}
      </div>
    </div>
  );
}
export default ProfesorMikrokredencijali;