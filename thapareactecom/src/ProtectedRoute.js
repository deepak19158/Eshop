import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("authToken")) {
    alert("Please login first!!");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
