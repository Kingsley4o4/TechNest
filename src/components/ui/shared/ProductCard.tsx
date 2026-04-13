import { ReactNode, HTMLAttributes } from "react";

interface CardProductProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function CardProduct({ children, className = "", ...props }: CardProductProps) {
  return (
    <div
      {...props}
      className={`w-full h-full py-5 bg-card rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
