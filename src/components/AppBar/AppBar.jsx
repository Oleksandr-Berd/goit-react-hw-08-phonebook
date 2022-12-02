import css from '../AppBar/AppBar.module.css';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'Hooks/useAuth';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
