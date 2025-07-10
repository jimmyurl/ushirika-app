// AdminDashboard.jsx (Refactored)
import { useState, useEffect } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Form related states, specific for each type
  const [showForm, setShowForm] = useState(false); // Controls form visibility, like AdminProductsPanel.jsx
  const [currentFormType, setCurrentFormType] = useState(''); // What type of form is currently open
  const [editingItem, setEditingItem] = useState(null); // The item being edited

  // Separate formData states for each type to avoid conflicts
  const [carouselForm, setCarouselForm] = useState({});
  const [productForm, setProductForm] = useState({});
  const [teamForm, setTeamForm] = useState({});
  const [testimonialForm, setTestimonialForm] = useState({});
  const [investmentForm, setInvestmentForm] = useState({});

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('kdcu_admin_token');
    localStorage.removeItem('kdcu_admin_user');
    window.location.href = '/login';
  };

  const openForm = (type, item = null) => {
    setCurrentFormType(type);
    setEditingItem(item);
    // Initialize the correct form state based on type
    const initialData = JSON.parse(JSON.stringify(item || {}));
    switch (type) {
      case 'carousel': setCarouselForm(initialData); break;
      case 'product': setProductForm(initialData); break;
      case 'team': setTeamForm(initialData); break;
      case 'testimonial': setTestimonialForm(initialData); break;
      case 'investment': setInvestmentForm(initialData); break;
      default: break;
    }
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setCurrentFormType('');
    setEditingItem(null);
    // Clear all form states
    setCarouselForm({});
    setProductForm({});
    setTeamForm({});
    setTestimonialForm({});
    setInvestmentForm({});
  };

  const handleSave = async (type) => {
    setLoading(true);
    let dataToSave = {};
    let setFunction = null;

    switch (type) {
      case 'carousel':
        dataToSave = carouselForm;
        setFunction = setCarouselSlides;
        break;
      case 'product':
        dataToSave = productForm;
        setFunction = setProducts;
        break;
      case 'team':
        dataToSave = teamForm;
        setFunction = setTeamMembers;
        break;
      case 'testimonial':
        dataToSave = testimonialForm;
        setFunction = setTestimonials;
        break;
      case 'investment':
        dataToSave = investmentForm;
        setFunction = setInvestments;
        break;
      default:
        setLoading(false);
        return;
    }

    try {
      // Simulate API call - replace with actual Supabase operations
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (editingItem) {
        setFunction(prev => prev.map(item =>
          item.id === editingItem.id ? { ...item, ...dataToSave } : item
        ));
      } else {
        setFunction(prev => [...prev, {
          id: Date.now(),
          ...dataToSave,
          // Add default active/featured status based on type if not already set
          ...(type === 'carousel' && { is_active: true }),
          ...(type === 'product' && { is_active: true }),
          ...(type === 'team' && { is_active: true }),
          ...(type === 'testimonial' && { is_featured: false }), // Default for testimonial
        }]);
      }

      closeForm();
      showMessage('success', `${type.charAt(0).toUpperCase() + type.slice(1)} ${editingItem ? 'updated' : 'created'} successfully!`);
    } catch (error) {
      showMessage('error', `Failed to save ${type}. Please try again.`);
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
        case 'carousel': setCarouselSlides(prev => prev.filter(slide => slide.id !== id)); break;
        case 'product': setProducts(prev => prev.filter(product => product.id !== id)); break;
        case 'team': setTeamMembers(prev => prev.filter(member => member.id !== id)); break;
        case 'testimonial': setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id)); break;
        case 'investment': setInvestments(prev => prev.filter(investment => investment.id !== id)); break;
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

  const Sidebar = () => (
    <aside className={`admin-sidebar ${isMenuOpen ? 'admin-sidebar-open' : ''}`}>
      <div className="admin-sidebar-header">
        <h2 className="admin-logo">KDCU Admin</h2>
        <button className="admin-close-menu" onClick={() => setIsMenuOpen(false)}>
          <X size={20} />
        </button>
      </div>
      <nav className="admin-nav">
        <ul className="admin-nav-list">
          <li className={`admin-nav-item ${activeTab === 'overview' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('overview'); setIsMenuOpen(false); }}>
              <Home size={18} /> Overview
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'carousel' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('carousel'); setIsMenuOpen(false); }}>
              <Image size={18} /> Hero Carousel
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'stats' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('stats'); setIsMenuOpen(false); }}>
              <TrendingUp size={18} /> Statistics
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'products' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('products'); setIsMenuOpen(false); }}>
              <Package size={18} /> Products
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'team' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('team'); setIsMenuOpen(false); }}>
              <Users size={18} /> Team
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'testimonials' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('testimonials'); setIsMenuOpen(false); }}>
              <MessageSquare size={18} /> Testimonials
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'investments' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('investments'); setIsMenuOpen(false); }}>
              <DollarSign size={18} /> Investments
            </button>
          </li>
          <li className={`admin-nav-item ${activeTab === 'settings' ? 'admin-active' : ''}`}>
            <button onClick={() => { setActiveTab('settings'); setIsMenuOpen(false); }}>
              <Settings size={18} /> Settings
            </button>
          </li>
          <li className="admin-nav-item admin-logout-button">
            <button onClick={handleLogout}>
              <LogOut size={18} /> Log Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );

  const Header = () => (
    <header className="admin-header">
      <div className="admin-header-container">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="admin-menu-button"
        >
          <Menu size={20} />
        </button>

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
    <div className="admin-panel">
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

      <div className="admin-panel admin-mt-4">
        <h2 className="admin-section-title">Quick Actions</h2>
        <div className="admin-actions-grid">
          <button onClick={() => openForm('carousel')} className="admin-action-card">
            <Plus size={24} className="admin-action-icon admin-action-icon-primary" />
            <div>
              <h3 className="admin-action-title">Add New Carousel Slide</h3>
              <p className="admin-action-description">Quickly add a new slide to the hero section.</p>
            </div>
          </button>
          <button onClick={() => openForm('product')} className="admin-action-card">
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

const DataTable = ({ data, type, columns }) => (
  <>
    <div className="admin-panel-header">
      <h3 className="admin-section-title">
        {type.charAt(0).toUpperCase() + type.slice(1)} Management
      </h3>
      <button onClick={() => openForm(type)} className="admin-btn admin-btn-primary">
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
                  <button onClick={() => openForm(type, item)} className="admin-btn admin-btn-icon">
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
  </>
);

const renderFormContent = (type) => {
  let currentFormData;
  let setCurrentFormData;

  switch (type) {
    case 'carousel':
      currentFormData = carouselForm;
      setCurrentFormData = setCarouselForm;
      break;
    case 'product':
      currentFormData = productForm;
      setCurrentFormData = setProductForm;
      break;
    case 'team':
      currentFormData = teamForm;
      setCurrentFormData = setTeamForm;
      break;
    case 'testimonial':
      currentFormData = testimonialForm;
      setCurrentFormData = setTestimonialForm;
      break;
    case 'investment':
      currentFormData = investmentForm;
      setCurrentFormData = setInvestmentForm;
      break;
    default:
      return null;
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  switch (type) {
    case 'carousel':
      return (
        <form onSubmit={(e) => { e.preventDefault(); handleSave('carousel'); }} className="admin-form">
          <h2 className="form-title">{editingItem ? 'Edit Carousel Slide' : 'Add New Carousel Slide'}</h2>
          <div className="admin-form-group">
            <label className="admin-label">Title</label>
            <input
              type="text"
              name="title"
              value={currentFormData.title || ''}
              onChange={handleInputChange}
              className="admin-input"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Subtitle</label>
            <input
              type="text"
              name="subtitle"
              value={currentFormData.subtitle || ''}
              onChange={handleInputChange}
              className="admin-input"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Description</label>
            <textarea
              name="description"
              value={currentFormData.description || ''}
              onChange={handleInputChange}
              rows={3}
              className="admin-input"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Image URL</label>
            <input
              type="url"
              name="image_url"
              value={currentFormData.image_url || ''}
              onChange={handleInputChange}
              className="admin-input"
            />
          </div>
          <div className="admin-form-group admin-checkbox-group">
            <input
              type="checkbox"
              name="is_active"
              checked={currentFormData.is_active || false}
              onChange={handleInputChange}
              id="carousel-active"
            />
            <label htmlFor="carousel-active" className="admin-checkbox-label">Is Active</label>
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeForm} className="admin-btn admin-btn-secondary">Cancel</button>
            <button type="submit" disabled={loading} className="admin-btn admin-btn-primary">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      );
    case 'product':
      // Dummy data for product form as we don't have AdminProductsPanel's conditions/categories here
      const conditions = ['New', 'Used'];
      const categories = ['Electronics', 'Coffee'];
      return (
        <form onSubmit={(e) => { e.preventDefault(); handleSave('product'); }} className="admin-form">
          <h2 className="form-title">{editingItem ? 'Edit Product' : 'Add New Product'}</h2>
          <div className="form-grid">
            <div className="form-column">
              <div className="admin-form-group">
                <label className="admin-label">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={currentFormData.name || ''}
                  onChange={handleInputChange}
                  className="admin-input"
                  required
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Description</label>
                <textarea
                  name="description"
                  value={currentFormData.description || ''}
                  onChange={handleInputChange}
                  rows={3}
                  className="admin-input"
                  required
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Price</label>
                <input
                  type="text" // Keep as text to allow flexible input, handle parsing on save
                  name="price"
                  value={currentFormData.price || ''}
                  onChange={handleInputChange}
                  className="admin-input"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Stock Quantity</label>
                <input
                  type="number"
                  name="stock_quantity"
                  value={currentFormData.stock_quantity || ''}
                  onChange={handleInputChange}
                  className="admin-input"
                  required
                />
              </div>
            </div>
            <div className="form-column">
              <div className="admin-form-group">
                <label className="admin-label">Image URL</label>
                <input
                  type="url"
                  name="image_url"
                  value={currentFormData.image_url || ''}
                  onChange={handleInputChange}
                  className="admin-input"
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Category</label>
                <select
                  name="category"
                  value={currentFormData.category || ''}
                  onChange={handleInputChange}
                  className="admin-input"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Condition</label>
                <select
                  name="condition"
                  value={currentFormData.condition || 'New'}
                  onChange={handleInputChange}
                  className="admin-input"
                  required
                >
                  {conditions.map(cond => <option key={cond} value={cond}>{cond}</option>)}
                </select>
              </div>
              <div className="admin-form-group admin-checkbox-group">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={currentFormData.is_active || false}
                  onChange={handleInputChange}
                  id="product-active"
                />
                <label htmlFor="product-active" className="admin-checkbox-label">Is Active</label>
              </div>
              <div className="admin-form-group admin-checkbox-group">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={currentFormData.is_featured || false}
                  onChange={handleInputChange}
                  id="product-featured"
                />
                <label htmlFor="product-featured" className="admin-checkbox-label">Is Featured</label>
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeForm} className="admin-btn admin-btn-secondary">Cancel</button>
            <button type="submit" disabled={loading} className="admin-btn admin-btn-primary">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      );
    case 'team':
      return (
        <form onSubmit={(e) => { e.preventDefault(); handleSave('team'); }} className="admin-form">
          <h2 className="form-title">{editingItem ? 'Edit Team Member' : 'Add New Team Member'}</h2>
          <div className="admin-form-group">
            <label className="admin-label">Name</label>
            <input type="text" name="name" value={currentFormData.name || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Position</label>
            <input type="text" name="position" value={currentFormData.position || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Description</label>
            <textarea name="description" value={currentFormData.description || ''} onChange={handleInputChange} rows={3} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Image URL</label>
            <input type="url" name="image_url" value={currentFormData.image_url || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Email</label>
            <input type="email" name="email" value={currentFormData.email || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Phone</label>
            <input type="tel" name="phone" value={currentFormData.phone || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group admin-checkbox-group">
            <input type="checkbox" name="is_active" checked={currentFormData.is_active || false} onChange={handleInputChange} id="team-active" />
            <label htmlFor="team-active" className="admin-checkbox-label">Is Active</label>
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeForm} className="admin-btn admin-btn-secondary">Cancel</button>
            <button type="submit" disabled={loading} className="admin-btn admin-btn-primary">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      );
    case 'testimonial':
      return (
        <form onSubmit={(e) => { e.preventDefault(); handleSave('testimonial'); }} className="admin-form">
          <h2 className="form-title">{editingItem ? 'Edit Testimonial' : 'Add New Testimonial'}</h2>
          <div className="admin-form-group">
            <label className="admin-label">Name</label>
            <input type="text" name="name" value={currentFormData.name || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Role</label>
            <input type="text" name="role" value={currentFormData.role || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Cooperative</label>
            <input type="text" name="cooperative" value={currentFormData.cooperative || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Testimonial Text</label>
            <textarea name="text" value={currentFormData.text || ''} onChange={handleInputChange} rows={3} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              value={currentFormData.rating || ''}
              onChange={(e) => {
                const value = e.target.value;
                const parsedValue = value === '' ? '' : parseInt(value);
                setCurrentFormData(prev => ({ ...prev, rating: parsedValue }));
              }}
              min="1"
              max="5"
              className="admin-input"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Image URL</label>
            <input type="url" name="image_url" value={currentFormData.image_url || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group admin-checkbox-group">
            <input type="checkbox" name="is_featured" checked={currentFormData.is_featured || false} onChange={handleInputChange} id="testimonial-featured" />
            <label htmlFor="testimonial-featured" className="admin-checkbox-label">Is Featured</label>
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeForm} className="admin-btn admin-btn-secondary">Cancel</button>
            <button type="submit" disabled={loading} className="admin-btn admin-btn-primary">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      );
    case 'investment':
      return (
        <form onSubmit={(e) => { e.preventDefault(); handleSave('investment'); }} className="admin-form">
          <h2 className="form-title">{editingItem ? 'Edit Investment' : 'Add New Investment'}</h2>
          <div className="admin-form-group">
            <label className="admin-label">Title</label>
            <input type="text" name="title" value={currentFormData.title || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Amount</label>
            <input type="text" name="amount" value={currentFormData.amount || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Description</label>
            <textarea name="description" value={currentFormData.description || ''} onChange={handleInputChange} rows={3} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Status</label>
            <input type="text" name="status" value={currentFormData.status || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">Start Date</label>
            <input type="date" name="start_date" value={currentFormData.start_date || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="admin-form-group">
            <label className="admin-label">End Date</label>
            <input type="date" name="end_date" value={currentFormData.end_date || ''} onChange={handleInputChange} className="admin-input" />
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeForm} className="admin-btn admin-btn-secondary">Cancel</button>
            <button type="submit" disabled={loading} className="admin-btn admin-btn-primary">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      );
    default:
      return null;
  }
};


  const renderTabContent = () => {
    // If a form is shown, render only the form specific to the active tab type.
    if (showForm) {
      return (
        <div className="admin-modal-overlay"> {/* Re-using modal overlay for visual consistency */}
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <button onClick={closeForm} className="admin-modal-close">
                <X size={20} />
              </button>
            </div>
            <div className="admin-modal-body">
              {renderFormContent(currentFormType)}
            </div>
          </div>
        </div>
      );
    }

    // Otherwise, render the regular tab content
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;

      case 'carousel':
        return (
          <div className="admin-panel">
            <DataTable
              data={carouselSlides}
              type="carousel"
              columns={[
                { key: 'title', label: 'Title' },
                { key: 'subtitle', label: 'Subtitle' },
                { key: 'is_active', label: 'Active', render: (val) => val ? 'Yes' : 'No' }
              ]}
            />
          </div>
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
          <div className="admin-panel">
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
          </div>
        );

      case 'team':
        return (
          <div className="admin-panel">
            <DataTable
              data={teamMembers}
              type="team"
              columns={[
                { key: 'name', label: 'Name' },
                { key: 'position', label: 'Position' },
                { key: 'email', label: 'Email' }
              ]}
            />
          </div>
        );

      case 'testimonials':
        return (
          <div className="admin-panel">
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
          </div>
        );

      case 'investments':
        return (
          <div className="admin-panel">
            <DataTable
              data={investments}
              type="investment"
              columns={[
                { key: 'title', label: 'Title' },
                { key: 'amount', label: 'Amount' },
                { key: 'status', label: 'Status' }
              ]}
            />
          </div>
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
        return (
          <div className="admin-panel">
            <div>Select a tab to manage content</div>
          </div>
        );
    }
  };

  return (
    <div className={`admin-dashboard ${isMenuOpen ? 'admin-mobile-sidebar-open' : ''}`}>
      <Sidebar />
      <div className="admin-content-wrapper">
        <Header />
        <main className="admin-content">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;