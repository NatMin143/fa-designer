import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSideBar() {
  const [isActive, setIsActive] = useState<string>("Home");

  const handleClick = (menuName: string) => {
    setIsActive(menuName);
  };

  interface MenuItem {
    label: string;
    to: string; // Navigation path
  }

  interface MenuGroup {
    title: string;
    item: MenuItem[];
  }

  const menuItems: MenuGroup[] = [
    {
      title: "Dashboard",
      item: [
        {
          label: "Visualiser",
          to: "/",
        },
        {
          label: "Model",
          to: "/model",
        },
        {
          label: "Sources",
          to: "/sources",
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader onClick={() => setIsActive("Home")}>
        <Link to="/" className="flex items-cente gap-1">
          <span className="text-xl font-bold">Nat FA Designer</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((menuItem) => (
          <SidebarGroup key={menuItem.title}>
            <SidebarGroupLabel>{menuItem.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              {menuItem.item.map((item) => (
                <SidebarMenu key={item.label}>
                  <SidebarMenuItem className={`${isActive === item.label ? "border-l-3 border-[#0084ff]": ""} `}>
                    <SidebarMenuButton asChild tooltip={item.label} onClick={() => handleClick(item.label)}>
                      <Link to={item.to}>
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
