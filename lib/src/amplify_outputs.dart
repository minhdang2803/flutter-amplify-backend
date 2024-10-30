const amplifyConfig = '''{
  "auth": {
    "user_pool_id": "ap-southeast-1_S9OzkgYvG",
    "aws_region": "ap-southeast-1",
    "user_pool_client_id": "6upoa7ot7r3chvlid2t8c8o52m",
    "identity_pool_id": "ap-southeast-1:f1caac0c-ea8a-4876-a4c7-8cf283c016d2",
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
        "dotebaby://meDoteBaby.com/"
      ],
      "redirect_sign_out_uri": [
        "dotebaby://meDoteBaby.com/"
      ],
      "response_type": "code",
      "scopes": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
      ],
      "domain": "486a14fc9ecb0032e67f.auth.ap-southeast-1.amazoncognito.com"
    },
    "unauthenticated_identities_enabled": true
  },
  "version": "1.3"
}''';