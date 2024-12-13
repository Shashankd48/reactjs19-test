import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

const HomePage = () => {
   return (
      <div className="flex gap-2 flex-col">
         <h2>HomePage</h2>

         <Button variant="bordered" color="primary">
            Hello there
         </Button>

         <Input
            name="name"
            placeholder="Mr. Shashank Dubey"
            label="What is your name ?"
         />

         <button className="dark:text-green-400 text-red-400 text-sm border border-neutral-300 p-1 rounded-lg">
            Click Me
         </button>
      </div>
   );
};

export default HomePage;
