import { Link } from "react-router-dom";

interface SidebarLinkProps {
  path: string;
  label: string;
  active?: boolean;
}

const SidebarLink = ({ path, label, active }: SidebarLinkProps) => {
  return (
    <Link to={path} className={active ? 'active' : ''}>{label}</Link>
  )
}


export default SidebarLink