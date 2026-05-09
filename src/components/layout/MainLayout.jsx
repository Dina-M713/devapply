import Navbar from './Navbar';
import Sidebar from './Sidebar';

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-gray-900 min-h-screen">
          
          <h1 className="text-white">Dashboard Coming...</h1>
        </main>
      </div>
    </div>
  )
}

export default MainLayout;