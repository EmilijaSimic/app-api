import { useNavigate } from 'react-router-dom';

function LogoutDugme() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('korisnik');
    localStorage.removeItem('token');
    navigate('/login');
  };
  return <button onClick={handleClick}> Odjavi se</button>;
}
export default LogoutDugme;
