const environment = 'http://morphocrossfit.oktarastage.com/api/';

const environment_prod = 'https://admin.morphocrossfit.com/api/';

export const auth_login = (env: string) =>
  `${env === 'dev' ? environment : environment_prod}login`;
