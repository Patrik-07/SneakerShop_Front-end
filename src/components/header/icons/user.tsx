import { IconButton } from "./icon-button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const UserIconButton = () => {
  return <IconButton to="/login" iconDefinition={faUser}></IconButton>;
};
