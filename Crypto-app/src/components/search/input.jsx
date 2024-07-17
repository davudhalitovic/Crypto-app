import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ContainerSearch } from "./style.js";
function SearchInput({ valueProp, onChangeProp }) {
  return (
    <ContainerSearch>
      <Paper
        component="form"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#374151",
          p: "2px 2px",
          display: "flex",
          alignItems: "center",
          width: 300,
          marginTop: "1rem",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          style={{ color: "#B3BAC6", boxShadow: "none", marginBottom: "-5px" }}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          style={{ color: "white"}}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Crypto"
          inputProps={{ "aria-label": "search Crypto" }}
          value={valueProp}
          onChange={onChangeProp}
        />
      </Paper>
    </ContainerSearch>
  );
}

export default SearchInput;

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

