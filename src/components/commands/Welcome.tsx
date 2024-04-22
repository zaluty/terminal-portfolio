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
        <PreName>
          {`        
                                                                                                                               
BBBBBBBBBBBBBBBBB   RRRRRRRRRRRRRRRRR        OOOOOOOOO     XXXXXXX       XXXXXXX             66666666         444444444  
B::::::::::::::::B  R::::::::::::::::R     OO:::::::::OO   X:::::X       X:::::X            6::::::6         4::::::::4  
B::::::BBBBBB:::::B R::::::RRRRRR:::::R  OO:::::::::::::OO X:::::X       X:::::X           6::::::6         4:::::::::4  
BB:::::B     B:::::BRR:::::R     R:::::RO:::::::OOO:::::::OX::::::X     X::::::X          6::::::6         4::::44::::4  
  B::::B     B:::::B  R::::R     R:::::RO::::::O   O::::::OXXX:::::X   X:::::XXX         6::::::6         4::::4 4::::4  
  B::::B     B:::::B  R::::R     R:::::RO:::::O     O:::::O   X:::::X X:::::X           6::::::6         4::::4  4::::4  
  B::::BBBBBB:::::B   R::::RRRRRR:::::R O:::::O     O:::::O    X:::::X:::::X           6::::::6         4::::4   4::::4  
  B:::::::::::::BB    R:::::::::::::RR  O:::::O     O:::::O     X:::::::::X           6::::::::66666   4::::444444::::444
  B::::BBBBBB:::::B   R::::RRRRRR:::::R O:::::O     O:::::O     X:::::::::X          6::::::::::::::66 4::::::::::::::::4
  B::::B     B:::::B  R::::R     R:::::RO:::::O     O:::::O    X:::::X:::::X         6::::::66666:::::64444444444:::::444
  B::::B     B:::::B  R::::R     R:::::RO:::::O     O:::::O   X:::::X X:::::X        6:::::6     6:::::6         4::::4  
  B::::B     B:::::B  R::::R     R:::::RO::::::O   O::::::OXXX:::::X   X:::::XXX     6:::::6     6:::::6         4::::4  
BB:::::BBBBBB::::::BRR:::::R     R:::::RO:::::::OOO:::::::OX::::::X     X::::::X     6::::::66666::::::6         4::::4  
B:::::::::::::::::B R::::::R     R:::::R OO:::::::::::::OO X:::::X       X:::::X      66:::::::::::::66        44::::::44
B::::::::::::::::B  R::::::R     R:::::R   OO:::::::::OO   X:::::X       X:::::X        66:::::::::66          4::::::::4
BBBBBBBBBBBBBBBBB   RRRRRRRR     RRRRRRR     OOOOOOOOO     XXXXXXX       XXXXXXX          666666666            4444444444
                                                                                                     
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____     __          
   / __/__ _/ /_         
  _\\ \\/ _ \`/ __/         
 /___/\\_,_/\\__/          
    _  __     _          
   / |/ /__ _(_)__  ___ _
  /    / _ \`/ / _ \\/ _ \`/
 /_/|_/\\_,_/_/_//_/\\_, / 
                  /___/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
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
                       
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
