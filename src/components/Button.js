export default function Button({ children, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#39ea39",
        border: "0px",
        color: "white",
        cursor: "pointer",
        padding: "10px 15px",
        borderRadius: "30px",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
