import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Mohammed Brbix</HighlightSpan>! also know as <HighlightSpan>Brox 46</HighlightSpan>
      </p>
      <p>
        I'm <HighlightAlt>a Self-thaught cybersecurity engineer</HighlightAlt> based in Agadir,
        Morocco.
      </p>
      <p>
        I am passionate about writing codes and <br />
        scripts  to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
