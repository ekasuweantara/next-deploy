import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

const NativeErrors = () => {
  const rangeErrorCode = `
  const arr = [90,88]
  arr.length=90**99
  `;
  const rangeError = () => {
    const arr = [90, 88];
    arr.length = 90 ** 99;
  };

  const referenceErrorCode = `
  const cat = "cat";
  console.log(cat);
  console.log(dog);
  `;
  const referenceError = () => {
    const cat = "cat";
    console.log(cat);
    console.log(dog);
  };

  const syntaxErrorCode = `
  JSON.parse("[1, 2, 3, 4,]");
  `;
  const syntaxError = () => {
    JSON.parse("[1, 2, 3, 4,]");
  };

  const evalErrorCode = `
  eval("function baz() { var foo; foo.leftPad(); } baz();")
  `;
  const evalError = () => {
    eval("function baz() { var foo; foo.leftPad(); } baz();");
  };

  const typeErrorCode = `
  let num = 123;
  console.log(num.toUpperCase());
  `;
  const typeError = () => {
    let num = 123;
    console.log(num.toUpperCase());
  };

  const uriErrorCode = `
  const decode = decodeURI("%")
  `;
  const uriError = () => {
    const decode = decodeURI("%");
  };

  const internalErrorCode = `
  const internalError = () => {
    internalError();
  };
  `;
  const internalError = () => {
    console.log("print internal error");
    internalError();
  };

  return (
    <div
      style={{
        display: "block",
        padding: "0px 20px",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          marginBottom: "15px",
          display: "flex",
        }}
      >
        <h3 style={{ margin: "10px 0px" }}>
          7 types of native errors in javaScript based on this{" "}
        </h3>
        <Link
          style={{ margin: "auto 0px auto 5px" }}
          href="https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492"
        >
          link
        </Link>
      </div>
      <div>
        <Card>
          <h3>1. Range Error</h3>
          <pre>{rangeErrorCode}</pre>
          <Button onClick={rangeError}>Click to get error</Button>
        </Card>
        <Card>
          <h3>2. Reference Error</h3>
          <pre>{referenceErrorCode}</pre>
          <Button onClick={referenceError}>Click to get error</Button>
        </Card>
        <Card>
          <h3>3. Syntax Error</h3>
          <pre>{syntaxErrorCode}</pre>
          <Button onClick={syntaxError}>Click to get error</Button>
        </Card>
        <Card>
          <h3>4. Type Error</h3>
          <pre>{typeErrorCode}</pre>
          <Button onClick={typeError}>Click to get error</Button>
        </Card>
        <Card>
          <h3>5. URI Error</h3>
          <pre>{uriErrorCode}</pre>
          <Button onClick={uriError}>Click to get error</Button>
        </Card>
        <Card>
          <h3>6. Eval Error</h3>
          <pre>{evalErrorCode}</pre>
          <Button onClick={evalError}>Click to get error</Button>
        </Card>
        <Card>
          <h3>7. Internal Error</h3>
          <pre>{internalErrorCode}</pre>
          <Button onClick={internalError}>Click to get error</Button>
        </Card>
      </div>
    </div>
  );
};

export default NativeErrors;
