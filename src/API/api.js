export const API_URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app';

export function POST(body) {
  return {
    url: API_URL,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
