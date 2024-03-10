import { AddEntryButton } from "@/components/AddEntryButton";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex border border-solid dark:border-white border-black h-dvh justify-center">
      <div className="flex flex-col max-w-[1000px] md:min-w-[800px] min-w-[380px] border border-solid dark:border-white border-black h-dvh p-5 gap-10">
        <div className="flex justify-between items-center">
          <DarkModeSwitch />
          <AddEntryButton />
        </div>
        <div className=" dark:border-white border-black border border-solid h-full overflow-x-auto">
          list
        </div>
      </div>
    </main>
  );
}
