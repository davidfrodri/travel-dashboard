import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
        <h1>Admin Layout</h1>
        <aside className="children">
            <Outlet />
        </aside>
    </div>
  )
}

export default AdminLayout;