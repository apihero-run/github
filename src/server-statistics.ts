import { ServerStatistics, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#get-github-enterprise-server-statistics


* Get GitHub Enterprise Server statistics
* Returns aggregate usage metrics for your GitHub Enterprise Server 3.5+ instance for a specified time period up to 365 days.
 * 
 * To use this endpoint, your GitHub Enterprise Server instance must be connected to GitHub Enterprise Cloud using GitHub Connect. You must enable Server Statistics, and for the API request provide your enterprise account name or organization name connected to the GitHub Enterprise Server. For more information, see "[Enabling Server Statistics for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" in the GitHub Enterprise Server documentation.
 * 
 * You'll need to use a personal access token:
 * - If you connected your GitHub Enterprise Server to an enterprise account and enabled Server Statistics, you'll need a personal access token with the `read:enterprise` permission.
 * - If you connected your GitHub Enterprise Server to an organization account and enabled Server Statistics, you'll need a personal access token with the `read:org` permission.
 * 
 * For more information on creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
* @param enterpriseOrOrg - The slug version of the enterprise name or the login of an organization.
* @param [dateStart] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
* @param [dateEnd] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. 
*/
export const getServerStatistics: ApiHeroEndpoint<
  { enterpriseOrOrg: string; dateStart?: string; dateEnd?: string },
  ServerStatistics
> = {
  id: "enterprise-admin/get-server-statistics",
  clientId: "github",
};
