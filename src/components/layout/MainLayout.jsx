import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ApplicationTable from '../dashboard/ApplicationTable';

function MainLayout() {
  return (
    <div className="flex bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 min-h-screen">
          <h1 className="text-3xl font-bold text-white mb-2">DevApply Dashboard</h1>
          <p className="text-gray-400 mb-6">Track Your Job Applications</p>
          
          <ApplicationTable />
        </main>
      </div>
    </div>
  )
}

export default MainLayout;
