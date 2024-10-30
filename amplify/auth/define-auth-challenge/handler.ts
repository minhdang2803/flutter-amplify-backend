import type { DefineAuthChallengeTriggerHandler } from "aws-lambda"

export const handler: DefineAuthChallengeTriggerHandler = async (event) => {
  // Check if this is the first authentication attempt
  if (event.request.session.length === 0) {
    console.log("Define case 1:")
    // For the first attempt, we start with the custom challenge
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = "CUSTOM_CHALLENGE";
  } else if (
    event.request.session.length === 1 &&
    event.request.session[0].challengeName === "CUSTOM_CHALLENGE" &&
    event.request.session[0].challengeResult === true
  ) {
    console.log("Define case 2:")
    // If this is the second attempt (session length 1),
    // it was a CUSTOM_CHALLENGE, and the result was successful
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else {
    console.log("Define case 3:")
    // If we reach here, it means either:
    // 1. The custom challenge failed
    // 2. We've gone through more attempts than expected
    // In either case, we fail the authentication
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }

  return event;
};