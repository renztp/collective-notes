import React from 'react';
import { Outlet } from "react-router-dom";

export const Collection = () => {
  return (
    <div>
      <div className="pt-5">
        <Outlet />
      </div>
    </div>
  );
};
