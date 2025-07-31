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
  return <h1>odgovorno lice {user.ime}</h1>;
}
export default OdgovornoLicePrikaz;
