import React from 'react';
import { unauthenticatedCall } from 'github/client';

export default function Home({ user }) {
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export async function getStaticProps() {
  const response = await unauthenticatedCall('alejandronanez');

  return {
    props: {
      user: response,
    },
  };
}
