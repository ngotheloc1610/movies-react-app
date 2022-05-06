import React from "react";
import { useParams } from "react-router-dom";

import PageHeader from "../Components/page-header/PageHeader";

import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../Components/movie-grid/MovieGrid";
import Helmet from "../Components/helmet/Helmet";

const Catalog = () => {
  const { category } = useParams();

  return (
    <Helmet title={category === cate.movie ? "Movies" : "TV Series"}>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}></MovieGrid>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
