import {
  Commit,
  DiffEntry,
  PullRequest,
  PullRequestMergeResult,
  PullRequestReview,
  PullRequestReviewComment,
  PullRequestReviewRequest,
  PullRequestSimple,
  ReviewComment,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/pulls#list-pull-requests


* List pull requests
* Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [sort] - What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
* @param [state] - Either `open`, `closed`, or `all` to filter by state.
* @param [head] - Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
* @param [base] - Filter pulls by base branch name. Example: `gh-pages`.
* @param [direction] - The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`. 
*/
export const list: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    sort?: "created" | "updated" | "popularity" | "long-running";
    state?: "open" | "closed" | "all";
    head?: string;
    base?: string;
    direction?: "asc" | "desc";
  },
  Array<PullRequestSimple>,
  { Link: string }
> = {
  id: "pulls/list",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#create-a-pull-request


* Create a pull request
* Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
 * 
 * You can create a new pull request.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const create: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pull: {
      /**
       * The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
       */
      base: string;

      /**
       * The contents of the pull request.
       */
      body?: string;

      /**
       * The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
       */
      head: string;

      /**
       * Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://docs.github.com/en/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
       */
      draft?: boolean;

      /**
       *
       * @example
       * 1
       */
      issue?: number;

      /**
       * The title of the new pull request.
       */
      title?: string;

      /**
       * Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
       */
      maintainer_can_modify?: boolean;
    };
  },
  PullRequest,
  { Location: string }
> = {
  id: "pulls/create",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-review-comments-in-a-repository


* List review comments in a repository
* Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [sort] 
* @param [direction] - Can be either `asc` or `desc`. Ignored without `sort` parameter. 
*/
export const listReviewCommentsForRepo: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    since?: string;
    perPage?: number;
    page?: number;
    sort?: "created" | "updated" | "created_at";
    direction?: "asc" | "desc";
  },
  Array<PullRequestReviewComment>,
  { Link: string }
> = {
  id: "pulls/list-review-comments-for-repo",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#get-a-pull-request


* Get a pull request
* Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Lists details of a pull request by providing its number.
 * 
 * When you get, [create](https://docs.github.com/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/reference/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
 * 
 * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
 * 
 * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
 * 
 * *   If merged as a [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
 * *   If merged via a [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
 * *   If [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
 * 
 * Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const getPull: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number },
  PullRequest
> = {
  id: "pulls/get",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls/#update-a-pull-request


* Update a pull request
* Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const update: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    pull?: {
      /**
       * The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
       */
      base?: string;

      /**
       * The contents of the pull request.
       */
      body?: string;

      /**
       * State of this Pull Request. Either `open` or `closed`.
       */
      state?: "open" | "closed";

      /**
       * The title of the pull request.
       */
      title?: string;

      /**
       * Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
       */
      maintainer_can_modify?: boolean;
    };
  },
  PullRequest
> = {
  id: "pulls/update",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-pull-requests-files


* List pull requests files
* **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listFiles: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number; perPage?: number; page?: number },
  Array<DiffEntry>,
  { Link: string }
> = {
  id: "pulls/list-files",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#check-if-a-pull-request-has-been-merged


* Check if a pull request has been merged
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const checkIfMerged: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number },
  void
> = {
  id: "pulls/check-if-merged",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#merge-a-pull-request


* Merge a pull request
* This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const merge: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    payload?: {
      /**
       * SHA that pull request head must match to allow merge.
       */
      sha?: string;

      /**
       * Title for the automatic commit message.
       */
      commit_title?: string;

      /**
       * Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.
       */
      merge_method?: "merge" | "squash" | "rebase";

      /**
       * Extra detail to append to automatic commit message.
       */
      commit_message?: string;
    } | null;
  },
  PullRequestMergeResult
> = {
  id: "pulls/merge",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#get-a-review-comment-for-a-pull-request


* Get a review comment for a pull request
* Provides details for a review comment.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const getReviewComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number },
  PullRequestReviewComment
> = {
  id: "pulls/get-review-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#delete-a-review-comment-for-a-pull-request


* Delete a review comment for a pull request
* Deletes a review comment.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const deleteReviewComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number },
  void
> = {
  id: "pulls/delete-review-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#update-a-review-comment-for-a-pull-request


* Update a review comment for a pull request
* Enables you to edit a review comment.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const updateReviewComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    comment: {
      /**
       * The text of the reply to the review comment.
       */
      body: string;
    };
  },
  PullRequestReviewComment
> = {
  id: "pulls/update-review-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-commits-on-a-pull-request


* List commits on a pull request
* Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/rest/reference/repos#list-commits) endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listCommits: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number; perPage?: number; page?: number },
  Array<Commit>,
  { Link: string }
> = {
  id: "pulls/list-commits",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-reviews-for-a-pull-request


* List reviews for a pull request
* The list of reviews returns in chronological order.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReviews: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number; perPage?: number; page?: number },
  Array<PullRequestReview>,
  { Link: string }
> = {
  id: "pulls/list-reviews",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#create-a-review-for-a-pull-request


* Create a review for a pull request
* This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * 
 * Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.
 * 
 * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) endpoint.
 * 
 * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const createReview: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    review?: {
      /**
       * **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
       */
      body?: string;

      /**
       * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request) when you are ready.
       */
      event?: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";

      /**
       * Use the following table to specify the location, destination, and contents of the draft review comment.
       */
      comments?: Array<{
        /**
         * Text of the review comment.
         */
        body: string;

        /**
         *
         * @example
         * 28
         */
        line?: number;

        /**
         * The relative path to the file that necessitates a review comment.
         */
        path: string;

        /**
         *
         * @example
         * "RIGHT"
         */
        side?: string;

        /**
         * The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
         */
        position?: number;

        /**
         *
         * @example
         * 26
         */
        start_line?: number;

        /**
         *
         * @example
         * "LEFT"
         */
        start_side?: string;
      }>;

      /**
       * The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
       */
      commit_id?: string;
    };
  },
  PullRequestReview
> = {
  id: "pulls/create-review",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-review-comments-on-a-pull-request


* List review comments on a pull request
* Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [sort] - The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
* @param [direction] - Can be either `asc` or `desc`. Ignored without `sort` parameter. 
*/
export const listReviewComments: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    since?: string;
    perPage?: number;
    page?: number;
    sort?: "created" | "updated";
    direction?: "asc" | "desc";
  },
  Array<PullRequestReviewComment>,
  { Link: string }
> = {
  id: "pulls/list-review-comments",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#create-a-review-comment-for-a-pull-request


* Create a review comment for a pull request
* 
 * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
 * 
 * The `position` parameter is deprecated. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.
 * 
 * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const createReviewComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    comment: {
      /**
       * The text of the review comment.
       */
      body: string;

      /**
       * The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
       */
      line?: number;

      /**
       * The relative path to the file that necessitates a comment.
       */
      path?: string;

      /**
       * In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://docs.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
       */
      side?: "LEFT" | "RIGHT";

      /**
       * **This parameter is deprecated. Use `line` instead**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.
       * @deprecated
       */
      position?: number;

      /**
       * The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
       */
      commit_id?: string;

      /**
       * **Required when using multi-line comments unless using `in_reply_to`**. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://docs.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.
       */
      start_line?: number;

      /**
       * **Required when using multi-line comments unless using `in_reply_to`**. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://docs.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.
       */
      start_side?: "LEFT" | "RIGHT" | "side";

      /**
       * The ID of the review comment to reply to. To find the ID of a review comment with ["List review comments on a pull request"](#list-review-comments-on-a-pull-request). When specified, all parameters other than `body` in the request body are ignored.
       *
       * @example
       * 2
       */
      in_reply_to?: number;
    };
  },
  PullRequestReviewComment,
  { Location: string }
> = {
  id: "pulls/create-review-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#update-a-pull-request-branch


* Update a pull request branch
* Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const updateBranch: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    payload?: {
      /**
       * The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits](https://docs.github.com/rest/reference/repos#list-commits)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.
       */
      expected_head_sha?: string;
    } | null;
  },
  {
    url?: string;
    message?: string;
  }
> = {
  id: "pulls/update-branch",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-requested-reviewers-for-a-pull-request


* List requested reviewers for a pull request
* Lists the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/rest/pulls/reviews#list-reviews-for-a-pull-request) operation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRequestedReviewers: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number; perPage?: number; page?: number },
  PullRequestReviewRequest,
  { Link: string }
> = {
  id: "pulls/list-requested-reviewers",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#request-reviewers-for-a-pull-request


* Request reviewers for a pull request
* This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const requestReviewers: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    requestedReviewer?: {
      /**
       * An array of user `login`s that will be requested.
       */
      reviewers?: Array<string>;

      /**
       * An array of team `slug`s that will be requested.
       */
      team_reviewers?: Array<string>;
    };
  },
  PullRequestSimple
> = {
  id: "pulls/request-reviewers",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request


* Remove requested reviewers from a pull request
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request. 
*/
export const removeRequestedReviewers: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    requestedReviewer: {
      /**
       * An array of user `login`s that will be removed.
       */
      reviewers: Array<string>;

      /**
       * An array of team `slug`s that will be removed.
       */
      team_reviewers?: Array<string>;
    };
  },
  PullRequestSimple
> = {
  id: "pulls/remove-requested-reviewers",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#get-a-review-for-a-pull-request


* Get a review for a pull request
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param reviewId - The unique identifier of the review. 
*/
export const getReview: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number; reviewId: number },
  PullRequestReview
> = {
  id: "pulls/get-review",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#update-a-review-for-a-pull-request


* Update a review for a pull request
* Update the review summary comment with new text.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param reviewId - The unique identifier of the review. 
*/
export const updateReview: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    reviewId: number;
    review: {
      /**
       * The body text of the pull request review.
       */
      body: string;
    };
  },
  PullRequestReview
> = {
  id: "pulls/update-review",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#delete-a-pending-review-for-a-pull-request


* Delete a pending review for a pull request
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param reviewId - The unique identifier of the review. 
*/
export const deletePendingReview: ApiHeroEndpoint<
  { owner: string; repo: string; pullNumber: number; reviewId: number },
  PullRequestReview
> = {
  id: "pulls/delete-pending-review",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request


* Submit a review for a pull request
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param reviewId - The unique identifier of the review. 
*/
export const submitReview: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    reviewId: number;
    event: {
      /**
       * The body text of the pull request review
       */
      body?: string;

      /**
       * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
       */
      event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
    };
  },
  PullRequestReview
> = {
  id: "pulls/submit-review",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#list-comments-for-a-pull-request-review


* List comments for a pull request review
* List comments for a specific pull request review.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param reviewId - The unique identifier of the review.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listCommentsForReview: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    reviewId: number;
    perPage?: number;
    page?: number;
  },
  Array<ReviewComment>,
  { Link: string }
> = {
  id: "pulls/list-comments-for-review",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#create-a-reply-for-a-review-comment


* Create a reply for a review comment
* Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param pullNumber - The number that identifies the pull request. 
*/
export const createReplyForReviewComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    pullNumber: number;
    reply: {
      /**
       * The text of the review comment.
       */
      body: string;
    };
  },
  PullRequestReviewComment,
  { Location: string }
> = {
  id: "pulls/create-reply-for-review-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/pulls#dismiss-a-review-for-a-pull-request


* Dismiss a review for a pull request
* **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param reviewId - The unique identifier of the review. 
*/
export const dismissReview: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    pullNumber: number;
    reviewId: number;
    payload: {
      /**
       *
       * @example
       * "\"DISMISS\""
       */
      event?: "DISMISS";

      /**
       * The message for the pull request review dismissal
       */
      message: string;
    };
  },
  PullRequestReview
> = {
  id: "pulls/dismiss-review",
  clientId: "github",
  version: "1.1.5",
};
