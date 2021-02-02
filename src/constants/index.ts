// import * as icons from './icons';
// import * as googlePlaces from './google-places';
// import * as queue from './queue';

import {auth as actionsAuth, user as actionsUser} from './action-types';

import {user as reducersNameUser} from './reducers-names';

import {
  auth as routesAuth,
  boot as routesBoot,
  classes as routesClasses,
  profile as routesProfile,
} from './routes';

import {login as stringsAuth, validations} from './strings';

import {global as colorsGlobal} from './colors';

import {universal as imagesGlobal} from './images';

import {universal as schemasGlobal} from './schemas';

export {
  stringsAuth,
  validations,
  actionsAuth,
  actionsUser,
  colorsGlobal,
  routesAuth,
  routesBoot,
  routesClasses,
  routesProfile,
  imagesGlobal,
  reducersNameUser,
  schemasGlobal,
};
