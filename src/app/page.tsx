import { AddEntryButton } from "@/components/AddEntryButton";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { SpendingList } from "@/components/SpendingList";
import { db } from "../../lib/db";
import { spending } from "../../lib/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default async function Home() {
  // example regarding https://github.com/ralexmatthews/nextjs-drizzle-example/blob/main/src/app/tasks/page.tsx
  const getSpendingList =
    (await db.select().from(spending).orderBy(desc(spending.date))) ?? [];

  const removeAction = async (id: number) => {
    "use server";
    await db.delete(spending).where(eq(spending.id, id));
    revalidatePath("/");
  };

  return (
    <main className="flex h-dvh justify-center">
      <div className="flex flex-col max-w-[1000px] md:min-w-[800px] min-w-[370px] h-dvh p-2 gap-10">
        <div className="flex justify-between items-center">
          <DarkModeSwitch />
          <AddEntryButton />
        </div>
        <div className="max-h-full overflow-y-auto">
          <SpendingList data={getSpendingList} removeAction={removeAction} />
        </div>
      </div>
    </main>
  );
}
