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
 
//  ggg▄█gggg█▄ggggggg▄████████ggg▄▄▄▄███▄▄▄▄gggg▄███████▄ggggg▄████████ggggggggg▄████████gggg▄████████gggg▄████████gggg▄████████g
//  gg███gggg███ggggg███gggg███g▄██▀▀▀███▀▀▀██▄g██▀ggggg▄██ggg███gggg███gggggggg███gggg███ggg███gggg███ggg███gggg███ggg███gggg███g
//  gg███gggg███ggggg███gggg███g███ggg███ggg███ggggggg▄███▀ggg███gggg███gggggggg███gggg█▀gggg███gggg█▀gggg███gggg█▀gggg███gggg███g
//  g▄███▄▄▄▄███▄▄ggg███gggg███g███ggg███ggg███gg▀█▀▄███▀▄▄ggg███gggg███gggggggg███ggggggggg▄███▄▄▄gggggg▄███▄▄▄gggggg▄███▄▄▄▄██▀g
//  ▀▀███▀▀▀▀███▀gg▀███████████g███ggg███ggg███ggg▄███▀ggg▀g▀███████████gggggg▀███████████g▀▀███▀▀▀ggggg▀▀███▀▀▀ggggg▀▀███▀▀▀▀▀ggg
//  gg███gggg███ggggg███gggg███g███ggg███ggg███g▄███▀ggggggggg███gggg███ggggggggggggggg███ggg███gggggggggg███gggggggg▀███████████g
//  gg███gggg███ggggg███gggg███g███ggg███ggg███g███▄ggggg▄█ggg███gggg███ggggggggg▄█gggg███ggg███gggggggggg███gggggggggg███gggg███g
//  gg███gggg█▀gggggg███gggg█▀ggg▀█ggg███ggg█▀ggg▀████████▀ggg███gggg█▀gggggggg▄████████▀gggg███gggggggggg███gggggggggg███gggg███g
//  ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg███gggg███g

                                                                                                     
          `}
        </PreName>
        <PreWrapper>
           
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
         
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
