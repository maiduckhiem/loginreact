import api from "./api";

export const getAll = () => {
    const url = "/product"
    return api.get(url)
}
export const add = (product) => {
    const url = "/product";
    return api.post(url, product);
};
export const remove = (id) => {
    const url = "/product/" + id;
    return api.delete(url);
};
export const update = (product) => {
    const url = "/product/" + product.id;
    return api.put(url, product);
};
