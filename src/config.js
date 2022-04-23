const CLIENT_ID = "0oa3uw8tziXQH3J9F5d7";
const ISSUER = 'https://dev-62015683.okta.com/oauth2/default'



export const oktaConfig={
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: false,

}