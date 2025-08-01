import MikrokredencijalPolaznik from '../../components/MikrokredencijalPolaznik/MikrokredencijalPolaznik';

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
  return <MikrokredencijalPolaznik />;
}
export default AdminPrikaz;
