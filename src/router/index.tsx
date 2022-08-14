import * as React from "react";
import type { RouteObject } from "react-router-dom";
const Home = React.lazy(() => import("@/pages/Home"));
const Other = React.lazy(() => import("@/pages/Other"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

// 要新增頁面就直接把下面的複製貼上
const BaseRouter: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "other",
    element: <Other />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default BaseRouter;
