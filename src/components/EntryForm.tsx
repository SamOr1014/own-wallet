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
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/CustomDatePicker";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  date: z
    .string({
      required_error: "You need a date dumbass",
    })
    .datetime(),
  description: z.string(),
  amount: z.number({ required_error: "You have to input a amount" }),
});

export const EntryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date().toISOString(),
      description: "",
      amount: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                  <DatePicker
                    value={new Date(field.value)}
                    onSelectDate={(date) => {
                      form.setValue(
                        "date",
                        date?.toISOString() ?? new Date().toISOString()
                      );
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
          <Button type="submit">Add</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
