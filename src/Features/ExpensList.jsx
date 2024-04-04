/* eslint-disable react/prop-types */

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ExpensList = ({ items, deleteitems }) => {
  const { toast } = useToast();

  const handleDelete = (id) => {
    deleteitems(id);
  };

  return (
    <div className="mt-7">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="  ">{item.amount}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="max-md:w-10 h-10 max-md:ml-[-20px] pr-[-20px] max-md:rounded-full"
                  variant="destructive"
                >
                  -
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>
          <Button
            className="mb-2 ml-[-90px] flex bg-black text-white max-sm:ml-2"
            variant="outline"
            onClick={() => {
              toast({
                title: `Total: ${items
                  .reduce((total, item) => total + parseFloat(item.amount), 0)
                  .toFixed(2)}`,
                description: "Hare Krishna 💙🦚",
                action: <ToastAction altText="Hope">Undo</ToastAction>,
              });
            }}
          >
            Total
          </Button>
        </TableCaption>
      </Table>
    </div>
  );
};

export default ExpensList;
