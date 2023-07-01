import AdminOrdersComponents from "./components/AdminOrdersComponents";
import axios from "axios";


const fetchAdminOrder = async () => {
    const { data } = await axios.get("/api/orders/admin");
    return data;
}

const AdminOrdersPage = () => {

    return <AdminOrdersComponents fetchAdminOrder={fetchAdminOrder}/>;

}

export default AdminOrdersPage;