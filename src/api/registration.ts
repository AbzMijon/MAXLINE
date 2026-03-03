import { Instance } from './api';

const registrationApi = {
    registration: (body: any) => Instance.post(`/user/registr`, body),
};

export default registrationApi;
