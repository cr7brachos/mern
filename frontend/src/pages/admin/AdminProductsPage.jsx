import AdminProductComponents from "./components/AdminProductsComponent";
import axios from "axios";

const fetchAdminProducts = async (abctrl) => {
    const {data} = await axios.get("/api/products/admin", {
        signal: abctrl.signal,
    });

    

    return data
};

const deleteProduct = async (productId) => {
    const {data} = await axios.delete(`/api/products/admin/${productId}`);
    return data;
}

const AdminOrdersPage = () => { 

    return <AdminProductComponents 
                fetchAdminProducts={fetchAdminProducts} 
                deleteProduct={deleteProduct}/>

}

export default AdminOrdersPage;