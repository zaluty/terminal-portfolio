import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Gotcha😁 I'm  self-thaught, independent since day 1!</EduIntro>
    </Wrapper>
  );
};
 
export default Education;
