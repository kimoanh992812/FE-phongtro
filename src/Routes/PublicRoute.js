import React from "react";
import UserLayout from "../layout/UserLayout";

function PublicRoute({ children }) {
  return <UserLayout>{children}</UserLayout>;
}

export default PublicRoute;
