import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './authHelper';

const PrivateRoutes = () => {
    const { currentUser } = useAuth();
    console.log({ currentUser })
    return(
        !currentUser ? <Navigate to="/login"/> : <Outlet/>
    )
}

export default PrivateRoutes