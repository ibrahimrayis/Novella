
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "Novella Ltd - Construction, Import/Export & Manufacturing";
  }, []);

  // Redirect to the home page
  return <Navigate to="/" replace />;
};

export default Index;
