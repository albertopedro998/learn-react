export default function Input({
  type = "text",
  className = "outline-0 p-3 border border-gray-300 rounded-xl w-full ",
  ...props
}) {
  return <input type={type} className={className} {...props} />;
}
