import Api from "./api";

export const fetchUsers = () => {
   return Api.get('/api/gymvisitors').then(res => res.data).catch(e=>e);
};

export const createGymVisitor = (data, avatar) => {
       return Api.post('/api/gymvisitors/',{...data, avatar}).then(res =>res.data ).catch(e=>e);
};

export const fetchUserByKay = key => {
       return Api.get(`/api/gymvisitors/${key}`).then(res => res.data).catch(e=>e);
};

export const updateUserSubscription = (id, credentials) => {
       return Api.put(`/api/gymvisitors/${id}`,credentials).then(data => data.data).catch(e=>e);
};

export const deleteUser = id => {
       return Api.delete(`/api/gymvisitors/${id}`).then(res => res.data);
};
