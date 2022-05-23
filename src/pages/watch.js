/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { PlayerContainer } from "../containers/player";

export default function Watch() {
  const { id } = useParams();
  // console.log(id);

  return <PlayerContainer />;
}
