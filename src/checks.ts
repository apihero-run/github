import {
  CheckAnnotation,
  CheckRun,
  CheckSuite,
  CheckSuitePreference,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/checks#create-a-check-run


* Create a check run
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 * 
 * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
 * 
 * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const create: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    checkRun: {
      /**
       * The name of the check. For example, "code-coverage".
       */
      name: string;

      /**
       * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object) description.
       */
      output?: {
        /**
         * The details of the check run. This parameter supports Markdown.
         */
        text?: string;

        /**
         * The title of the check run.
         */
        title: string;

        /**
         * Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#images-object) description for details.
         */
        images?: Array<{
          /**
           * The alternative text for the image.
           */
          alt: string;

          /**
           * A short image description.
           */
          caption?: string;

          /**
           * The full URL of the image.
           */
          image_url: string;
        }>;

        /**
         * The summary of the check run. This parameter supports Markdown.
         */
        summary: string;

        /**
         * Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://docs.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object) description for details about how to use this parameter.
         */
        annotations?: Array<{
          /**
           * The path of the file to add an annotation to. For example, `assets/css/main.css`.
           */
          path: string;

          /**
           * The title that represents the annotation. The maximum size is 255 characters.
           */
          title?: string;

          /**
           * A short description of the feedback for these lines of code. The maximum size is 64 KB.
           */
          message: string;

          /**
           * The end line of the annotation.
           */
          end_line: number;

          /**
           * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
           */
          end_column?: number;

          /**
           * The start line of the annotation.
           */
          start_line: number;

          /**
           * Details about this annotation. The maximum size is 64 KB.
           */
          raw_details?: string;

          /**
           * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
           */
          start_column?: number;

          /**
           * The level of the annotation.
           */
          annotation_level: "notice" | "warning" | "failure";
        }>;
      };

      /**
       * The current status.
       */
      status?: "queued" | "in_progress" | "completed";

      /**
       * Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
       */
      actions?: Array<{
        /**
         * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
         */
        label: string;

        /**
         * A reference for the action on the integrator's system. The maximum size is 20 characters.
         */
        identifier: string;

        /**
         * A short explanation of what this action would do. The maximum size is 40 characters.
         */
        description: string;
      }>;

      /**
       * The SHA of the commit.
       */
      head_sha: string;

      /**
       * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check.
       **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
       */
      conclusion?:
        | "action_required"
        | "cancelled"
        | "failure"
        | "neutral"
        | "success"
        | "skipped"
        | "stale"
        | "timed_out";

      /**
       * The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      started_at?: string;

      /**
       * The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
       */
      details_url?: string;

      /**
       * A reference for the run on the integrator's system.
       */
      external_id?: string;

      /**
       * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      completed_at?: string;
    };
  },
  CheckRun
> = {
  id: "checks/create",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#create-a-check-suite


* Create a check suite
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 * 
 * By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const createSuite: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    checkSuite: {
      /**
       * The sha of the head commit.
       */
      head_sha: string;
    };
  },
  CheckSuite
> = {
  id: "checks/create-suite",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites


* Update repository preferences for check suites
* Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const setSuitesPreferences: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    checkSuite: {
      /**
       * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/rest/reference/checks#auto_trigger_checks-object) description for details.
       */
      auto_trigger_checks?: Array<{
        /**
         * The `id` of the GitHub App.
         */
        app_id: number;

        /**
         * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
         */
        setting: boolean;
      }>;
    };
  },
  CheckSuitePreference
