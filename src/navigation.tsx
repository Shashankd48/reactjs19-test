import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FormPage from "./pages/FormPage";
import RootLayout from "./root-layout";
import DashboardLayout from "./pages/dashboard/layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/dashboard/Analytics";

const Navigation = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<RootLayout />}>
               <Route index element={<HomePage />} />
               <Route path="forms" element={<FormPage />} />
               <Route path="about" element={<AboutPage />} />

               <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="analytics" element={<Analytics />} />
               </Route>
            </Route>

            {/* <Route element={<AuthRootLayout />}>
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />
            </Route>

            <Route path="concerts">
               <Route index element={<ConcertsHome />} />
               <Route path=":city" element={<City />} />
               <Route path="trending" element={<Trending />} />
            </Route> */}
         </Routes>
      </BrowserRouter>
   );
};

export default Navigation;
