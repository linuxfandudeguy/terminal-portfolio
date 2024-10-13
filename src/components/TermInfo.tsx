import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>lelterminal.vercel.app</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
