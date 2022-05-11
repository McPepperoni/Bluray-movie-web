import React from "react";
import { Profiles } from "../components";
import { HeaderContainer } from "./header";

// eslint-disable-next-line no-unused-vars
export function SelectProfileContainer({ user, setProfile }) {
  //console.log("user", user.photoURL);
  return (
    <>
      <HeaderContainer bg={false} needSignIn={false} />
      <Profiles>
        <Profiles.Title>Who&apos;s watching</Profiles.Title>

        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
