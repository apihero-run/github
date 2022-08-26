import {
  AlertNumber,
  OrganizationSecretScanningAlert,
  SecretScanningAlert,
  SecretScanningAlertResolution,
  SecretScanningAlertState,
  SecretScanningLocation,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization


* List secret scanning alerts for an organization
* Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
 * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 * 
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [page=1] - Page number of the results to fetch.
* @param [secretType] - A comma-separated list of secret types to return. By default all secret types are returned.
See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
for a complete list of secret types.
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
* @param [state] - Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
* @param [resolution] - A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
* @param [sort] - The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string. 
*/
export const listAlertsForOrg: ApiHeroEndpoint<
  {
    org: string;
    perPage?: number;
    direction?: "asc" | "desc";
    page?: number;
    secretType?: string;
    after?: string;
    state?: "open" | "resolved";
    resolution?: string;
    sort?: "created" | "updated";
    before?: string;
  },
  Array<OrganizationSecretScanningAlert>,
  { Link: string }
> = {
  id: "secret-scanning/list-alerts-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository


* List secret scanning alerts for a repository
* Lists secret scanning alerts for an eligible repository, from newest to oldest.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 * 
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [page=1] - Page number of the results to fetch.
* @param [secretType] - A comma-separated list of secret types to return. By default all secret types are returned.
See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
for a complete list of secret types.
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
* @param [state] - Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
* @param [resolution] - A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
* @param [sort] - The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string. 
*/
export const listAlertsForRepo: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    perPage?: number;
    direction?: "asc" | "desc";
    page?: number;
    secretType?: string;
    after?: string;
    state?: "open" | "resolved";
    resolution?: string;
    sort?: "created" | "updated";
    before?: string;
  },
  Array<SecretScanningAlert>
> = {
  id: "secret-scanning/list-alerts-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise


* List secret scanning alerts for an enterprise
* Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
 * To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
* @param [secretType] - A comma-separated list of secret types to return. By default all secret types are returned.
See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
for a complete list of secret types.
* @param [state] - Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
* @param [resolution] - A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
* @param [sort] - The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved. 
*/
export const listAlertsForEnterprise: ApiHeroEndpoint<
  {
    enterprise: string;
    perPage?: number;
    direction?: "asc" | "desc";
    before?: string;
    after?: string;
    secretType?: string;
    state?: "open" | "resolved";
    resolution?: string;
    sort?: "created" | "updated";
  },
  Array<OrganizationSecretScanningAlert>,
  { Link: string }
> = {
  id: "secret-scanning/list-alerts-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert


* Get a secret scanning alert
* Gets a single secret scanning alert detected in an eligible repository.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 * 
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param alertNumber - The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getAlert: ApiHeroEndpoint<
  { repo: string; alertNumber: AlertNumber; owner: string },
  SecretScanningAlert
> = {
  id: "secret-scanning/get-alert",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert


* Update a secret scanning alert
* Updates the status of a secret scanning alert in an eligible repository.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 * 
 * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param alertNumber - The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const updateAlert: ApiHeroEndpoint<
  {
    repo: string;
    alertNumber: AlertNumber;
    owner: string;
    alert: {
      state: SecretScanningAlertState;
      resolution?: SecretScanningAlertResolution;
    };
  },
  SecretScanningAlert
> = {
  id: "secret-scanning/update-alert",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert


* List locations for a secret scanning alert
* Lists all locations for a given secret scanning alert for an eligible repository.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 * 
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param alertNumber - The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listLocationsForAlert: ApiHeroEndpoint<
  { repo: string; alertNumber: AlertNumber; owner: string; perPage?: number; page?: number },
  Array<SecretScanningLocation>,
  { Link: string }
> = {
  id: "secret-scanning/list-locations-for-alert",
  clientId: "github",
};
