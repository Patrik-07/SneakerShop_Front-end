import { IconButton } from "./icon-button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const UserIconButton = () => {
  return <IconButton linkTo="/user" iconDefinition={faUser}></IconButton>;
};
