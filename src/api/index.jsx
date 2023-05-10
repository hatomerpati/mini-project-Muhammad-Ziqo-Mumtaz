
import { baseAPI, productAPI, uploaderAPI } from "../config/apiServices";
import { uploaderConfig } from "../config/uploader-config";



export const api = {

    getUsers: () => {
        return baseAPI.get(`/users`)
    },

    getUsersById: (id) => {
        return baseAPI.get(`/users/${id}`)
    },


    getBiodatas: () => {
        return baseAPI.get(`/biodatas`)
    },
    getBiodataById: (id) => {
        return baseAPI.get(`/biodatas/${id}`)
    },
    createBiodatas: (body) => {
        return baseAPI.post(`/biodatas`, body)
    },
    deleteBiodatas: (id) => {
        return baseAPI.delete(`/biodatas/${id}`)
    },
    updateBiodata: (id, body) => {
        return baseAPI.put(`/biodatas/${id}`, body)
    },

    getProduct: () => {
        return productAPI.get(`/product`)
    },
    getProductById: (id) => {
        return productAPI.get(`/product/${id}`)
    },
    createProduct: (body) => {
        return productAPI.post(`/product`, body)
    },
    deleteProduct: (id) => {
        return productAPI.delete(`/product/${id}`)
    },
    updateProduct: (id, body) => {
        return productAPI.put(`/product/${id}`, body)
    },
    uploader: (body) => {
        return uploaderAPI.post("/dt5fjvwg6/image/upload", body);
      },
};