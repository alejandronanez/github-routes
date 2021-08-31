import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});

  async function getGithubUserInfo() {
    const response = await fetch(`/api/profile/${router.query.username}`);

    setUser(await response.json());
  }

  return (
    <>
      <button onClick={getGithubUserInfo}>Get data</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
