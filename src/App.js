import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";
import './App.css';

function App() {
  return (
    <div className="font-manrope m-10">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
