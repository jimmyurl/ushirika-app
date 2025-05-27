import { useState, useEffect } from 'react';
import { 
  Coffee, Users, Award, TrendingUp, Settings, Image, Edit3, Plus, 
  Save, X, Upload, Eye, EyeOff, Trash2, AlertCircle, CheckCircle,
  Menu, LogOut, Home, MessageSquare, DollarSign, Building
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Data states
  const [carouselSlides, setCarouselSlides] = useState([
    {
      id: 1,
      title: "Welcome to KDCU Limited",
      subtitle: "Ushirika Hai Kwa Maendeleo",
      description: "Karagwe District Co-operative Union Ltd - Empowering small-scale coffee growers in the Kagera region of Tanzania.",
      image_url: null,
      is_active: true,
      order_index: 0
    },
    {
      id: 2,
      title: "Premium Coffee Excellence",
      subtitle: "Quality You Can Trust",
      description: "From our 132 member cooperatives to your cup - experience the finest coffee from the heart of Tanzania.",
      image_url: null,
      is_active: true,
      order_index: 1
    }
  ]);

  const [stats, setStats] = useState({
    amcos_count: 132,
    staff_count: 54,
    coffee_plants: 12342899,
    active_farmers: 25000
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Coffee",
      description: "Premium Coffee is always fresh and our beans are locally roasted right here in Tanzania.",
      price: "1,300",
      image_url: null,
      category: "premium",
      is_active: true
    },
    {
      id: 2,
      name: "4C Coffee Certification",
      description: "4C certification applies high standards on economic, social and environmental conditions for coffee production and processing to establish sustainable practices.",
      price: "1,800",
      image_url: null,
      category: "certified",
      is_active: true
    }
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Mwasika",
      position: "General Manager",
      description: "Leading KDCU with over 15 years of cooperative management experience.",
      image_url: null,
      email: "john.mwasika@kdculimited.co.tz",
      phone: "+255 28 222 0001",
      is_active: true
    }
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "James Bahati",
      role: "Coffee Farmer",
      cooperative: "Nyakahanga AMCOS",
      text: "KDCU has transformed my farming practices. The training and fair prices have improved my family's livelihood significantly.",
      rating: 5,
      image_url: null,
      is_featured: true
    }
  ]);

  const [investments, setInvestments] = useState([
    {
      id: 1,
      title: "Coffee Mill Expansion",
      amount: "USD 500,000",
      description: "Upgrading processing capacity to handle increased production from member cooperatives.",
      status: "ongoing",
      start_date: "2024-01-01",
      end_date: "2024-12-31"
    }
  ]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  // Form states
  const [formData, setFormData] = useState({});

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('kdcu_admin_token');
    localStorage.removeItem('kdcu_admin_user');
    window.location.href = '/login';
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setFormData(item || {});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setEditingItem(null);
    setFormData({});
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual Supabase operations
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local state based on modal type
      switch (modalType) {
        case 'carousel':
          if (editingItem) {
            setCarouselSlides(prev => prev.map(slide => 
              slide.id === editingItem.id ? { ...slide, ...formData } : slide
            ));
          } else {
            setCarouselSlides(prev => [...prev, { 
              id: Date.now(), 
              ...formData, 
              order_index: prev.length 
            }]);
          }
          break;
        case 'product':
          if (editingItem) {
            setProducts(prev => prev.map(product => 
              product.id === editingItem.id ? { ...product, ...formData } : product
            ));
          } else {
            setProducts(prev => [...prev, { id: Date.now(), ...formData, is_active: true }]);
          }
          break;
        case 'team':
          if (editingItem) {
            setTeamMembers(prev => prev.map(member => 
              member.id === editingItem.id ? { ...member, ...formData } : member
            ));
          } else {
            setTeamMembers(prev => [...prev, { id: Date.now(), ...formData, is_active: true }]);
          }
          break;
        case 'testimonial':
          if (editingItem) {
            setTestimonials(prev => prev.map(testimonial => 
              testimonial.id === editingItem.id ? { ...testimonial, ...formData } : testimonial
            ));
          } else {
            setTestimonials(prev => [...prev, { id: Date.now(), ...formData }]);
          }
          break;
        case 'investment':
          if (editingItem) {
            setInvestments(prev => prev.map(investment => 
              investment.id === editingItem.id ? { ...investment, ...formData } : investment
            ));
          } else {
            setInvestments(prev => [...prev, { id: Date.now(), ...formData }]);
          }
          break;
      }
      
      closeModal();
      showMessage('success', `${modalType} ${editingItem ? 'updated' : 'created'} successfully!`);
    } catch (error) {
      showMessage('error', 'Failed to save changes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (type, id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      switch (type) {
        case 'carousel':
          setCarouselSlides(prev => prev.filter(slide => slide.id !== id));
          break;
        case 'product':
          setProducts(prev => prev.filter(product => product.id !== id));
          break;
        case 'team':
          setTeamMembers(prev => prev.filter(member => member.id !== id));
          break;
        case 'testimonial':
          setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
          break;
        case 'investment':
          setInvestments(prev => prev.filter(investment => investment.id !== id));
          break;
      }
      
      showMessage('success', 'Item deleted successfully!');
    } catch (error) {
      showMessage('error', 'Failed to delete item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateStats = async (newStats) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStats(newStats);
      showMessage('success', 'Statistics updated successfully!');
    } catch (error) {
      showMessage('error', 'Failed to update statistics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const Sidebar = () => (
    <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 ${
      isSidebarOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isSidebarOpen ? '' : 'justify-center'}`}>
            <Coffee size={32} className="text-yellow-600" />
            {isSidebarOpen && (
              <div className="ml-3">
                <h2 className="text-xl font-bold">KDCU Admin</h2>
                <p className="text-sm text-gray-400">Management Portal</p>
              </div>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <nav className="mt-8">
        {[
          { id: 'overview', label: 'Overview', icon: Home },
          { id: 'carousel', label: 'Hero Carousel', icon: Image },
          { id: 'stats', label: 'Statistics', icon: TrendingUp },
          { id: 'products', label: 'Products', icon: Coffee },
          { id: 'team', label: 'Team', icon: Users },
          { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
          { id: 'investments', label: 'Investments', icon: DollarSign },
          { id: 'settings', label: 'Settings', icon: Settings }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
              activeTab === id ? 'bg-gray-700 border-r-4 border-yellow-600' : ''
            }`}
          >
            <Icon size={20} />
            {isSidebarOpen && <span className="ml-3">{label}</span>}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 text-red-400 hover:bg-red-900 hover:bg-opacity-20 rounded transition-colors"
        >
          <LogOut size={20} />
          {isSidebarOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <div className={`bg-white shadow-sm border-b transition-all duration-300 ${
      isSidebarOpen ? 'ml-64' : 'ml-16'
    }`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h1>
            <p className="text-gray-600">Manage your KDCU website content</p>
          </div>
          
          {message.text && (
            <div className={`flex items-center px-4 py-2 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message.type === 'success' ? 
                <CheckCircle size={16} className="mr-2" /> : 
                <AlertCircle size={16} className="mr-2" />
              }
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total AMCOS</p>
            <p className="text-3xl font-bold text-gray-900">{stats.amcos_count}</p>
          </div>
          <Users className="text-blue-600" size={32} />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Staff Members</p>
            <p className="text-3xl font-bold text-gray-900">{stats.staff_count}</p>
          </div>
          <Award className="text-green-600" size={32} />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Coffee Plants</p>
            <p className="text-3xl font-bold text-gray-900">{stats.coffee_plants.toLocaleString()}</p>
          </div>
          <Coffee className="text-yellow-600" size={32} />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Farmers</p>
            <p className="text-3xl font-bold text-gray-900">{stats.active_farmers.toLocaleString()}</p>
          </div>
          <TrendingUp className="text-purple-600" size={32} />
        </div>
      </div>
    </div>
  );

  const StatsTab = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Update Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of AMCOS
          </label>
          <input
            type="number"
            value={stats.amcos_count}
            onChange={(e) => setStats(prev => ({ ...prev, amcos_count: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Staff Count
          </label>
          <input
            type="number"
            value={stats.staff_count}
            onChange={(e) => setStats(prev => ({ ...prev, staff_count: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coffee Plants
          </label>
          <input
            type="number"
            value={stats.coffee_plants}
            onChange={(e) => setStats(prev => ({ ...prev, coffee_plants: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Active Farmers
          </label>
          <input
            type="number"
            value={stats.active_farmers}
            onChange={(e) => setStats(prev => ({ ...prev, active_farmers: parseInt(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
      
      <button
        onClick={() => updateStats(stats)}
        disabled={loading}
        className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 disabled:opacity-50"
      >
        {loading ? 'Updating...' : 'Update Statistics'}
      </button>
    </div>
  );

  const DataTable = ({ data, type, columns }) => (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {type.charAt(0).toUpperCase() + type.slice(1)} Management
        </h3>
        <button
          onClick={() => openModal(type)}
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 flex items-center gap-2"
        >
          <Plus size={16} />
          Add New
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(col => (
                <th key={col.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(item => (
              <tr key={item.id}>
                {columns.map(col => (
                  <td key={col.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {col.render ? col.render(item[col.key], item) : item[col.key]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => openModal(type, item)}
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(type, item.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Modal = () => {
    if (!showModal) return null;

    const renderFormFields = () => {
      switch (modalType) {
        case 'carousel':
          return (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={formData.subtitle || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  value={formData.image_url || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </>
          );
        
        case 'product':
          return (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="text"
                  value={formData.price || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select Category</option>
                  <option value="premium">Premium</option>
                  <option value="certified">Certified</option>
                  <option value="organic">Organic</option>
                </select>
              </div>
            </>
          );
        
        case 'team':
          return (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                <input
                  type="text"
                  value={formData.position || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </>
          );
        
        case 'testimonial':
          return (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <input
                  type="text"
                  value={formData.role || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Cooperative</label>
                <input
                  type="text"
                  value={formData.cooperative || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, cooperative: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Testimonial Text</label>
                <textarea
                  value={formData.text || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select
                  value={formData.rating || 5}
                  onChange={(e) => setFormData(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_featured || false}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                    className="mr-2"
                  />
                  Featured Testimonial
                </label>
              </div>
            </>
          );
        
        case 'investment':
          return (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input
                  type="text"
                  value={formData.amount || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="e.g., USD 500,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status || 'planned'}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="planned">Planned</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="paused">Paused</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.start_date || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, start_date: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={formData.end_date || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, end_date: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </>
          );
        
        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              {editingItem ? 'Edit' : 'Add'} {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>
          
          {renderFormFields()}
          
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? 'Saving...' : (
                <>
                  <Save size={16} />
                  Save
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      
      case 'stats':
        return <StatsTab />;
      
      case 'carousel':
        return (
          <DataTable
            data={carouselSlides}
            type="carousel"
            columns={[
              { key: 'title', label: 'Title' },
              { key: 'subtitle', label: 'Subtitle' },
              { 
                key: 'description', 
                label: 'Description',
                render: (desc) => desc.length > 50 ? desc.substring(0, 50) + '...' : desc
              },
              { 
                key: 'is_active', 
                label: 'Status',
                render: (active) => active ? 'Active' : 'Inactive'
              }
            ]}
          />
        );
      
      case 'products':
        return (
          <DataTable
            data={products}
            type="product"
            columns={[
              { key: 'name', label: 'Product Name' },
              { 
                key: 'description', 
                label: 'Description',
                render: (desc) => desc.length > 50 ? desc.substring(0, 50) + '...' : desc
              },
              { key: 'price', label: 'Price' },
              { key: 'category', label: 'Category' },
              { 
                key: 'is_active', 
                label: 'Status',
                render: (active) => active ? 'Active' : 'Inactive'
              }
            ]}
          />
        );
      
      case 'team':
        return (
          <DataTable
            data={teamMembers}
            type="team"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'position', label: 'Position' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { 
                key: 'is_active', 
                label: 'Status',
                render: (active) => active ? 'Active' : 'Inactive'
              }
            ]}
          />
        );
      
      case 'testimonials':
        return (
          <DataTable
            data={testimonials}
            type="testimonial"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'role', label: 'Role' },
              { key: 'cooperative', label: 'Cooperative' },
              { 
                key: 'text', 
                label: 'Testimonial',
                render: (text) => text.length > 50 ? text.substring(0, 50) + '...' : text
              },
              { key: 'rating', label: 'Rating' }
            ]}
          />
        );
      
      case 'investments':
        return (
          <DataTable
            data={investments}
            type="investment"
            columns={[
              { key: 'title', label: 'Title' },
              { key: 'amount', label: 'Amount' },
              { key: 'status', label: 'Status' },
              { key: 'start_date', label: 'Start Date' },
              { key: 'end_date', label: 'End Date' }
            ]}
          />
        );
      
      case 'settings':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="KDCU Limited"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Tagline
                </label>
                <input
                  type="text"
                  defaultValue="Ushirika Hai Kwa Maendeleo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  defaultValue="info@kdculimited.co.tz"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+255 28 222 xxxx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  defaultValue="Karagwe, Kagera Region, Tanzania"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                Save Settings
              </button>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to manage content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header />
        <main className="p-6">
          {renderTabContent()}
        </main>
      </div>
      <Modal />
    </div>
  );
};

export default Dashboard;