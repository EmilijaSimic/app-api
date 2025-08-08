import LogoutDugme from '../../components/LogoutDugme/LogoutDugme';
import MikrokredencijalPolaznik from '../../components/MikrokredencijalPolaznik/MikrokredencijalPolaznik';
import styles from './AdminPrikaz.module.css';
interface Korisnik {
  id: number;
  email: string;
  ime: string;
  tipKorisnika: string;
}

interface AdminPrikazProps {
  user: Korisnik;
}

function AdminPrikaz({ user }: AdminPrikazProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logout}>
        <LogoutDugme />
      </div>
      <div className={styles.content}>
        <MikrokredencijalPolaznik />
      </div>
    </div>
  );
}
export default AdminPrikaz;
