import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const AppLayout = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <main className="container mb-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
