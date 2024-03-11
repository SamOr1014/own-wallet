"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SpendingType } from "../../lib/schema";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  data: SpendingType[];
  removeAction: (id: number) => void;
};

export const SpendingList = ({ data, removeAction }: Props) => {
  return (
    <Table>
      <TableCaption>A list of your recent spending.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-center">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{item.date.toDateString()}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-center">£{item.amount}</TableCell>
              <TableCell className="flex justify-center">
                <Button
                  variant="ghost"
                  size={"sm"}
                  onClick={() => {
                    removeAction(item.id);
                  }}
                >
                  <X />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell colSpan={1} className="text-center">
            £
            {data.reduce((prev, curr) => {
              return prev + parseInt(curr.amount);
            }, 0)}
          </TableCell>
          <TableCell colSpan={1}> </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
