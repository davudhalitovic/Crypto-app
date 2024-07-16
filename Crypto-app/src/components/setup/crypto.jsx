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
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
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


  // Get current posts for filtered data
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
          <h1>Top 10 List</h1>
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
