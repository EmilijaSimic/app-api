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
  return <h1>admin {user.ime}</h1>;
}
export default AdminPrikaz;
