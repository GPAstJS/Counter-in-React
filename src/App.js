  import { useState, useEffect } from "react";

export default function App() {
  const [getter, setter] = useState(0);

  useEffect(() => {});
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      className="container"
    >
      <h1 style={
        {
          fontSize: '60px'
        }
      }>{getter}</h1>

      <div>
        <button
          onClick={() => {
            setter(getter - 1);
          }}
          style={
            {
              color: "#fff",
              background: "#f00",
              margin: '10px',
              border: 'none',
              height: '60px',
              width: '100px',
              borderRadius: '10px',
            }
          }
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setter(0);
          }}
          style={
            {
              color: "#fff",
              background: "darkblue",
              margin: '10px',
              border: 'none',
              height: '60px',
              width: '100px',
              borderRadius: '10px',
            }
          }
        >
          Reset
        </button>
        <button
          onClick={() => {
            setter(getter + 1);
          }}
          style={
            {
              color: "#fff",
              background: "darkgreen",
              margin: '10px',
              border: 'none',
              height: '60px',
              width: '100px',
              borderRadius: '10px',
            }
          }
        >
          Increment
        </button>
      </div>
    </div>
  );
}
