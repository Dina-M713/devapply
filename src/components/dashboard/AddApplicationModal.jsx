import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function AddApplicationModal({ isOpen, onClose, onSave, editingApp }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    appliedDate: '',
    interviewDate: '',
  });

  
  useEffect(() => {
    if (editingApp) {
      setFormData({
        company: editingApp.company || '',
        role: editingApp.role || '',
        status: editingApp.status || 'Applied',
        appliedDate: editingApp.appliedDate || '',
        interviewDate: editingApp.interviewDate || '',
      });
    } else {
      
      setFormData({
        company: '',
        role: '',
        status: 'Applied',
        appliedDate: new Date().toISOString().split('T')[0],
        interviewDate: '',
      });
    }
  }, [editingApp, isOpen]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company ||!formData.role) return;
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">
            {editingApp? 'Edit Application' : 'Add New Application'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded border border-gray-600 text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded border border-gray-600 text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Applied Date</label>
            <input
              type="date"
              name="appliedDate"
              value={formData.appliedDate}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded border border-gray-600 text-white"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Interview Date</label>
            <input
              type="date"
              name="interviewDate"
              value={formData.interviewDate}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded border border-gray-600 text-white"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded text-white"
            >
              {editingApp? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplicationModal;