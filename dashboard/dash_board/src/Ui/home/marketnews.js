import axios from "axios";
import { useEffect, useState } from "react";

export default function Marketnews() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/Marketnews")
      .then((res) => {
        const merged = res.data.quotes.map((q) => {
          const profile = res.data.profiles.find((p) => p.symbol === q.symbol);
          return { ...q, ...profile };
        });
        setnews(merged);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="stockticker p-0 m-0">
      <ul>
        {news.map((ele, i) => (
          <li>
            {/* <span><img src={ele.logo} style={{ width: "20px", height: "20px", borderRadius: "15px" }}></img></span> */}
            <span>
              <li className="stickername" key={i}>
                {ele.name}
              </li>
            </span>
            <span>
              <li 
              key={i} 
              className="stickerprice">
                {ele.dp}
              </li>
            </span>
            <span>
              <li
                key={i}
                className={`${
                  ele.d > 0 ? "profit" : ele.d < 0 ? "loss" : " "
                }`}
              >
                {ele.d > 0 ? `+${ele.d}` : (ele.d)}
              </li>
            </span>
            <span>
              <li
                key={i}
                className={`${
                  ele.dp > 0 ? "profit" : ele.dp < 0 ? "loss" : " "
                }`}
              >
                {ele.dp > 0 ? `(+${ele.dp}%)` : `(${ele.dp}%)`}
              </li>
            </span>
          </li>
        ))}
      </ul>
      <h2 style={{ color: "blue" }}>✅ Marketnews is rendering!</h2>;
    </div>
  );
}
