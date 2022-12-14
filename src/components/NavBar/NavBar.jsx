import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
    function handleLogOut(evt) {
        userService.logOut();
        setUser(null);
    }
  return (
    <nav>
        <Link to='/orders'>Order History</Link>
         &nbsp; | &nbsp;
        <Link to='/orders/new'>New Order</Link>
        &nbsp; | &nbsp;
        welcome, {user.name}
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>signOut</Link>
    </nav>
  );
}