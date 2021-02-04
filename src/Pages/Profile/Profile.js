import React from "react";
import useStyles from "./style";

import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileContent from "../../components/ProfileContent/ProfileContent";

export default function Profile() {
  return (
    <div>
      <ProfileNav />
      <ProfileContent />
    </div>
  );
}
