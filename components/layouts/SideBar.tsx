import { Button } from "../ui/button";
import { leftSideBarLinks as routes } from "@/constants/link";

const SideBar = () => {
  return (
    <div className="w-fit max-w-xs bg-red-500">
      <div className="flex flex-col items-start p-4 space-y-2 ">
        {routes.map((route, index) => (
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
  );
};

export default SideBar;
