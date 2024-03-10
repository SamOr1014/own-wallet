"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export const DarkModeSwitch = () => {
  const { setTheme } = useTheme();

  const handleModeChange = (checked: boolean) => {
    checked ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        defaultChecked={true}
        onCheckedChange={handleModeChange}
      />
      <Label htmlFor="dark-mode">DarkMode</Label>
    </div>
  );
};
