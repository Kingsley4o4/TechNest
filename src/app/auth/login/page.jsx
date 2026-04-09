"use client";
import { Button } from "@/components/ui/button";
export default function Loginpage() {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div>
      <main>
        <h1 className="text-accent-border bg-accent-primary p-page-x-mobile ">
          LoginPage
        </h1>
        <Button onC lick={handleClick} className="cursor-pointer">
          Click me
        </Button>
      </main>
    </div>
  );
}
