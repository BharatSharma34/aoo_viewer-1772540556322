import { useEffect, useState } from "react";
import { api } from "../utils/api";  // <-- use the helper

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => { 
    api.get("/health").then(r => setData(r.data));
  }, []);

  return (
    <div style={{padding:"2rem"}}>
      <h1>AOO_Viewer</h1>
      <p>Dashboard containing a map of the world enabling med planners to identify quickly other activity in their intended area of operations (AOO) and strategic overview to various layers of the Chain of Command</p>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}