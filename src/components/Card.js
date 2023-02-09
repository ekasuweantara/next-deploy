export default function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}
