import { useState } from 'react';
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

{/*<div className={styles.mikros}>
      <div className={styles.logout}>
        <LogoutDugme/>
      </div>
      <StudentMikrokredencijali id={user.id} tip="potpisani" />
      <StudentMikrokredencijali id={user.id} tip="nepotpisani" />
      <StudentMikrokredencijali id={user.id} tip="informalni" />
    </div>*/}
function PolaznikPrikaz({ user }: PolaznikPrikazProps) {

const [selected, setSelected] = useState<"potpisani" | "nepotpisani" | "informalni">("potpisani");


  return (

    <>
    <div className={styles.page}>
      <header className={styles.upper}>
        <div className={styles.wrapper}>
          <div className={styles.buttons}>
            <button
              className={`${styles.btn} ${selected === "potpisani" ? styles.active : ""}`}
              onClick={() => setSelected("potpisani") }
            > Stečeni mikrokredencijali</button>

            <button
              className={`${styles.btn} ${selected === "nepotpisani" ? styles.active : ""}`}
              onClick={() => setSelected("nepotpisani")}
            >Mikrokredencijali na čekanju</button>

            <button
              className={`${styles.btn} ${selected === "informalni" ? styles.active : ""}`}
              onClick={() => setSelected("informalni")}
            >Informalni mikrokredencijali</button>
          </div>
        </div>

        <div className={styles.logout}>
          <LogoutDugme />
        </div>
      </header>

      <main className={styles.mikros}>
        <StudentMikrokredencijali id={user.id} tip={selected} />
      </main>
      </div>
    </>


  );
}
export default PolaznikPrikaz;
