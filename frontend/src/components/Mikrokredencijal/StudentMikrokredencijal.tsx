import { useEffect, useState } from 'react';
import StudentOsnova from '../MikrokredencijalOsnova/StudentOsnova';
import styles from './StudentMikrokredencijal.module.css';

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

  var naslov = "";
  if(tip==="potpisani"){
    naslov="Stečeni mikrokredencijali: "
  }else if(tip==="nepotpisani"){
    naslov="Mikrokredencijali na čekanju: "
  }else {naslov="Možeš da apliciraš za: "
  }

  const izmeniMikrokredencijal = (mkId: number) => {
    setMikros(prev => prev.filter(mk => mk.id !== mkId));
  };

  return (
    <div>
      <h2>{naslov}</h2>
      <div className={styles.cards}>
      {mikros.map(mk => 
      <StudentOsnova key={mk.id} id={id} tip={tip} mk={mk} onApliciraj={izmeniMikrokredencijal}/>)}
      </div>
    </div>
  );
}

export default StudentMikrokredencijali;