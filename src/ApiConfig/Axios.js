import axios from "axios";


export const getData = async () =>{
    let resp = await axios.get('http://localhost:8080/product/all-products')
    return resp.data;
}


export const addWarehouse = async (data) =>{
    let resp = await axios.post('http://localhost:8080/warehouse/add-warehouse',{
        ...data
    })
    return resp.data;
}

export const updateItemDetails = async (data) =>{
    let resp = await axios.put('http://localhost:8080/warehouse/update-product',{
        ...data
    })
    return resp.data;
}

