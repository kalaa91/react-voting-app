import React from "react";
import { CardSubTitle, CardTitle } from "../../components/index";
/**
 * VotingHeader Component, as a header in Voting page,
 * { "props": { "question":string,"publishedDate": string   }}
 */
export default function VotingHeader(props) {
  const { question } = props;
  const { publishedDate } = props;
  return (
    <>
      <CardTitle inputColor="#c53e55">{question}</CardTitle>
      <CardSubTitle inputColor="#c53e55">
        {new Date(publishedDate).toDateString()}{" "}
      </CardSubTitle>
      <CardTitle inputColor="#c53e55">Choose a Vote:</CardTitle>
    </>
  );
}
