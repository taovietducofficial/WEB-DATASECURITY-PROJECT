import Home from '../pages/home/Home';
import Admin from '../pages/admin/Admin';
import Approval from '../pages/admin/Approval';
import Login from '../pages/admin/Login';
import Monitoring from '../pages/admin/Monitoring';
import Storage from '../pages/admin/Storage';
import Verification from '../pages/admin/Verification';

const adminRoutes = [
    { path: '/home', component: Home },
    { path: '/admin', component: Admin },
    { path: '/approval', component: Approval },
    { path: '/login', component: Login },
    { path: '/monitoring', component: Monitoring },
    { path: '/storage', component: Storage },
    { path: '/verification', component: Verification },
];

export default adminRoutes;
