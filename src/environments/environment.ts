// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    GlobaleApiUrl : 'http://localhost:8080',
    UtilisateurApiUrl :'http://localhost:8080/Utilisateurs',
    PrivilegeApiUrl :'http://localhost:8080/Privileges',
    CompetenceApiUrl : 'http://localhost:8080/Competences',
    UserCompetenceApiUrl : 'http://localhost:8080/UserCompetence',
    ModuleApiUrl : 'http://localhost:8080/Modules',
    TacheApiUrl : 'http://localhost:8080/Taches',
    ProjetApiUrl : 'http://localhost:8080/Projets',
    EquipeApiUrl : 'http://localhost:8080/Equipes',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
