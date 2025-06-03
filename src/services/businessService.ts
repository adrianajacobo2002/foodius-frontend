import api from '../../api';

const businessService = {
  registerBusiness: (data: any) => {
    return api.post('/business/register', data);
  },

  getPending: () => {
    return api.get('/business/pending');
  },

  getApproved: () => {
    return api.get('/business/approved');
  },

  getRejected: () => {
    return api.get('/business/rejected');
  },

  approveBusiness: (id: number) => {
    return api.patch(`/business/approve/${id}`);
  },

  rejectBusiness: (id: number) => {
    return api.patch(`/business/reject/${id}`);
  }
};

export default businessService;
