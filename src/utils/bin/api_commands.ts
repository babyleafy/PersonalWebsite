// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  const froufrousRepo = {
    name: 'FrouFrous Social Media App',
    html_url: 'https://froufrous-72709a676ac7.herokuapp.com/',
  };
  const dpRepo = {
    name: 'Daily Pennsylvanian Mobile',
    html_url: 'https://github.com/dailypenn/canada-goose'
  }
  projects.push(froufrousRepo);
  projects.push(dpRepo);

  const order = [
    'Daily Pennsylvanian Mobile',
    'FrouFrous Social Media App',
    'SoccerDB',
    'PersonalWebsite',
    'Chirp',
    'TwitchAutoPredictions',
    'ValorantAgentRecommender',
    'WeatherApp',
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
