import { Outlet } from 'react-router-dom';
import Sidebar from '../common/sidebar/sidebar';

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="view flex-1 p-8">
        <Outlet />
      </div>
    </div>
  )
}

export default Root;