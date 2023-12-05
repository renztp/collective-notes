import { Link, Outlet } from "react-router-dom";

export const Collection = () => {
  return (
    <div>
      <Link to="/collections">Go back</Link>

      <div>
        <Outlet />
      </div>
    </div>
  )
}