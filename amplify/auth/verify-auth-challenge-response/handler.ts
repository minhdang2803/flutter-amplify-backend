import type { VerifyAuthChallengeResponseTriggerHandler } from "aws-lambda"

export const handler: VerifyAuthChallengeResponseTriggerHandler = async (event) => {
  // if(event.request.challengeAnswer  === event.request.privateChallengeParameters.answer){
  //   event.response.answerCorrect = true;
  // }
  // else {
  //   event.response.answerCorrect = false;
  // }
  // return event;
    const expectedAnswer = event.request.privateChallengeParameters!.secretLoginCode; 
    if (event.request.challengeAnswer === expectedAnswer) {
        event.response.answerCorrect = true;
    } else {
        event.response.answerCorrect = false;
    }
    return event;
};