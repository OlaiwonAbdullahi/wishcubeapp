import DashboardNavbar from "./components/dashboardNav";
import Generator from "./components/generator";
import Menu from "./components/menu";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <Generator />
      <Menu />
    </div>
  );
};

export default Dashboard;
