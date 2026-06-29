export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-[92%] max-w-[1320px] ${className}`}
    >
      {children}
    </div>
  );
}