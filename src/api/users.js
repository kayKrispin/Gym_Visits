import Api from "./api";


export const fetchUsers = () => {
   return Api.get('/api/gymvisitors').then(data => data.json());
};

export const createGymVisitor = credentials => {
       return Api.post('/api/gymvisitors').then(data => data.json());
};

export const fetchUserByKay = key => {
       return Api.get(`/api/gymvisitors/${key}`).then(data => data.json());
};

export const updateUserSubscription = id => {
       return Api.put(`/api/gymvisitors/${id}`).then(data => data.json());
};

export const deleteUser = id => {
       return Api.delete(`/api/gymvisitors/${id}`).then(data => data.json());
};