> = {
  id: "checks/set-suites-preferences",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#list-check-runs-for-a-git-reference


* List check runs for a Git reference
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 * 
 * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param ref - ref parameter
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [status] - Returns check runs with the specified `status`.
* @param [appId] 
* @param [checkName] - Returns check runs with the specified `name`.
* @param [filter] - Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs. 
*/
export const listForRef: ApiHeroEndpoint<
  {
    repo: string;
    ref: string;
    owner: string;
    perPage?: number;
    page?: number;
    status?: "queued" | "in_progress" | "completed";
    appId?: number;
    checkName?: string;
    filter?: "latest" | "all";
  },
  {
    check_runs: Array<CheckRun>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "checks/list-for-ref",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#get-a-check-run


* Get a check run
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 * 
 * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkRunId - The unique identifier of the check run.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getChecks: ApiHeroEndpoint<
  { repo: string; checkRunId: number; owner: string },
  CheckRun
> = {
  id: "checks/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#update-a-check-run


* Update a check run
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 * 
 * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkRunId - The unique identifier of the check run.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const update: ApiHeroEndpoint<
  {
    repo: string;
    checkRunId: number;
    owner: string;
    checkRun: {
      /**
       * The name of the check. For example, "code-coverage".
       */
      name?: string;

      /**
       * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object-1) description.
       */
      output?: {
        /**
         * Can contain Markdown.
         */
        text?: string;

        /**
         * **Required**.
         */
        title?: string;

        /**
         * Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.
         */
        images?: Array<{
          /**
           * The alternative text for the image.
           */
          alt: string;

          /**
           * A short image description.
           */
          caption?: string;

          /**
           * The full URL of the image.
           */
          image_url: string;
        }>;

        /**
         * Can contain Markdown.
         */
        summary: string;

        /**
         * Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://docs.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.
         */
        annotations?: Array<{
          /**
           * The path of the file to add an annotation to. For example, `assets/css/main.css`.
           */
          path: string;

          /**
           * The title that represents the annotation. The maximum size is 255 characters.
           */
          title?: string;

          /**
           * A short description of the feedback for these lines of code. The maximum size is 64 KB.
           */
          message: string;

          /**
           * The end line of the annotation.
           */
          end_line: number;

          /**
           * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
           */
          end_column?: number;

          /**
           * The start line of the annotation.
           */
          start_line: number;

          /**
           * Details about this annotation. The maximum size is 64 KB.
           */
          raw_details?: string;

          /**
           * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
           */
          start_column?: number;

          /**
           * The level of the annotation.
           */
          annotation_level: "notice" | "warning" | "failure";
        }>;
      };

      /**
       * The current status.
       */
      status?: "queued" | "in_progress" | "completed";

      /**
       * Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
       */
      actions?: Array<{
        /**
         * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
         */
        label: string;

        /**
         * A reference for the action on the integrator's system. The maximum size is 20 characters.
         */
        identifier: string;

        /**
         * A short explanation of what this action would do. The maximum size is 40 characters.
         */
        description: string;
      }>;

      /**
       * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check.
       **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
       */
      conclusion?:
        | "action_required"
        | "cancelled"
        | "failure"
        | "neutral"
        | "success"
        | "skipped"
        | "stale"
        | "timed_out";

      /**
       * This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      started_at?: string;

      /**
       * The URL of the integrator's site that has the full details of the check.
       */
      details_url?: string;

      /**
       * A reference for the run on the integrator's system.
       */
      external_id?: string;

      /**
       * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      completed_at?: string;
    };
  },
  CheckRun
> = {
  id: "checks/update",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference


* List check suites for a Git reference
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 * 
 * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param ref - ref parameter
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [checkName] - Returns check runs with the specified `name`.
* @param [appId] - Filters check suites by GitHub App `id`. 
*/
export const listSuitesForRef: ApiHeroEndpoint<
  {
    repo: string;
    ref: string;
    owner: string;
    perPage?: number;
    page?: number;
    checkName?: string;
    appId?: number;
  },
  {
    total_count: number;
    check_suites: Array<CheckSuite>;
  },
  { Link: string }
> = {
  id: "checks/list-suites-for-ref",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#get-a-check-suite


* Get a check suite
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 * 
 * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkSuiteId - The unique identifier of the check suite.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getSuite: ApiHeroEndpoint<
  { repo: string; checkSuiteId: number; owner: string },
  CheckSuite
> = {
  id: "checks/get-suite",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#rerequest-a-check-run


* Rerequest a check run
* Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
 * 
 * To rerequest a check run, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkRunId - The unique identifier of the check run.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const rerequestRun: ApiHeroEndpoint<
  { repo: string; checkRunId: number; owner: string },
  {}
> = {
  id: "checks/rerequest-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#list-check-run-annotations


* List check run annotations
* Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkRunId - The unique identifier of the check run.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listAnnotations: ApiHeroEndpoint<
  { repo: string; checkRunId: number; owner: string; perPage?: number; page?: number },
  Array<CheckAnnotation>,
  { Link: string }
> = {
  id: "checks/list-annotations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#rerequest-a-check-suite


* Rerequest a check suite
* Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
 * 
 * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkSuiteId - The unique identifier of the check suite.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const rerequestSuite: ApiHeroEndpoint<
  { repo: string; checkSuiteId: number; owner: string },
  {}
> = {
  id: "checks/rerequest-suite",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite


* List check runs in a check suite
* **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 * 
 * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param checkSuiteId - The unique identifier of the check suite.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [filter] - Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
* @param [status] - Returns check runs with the specified `status`.
* @param [checkName] - Returns check runs with the specified `name`. 
*/
export const listForSuite: ApiHeroEndpoint<
  {
    repo: string;
    checkSuiteId: number;
    owner: string;
    perPage?: number;
    page?: number;
    filter?: "latest" | "all";
    status?: "queued" | "in_progress" | "completed";
    checkName?: string;
  },
  {
    check_runs: Array<CheckRun>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "checks/list-for-suite",
  clientId: "github",
};
