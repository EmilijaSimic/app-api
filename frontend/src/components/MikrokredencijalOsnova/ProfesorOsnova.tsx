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

    return(<div>
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
            <button onClick={() => odbijanje(mp.id)}>Odbij</button>
    </div>
    );

}
export default ProfesorOsnova;