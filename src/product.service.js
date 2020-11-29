import axios from 'axios';
const url="";
export function getall(){
    return axios.get(url);
}
export function addproduct(product){
    return axios.post(url,product)
}
export function update(product){
    return axios.put(url+product.id,product)
}
export function remove(id){
    return axios.delete(url+id)
}