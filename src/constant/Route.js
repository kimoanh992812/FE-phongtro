import React from "react";

export const userRoute = [
  {
    path: "/",
    component: React.lazy(() => import("../User/page/HomePage/HomePage")),
  },
];
