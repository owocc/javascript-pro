// 创建路由
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/default";
import { lazy } from "react";
const GuessNumber = lazy(() => import("../pages/guess-number/GuessNumberPage"));

// 路由信息
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "guess-number",
        element: <GuessNumber />,
      },
    ],
  },
]);

export default router;
