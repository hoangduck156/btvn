* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
}

.app-container {
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.left-panel {
  flex: 1.2;
  background: linear-gradient(135deg, #e6f0ff, #cce0ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #2c5282;
  position: relative;
  overflow: hidden;
}

.left-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3E%3Ccircle cx='20' cy='20' r='5' fill='rgba(255,255,255,0.3)' /%3E%3Ccircle cx='80' cy='80' r='8' fill='rgba(255,255,255,0.3)' /%3E%3Ccircle cx='40' cy='70' r='6' fill='rgba(255,255,255,0.3)' /%3E%3Ccircle cx='70' cy='30' r='4' fill='rgba(255,255,255,0.3)' /%3E%3C/svg%3E");
  opacity: 0.5;
}

.brand {
  text-align: center;
  z-index: 1;
  margin-bottom: 40px;
}

.brand-logo {
  width: 80px;
  height: 80px;
  background: #2c5282;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.brand-logo svg {
  width: 50px;
  height: 50px;
}

.brand-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.brand-tagline {
  font-size: 16px;
  opacity: 0.9;
}

.panel-content {
  z-index: 1;
  text-align: center;
  max-width: 300px;
}

.panel-title {
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: bold;
}

.panel-subtitle {
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 30px;
}

.auth-card {
  width: 100%;
  max-width: 380px;
  z-index: 1;
}

.welcome-text {
  text-align: center;
  color: #2d3748;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.subtitle {
  text-align: center;
  color: #718096;
  margin-bottom: 30px;
  font-size: 14px;
}

.auth-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 25px;
}

.auth-tab {
  flex: 1;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  transition: all 0.3s;
  font-size: 16px;
}

.auth-tab.active {
  color: white;
  border-bottom: 2px solid white;
}

.auth-tab:hover {
  color: white;
}

.auth-form {
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

.form-group input {
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s;
  background: rgba(255, 255, 255, 0.9);
  color: #2d3748;
}

.form-group input:focus {
  border-color: white;
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  background: white;
}

.form-group input::placeholder {
  color: #a0aec0;
}

.form-group input.error {
  border-color: #e53e3e;
}

.error-text {
  color: #e53e3e;
  font-size: 12px;
  margin-top: 5px;
  display: block;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  height: 18px;
  width: 18px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  margin-right: 8px;
  position: relative;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: white;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #2c5282;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.forgot-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.forgot-link:hover {
  text-decoration: underline;
}

.auth-button {
  width: 100%;
  padding: 15px;
  background: white;
  color: #2c5282;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.auth-button:hover {
  background: #f7fafc;
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.divider {
  display: flex;
  align-items: center;
  margin: 25px 0;
  color: white;
  font-size: 14px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.divider span {
  padding: 0 15px;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.social-button {
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #2d3748;
}

.social-button:hover {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.social-button.apple {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-color: rgba(0, 0, 0, 0.8);
}

.social-button.apple:hover {
  background: #000;
  border-color: #000;
}

.social-button.google {
  background: rgba(255, 255, 255, 0.9);
  color: #4a5568;
  border-color: rgba(255, 255, 255, 0.5);
}

.social-button.google:hover {
  background: white;
  border-color: rgba(255, 255, 255, 0.8);
}

.social-icon {
  margin-right: 10px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-footer {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  line-height: 1.5;
  margin-top: 20px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.auth-footer p {
  margin-bottom: 5px;
}

.right-panel {
  flex: 0.8;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.right-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3E%3Ccircle cx='20' cy='20' r='5' fill='rgba(226,232,240,0.3)' /%3E%3Ccircle cx='80' cy='80' r='8' fill='rgba(226,232,240,0.3)' /%3E%3Ccircle cx='40' cy='70' r='6' fill='rgba(226,232,240,0.3)' /%3E%3Ccircle cx='70' cy='30' r='4' fill='rgba(226,232,240,0.3)' /%3E%3C/svg%3E");
  opacity: 0.5;
}

.empty-space {
  text-align: center;
  color: #a0aec0;
}

.empty-space h3 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 300;
}

.empty-space p {
  font-size: 14px;
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
    height: auto;
  }
  
  .left-panel {
    padding: 30px 20px;
  }
  
  .right-panel {
    display: none;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .forgot-link {
    align-self: flex-end;
  }
}
