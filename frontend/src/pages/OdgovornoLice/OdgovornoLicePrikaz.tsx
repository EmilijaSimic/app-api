import LogoutDugme from '../../components/LogoutDugme/LogoutDugme';
import ProfesorMikrokredencijali from '../../components/Mikrokredencijal/ProfesorMikrokredencijal';
import styles from './OdgovornoLice.module.css';
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
  return (
    <div className={styles.wrapper}>
      <div className={styles.logout}>
        <LogoutDugme />
      </div>
      <div className={styles.content}>
        <ProfesorMikrokredencijali id={user.id} />
      </div>
    </div>
  );
}
export default OdgovornoLicePrikaz;
