import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import PermissionState from "../context/PermissionState";

const layout = ({ children }) => {
  return (
    <PermissionState>
      <AdminLayout>{children}</AdminLayout>
    </PermissionState>
  );
};

export default layout;
