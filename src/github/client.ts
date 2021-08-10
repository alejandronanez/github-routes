import { encode } from 'base-64';

const user = process.env.GITHUB_USERNAME;
const password = process.env.GITHUB_PAT;

const githubUsernameUrl = (username) =>
  `https://api.github.com/users/${username}`;

const fetchGithubUserInfo = async (username, options = {}) => {
  const response = await fetch(githubUsernameUrl(username), options);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
};

const unauthenticatedCall = async (username) => {
  return await fetchGithubUserInfo(username);
};

const authenticatedCall = async (username) => {
  const authorizationHeader = encode(`${user}:${password}`);

  return await fetchGithubUserInfo(username, {
    headers: {
      Authorization: `Basic ${authorizationHeader}`,
    },
  });
};

export const githubClient = {
  users: {
    authenticatedCall,
    unauthenticatedCall,
  },
};
