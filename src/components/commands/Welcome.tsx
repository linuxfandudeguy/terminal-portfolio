import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
       <pre>
    <PreName>
          {`        
 _      _ _           _     
| | ___| | |__   ___ (_)___ 
| |/ _ \\ | '_ \\ / _ \\| / __|
| |  __/ | |_) | (_) | \\__ \\
|_|\\___|_|_.__/ \\___/|_|___/     
`}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
         _      _ _           _     
| | ___| | |__   ___ (_)___ 
| |/ _ \\ | '_ \\ / _ \\| / __|
| |  __/ | |_) | (_) | \\__ \\
|_|\\___|_|_.__/ \\___/|_|___/                              
`}
          </PreNameMobile>
        </PreWrapper>
        </pre>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
           This is a fork from a user by the name of satnaing.
           This project's source code can be found in this project's{" "}
          <Link href="https://github.com/linuxfandudeguy/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                 
   @@          @@   
  @@@@@      @@@@@  
 @@@@@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@@@@ 
@@@@@@@@@@@@@@@@@@@@
@@@*   @@@@@@   +@@@
@@@@@@*@@@@@@@@*#@@@
@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@@ 
    @@@@@@@@@@@@           
`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
