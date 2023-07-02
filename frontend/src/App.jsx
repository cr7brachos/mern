import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponents";
import ScrollTop from "./utils/ScrollTop";


function App() {

  return (

    <BrowserRouter>

      <ScrollTop />

      <Header />

      <Routes>

        

        {/* ότι περικλείεται σε αυτό θα εμπεριέχει και το UserChatComponent */}
        <Route element={<RoutesWithUserChatComponent />}>

          {/* public routes */}
          <Route path="/" element={<HomePage />}></Route>;
          <Route path="/cart" element={<CartPage />}></Route>;
          <Route path="/login" element={<LoginPage />}></Route>;
          <Route path="/product-details" element={<ProductDetailsPage />}></Route>;
          <Route path="/product-list" element={<ProductListPage />}></Route>;
          <Route path="/register" element={<RegisterPage />}></Route>;

        </Route>     

        {/* user protected routes 
        εμπεριέχει το UserChatComponent βάσει του κώδικα μέσα στο ProtectedRouteComponent*/}
        <Route element={<ProtectedRouteComponent admin={false}/>}>
            <Route path="/user" element={<UserProfilePage />}></Route>;
            <Route path="/user/my-orders" element={<UserOrdersPage />}></Route>;
            < Route path="/user/cart-details" element={<UserCartDetailsPage />}></Route>;
            <Route path="/user/order-details" element={<UserOrderDetailsPage />}></Route>;
        </Route>  

        {/* //admin protected routes */}
        <Route element={<ProtectedRouteComponent admin={true}/>}>
            <Route path="/admin/users" element={<AdminUsersPage />}></Route>;
            <Route path="/admin/edit-user" element={<AdminEditUserPage />}></Route>;
            <Route path="/admin/products" element={<AdminProductsPage />}></Route>;
            <Route path="/admin/orders" element={<AdminOrdersPage />}></Route>;
            <Route path="/admin/order-details/:id" element={<AdminOrderDetailsPage />}></Route>;
            <Route path="/admin/chat" element={<AdminChatsPage />}></Route>;
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />}></Route>;
            <Route path="/admin/create-product" element={<AdminCreateProductPage />}></Route>;
            <Route path="/admin/edit-product" element={<AdminEditProductPage />}></Route>;
        </Route>  

      </Routes>

      <Footer />

    </BrowserRouter>

    
    
  );
}

export default App;
