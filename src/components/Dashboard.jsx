import { useState, useEffect } from 'react';
// Removed useLocation and Link as they are no longer directly used for sidebar navigation
import { 
  Coffee, Users, Award, TrendingUp, Settings, Image, Edit3, Plus, 
  Save, X, Upload, Eye, EyeOff, Trash2, AlertCircle, CheckCircle,
  Menu, LogOut, Home, MessageSquare, DollarSign, Building, User, Package, ChevronRight, Megaphone, UserCheck, ShoppingBag
} from 'lucide-react'; 
import { createClient } from '@supabase/supabase-js';
import '../AdminDashboard.css'; // Import the new CSS

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  // Removed isMenuOpen state as sidebar is removed
  // const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // Removed useLocation as it's not used after sidebar removal
  // const location = useLocation(); 

  // Data states (keeping original for now)
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

  // Form states - FIX: Corrected useState initialization
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

  const getCurrentPageTitle = () => {
    switch (activeTab) {
      case 'overview': return 'Dashboard Overview';
      case 'carousel': return 'Hero Carousel Management';
      case 'stats': return 'Statistics Management';
      case 'products': return 'Product Management';
      case 'team': return 'Team Management';
      case 'testimonials': return 'Testimonials Management';
      case 'investments': return 'Investments Management';
      case 'settings': return 'Website Settings';
      default: return 'Admin Panel';
    }
  };

  // Removed Sidebar component
  // const Sidebar = () => (...)

  const Header = () => (
    <header className="admin-header"> 
      <div className="admin-header-container"> 
        {/* Removed menu button for mobile as sidebar is removed */}
        {/* <button 
          onClick={() => setIsMenuOpen(true)} 
          className="admin-menu-button" 
        >
          <Menu size={20} />
        </button> */}
        
        <h1 className="admin-page-title"> 
          {getCurrentPageTitle()}
        </h1>
        
        <div className="admin-user-menu"> 
          <span className="admin-user-name">Admin</span> 
          <div className="admin-user-avatar"> 
            <User size={18} />
          </div>
          <button 
            className="admin-logout-icon" 
            onClick={handleLogout}
            type="button"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );

  const OverviewTab = () => (
    <div className="admin-overview"> 
      <div className="admin-welcome-banner"> 
        <div className="admin-welcome-content">
          <h1 className="admin-welcome-title">Welcome to KDCU Admin Dashboard</h1>
          <p className="admin-welcome-subtitle">
            Manage your website content, products, and user registrations from one place
          </p>
        </div>
        <div className="admin-welcome-stats">
          <div className="admin-stat-item">
            <span className="admin-stat-value">{stats.active_farmers.toLocaleString()}</span>
            <span className="admin-stat-label">Active Farmers</span>
          </div>
          <div className="admin-stat-item">
            <span className="admin-stat-value">{stats.amcos_count}</span>
            <span className="admin-stat-label">Total AMCOS</span>
          </div>
        </div>
      </div>

      <div className="admin-dashboard-stats"> 
        <div className="admin-stat-card"> 
          <div className="admin-stat-header">Total AMCOS</div>
          <div className="admin-stat-number">{stats.amcos_count}</div>
          <div className="admin-stat-trend admin-trend-up">↑ 12.5%</div> 
        </div>
        
        <div className="admin-stat-card">
          <div className="admin-stat-header">Staff Members</div>
          <div className="admin-stat-number">{stats.staff_count}</div>
          <div className="admin-stat-trend admin-trend-up">↑ 8.3%</div>
        </div>
        
        <div className="admin-stat-card">
          <div className="admin-stat-header">Coffee Plants</div>
          <div className="admin-stat-number">{stats.coffee_plants.toLocaleString()}</div>
          <div className="admin-stat-trend admin-trend-up">↑ 15.2%</div>
        </div>
        
        <div className="admin-stat-card">
          <div className="admin-stat-header">Active Farmers</div>
          <div className="admin-stat-number">{stats.active_farmers.toLocaleString()}</div>
          <div className="admin-stat-trend admin-trend-down">↓ 1.8%</div>
        </div>
      </div>

      <h2 className="admin-section-title">Key Management Areas</h2> 
      <div className="admin-stats-grid"> 
        <div className="admin-card">
          <div className="admin-card-header">
            <Image size={18} /> Hero Section
          </div>
          <div className="admin-card-value">Active</div>
          <p className="admin-text-sm admin-text-secondary">Last updated: 2 days ago</p>
          <button onClick={() => setActiveTab('carousel')} className="admin-quick-link">
            Edit Hero <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="admin-card">
          <div className="admin-card-header">
            <Package size={18} /> Products
          </div>
          <div className="admin-card-value">{products.length}</div>
          <p className="admin-text-sm admin-text-secondary">Total products</p>
          <button onClick={() => setActiveTab('products')} className="admin-quick-link">
            Manage Products <ChevronRight size={16} />
          </button>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <Users size={18} /> Team Members
          </div>
          <div className="admin-card-value">{teamMembers.length}</div>
          <p className="admin-text-sm admin-text-secondary">Total members</p>
          <button onClick={() => setActiveTab('team')} className="admin-quick-link">
            Manage Team <ChevronRight size={16} />
          </button>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <MessageSquare size={18} /> Testimonials
          </div>
          <div className="admin-card-value">{testimonials.length}</div>
          <p className="admin-text-sm admin-text-secondary">Customer feedback</p>
          <button onClick={() => setActiveTab('testimonials')} className="admin-quick-link">
            Manage Testimonials <ChevronRight size={16} />
          </button>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <DollarSign size={18} /> Investments
          </div>
          <div className="admin-card-value">{investments.length}</div>
          <p className="admin-text-sm admin-text-secondary">Ongoing projects</p>
          <button onClick={() => setActiveTab('investments')} className="admin-quick-link">
            Manage Investments <ChevronRight size={16} />
          </button>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <Settings size={18} /> Settings
          </div>
          <div className="admin-card-value">Configured</div>
          <p className="admin-text-sm admin-text-secondary">Website preferences</p>
          <button onClick={() => setActiveTab('settings')} className="admin-quick-link">
            Edit Settings <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Quick Actions (example from AdminDashboard.jsx) */}
      <div className="admin-panel admin-mt-4">
        <h2 className="admin-section-title">Quick Actions</h2>
        <div className="admin-actions-grid">
          <button onClick={() => openModal('carousel')} className="admin-action-card">
            <Plus size={24} className="admin-action-icon admin-action-icon-primary" />
            <div>
              <h3 className="admin-action-title">Add New Carousel Slide</h3>
              <p className="admin-action-description">Quickly add a new slide to the hero section.</p>
            </div>
          </button>
          <button onClick={() => openModal('product')} className="admin-action-card">
            <Plus size={24} className="admin-action-icon admin-action-icon-success" />
            <div>
              <h3 className="admin-action-title">Add New Product</h3>
              <p className="admin-action-description">Add a new coffee product or service.</p>
            </div>
          </button>
        </div>
      </div>

    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'carousel':
        return (
          <DataTable 
            data={carouselSlides} 
            type="carousel" 
            columns={[
              { key: 'title', label: 'Title' },
              { key: 'subtitle', label: 'Subtitle' },
              { key: 'is_active', label: 'Active', render: (val) => val ? 'Yes' : 'No' }
            ]} 
          />
        );
      case 'stats':
        return (
          <div className="admin-panel">
            <h3 className="admin-section-title">Update Statistics</h3>
            <div className="admin-form-grid">
              <div>
                <label className="admin-label">Number of AMCOS</label>
                <input
                  type="number"
                  value={stats.amcos_count}
                  onChange={(e) => setStats(prev => ({ ...prev, amcos_count: parseInt(e.target.value) }))}
                  className="admin-input"
                />
              </div>
              
              <div>
                <label className="admin-label">Staff Count</label>
                <input
                  type="number"
                  value={stats.staff_count}
                  onChange={(e) => setStats(prev => ({ ...prev, staff_count: parseInt(e.target.value) }))}
                  className="admin-input"
                />
              </div>
              
              <div>
                <label className="admin-label">Coffee Plants</label>
                <input
                  type="number"
                  value={stats.coffee_plants}
                  onChange={(e) => setStats(prev => ({ ...prev, coffee_plants: parseInt(e.target.value) }))}
                  className="admin-input"
                />
              </div>
              
              <div>
                <label className="admin-label">Active Farmers</label>
                <input
                  type="number"
                  value={stats.active_farmers}
                  onChange={(e) => setStats(prev => ({ ...prev, active_farmers: parseInt(e.target.value) }))}
                  className="admin-input"
                />
              </div>
            </div>
            <button onClick={() => updateStats(stats)} disabled={loading} className="admin-btn admin-btn-primary admin-mt-4">
              {loading ? 'Updating...' : 'Update Statistics'}
            </button>
          </div>
        );
      case 'products':
        return (
          <DataTable 
            data={products} 
            type="product" 
            columns={[
              { key: 'name', label: 'Product Name' },
              { key: 'price', label: 'Price' },
              { key: 'category', label: 'Category' },
              { key: 'is_active', label: 'Active', render: (val) => val ? 'Yes' : 'No' }
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
              { key: 'email', label: 'Email' }
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
              { key: 'text', label: 'Testimonial', render: (val) => `${val.substring(0, 50)}...` },
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
              { key: 'status', label: 'Status' }
            ]} 
          />
        );
      case 'settings':
        return (
          <div className="admin-panel">
            <h3 className="admin-section-title">Website Settings</h3>
            <div className="admin-form-grid">
              <div>
                <label className="admin-label">Website Name</label>
                <input
                  type="text"
                  defaultValue="KDCU Limited"
                  className="admin-input"
                />
              </div>
              
              <div>
                <label className="admin-label">Contact Email</label>
                <input
                  type="email"
                  defaultValue="info@kdculimited.co.tz"
                  className="admin-input"
                />
              </div>
              
              <div>
                <label className="admin-label">Contact Phone</label>
                <input
                  type="tel"
                  defaultValue="+255 28 222 xxxx"
                  className="admin-input"
                />
              </div>
              
              <div>
                <label className="admin-label">Address</label>
                <textarea
                  defaultValue="Karagwe, Kagera Region, Tanzania"
                  rows={3}
                  className="admin-input"
                />
              </div>
              
              <button className="admin-btn admin-btn-primary">
                Save Settings
              </button>
            </div>
          </div>
        );
      
      default:
        return <div>Select a tab to manage content</div>;
    }
  };

  const DataTable = ({ data, type, columns }) => (
    <div className="admin-panel"> 
      <div className="admin-panel-header"> 
        <h3 className="admin-section-title">
          {type.charAt(0).toUpperCase() + type.slice(1)} Management
        </h3>
        <button onClick={() => openModal(type)} className="admin-btn admin-btn-primary"> 
          <Plus size={16} /> Add New
        </button>
      </div>
      <div className="admin-table-container"> 
        <table className="admin-table"> 
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}>
                  {col.label}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                {columns.map(col => (
                  <td key={col.key}>
                    {col.render ? col.render(item[col.key], item) : item[col.key]}
                  </td>
                ))}
                <td>
                  <div className="admin-action-buttons"> 
                    <button onClick={() => openModal(type, item)} className="admin-btn admin-btn-icon"> 
                      <Edit3 size={16} />
                    </button>
                    <button onClick={() => handleDelete(type, item.id)} className="admin-btn admin-btn-icon admin-btn-danger"> 
                      <Trash2 size={16} />
                    </button>
                  </div>
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
              <div className="admin-form-group"> 
                <label className="admin-label">Title</label>
                <input type="text" value={formData.title || ''} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} className="admin-input" /> 
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Subtitle</label>
                <input type="text" value={formData.subtitle || ''} onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Description</label>
                <textarea value={formData.description || ''} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} rows={3} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Image URL</label>
                <input type="url" value={formData.image_url || ''} onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group admin-checkbox-group"> 
                <input type="checkbox" checked={formData.is_active || false} onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))} id="carousel-active" />
                <label htmlFor="carousel-active" className="admin-checkbox-label">Is Active</label>
              </div>
            </>
          );
        case 'product':
          return (
            <>
              <div className="admin-form-group">
                <label className="admin-label">Product Name</label>
                <input type="text" value={formData.name || ''} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Description</label>
                <textarea value={formData.description || ''} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} rows={3} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Price</label>
                <input type="text" value={formData.price || ''} onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Image URL</label>
                <input type="url" value={formData.image_url || ''} onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Category</label>
                <input type="text" value={formData.category || ''} onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group admin-checkbox-group">
                <input type="checkbox" checked={formData.is_active || false} onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))} id="product-active" />
                <label htmlFor="product-active" className="admin-checkbox-label">Is Active</label>
              </div>
            </>
          );
        case 'team':
          return (
            <>
              <div className="admin-form-group">
                <label className="admin-label">Name</label>
                <input type="text" value={formData.name || ''} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Position</label>
                <input type="text" value={formData.position || ''} onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Description</label>
                <textarea value={formData.description || ''} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} rows={3} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Image URL</label>
                <input type="url" value={formData.image_url || ''} onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Email</label>
                <input type="email" value={formData.email || ''} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Phone</label>
                <input type="tel" value={formData.phone || ''} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group admin-checkbox-group">
                <input type="checkbox" checked={formData.is_active || false} onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))} id="team-active" />
                <label htmlFor="team-active" className="admin-checkbox-label">Is Active</label>
              </div>
            </>
          );
        case 'testimonial':
          return (
            <>
              <div className="admin-form-group">
                <label className="admin-label">Name</label>
                <input type="text" value={formData.name || ''} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Role</label>
                <input type="text" value={formData.role || ''} onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Cooperative</label>
                <input type="text" value={formData.cooperative || ''} onChange={(e) => setFormData(prev => ({ ...prev, cooperative: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Testimonial Text</label>
                <textarea value={formData.text || ''} onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))} rows={3} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Rating (1-5)</label>
                <input type="number" value={formData.rating || ''} onChange={(e) => setFormData(prev => ({ ...prev, rating: parseInt(e.target.value) }))} min="1" max="5" className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Image URL</label>
                <input type="url" value={formData.image_url || ''} onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group admin-checkbox-group">
                <input type="checkbox" checked={formData.is_featured || false} onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))} id="testimonial-featured" />
                <label htmlFor="testimonial-featured" className="admin-checkbox-label">Is Featured</label>
              </div>
            </>
          );
        case 'investment':
          return (
            <>
              <div className="admin-form-group">
                <label className="admin-label">Title</label>
                <input type="text" value={formData.title || ''} onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Amount</label>
                <input type="text" value={formData.amount || ''} onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Description</label>
                <textarea value={formData.description || ''} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} rows={3} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Status</label>
                <input type="text" value={formData.status || ''} onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Start Date</label>
                <input type="date" value={formData.start_date || ''} onChange={(e) => setFormData(prev => ({ ...prev, start_date: e.target.value }))} className="admin-input" />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">End Date</label>
                <input type="date" value={formData.end_date || ''} onChange={(e) => setFormData(prev => ({ ...prev, end_date: e.target.value }))} className="admin-input" />
              </div>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className="admin-modal-overlay"> 
        <div className="admin-modal-content"> 
          <div className="admin-modal-header"> 
            <h3 className="admin-modal-title">
              {editingItem ? `Edit ${modalType}` : `Add New ${modalType}`}
            </h3>
            <button onClick={closeModal} className="admin-modal-close"> 
              <X size={20} />
            </button>
          </div>
          <div className="admin-modal-body"> 
            {renderFormFields()}
          </div>
          <div className="admin-modal-footer"> 
            <button onClick={closeModal} className="admin-btn admin-btn-secondary">
              Cancel
            </button>
            <button onClick={handleSave} disabled={loading} className="admin-btn admin-btn-primary">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="admin-dashboard"> {/* Removed admin-mobile-sidebar-open class */}
      {/* Removed Sidebar component */}
      <div className="admin-content-wrapper"> 
        <Header />
        <main className="admin-content"> 
          {renderTabContent()}
        </main>
      </div>
      <Modal /> 
    </div>
  );
};

export default Dashboard;