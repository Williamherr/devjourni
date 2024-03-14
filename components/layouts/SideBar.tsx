import { Button } from "../ui/button";
import { leftSideBarLinks as routes } from "@/constants/link";

const SideBar = () => {
  return (
    <div className="w-fit max-w-xs bg-red-500">
      <div className="flex flex-col items-start p-4 h-full justify-between">
        <div className="space-y-2 w-full">
          <ul className="sidebar-menu">
            <li>
              <button className="sidebar-button">Menu Item 1</button>
            </li>
            <li>
              <button className="sidebar-button">Menu Item 2</button>
            </li>
            <li>
              <button className="sidebar-button">Menu Item 3</button>
            </li>
          </ul>
          {routes.top.map((route, index) => (
            <Button
              variant={"ghost"}
              key={index}
              className="w-full flex justify-start"
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </Button>
          ))}
        </div>
        <div className="space-y-2 w-full">
          {routes.bottom.map((route, index) => (
            <Button
              variant={"ghost"}
              key={index}
              className="w-full flex justify-start"
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
