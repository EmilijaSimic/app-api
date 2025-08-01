import ProfesorMikrokredencijali from "../../components/Mikrokredencijal/ProfesorMikrokredencijal";

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
  return <ProfesorMikrokredencijali id={user.id} />;
}
export default OdgovornoLicePrikaz;
