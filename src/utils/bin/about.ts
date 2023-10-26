import config from '../../../config.json';

const about = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 -----------
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄               ABOUT ME
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ${config.name}
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="${config.resume_url}" target="_blank">resume</a></u>
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 I'm a junior at the University of Pennsylvania studying Computer Science.
▐▓                                 ▐▓         I enjoy creating beautiful software that is both functional and intuitive,  
▐▓        > E R I K   W E I        ▐▓         and am an incoming SWE intern at Draftkings. Outside of CS, I like playing tennis,
▐▓                                 ▐▓         remixing music (try the 'youtube' command!), and watching great TV shows.
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       ----------- 
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           CONTACT 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  -----------
`;
};

export default about;
