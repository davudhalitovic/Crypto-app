import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Titles } from './cryptos.styled';
import Posts from './posts/posts.jsx';
import Pagination from './pagination/paginaiton.jsx';


function Crypto() {
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    const getData = async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        useEffect(() => {
            getData();
          }, []);
        
          useEffect(() => {
            setPost(data);
          }, [data]);
        
          // Get current posts
          const indexOfLastPost = currentPage * postsPerPage;
          const indexOfFirstPost = indexOfLastPost - postsPerPage;
          const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);
          return (
            <div style={{padding: '1rem'}}>
              <Container>
                <h1>Top 10 List</h1>
                <Titles>
                  <Card><p>Rank</p></Card>
                  <Card><p>Name</p></Card>
                  <Card><p>Price</p></Card>
                  <Card><p>24hVolume</p></Card>
                  <Card><p>Market Cap</p></Card>
                  <Card></Card>
                  <Card></Card>
                </Titles>
                <Posts Post={currentPost} />
                <Pagination
                  totalPosts={post.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                />
              </Container>
            </div>
          );        
}



export default Crypto