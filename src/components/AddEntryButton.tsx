import { EntryForm } from "@/components/EntryForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

export const AddEntryButton = async () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-max h-max p-1">
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[425px] w-[350px]">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
          <DialogDescription>
            Add a expense here and it will be shown in the list
          </DialogDescription>
        </DialogHeader>
        <EntryForm />
      </DialogContent>
    </Dialog>
  );
};
