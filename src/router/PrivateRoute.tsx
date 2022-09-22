import { Route, Routes, Navigate } from "react-router-dom";
import checkAuth from "@/utils/Auth";

type PrivateRouteProps = {
  path: string;
  children: React.ReactNode;
};

/**
 * 需要驗證的頁面。會經由 checkAuth 來判斷。
 */
const PrivateRoute = ({ children, path }: PrivateRouteProps) => {
  return checkAuth() ? (
    <Routes>
      <Route path={path} element={children} />
    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PrivateRoute;
