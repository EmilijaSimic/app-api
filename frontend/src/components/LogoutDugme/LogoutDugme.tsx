import { useNavigate } from 'react-router-dom';
import styles from './LogoutDugme.module.css';
function LogoutDugme() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('korisnik');
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <button onClick={handleClick} className={styles.dugme}>
      Odjavi se
    </button>
  );
}
export default LogoutDugme;
