import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import CoinModal from "./coinModal";
import "./posts.css";
import {
  Calculator,
  CoinInfo,
  ExitDiv,
  InputCalc,
  InputDiv,
  Overlay,
} from "../cryptos.styled";
import FavoriteButton from "../../favorite/FavoriteButton";

function Posts({ Post }) {
  const [calculator, setCalculator] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinQuantity, setCoinQuantity] = useState(0);
  const [open, setOpen] = useState(false);

  const handleCalculator = (item) => {
    setSelectedCoin(item);
    setCalculator(!calculator);
  };

  const handleCoinClick = (item) => {
    setSelectedCoin(item);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedCoin(null);
  };

  return (
    <>
      <div style={{ width: "100%", padding: "1rem" }}>
        {Post
          ? Post.map((item) => (
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

                  <img
                    style={{ cursor: "pointer" }}
                    src={item.image}
                    alt={item.name}
                    onClick={() => handleCoinClick(item)}
                  />
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
                  <FavoriteButton itemId={item.id} />
                </div>
                <div>
                  <CalculateIcon
                    className="calc"
                    onClick={() => handleCalculator(item)}
                  />
                </div>
                <hr />
              </div>
            ))
          : null}

        {calculator && (
          <Calculator>
            <Overlay>
              <ExitDiv>
                <p onClick={() => setCalculator(false)}>X</p>
              </ExitDiv>
              <CoinInfo>
                <p>{selectedCoin.name}</p>
                <img src={selectedCoin.image} alt="" />
              </CoinInfo>
              <InputDiv>
                <InputCalc
                  type="number"
                  value={coinQuantity}
                  onChange={(e) => setCoinQuantity(e.target.value)}
                />
                <p>X</p>
                <InputCalc
                  type="text"
                  readOnly
                  value={selectedCoin.current_price}
                />
                <p>=</p>
                <InputCalc
                  type="text"
                  readOnly
                  value={selectedCoin.current_price * coinQuantity}
                />
              </InputDiv>
            </Overlay>
          </Calculator>
        )}
      </div>

      {open && (
        <CoinModal open={open} onClose={handleCloseModal} coin={selectedCoin} />
      )}
    </>
  );
}

export default Posts;
