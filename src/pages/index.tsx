import React, { useEffect, useState } from 'react';
import { InferGetStaticPropsType } from 'next';

export default function Home({
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [data, setData] = useState({});

  async function fetchGithubData(username) {
    const response = await fetch(`/api/profile/${username}`);
    setData(await response.json());
  }

  useEffect(() => {
    fetchGithubData('alejandronanez');
  }, []);

  return (
    <>
      <h1>Prefetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      name: 'alejandro',
      age: 123,
    },
  };
}
