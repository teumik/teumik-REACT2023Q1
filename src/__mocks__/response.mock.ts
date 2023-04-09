import { rest } from 'msw';
import { FetchResponse } from '../hooks/useCustomFetch';

const mockResponse: FetchResponse = {
  info: {
    count: 666,
    pages: 69,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez Fake',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
    {
      id: 2,
      name: 'Morty Smith Fake',
      status: 'Alive',
      species: 'Human',
      type: 'Boy',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
      ],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    },
  ],
};

const correctHandlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    if (req.url.searchParams.get('name') === 'query') {
      return res(ctx.status(404), ctx.json({ error: 'message' }));
    }
    if (req.url.searchParams.get('name') === 'correct') {
      return res(ctx.status(200), ctx.json(mockResponse));
    }
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
  rest.get('https://rickandmortyapi.com/api/character/1', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mockResponse.results[0]))
  ),
];

export { mockResponse, correctHandlers };
