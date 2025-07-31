import Mikrokredencijali from '../../components/Mikrokredencijali';

interface Korisnik {
  id: number;
  email: string;
  ime: string;
  tipKorisnika: string;
}
interface PolaznikPrikazProps {
  user: Korisnik;
}
function PolaznikPrikaz({ user }: PolaznikPrikazProps) {
  return <Mikrokredencijali id={user.id} tip="potpisani" />;
}
export default PolaznikPrikaz;
