import api from '../../api';

const businessService = {
  registerBusiness: (data: any) => {
    return api.post('/business/register', data);
  }
};

export default businessService;
