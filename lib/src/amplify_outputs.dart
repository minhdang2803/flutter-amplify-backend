const amplifyConfig = '''{
  "auth": {
    "user_pool_id": "ap-southeast-1_1Nv3F8vAf",
    "aws_region": "ap-southeast-1",
    "user_pool_client_id": "ejea0vj2pg29grve3ce92g0bt",
    "identity_pool_id": "ap-southeast-1:60ca91de-f6f6-4883-bb14-4c19d61799a4",
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
        "GOOGLE",
        "SIGN_IN_WITH_APPLE"
      ],
      "redirect_sign_in_uri": [
        "dotebaby://medotebaby.com/"
      ],
      "redirect_sign_out_uri": [
        "dotebaby://medotebaby.com/"
      ],
      "response_type": "code",
      "scopes": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
      ],
      "domain": "da75119ca542b52535c6.auth.ap-southeast-1.amazoncognito.com"
    },
    "unauthenticated_identities_enabled": true
  },
  "version": "1.3"
}''';