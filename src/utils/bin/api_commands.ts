// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  const froufrousRepo = {
    name: 'FrouFrous',
    html_url: 'https://floating-everglades-18018.herokuapp.com/',
  };
  projects.push(froufrousRepo);

  const order = [
    'FrouFrous',
    'SoccerDB',
    'PersonalWebsite',
    'Chirp',
    'WeatherApp',
    'TwitchAutoPredictions',
    'ValorantAgentRecommender',
    'Checkers',
    'challenge-react',
  ];

  projects.sort((a, b) => {
    const indexA = order.indexOf(a.name);
    const indexB = order.indexOf(b.name);
    return indexA - indexB;
  });

  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
