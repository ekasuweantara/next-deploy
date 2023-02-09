export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#39ea39",
        border: "0px",
        color: "white",
        padding: "10px 15px",
        borderRadius: "30px",
      }}
    >
      {children}
    </button>
  );
}
