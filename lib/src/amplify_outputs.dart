const amplifyConfig = '''{
  "auth": {
    "user_pool_id": "ap-southeast-1_0Zuc2v1rT",
    "aws_region": "ap-southeast-1",
    "user_pool_client_id": "1f9bajs5ihi34hkkic4uuuli99",
    "identity_pool_id": "ap-southeast-1:9b846a70-1ac2-49c4-a0ed-beb994a6d335",
    "mfa_methods": [],
    "standard_required_attributes": [
      "email"
    ],
    "username_attributes": [
      "email"
    ],
    "user_verification_types": [
      "email"
    ],
    "groups": [],
    "mfa_configuration": "NONE",
    "password_policy": {
      "min_length": 8,
      "require_lowercase": true,
      "require_numbers": true,
      "require_symbols": true,
      "require_uppercase": true
    },
    "oauth": {
      "identity_providers": [
        "GOOGLE"
      ],
      "redirect_sign_in_uri": [
        "myapp://callback/"
      ],
      "redirect_sign_out_uri": [
        "myapp://signout/"
      ],
      "response_type": "code",
      "scopes": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
      ],
      "domain": "bd393b3c04c218090a07.auth.ap-southeast-1.amazoncognito.com"
    },
    "unauthenticated_identities_enabled": true
  },
  "version": "1.3"
}''';