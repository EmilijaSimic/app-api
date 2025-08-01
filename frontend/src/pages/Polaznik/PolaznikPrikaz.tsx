import StudentMikrokredencijali from "../../components/Mikrokredencijal/StudentMikrokredencijal";

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
  return (
  <div>
    <StudentMikrokredencijali id = {user.id} tip = "potpisani"/>
    <StudentMikrokredencijali id = {user.id} tip = "nepotpisani"/>
  </div>);
  //<Mikrokredencijali id={user.id} tip="potpisani" />;
}
export default PolaznikPrikaz;
