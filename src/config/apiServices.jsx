import axios from "axios";

export const baseAPI = axios.create(
    {
        baseURL: "https://6430e8f2d4518cfb0e573ae9.mockapi.io/"
    }

    
);

export const productAPI = axios.create(
    {
        baseURL: "https://64328dc3d0127730d2d4b03b.mockapi.io/"
    }

    
);

export const uploaderAPI = axios.create({
    baseURL: "https://api.cloudinary.com/v1_1",
  });


