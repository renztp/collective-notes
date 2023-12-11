import React from 'react';
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
    <div className="h-screen w-56 bg-cn-secondary p-4 pl-10 text-cn-text">
      <div>Header</div>
      <div className="navigation">      
        <Link className="block" to="/notes">All Notes</Link>
        <Link className="block" to="/collections">All Collections</Link>

        <div className="recents flex flex-col">
          <h2 className="text-sm text-cn-sidebar-header mt-3">RECENTS</h2>
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