import React from "react";
import { Checkbox } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import "./posts.css";

function Posts({ Post }) {
  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      {Post
        ? Post.map((item) => {
            return (
              <div className="cryptoCard" key={item.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <p>{item.market_cap_rank}</p>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>${parseFloat(item.current_price).toFixed(2)}</p>
                </div>
                <div>
                  <p>${parseFloat(item.total_volume).toFixed(2)}</p>
                </div>
                <div>
                  <p>${parseFloat(item.market_cap).toFixed(2)}</p>
                </div>
                <div>
                  <Checkbox />
                </div>
                <div>
                  <CalculateIcon className="calc" />
                </div>
                <hr />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Posts;
