import Mikrokredencijali from '../../components/Mikrokredencijali';

interface Korisnik {
  id: number;
  email: string;
  ime: string;
  tipKorisnika: string;
}
interface OdgovornoLicePrikazProps {
  user: Korisnik;
}

function OdgovornoLicePrikaz({ user }: OdgovornoLicePrikazProps) {
  return <Mikrokredencijali id={user.id} tip="profesor" />;
}
export default OdgovornoLicePrikaz;
