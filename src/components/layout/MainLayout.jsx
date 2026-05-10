import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ApplicationTable from '../dashboard/ApplicationTable';
import StatsCard from '../dashboard/StatsCard';
import StatusChart from '../dashboard/StatusChart'; 
import { applications } from '../../data/mockdata';

function MainLayout() {
  
  const totalApps = applications.length;
  const interviews = applications.filter(app => app.status === 'Interview').length;
  const offers = applications.filter(app => app.status === 'Offer').length;
  const rejected = applications.filter(app => app.status === 'Rejected').length;

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      <Sidebar />
      
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6 bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">DevApply Dashboard</h1>
            <p className="text-gray-400">Track and manage your job applications</p>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Total Applications" 
              value={totalApps} 
              color="text-blue-400"
            />
            <StatsCard 
              title="Interviews" 
              value={interviews} 
              color="text-yellow-400"
            />
            <StatsCard 
              title="Offers" 
              value={offers} 
              color="text-green-400"
            />
            <StatsCard 
              title="Rejected" 
              value={rejected} 
              color="text-red-400"
            />
          </div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
  <div className="lg:col-span-2">
    <ApplicationTable />
  </div>
  <div>
    <StatusChart applications={applications} />
  </div>
</div>

          
        </main>
      </div>
    </div>
  )
}

export default MainLayout;