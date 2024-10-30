import type { CreateAuthChallengeTriggerHandler } from "aws-lambda";

export const handler: CreateAuthChallengeTriggerHandler = async (event) => {
  // if (event.request.challengeName === "CUSTOM_CHALLENGE") {
    
  //   const digitGenerator = require('crypto-secure-random-digit');
    
  //   let challengeCode = digitGenerator.randomDigits(6).join("");
  //   console.log(`Create: go here: ${challengeCode}`)
  //   await sendChallengeCode(event.request.userAttributes.email, challengeCode);

  //   event.response.challengeMetadata = "TOKEN_CHECK";

  //   event.response.publicChallengeParameters = {
  //     trigger: "true",
  //     code: challengeCode,
  //   };
  //   event.response.privateChallengeParameters = { trigger: "true" };
  //   event.response.privateChallengeParameters.answer = challengeCode;
  // }
  
  // return event;



    let secretLoginCode: string;
    if (!event.request.session || !event.request.session.length) {

        // This is a new auth session
      // Generate a new secret login code and mail it to the user
        const digitGenerator = require('crypto-secure-random-digit');
        secretLoginCode = digitGenerator.randomDigits(6).join("");
        await sendChallengeCode(event.request.userAttributes.email, secretLoginCode);

    } else {

        // There's an existing session. Don't generate new digits but
        // re-use the code from the current session. This allows the user to
        // make a mistake when keying in the code and to then retry, rather
        // the needing to e-mail the user an all new code again.    
        const previousChallenge = event.request.session.slice(-1)[0];
        secretLoginCode = previousChallenge.challengeMetadata!.match(/CODE-(\d*)/)![1];
    }

    // This is sent back to the client app
    event.response.publicChallengeParameters = {
        email: event.request.userAttributes.email
    };

    // Add the secret login code to the private challenge parameters
    // so it can be verified by the "Verify Auth Challenge Response" trigger
    event.response.privateChallengeParameters = { secretLoginCode };

    // Add the secret login code to the session so it is available
    // in a next invocation of the "Create Auth Challenge" trigger
    event.response.challengeMetadata = `CODE-${secretLoginCode}`;

    return event;
};

async function sendChallengeCode(emailAddress: string, secretCode: string) {
  let aws = require("aws-sdk");
  let ses = new aws.SES({ region: "ap-southeast-1" });
  var params = {
    Destination: {
      ToAddresses: [emailAddress],
    },
    Message: {
      Body: {
        Text: { Data: `Your Secrete code to sign in to Dote ${secretCode}` },
      },
      Subject: { Data: `Verification your Sign In to Dote` },
    },
    Source: "minhdang2001.11@gmail.com",
  };
  return ses.sendEmail(params).promise()
}
