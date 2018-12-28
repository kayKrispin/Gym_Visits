import Api from "./api";

export const fetchUsers = () => {
   return Api.get('/api/gymvisitors').then(res => res.data).catch(e=>e);
};

export const createGymVisitor = (data) => {
       return Api.post('/api/gymvisitors/',{...data}).then(data => data.json()).catch(e=>e);
};

export const fetchUserByKay = key => {
       return Api.get(`/api/gymvisitors/${key}`).then(res => res.data).catch(e=>e);;
};

export const updateUserSubscription = id => {
       return Api.put(`/api/gymvisitors/${id}`).then(data => data.json());
};

export const deleteUser = id => {
       return Api.delete(`/api/gymvisitors/${id}`).then(res => res.data);
};
