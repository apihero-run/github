import {
  AlertNumber,
  CodeScanningAlert,
  CodeScanningAlertDismissedComment,
  CodeScanningAlertDismissedReason,
  CodeScanningAlertInstance,
  CodeScanningAlertItems,
  CodeScanningAlertSetState,
  CodeScanningAnalysis,
  CodeScanningAnalysisCommitSha,
  CodeScanningAnalysisDeletion,
  CodeScanningAnalysisSarifFile,
  CodeScanningAnalysisToolGuid,
  CodeScanningAnalysisToolName,
  CodeScanningOrganizationAlertItems,
  CodeScanningRef,
  CodeScanningSarifsReceipt,
  CodeScanningSarifsStatus,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/code-scanning#list-code-scanning-alerts-by-organization


* List code scanning alerts for an organization
* Lists code scanning alerts for the default branch for all eligible repositories in an organization. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * 
 * To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
 * 
 * GitHub Apps must have the `security_events` read permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [page=1] - Page number of the results to fetch.
* @param [sort] - The property by which to sort the results.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
* @param [toolName] - The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
* @param [state] - If specified, only code scanning alerts with this state will be returned.
* @param [toolGuid] - The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor. 
*/
export const listAlertsForOrg: ApiHeroEndpoint<
  {
    org: string;
    perPage?: number;
    direction?: "asc" | "desc";
    page?: number;
    sort?: "created" | "updated";
    before?: string;
    toolName?: CodeScanningAnalysisToolName;
    state?: "open" | "closed" | "dismissed" | "fixed";
    toolGuid?: CodeScanningAnalysisToolGuid;
    after?: string;
  },
  Array<CodeScanningOrganizationAlertItems>,
  { Link: string }
> = {
  id: "code-scanning/list-alerts-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository


* List code scanning alerts for a repository
* Lists code scanning alerts.
 * 
 * To use this endpoint, you must use an access token with the `security_events` scope or, for alerts from public repositories only, an access token with the `public_repo` scope.
 * 
 * GitHub Apps must have the `security_events` read
 * permission to use this endpoint.
 * 
 * The response includes a `most_recent_instance` object.
 * This provides details of the most recent instance of this alert
 * for the default branch (or for the specified Git reference if you used `ref` in the request).
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [page=1] - Page number of the results to fetch.
* @param [toolName] - The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
* @param [toolGuid] - The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
* @param [ref] - The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
* @param [state] - If specified, only code scanning alerts with this state will be returned.
* @param [sort] - The property by which to sort the results. 
*/
export const listAlertsForRepo: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    perPage?: number;
    direction?: "asc" | "desc";
    page?: number;
    toolName?: CodeScanningAnalysisToolName;
    toolGuid?: CodeScanningAnalysisToolGuid;
    ref?: CodeScanningRef;
    state?: "open" | "closed" | "dismissed" | "fixed";
    sort?: "created" | "updated";
  },
  Array<CodeScanningAlertItems>
> = {
  id: "code-scanning/list-alerts-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#upload-a-sarif-file


* Upload an analysis as SARIF data
* Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint for private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint.
 * 
 * There are two places where you can upload code scanning results.
 * - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
 * - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
 * 
 * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
 * 
 * ```
 * gzip -c analysis-data.sarif | base64 -w0
 * ```
 * 
 * SARIF upload supports a maximum of 5000 results per analysis run. Any results over this limit are ignored and any SARIF uploads with more than 25,000 results are rejected. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
 * 
 * The `202 Accepted`, response includes an `id` value.
 * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
 * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const uploadSarif: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    sarif: {
      ref: CodeScanningRef;
      sarif: CodeScanningAnalysisSarifFile;

      /**
       * The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to "API". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.
       */
      tool_name?: string;
      commit_sha: CodeScanningAnalysisCommitSha;

      /**
       * The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      started_at?: string;

      /** 
* The base directory used in the analysis, as it appears in the SARIF file.
This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.
* 
* @example
* "file:///github/workspace/"
*/
      checkout_uri?: string;
    };
  },
  CodeScanningSarifsReceipt
> = {
  id: "code-scanning/upload-sarif",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository


* List code scanning analyses for a repository
* Lists the details of all code scanning analyses for a repository,
 * starting with the most recent.
 * The response is paginated and you can use the `page` and `per_page` parameters
 * to list the analyses you're interested in.
 * By default 30 analyses are listed per page.
 * 
 * The `rules_count` field in the response give the number of rules
 * that were run in the analysis.
 * For very old analyses this data is not available,
 * and `0` is returned in this field.
 * 
 * You must use an access token with the `security_events` scope to use this endpoint with private repos,
 * the `public_repo` scope also grants permission to read security events on public repos only.
 * GitHub Apps must have the `security_events` read permission to use this endpoint.
 * 
 * **Deprecation notice**:
 * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [toolName] - The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
* @param [toolGuid] - The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
* @param [ref] - The Git reference for the analyses you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
* @param [sarifId] - Filter analyses belonging to the same SARIF upload. 
*/
export const listRecentAnalyses: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    perPage?: number;
    page?: number;
    toolName?: CodeScanningAnalysisToolName;
    toolGuid?: CodeScanningAnalysisToolGuid;
    ref?: string;
    sarifId?: string;
  },
  Array<CodeScanningAnalysis>
> = {
  id: "code-scanning/list-recent-analyses",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#list-code-scanning-alerts-for-an-enterprise


* List code scanning alerts for an enterprise
* Lists code scanning alerts for the default branch for all eligible repositories in an enterprise. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * 
 * To use this endpoint, you must be a member of the enterprise,
 * and you must use an access token with the `repo` scope or `security_events` scope.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [page=1] - Page number of the results to fetch.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
* @param [toolName] - The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
* @param [toolGuid] - The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
* @param [sort] - The property by which to sort the results.
* @param [state] - If specified, only code scanning alerts with this state will be returned. 
*/
export const listAlertsForEnterprise: ApiHeroEndpoint<
  {
    enterprise: string;
    perPage?: number;
    direction?: "asc" | "desc";
    page?: number;
    before?: string;
    toolName?: CodeScanningAnalysisToolName;
    toolGuid?: CodeScanningAnalysisToolGuid;
    after?: string;
    sort?: "created" | "updated";
    state?: "open" | "closed" | "dismissed" | "fixed";
  },
  Array<CodeScanningOrganizationAlertItems>,
  { Link: string }
> = {
  id: "code-scanning/list-alerts-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository


* Get information about a SARIF upload
* Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint with private repos, the `public_repo` scope also grants permission to read security events on public repos only. GitHub Apps must have the `security_events` read permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param sarifId - The SARIF ID obtained after uploading.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getSarif: ApiHeroEndpoint<
  { repo: string; sarifId: string; owner: string },
  CodeScanningSarifsStatus
> = {
  id: "code-scanning/get-sarif",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#get-a-code-scanning-alert


* Get a code scanning alert
* Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint with private repos, the `public_repo` scope also grants permission to read security events on public repos only. GitHub Apps must have the `security_events` read permission to use this endpoint.
 * 
 * **Deprecation notice**:
 * The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
* @param repo - The name of the repository. The name is not case sensitive.
* @param alertNumber - The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getAlert: ApiHeroEndpoint<
  { repo: string; alertNumber: AlertNumber; owner: string },
  CodeScanningAlert
> = {
  id: "code-scanning/get-alert",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#update-a-code-scanning-alert


* Update a code scanning alert
* Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint with private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint.
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
      state: CodeScanningAlertSetState;
      dismissed_reason?: CodeScanningAlertDismissedReason;
      dismissed_comment?: CodeScanningAlertDismissedComment;
    };
  },
  CodeScanningAlert
> = {
  id: "code-scanning/update-alert",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository


* Get a code scanning analysis for a repository
* Gets a specified code scanning analysis for a repository.
 * You must use an access token with the `security_events` scope to use this endpoint with private repos,
 * the `public_repo` scope also grants permission to read security events on public repos only.
 * GitHub Apps must have the `security_events` read permission to use this endpoint.
 * 
 * The default JSON response contains fields that describe the analysis.
 * This includes the Git reference and commit SHA to which the analysis relates,
 * the datetime of the analysis, the name of the code scanning tool,
 * and the number of alerts.
 * 
 * The `rules_count` field in the default response give the number of rules
 * that were run in the analysis.
 * For very old analyses this data is not available,
 * and `0` is returned in this field.
 * 
 * If you use the Accept header `application/sarif+json`,
 * the response contains the analysis data that was uploaded.
 * This is formatted as
 * [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).
* @param repo - The name of the repository. The name is not case sensitive.
* @param analysisId - The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getAnalysis: ApiHeroEndpoint<
  { repo: string; analysisId: number; owner: string },
  CodeScanningAnalysis
> = {
  id: "code-scanning/get-analysis",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository


* Delete a code scanning analysis from a repository
* Deletes a specified code scanning analysis from a repository. For
 * private repositories, you must use an access token with the `repo` scope. For public repositories,
 * you must use an access token with `public_repo` scope.
 * GitHub Apps must have the `security_events` write permission to use this endpoint.
 * 
 * You can delete one analysis at a time.
 * To delete a series of analyses, start with the most recent analysis and work backwards.
 * Conceptually, the process is similar to the undo function in a text editor.
 * 
 * When you list the analyses for a repository,
 * one or more will be identified as deletable in the response:
 * 
 * ```
 * "deletable": true
 * ```
 * 
 * An analysis is deletable when it's the most recent in a set of analyses.
 * Typically, a repository will have multiple sets of analyses
 * for each enabled code scanning tool,
 * where a set is determined by a unique combination of analysis values:
 * 
 * * `ref`
 * * `tool`
 * * `analysis_key`
 * * `environment`
 * 
 * If you attempt to delete an analysis that is not the most recent in a set,
 * you'll get a 400 response with the message:
 * 
 * ```
 * Analysis specified is not deletable.
 * ```
 * 
 * The response from a successful `DELETE` operation provides you with
 * two alternative URLs for deleting the next analysis in the set:
 * `next_analysis_url` and `confirm_delete_url`.
 * Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
 * in a set. This is a useful option if you want to preserve at least one analysis
 * for the specified tool in your repository.
 * Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
 * When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url`
 * in the 200 response is `null`.
 * 
 * As an example of the deletion process,
 * let's imagine that you added a workflow that configured a particular code scanning tool
 * to analyze the code in a repository. This tool has added 15 analyses:
 * 10 on the default branch, and another 5 on a topic branch.
 * You therefore have two separate sets of analyses for this tool.
 * You've now decided that you want to remove all of the analyses for the tool.
 * To do this you must make 15 separate deletion requests.
 * To start, you must find an analysis that's identified as deletable.
 * Each set of analyses always has one that's identified as deletable.
 * Having found the deletable analysis for one of the two sets,
 * delete this analysis and then continue deleting the next analysis in the set until they're all deleted.
 * Then repeat the process for the second set.
 * The procedure therefore consists of a nested loop:
 * 
 * **Outer loop**:
 * * List the analyses for the repository, filtered by tool.
 * * Parse this list to find a deletable analysis. If found:
 * 
 * **Inner loop**:
 * * Delete the identified analysis.
 * * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.
 * 
 * The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.
* @param repo - The name of the repository. The name is not case sensitive.
* @param analysisId - The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [confirmDelete] - Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.` 
*/
export const deleteAnalysis: ApiHeroEndpoint<
  { repo: string; analysisId: number; owner: string; confirmDelete?: string | null },
  CodeScanningAnalysisDeletion
> = {
  id: "code-scanning/delete-analysis",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert


* List instances of a code scanning alert
* Lists all instances of the specified code scanning alert.
 * You must use an access token with the `security_events` scope to use this endpoint with private repos,
 * the `public_repo` scope also grants permission to read security events on public repos only.
 * GitHub Apps must have the `security_events` read permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param alertNumber - The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [ref] - The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`. 
*/
export const listAlertInstances: ApiHeroEndpoint<
  {
    repo: string;
    alertNumber: AlertNumber;
    owner: string;
    perPage?: number;
    page?: number;
    ref?: CodeScanningRef;
  },
  Array<CodeScanningAlertInstance>
> = {
  id: "code-scanning/list-alert-instances",
  clientId: "github",
};
