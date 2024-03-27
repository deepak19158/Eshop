import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("authToken")) {
    toast.error("Please login first!!");
    return (
      <>
        <ToastContainer />
        <Navigate to="/login" replace />{" "}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
