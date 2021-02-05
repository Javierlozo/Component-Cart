import React from "react";
import useStyles from "./style";

import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileContent from "../../components/ProfileContent/ProfileContent";

export default function Profile() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <ProfileNav value={value} setValue={setValue} />
      <ProfileContent value={value} />
    </div>
  );
}
