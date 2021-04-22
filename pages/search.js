import axios from "axios";
import React from "react";
import { getRepos } from "../lib/githubHelpers";
import Container from "../components/Container";

const search = ({ repos }) => {
  console.log(repos);
  return <Container></Container>;
};

export const getServerSideProps = async (ctx) => {
  const query = ctx.query.q;
  const reposRes = await getRepos(query);

  return {
    props: {
      repos: reposRes.data.items,
    },
  };
};

export default search;
