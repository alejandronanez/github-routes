import { encode } from 'base-64';

const githubUsernameUrl = (username) =>
  `https://api.github.com/users/${username}`;

const fetchGithubUserInfo = async (username, options = {}) => {
  const response = await fetch(githubUsernameUrl(username), options);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
};

export const unauthenticatedCall = async (username) => {
  return await fetchGithubUserInfo(username);
};

export const authenticatedCall = async ({
  username,
  basicAuth: { password, user },
}: {
  username: string;
  basicAuth: {
    password: string;
    user: string;
  };
}) => {
  const authorizationHeader = encode(`${user}:${password}`);

  return await fetchGithubUserInfo(username, {
    headers: {
      Authorization: `Basic ${authorizationHeader}`,
    },
  });
};
