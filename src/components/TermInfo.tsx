import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.sffr.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
