import { useState } from 'react';
import { Coffee, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    console.log('Login attempt:', { email, password }); // Debug log

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check credentials (case-insensitive email comparison)
      if (email.toLowerCase().trim() === 'admin@kdculimited.co.tz' && password === 'admin123') {
        // Store auth data
        const authToken = 'demo_token_' + Date.now();
        const userData = {
          id: 1,
          email: email.toLowerCase().trim(),
          name: 'Admin User',
          role: 'admin'
        };
        
        console.log('Login successful, storing data:', { authToken, userData }); // Debug log
        
        // Store auth data in localStorage for ProtectedRoute to pick up
        localStorage.setItem('authToken', authToken); // Use 'authToken' key
        localStorage.setItem('user', JSON.stringify(userData)); // Use 'user' key

        setLoginSuccess(true);
        setError('');
        
        // Redirect to the dashboard
        navigate('/dashboard'); // Perform navigation
        
      } else {
        console.log('Login failed - invalid credentials'); // Debug log
        setError('Invalid email or password. Please check your credentials.');
      }
    } catch (err) {
      console.error('Login error:', err); // Debug log
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to clear stored data (for testing)
  const clearStoredData = () => {
    setLoginSuccess(false);
    setEmail('');
    setPassword('');
    setError('');
    console.log('Form data cleared');
  };

  // Function to auto-fill demo credentials
  const fillDemoCredentials = () => {
    setEmail('admin@kdculimited.co.tz');
    setPassword('admin123');
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #92400e 0%, #78350f 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '3rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        {/* Logo */}
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            backgroundColor: '#92400e',
            borderRadius: '50%',
            marginBottom: '1rem'
          }}>
            <Coffee size={40} color="white" />
          </div>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            margin: '0'
          }}>
            KDCU Admin Portal
          </h1>
          <p style={{
            color: '#6b7280',
            margin: '0.5rem 0 0 0',
            fontSize: '0.9rem'
          }}>
            Sign in to manage your cooperative
          </p>
        </div>

        {/* Success Message */}
        {loginSuccess && (
          <div style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: '0.5rem',
            padding: '0.75rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{color: '#15803d', fontSize: '0.9rem'}}>
              ✓ Login successful! Check console for debug info.
            </span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '0.5rem',
            padding: '0.75rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertCircle size={16} color="#dc2626" />
            <span style={{color: '#dc2626', fontSize: '0.9rem'}}>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <div>
          <div style={{marginBottom: '1.5rem'}}>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Email Address
            </label>
            <div style={{position: 'relative'}}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af',
                pointerEvents: 'none'
              }}>
                <Mail size={16} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@kdculimited.co.tz"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#92400e'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
          </div>

          <div style={{marginBottom: '2rem'}}>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>
              Password
            </label>
            <div style={{position: 'relative'}}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af',
                pointerEvents: 'none'
              }}>
                <Lock size={16} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 3rem 0.75rem 3rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#92400e'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: loading ? '#9ca3af' : '#92400e',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
              boxSizing: 'border-box'
            }}
            onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#78350f')}
            onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#92400e')}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>

        {/* Demo Credentials */}
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f9fafb',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb'
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: '#6b7280',
            margin: '0 0 0.5rem 0',
            fontWeight: '500'
          }}>
            Demo Credentials:
          </p>
          <p style={{
            fontSize: '0.8rem',
            color: '#374151',
            margin: '0 0 1rem 0',
            fontFamily: 'monospace'
          }}>
            Email: admin@kdculimited.co.tz<br />
            Password: admin123
          </p>
          
          {/* Debug buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={fillDemoCredentials}
              style={{
                fontSize: '0.7rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}
            >
              Auto-Fill
            </button>
            <button
              onClick={clearStoredData}
              style={{
                fontSize: '0.7rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}
            >
              Clear Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;