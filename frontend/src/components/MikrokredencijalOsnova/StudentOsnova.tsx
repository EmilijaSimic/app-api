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
    <div>
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
    </div>
  );
}

export default StudentOsnova;