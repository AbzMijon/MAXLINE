import { Instance } from './api';

const registrationApi = {
    registration: (body: FormData) => Instance.post('/user/registr', body),
};

export default registrationApi;