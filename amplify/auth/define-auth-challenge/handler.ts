import type { DefineAuthChallengeTriggerHandler } from "aws-lambda"

export const handler: DefineAuthChallengeTriggerHandler = async (event) => {
  // // Check if this is the first authentication attempt
  //   if (event.request.session.length === 0) {
  //   // For the first attempt, we start with the custom challenge
  //   event.response.issueTokens = false;
  //   event.response.failAuthentication = false;
  //   event.response.challengeName = "CUSTOM_CHALLENGE";
  // } else if (
  //   event.request.session.length === 1 &&
  //   event.request.session[0].challengeName === "CUSTOM_CHALLENGE" &&
  //   event.request.session[0].challengeResult === true
  //   ) {
  //   // If this is the second attempt (session length 1),
  //   // it was a CUSTOM_CHALLENGE, and the result was successful
  //   event.response.issueTokens = true;
  //   event.response.failAuthentication = false;
  //   } else {
  //   // If we reach here, it means either:
  //   // 1. The custom challenge failed
  //   // 2. We've gone through more attempts than expected
  //   // In either case, we fail the authentication
  //   event.response.issueTokens = false;
  //   event.response.failAuthentication = true;
  // }

  if (event.request.session &&
    event.request.session.find(attempt => attempt.challengeName !== 'CUSTOM_CHALLENGE')) {
        console.log("Define case 1:")
        // We only accept custom challenges; fail auth
        event.response.issueTokens = false;
        event.response.failAuthentication = true;
    } else if (event.request.session &&
        event.request.session.length >= 3 &&
    event.request.session.slice(-1)[0].challengeResult === false) {
        console.log("Define case 2:")
        // The user provided a wrong answer 3 times; fail auth
        event.response.issueTokens = false;
        event.response.failAuthentication = true;
    } else if (event.request.session &&
        event.request.session.length &&
        event.request.session.slice(-1)[0].challengeName === 'CUSTOM_CHALLENGE' && // Doubly stitched, holds better
    event.request.session.slice(-1)[0].challengeResult === true) {
        console.log("Define case 3:")
        // The user provided the right answer; succeed auth
        event.response.issueTokens = true;
        event.response.failAuthentication = false;
    } else {
    // The user did not provide a correct answer yet; present challenge
        console.log("Define case 4:")
        event.response.issueTokens = false;
        event.response.failAuthentication = false;
        event.response.challengeName = 'CUSTOM_CHALLENGE';
    }

    return event;

  return event;
};