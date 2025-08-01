import LogoutDugme from '../../components/LogoutDugme/LogoutDugme';
import ProfesorMikrokredencijali from '../../components/Mikrokredencijal/ProfesorMikrokredencijal';

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
    <>
      <ProfesorMikrokredencijali id={user.id} />
      <LogoutDugme />
    </>
  );
}
export default OdgovornoLicePrikaz;
