import LogoutDugme from '../../components/LogoutDugme/LogoutDugme';
import StudentMikrokredencijali from '../../components/Mikrokredencijal/StudentMikrokredencijal';
import styles from './PolaznikPrikaz.module.css';

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
    <div className={styles.mikros}>
      <StudentMikrokredencijali id={user.id} tip="potpisani" />
      <StudentMikrokredencijali id={user.id} tip="nepotpisani" />
      <StudentMikrokredencijali id={user.id} tip="informalni"/>
      <LogoutDugme />
    </div>
  );
}
export default PolaznikPrikaz;
