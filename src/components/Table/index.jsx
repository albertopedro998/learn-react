export default function Table({ children, className }) {
  return (
    <table
      className={`border border-gray-100  ${
        className ? className : ""
      }`}
    >
      {children}
    </table>
  );
}
