import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCredentials } from '../../features/auth/authSlice';
import '../../assets/styles/dashlite-auth.css';

interface LoginFormData {
  name: string;
  passcode: string;
}

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState('');
  const [formData, setFormData] = useState<LoginFormData>({
    name: 'info@softnio.com',
    passcode: '123456'
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const dispatch = useAppDispatch();

  const validateForm = (data: LoginFormData): Partial<LoginFormData> => {
    const newErrors: Partial<LoginFormData> = {};
    if (!data.name.trim()) {
      newErrors.name = 'This field is required';
    }
    if (!data.passcode.trim()) {
      newErrors.passcode = 'This field is required';
    }
    return newErrors;
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }
    
    setErrors({});
    
    const loginName = "info@softnio.com";
    const pass = "123456";
    
    if (formData.name === loginName && formData.passcode === pass) {
      localStorage.setItem("accessToken", "token");
      
      dispatch(setCredentials({
        user: { 
          id: '1', 
          email: formData.name,
          name: 'Demo User'
        },
        token: 'token'
      }));
      
      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          // Default behavior if no callback provided
          window.location.href = '/';
        }
      }, 1000);
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 1000);
    }
  };

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <>
      <div className="nk-block-middle nk-auth-body wide-xs">
        <div className="brand-logo pb-4 text-center">
          <a href="/" className="logo-link">
            <img 
              className="logo-light logo-img logo-img-lg" 
              src="/vite.svg" 
              alt="logo" 
              style={{ height: '60px' }}
            />
          </a>
        </div>

        <div className="card card-bordered">
          <div className="card-inner-lg">
            <div className="nk-block-head">
              <div className="nk-block-head-content">
                <h4 className="nk-block-title">Sign-In</h4>
                <div className="nk-block-des">
                  <p>Access Dashlite using your email and passcode.</p>
                </div>
              </div>
            </div>
            
            {errorVal && (
              <div className="mb-3">
                <div className="alert alert-danger alert-icon">
                  <em className="icon ni ni-alert-circle"></em> Unable to login with credentials
                </div>
              </div>
            )}
            
            <form className="form is-alter" onSubmit={onFormSubmit}>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Email or Username
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="default-01"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your email address or username"
                    className="form-control-lg form-control"
                  />
                  {errors.name && <span className="invalid">{errors.name}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Passcode
                  </label>
                  <a className="link link-primary link-sm" href="/auth-reset">
                    Forgot Code?
                  </a>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <em className="passcode-icon icon-show ni ni-eye"></em>
                    <em className="passcode-icon icon-hide ni ni-eye-off"></em>
                  </a>
                  <input
                    type={passState ? "text" : "password"}
                    id="password"
                    value={formData.passcode}
                    onChange={(e) => handleInputChange('passcode', e.target.value)}
                    placeholder="Enter your passcode"
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <button 
                  type="submit" 
                  className="btn btn-lg btn-primary btn-block"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
            </form>
            
            <div className="form-note-s2 text-center pt-4">
              New on our platform? <a href="/auth-register">Create an account</a>
            </div>
            
            <div className="text-center pt-4 pb-3">
              <h6 className="overline-title overline-title-sap">
                <span>OR</span>
              </h6>
            </div>
            
            <ul className="nav justify-center gx-4">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="nk-auth-footer">
        <div className="mt-3">
          <p>&copy; 2024 DashLite. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
