import Link from "next/link";

const Home = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "35vh" }}
    >
      <div
        style={{
          display: "block",
          padding: "0px 20px",
        }}
      >
        <h3>POC Sentry FE</h3>
        <hr style={{ margin: "10px 0px" }} />
        <div>
          <ul>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/native_errors">
                7 Types of Native Errors in JavaScript
              </Link>
            </li>
            <li>
              <Link href="/form">Sample API Error</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
