import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen((p) => !p)} />
      <main className="layout__main">
        <Header onToggleMenu={() => setSidebarOpen((p) => !p)} />
        <div className="layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
