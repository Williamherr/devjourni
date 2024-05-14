"use client";

import * as React from "react";
import {
  StretchHorizontallyIcon,
  StretchVerticallyIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function WidthToggle() {
  const { setTheme, theme } = useTheme();

  const [isToggled, setIsToggled] = React.useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  return (
    <button
      onClick={toggleHandler}
      className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
        isToggled ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute inset-y-0 left-0 w-6 h-6 rounded-full transition-transform duration-200 transform ${
          isToggled ? "translate-x-full bg-white" : "bg-gray-500"
        }`}
      />
    </button>
  );
}
