import { defineAuth, secret } from '@aws-amplify/backend';
import { createAuthChallenge } from "./create-auth-challenge/resource"
import { defineAuthChallenge } from "./define-auth-challenge/resource"
import { verifyAuthChallengeResponse } from "./verify-auth-challenge-response/resource"
import { preSignUpTrigger } from './pre-sign-up-trigger/resource';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  name: "DoteBaby",
  loginWith: {
    email: true,
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
    }
  },
  triggers: {
    createAuthChallenge:createAuthChallenge,
    defineAuthChallenge:defineAuthChallenge,
    verifyAuthChallengeResponse:verifyAuthChallengeResponse,
    preSignUp: preSignUpTrigger
  },
});
