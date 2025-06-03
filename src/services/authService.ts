import api from '../../api';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  first_name: string;
  last_names: string;
  email: string;
  phone_number: string;
  password: string;
}

const AuthService = {
  login: (data: LoginRequest) => {
    return api.post('/auth/login', data);
  },

  register: (data: RegisterRequest) => {
    return api.post('/auth/register', data);
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

export default AuthService;
