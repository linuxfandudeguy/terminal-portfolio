import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open(" " + "https://youtu.be/uHgt8giw1LY", "_self");
  }

  return (
    <Wrapper>
      <span>jk I'm not putting my email here because I don't want to be raided</span>
    </Wrapper>
  );
};

export default Email;
