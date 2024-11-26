import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { getUserName } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={styles.container}>
      <p className={styles.text}>Welcome, {name}</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
