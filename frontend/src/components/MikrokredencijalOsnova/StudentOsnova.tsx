import styles from './StudentOsnova.module.css';

type Props = {
  id: number;  
  tip: 'potpisani' | 'nepotpisani' | 'informalni'; 
  mk:Mikrokredencijal;
  onApliciraj: (id: number) => void;
};

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

function StudentOsnova({ id, tip, mk, onApliciraj }: Props){

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
          onApliciraj(mkId);
        })
        .catch((err) => {
          console.error(err);
          alert(err.message);
        });

  };

  return (
    <div className= {styles.card}>
      <div className={styles.header}>{mk.naziv}</div>
      <p><strong>Ishodi:</strong> {mk.ishodiUcenja}</p>
      <p><strong>Izdato:</strong> {new Date(mk.datumIzdavanja).toLocaleDateString()}</p>
      <p><strong>ESPB:</strong> {mk.ESPB}</p>
      <p><strong>Nivo:</strong> {mk.nivo}</p>
      <p><strong>Trajanje:</strong> {mk.trajanje}</p>
      <p><strong>Oblik:</strong> {mk.odrzavanje}</p>
      <p><strong>Participacija:</strong> {mk.formaParticipacije}</p>
      <p><strong>Vrsta provere:</strong> {mk.vrstaProcene}</p>
      <p><strong>Supervizija:</strong> {mk.supervizijaProcene}</p>
      <p><strong>Osiguranje kvaliteta:</strong> {mk.tipOsiguranjaKvaliteta}</p>
      <p><strong>Integracija:</strong> {mk.opcijeIntegracije}</p>
      <p><strong>Dodatno:</strong> {mk.dodatneInformacije}</p>

      {tip === 'informalni' && (
        <button className={styles.button} onClick={() => apliciranje(mk.id)}>Apliciraj</button>
      )}
    </div>
  );
}

export default StudentOsnova;