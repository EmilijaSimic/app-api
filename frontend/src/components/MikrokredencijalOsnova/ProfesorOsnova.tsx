import styles from './ProfesorOsnova.module.css';

type Props = {
    id:number;
    mp:MikrokredencijalPolaznik;
    onUkloni:(id: number) => void;
}

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
function ProfesorOsnova({id, mp, onUkloni}:Props){

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
  onUkloni(mpId);
};

const odbijanje = async (mpId: number) => {
  await fetch(`http://localhost:3000/mikrokredencijal-polaznik/${mpId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  onUkloni(mpId);
};

    return(<div className={styles.card}>
            <div className={styles.header}>{mp.mikrokredencijal.naziv}</div>
            <p><strong>Ishodi:</strong> {mp.mikrokredencijal.ishodiUcenja}</p>
            <p><strong>Izdato:</strong> {new Date(mp.mikrokredencijal.datumIzdavanja).toLocaleDateString()}</p>
            <p><strong>ESPB:</strong> {mp.mikrokredencijal.ESPB}</p>
            <p><strong>Nivo:</strong> {mp.mikrokredencijal.nivo}</p>
            <p><strong>Trajanje:</strong> {mp.mikrokredencijal.trajanje}</p>
            <p><strong>Oblik:</strong> {mp.mikrokredencijal.odrzavanje}</p>
            <p><strong>Participacija:</strong> {mp.mikrokredencijal.formaParticipacije}</p>
            <p><strong>Vrsta provere:</strong> {mp.mikrokredencijal.vrstaProcene}</p>
            <p><strong>Supervizija:</strong> {mp.mikrokredencijal.supervizijaProcene}</p>
            <p><strong>Osiguranje kvaliteta:</strong> {mp.mikrokredencijal.tipOsiguranjaKvaliteta}</p>
            <p><strong>Integracija:</strong> {mp.mikrokredencijal.opcijeIntegracije}</p>
            <p><strong>Dodatno:</strong> {mp.mikrokredencijal.dodatneInformacije}</p>
            <strong>Polaznik: {mp.polaznik.ime} {mp.polaznik.prezime}</strong> ({mp.polaznik.brojIndeksa})<br />
            <button className={styles.button} onClick={() => potpisivanje(mp.id)}>Potpiši</button>
            <button className={styles.button} onClick={() => odbijanje(mp.id)}>Odbij</button>
    </div>
    );

}
export default ProfesorOsnova;