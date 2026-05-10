import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ApplicationTable from '../dashboard/ApplicationTable';
import StatsCard from '../dashboard/StatsCard';
import StatusChart from '../dashboard/StatusChart'; 
import { applications } from '../../data/mockdata';

function MainLayout() {
<<<<<<< HEAD
  
=======
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('devapply-apps');
    return saved? JSON.parse(saved) : initialData;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp,setEditingApp] = useState(null);

  useEffect(() => {
    localStorage.setItem('devapply-apps', JSON.stringify(applications));
  }, [applications]);

  const handleSaveApplication = (appData) => {
    if (editingApp) {
      
      setApplications(prev =>
        prev.map(app => (app.id === editingApp.id? {...app,...appData } : app))
      );
      setEditingApp(null);
    } else {
      
      setApplications(prev => [...prev, {...appData, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteApplication = (id) => {
    setApplications(prev => prev.filter(app => app.id!== id));
  };

   const handleEditApplication = (app) => {
    setEditingApp(app);
    setIsModalOpen(true);
  };

   const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingApp(null);
  };


>>>>>>> 45a0746 (Implement full CRUD with LocalStorage - Add, Delete, Edit, Interview Date and Update)
  const totalApps = applications.length;
  const interviews = applications.filter(app => app.status === 'Interview').length;
  const offers = applications.filter(app => app.status === 'Offer').length;
  const rejected = applications.filter(app => app.status === 'Rejected').length;

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">DevApply Dashboard</h1>
            <p className="text-gray-400">Track and manage your job applications</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 text-white"
          >
            + Add Application
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Applications" value={totalApps} icon={<FaPaperPlane />} />
          <StatsCard title="Interviews" value={interviews} icon={<FaHandshake />} />
          <StatsCard title="Offers" value={offers} icon={<FaGift />} />
          <StatsCard title="Rejected" value={rejected} icon={<FaTimesCircle />} />
        </div>

        {/* Main Grid: Table + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ApplicationTable applications={applications}
            onEdit={handleEditApplication} 
            onDelete={handleDeleteApplication} />
>>>>>>> 45a0746 (Implement full CRUD with LocalStorage - Add, Delete, Edit, Interview Date and Update)
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
<<<<<<< HEAD
=======

      
       <AddApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal} 
        onSave={handleSaveApplication} 
        editingApp={editingApp} 
      />
>>>>>>> 45a0746 (Implement full CRUD with LocalStorage - Add, Delete, Edit, Interview Date and Update)
    </div>
  )
}

export default MainLayout;