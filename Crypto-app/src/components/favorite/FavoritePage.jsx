import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FavoriteContext } from "./FavoriteContextProvider";
import Posts from "../setup/posts/posts.jsx";
import Pagination from "../setup/pagination/paginaiton.jsx";
import { Container, Titles, Card } from "../setup/cryptos.styled";

const FavoritePage = () => {
  const { favorites } = useContext(FavoriteContext);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postsPerPage = 10;

  useEffect(() => {
    const getFavoritesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const filteredData = response.data.filter((coin) =>
          favorites.includes(coin.id)
        );
        setData(filteredData);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    getFavoritesData();
  }, [favorites]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
      <h1>Favorites</h1>
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
          <p>24h Volume</p>
        </Card>
        <Card>
          <p>Market Cap</p>
        </Card>
        <Card></Card>
        <Card></Card>
      </Titles>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.length <= 0 ? (
        <p>No favorites added yet</p>
      ) : (
        <Posts Post={currentPost} />
      )}
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default FavoritePage;
