import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Submit form data 
      console.log('Form submitted:', formData);
      alert('Login successful!');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-tabs">
        <Link to="/login" className="auth-tab active">Sign In</Link>
        <Link to="/register" className="auth-tab">Sign Up</Link>
      </div>
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>
        
        <div className="form-options">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Remember me
          </label>
          <a href="#forgot" className="forgot-link">Forgot Password?</a>
        </div>
        
        <button type="submit" className="auth-button">Login</button>
      </form>
      
      <div className="divider">
        <span>OR</span>
      </div>
      
      <div className="social-login">
        <button className="social-button apple">
          <span className="social-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.1872 8.47124C12.1765 7.09191 13.0005 6.23058 13.0332 6.19591C12.1512 4.98791 10.7565 4.78324 10.2258 4.76791C9.19382 4.63591 8.20115 5.36391 7.63715 5.36391C7.06448 5.36391 6.23315 4.77591 5.34515 4.79191C4.22582 4.80791 3.20982 5.43591 2.60915 6.43591C1.36915 8.48391 2.13782 11.6279 3.34515 13.1479C3.93715 13.8999 4.64982 14.7559 5.56182 14.7159C6.44982 14.6759 6.81782 14.1559 7.89782 14.1559C8.96915 14.1559 9.32182 14.7159 10.2498 14.6999C11.1938 14.6839 11.8172 13.9159 12.4012 13.1639C13.1132 12.2599 13.4252 11.3799 13.4412 11.3399C13.4252 11.3319 11.8578 10.7399 11.8412 8.48391L12.1872 8.47124ZM10.6892 3.49991C11.1452 2.93991 11.4492 2.16391 11.3532 1.37991C10.6492 1.41991 9.77782 1.84391 9.30582 2.40391C8.88182 2.89991 8.50582 3.69191 8.61782 4.45991C9.40982 4.52391 10.2172 4.07591 10.6892 3.49991Z" fill="currentColor"/>
            </svg>
          </span>
          Log in with Apple
        </button>
        <button className="social-button google">
          <span className="social-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.9 8.16136C14.9 7.63455 14.8545 7.13091 14.7691 6.65002H8V9.48637H11.8436C11.6909 10.2982 11.1964 10.9727 10.4909 11.4182V13.1691H12.5873C13.9782 11.9127 14.9 10.1309 14.9 8.16136Z" fill="#4285F4"/>
              <path d="M8 15C9.95 15 11.6364 14.3545 12.8873 13.1691L10.7909 11.4182C10.15 11.8659 9.29545 12.15 8.3 12.15C6.45909 12.15 4.92273 10.9227 4.33182 9.25H2.15909V11.0545C3.45 13.65 5.95 15 8 15Z" fill="#34A853"/>
              <path d="M4.33182 9.25C4.13182 8.65 4.02273 8.00455 4.02273 7.34091C4.02273 6.67727 4.13182 6.03182 4.32273 5.43182V3.62727H2.15909C1.46818 4.99545 1.06818 6.61364 1.06818 8.34091C1.06818 10.0682 1.46818 11.6864 2.15909 13.0545L4.32273 11.25C4.13182 10.65 4.02273 10.0045 4.02273 9.34091C4.02273 8.67727 4.13182 8.03182 4.33182 7.43182V9.25Z" fill="#FBBC05"/>
              <path d="M8 2.58636C9.29091 2.58636 10.4227 3.03182 11.3136 3.90455L12.9364 2.28182C11.6364 1.06364 9.95 0.340912 8 0.340912C5.95 0.340912 3.45 1.69091 2.15909 3.62727L4.32273 5.43182C4.92273 3.75909 6.45909 2.58636 8 2.58636Z" fill="#EA4335"/>
            </svg>
          </span>
          Log in with Google
        </button>
      </div>
      
      <footer className="auth-footer">
        <p>© 2005 Gradiator. All rights reserved.</p>
        <p>Incontinentes use or reproduction of any copyright material from the prohibited.</p>
        <p>For more information, visit our Terms of Service or:</p>
      </footer>
    </div>
  );
};

export default Login;
