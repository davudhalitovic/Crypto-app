import React, { useEffect, useState } from "react";
import { Card, Container, Titles } from "./cryptos.styled";
import axios from "axios";
import Posts from "./posts/posts.jsx";
import Pagination from "./pagination/paginaiton.jsx";
import Input from "../input.jsx";

function Crypto() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");

  const postsPerPage = 10;

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://corsproxy.io/?https%3A%2F%2Fapi.coingecko.com%2Fapi%2Fv3%2Fcoins%2Fmarkets%3Fvs_currency%3Dusd%26order%3Dmarket_cap_desc%26per_page%3D100%26page%3D1%26sparkline%3Dfalse"
      );
      setData(response.data);
      console.log(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPost(data);
  }, [data]);

  const handleSearch = (e) => {
    setInput(e.target.value);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on new search
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div>
        <Input valueProp={input} onChangeProp={handleSearch} />
      </div>

      <div style={{ padding: "1rem" }}>
        <Container>
          <h1>Top 100 Cryptocurrencies</h1>
          <Titles>
            <Card>
              <p>Rank</p>
            </Card>
            <Card>
              <p>Name</p>
            </Card>
            <Card>
              <p>Price</p>
            </Card>
            <Card>
              <p>24hVolume</p>
            </Card>
            <Card>
              <p>Market Cap</p>
            </Card>
            <Card></Card>
            <Card></Card>
          </Titles>
          <div>
            {filteredData.length <= 0 ? (
              <p>No results found</p>
            ) : (
              <Posts Post={currentPost} />
            )}
          </div>

          <Pagination
            totalPosts={filteredData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Container>
      </div>
    </>
  );
}

export default Crypto;
