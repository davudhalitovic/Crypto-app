import React, { useEffect, useState } from "react";
import { Container, Titles } from "./style.js";
import { Checkbox } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import SearchInput from "./input.jsx";

import axios from "axios";

function Search() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setData(response.data);

    setFilteredData(response.data); // Initialize filtered data -zergo
    console.log(response.data);

    return response.data;
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    //this function will be called when the user types in the search bar -zergo
    setInput(e.target.value);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Container>
        {/* this div below contains the button -zergo */}
        <div>
          <SearchInput
            valueProp={input}
            onChangeProp={handleSearch}
          ></SearchInput>
        </div>

        <h1>Top 10 List</h1>
        <Titles>
          <h3>Rank</h3>
          <h3>Name</h3>
          <h3>Price</h3>
          <h3>24h Volume</h3>
          <h3>Market Cap</h3>
          <div></div>
          <div></div>
        </Titles>
        {/* this is how to map through the data -zergo */}
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="cryptoCard" key={item.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h1>{item.market_cap_rank}</h1>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <h2>{item.name}</h2>
              </div>
              <div>
                <h2>${parseFloat(item.current_price).toFixed(2)}</h2>
              </div>
              <div>
                <h2>${parseFloat(item.total_volume).toFixed(2)}</h2>
              </div>
              <div>
                <h2>${parseFloat(item.market_cap).toFixed(2)}</h2>
              </div>
              <div>
                <Checkbox />
              </div>
              <div>
                <CalculateIcon />
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Container>
    </>
  );
}

export default Search;

// @@@@@@@@@@@..@@@@@@@@@@@@  %@@@@@@@@@@@=    +@@@@@@@@@@    %@@@@@@@@#
// @@@@@@@@@@@..@@@@@@@@@@@@  %@@@@@@@@@@@@    @@@@@@@@@@@   =@@@@@@@@@@-
// @@@@@@@@@@@..@@@@@@@@@@@@  %@@@@@@@@@@@@.  .@@@@@@@@@@@   #@@@@@@@@@@+
// @@@-..*@@@%  .#@@@*..=@@@  .+@@@@.:*@@@@.  :@@@@%:-@@@@   %@@@%:-@@@@*
// @@@: +@@@#    #@@@+  =@@@   =@@@@   @@@@   -@@@@=  @@@@   @@@@=  #@@@#
//     *@@@*     #@@@*..-=--   =@@@@ .+@@@-   -@@@@.  ----   @@@@-  #@@@#
//    #@@@#      #@@@@@@@-     =@@@@@@@@*.    -@@@@.-@@@@@@* @@@@-  #@@@#
//   #@@@#       #@@@#===.     =@@@@=+@@@%.   -@@@@.-@@@@@@* @@@@-  #@@@#
//  #@@@* +###.  #@@@+  -%%%:  =@@@@  -@@@= : -@@@@: :@@@@-. @@@@-  #@@@#
// #@@@*  #@@@.  #@@@+  =@@@:  =@@@@  :@@@+ @=-@@@@+ .@@@@   @@@@+  @@@@#
// *@@@@***@@@@..*@@@@%**#@@@: +#@@@@*::@@@%+@+-@@@@@#%@@@@   %@@@@*#@@@@*
// #@@@@@@@@@@@..@@@@@@@@@@@@: %@@@@@@=:@@@@@@+:@@@@@@@@@@@   *@@@@@@@@@@+
// #@@@@@@@@@@@..@@@@@@@@@@@@: %@@@@@@= @@@@@@- @@@@@@@@@@@   -@@@@@@@@@@.
// %@@@@@@@@@@@..@@@@@@@@@@@@: %@@@@@@= =@@@@#  =@@@@@@**@@    *@@@@@@@@-
