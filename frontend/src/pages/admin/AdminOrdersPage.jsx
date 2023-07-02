import AdminOrdersComponents from "./components/AdminOrdersComponents";
import axios from "axios";


const fetchAdminOrder = async (abctrl) => {
    const { data } = await axios.get("/api/orders/admin", {
        signal: abctrl.signal,
    });
    return data;
}

const AdminOrdersPage = () => {

    return <AdminOrdersComponents fetchAdminOrder={fetchAdminOrder}/>;

}

export default AdminOrdersPage;