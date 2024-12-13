import { Outlet } from "react-router";

const DashboardLayout = () => {
   return (
      <div className="flex gap-2">
         <aside className="flex flex-col gap-6 px-3 border-r border-neutral-300 max-w-[200px] min-h-[500px]">
            {links.map(({ to, label }) => (
               <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                     isActive
                        ? " text-blue-700 font-semibold border-b border-blue-700"
                        : ""
                  }
               >
                  {label}
               </NavLink>
            ))}
         </aside>
         <section>
            <Outlet />
         </section>
      </div>
   );
};

export default DashboardLayout;

import { NavLink } from "react-router";

const links = [
   {
      to: "/dashboard",
      label: "Dashboard",
   },
   {
      to: "/dashboard/analytics",
      label: "Analytics",
   },
];
