import { Profile, Sidebar } from '../components/Components';

interface DashboardProps {}

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Profile />
      {/*<h2>Dashboard Page</h2>*/}
      {/*<button>log out</button>*/}
    </div>
  );
}