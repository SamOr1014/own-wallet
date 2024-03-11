import { EntryForm } from "@/components/EntryForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { InsertSpendingType, spending } from "../../lib/schema";
import { db } from "../../lib/db";
import { revalidatePath } from "next/cache";

export const AddEntryButton = async () => {
  const saveAction = async (val: InsertSpendingType) => {
    "use server";
    await db.insert(spending).values(val);

    revalidatePath("/");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-max h-max p-1">
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="md:w-[425px] w-[380px]">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            Add a expense here and it will be shown in the list
          </DialogDescription>
        </DialogHeader>
        <EntryForm saveAction={saveAction} />
      </DialogContent>
    </Dialog>
  );
};
