export default function CardProduct({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`w-full h-full py-5 bg-card rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
// h-108
