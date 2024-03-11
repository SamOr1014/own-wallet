"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/CustomDatePicker";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { InsertSpendingType } from "../../lib/schema";
import { format } from "date-fns";

type Props = {
  saveAction: (val: InsertSpendingType) => void;
};

const formSchema = z.object({
  date: z.date(),
  description: z.string(),
  amount: z.number({ required_error: "You have to input a amount" }).min(1),
});

export const EntryForm = ({ saveAction }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      description: "",
      amount: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveAction({
      ...values,
      amount: values.amount.toString(),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col">
                <FormLabel className="p-1">Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    value={format(field.value, "yyyy-MM-dd")}
                    onChange={(e) => {
                      field.onChange(new Date(e.target.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="p-1">Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Put Description of the spending here"
                  className="resize-y"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="p-1">Amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min={0}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter className="mt-5">
          <DialogClose>
            <Button type="submit">Add</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  );
};
