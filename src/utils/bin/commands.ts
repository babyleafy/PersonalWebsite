// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'about' to display a summary about me.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

/*
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};
*/

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto: ${config.email}`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const youtube = async (args: string[]): Promise<string> => {
  window.open(`https://www.youtube.com/${config.social.youtube}/`);

  return 'Opening my youtube channel...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████   █████   ███  ███                                              
  ░░███   ░░███  ░░░  ░███                                              
   ░███    ░███  ████ ░███                                              
   ░███████████ ░░███ ░███                                              
   ░███░░░░░███  ░███ ░███                                              
   ░███    ░███  ░███ ░░░                                               
   █████   █████ █████ ███                                              
  ░░░░░   ░░░░░ ░░░░░ ░░░                                               
                                                                                                                                                                    
   █████  ██                    ██████████            ███  █████        
  ░░███  ███                   ░░███░░░░░█           ░░░  ░░███         
   ░███ ░░░  █████████████      ░███  █ ░  ████████  ████  ░███ █████   
   ░███     ░░███░░███░░███     ░██████   ░░███░░███░░███  ░███░░███    
   ░███      ░███ ░███ ░███     ░███░░█    ░███ ░░░  ░███  ░██████░     
   ░███      ░███ ░███ ░███     ░███ ░   █ ░███      ░███  ░███░░███    
   █████     █████░███ █████    ██████████ █████     █████ ████ █████ ██
  ░░░░░     ░░░░░ ░░░ ░░░░░    ░░░░░░░░░░ ░░░░░     ░░░░░ ░░░░ ░░░░░ ░░ 
                                                                                                                
Type 'help' to see the list of available commands.
Type 'about' to display a summary about me.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
