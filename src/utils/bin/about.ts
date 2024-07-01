import config from '../../../config.json';

const about = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 -----------
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄               ABOUT ME
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ${config.name}
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          爵 <u><a href="${config.repo}" target="_blank">Github Repo</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 I'm a rising senior at the University of Pennsylvania studying Computer Science, and currently a
▐▓                                 ▐▓         SWE intern at Coinbase working on distributed streaming for core ledger transactions. I'm most
▐▓        > E R I K   W E I        ▐▓         interested in systems programming and building scalable backend infrastructure. Outside of CS, 
▐▓                                 ▐▓         I enjoy playing tennis, producing lofi (try the 'youtube' command), and watching great TV shows!
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       ----------- 
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           CONTACT 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  -----------
`;
};

export default about;
