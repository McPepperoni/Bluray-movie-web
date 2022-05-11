import React from "react";
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading";

export default function Loading(src, ...restProp) {
  //console.log("scr", src.src);
  return (
    <Spinner {...restProp}>
      <LockBody />
      <Picture src={`/images/users/${src.src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
