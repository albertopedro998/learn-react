export default function Table({ children, className }) {
  return (
    <table
      className={`border-2 border-gray-100  ${
        className ? className : ""
      }`}
    >
      {children}
    </table>
  );
}
