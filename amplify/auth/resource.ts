import { defineAuth, secret } from '@aws-amplify/backend';
import { createAuthChallenge } from "./create-auth-challenge/resource"
import { defineAuthChallenge } from "./define-auth-challenge/resource"
import { verifyAuthChallengeResponse } from "./verify-auth-challenge-response/resource"
import { preSignUpTrigger } from './pre-sign-up-trigger/resource';
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  name: "DoteBaby",
  loginWith: {
    email: {
      // can be used in conjunction with a customized welcome email as well
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to my app!",
      verificationEmailBody: (createCode) => `Use this code to confirm your account: ${createCode()}`,
      userInvitation: {
        emailSubject: "Welcome to my app!",
        emailBody: (user, code) =>
          `We're happy to have you! You can now login with username ${user()} and temporary password ${code()}`, 
      },
    },
    externalProviders: {
      google: {
        clientId: secret('googleClientIdDemo'),
        clientSecret: secret('googleClientSecretDemo'),
      },
      signInWithApple: {
        clientId: secret('appleClientIdDemo'),
        keyId: secret('appleKeyIdDemo'),
        privateKey: secret('applePrivateKeyDemo'),
        teamId: secret('appleTeamIdDemo')
      },
      callbackUrls: ["dotebaby://medotebaby.com/"],
    logoutUrls: ["dotebaby://medotebaby.com/"],
    // logoutUrls: ["dotebaby://meDoteBaby.com/"],
    }
  },
  triggers: {
    createAuthChallenge:createAuthChallenge,
    defineAuthChallenge:defineAuthChallenge,
    verifyAuthChallengeResponse:verifyAuthChallengeResponse,
    preSignUp: preSignUpTrigger
  },
});
