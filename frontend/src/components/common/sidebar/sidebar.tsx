import { Link } from "react-router-dom";
import SidebarLink from "./sidebar-link";

interface Links {
  path: string;
  label: string;
  active?: boolean;
}

const Sidebar = () => {

  const tempLinks: Links[] = [
    {
      path: '/tasks',
      label: 'Tasks',
      active: true
    },
    {
      path: '/agendas',
      label: 'Agendas'
    }
  ]

  return (
    <div className="h-screen w-48 bg-gray-800 text-white p-4">
      <div>Header</div>
      <div className="navigation">      
        <Link to="/notes">All Notes</Link>

        <div className="recents flex flex-col">
          <h2>RECENTS</h2>
          {
            tempLinks.map((link, index) => (
              <SidebarLink key={index} {...link} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Sidebar;