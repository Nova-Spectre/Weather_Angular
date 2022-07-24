// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApibaseUrl:'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidAPIHostHeaderName:'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue:'YOUR HEADER HOST VALUE',   //YOUR HEADER HOST VALUE FROM RAPID API - OPEN WEATHER MAP API
  XRapidAPIKeyHeaderName:'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue:'YOUR API KEY'     // YOUR HEADER KEY FROM RAPID API - OPEN WEATHER MAP API
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
