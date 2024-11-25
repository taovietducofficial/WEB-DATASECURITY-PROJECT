import Home from "../pages/home/Home";
import Services from "../pages/user/Services";
import Process from "../pages/user/Process";
import Contact from "../pages/user/Contact";
import Fill_Info from "../pages/user/Fill_Info";    
import Signup from "../pages/user/Signup";

const userRoutes = [
    { path: "/home", component: Home },
    { path: "/services", component: Services },
    { path: "/process", component: Process },
    { path: "/contact", component: Contact },
    { path: "/fill-info", component: Fill_Info },
    { path: "/signup", component: Signup },
];

export default userRoutes;
