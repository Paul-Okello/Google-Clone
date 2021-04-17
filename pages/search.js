import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Search result */}
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
      ).then((response) => response.json());
  // After the server has rendered pass the result to the client
  return {
    props: {
      results: data,
    },
  };
}
