import { Link, Outlet } from "react-router-dom";

export const Collection = () => {
  return (
    <div>
      <div className="note-action flex justify-between">
        <Link to="/collections" className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Go back</Link>
        <div>
          <button className="bg-red-400 text-white py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent mr-2">Delete</button>
          <button className="bg-cn-secondary py-2 px-3 rounded-lg border border-white hover:border hover:border-cn-accent">Edit</button>
        </div>
      </div>

      <div className="pt-5">
        <Outlet />
      </div>
    </div>
  )
}