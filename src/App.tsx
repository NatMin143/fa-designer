import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AppSideBar } from './components/app-sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Visualizer from './pages/Visualizer';
import Model from './pages/Model';
import Sources from './pages/Sources';



const Layout = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1"/>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* This will change based on the route */}
          <Outlet />
        </div>
      </SidebarInset> 
    </SidebarProvider>
  );
};

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Visualizer />} />
          <Route path='/model' element={<Model />} />
          <Route path='/sources' element={<Sources />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
