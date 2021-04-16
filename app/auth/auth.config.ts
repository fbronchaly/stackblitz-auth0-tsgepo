interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'FbNvkY3yTAyNwxnRThWU8y0a35zfM7zc',
  CLIENT_DOMAIN: 'attila-csanyi.eu.auth0.com',
  AUDIENCE: 'https://attila-csanyi.eu.auth0.com/userinfo',
  REDIRECT: 'https://stackblitz-auth0.stackblitz.io/callback',
  SCOPE: 'openid profile email'
};