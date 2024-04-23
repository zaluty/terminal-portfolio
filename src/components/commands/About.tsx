import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Hamza Essafar</HighlightSpan>! also know as <HighlightSpan>SFFR</HighlightSpan>
      </p>
      <p>
        I'm <HighlightAlt>a self-thaught computer science engineer</HighlightAlt> based in Agadir,
        Morocco.
      </p>
      <p>
        I am passionate about writing codes and <br />
        making web apps  to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
