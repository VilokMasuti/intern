/* eslint-disable react/prop-types */
import { ToastAction } from "@/components/ui/toast";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const ExpensForm = ({ Add }) => {
  const { toast } = useToast();
  const form = useForm(); // Initialize the form object using useForm hook

  const onSubmit = (data) => {
    // Check if all fields are filled
    const isValid = data.description && data.category && data.amount;
    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please fill in all the fields.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    Add(data);
  };

  return (
    <div className=" mt-10  max-sm:w-[390px] flex items-center justify-center  max-sm:h-[300px] max-sm:flex max-sm:items-center max-sm:justify-center w-[700px] h-[320px] rounded-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-[660px] max-md:gap-9"
        >
          <FormField
            className=" max-md:gap-3"
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="max-sm:mt-6">
                <FormLabel className=" max-sm:flex max-sm:items-center max-sm:justify-center">
                  Description
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            className=" max-md:gap-5"
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="max-sm:mt-6">
                <FormLabel className=" max-sm:flex max-sm:items-center max-sm:justify-center">
                  Category
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            className=" max-md:gap-5"
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="max-sm:mt-6">
                <FormLabel className=" max-sm:flex max-sm:items-center max-sm:justify-center">
                  Amount
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter amount" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className=" mt-8 max-md:mb-3 max-md:ml-[150px]" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ExpensForm;
