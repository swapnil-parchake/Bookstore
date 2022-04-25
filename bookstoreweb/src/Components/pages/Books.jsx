import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data,setData] = useState({});
  const getData = () =>{
    axios.get(`http://localhost:8080/books`)
    .then((data)=>{
      setData(data)
    });
  }
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
      </Grid>
    </>
  );
};
export default Books;
