import Home from '../pages/home/Home';
import Admin from '../pages/admin/Admin';
import Approval from '../pages/admin/Approval';
import Login from '../pages/admin/Login';
import Monitoring from '../pages/admin/Monitoring';
import Storage from '../pages/admin/Storage';
import Verification from '../pages/admin/Verification';
import Dashboard from '../pages/admin/Dashboard';
import Adminapproval from '../pages/admin/Adminapproval';
import Adminmonitoring from '../pages/admin/Adminmonitoring';
import Adminstorage from '../pages/admin/Adminstorage';
import Adminverification from '../pages/admin/Adminverification';

const adminRoutes = [
    { path: '/home', component: Home },
    { path: '/admin', component: Admin },
    { path: '/approval', component: Approval },
    { path: '/login', component: Login },
    { path: '/monitoring', component: Monitoring },
    { path: '/storage', component: Storage },
    { path: '/verification', component: Verification },
    { path: '/dashboard', component: Dashboard },
    { path: '/admin/approval', component: Adminapproval },
    { path: '/admin/monitoring', component: Adminmonitoring },
    { path: '/admin/storage', component: Adminstorage },
    { path: '/admin/verification', component: Adminverification },
];

export default adminRoutes;
