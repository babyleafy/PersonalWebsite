import config from '../../../config.json';

const about = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 -----------
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄               ABOUT ME
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ${config.name}
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          爵 <u><a href="${config.repo}" target="_blank">Github Repo</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 I recently graduated from the University of Pennsylvania with a degree in Computer Science. 
▐▓                                 ▐▓         Previously, I was a SWE intern at Coinbase working on streaming for core financial transactions.
▐▓        > E R I K   W E I        ▐▓         I'm most interested in distributed systems and building backend infrastructure. Outside of CS, I 
▐▓                                 ▐▓         enjoy playing tennis, producing lofi (try the 'youtube' command), and watching great TV shows!
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       ----------- 
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           CONTACT 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  -----------
`;
};

export default about;
