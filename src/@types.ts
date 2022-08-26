export type ApiHeroEndpoint<Params, ResponseBody, Headers = unknown> = {
  id: string;
  [key: string]: string | number;
};

/**
 * Information of a job execution in a workflow run
 * @example @see https://apihero.run/integrations/github/examples/job
 */
export type Job = {
  /**
   * The id of the job.
   *
   * @example
   * 21
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/jobs/21"
   */
  url: string;

  /**
   * The name of the job.
   *
   * @example
   * "test-coverage"
   */
  name: string;

  /**
   * Steps in this job.
   */
  steps?: Array<{
    /**
     * The name of the job.
     *
     * @example
     * "test-coverage"
     */
    name: string;

    /**
     *
     * @example
     * 1
     */
    number: number;

    /**
     * The phase of the lifecycle that the job is currently in.
     *
     * @example
     * "queued"
     */
    status: "queued" | "in_progress" | "completed";

    /**
     * The outcome of the job.
     *
     * @example
     * "success"
     */
    conclusion: string | null;

    /**
     * The time that the step started, in ISO 8601 format.
     *
     * @example
     * "2019-08-08T08:00:00-07:00"
     */
    started_at?: string | null;

    /**
     * The time that the job finished, in ISO 8601 format.
     *
     * @example
     * "2019-08-08T08:00:00-07:00"
     */
    completed_at?: string | null;
  }>;

  /**
   * Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file.
   *
   * @example
   * ["self-hosted"]
   *
   * @example
   * ["foo"]
   *
   * @example
   * ["bar"]
   */
  labels: Array<string>;

  /**
   * The id of the associated workflow run.
   *
   * @example
   * 5
   */
  run_id: number;

  /**
   * The phase of the lifecycle that the job is currently in.
   *
   * @example
   * "queued"
   */
  status: "queued" | "in_progress" | "completed";

  /**
   *
   * @example
   * "MDg6Q2hlY2tSdW40"
   */
  node_id: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5"
   */
  run_url: string;

  /**
   * The SHA of the commit that is being run.
   *
   * @example
   * "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d"
   */
  head_sha: string;

  /**
   *
   * @example
   * "https://github.com/github/hello-world/runs/4"
   */
  html_url: string | null;

  /**
   * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   *
   * @example
   * 1
   */
  runner_id: number | null;

  /**
   * The outcome of the job.
   *
   * @example
   * "success"
   */
  conclusion: string | null;

  /**
   * The time that the job started, in ISO 8601 format.
   *
   * @example
   * "2019-08-08T08:00:00-07:00"
   */
  started_at: string;

  /**
   * Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.
   *
   * @example
   * 1
   */
  run_attempt?: number;

  /**
   * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   *
   * @example
   * "my runner"
   */
  runner_name: string | null;

  /**
   * The time that the job finished, in ISO 8601 format.
   *
   * @example
   * "2019-08-08T08:00:00-07:00"
   */
  completed_at: string | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/check-runs/4"
   */
  check_run_url: string;

  /**
   * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   *
   * @example
   * 2
   */
  runner_group_id: number | null;

  /**
   * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
   *
   * @example
   * "my runner group"
   */
  runner_group_name: string | null;
};

/**
 * Key
 * @example @see https://apihero.run/integrations/github/examples/key
 */
export type Key = {
  id: number;
  key: string;
  url: string;
  title: string;
  verified: boolean;
  read_only: boolean;
  created_at: string;
};

/**
 * Tag
 */
export type Tag = {
  /**
   *
   * @example
   * "v0.1"
   */
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/tarball/v0.1"
   */
  tarball_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/zipball/v0.1"
   */
  zipball_url: string;
};

/**
 * Blob
 * @example @see https://apihero.run/integrations/github/examples/blob
 */
export type Blob = {
  sha: string;
  url: string;
  size: number | null;
  content: string;
  node_id: string;
  encoding: string;
  highlighted_content?: string;
};

/**
 * Feed
 * @example @see https://apihero.run/integrations/github/examples/feed
 */
export type Feed = {
  _links: {
    user: LinkWithType;
    timeline: LinkWithType;
    current_user?: LinkWithType;
    current_user_actor?: LinkWithType;
    current_user_public?: LinkWithType;
    security_advisories?: LinkWithType;
    current_user_organization?: LinkWithType;
    current_user_organizations?: Array<LinkWithType>;
  };

  /**
   *
   * @example
   * "https://github.com/{user}"
   */
  user_url: string;

  /**
   *
   * @example
   * "https://github.com/timeline"
   */
  timeline_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat.private?token=abc123"
   */
  current_user_url?: string;

  /**
   *
   * @example
   * "https://github.com/octocat.private.actor?token=abc123"
   */
  current_user_actor_url?: string;

  /**
   *
   * @example
   * "https://github.com/octocat"
   */
  current_user_public_url?: string;

  /**
   *
   * @example
   * "https://github.com/security-advisories"
   */
  security_advisories_url?: string;

  /**
   *
   * @example
   * "https://github.com/octocat-org"
   */
  current_user_organization_url?: string;

  /**
   *
   * @example
   * ["https://github.com/organizations/github/octocat.private.atom?token=abc123"]
   */
  current_user_organization_urls?: Array<string>;
};

/**
 * Webhooks for repositories.
 * @example @see https://apihero.run/integrations/github/examples/hook
 */
export type Hook = {
  /**
   * Unique identifier of the webhook.
   *
   * @example
   * 42
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/hooks/1"
   */
  url: string;

  /**
   * The name of a valid service, use 'web' for a webhook.
   *
   * @example
   * "web"
   */
  name: string;
  type: string;

  /**
   * Determines whether the hook is actually triggered on pushes.
   *
   * @example
   * true
   */
  active: boolean;
  config: {
    url?: WebhookConfigUrl;

    /**
     *
     * @example
     * "\"roomer\""
     */
    room?: string;

    /**
     *
     * @example
     * "\"foo@bar.com\""
     */
    email?: string;

    /**
     *
     * @example
     * "\"abc\""
     */
    token?: string;

    /**
     *
     * @example
     * "\"sha256\""
     */
    digest?: string;
    secret?: WebhookConfigSecret;

    /**
     *
     * @example
     * "\"foo\""
     */
    password?: string;

    /**
     *
     * @example
     * "\"foo\""
     */
    subdomain?: string;
    content_type?: WebhookConfigContentType;
    insecure_ssl?: WebhookConfigInsecureSsl;
  };

  /**
   * Determines what events the hook is triggered for. Default: ['push'].
   *
   * @example
   * ["push"]
   *
   * @example
   * ["pull_request"]
   */
  events: Array<string>;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/hooks/1/pings"
   */
  ping_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/hooks/1/test"
   */
  test_url: string;

  /**
   *
   * @example
   * "2011-09-06T17:26:27Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-09-06T20:39:23Z"
   */
  updated_at: string;
  last_response: HookResponse;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/hooks/1/deliveries"
   */
  deliveries_url?: string;
};

/**
 * Hypermedia Link
 */
export type Link = {
  href: string;
};

/**
 * The configuration for GitHub Pages for a repository.
 * @example @see https://apihero.run/integrations/github/examples/page
 */
export type Page = {
  /**
   * The API address for accessing this Page resource.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/pages"
   */
  url: string;

  /**
   * The Pages site's custom domain
   *
   * @example
   * "example.com"
   */
  cname: string | null;

  /**
   * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
   *
   * @example
   * true
   */
  public: boolean;
  source?: PagesSourceHash;

  /**
   * The status of the most recent build of the Page.
   *
   * @example
   * "built"
   */
  status: "built" | "building" | "errored" | null;

  /**
   * The web address the Page can be accessed from.
   *
   * @example
   * "https://example.com"
   */
  html_url?: string;

  /**
   * The process in which the Page will be built.
   *
   * @example
   * "legacy"
   */
  build_type?: "legacy" | "workflow" | null;

  /**
   * Whether the Page has a custom 404 page.
   *
   * @example
   * false
   */
  custom_404: boolean;

  /**
   * Whether https is enabled on the domain
   *
   * @example
   * true
   */
  https_enforced?: boolean;
  https_certificate?: PagesHttpsCertificate;

  /**
   * The state if the domain is verified
   *
   * @example
   * "pending"
   */
  protected_domain_state?: "pending" | "verified" | "unverified" | null;

  /**
   * The timestamp when a pending domain becomes unverified.
   */
  pending_domain_unverified_at?: string | null;
};

export type Root = {
  hub_url: string;
  keys_url: string;
  user_url: string;
  feeds_url: string;
  gists_url: string;
  emails_url: string;
  emojis_url: string;
  events_url: string;
  issues_url: string;
  starred_url: string;
  followers_url: string;
  following_url: string;
  rate_limit_url: string;
  repository_url: string;
  code_search_url: string;
  user_search_url: string;
  current_user_url: string;
  issue_search_url: string;
  label_search_url: string;
  organization_url: string;
  public_gists_url: string;
  topic_search_url?: string;
  commit_search_url: string;
  notifications_url: string;
  starred_gists_url: string;
  authorizations_url: string;
  repository_search_url: string;
  user_repositories_url: string;
  organization_teams_url: string;
  user_organizations_url: string;
  current_user_repositories_url: string;
  organization_repositories_url: string;
  current_user_authorizations_html_url: string;
};

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export type Team = {
  id: number;
  url: string;
  name: string;
  slug: string;
  parent: TeamSimple | null;
  node_id: string;
  privacy?: string;

  /**
   *
   * @example
   * "https://github.com/orgs/rails/teams/core"
   */
  html_url: string;
  permission: string;
  description: string | null;
  members_url: string;
  permissions?: {
    pull: boolean;
    push: boolean;
    admin: boolean;
    triage: boolean;
    maintain: boolean;
  };
  repositories_url: string;
};

/**
 * Actor
 */
export type Actor = {
  id: number;
  url: string;
  login: string;
  avatar_url: string;
  gravatar_id: string | null;
  display_login?: string;
};

/**
 * Email
 */
export type Email = {
  /**
   *
   * @example
   * "octocat@github.com"
   */
  email: string;

  /**
   *
   * @example
   * true
   */
  primary: boolean;

  /**
   *
   * @example
   * true
   */
  verified: boolean;

  /**
   *
   * @example
   * "public"
   */
  visibility: string | null;
};

/**
 * Event
 */
export type Event = {
  id: string;
  org?: Actor;
  repo: {
    id: number;
    url: string;
    name: string;
  };
  type: string | null;
  actor: Actor;
  public: boolean;
  payload: {
    issue?: Issue;
    pages?: Array<{
      sha?: string;
      title?: string;
      action?: string;
      summary?: string | null;
      html_url?: string;
      page_name?: string;
    }>;
    action?: string;
    comment?: IssueComment;
  };
  created_at: string | null;
};

/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
 * @example @see https://apihero.run/integrations/github/examples/issue
 */
export type Issue = {
  id: number;

  /**
   * URL for the issue
   *
   * @example
   * "https://api.github.com/repositories/42/issues/1"
   */
  url: string;

  /**
   * Contents of the issue
   *
   * @example
   * "It looks like the new widget form is broken on Safari. When I try and create the widget, Safari crashes. This is reproducible on 10.8, but not 10.9. Maybe a browser bug?"
   */
  body?: string | null;
  user: SimpleUser | null;
  draft?: boolean;

  /**
   * State of the issue; either 'open' or 'closed'
   *
   * @example
   * "open"
   */
  state: string;

  /**
   * Title of the issue
   *
   * @example
   * "Widget creation fails in Safari on OS X 10.8"
   */
  title: string;

  /**
   * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
   *
   * @example
   * ["bug"]
   *
   * @example
   * ["registration"]
   */
  labels: Array<
    | string
    | {
        id?: number;
        url?: string;
        name?: string;
        color?: string | null;
        default?: boolean;
        node_id?: string;
        description?: string | null;
      }
  >;
  locked: boolean;

  /**
   * Number uniquely identifying the issue within its repository
   *
   * @example
   * 42
   */
  number: number;
  node_id: string;
  assignee: SimpleUser | null;
  comments: number;
  html_url: string;
  assignees?: Array<SimpleUser> | null;
  body_html?: string;
  body_text?: string;
  closed_at: string | null;
  closed_by?: SimpleUser | null;
  milestone: Milestone | null;
  reactions?: ReactionRollup;
  created_at: string;
  events_url: string;
  labels_url: string;
  repository?: Repository;
  updated_at: string;
  comments_url: string;
  pull_request?: {
    url: string | null;
    diff_url: string | null;
    html_url: string | null;
    merged_at?: string | null;
    patch_url: string | null;
  };

  /**
   * The reason for the current state
   *
   * @example
   * "not_planned"
   */
  state_reason?: string | null;
  timeline_url?: string;
  repository_url: string;
  active_lock_reason?: string | null;
  author_association: AuthorAssociation;
  performed_via_github_app?: Integration | null;
};

/**
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
 * @example @see https://apihero.run/integrations/github/examples/label
 */
export type Label = {
  /**
   *
   * @example
   * 208045946
   */
  id: number;

  /**
   * URL for the label
   *
   * @example
   * "https://api.github.com/repositories/42/labels/bug"
   */
  url: string;

  /**
   * The name of the label.
   *
   * @example
   * "bug"
   */
  name: string;

  /**
   * 6-character hex code, without the leading #, identifying the color
   *
   * @example
   * "FFFFFF"
   */
  color: string;

  /**
   *
   * @example
   * true
   */
  default: boolean;

  /**
   *
   * @example
   * "MDU6TGFiZWwyMDgwNDU5NDY="
   */
  node_id: string;

  /**
   *
   * @example
   * "Something isn't working"
   */
  description: string | null;
};

/**
 * A topic aggregates entities that are related to a subject.
 * @example @see https://apihero.run/integrations/github/examples/topic
 */
export type Topic = {
  names: Array<string>;
};

/**
 * Commit
 * @example @see https://apihero.run/integrations/github/examples/commit
 */
export type Commit = {
  /**
   *
   * @example
   * "6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  sha: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  url: string;
  files?: Array<DiffEntry>;
  stats?: {
    total?: number;
    additions?: number;
    deletions?: number;
  };
  author: SimpleUser | null;
  commit: {
    /**
     *
     * @example
     * "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e"
     */
    url: string;
    tree: {
      /**
       *
       * @example
       * "827efc6d56897b048c772eb4087f854f46256132"
       */
      sha: string;

      /**
       *
       * @example
       * "https://api.github.com/repos/octocat/Hello-World/tree/827efc6d56897b048c772eb4087f854f46256132"
       */
      url: string;
    };
    author: GitUser | null;

    /**
     *
     * @example
     * "Fix all the bugs"
     */
    message: string;
    committer: GitUser | null;
    verification?: Verification;

    /**
     *
     * @example
     * 0
     */
    comment_count: number;
  };

  /**
   *
   * @example
   * "MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ=="
   */
  node_id: string;
  parents: Array<{
    /**
     *
     * @example
     * "7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    sha: string;

    /**
     *
     * @example
     * "https://api.github.com/repos/octocat/Hello-World/commits/7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    url: string;

    /**
     *
     * @example
     * "https://github.com/octocat/Hello-World/commit/7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    html_url?: string;
  }>;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  html_url: string;
  committer: SimpleUser | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments"
   */
  comments_url: string;
};

/**
 * A repository import from an external source.
 * @example @see https://apihero.run/integrations/github/examples/import
 */
export type Import = {
  url: string;
  vcs: string | null;
  status:
    | "auth"
    | "error"
    | "none"
    | "detecting"
    | "choose"
    | "auth_failed"
    | "importing"
    | "mapping"
    | "waiting_to_push"
    | "pushing"
    | "complete"
    | "setup"
    | "unknown"
    | "detection_found_multiple"
    | "detection_found_nothing"
    | "detection_needs_auth";
  message?: string;
  use_lfs?: boolean;

  /**
   * The URL of the originating repository.
   */
  vcs_url: string;
  html_url: string;
  svc_root?: string;
  svn_root?: string;
  authors_url: string;
  failed_step?: string | null;
  status_text?: string | null;
  commit_count?: number | null;
  push_percent?: number | null;
  tfvc_project?: string;
  authors_count?: number | null;
  error_message?: string | null;
  import_percent?: number | null;
  repository_url: string;
  has_large_files?: boolean;
  project_choices?: Array<{
    vcs?: string;
    human_name?: string;
    tfvc_project?: string;
  }>;
  large_files_size?: number;
  large_files_count?: number;
};

/**
 * A self hosted runner
 * @example @see https://apihero.run/integrations/github/examples/runner
 */
export type Runner = {
  /**
   * The id of the runner.
   *
   * @example
   * 5
   */
  id: number;

  /**
   * The Operating System of the runner.
   *
   * @example
   * "macos"
   */
  os: string;
  busy: boolean;

  /**
   * The name of the runner.
   *
   * @example
   * "iMac"
   */
  name: string;
  labels: Array<RunnerLabel>;

  /**
   * The status of the runner.
   *
   * @example
   * "online"
   */
  status: string;
};

/**
 * The status of a commit.
 * @example @see https://apihero.run/integrations/github/examples/status
 */
export type Status = {
  id: number;
  url: string;
  state: string;
  context: string;
  creator: SimpleUser | null;
  node_id: string;
  avatar_url: string | null;
  created_at: string;
  target_url: string | null;
  updated_at: string;
  description: string | null;
};

/**
 * Thread
 * @example @see https://apihero.run/integrations/github/examples/thread
 */
export type Thread = {
  id: string;
  url: string;
  reason: string;
  unread: boolean;
  subject: {
    url: string;
    type: string;
    title: string;
    latest_comment_url: string;
  };
  repository: MinimalRepository;
  updated_at: string;
  last_read_at: string | null;

  /**
   *
   * @example
   * "https://api.github.com/notifications/threads/2/subscription"
   */
  subscription_url: string;
};

/**
 * Git references within a repository
 * @example @see https://apihero.run/integrations/github/examples/git-ref
 */
export type GitRef = {
  ref: string;
  url: string;
  object: {
    /**
     * SHA for the reference
     *
     * @example
     * "7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    sha: string;
    url: string;
    type: string;
  };
  node_id: string;
};

/**
 * Metadata for a Git tag
 * @example @see https://apihero.run/integrations/github/examples/git-tag
 */
export type GitTag = {
  /**
   *
   * @example
   * "940bd336248efae0f9ee5bc7b2d5c985887b16ac"
   */
  sha: string;

  /**
   * Name of the tag
   *
   * @example
   * "v0.0.1"
   */
  tag: string;

  /**
   * URL for the tag
   *
   * @example
   * "https://api.github.com/repositories/42/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac"
   */
  url: string;
  object: {
    sha: string;
    url: string;
    type: string;
  };
  tagger: {
    date: string;
    name: string;
    email: string;
  };

  /**
   * Message describing the purpose of the tag
   *
   * @example
   * "Initial public release"
   */
  message: string;

  /**
   *
   * @example
   * "MDM6VGFnOTQwYmQzMzYyNDhlZmFlMGY5ZWU1YmM3YjJkNWM5ODU4ODdiMTZhYw=="
   */
  node_id: string;
  verification?: Verification;
};

/**
 * A unique encryption key
 * @example @see https://apihero.run/integrations/github/examples/gpg-key
 */
export type GpgKey = {
  /**
   *
   * @example
   * 3
   */
  id: number;

  /**
   *
   * @example
   * "Octocat's GPG Key"
   */
  name?: string | null;

  /**
   *
   * @example
   * [{
   *   "email": "octocat@users.noreply.github.com",
   *   "verified": true
   * }]
   */
  emails: Array<{
    email?: string;
    verified?: boolean;
  }>;

  /**
   *
   * @example
   * "3262EFF25BA0D270"
   */
  key_id: string;
  raw_key: string | null;

  /**
   *
   * @example
   * true
   */
  revoked: boolean;

  /**
   *
   * @example
   * [{
   *   "id": 4,
   *   "emails": [],
   *   "key_id": "4A595D4C72EE49C7",
   *   "revoked": false,
   *   "subkeys": [],
   *   "can_sign": false,
   *   "created_at": "2016-03-24T11:31:04-06:00",
   *   "expires_at": null,
   *   "public_key": "zsBNBFayYZ...",
   *   "can_certify": false,
   *   "primary_key_id": 3,
   *   "can_encrypt_comms": true,
   *   "can_encrypt_storage": true
   * }]
   */
  subkeys: Array<{
    id?: number;
    emails?: Array<{}>;
    key_id?: string;
    raw_key?: string | null;
    revoked?: boolean;
    subkeys?: Array<{}>;
    can_sign?: boolean;
    created_at?: string;
    expires_at?: string | null;
    public_key?: string;
    can_certify?: boolean;
    primary_key_id?: number;
    can_encrypt_comms?: boolean;
    can_encrypt_storage?: boolean;
  }>;

  /**
   *
   * @example
   * true
   */
  can_sign: boolean;

  /**
   *
   * @example
   * "2016-03-24T11:31:04-06:00"
   */
  created_at: string;
  expires_at: string | null;

  /**
   *
   * @example
   * "xsBNBFayYZ..."
   */
  public_key: string;

  /**
   *
   * @example
   * true
   */
  can_certify: boolean;
  primary_key_id: number | null;
  can_encrypt_comms: boolean;
  can_encrypt_storage: boolean;
};

/**
 * License
 * @example @see https://apihero.run/integrations/github/examples/license
 */
export type License = {
  /**
   *
   * @example
   * "mit"
   */
  key: string;

  /**
   *
   * @example
   * "https://api.github.com/licenses/mit"
   */
  url: string | null;

  /**
   *
   * @example
   * "\n\nThe MIT License (MIT)\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n"
   */
  body: string;

  /**
   *
   * @example
   * "MIT License"
   */
  name: string;

  /**
   *
   * @example
   * "MDc6TGljZW5zZW1pdA=="
   */
  node_id: string;

  /**
   *
   * @example
   * "MIT"
   */
  spdx_id: string | null;

  /**
   *
   * @example
   * true
   */
  featured: boolean;

  /**
   *
   * @example
   * "http://choosealicense.com/licenses/mit/"
   */
  html_url: string;

  /**
   *
   * @example
   * ["include-copyright"]
   */
  conditions: Array<string>;

  /**
   *
   * @example
   * "A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty."
   */
  description: string;

  /**
   *
   * @example
   * ["no-liability"]
   */
  limitations: Array<string>;

  /**
   *
   * @example
   * ["commercial-use"]
   *
   * @example
   * ["modifications"]
   *
   * @example
   * ["distribution"]
   *
   * @example
   * ["sublicense"]
   *
   * @example
   * ["private-use"]
   */
  permissions: Array<string>;

  /**
   *
   * @example
   * "Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders."
   */
  implementation: string;
};

/**
 * A software package
 */
export type Package = {
  /**
   * Unique identifier of the package.
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/packages/container/super-linter"
   */
  url: string;

  /**
   * The name of the package.
   *
   * @example
   * "super-linter"
   */
  name: string;
  owner?: SimpleUser | null;

  /**
   *
   * @example
   * "https://github.com/orgs/github/packages/container/package/super-linter"
   */
  html_url: string;
  created_at: string;
  repository?: MinimalRepository | null;
  updated_at: string;

  /**
   *
   * @example
   * "private"
   */
  visibility: "private" | "public";

  /**
   *
   * @example
   * "docker"
   */
  package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";

  /**
   * The number of versions of the package.
   *
   * @example
   * 1
   */
  version_count: number;
};

/**
 * Projects are a way to organize columns and cards of work.
 * @example @see https://apihero.run/integrations/github/examples/project
 */
export type Project = {
  /**
   *
   * @example
   * 1002604
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/projects/1002604"
   */
  url: string;

  /**
   * Body of the project
   *
   * @example
   * "This project represents the sprint of the first week in January"
   */
  body: string | null;

  /**
   * Name of the project
   *
   * @example
   * "Week One Sprint"
   */
  name: string;

  /**
   * State of the project; either 'open' or 'closed'
   *
   * @example
   * "open"
   */
  state: string;

  /**
   *
   * @example
   * 1
   */
  number: number;
  creator: SimpleUser | null;

  /**
   *
   * @example
   * "MDc6UHJvamVjdDEwMDI2MDQ="
   */
  node_id: string;

  /**
   * Whether or not this project can be seen by everyone. Only present if owner is an organization.
   */
  private?: boolean;

  /**
   *
   * @example
   * "https://github.com/api-playground/projects-test/projects/12"
   */
  html_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/api-playground/projects-test"
   */
  owner_url: string;

  /**
   *
   * @example
   * "2011-04-10T20:09:31Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2014-03-03T18:58:10Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "https://api.github.com/projects/1002604/columns"
   */
  columns_url: string;

  /**
   * The baseline permission that all organization members have on this project. Only present if owner is an organization.
   */
  organization_permission?: "read" | "write" | "admin" | "none";
};

/**
 * A release.
 * @example @see https://apihero.run/integrations/github/examples/release
 */
export type Release = {
  id: number;
  url: string;
  body?: string | null;
  name: string | null;

  /**
   * true to create a draft (unpublished) release, false to create a published one.
   *
   * @example
   * false
   */
  draft: boolean;
  assets: Array<ReleaseAsset>;
  author: SimpleUser;
  node_id: string;
  html_url: string;

  /**
   * The name of the tag.
   *
   * @example
   * "v1.0.0"
   */
  tag_name: string;
  body_html?: string;
  body_text?: string;
  reactions?: ReactionRollup;
  assets_url: string;
  created_at: string;

  /**
   * Whether to identify the release as a prerelease or a full release.
   *
   * @example
   * false
   */
  prerelease: boolean;
  upload_url: string;
  tarball_url: string | null;
  zipball_url: string | null;
  published_at: string | null;

  /**
   * The URL of the release discussion.
   */
  discussion_url?: string;
  mentions_count?: number;

  /**
   * Specifies the commitish value that determines where the Git tag is created from.
   *
   * @example
   * "master"
   */
  target_commitish: string;
};

export type Traffic = {
  count: number;
  uniques: number;
  timestamp: string;
};

/**
 * An artifact
 * @example @see https://apihero.run/integrations/github/examples/artifact
 */
export type Artifact = {
  /**
   *
   * @example
   * 5
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/artifacts/5"
   */
  url: string;

  /**
   * The name of the artifact.
   *
   * @example
   * "AdventureWorks.Framework"
   */
  name: string;

  /**
   * Whether or not the artifact has expired.
   */
  expired: boolean;

  /**
   *
   * @example
   * "MDEwOkNoZWNrU3VpdGU1"
   */
  node_id: string;
  created_at: string | null;
  expires_at: string | null;
  updated_at: string | null;
  workflow_run?: {
    /**
     *
     * @example
     * 10
     */
    id?: number;

    /**
     *
     * @example
     * "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d"
     */
    head_sha?: string;

    /**
     *
     * @example
     * "main"
     */
    head_branch?: string;

    /**
     *
     * @example
     * 42
     */
    repository_id?: number;

    /**
     *
     * @example
     * 42
     */
    head_repository_id?: number;
  } | null;

  /**
   * The size in bytes of the artifact.
   *
   * @example
   * 12345
   */
  size_in_bytes: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/artifacts/5/zip"
   */
  archive_download_url: string;
};

/**
 * An autolink reference.
 * @example @see https://apihero.run/integrations/github/examples/autolink
 */
export type Autolink = {
  /**
   *
   * @example
   * 3
   */
  id: number;

  /**
   * The prefix of a key that is linkified.
   *
   * @example
   * "TICKET-"
   */
  key_prefix: string;

  /**
   * A template for the target URL that is generated if a key was found.
   *
   * @example
   * "https://example.com/TICKET?query=<num>"
   */
  url_template: string;

  /**
   * Whether this autolink reference matches alphanumeric characters. If false, this autolink reference is a legacy autolink that only matches numeric characters.
   */
  is_alphanumeric?: boolean;
};

/**
 * The hierarchy between files in a Git repository.
 * @example @see https://apihero.run/integrations/github/examples/git-tree
 */
export type GitTree = {
  sha: string;
  url: string;

  /**
   * Objects specifying a tree structure
   *
   * @example
   * [{
   *   "sha": "44b4fc6d56897b048c772eb4087f854f46256132",
   *   "url": "https://api.github.com/repos/octocat/Hello-World/git/blobs/44b4fc6d56897b048c772eb4087f854f46256132",
   *   "mode": "100644",
   *   "path": "file.rb",
   *   "size": 30,
   *   "type": "blob",
   *   "required": [
   *     "path",
   *     "mode",
   *     "type",
   *     "sha",
   *     "url",
   *     "size"
   *   ],
   *   "properties": {
   *     "sha": {
   *       "type": "string"
   *     },
   *     "url": {
   *       "type": "string"
   *     },
   *     "mode": {
   *       "type": "string"
   *     },
   *     "path": {
   *       "type": "string"
   *     },
   *     "size": {
   *       "type": "integer"
   *     },
   *     "type": {
   *       "type": "string"
   *     }
   *   }
   * }]
   */
  tree: Array<{
    /**
     *
     * @example
     * "23f6827669e43831def8a7ad935069c8bd418261"
     */
    sha?: string;

    /**
     *
     * @example
     * "https://api.github.com/repos/owner-482f3203ecf01f67e9deb18e/BBB_Private_Repo/git/blobs/23f6827669e43831def8a7ad935069c8bd418261"
     */
    url?: string;

    /**
     *
     * @example
     * "040000"
     */
    mode?: string;

    /**
     *
     * @example
     * "test/file.rb"
     */
    path?: string;

    /**
     *
     * @example
     * 12
     */
    size?: number;

    /**
     *
     * @example
     * "tree"
     */
    type?: string;
  }>;
  truncated: boolean;
};

/**
 * Metaproperties for Git author/committer information.
 */
export type GitUser = {
  /**
   *
   * @example
   * "\"2007-10-29T02:42:39.000-07:00\""
   */
  date?: string;

  /**
   *
   * @example
   * "\"Chris Wanstrath\""
   */
  name?: string;

  /**
   *
   * @example
   * "\"chris@ozmm.org\""
   */
  email?: string;
};

/**
 * Language
 * @example @see https://apihero.run/integrations/github/examples/language
 */
export type Language = Record<string, number>;

/**
 * A collection of related dependencies declared in a file or representing a logical group of dependencies.
 */
export type Manifest = {
  file?: {
    /**
     * The path of the manifest file relative to the root of the Git repository.
     *
     * @example
     * "/src/build/package-lock.json"
     */
    source_location?: string;
  };

  /**
   * The name of the manifest.
   *
   * @example
   * "package-lock.json"
   */
  name: string;
  metadata?: Metadata;
  resolved?: {};
};

/**
 * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
 */
export type Metadata = Record<string, string | number | boolean>;

/**
 * Org Hook
 * @example @see https://apihero.run/integrations/github/examples/org-hook
 */
export type OrgHook = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/octocat/hooks/1"
   */
  url: string;

  /**
   *
   * @example
   * "web"
   */
  name: string;
  type: string;

  /**
   *
   * @example
   * true
   */
  active: boolean;
  config: {
    /**
     *
     * @example
     * "\"http://example.com/2\""
     */
    url?: string;

    /**
     *
     * @example
     * "\"********\""
     */
    secret?: string;

    /**
     *
     * @example
     * "\"form\""
     */
    content_type?: string;

    /**
     *
     * @example
     * "\"0\""
     */
    insecure_ssl?: string;
  };

  /**
   *
   * @example
   * ["push"]
   *
   * @example
   * ["pull_request"]
   */
  events: Array<string>;

  /**
   *
   * @example
   * "https://api.github.com/orgs/octocat/hooks/1/pings"
   */
  ping_url: string;

  /**
   *
   * @example
   * "2011-09-06T17:26:27Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-09-06T20:39:23Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/octocat/hooks/1/deliveries"
   */
  deliveries_url?: string;
};

/**
 * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
 * @example @see https://apihero.run/integrations/github/examples/reaction
 */
export type Reaction = {
  /**
   *
   * @example
   * 1
   */
  id: number;
  user: SimpleUser | null;

  /**
   * The reaction to use
   *
   * @example
   * "heart"
   */
  content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";

  /**
   *
   * @example
   * "MDg6UmVhY3Rpb24x"
   */
  node_id: string;

  /**
   *
   * @example
   * "2016-05-20T20:09:31Z"
   */
  created_at: string;
};

/**
 * Create a new snapshot of a repository's dependencies.
 */
export type Snapshot = {
  job: {
    /**
     * The external ID of the job.
     *
     * @example
     * "5622a2b0-63f6-4732-8c34-a1ab27e102a11"
     */
    id: string;

    /**
     * The url for the job.
     *
     * @example
     * "http://example.com/build"
     */
    html_url?: string;

    /**
     * Correlator provides a key that is used to group snapshots submitted over time. Only the "latest" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given "wave" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation.
     *
     * @example
     * "yourworkflowname_yourjobname"
     */
    correlator: string;
  };

  /**
   * The repository branch that triggered this snapshot.
   *
   * @example
   * "refs/heads/main"
   */
  ref: string;

  /**
   * The commit SHA associated with this dependency snapshot.
   *
   * @example
   * "ddc951f4b1293222421f2c8df679786153acf689"
   */
  sha: string;

  /**
   * The time at which the snapshot was scanned.
   *
   * @example
   * "2020-06-13T14:52:50-05:00"
   */
  scanned: string;

  /**
   * The version of the repository snapshot submission.
   */
  version: number;

  /**
   * A description of the detector used.
   */
  detector: {
    /**
     * The url of the detector used.
     *
     * @example
     * "http://example.com/docker-buildtimer-detector"
     */
    url: string;

    /**
     * The name of the detector used.
     *
     * @example
     * "docker buildtime detector"
     */
    name: string;

    /**
     * The version of the detector used.
     *
     * @example
     * "1.0.0"
     */
    version: string;
  };
  metadata?: Metadata;

  /**
   * A collection of package manifests
   */
  manifests?: Record<string, Manifest>;
};

/**
 * A GitHub Actions workflow
 * @example @see https://apihero.run/integrations/github/examples/workflow
 */
export type Workflow = {
  /**
   *
   * @example
   * 5
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/actions/setup-ruby/workflows/5"
   */
  url: string;

  /**
   *
   * @example
   * "CI"
   */
  name: string;

  /**
   *
   * @example
   * "ruby.yaml"
   */
  path: string;

  /**
   *
   * @example
   * "active"
   */
  state: "active" | "deleted" | "disabled_fork" | "disabled_inactivity" | "disabled_manually";

  /**
   *
   * @example
   * "MDg6V29ya2Zsb3cxMg=="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/actions/setup-ruby/blob/master/.github/workflows/ruby.yaml"
   */
  html_url: string;

  /**
   *
   * @example
   * "https://github.com/actions/setup-ruby/workflows/CI/badge.svg"
   */
  badge_url: string;

  /**
   *
   * @example
   * "2019-12-06T14:20:20.000Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2019-12-06T14:20:20.000Z"
   */
  deleted_at?: string;

  /**
   *
   * @example
   * "2019-12-06T14:20:20.000Z"
   */
  updated_at: string;
};

/**
 * The REST API URL of the alert resource.
 */
export type AlertUrl = string;

/**
 * Base Gist
 * @example @see https://apihero.run/integrations/github/examples/base-gist
 */
export type BaseGist = {
  id: string;
  url: string;
  user: SimpleUser | null;
  files: Record<
    string,
    {
      size?: number;
      type?: string;
      raw_url?: string;
      filename?: string;
      language?: string;
    }
  >;
  forks?: Array<{}>;
  owner?: SimpleUser;
  public: boolean;
  history?: Array<{}>;
  node_id: string;
  comments: number;
  html_url: string;
  forks_url: string;
  truncated?: boolean;
  created_at: string;
  updated_at: string;
  commits_url: string;
  description: string | null;
  comments_url: string;
  git_pull_url: string;
  git_push_url: string;
};

/**
 * A check performed on the code of a given code change
 * @example @see https://apihero.run/integrations/github/examples/check-run
 */
export type CheckRun = {
  /**
   * The id of the check.
   *
   * @example
   * 21
   */
  id: number;
  app: Integration | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/check-runs/4"
   */
  url: string;

  /**
   * The name of the check.
   *
   * @example
   * "test-coverage"
   */
  name: string;
  output: {
    text: string | null;
    title: string | null;
    summary: string | null;
    annotations_url: string;
    annotations_count: number;
  };

  /**
   * The phase of the lifecycle that the check is currently in.
   *
   * @example
   * "queued"
   */
  status: "queued" | "in_progress" | "completed";

  /**
   *
   * @example
   * "MDg6Q2hlY2tSdW40"
   */
  node_id: string;

  /**
   * The SHA of the commit that is being checked.
   *
   * @example
   * "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d"
   */
  head_sha: string;

  /**
   *
   * @example
   * "https://github.com/github/hello-world/runs/4"
   */
  html_url: string | null;

  /**
   *
   * @example
   * "neutral"
   */
  conclusion:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | null;
  deployment?: DeploymentSimple;

  /**
   *
   * @example
   * "2018-05-04T01:14:52Z"
   */
  started_at: string | null;
  check_suite: {
    id: number;
  } | null;

  /**
   *
   * @example
   * "https://example.com"
   */
  details_url: string | null;

  /**
   *
   * @example
   * "42"
   */
  external_id: string | null;

  /**
   *
   * @example
   * "2018-05-04T01:14:52Z"
   */
  completed_at: string | null;
  pull_requests: Array<PullRequestMinimal>;
};

/**
 * A codespace.
 * @example @see https://apihero.run/integrations/github/examples/codespace
 */
export type Codespace = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   * API URL for this codespace.
   */
  url: string;

  /**
   * Automatically generated name of this codespace.
   *
   * @example
   * "monalisa-octocat-hello-world-g4wpq6h95q"
   */
  name: string;
  owner: SimpleUser;

  /**
   * State of this codespace.
   *
   * @example
   * "Available"
   */
  state:
    | "Unknown"
    | "Created"
    | "Queued"
    | "Provisioning"
    | "Available"
    | "Awaiting"
    | "Unavailable"
    | "Deleted"
    | "Moved"
    | "Shutdown"
    | "Archived"
    | "Starting"
    | "ShuttingDown"
    | "Failed"
    | "Exporting"
    | "Updating"
    | "Rebuilding";
  machine: CodespaceMachine | null;

  /**
   * URL to access this codespace on the web.
   */
  web_url: string;

  /**
   * The Azure region where this codespace is located.
   *
   * @example
   * "WestUs2"
   */
  location: "EastUs" | "SouthEastAsia" | "WestEurope" | "WestUs2";

  /**
   * Whether the codespace was created from a prebuild.
   *
   * @example
   * false
   */
  prebuild: boolean | null;

  /**
   * API URL to stop this codespace.
   */
  stop_url: string;

  /**
   * API URL for the Pull Request associated with this codespace, if any.
   */
  pulls_url: string | null;

  /**
   * API URL to start this codespace.
   */
  start_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at: string;

  /**
   * Details about the codespace's git repository.
   */
  git_status: {
    /**
     * The current branch (or SHA if in detached HEAD state) of the local repository.
     *
     * @example
     * "main"
     */
    ref?: string;

    /**
     * The number of commits the local repository is ahead of the remote.
     *
     * @example
     * 0
     */
    ahead?: number;

    /**
     * The number of commits the local repository is behind the remote.
     *
     * @example
     * 0
     */
    behind?: number;

    /**
     * Whether the local repository has unpushed changes.
     */
    has_unpushed_changes?: boolean;

    /**
     * Whether the local repository has uncommitted changes.
     */
    has_uncommitted_changes?: boolean;
  };
  repository: MinimalRepository;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  updated_at: string;

  /**
   * Display name for this codespace.
   *
   * @example
   * "bookish space pancake"
   */
  display_name?: string | null;

  /**
   * Last known time this codespace was started.
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  last_used_at: string;

  /**
   * API URL to access available alternate machine types for this codespace.
   */
  machines_url: string;
  billable_owner: SimpleUser;

  /**
   * UUID identifying this codespace's environment.
   *
   * @example
   * "26a7c758-7299-4a73-b978-5a92a7ae98a0"
   */
  environment_id: string | null;
  recent_folders: Array<string>;

  /**
   * Path to devcontainer.json from repo root used to create Codespace.
   *
   * @example
   * ".devcontainer/example/devcontainer.json"
   */
  devcontainer_path?: string | null;

  /**
   * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
   */
  pending_operation?: boolean | null;

  /**
   * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
   */
  idle_timeout_notice?: string | null;
  runtime_constraints?: {
    /**
     * The privacy settings a user can select from when forwarding a port.
     */
    allowed_port_privacy_settings?: Array<string> | null;
  };

  /**
   * The number of minutes of inactivity after which this codespace will be automatically stopped.
   *
   * @example
   * 60
   */
  idle_timeout_minutes: number | null;

  /**
   * Text to show user when codespace is disabled by a pending operation
   */
  pending_operation_disabled_reason?: string | null;
};

/**
 * Hovercard
 * @example @see https://apihero.run/integrations/github/examples/hovercard
 */
export type Hovercard = {
  contexts: Array<{
    message: string;
    octicon: string;
  }>;
};

/**
 * A migration.
 * @example @see https://apihero.run/integrations/github/examples/migration
 */
export type Migration = {
  /**
   *
   * @example
   * 79
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/octo-org/migrations/79"
   */
  url: string;

  /**
   *
   * @example
   * "0b989ba4-242f-11e5-81e1-c7b6966d2516"
   */
  guid: string;
  owner: SimpleUser | null;

  /**
   *
   * @example
   * "pending"
   */
  state: string;
  exclude?: Array<{}>;
  node_id: string;

  /**
   *
   * @example
   * "2015-07-06T15:33:38-07:00"
   */
  created_at: string;

  /**
   *
   * @example
   * "2015-07-06T15:33:38-07:00"
   */
  updated_at: string;
  archive_url?: string;
  repositories: Array<Repository>;
  exclude_git_data: boolean;
  exclude_metadata: boolean;
  exclude_releases: boolean;

  /**
   *
   * @example
   * true
   */
  lock_repositories: boolean;
  org_metadata_only: boolean;
  exclude_attachments: boolean;
  exclude_owner_projects: boolean;
};

/**
 * A collection of related issues and pull requests.
 * @example @see https://apihero.run/integrations/github/examples/milestone
 */
export type Milestone = {
  /**
   *
   * @example
   * 1002604
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/milestones/1"
   */
  url: string;

  /**
   * The state of the milestone.
   *
   * @example
   * "open"
   */
  state: "open" | "closed";

  /**
   * The title of the milestone.
   *
   * @example
   * "v1.0"
   */
  title: string;

  /**
   *
   * @example
   * "2012-10-09T23:39:01Z"
   */
  due_on: string | null;

  /**
   * The number of the milestone.
   *
   * @example
   * 42
   */
  number: number;
  creator: SimpleUser | null;

  /**
   *
   * @example
   * "MDk6TWlsZXN0b25lMTAwMjYwNA=="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/milestones/v1.0"
   */
  html_url: string;

  /**
   *
   * @example
   * "2013-02-12T13:22:01Z"
   */
  closed_at: string | null;

  /**
   *
   * @example
   * "2011-04-10T20:09:31Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/milestones/1/labels"
   */
  labels_url: string;

  /**
   *
   * @example
   * "2014-03-03T18:58:10Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "Tracking milestone for version 1.0"
   */
  description: string | null;

  /**
   *
   * @example
   * 4
   */
  open_issues: number;

  /**
   *
   * @example
   * 8
   */
  closed_issues: number;
};

/**
 * SCIM /Users provisioning endpoints
 * @example @see https://apihero.run/integrations/github/examples/scim-user
 */
export type ScimUser = {
  /**
   * Unique identifier of an external identity
   *
   * @example
   * "1b78eada-9baa-11e6-9eb6-a431576d590e"
   */
  id: string;
  meta: {
    /**
     *
     * @example
     * "2019-01-24T22:45:36.000Z"
     */
    created?: string;

    /**
     *
     * @example
     * "https://api.github.com/scim/v2/organizations/myorg-123abc55141bfd8f/Users/c42772b5-2029-11e9-8543-9264a97dec8d"
     */
    location?: string;

    /**
     *
     * @example
     * "2019-01-24T22:45:36.000Z"
     */
    lastModified?: string;

    /**
     *
     * @example
     * "User"
     */
    resourceType?: string;
  };
  name: {
    formatted?: string | null;
    givenName: string | null;
    familyName: string | null;
  };

  /**
   * The active status of the User.
   *
   * @example
   * true
   */
  active: boolean;

  /**
   * user emails
   *
   * @example
   * [{
   *   "value": "someone@example.com",
   *   "primary": true
   * }]
   *
   * @example
   * [{
   *   "value": "another@example.com",
   *   "primary": false
   * }]
   */
  emails: Array<{
    value: string;
    primary?: boolean;
  }>;

  /**
   * associated groups
   */
  groups?: Array<{}>;

  /**
   * SCIM schema used.
   *
   * @example
   * ["urn:ietf:params:scim:schemas:core:2.0:User"]
   */
  schemas: Array<string>;

  /**
   * Configured by the admin. Could be an email, login, or username
   *
   * @example
   * "someone@example.com"
   */
  userName: string | null;

  /**
   * The ID of the User.
   *
   * @example
   * "a7b0f98395"
   */
  externalId: string | null;

  /**
   * Set of operations to be performed
   *
   * @example
   * [{
   *   "op": "replace",
   *   "value": {
   *     "active": false
   *   }
   * }]
   */
  operations?: Array<{
    op: "add" | "remove" | "replace";
    path?: string;
    value?: string;
  }>;

  /**
   * The name of the user, suitable for display to end-users
   *
   * @example
   * "Jon Doe"
   */
  displayName?: string | null;

  /**
   * The ID of the organization.
   */
  organization_id?: number;
};

/**
 * Stargazer
 */
export type Stargazer = {
  user: SimpleUser | null;
  starred_at: string;
};

/**
 * Groups of organization members that gives permissions on specified repositories.
 * @example @see https://apihero.run/integrations/github/examples/team-full
 */
export type TeamFull = {
  /**
   * Unique identifier of the team
   *
   * @example
   * 42
   */
  id: number;

  /**
   * URL for the team
   *
   * @example
   * "https://api.github.com/organizations/1/team/1"
   */
  url: string;

  /**
   * Name of the team
   *
   * @example
   * "Developers"
   */
  name: string;

  /**
   *
   * @example
   * "justice-league"
   */
  slug: string;
  parent?: TeamSimple | null;

  /**
   * Distinguished Name (DN) that team maps to within LDAP environment
   *
   * @example
   * "uid=example,ou=users,dc=github,dc=com"
   */
  ldap_dn?: string;

  /**
   *
   * @example
   * "MDQ6VGVhbTE="
   */
  node_id: string;

  /**
   * The level of privacy this team should have
   *
   * @example
   * "closed"
   */
  privacy?: "closed" | "secret";

  /**
   *
   * @example
   * "https://github.com/orgs/rails/teams/core"
   */
  html_url: string;

  /**
   *
   * @example
   * "2017-07-14T16:53:42Z"
   */
  created_at: string;

  /**
   * Permission that the team will have for its repositories
   *
   * @example
   * "push"
   */
  permission: string;

  /**
   *
   * @example
   * "2017-08-17T12:37:15Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "A great team."
   */
  description: string | null;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/1/members{/member}"
   */
  members_url: string;

  /**
   *
   * @example
   * 10
   */
  repos_count: number;
  organization: OrganizationFull;

  /**
   *
   * @example
   * 3
   */
  members_count: number;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/1/repos"
   */
  repositories_url: string;
};

/**
 * The status of auto merging a pull request.
 */
export type AutoMerge = {
  enabled_by: SimpleUser;

  /**
   * Title for the merge commit message.
   */
  commit_title: string;

  /**
   * The merge method to use.
   */
  merge_method: "merge" | "squash" | "rebase";

  /**
   * Commit message for the merge commit.
   */
  commit_message: string;
};

/**
 * A single package dependency.
 */
export type Dependency = {
  /**
   * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
   *
   * @example
   * "runtime"
   */
  scope?: "runtime" | "development";
  metadata?: Metadata;

  /**
   * Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.
   *
   * @example
   * "pkg:/npm/%40actions/http-client@1.0.11"
   */
  package_url?: string;

  /**
   * Array of package-url (PURLs) of direct child dependencies.
   *
   * @example
   * ["@actions/http-client"]
   */
  dependencies?: Array<string>;

  /**
   * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
   *
   * @example
   * "direct"
   */
  relationship?: "direct" | "indirect";
};

/**
 * An SSH key granting access to a single repository.
 * @example @see https://apihero.run/integrations/github/examples/deploy-key
 */
export type DeployKey = {
  id: number;
  key: string;
  url: string;
  title: string;
  verified: boolean;
  read_only: boolean;
  created_at: string;
};

/**
 * A request for a specific ref(branch,sha,tag) to be deployed
 * @example @see https://apihero.run/integrations/github/examples/deployment
 */
export type Deployment = {
  /**
   * Unique identifier of the deployment
   *
   * @example
   * 42
   */
  id: number;

  /**
   * The ref to deploy. This can be a branch, tag, or sha.
   *
   * @example
   * "topic-branch"
   */
  ref: string;

  /**
   *
   * @example
   * "a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d"
   */
  sha: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/deployments/1"
   */
  url: string;

  /**
   * Parameter to specify a task to execute
   *
   * @example
   * "deploy"
   */
  task: string;
  creator: SimpleUser | null;

  /**
   *
   * @example
   * "MDEwOkRlcGxveW1lbnQx"
   */
  node_id: string;
  payload: string;

  /**
   *
   * @example
   * "2012-07-20T01:19:13Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2012-07-20T01:19:13Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "Deploy request from hubot"
   */
  description: string | null;

  /**
   * Name for the target deployment environment.
   *
   * @example
   * "production"
   */
  environment: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/deployments/1/statuses"
   */
  statuses_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example"
   */
  repository_url: string;

  /**
   *
   * @example
   * "staging"
   */
  original_environment?: string;

  /**
   * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
   *
   * @example
   * true
   */
  transient_environment?: boolean;

  /**
   * Specifies if the given environment is one that end-users directly interact with. Default: false.
   *
   * @example
   * true
   */
  production_environment?: boolean;
  performed_via_github_app?: Integration | null;
};

/**
 * Diff Entry
 */
export type DiffEntry = {
  /**
   *
   * @example
   * "bbcd538c8e72b8c175046e27cc8f907076331401"
   */
  sha: string;

  /**
   *
   * @example
   * "@@ -132,7 +132,7 @@ module Test @@ -1000,7 +1000,7 @@ module Test"
   */
  patch?: string;

  /**
   *
   * @example
   * "added"
   */
  status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";

  /**
   *
   * @example
   * 124
   */
  changes: number;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/raw/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt"
   */
  raw_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/blob/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt"
   */
  blob_url: string;

  /**
   *
   * @example
   * "file1.txt"
   */
  filename: string;

  /**
   *
   * @example
   * 103
   */
  additions: number;

  /**
   *
   * @example
   * 21
   */
  deletions: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/contents/file1.txt?ref=6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  contents_url: string;

  /**
   *
   * @example
   * "file.txt"
   */
  previous_filename?: string;
};

/**
 * An enterprise account
 */
export type Enterprise = {
  /**
   * Unique identifier of the enterprise
   *
   * @example
   * 42
   */
  id: number;

  /**
   * The name of the enterprise.
   *
   * @example
   * "Octo Business"
   */
  name: string;

  /**
   * The slug url identifier for the enterprise.
   *
   * @example
   * "octo-business"
   */
  slug: string;

  /**
   *
   * @example
   * "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/enterprises/octo-business"
   */
  html_url: string;
  avatar_url: string;

  /**
   *
   * @example
   * "2019-01-26T19:01:12Z"
   */
  created_at: string | null;

  /**
   *
   * @example
   * "2019-01-26T19:14:43Z"
   */
  updated_at: string | null;

  /**
   * A short description of the enterprise.
   */
  description?: string | null;

  /**
   * The enterprise's website URL.
   */
  website_url?: string | null;
};

/**
 * Low-level Git commit operations within a repository
 * @example @see https://apihero.run/integrations/github/examples/git-commit
 */
export type GitCommit = {
  /**
   * SHA for the commit
   *
   * @example
   * "7638417db6d59f3c431d3e1f261cc637155684cd"
   */
  sha: string;
  url: string;
  tree: {
    /**
     * SHA for the commit
     *
     * @example
     * "7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    sha: string;
    url: string;
  };

  /**
   * Identifying information for the git-user
   */
  author: {
    /**
     * Timestamp of the commit
     *
     * @example
     * "2014-08-09T08:02:04+12:00"
     */
    date: string;

    /**
     * Name of the git user
     *
     * @example
     * "Monalisa Octocat"
     */
    name: string;

    /**
     * Git email address of the user
     *
     * @example
     * "monalisa.octocat@example.com"
     */
    email: string;
  };

  /**
   * Message describing the purpose of the commit
   *
   * @example
   * "Fix #42"
   */
  message: string;
  node_id: string;
  parents: Array<{
    /**
     * SHA for the commit
     *
     * @example
     * "7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    sha: string;
    url: string;
    html_url: string;
  }>;
  html_url: string;

  /**
   * Identifying information for the git-user
   */
  committer: {
    /**
     * Timestamp of the commit
     *
     * @example
     * "2014-08-09T08:02:04+12:00"
     */
    date: string;

    /**
     * Name of the git user
     *
     * @example
     * "Monalisa Octocat"
     */
    name: string;

    /**
     * Git email address of the user
     *
     * @example
     * "monalisa.octocat@example.com"
     */
    email: string;
  };
  verification: {
    reason: string;
    payload: string | null;
    verified: boolean;
    signature: string | null;
  };
};

/**
 * Key Simple
 */
export type KeySimple = {
  id: number;
  key: string;
};

/**
 * Page Build
 * @example @see https://apihero.run/integrations/github/examples/page-build
 */
export type PageBuild = {
  url: string;
  error: {
    message: string | null;
  };
  commit: string;
  pusher: SimpleUser | null;
  status: string;
  duration: number;
  created_at: string;
  updated_at: string;
};

export type RateLimit = {
  used: number;
  limit: number;
  reset: number;
  remaining: number;
};

/**
 * A git repository
 * @example @see https://apihero.run/integrations/github/examples/repository
 */
export type Repository = {
  /**
   * Unique identifier of the repository
   *
   * @example
   * 42
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World"
   */
  url: string;
  fork: boolean;

  /**
   * The name of the repository.
   *
   * @example
   * "Team Environment"
   */
  name: string;

  /**
   *
   * @example
   * 108
   */
  size: number;
  forks: number;
  owner: SimpleUser;
  topics?: Array<string>;

  /**
   *
   * @example
   * "git:github.com/octocat/Hello-World.git"
   */
  git_url: string;
  license: LicenseSimple | null;

  /**
   *
   * @example
   * "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
   */
  node_id: string;

  /**
   * Whether the repository is private or public.
   */
  private: boolean;

  /**
   *
   * @example
   * "git@github.com:octocat/Hello-World.git"
   */
  ssh_url: string;

  /**
   *
   * @example
   * "https://svn.github.com/octocat/Hello-World"
   */
  svn_url: string;

  /**
   * Whether the repository is archived.
   */
  archived: boolean;

  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;

  /**
   * Whether the wiki is enabled.
   *
   * @example
   * true
   */
  has_wiki: boolean;

  /**
   *
   * @example
   * "https://github.com"
   */
  homepage: string | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World"
   */
  html_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}"
   */
  keys_url: string;
  language: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/tags"
   */
  tags_url: string;
  watchers: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}"
   */
  blobs_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World.git"
   */
  clone_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/forks"
   */
  forks_url: string;

  /**
   *
   * @example
   * "octocat/Hello-World"
   */
  full_name: string;
  has_pages: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/hooks"
   */
  hooks_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/pulls{/number}"
   */
  pulls_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:06:43Z"
   */
  pushed_at: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/teams"
   */
  teams_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}"
   */
  trees_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/events"
   */
  events_url: string;

  /**
   * Whether issues are enabled.
   *
   * @example
   * true
   */
  has_issues: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues{/number}"
   */
  issues_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/labels{/name}"
   */
  labels_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/merges"
   */
  merges_url: string;

  /**
   *
   * @example
   * "git:git.example.com/octocat/Hello-World"
   */
  mirror_url: string | null;

  /**
   *
   * @example
   * "\"2020-07-09T00:17:42Z\""
   */
  starred_at?: string;

  /**
   *
   * @example
   * "2011-01-26T19:14:43Z"
   */
  updated_at: string | null;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}"
   */
  archive_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/commits{/sha}"
   */
  commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}"
   */
  compare_url: string;

  /**
   *
   * @example
   * "This your first repo!"
   */
  description: string | null;

  /**
   *
   * @example
   * 9
   */
  forks_count: number;

  /**
   * Whether this repository acts as a template that can be used to generate new repositories.
   *
   * @example
   * true
   */
  is_template?: boolean;
  open_issues: number;
  permissions?: {
    pull: boolean;
    push: boolean;
    admin: boolean;
    triage?: boolean;
    maintain?: boolean;
  };

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/branches{/branch}"
   */
  branches_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/comments{/number}"
   */
  comments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contents/{+path}"
   */
  contents_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}"
   */
  git_refs_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
   */
  git_tags_url: string;

  /**
   * Whether projects are enabled.
   *
   * @example
   * true
   */
  has_projects: boolean;
  organization?: SimpleUser | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/releases{/id}"
   */
  releases_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}"
   */
  statuses_url: string;

  /**
   * Whether to allow forking this repo
   */
  allow_forking?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/assignees{/user}"
   */
  assignees_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/downloads"
   */
  downloads_url: string;

  /**
   * Whether downloads are enabled.
   *
   * @example
   * true
   */
  has_downloads: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/languages"
   */
  languages_url: string;
  master_branch?: string;
  network_count?: number;

  /**
   * The default branch of the repository.
   *
   * @example
   * "master"
   */
  default_branch: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/milestones{/number}"
   */
  milestones_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/stargazers"
   */
  stargazers_url: string;

  /**
   *
   * @example
   * 80
   */
  watchers_count: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/deployments"
   */
  deployments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}"
   */
  git_commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscribers"
   */
  subscribers_url: string;

  /**
   * Whether to allow Auto-merge to be used on pull requests.
   *
   * @example
   * false
   */
  allow_auto_merge?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contributors"
   */
  contributors_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}"
   */
  issue_events_url: string;

  /**
   *
   * @example
   * 80
   */
  stargazers_count: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscription"
   */
  subscription_url: string;
  temp_clone_token?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}"
   */
  collaborators_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}"
   */
  issue_comment_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}"
   */
  notifications_url: string;

  /**
   *
   * @example
   * 0
   */
  open_issues_count: number;
  subscribers_count?: number;

  /**
   * Whether to allow merge commits for pull requests.
   *
   * @example
   * true
   */
  allow_merge_commit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   *
   * @example
   * true
   */
  allow_rebase_merge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   *
   * @example
   * true
   */
  allow_squash_merge?: boolean;

  /**
   * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
   *
   * @example
   * false
   */
  allow_update_branch?: boolean;
  template_repository?: {
    id?: number;
    url?: string;
    fork?: boolean;
    name?: string;
    size?: number;
    owner?: {
      id?: number;
      url?: string;
      type?: string;
      login?: string;
      node_id?: string;
      html_url?: string;
      gists_url?: string;
      repos_url?: string;
      avatar_url?: string;
      events_url?: string;
      site_admin?: boolean;
      gravatar_id?: string;
      starred_url?: string;
      followers_url?: string;
      following_url?: string;
      organizations_url?: string;
      subscriptions_url?: string;
      received_events_url?: string;
    };
    topics?: Array<string>;
    git_url?: string;
    node_id?: string;
    private?: boolean;
    ssh_url?: string;
    svn_url?: string;
    archived?: boolean;
    disabled?: boolean;
    has_wiki?: boolean;
    homepage?: string;
    html_url?: string;
    keys_url?: string;
    language?: string;
    tags_url?: string;
    blobs_url?: string;
    clone_url?: string;
    forks_url?: string;
    full_name?: string;
    has_pages?: boolean;
    hooks_url?: string;
    pulls_url?: string;
    pushed_at?: string;
    teams_url?: string;
    trees_url?: string;
    created_at?: string;
    events_url?: string;
    has_issues?: boolean;
    issues_url?: string;
    labels_url?: string;
    merges_url?: string;
    mirror_url?: string;
    updated_at?: string;
    visibility?: string;
    archive_url?: string;
    commits_url?: string;
    compare_url?: string;
    description?: string;
    forks_count?: number;
    is_template?: boolean;
    permissions?: {
      pull?: boolean;
      push?: boolean;
      admin?: boolean;
      triage?: boolean;
      maintain?: boolean;
    };
    branches_url?: string;
    comments_url?: string;
    contents_url?: string;
    git_refs_url?: string;
    git_tags_url?: string;
    has_projects?: boolean;
    releases_url?: string;
    statuses_url?: string;
    assignees_url?: string;
    downloads_url?: string;
    has_downloads?: boolean;
    languages_url?: string;
    network_count?: number;
    default_branch?: string;
    milestones_url?: string;
    stargazers_url?: string;
    watchers_count?: number;
    deployments_url?: string;
    git_commits_url?: string;
    subscribers_url?: string;
    allow_auto_merge?: boolean;
    contributors_url?: string;
    issue_events_url?: string;
    stargazers_count?: number;
    subscription_url?: string;
    temp_clone_token?: string;
    collaborators_url?: string;
    issue_comment_url?: string;
    notifications_url?: string;
    open_issues_count?: number;
    subscribers_count?: number;
    allow_merge_commit?: boolean;
    allow_rebase_merge?: boolean;
    allow_squash_merge?: boolean;
    allow_update_branch?: boolean;
    delete_branch_on_merge?: boolean;
    use_squash_pr_title_as_default?: boolean;
  } | null;

  /**
   * Whether to delete head branches when pull requests are merged
   *
   * @example
   * false
   */
  delete_branch_on_merge?: boolean;

  /**
   * Whether a squash merge commit can use the pull request title as default.
   */
  use_squash_pr_title_as_default?: boolean;
};

/**
 * Scim Error
 */
export type ScimError = {
  detail?: string | null;
  status?: number;
  message?: string | null;
  schemas?: Array<string>;
  scimType?: string | null;
  documentation_url?: string | null;
};

/**
 * Short Blob
 * @example @see https://apihero.run/integrations/github/examples/short-blob
 */
export type ShortBlob = {
  sha: string;
  url: string;
};

/**
 * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
 *
 * @example @see https://apihero.run/integrations/github/examples/wait-timer
 */
export type WaitTimer = number;

/**
 * Basic Error
 */
export type BasicError = {
  url?: string;
  status?: string;
  message?: string;
  documentation_url?: string;
};

/**
 * A suite of checks performed on the code of a given code change
 * @example @see https://apihero.run/integrations/github/examples/check-suite
 */
export type CheckSuite = {
  /**
   *
   * @example
   * 5
   */
  id: number;
  app: Integration | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/check-suites/5"
   */
  url: string | null;

  /**
   *
   * @example
   * "d6fde92930d4715a2b49857d24b940956b26d2d3"
   */
  after: string | null;

  /**
   *
   * @example
   * "146e867f55c26428e5f9fade55a9bbf5e95a7912"
   */
  before: string | null;

  /**
   *
   * @example
   * "completed"
   */
  status: "queued" | "in_progress" | "completed" | null;

  /**
   *
   * @example
   * "MDEwOkNoZWNrU3VpdGU1"
   */
  node_id: string;

  /**
   * The SHA of the head commit that is being checked.
   *
   * @example
   * "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d"
   */
  head_sha: string;

  /**
   *
   * @example
   * "neutral"
   */
  conclusion:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | null;
  created_at: string | null;
  repository: MinimalRepository;
  updated_at: string | null;

  /**
   *
   * @example
   * "master"
   */
  head_branch: string | null;
  head_commit: SimpleCommit;
  pull_requests: Array<PullRequestMinimal> | null;
  rerequestable?: boolean;
  check_runs_url: string;
  runs_rerequestable?: boolean;
  latest_check_runs_count: number;
};

/**
 * Contributor
 */
export type Contributor = {
  id?: number;
  url?: string;
  name?: string;
  type: string;
  email?: string;
  login?: string;
  node_id?: string;
  html_url?: string;
  gists_url?: string;
  repos_url?: string;
  avatar_url?: string;
  events_url?: string;
  site_admin?: boolean;
  gravatar_id?: string | null;
  starred_url?: string;
  contributions: number;
  followers_url?: string;
  following_url?: string;
  organizations_url?: string;
  subscriptions_url?: string;
  received_events_url?: string;
};

/**
 * Details of a deployment environment
 * @example @see https://apihero.run/integrations/github/examples/environment
 */
export type Environment = {
  /**
   * The id of the environment.
   *
   * @example
   * 56780428
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/environments/staging"
   */
  url: string;

  /**
   * The name of the environment.
   *
   * @example
   * "staging"
   */
  name: string;

  /**
   *
   * @example
   * "MDExOkVudmlyb25tZW50NTY3ODA0Mjg="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging"
   */
  html_url: string;

  /**
   * The time that the environment was created, in ISO 8601 format.
   *
   * @example
   * "2020-11-23T22:00:40Z"
   */
  created_at: string;

  /**
   * The time that the environment was last updated, in ISO 8601 format.
   *
   * @example
   * "2020-11-23T22:00:40Z"
   */
  updated_at: string;
  protection_rules?: Array<
    | {
        /**
         *
         * @example
         * 3515
         */
        id: number;

        /**
         *
         * @example
         * "wait_timer"
         */
        type: string;

        /**
         *
         * @example
         * "MDQ6R2F0ZTM1MTU="
         */
        node_id: string;
        wait_timer?: WaitTimer;
      }
    | {
        /**
         *
         * @example
         * 3755
         */
        id: number;

        /**
         *
         * @example
         * "required_reviewers"
         */
        type: string;

        /**
         *
         * @example
         * "MDQ6R2F0ZTM3NTU="
         */
        node_id: string;

        /**
         * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
         */
        reviewers?: Array<{
          type?: DeploymentReviewerType;
          reviewer?: SimpleUser | Team;
        }>;
      }
    | {
        /**
         *
         * @example
         * 3515
         */
        id: number;

        /**
         *
         * @example
         * "branch_policy"
         */
        type: string;

        /**
         *
         * @example
         * "MDQ6R2F0ZTM1MTU="
         */
        node_id: string;
      }
  >;
  deployment_branch_policy?: DeploymentBranchPolicy;
};

/**
 * File Commit
 * @example @see https://apihero.run/integrations/github/examples/file-commit
 */
export type FileCommit = {
  commit: {
    sha?: string;
    url?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    author?: {
      date?: string;
      name?: string;
      email?: string;
    };
    message?: string;
    node_id?: string;
    parents?: Array<{
      sha?: string;
      url?: string;
      html_url?: string;
    }>;
    html_url?: string;
    committer?: {
      date?: string;
      name?: string;
      email?: string;
    };
    verification?: {
      reason?: string;
      payload?: string | null;
      verified?: boolean;
      signature?: string | null;
    };
  };
  content: {
    sha?: string;
    url?: string;
    name?: string;
    path?: string;
    size?: number;
    type?: string;
    _links?: {
      git?: string;
      html?: string;
      self?: string;
    };
    git_url?: string;
    html_url?: string;
    download_url?: string;
  } | null;
};

/**
 * Gist Commit
 */
export type GistCommit = {
  /**
   *
   * @example
   * "https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f"
   */
  url: string;
  user: SimpleUser | null;

  /**
   *
   * @example
   * "57a7f021a713b1c5a6a199b54cc514735d2d462f"
   */
  version: string;

  /**
   *
   * @example
   * "2010-04-14T02:15:15Z"
   */
  committed_at: string;
  change_status: {
    total?: number;
    additions?: number;
    deletions?: number;
  };
};

/**
 * Gist Simple
 */
export type GistSimple = {
  id?: string;
  url?: string;
  user?: string | null;
  files?: Record<
    string,
    {
      size?: number;
      type?: string;
      content?: string;
      raw_url?: string;
      filename?: string;
      language?: string;
      truncated?: boolean;
    } | null
  >;

  /**
   * @deprecated
   */
  forks?: Array<{
    id?: string;
    url?: string;
    user?: PublicUser;
    created_at?: string;
    updated_at?: string;
  }> | null;
  owner?: SimpleUser;
  public?: boolean;

  /**
   * Gist
   */
  fork_of?: {
    id: string;
    url: string;
    user: SimpleUser | null;
    files: Record<
      string,
      {
        size?: number;
        type?: string;
        raw_url?: string;
        filename?: string;
        language?: string;
      }
    >;
    forks?: Array<{}>;
    owner?: SimpleUser | null;
    public: boolean;
    history?: Array<{}>;
    node_id: string;
    comments: number;
    html_url: string;
    forks_url: string;
    truncated?: boolean;
    created_at: string;
    updated_at: string;
    commits_url: string;
    description: string | null;
    comments_url: string;
    git_pull_url: string;
    git_push_url: string;
  } | null;

  /**
   * @deprecated
   */
  history?: Array<GistHistory> | null;
  node_id?: string;
  comments?: number;
  html_url?: string;
  forks_url?: string;
  truncated?: boolean;
  created_at?: string;
  updated_at?: string;
  commits_url?: string;
  description?: string | null;
  comments_url?: string;
  git_pull_url?: string;
  git_push_url?: string;
};

/**
 * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
 * @example @see https://apihero.run/integrations/github/examples/integration
 */
export type Integration = {
  /**
   * Unique identifier of the GitHub app
   *
   * @example
   * 37
   */
  id: number;

  /**
   *
   * @example
   * "\"-----BEGIN RSA PRIVATE KEY-----\\nMIIEogIBAAKCAQEArYxrNYD/iT5CZVpRJu4rBKmmze3PVmT/gCo2ATUvDvZTPTey\\nxcGJ3vvrJXazKk06pN05TN29o98jrYz4cengG3YGsXPNEpKsIrEl8NhbnxapEnM9\\nJCMRe0P5JcPsfZlX6hmiT7136GRWiGOUba2X9+HKh8QJVLG5rM007TBER9/z9mWm\\nrJuNh+m5l320oBQY/Qq3A7wzdEfZw8qm/mIN0FCeoXH1L6B8xXWaAYBwhTEh6SSn\\nZHlO1Xu1JWDmAvBCi0RO5aRSKM8q9QEkvvHP4yweAtK3N8+aAbZ7ovaDhyGz8r6r\\nzhU1b8Uo0Z2ysf503WqzQgIajr7Fry7/kUwpgQIDAQABAoIBADwJp80Ko1xHPZDy\\nfcCKBDfIuPvkmSW6KumbsLMaQv1aGdHDwwTGv3t0ixSay8CGlxMRtRDyZPib6SvQ\\n6OH/lpfpbMdW2ErkksgtoIKBVrDilfrcAvrNZu7NxRNbhCSvN8q0s4ICecjbbVQh\\nnueSdlA6vGXbW58BHMq68uRbHkP+k+mM9U0mDJ1HMch67wlg5GbayVRt63H7R2+r\\nVxcna7B80J/lCEjIYZznawgiTvp3MSanTglqAYi+m1EcSsP14bJIB9vgaxS79kTu\\noiSo93leJbBvuGo8QEiUqTwMw4tDksmkLsoqNKQ1q9P7LZ9DGcujtPy4EZsamSJT\\ny8OJt0ECgYEA2lxOxJsQk2kI325JgKFjo92mQeUObIvPfSNWUIZQDTjniOI6Gv63\\nGLWVFrZcvQBWjMEQraJA9xjPbblV8PtfO87MiJGLWCHFxmPz2dzoedN+2Coxom8m\\nV95CLz8QUShuao6u/RYcvUaZEoYs5bHcTmy5sBK80JyEmafJPtCQVxMCgYEAy3ar\\nZr3yv4xRPEPMat4rseswmuMooSaK3SKub19WFI5IAtB/e7qR1Rj9JhOGcZz+OQrl\\nT78O2OFYlgOIkJPvRMrPpK5V9lslc7tz1FSh3BZMRGq5jSyD7ETSOQ0c8T2O/s7v\\nbeEPbVbDe4mwvM24XByH0GnWveVxaDl51ABD65sCgYB3ZAspUkOA5egVCh8kNpnd\\nSd6SnuQBE3ySRlT2WEnCwP9Ph6oPgn+oAfiPX4xbRqkL8q/k0BdHQ4h+zNwhk7+h\\nWtPYRAP1Xxnc/F+jGjb+DVaIaKGU18MWPg7f+FI6nampl3Q0KvfxwX0GdNhtio8T\\nTj1E+SnFwh56SRQuxSh2gwKBgHKjlIO5NtNSflsUYFM+hyQiPiqnHzddfhSG+/3o\\nm5nNaSmczJesUYreH5San7/YEy2UxAugvP7aSY2MxB+iGsiJ9WD2kZzTUlDZJ7RV\\nUzWsoqBR+eZfVJ2FUWWvy8TpSG6trh4dFxImNtKejCR1TREpSiTV3Zb1dmahK9GV\\nrK9NAoGAbBxRLoC01xfxCTgt5BDiBcFVh4fp5yYKwavJPLzHSpuDOrrI9jDn1oKN\\nonq5sDU1i391zfQvdrbX4Ova48BN+B7p63FocP/MK5tyyBoT8zQEk2+vWDOw7H/Z\\nu5dTCPxTIsoIwUw1I+7yIxqJzLPFgR2gVBwY1ra/8iAqCj+zeBw=\\n-----END RSA PRIVATE KEY-----\\n\""
   */
  pem?: string;

  /**
   * The name of the GitHub app
   *
   * @example
   * "Probot Owners"
   */
  name: string;

  /**
   * The slug name of the GitHub app
   *
   * @example
   * "probot-owners"
   */
  slug?: string;
  owner: SimpleUser | null;

  /**
   * The list of events for the GitHub app
   *
   * @example
   * ["label"]
   *
   * @example
   * ["deployment"]
   */
  events: Array<string>;

  /**
   *
   * @example
   * "MDExOkludGVncmF0aW9uMQ=="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/apps/super-ci"
   */
  html_url: string;

  /**
   *
   * @example
   * "\"Iv1.25b5d1e65ffc4022\""
   */
  client_id?: string;

  /**
   *
   * @example
   * "2017-07-08T16:18:44-04:00"
   */
  created_at: string;

  /**
   *
   * @example
   * "2017-07-08T16:18:44-04:00"
   */
  updated_at: string;

  /**
   *
   * @example
   * "The description of the app."
   */
  description: string | null;

  /**
   * The set of permissions for the GitHub app
   */
  permissions: {
    checks?: string;
    issues?: string;
    contents?: string;
    metadata?: string;
    deployments?: string;

    [key: string]: string;
  };

  /**
   *
   * @example
   * "https://example.com"
   */
  external_url: string;

  /**
   *
   * @example
   * "\"1d4b2097ac622ba702d19de498f005747a8b21d3\""
   */
  client_secret?: string;

  /**
   *
   * @example
   * "\"6fba8f2fc8a7e8f2cca5577eddd82ca7586b3b6b\""
   */
  webhook_secret?: string | null;

  /**
   * The number of installations associated with the GitHub app
   *
   * @example
   * 5
   */
  installations_count?: number;
};

/**
 * Issue Event
 * @example @see https://apihero.run/integrations/github/examples/issue-event
 */
export type IssueEvent = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/events/1"
   */
  url: string;
  actor: SimpleUser | null;

  /**
   *
   * @example
   * "closed"
   */
  event: string;
  issue?: Issue | null;
  label?: IssueEventLabel;
  rename?: IssueEventRename;

  /**
   *
   * @example
   * "MDEwOklzc3VlRXZlbnQx"
   */
  node_id: string;
  assignee?: SimpleUser | null;
  assigner?: SimpleUser | null;

  /**
   *
   * @example
   * "6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  commit_id: string | null;
  milestone?: IssueEventMilestone;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  commit_url: string | null;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  created_at: string;
  lock_reason?: string | null;
  project_card?: IssueEventProjectCard;
  requested_team?: Team;
  dismissed_review?: IssueEventDismissedReview;
  review_requester?: SimpleUser | null;
  author_association?: AuthorAssociation;
  requested_reviewer?: SimpleUser | null;
  performed_via_github_app?: Integration | null;
};

/**
 * Public User
 */
export type PublicUser = {
  id: number;
  bio: string | null;
  url: string;
  blog: string | null;
  name: string | null;
  plan?: {
    name: string;
    space: number;
    collaborators: number;
    private_repos: number;
  };
  type: string;
  email: string | null;
  login: string;
  company: string | null;
  node_id: string;
  hireable: boolean | null;
  html_url: string;
  location: string | null;
  followers: number;
  following: number;
  gists_url: string;
  repos_url: string;
  avatar_url: string;
  created_at: string;

  /**
   *
   * @example
   * 1
   */
  disk_usage?: number;
  events_url: string;
  site_admin: boolean;
  updated_at: string;
  gravatar_id: string | null;
  starred_url: string;
  public_gists: number;
  public_repos: number;
  suspended_at?: string | null;

  /**
   *
   * @example
   * 3
   */
  collaborators?: number;
  followers_url: string;
  following_url: string;

  /**
   *
   * @example
   * 1
   */
  private_gists?: number;
  twitter_username?: string | null;
  organizations_url: string;
  subscriptions_url: string;

  /**
   *
   * @example
   * 2
   */
  owned_private_repos?: number;
  received_events_url: string;

  /**
   *
   * @example
   * 2
   */
  total_private_repos?: number;
};

/**
 * Simple User
 */
export type SimpleUser = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat"
   */
  url: string;
  name?: string | null;

  /**
   *
   * @example
   * "User"
   */
  type: string;
  email?: string | null;

  /**
   *
   * @example
   * "octocat"
   */
  login: string;

  /**
   *
   * @example
   * "MDQ6VXNlcjE="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat"
   */
  html_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/gists{/gist_id}"
   */
  gists_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/repos"
   */
  repos_url: string;

  /**
   *
   * @example
   * "https://github.com/images/error/octocat_happy.gif"
   */
  avatar_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/events{/privacy}"
   */
  events_url: string;
  site_admin: boolean;

  /**
   *
   * @example
   * "\"2020-07-09T00:17:55Z\""
   */
  starred_at?: string;

  /**
   *
   * @example
   * "41d064eb2195891e12d0413f63227ea7"
   */
  gravatar_id: string | null;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/starred{/owner}{/repo}"
   */
  starred_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/followers"
   */
  followers_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/following{/other_user}"
   */
  following_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/orgs"
   */
  organizations_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/subscriptions"
   */
  subscriptions_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/received_events"
   */
  received_events_url: string;
};

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export type TeamSimple = {
  /**
   * Unique identifier of the team
   *
   * @example
   * 1
   */
  id: number;

  /**
   * URL for the team
   *
   * @example
   * "https://api.github.com/organizations/1/team/1"
   */
  url: string;

  /**
   * Name of the team
   *
   * @example
   * "Justice League"
   */
  name: string;

  /**
   *
   * @example
   * "justice-league"
   */
  slug: string;

  /**
   * Distinguished Name (DN) that team maps to within LDAP environment
   *
   * @example
   * "uid=example,ou=users,dc=github,dc=com"
   */
  ldap_dn?: string;

  /**
   *
   * @example
   * "MDQ6VGVhbTE="
   */
  node_id: string;

  /**
   * The level of privacy this team should have
   *
   * @example
   * "closed"
   */
  privacy?: string;

  /**
   *
   * @example
   * "https://github.com/orgs/rails/teams/core"
   */
  html_url: string;

  /**
   * Permission that the team will have for its repositories
   *
   * @example
   * "admin"
   */
  permission: string;

  /**
   * Description of the team
   *
   * @example
   * "A great team."
   */
  description: string | null;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/1/members{/member}"
   */
  members_url: string;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/1/repos"
   */
  repositories_url: string;
};

/**
 * The security alert number.
 */
export type AlertNumber = number;

/**
 * Api Overview
 * @example @see https://apihero.run/integrations/github/examples/api-overview
 */
export type ApiOverview = {
  /**
   *
   * @example
   * ["127.0.0.1/32"]
   */
  api?: Array<string>;

  /**
   *
   * @example
   * ["127.0.0.1/32"]
   */
  git?: Array<string>;

  /**
   *
   * @example
   * ["127.0.0.1/32"]
   */
  web?: Array<string>;

  /**
   *
   * @example
   * ["127.0.0.1/32"]
   */
  hooks?: Array<string>;

  /**
   *
   * @example
   * ["192.30.252.153/32"]
   *
   * @example
   * ["192.30.252.154/32"]
   */
  pages?: Array<string>;

  /**
   *
   * @example
   * ["13.64.0.0/16"]
   *
   * @example
   * ["13.65.0.0/16"]
   */
  actions?: Array<string>;

  /**
   *
   * @example
   * ["54.158.161.132"]
   *
   * @example
   * ["54.226.70.38"]
   */
  importer?: Array<string>;

  /**
   *
   * @example
   * ["13.65.0.0/16"]
   *
   * @example
   * ["157.55.204.33/32"]
   *
   * @example
   * ["2a01:111:f403:f90c::/62"]
   */
  packages?: Array<string>;

  /**
   *
   * @example
   * ["ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl"]
   */
  ssh_keys?: Array<string>;

  /**
   *
   * @example
   * ["192.168.7.15/32"]
   *
   * @example
   * ["192.168.7.16/32"]
   */
  dependabot?: Array<string>;
  ssh_key_fingerprints?: {
    SHA256_DSA?: string;
    SHA256_RSA?: string;
    SHA256_ECDSA?: string;
    SHA256_ED25519?: string;
  };

  /**
   *
   * @example
   * true
   */
  verifiable_password_authentication: boolean;
};

/**
 * Branch Short
 */
export type BranchShort = {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
};

/**
 * Collaborator
 */
export type Collaborator = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat"
   */
  url: string;
  name?: string | null;

  /**
   *
   * @example
   * "User"
   */
  type: string;
  email?: string | null;

  /**
   *
   * @example
   * "octocat"
   */
  login: string;

  /**
   *
   * @example
   * "MDQ6VXNlcjE="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat"
   */
  html_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/gists{/gist_id}"
   */
  gists_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/repos"
   */
  repos_url: string;

  /**
   *
   * @example
   * "admin"
   */
  role_name: string;

  /**
   *
   * @example
   * "https://github.com/images/error/octocat_happy.gif"
   */
  avatar_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/events{/privacy}"
   */
  events_url: string;
  site_admin: boolean;

  /**
   *
   * @example
   * "41d064eb2195891e12d0413f63227ea7"
   */
  gravatar_id: string | null;
  permissions?: {
    pull: boolean;
    push: boolean;
    admin: boolean;
    triage?: boolean;
    maintain?: boolean;
  };

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/starred{/owner}{/repo}"
   */
  starred_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/followers"
   */
  followers_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/following{/other_user}"
   */
  following_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/orgs"
   */
  organizations_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/subscriptions"
   */
  subscriptions_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/received_events"
   */
  received_events_url: string;
};

/**
 * Content File
 * @example @see https://apihero.run/integrations/github/examples/content-file
 */
export type ContentFile = {
  sha: string;
  url: string;
  name: string;
  path: string;
  size: number;
  type: string;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };

  /**
   *
   * @example
   * "\"actual/actual.md\""
   */
  target?: string;
  content: string;
  git_url: string | null;
  encoding: string;
  html_url: string | null;
  download_url: string | null;

  /**
   *
   * @example
   * "\"git://example.com/defunkt/dotjs.git\""
   */
  submodule_git_url?: string;
};

/**
 * Content Tree
 */
export type ContentTree = {
  sha: string;
  url: string;
  name: string;
  path: string;
  size: number;
  type: string;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
  entries?: Array<{
    sha: string;
    url: string;
    name: string;
    path: string;
    size: number;
    type: string;
    _links: {
      git: string | null;
      html: string | null;
      self: string;
    };
    content?: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
  }>;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
};

/**
 * An object without any properties.
 */
export type EmptyObject = {};

/**
 * A comment made to a gist.
 * @example @see https://apihero.run/integrations/github/examples/gist-comment
 */
export type GistComment = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/gists/a6db0bec360bb87e9418/comments/1"
   */
  url: string;

  /**
   * The comment text.
   *
   * @example
   * "Body of the attachment"
   */
  body: string;
  user: SimpleUser | null;

  /**
   *
   * @example
   * "MDExOkdpc3RDb21tZW50MQ=="
   */
  node_id: string;

  /**
   *
   * @example
   * "2011-04-18T23:23:56Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-04-18T23:23:56Z"
   */
  updated_at: string;
  author_association: AuthorAssociation;
};

/**
 * Gist History
 */
export type GistHistory = {
  url?: string;
  user?: SimpleUser | null;
  version?: string;
  committed_at?: string;
  change_status?: {
    total?: number;
    additions?: number;
    deletions?: number;
  };
};

/**
 * Installation
 * @example @see https://apihero.run/integrations/github/examples/installation
 */
export type Installation = {
  /**
   * The ID of the installation.
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * 1
   */
  app_id: number;
  events: Array<string>;
  account: SimpleUser | Enterprise;

  /**
   *
   * @example
   * "github-actions"
   */
  app_slug: string;

  /**
   *
   * @example
   * "https://github.com/organizations/github/settings/installations/1"
   */
  html_url: string;

  /**
   * The ID of the user or organization this token is being scoped to.
   */
  target_id: number;
  created_at: string;
  updated_at: string;
  permissions: AppPermissions;

  /**
   *
   * @example
   * "Organization"
   */
  target_type: string;
  suspended_at: string | null;
  suspended_by: SimpleUser | null;

  /**
   *
   * @example
   * "\"test_13f1e99741e3e004@d7e1eb0bc0a1ba12.com\""
   */
  contact_email?: string | null;

  /**
   *
   * @example
   * "https://api.github.com/installation/repositories"
   */
  repositories_url: string;

  /**
   *
   * @example
   * "config.yaml"
   */
  single_file_name: string | null;

  /**
   *
   * @example
   * "https://api.github.com/installations/1/access_tokens"
   */
  access_tokens_url: string;

  /**
   *
   * @example
   * ["config.yml"]
   *
   * @example
   * [".github/issue_TEMPLATE.md"]
   */
  single_file_paths?: Array<string>;

  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection: "all" | "selected";

  /**
   *
   * @example
   * true
   */
  has_multiple_single_files?: boolean;
};

/**
 * Private User
 * @example @see https://apihero.run/integrations/github/examples/private-user
 */
export type PrivateUser = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "There once was..."
   */
  bio: string | null;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat"
   */
  url: string;

  /**
   *
   * @example
   * "https://github.com/blog"
   */
  blog: string | null;

  /**
   *
   * @example
   * "monalisa octocat"
   */
  name: string | null;
  plan?: {
    name: string;
    space: number;
    collaborators: number;
    private_repos: number;
  };

  /**
   *
   * @example
   * "User"
   */
  type: string;

  /**
   *
   * @example
   * "octocat@github.com"
   */
  email: string | null;

  /**
   *
   * @example
   * "octocat"
   */
  login: string;

  /**
   *
   * @example
   * "GitHub"
   */
  company: string | null;
  ldap_dn?: string;

  /**
   *
   * @example
   * "MDQ6VXNlcjE="
   */
  node_id: string;
  hireable: boolean | null;

  /**
   *
   * @example
   * "https://github.com/octocat"
   */
  html_url: string;

  /**
   *
   * @example
   * "San Francisco"
   */
  location: string | null;

  /**
   *
   * @example
   * 20
   */
  followers: number;

  /**
   *
   * @example
   * 0
   */
  following: number;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/gists{/gist_id}"
   */
  gists_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/repos"
   */
  repos_url: string;

  /**
   *
   * @example
   * "https://github.com/images/error/octocat_happy.gif"
   */
  avatar_url: string;

  /**
   *
   * @example
   * "2008-01-14T04:33:35Z"
   */
  created_at: string;

  /**
   *
   * @example
   * 10000
   */
  disk_usage: number;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/events{/privacy}"
   */
  events_url: string;
  site_admin: boolean;

  /**
   *
   * @example
   * "2008-01-14T04:33:35Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "41d064eb2195891e12d0413f63227ea7"
   */
  gravatar_id: string | null;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/starred{/owner}{/repo}"
   */
  starred_url: string;

  /**
   *
   * @example
   * 1
   */
  public_gists: number;

  /**
   *
   * @example
   * 2
   */
  public_repos: number;
  suspended_at?: string | null;
  business_plus?: boolean;

  /**
   *
   * @example
   * 8
   */
  collaborators: number;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/followers"
   */
  followers_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/following{/other_user}"
   */
  following_url: string;

  /**
   *
   * @example
   * 81
   */
  private_gists: number;

  /**
   *
   * @example
   * "monalisa"
   */
  twitter_username?: string | null;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/orgs"
   */
  organizations_url: string;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/subscriptions"
   */
  subscriptions_url: string;

  /**
   *
   * @example
   * 100
   */
  owned_private_repos: number;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/received_events"
   */
  received_events_url: string;

  /**
   *
   * @example
   * 100
   */
  total_private_repos: number;

  /**
   *
   * @example
   * true
   */
  two_factor_authentication: boolean;
};

/**
 * Project cards represent a scope of work.
 * @example @see https://apihero.run/integrations/github/examples/project-card
 */
export type ProjectCard = {
  /**
   * The project card's ID
   *
   * @example
   * 42
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/projects/columns/cards/1478"
   */
  url: string;

  /**
   *
   * @example
   * "Add payload for delete Project column"
   */
  note: string | null;
  creator: SimpleUser | null;

  /**
   *
   * @example
   * "MDExOlByb2plY3RDYXJkMTQ3OA=="
   */
  node_id: string;

  /**
   * Whether or not the card is archived
   *
   * @example
   * false
   */
  archived?: boolean;

  /**
   *
   * @example
   * "https://api.github.com/projects/columns/367"
   */
  column_url: string;

  /**
   *
   * @example
   * "2016-09-05T14:21:06Z"
   */
  created_at: string;
  project_id?: string;

  /**
   *
   * @example
   * "2016-09-05T14:20:22Z"
   */
  updated_at: string;
  column_name?: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/api-playground/projects-test/issues/3"
   */
  content_url?: string;

  /**
   *
   * @example
   * "https://api.github.com/projects/120"
   */
  project_url: string;
};

/**
 * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
 * @example @see https://apihero.run/integrations/github/examples/pull-request
 */
export type PullRequest = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1347"
   */
  url: string;
  base: {
    ref: string;
    sha: string;
    repo: {
      id: number;
      url: string;
      fork: boolean;
      name: string;
      size: number;
      forks: number;
      owner: {
        id: number;
        url: string;
        type: string;
        login: string;
        node_id: string;
        html_url: string;
        gists_url: string;
        repos_url: string;
        avatar_url: string;
        events_url: string;
        site_admin: boolean;
        gravatar_id: string | null;
        starred_url: string;
        followers_url: string;
        following_url: string;
        organizations_url: string;
        subscriptions_url: string;
        received_events_url: string;
      };
      topics?: Array<string>;
      git_url: string;
      license: LicenseSimple | null;
      node_id: string;
      private: boolean;
      ssh_url: string;
      svn_url: string;
      archived: boolean;
      disabled: boolean;
      has_wiki: boolean;
      homepage: string | null;
      html_url: string;
      keys_url: string;
      language: string | null;
      tags_url: string;
      watchers: number;
      blobs_url: string;
      clone_url: string;
      forks_url: string;
      full_name: string;
      has_pages: boolean;
      hooks_url: string;
      pulls_url: string;
      pushed_at: string;
      teams_url: string;
      trees_url: string;
      created_at: string;
      events_url: string;
      has_issues: boolean;
      issues_url: string;
      labels_url: string;
      merges_url: string;
      mirror_url: string | null;
      updated_at: string;

      /**
       * The repository visibility: public, private, or internal.
       */
      visibility?: string;
      archive_url: string;
      commits_url: string;
      compare_url: string;
      description: string | null;
      forks_count: number;
      is_template?: boolean;
      open_issues: number;
      permissions?: {
        pull: boolean;
        push: boolean;
        admin: boolean;
        triage?: boolean;
        maintain?: boolean;
      };
      branches_url: string;
      comments_url: string;
      contents_url: string;
      git_refs_url: string;
      git_tags_url: string;
      has_projects: boolean;
      releases_url: string;
      statuses_url: string;
      allow_forking?: boolean;
      assignees_url: string;
      downloads_url: string;
      has_downloads: boolean;
      languages_url: string;
      master_branch?: string;
      default_branch: string;
      milestones_url: string;
      stargazers_url: string;
      watchers_count: number;
      deployments_url: string;
      git_commits_url: string;
      subscribers_url: string;
      contributors_url: string;
      issue_events_url: string;
      stargazers_count: number;
      subscription_url: string;
      temp_clone_token?: string;
      collaborators_url: string;
      issue_comment_url: string;
      notifications_url: string;
      open_issues_count: number;
      allow_merge_commit?: boolean;
      allow_rebase_merge?: boolean;
      allow_squash_merge?: boolean;
    };
    user: {
      id: number;
      url: string;
      type: string;
      login: string;
      node_id: string;
      html_url: string;
      gists_url: string;
      repos_url: string;
      avatar_url: string;
      events_url: string;
      site_admin: boolean;
      gravatar_id: string | null;
      starred_url: string;
      followers_url: string;
      following_url: string;
      organizations_url: string;
      subscriptions_url: string;
      received_events_url: string;
    };
    label: string;
  };

  /**
   *
   * @example
   * "Please pull these awesome changes"
   */
  body: string | null;
  head: {
    ref: string;
    sha: string;
    repo: {
      id: number;
      url: string;
      fork: boolean;
      name: string;
      size: number;
      forks: number;
      owner: {
        id: number;
        url: string;
        type: string;
        login: string;
        node_id: string;
        html_url: string;
        gists_url: string;
        repos_url: string;
        avatar_url: string;
        events_url: string;
        site_admin: boolean;
        gravatar_id: string | null;
        starred_url: string;
        followers_url: string;
        following_url: string;
        organizations_url: string;
        subscriptions_url: string;
        received_events_url: string;
      };
      topics?: Array<string>;
      git_url: string;
      license: {
        key: string;
        url: string | null;
        name: string;
        node_id: string;
        spdx_id: string | null;
      } | null;
      node_id: string;
      private: boolean;
      ssh_url: string;
      svn_url: string;
      archived: boolean;
      disabled: boolean;
      has_wiki: boolean;
      homepage: string | null;
      html_url: string;
      keys_url: string;
      language: string | null;
      tags_url: string;
      watchers: number;
      blobs_url: string;
      clone_url: string;
      forks_url: string;
      full_name: string;
      has_pages: boolean;
      hooks_url: string;
      pulls_url: string;
      pushed_at: string;
      teams_url: string;
      trees_url: string;
      created_at: string;
      events_url: string;
      has_issues: boolean;
      issues_url: string;
      labels_url: string;
      merges_url: string;
      mirror_url: string | null;
      updated_at: string;

      /**
       * The repository visibility: public, private, or internal.
       */
      visibility?: string;
      archive_url: string;
      commits_url: string;
      compare_url: string;
      description: string | null;
      forks_count: number;
      is_template?: boolean;
      open_issues: number;
      permissions?: {
        pull: boolean;
        push: boolean;
        admin: boolean;
        triage?: boolean;
        maintain?: boolean;
      };
      branches_url: string;
      comments_url: string;
      contents_url: string;
      git_refs_url: string;
      git_tags_url: string;
      has_projects: boolean;
      releases_url: string;
      statuses_url: string;
      allow_forking?: boolean;
      assignees_url: string;
      downloads_url: string;
      has_downloads: boolean;
      languages_url: string;
      master_branch?: string;
      default_branch: string;
      milestones_url: string;
      stargazers_url: string;
      watchers_count: number;
      deployments_url: string;
      git_commits_url: string;
      subscribers_url: string;
      contributors_url: string;
      issue_events_url: string;
      stargazers_count: number;
      subscription_url: string;
      temp_clone_token?: string;
      collaborators_url: string;
      issue_comment_url: string;
      notifications_url: string;
      open_issues_count: number;
      allow_merge_commit?: boolean;
      allow_rebase_merge?: boolean;
      allow_squash_merge?: boolean;
    } | null;
    user: {
      id: number;
      url: string;
      type: string;
      login: string;
      node_id: string;
      html_url: string;
      gists_url: string;
      repos_url: string;
      avatar_url: string;
      events_url: string;
      site_admin: boolean;
      gravatar_id: string | null;
      starred_url: string;
      followers_url: string;
      following_url: string;
      organizations_url: string;
      subscriptions_url: string;
      received_events_url: string;
    };
    label: string;
  };
  user: SimpleUser | null;

  /**
   * Indicates whether or not the pull request is a draft.
   *
   * @example
   * false
   */
  draft?: boolean;

  /**
   * State of this Pull Request. Either `open` or `closed`.
   *
   * @example
   * "open"
   */
  state: "open" | "closed";

  /**
   * The title of the pull request.
   *
   * @example
   * "Amazing new feature"
   */
  title: string;
  _links: {
    html: Link;
    self: Link;
    issue: Link;
    commits: Link;
    comments: Link;
    statuses: Link;
    review_comment: Link;
    review_comments: Link;
  };
  labels: Array<{
    id: number;
    url: string;
    name: string;
    color: string;
    default: boolean;
    node_id: string;
    description: string | null;
  }>;

  /**
   *
   * @example
   * true
   */
  locked: boolean;
  merged: boolean;

  /**
   * Number uniquely identifying the pull request within its repository.
   *
   * @example
   * 42
   */
  number: number;

  /**
   *
   * @example
   * 3
   */
  commits: number;

  /**
   *
   * @example
   * "MDExOlB1bGxSZXF1ZXN0MQ=="
   */
  node_id: string;
  assignee: SimpleUser | null;

  /**
   *
   * @example
   * 10
   */
  comments: number;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1347.diff"
   */
  diff_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1347"
   */
  html_url: string;

  /**
   *
   * @example
   * 100
   */
  additions: number;
  assignees?: Array<SimpleUser> | null;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  closed_at: string | null;

  /**
   *
   * @example
   * 3
   */
  deletions: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/1347"
   */
  issue_url: string;

  /**
   *
   * @example
   * true
   */
  mergeable: boolean | null;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  merged_at: string | null;
  merged_by: SimpleUser | null;
  milestone: Milestone | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1347.patch"
   */
  patch_url: string;
  auto_merge: AutoMerge;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at: string;

  /**
   *
   * @example
   * true
   */
  rebaseable?: boolean | null;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits"
   */
  commits_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments"
   */
  comments_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  statuses_url: string;

  /**
   *
   * @example
   * 5
   */
  changed_files: number;

  /**
   *
   * @example
   * "clean"
   */
  mergeable_state: string;
  requested_teams?: Array<TeamSimple> | null;

  /**
   *
   * @example
   * 0
   */
  review_comments: number;

  /**
   *
   * @example
   * "e5bd3914e2e596debea16f433f57875b5b90bcd6"
   */
  merge_commit_sha: string | null;

  /**
   *
   * @example
   * "too heated"
   */
  active_lock_reason?: string | null;
  author_association: AuthorAssociation;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}"
   */
  review_comment_url: string;
  requested_reviewers?: Array<SimpleUser> | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments"
   */
  review_comments_url: string;

  /**
   * Indicates whether maintainers can modify the pull request.
   *
   * @example
   * true
   */
  maintainer_can_modify: boolean;
};

/**
 * A label for a self hosted runner
 */
export type RunnerLabel = {
  /**
   * Unique identifier of the label.
   */
  id?: number;

  /**
   * Name of the label.
   */
  name: string;

  /**
   * The type of label. Read-only labels are applied automatically when the runner is configured.
   */
  type?: "read-only" | "custom";
};

/**
 * Short Branch
 */
export type ShortBranch = {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
  protection?: BranchProtection;
  protection_url?: string;
};

/**
 * A team's access to a project.
 * @example @see https://apihero.run/integrations/github/examples/team-project
 */
export type TeamProject = {
  id: number;
  url: string;
  body: string | null;
  name: string;
  state: string;
  number: number;
  creator: SimpleUser;
  node_id: string;

  /**
   * Whether the project is private or not. Only present when owner is an organization.
   */
  private?: boolean;
  html_url: string;
  owner_url: string;
  created_at: string;
  updated_at: string;
  columns_url: string;
  permissions: {
    read: boolean;
    admin: boolean;
    write: boolean;
  };

  /**
   * The organization permission for this project. Only present when owner is an organization.
   */
  organization_permission?: string;
};

export type Verification = {
  reason: string;
  payload: string | null;
  verified: boolean;
  signature: string | null;
};

/**
 * View Traffic
 * @example @see https://apihero.run/integrations/github/examples/view-traffic
 */
export type ViewTraffic = {
  /**
   *
   * @example
   * 14850
   */
  count: number;
  views: Array<Traffic>;

  /**
   *
   * @example
   * 3782
   */
  uniques: number;
};

/**
 * An invocation of a workflow
 * @example @see https://apihero.run/integrations/github/examples/workflow-run
 */
export type WorkflowRun = {
  /**
   * The ID of the workflow run.
   *
   * @example
   * 5
   */
  id: number;

  /**
   * The URL to the workflow run.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5"
   */
  url: string;

  /**
   * The name of the workflow run.
   *
   * @example
   * "Build"
   */
  name?: string | null;

  /**
   * The full path of the workflow
   *
   * @example
   * "octocat/octo-repo/.github/workflows/ci.yml@main"
   */
  path: string;
  actor?: SimpleUser;

  /**
   *
   * @example
   * "push"
   */
  event: string;

  /**
   *
   * @example
   * "completed"
   */
  status: string | null;

  /**
   *
   * @example
   * "MDEwOkNoZWNrU3VpdGU1"
   */
  node_id: string;

  /**
   * The SHA of the head commit that points to the version of the workflow being run.
   *
   * @example
   * "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d"
   */
  head_sha: string;

  /**
   *
   * @example
   * "https://github.com/github/hello-world/suites/4"
   */
  html_url: string;

  /**
   * The URL to the jobs for the workflow run.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5/jobs"
   */
  jobs_url: string;

  /**
   * The URL to download the logs for the workflow run.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5/logs"
   */
  logs_url: string;

  /**
   * The URL to rerun the workflow run.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5/rerun"
   */
  rerun_url: string;

  /**
   * The URL to cancel the workflow run.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5/cancel"
   */
  cancel_url: string;

  /**
   *
   * @example
   * "neutral"
   */
  conclusion: string | null;
  created_at: string;
  repository: MinimalRepository;

  /**
   * The auto incrementing run number for the workflow run.
   *
   * @example
   * 106
   */
  run_number: number;
  updated_at: string;

  /**
   *
   * @example
   * "master"
   */
  head_branch: string | null;
  head_commit: SimpleCommit | null;

  /**
   * Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.
   *
   * @example
   * 1
   */
  run_attempt?: number;

  /**
   * The ID of the parent workflow.
   *
   * @example
   * 5
   */
  workflow_id: number;

  /**
   * The URL to the workflow.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/workflows/main.yaml"
   */
  workflow_url: string;

  /**
   * The URL to the artifacts for the workflow run.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5/rerun/artifacts"
   */
  artifacts_url: string;
  pull_requests: Array<PullRequestMinimal> | null;

  /**
   * The ID of the associated check suite.
   *
   * @example
   * 42
   */
  check_suite_id?: number;

  /**
   * The start time of the latest run. Resets on re-run.
   */
  run_started_at?: string;

  /**
   * The URL to the associated check suite.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/check-suites/12"
   */
  check_suite_url: string;
  head_repository: MinimalRepository;
  triggering_actor?: SimpleUser;

  /**
   *
   * @example
   * 5
   */
  head_repository_id?: number;

  /**
   * The node ID of the associated check suite.
   *
   * @example
   * "MDEwOkNoZWNrU3VpdGU0Mg=="
   */
  check_suite_node_id?: string;

  /**
   * The URL to the previous attempted run of this workflow, if one exists.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/actions/runs/5/attempts/3"
   */
  previous_attempt_url?: string | null;
  referenced_workflows?: Array<ReferencedWorkflow> | null;
};

/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 * @example @see https://apihero.run/integrations/github/examples/authorization
 */
export type Authorization = {
  id: number;
  app: {
    url: string;
    name: string;
    client_id: string;
  };
  url: string;
  note: string | null;
  user?: SimpleUser | null;
  token: string;

  /**
   * A list of scopes that this authorization is in.
   */
  scopes: Array<string> | null;
  note_url: string | null;
  created_at: string;
  expires_at: string | null;
  updated_at: string;
  fingerprint: string | null;
  hashed_token: string | null;
  installation?: ScopedInstallation | null;
  token_last_eight: string | null;
};

/**
 * Clone Traffic
 * @example @see https://apihero.run/integrations/github/examples/clone-traffic
 */
export type CloneTraffic = {
  /**
   *
   * @example
   * 173
   */
  count: number;
  clones: Array<Traffic>;

  /**
   *
   * @example
   * 128
   */
  uniques: number;
};

/**
 * External Groups to be mapped to a team for membership
 * @example @see https://apihero.run/integrations/github/examples/group-mapping
 */
export type GroupMapping = {
  /**
   * Array of groups to be mapped to this team
   *
   * @example
   * [{
   *   "group_id": "111a1a11-aaa1-1aaa-11a1-a1a1a1a1a1aa",
   *   "group_name": "saml-azuread-test",
   *   "group_description": "A group of Developers working on AzureAD SAML SSO"
   * }]
   *
   * @example
   * [{
   *   "group_id": "2bb2bb2b-bb22-22bb-2bb2-bb2bbb2bb2b2",
   *   "group_name": "saml-azuread-test2",
   *   "group_description": "Another group of Developers working on AzureAD SAML SSO"
   * }]
   */
  groups?: Array<{
    /**
     * synchronization status for this group mapping
     *
     * @example
     * "unsynced"
     */
    status?: string;

    /**
     * The ID of the group
     *
     * @example
     * "111a1a11-aaa1-1aaa-11a1-a1a1a1a1a1aa"
     */
    group_id: string;

    /**
     * the time of the last sync for this group-mapping
     *
     * @example
     * "2019-06-03 22:27:15:000 -700"
     */
    synced_at?: string | null;

    /**
     * The name of the group
     *
     * @example
     * "saml-azuread-test"
     */
    group_name: string;

    /**
     * a description of the group
     *
     * @example
     * "A group of Developers working on AzureAD SAML SSO"
     */
    group_description: string;
  }>;
};

/**
 * Delivery made by a webhook.
 * @example @see https://apihero.run/integrations/github/examples/hook-delivery
 */
export type HookDelivery = {
  /**
   * Unique identifier of the delivery.
   *
   * @example
   * 42
   */
  id: number;

  /**
   * The URL target of the delivery.
   *
   * @example
   * "https://www.example.com"
   */
  url?: string;

  /**
   * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
   *
   * @example
   * "58474f00-b361-11eb-836d-0e4f3503ccbe"
   */
  guid: string;

  /**
   * The event that triggered the delivery.
   *
   * @example
   * "issues"
   */
  event: string;

  /**
   * The type of activity for the event that triggered the delivery.
   *
   * @example
   * "opened"
   */
  action: string | null;

  /**
   * Description of the status of the attempted delivery
   *
   * @example
   * "failed to connect"
   */
  status: string;
  request: {
    /**
     * The request headers sent with the webhook delivery.
     */
    headers: {} | null;

    /**
     * The webhook payload.
     */
    payload: {} | null;
  };

  /**
   * Time spent delivering.
   *
   * @example
   * 0.03
   */
  duration: number;
  response: {
    /**
     * The response headers received when the delivery was made.
     */
    headers: {} | null;

    /**
     * The response payload received.
     */
    payload: string | null;
  };

  /**
   * Whether the delivery is a redelivery.
   *
   * @example
   * false
   */
  redelivery: boolean;

  /**
   * Status code received when delivery was made.
   *
   * @example
   * 502
   */
  status_code: number;

  /**
   * Time when the delivery was delivered.
   *
   * @example
   * "2021-05-12T20:33:44Z"
   */
  delivered_at: string;

  /**
   * The id of the repository associated with this event.
   *
   * @example
   * 123
   */
  repository_id: number | null;

  /**
   * The id of the GitHub App installation associated with this event.
   *
   * @example
   * 123
   */
  installation_id: number | null;
};

export type HookResponse = {
  code: number | null;
  status: string | null;
  message: string | null;
};

/**
 * Comments provide a way for people to collaborate on an issue.
 * @example @see https://apihero.run/integrations/github/examples/issue-comment
 */
export type IssueComment = {
  /**
   * Unique identifier of the issue comment
   *
   * @example
   * 42
   */
  id: number;

  /**
   * URL for the issue comment
   *
   * @example
   * "https://api.github.com/repositories/42/issues/comments/1"
   */
  url: string;

  /**
   * Contents of the issue comment
   *
   * @example
   * "What version of Safari were you using when you observed this bug?"
   */
  body?: string;
  user: SimpleUser | null;
  node_id: string;
  html_url: string;
  body_html?: string;
  body_text?: string;
  issue_url: string;
  reactions?: ReactionRollup;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  updated_at: string;
  author_association: AuthorAssociation;
  performed_via_github_app?: Integration | null;
};

/**
 * Porter Author
 * @example @see https://apihero.run/integrations/github/examples/porter-author
 */
export type PorterAuthor = {
  id: number;
  url: string;
  name: string;
  email: string;
  remote_id: string;
  import_url: string;
  remote_name: string;
};

/**
 * Data related to a release.
 * @example @see https://apihero.run/integrations/github/examples/release-asset
 */
export type ReleaseAsset = {
  id: number;
  url: string;

  /**
   * The file name of the asset.
   *
   * @example
   * "Team Environment"
   */
  name: string;
  size: number;
  label: string | null;

  /**
   * State of the release asset.
   */
  state: "uploaded" | "open";
  node_id: string;
  uploader: SimpleUser | null;
  created_at: string;
  updated_at: string;
  content_type: string;
  download_count: number;
  browser_download_url: string;
};

/**
 * Simple Commit
 */
export type SimpleCommit = {
  id: string;
  author: {
    name: string;
    email: string;
  } | null;
  message: string;
  tree_id: string;
  committer: {
    name: string;
    email: string;
  } | null;
  timestamp: string;
};

/**
 * Set secrets for GitHub Actions.
 * @example @see https://apihero.run/integrations/github/examples/actions-secret
 */
export type ActionsSecret = {
  /**
   * The name of the secret.
   *
   * @example
   * "SECRET_TOKEN"
   */
  name: string;
  created_at: string;
  updated_at: string;
};

/**
 * The GitHub URL of the alert resource.
 */
export type AlertHtmlUrl = string;

/**
 * Commit Comment
 * @example @see https://apihero.run/integrations/github/examples/commit-comment
 */
export type CommitComment = {
  id: number;
  url: string;
  body: string;
  line: number | null;
  path: string | null;
  user: SimpleUser | null;
  node_id: string;
  html_url: string;
  position: number | null;
  commit_id: string;
  reactions?: ReactionRollup;
  created_at: string;
  updated_at: string;
  author_association: AuthorAssociation;
};

/**
 * Information about an external group's usage and its members
 * @example @see https://apihero.run/integrations/github/examples/external-group
 */
export type ExternalGroup = {
  /**
   * An array of teams linked to this group
   *
   * @example
   * [{
   *   "team_id": 1,
   *   "team_name": "team-test"
   * }]
   *
   * @example
   * [{
   *   "team_id": 2,
   *   "team_name": "team-test2"
   * }]
   */
  teams: Array<{
    /**
     * The id for a team
     *
     * @example
     * 1
     */
    team_id: number;

    /**
     * The name of the team
     *
     * @example
     * "team-test"
     */
    team_name: string;
  }>;

  /**
   * An array of external members linked to this group
   *
   * @example
   * [{
   *   "member_id": 1,
   *   "member_name": "Mona Lisa",
   *   "member_email": "mona_lisa@github.com",
   *   "member_login": "mona-lisa_eocsaxrs"
   * }]
   *
   * @example
   * [{
   *   "member_id": 2,
   *   "member_name": "Octo Lisa",
   *   "member_email": "octo_lisa@github.com",
   *   "member_login": "octo-lisa_eocsaxrs"
   * }]
   */
  members: Array<{
    /**
     * The internal user ID of the identity
     *
     * @example
     * 1
     */
    member_id: number;

    /**
     * The user display name/profile name
     *
     * @example
     * "Mona Lisa"
     */
    member_name: string;

    /**
     * An email attached to a user
     *
     * @example
     * "mona_lisa@github.com"
     */
    member_email: string;

    /**
     * The handle/login for the user
     *
     * @example
     * "mona-lisa_eocsaxrs"
     */
    member_login: string;
  }>;

  /**
   * The internal ID of the group
   *
   * @example
   * 1
   */
  group_id: number;

  /**
   * The display name for the group
   *
   * @example
   * "group-azuread-test"
   */
  group_name: string;

  /**
   * The date when the group was last updated_at
   *
   * @example
   * "2021-01-03 22:27:15:000 -700"
   */
  updated_at?: string;
};

/**
 * License Simple
 */
export type LicenseSimple = {
  /**
   *
   * @example
   * "mit"
   */
  key: string;

  /**
   *
   * @example
   * "https://api.github.com/licenses/mit"
   */
  url: string | null;

  /**
   *
   * @example
   * "MIT License"
   */
  name: string;

  /**
   *
   * @example
   * "MDc6TGljZW5zZW1pdA=="
   */
  node_id: string;

  /**
   *
   * @example
   * "MIT"
   */
  spdx_id: string | null;
  html_url?: string;
};

/**
 * Hypermedia Link with Type
 */
export type LinkWithType = {
  href: string;
  type: string;
};

/**
 * Org Membership
 * @example @see https://apihero.run/integrations/github/examples/org-membership
 */
export type OrgMembership = {
  /**
   *
   * @example
   * "https://api.github.com/orgs/octocat/memberships/defunkt"
   */
  url: string;

  /**
   * The user's membership type in the organization.
   *
   * @example
   * "admin"
   */
  role: "admin" | "member" | "billing_manager";
  user: SimpleUser | null;

  /**
   * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
   *
   * @example
   * "active"
   */
  state: "active" | "pending";
  permissions?: {
    can_create_repository: boolean;
  };
  organization: OrganizationSimple;

  /**
   *
   * @example
   * "https://api.github.com/orgs/octocat"
   */
  organization_url: string;
};

/**
 * Project columns contain cards of work.
 * @example @see https://apihero.run/integrations/github/examples/project-column
 */
export type ProjectColumn = {
  /**
   * The unique identifier of the project column
   *
   * @example
   * 42
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/projects/columns/367"
   */
  url: string;

  /**
   * Name of the project column
   *
   * @example
   * "Remaining tasks"
   */
  name: string;

  /**
   *
   * @example
   * "MDEzOlByb2plY3RDb2x1bW4zNjc="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://api.github.com/projects/columns/367/cards"
   */
  cards_url: string;

  /**
   *
   * @example
   * "2016-09-05T14:18:44Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2016-09-05T14:22:28Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "https://api.github.com/projects/120"
   */
  project_url: string;
};

/**
 * Legacy Review Comment
 */
export type ReviewComment = {
  /**
   *
   * @example
   * 10
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1"
   */
  url: string;

  /**
   *
   * @example
   * "Great stuff"
   */
  body: string;

  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   *
   * @example
   * 2
   */
  line?: number;

  /**
   *
   * @example
   * "file1.txt"
   */
  path: string;

  /**
   * The side of the first line of the range for a multi-line comment.
   */
  side?: "LEFT" | "RIGHT";
  user: SimpleUser | null;
  _links: {
    html: Link;
    self: Link;
    pull_request: Link;
  };

  /**
   *
   * @example
   * "MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw"
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1"
   */
  html_url: string;

  /**
   *
   * @example
   * 1
   */
  position: number | null;
  body_html?: string;
  body_text?: string;

  /**
   *
   * @example
   * "6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  commit_id: string;

  /**
   *
   * @example
   * "@@ -16,33 +16,40 @@ public class Connection : IConnection..."
   */
  diff_hunk: string;
  reactions?: ReactionRollup;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  created_at: string;

  /**
   * The first line of the range for a multi-line comment.
   *
   * @example
   * 2
   */
  start_line?: number | null;

  /**
   * The side of the first line of the range for a multi-line comment.
   */
  start_side?: "LEFT" | "RIGHT" | null;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  updated_at: string;

  /**
   * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
   *
   * @example
   * 2
   */
  original_line?: number;

  /**
   *
   * @example
   * 8
   */
  in_reply_to_id?: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1"
   */
  pull_request_url: string;

  /**
   *
   * @example
   * 4
   */
  original_position: number;
  author_association: AuthorAssociation;

  /**
   *
   * @example
   * "9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840"
   */
  original_commit_id: string;

  /**
   * The original first line of the range for a multi-line comment.
   *
   * @example
   * 2
   */
  original_start_line?: number | null;

  /**
   *
   * @example
   * 42
   */
  pull_request_review_id: number | null;
};

/**
 * SCIM User List
 */
export type ScimUserList = {
  /**
   * SCIM schema used.
   *
   * @example
   * ["urn:ietf:params:scim:api:messages:2.0:ListResponse"]
   */
  schemas: Array<string>;
  Resources: Array<ScimUser>;

  /**
   *
   * @example
   * 1
   */
  startIndex: number;

  /**
   *
   * @example
   * 10
   */
  itemsPerPage: number;

  /**
   *
   * @example
   * 3
   */
  totalResults: number;
};

/**
 * Tag protection
 * @example @see https://apihero.run/integrations/github/examples/tag-protection
 */
export type TagProtection = {
  /**
   *
   * @example
   * 2
   */
  id?: number;

  /**
   *
   * @example
   * true
   */
  enabled?: boolean;

  /**
   *
   * @example
   * "v1.*"
   */
  pattern: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at?: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  updated_at?: string;
};

/**
 * Configuration object of the webhook
 * @example @see https://apihero.run/integrations/github/examples/webhook-config
 */
export type WebhookConfig = {
  url?: WebhookConfigUrl;
  secret?: WebhookConfigSecret;
  content_type?: WebhookConfigContentType;
  insecure_ssl?: WebhookConfigInsecureSsl;
};

/**
 * Workflow Usage
 * @example @see https://apihero.run/integrations/github/examples/workflow-usage
 */
export type WorkflowUsage = {
  billable: {
    MACOS?: {
      total_ms?: number;
    };
    UBUNTU?: {
      total_ms?: number;
    };
    WINDOWS?: {
      total_ms?: number;
    };
  };
};

/**
 * Whether GitHub Actions is enabled on the repository.
 */
export type ActionsEnabled = boolean;

/**
 * The permissions policy that controls the actions and reusable workflows that are allowed to run.
 */
export type AllowedActions = "all" | "local_only" | "selected";

/**
 * The permissions granted to the user-to-server access token.
 */
export type AppPermissions = {
  /**
   * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
   */
  pages?: "read" | "write";

  /**
   * The level of permission to grant the access token for checks on code.
   */
  checks?: "read" | "write";

  /**
   * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.
   */
  issues?: "read" | "write";

  /**
   * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.
   */
  actions?: "read" | "write";

  /**
   * The level of permission to grant the access token for organization teams and members.
   */
  members?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage repository secrets.
   */
  secrets?: "read" | "write";

  /**
   * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.
   */
  contents?: "read" | "write";

  /**
   * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.
   */
  metadata?: "read" | "write";

  /**
   * The level of permission to grant the access token for packages published to GitHub Packages.
   */
  packages?: "read" | "write";

  /**
   * The level of permission to grant the access token for commit statuses.
   */
  statuses?: "read" | "write";

  /**
   * The level of permission to grant the access token to update GitHub Actions workflow files.
   */
  workflows?: "write";

  /**
   * The level of permission to grant the access token for deployments and deployment statuses.
   */
  deployments?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage just a single file.
   */
  single_file?: "read" | "write";

  /**
   * The level of permission to grant the access token for managing repository environments.
   */
  environments?: "read" | "write";

  /**
   * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.
   */
  pull_requests?: "read" | "write";

  /**
   * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.
   */
  administration?: "read" | "write";

  /**
   * The level of permission to grant the access token to view and manage security events like code scanning alerts.
   */
  security_events?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage the post-receive hooks for a repository.
   */
  repository_hooks?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage team discussions and related comments.
   */
  team_discussions?: "read" | "write";

  /**
   * The level of permission to grant the access token for viewing an organization's plan.
   */
  organization_plan?: "read";

  /**
   * The level of permission to grant the access token to manage the post-receive hooks for an organization.
   */
  organization_hooks?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage repository projects, columns, and cards.
   */
  repository_projects?: "read" | "write" | "admin";

  /**
   * The level of permission to grant the access token to manage organization secrets.
   */
  organization_secrets?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage Dependabot alerts.
   */
  vulnerability_alerts?: "read" | "write";

  /**
   * The level of permission to grant the access token for organization packages published to GitHub Packages.
   */
  organization_packages?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage organization projects and projects beta (where available).
   */
  organization_projects?: "read" | "write" | "admin";

  /**
   * The level of permission to grant the access token to view and manage secret scanning alerts.
   */
  secret_scanning_alerts?: "read" | "write";

  /**
   * The level of permission to grant the access token to view and manage users blocked by the organization.
   */
  organization_user_blocking?: "read" | "write";

  /**
   * The level of permission to grant the access token to manage access to an organization.
   */
  organization_administration?: "read" | "write";

  /**
   * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.
   */
  organization_self_hosted_runners?: "read" | "write";
};

export type AuditLogEvent = {
  org?: string;
  data?: {};
  name?: string;

  /**
   * The name of the repository.
   */
  repo?: string;
  team?: string;

  /**
   * The user that was affected by the action performed (if available).
   */
  user?: string;

  /**
   * The actor who performed the action.
   */
  actor?: string;
  emoji?: string;

  /**
   * The name of the action that was performed, for example `user.login` or `repo.create`.
   */
  action?: string;
  active?: boolean;
  config?: Array<{}>;
  events?: Array<{}>;
  org_id?: number;
  hook_id?: number;
  message?: string;

  /**
   * The id of the actor who performed the action.
   */
  actor_id?: number;
  business?: string;
  old_user?: string;
  read_only?: boolean;

  /**
   * The time the audit log event occurred, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
   */
  "@timestamp"?: number;
  active_was?: boolean;
  config_was?: Array<{}>;

  /**
   * The time the audit log event was recorded, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
   */
  created_at?: number;

  /**
   * The name of the repository.
   */
  repository?: string;

  /**
   * The repository visibility, for example `public` or `private`.
   */
  visibility?: string;
  events_were?: Array<{}>;
  explanation?: string;
  fingerprint?: string;

  /**
   * A unique identifier for an audit event.
   */
  _document_id?: string;

  /**
   * The username of the account being blocked.
   */
  blocked_user?: string;
  content_type?: string;
  target_login?: string;
  actor_location?: {
    country_name?: string;
  };
  repository_public?: boolean;
  openssh_public_key?: string;

  /**
   * The type of protocol (for example, HTTP or SSH) used to transfer Git data.
   */
  transport_protocol?: number;
  previous_visibility?: string;
  limited_availability?: boolean;
  deploy_key_fingerprint?: string;

  /**
   * A human readable name for the protocol (for example, HTTP or SSH) used to transfer Git data.
   */
  transport_protocol_name?: string;
};

/**
 * Code Of Conduct
 * @example @see https://apihero.run/integrations/github/examples/code-of-conduct
 */
export type CodeOfConduct = {
  /**
   *
   * @example
   * "contributor_covenant"
   */
  key: string;

  /**
   *
   * @example
   * "https://api.github.com/codes_of_conduct/contributor_covenant"
   */
  url: string;

  /**
   *
   * @example
   * "# Contributor Covenant Code of Conduct\n\n## Our Pledge\n\nIn the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.\n\n## Our Standards\n\nExamples of behavior that contributes to creating a positive environment include:\n\n* Using welcoming and inclusive language\n* Being respectful of differing viewpoints and experiences\n* Gracefully accepting constructive criticism\n* Focusing on what is best for the community\n* Showing empathy towards other community members\n\nExamples of unacceptable behavior by participants include:\n\n* The use of sexualized language or imagery and unwelcome sexual attention or advances\n* Trolling, insulting/derogatory comments, and personal or political attacks\n* Public or private harassment\n* Publishing others' private information, such as a physical or electronic address, without explicit permission\n* Other conduct which could reasonably be considered inappropriate in a professional setting\n\n## Our Responsibilities\n\nProject maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response\n                  to any instances of unacceptable behavior.\n\nProject maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.\n\n## Scope\n\nThis Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address,\n                  posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.\n\n## Enforcement\n\nInstances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [EMAIL]. The project team will review and investigate all complaints, and will respond in a way that it deems appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.\n\nProject maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.\n\n## Attribution\n\nThis Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4, available at [http://contributor-covenant.org/version/1/4][version]\n\n[homepage]: http://contributor-covenant.org\n[version]: http://contributor-covenant.org/version/1/4/\n"
   */
  body?: string;

  /**
   *
   * @example
   * "Contributor Covenant"
   */
  name: string;
  html_url: string | null;
};

/**
 * Commit Activity
 */
export type CommitActivity = {
  /**
   *
   * @example
   * [0]
   *
   * @example
   * [3]
   *
   * @example
   * [26]
   *
   * @example
   * [20]
   *
   * @example
   * [39]
   *
   * @example
   * [1]
   *
   * @example
   * [0]
   */
  days: Array<number>;

  /**
   *
   * @example
   * 1336280400
   */
  week: number;

  /**
   *
   * @example
   * 89
   */
  total: number;
};

/**
 * An object describing a symlink
 */
export type ContentSymlink = {
  sha: string;
  url: string;
  name: string;
  path: string;
  size: number;
  type: string;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
  target: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
};

/**
 * Content Traffic
 */
export type ContentTraffic = {
  /**
   *
   * @example
   * "/github/hubot"
   */
  path: string;

  /**
   *
   * @example
   * 3542
   */
  count: number;

  /**
   *
   * @example
   * "github/hubot: A customizable life embetterment robot."
   */
  title: string;

  /**
   *
   * @example
   * 2225
   */
  uniques: number;
};

/**
 * A list of external groups available to be connected to a team
 * @example @see https://apihero.run/integrations/github/examples/external-groups
 */
export type ExternalGroups = {
  /**
   * An array of external groups available to be mapped to a team
   *
   * @example
   * [{
   *   "group_id": 1,
   *   "group_name": "group-azuread-test",
   *   "updated_at": "2021-01-03 22:27:15:000 -700"
   * }]
   *
   * @example
   * [{
   *   "group_id": 2,
   *   "group_name": "group-azuread-test2",
   *   "updated_at": "2021-06-03 22:27:15:000 -700"
   * }]
   */
  groups?: Array<{
    /**
     * The internal ID of the group
     *
     * @example
     * 1
     */
    group_id: number;

    /**
     * The display name of the group
     *
     * @example
     * "group-azuread-test"
     */
    group_name: string;

    /**
     * The time of the last update for this group
     *
     * @example
     * "2019-06-03 22:27:15:000 -700"
     */
    updated_at: string;
  }>;
};

/**
 * Full Repository
 * @example @see https://apihero.run/integrations/github/examples/full-repository
 */
export type FullRepository = {
  /**
   *
   * @example
   * 1296269
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World"
   */
  url: string;
  fork: boolean;

  /**
   *
   * @example
   * "Hello-World"
   */
  name: string;

  /**
   *
   * @example
   * 108
   */
  size: number;
  forks: number;
  owner: SimpleUser;
  parent?: Repository;
  source?: Repository;

  /**
   *
   * @example
   * ["octocat"]
   *
   * @example
   * ["atom"]
   *
   * @example
   * ["electron"]
   *
   * @example
   * ["API"]
   */
  topics?: Array<string>;

  /**
   *
   * @example
   * "git:github.com/octocat/Hello-World.git"
   */
  git_url: string;
  license: LicenseSimple | null;

  /**
   *
   * @example
   * "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
   */
  node_id: string;
  private: boolean;

  /**
   *
   * @example
   * "git@github.com:octocat/Hello-World.git"
   */
  ssh_url: string;

  /**
   *
   * @example
   * "https://svn.github.com/octocat/Hello-World"
   */
  svn_url: string;
  archived: boolean;

  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;

  /**
   *
   * @example
   * true
   */
  has_wiki: boolean;

  /**
   *
   * @example
   * "https://github.com"
   */
  homepage: string | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World"
   */
  html_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}"
   */
  keys_url: string;
  language: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/tags"
   */
  tags_url: string;
  watchers: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}"
   */
  blobs_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World.git"
   */
  clone_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/forks"
   */
  forks_url: string;

  /**
   *
   * @example
   * "octocat/Hello-World"
   */
  full_name: string;
  has_pages: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/hooks"
   */
  hooks_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/pulls{/number}"
   */
  pulls_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:06:43Z"
   */
  pushed_at: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/teams"
   */
  teams_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}"
   */
  trees_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/events"
   */
  events_url: string;

  /**
   *
   * @example
   * true
   */
  has_issues: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues{/number}"
   */
  issues_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/labels{/name}"
   */
  labels_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/merges"
   */
  merges_url: string;

  /**
   *
   * @example
   * "git:git.example.com/octocat/Hello-World"
   */
  mirror_url: string | null;

  /**
   *
   * @example
   * "2011-01-26T19:14:43Z"
   */
  updated_at: string;

  /**
   * The repository visibility: public, private, or internal.
   *
   * @example
   * "public"
   */
  visibility?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}"
   */
  archive_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/commits{/sha}"
   */
  commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}"
   */
  compare_url: string;

  /**
   *
   * @example
   * "This your first repo!"
   */
  description: string | null;

  /**
   *
   * @example
   * 9
   */
  forks_count: number;

  /**
   *
   * @example
   * true
   */
  is_template?: boolean;
  open_issues: number;
  permissions?: {
    pull: boolean;
    push: boolean;
    admin: boolean;
    triage?: boolean;
    maintain?: boolean;
  };

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/branches{/branch}"
   */
  branches_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/comments{/number}"
   */
  comments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contents/{+path}"
   */
  contents_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}"
   */
  git_refs_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
   */
  git_tags_url: string;

  /**
   *
   * @example
   * true
   */
  has_projects: boolean;
  organization?: SimpleUser | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/releases{/id}"
   */
  releases_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}"
   */
  statuses_url: string;

  /**
   *
   * @example
   * true
   */
  allow_forking?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/assignees{/user}"
   */
  assignees_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/downloads"
   */
  downloads_url: string;

  /**
   *
   * @example
   * true
   */
  has_downloads: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/languages"
   */
  languages_url: string;
  master_branch?: string;

  /**
   *
   * @example
   * 0
   */
  network_count: number;

  /**
   *
   * @example
   * "master"
   */
  default_branch: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/milestones{/number}"
   */
  milestones_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/stargazers"
   */
  stargazers_url: string;

  /**
   *
   * @example
   * 80
   */
  watchers_count: number;
  code_of_conduct?: CodeOfConductSimple;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/deployments"
   */
  deployments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}"
   */
  git_commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscribers"
   */
  subscribers_url: string;

  /**
   *
   * @example
   * false
   */
  allow_auto_merge?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contributors"
   */
  contributors_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}"
   */
  issue_events_url: string;

  /**
   *
   * @example
   * 80
   */
  stargazers_count: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscription"
   */
  subscription_url: string;
  temp_clone_token?: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}"
   */
  collaborators_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}"
   */
  issue_comment_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}"
   */
  notifications_url: string;

  /**
   *
   * @example
   * 0
   */
  open_issues_count: number;

  /**
   *
   * @example
   * 42
   */
  subscribers_count: number;

  /**
   *
   * @example
   * true
   */
  allow_merge_commit?: boolean;

  /**
   *
   * @example
   * true
   */
  allow_rebase_merge?: boolean;

  /**
   *
   * @example
   * true
   */
  allow_squash_merge?: boolean;

  /**
   *
   * @example
   * true
   */
  allow_update_branch?: boolean;
  template_repository?: Repository | null;
  security_and_analysis?: SecurityAndAnalysis;

  /**
   *
   * @example
   * false
   */
  delete_branch_on_merge?: boolean;

  /**
   * Whether anonymous git access is allowed.
   */
  anonymous_access_enabled?: boolean;

  /**
   *
   * @example
   * false
   */
  use_squash_pr_title_as_default?: boolean;
};

/**
 * License Content
 * @example @see https://apihero.run/integrations/github/examples/license-content
 */
export type LicenseContent = {
  sha: string;
  url: string;
  name: string;
  path: string;
  size: number;
  type: string;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
  content: string;
  git_url: string | null;
  license: LicenseSimple | null;
  encoding: string;
  html_url: string | null;
  download_url: string | null;
};

/**
 * Results of a successful merge upstream request
 * @example @see https://apihero.run/integrations/github/examples/merged-upstream
 */
export type MergedUpstream = {
  message?: string;
  merge_type?: "merge" | "fast-forward" | "none";
  base_branch?: string;
};

/**
 * Actions OIDC Subject customization
 * @example @see https://apihero.run/integrations/github/examples/oidc-custom-sub
 */
export type OidcCustomSub = {
  include_claim_keys: Array<string>;
};

/**
 * A version of a software package
 */
export type PackageVersion = {
  /**
   * Unique identifier of the package version.
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/packages/container/super-linter/versions/786068"
   */
  url: string;

  /**
   * The name of the package version.
   *
   * @example
   * "latest"
   */
  name: string;

  /**
   *
   * @example
   * "MIT"
   */
  license?: string;

  /**
   *
   * @example
   * "https://github.com/orgs/github/packages/container/super-linter/786068"
   */
  html_url?: string;
  metadata?: {
    docker?: {
      tag?: Array<string>;
    };
    container?: {
      tags: Array<string>;
    };

    /**
     *
     * @example
     * "docker"
     */
    package_type: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  };

  /**
   *
   * @example
   * "2011-04-10T20:09:31Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2014-03-03T18:58:10Z"
   */
  deleted_at?: string;

  /**
   *
   * @example
   * "2014-03-03T18:58:10Z"
   */
  updated_at: string;
  description?: string;

  /**
   *
   * @example
   * "https://github.com/orgs/github/packages/container/package/super-linter"
   */
  package_html_url: string;
};

/**
 * The GitHub Pages deployment status.
 * @example @see https://apihero.run/integrations/github/examples/page-deployment
 */
export type PageDeployment = {
  /**
   * The URI to the deployed GitHub Pages.
   *
   * @example
   * "hello-world.github.io"
   */
  page_url: string;

  /**
   * The URI to monitor GitHub Pages deployment status.
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/pages/deployments/4fd754f7e594640989b406850d0bc8f06a121251/status"
   */
  status_url: string;

  /**
   * The URI to the deployed GitHub Pages preview.
   *
   * @example
   * "monalisa-1231a2312sa32-23sda74.drafts.github.io"
   */
  preview_url?: string;
};

export type ReactionRollup = {
  "+1": number;
  "-1": number;
  url: string;
  eyes: number;
  heart: number;
  laugh: number;
  hooray: number;
  rocket: number;
  confused: number;
  total_count: number;
};

/**
 * A team discussion is a persistent record of a free-form conversation within a team.
 * @example @see https://apihero.run/integrations/github/examples/team-discussion
 */
export type TeamDiscussion = {
  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/2343027/discussions/1"
   */
  url: string;

  /**
   * The main text of the discussion.
   *
   * @example
   * "Please suggest improvements to our workflow in comments."
   */
  body: string;

  /**
   * The title of the discussion.
   *
   * @example
   * "How can we improve our workflow?"
   */
  title: string;
  author: SimpleUser | null;

  /**
   * The unique sequence number of a team discussion.
   *
   * @example
   * 42
   */
  number: number;

  /**
   * Whether or not this discussion should be pinned for easy retrieval.
   *
   * @example
   * true
   */
  pinned: boolean;

  /**
   *
   * @example
   * "MDE0OlRlYW1EaXNjdXNzaW9uMQ=="
   */
  node_id: string;

  /**
   * Whether or not this discussion should be restricted to team members and organization administrators.
   *
   * @example
   * true
   */
  private: boolean;

  /**
   *
   * @example
   * "https://github.com/orgs/github/teams/justice-league/discussions/1"
   */
  html_url: string;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/2343027"
   */
  team_url: string;

  /**
   *
   * @example
   * "<p>Hi! This is an area for us to collaborate as a team</p>"
   */
  body_html: string;
  reactions?: ReactionRollup;

  /**
   *
   * @example
   * "2018-01-25T18:56:31Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2018-01-25T18:56:31Z"
   */
  updated_at: string;

  /**
   * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
   *
   * @example
   * "0307116bbf7ced493b8d8a346c650b71"
   */
  body_version: string;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/2343027/discussions/1/comments"
   */
  comments_url: string;

  /**
   *
   * @example
   * 0
   */
  comments_count: number;
  last_edited_at: string | null;
};

/**
 * Team Membership
 */
export type TeamMembership = {
  url: string;

  /**
   * The role of the user in the team.
   *
   * @example
   * "member"
   */
  role: "member" | "maintainer";

  /**
   * The state of the user's membership in the team.
   */
  state: "active" | "pending";
};

/**
 * A team's access to a repository.
 */
export type TeamRepository = {
  /**
   * Unique identifier of the repository
   *
   * @example
   * 42
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World"
   */
  url: string;
  fork: boolean;

  /**
   * The name of the repository.
   *
   * @example
   * "Team Environment"
   */
  name: string;

  /**
   *
   * @example
   * 108
   */
  size: number;
  forks: number;
  owner: SimpleUser | null;
  topics?: Array<string>;

  /**
   *
   * @example
   * "git:github.com/octocat/Hello-World.git"
   */
  git_url: string;
  license: LicenseSimple | null;

  /**
   *
   * @example
   * "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
   */
  node_id: string;

  /**
   * Whether the repository is private or public.
   */
  private: boolean;

  /**
   *
   * @example
   * "git@github.com:octocat/Hello-World.git"
   */
  ssh_url: string;

  /**
   *
   * @example
   * "https://svn.github.com/octocat/Hello-World"
   */
  svn_url: string;

  /**
   * Whether the repository is archived.
   */
  archived: boolean;

  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;

  /**
   * Whether the wiki is enabled.
   *
   * @example
   * true
   */
  has_wiki: boolean;

  /**
   *
   * @example
   * "https://github.com"
   */
  homepage: string | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World"
   */
  html_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}"
   */
  keys_url: string;
  language: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/tags"
   */
  tags_url: string;
  watchers: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}"
   */
  blobs_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World.git"
   */
  clone_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/forks"
   */
  forks_url: string;

  /**
   *
   * @example
   * "octocat/Hello-World"
   */
  full_name: string;
  has_pages: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/hooks"
   */
  hooks_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/pulls{/number}"
   */
  pulls_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:06:43Z"
   */
  pushed_at: string | null;

  /**
   *
   * @example
   * "admin"
   */
  role_name?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/teams"
   */
  teams_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}"
   */
  trees_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/events"
   */
  events_url: string;

  /**
   * Whether issues are enabled.
   *
   * @example
   * true
   */
  has_issues: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues{/number}"
   */
  issues_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/labels{/name}"
   */
  labels_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/merges"
   */
  merges_url: string;

  /**
   *
   * @example
   * "git:git.example.com/octocat/Hello-World"
   */
  mirror_url: string | null;

  /**
   *
   * @example
   * "2011-01-26T19:14:43Z"
   */
  updated_at: string | null;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}"
   */
  archive_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/commits{/sha}"
   */
  commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}"
   */
  compare_url: string;

  /**
   *
   * @example
   * "This your first repo!"
   */
  description: string | null;

  /**
   *
   * @example
   * 9
   */
  forks_count: number;

  /**
   * Whether this repository acts as a template that can be used to generate new repositories.
   *
   * @example
   * true
   */
  is_template?: boolean;
  open_issues: number;
  permissions?: {
    pull: boolean;
    push: boolean;
    admin: boolean;
    triage?: boolean;
    maintain?: boolean;
  };

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/branches{/branch}"
   */
  branches_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/comments{/number}"
   */
  comments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contents/{+path}"
   */
  contents_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}"
   */
  git_refs_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
   */
  git_tags_url: string;

  /**
   * Whether projects are enabled.
   *
   * @example
   * true
   */
  has_projects: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/releases{/id}"
   */
  releases_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}"
   */
  statuses_url: string;

  /**
   * Whether to allow forking this repo
   *
   * @example
   * false
   */
  allow_forking?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/assignees{/user}"
   */
  assignees_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/downloads"
   */
  downloads_url: string;

  /**
   * Whether downloads are enabled.
   *
   * @example
   * true
   */
  has_downloads: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/languages"
   */
  languages_url: string;
  master_branch?: string;
  network_count?: number;

  /**
   * The default branch of the repository.
   *
   * @example
   * "master"
   */
  default_branch: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/milestones{/number}"
   */
  milestones_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/stargazers"
   */
  stargazers_url: string;

  /**
   *
   * @example
   * 80
   */
  watchers_count: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/deployments"
   */
  deployments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}"
   */
  git_commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscribers"
   */
  subscribers_url: string;

  /**
   * Whether to allow Auto-merge to be used on pull requests.
   *
   * @example
   * false
   */
  allow_auto_merge?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contributors"
   */
  contributors_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}"
   */
  issue_events_url: string;

  /**
   *
   * @example
   * 80
   */
  stargazers_count: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscription"
   */
  subscription_url: string;
  temp_clone_token?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}"
   */
  collaborators_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}"
   */
  issue_comment_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}"
   */
  notifications_url: string;

  /**
   *
   * @example
   * 0
   */
  open_issues_count: number;
  subscribers_count?: number;

  /**
   * Whether to allow merge commits for pull requests.
   *
   * @example
   * true
   */
  allow_merge_commit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   *
   * @example
   * true
   */
  allow_rebase_merge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   *
   * @example
   * true
   */
  allow_squash_merge?: boolean;
  template_repository?: Repository | null;

  /**
   * Whether to delete head branches when pull requests are merged
   *
   * @example
   * false
   */
  delete_branch_on_merge?: boolean;
};

/**
 * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type AlertCreatedAt = string;

/**
 * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type AlertUpdatedAt = string;

/**
 * Check Annotation
 */
export type CheckAnnotation = {
  /**
   *
   * @example
   * "README.md"
   */
  path: string;

  /**
   *
   * @example
   * "Spell Checker"
   */
  title: string | null;

  /**
   *
   * @example
   * "Check your spelling for 'banaas'."
   */
  message: string | null;

  /**
   *
   * @example
   * 2
   */
  end_line: number;
  blob_href: string;

  /**
   *
   * @example
   * 10
   */
  end_column: number | null;

  /**
   *
   * @example
   * 2
   */
  start_line: number;

  /**
   *
   * @example
   * "Do you mean 'bananas' or 'banana'?"
   */
  raw_details: string | null;

  /**
   *
   * @example
   * 5
   */
  start_column: number | null;

  /**
   *
   * @example
   * "warning"
   */
  annotation_level: string | null;
};

/**
 * Branch protections protect branches
 */
export type ProtectedBranch = {
  url: string;
  restrictions?: BranchRestrictionPolicy;
  enforce_admins?: {
    url: string;
    enabled: boolean;
  };
  allow_deletions?: {
    enabled: boolean;
  };
  block_creations?: {
    enabled: boolean;
  };
  allow_force_pushes?: {
    enabled: boolean;
  };
  required_signatures?: {
    /**
     *
     * @example
     * "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_signatures"
     */
    url: string;

    /**
     *
     * @example
     * true
     */
    enabled: boolean;
  };
  required_status_checks?: StatusCheckPolicy;
  required_linear_history?: {
    enabled: boolean;
  };
  required_pull_request_reviews?: {
    url: string;
    dismiss_stale_reviews?: boolean;
    dismissal_restrictions?: {
      url: string;
      apps?: Array<Integration>;
      teams: Array<Team>;
      users: Array<SimpleUser>;
      teams_url: string;
      users_url: string;
    };
    require_code_owner_reviews?: boolean;
    bypass_pull_request_allowances?: {
      apps?: Array<Integration>;
      teams: Array<Team>;
      users: Array<SimpleUser>;
    };
    required_approving_review_count?: number;
  };
  required_conversation_resolution?: {
    enabled?: boolean;
  };
};

/**
 * Referrer Traffic
 */
export type ReferrerTraffic = {
  /**
   *
   * @example
   * 4
   */
  count: number;

  /**
   *
   * @example
   * 3
   */
  uniques: number;

  /**
   *
   * @example
   * "Google"
   */
  referrer: string;
};

export type SelectedActions = {
  /**
   * Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."
   */
  patterns_allowed?: Array<string>;

  /**
   * Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.
   */
  verified_allowed?: boolean;

  /**
   * Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
   */
  github_owned_allowed?: boolean;
};

/**
 * Validation Error
 */
export type ValidationError = {
  errors?: Array<{
    code: string;
    field?: string;
    index?: number;
    value?: string | null | number | null | Array<string> | null;
    message?: string;
    resource?: string;
  }>;
  message: string;
  documentation_url: string;
};

/**
 * The authorization associated with an OAuth Access.
 * @example @see https://apihero.run/integrations/github/examples/application-grant
 */
export type ApplicationGrant = {
  /**
   *
   * @example
   * 1
   */
  id: number;
  app: {
    url: string;
    name: string;
    client_id: string;
  };

  /**
   *
   * @example
   * "https://api.github.com/applications/grants/1"
   */
  url: string;
  user?: SimpleUser | null;

  /**
   *
   * @example
   * ["public_repo"]
   */
  scopes: Array<string>;

  /**
   *
   * @example
   * "2011-09-06T17:26:27Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-09-06T20:39:23Z"
   */
  updated_at: string;
};

/**
 * Branch Protection
 * @example @see https://apihero.run/integrations/github/examples/branch-protection
 */
export type BranchProtection = {
  url?: string;

  /**
   *
   * @example
   * "\"branch/with/protection\""
   */
  name?: string;
  enabled?: boolean;
  restrictions?: BranchRestrictionPolicy;
  enforce_admins?: ProtectedBranchAdminEnforced;

  /**
   *
   * @example
   * "\"https://api.github.com/repos/owner-79e94e2d36b3fd06a32bb213/AAA_Public_Repo/branches/branch/with/protection/protection\""
   */
  protection_url?: string;
  allow_deletions?: {
    enabled?: boolean;
  };
  block_creations?: {
    enabled?: boolean;
  };
  allow_force_pushes?: {
    enabled?: boolean;
  };
  required_signatures?: {
    /**
     *
     * @example
     * "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_signatures"
     */
    url: string;

    /**
     *
     * @example
     * true
     */
    enabled: boolean;
  };
  required_status_checks?: ProtectedBranchRequiredStatusCheck;
  required_linear_history?: {
    enabled?: boolean;
  };
  required_pull_request_reviews?: ProtectedBranchPullRequestReview;
  required_conversation_resolution?: {
    enabled?: boolean;
  };
};

/** 
* The full Git reference, formatted as `refs/heads/<branch name>`,
`refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
*/
export type CodeScanningRef = string;

/**
 * A list of errors found in a repo's CODEOWNERS file
 * @example @see https://apihero.run/integrations/github/examples/codeowners-errors
 */
export type CodeownersErrors = {
  errors: Array<{
    /**
     * The type of error.
     *
     * @example
     * "Invalid owner"
     */
    kind: string;

    /**
     * The line number where this errors occurs.
     *
     * @example
     * 7
     */
    line: number;

    /**
     * The path of the file where the error occured.
     *
     * @example
     * ".github/CODEOWNERS"
     */
    path: string;

    /**
     * The column number where this errors occurs.
     *
     * @example
     * 3
     */
    column: number;

    /**
     * The contents of the line where the error occurs.
     *
     * @example
     * "* user"
     */
    source?: string;

    /**
     * A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting).
     *
     * @example
     * "Invalid owner on line 7:\n\n  * user\n    ^"
     */
    message: string;

    /**
     * Suggested action to fix the error. This will usually be `null`, but is provided for some common errors.
     *
     * @example
     * "The pattern `/` will never match anything, did you mean `*` instead?"
     */
    suggestion?: string | null;
  }>;
};

/**
 * A description of the machine powering a codespace.
 */
export type CodespaceMachine = {
  /**
   * How many cores are available to the codespace.
   *
   * @example
   * 4
   */
  cpus: number;

  /**
   * The name of the machine.
   *
   * @example
   * "standardLinux"
   */
  name: string;

  /**
   * The display name of the machine includes cores, memory, and storage.
   *
   * @example
   * "4 cores, 8 GB RAM, 64 GB storage"
   */
  display_name: string;

  /**
   * How much memory is available to the codespace.
   *
   * @example
   * 8589934592
   */
  memory_in_bytes: number;

  /**
   * The operating system of the machine.
   *
   * @example
   * "linux"
   */
  operating_system: string;

  /**
   * How much storage is available to the codespace.
   *
   * @example
   * 68719476736
   */
  storage_in_bytes: number;

  /**
   * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
   *
   * @example
   * "ready"
   */
  prebuild_availability: "none" | "ready" | "in_progress" | null;
};

/**
 * Secrets for a GitHub Codespace.
 */
export type CodespacesSecret = {
  /**
   * The name of the secret
   *
   * @example
   * "SECRET_NAME"
   */
  name: string;

  /**
   * Secret created at
   */
  created_at: string;

  /**
   * Secret last updated at
   */
  updated_at: string;

  /**
   * The type of repositories in the organization that the secret is visible to
   */
  visibility: "all" | "private" | "selected";

  /**
   * API URL at which the list of repositories this secret is vicible can be retrieved
   *
   * @example
   * "https://api.github.com/user/secrets/SECRET_NAME/repositories"
   */
  selected_repositories_url: string;
};

/**
 * Commit Comparison
 * @example @see https://apihero.run/integrations/github/examples/commit-comparison
 */
export type CommitComparison = {
  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/compare/master...topic"
   */
  url: string;
  files?: Array<DiffEntry>;

  /**
   *
   * @example
   * "ahead"
   */
  status: "diverged" | "ahead" | "behind" | "identical";
  commits: Array<Commit>;

  /**
   *
   * @example
   * 4
   */
  ahead_by: number;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/compare/master...topic.diff"
   */
  diff_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/compare/master...topic"
   */
  html_url: string;

  /**
   *
   * @example
   * 5
   */
  behind_by: number;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/compare/master...topic.patch"
   */
  patch_url: string;
  base_commit: Commit;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/compare/octocat:bbcd538c8e72b8c175046e27cc8f907076331401...octocat:0328041d1152db8ae77652d1618a02e57f745f17"
   */
  permalink_url: string;

  /**
   *
   * @example
   * 6
   */
  total_commits: number;
  merge_base_commit: Commit;
};

/**
 * Community Profile
 * @example @see https://apihero.run/integrations/github/examples/community-profile
 */
export type CommunityProfile = {
  files: {
    readme: CommunityHealthFile | null;
    license: LicenseSimple | null;
    contributing: CommunityHealthFile | null;
    issue_template: CommunityHealthFile | null;
    code_of_conduct: CodeOfConductSimple | null;
    code_of_conduct_file: CommunityHealthFile | null;
    pull_request_template: CommunityHealthFile | null;
  };

  /**
   *
   * @example
   * "2017-02-28T19:09:29Z"
   */
  updated_at: string | null;

  /**
   *
   * @example
   * "My first repository on GitHub!"
   */
  description: string | null;

  /**
   *
   * @example
   * "example.com"
   */
  documentation: string | null;

  /**
   *
   * @example
   * 100
   */
  health_percentage: number;

  /**
   *
   * @example
   * true
   */
  content_reports_enabled?: boolean;
};

/**
 * A list of directory items
 */
export type ContentDirectory = Array<{
  sha: string;
  url: string;
  name: string;
  path: string;
  size: number;
  type: string;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
  content?: string;
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
}>;

/**
 * An object describing a symlink
 */
export type ContentSubmodule = {
  sha: string;
  url: string;
  name: string;
  path: string;
  size: number;
  type: string;
  _links: {
    git: string | null;
    html: string | null;
    self: string;
  };
  git_url: string | null;
  html_url: string | null;
  download_url: string | null;
  submodule_git_url: string;
};

/**
 * Set secrets for Dependabot.
 * @example @see https://apihero.run/integrations/github/examples/dependabot-secret
 */
export type DependabotSecret = {
  /**
   * The name of the secret.
   *
   * @example
   * "MY_ARTIFACTORY_PASSWORD"
   */
  name: string;
  created_at: string;
  updated_at: string;
};

/**
 * A deployment created as the result of an Actions check run from a workflow that references an environment
 */
export type DeploymentSimple = {
  /**
   * Unique identifier of the deployment
   *
   * @example
   * 42
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/deployments/1"
   */
  url: string;

  /**
   * Parameter to specify a task to execute
   *
   * @example
   * "deploy"
   */
  task: string;

  /**
   *
   * @example
   * "MDEwOkRlcGxveW1lbnQx"
   */
  node_id: string;

  /**
   *
   * @example
   * "2012-07-20T01:19:13Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2012-07-20T01:19:13Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "Deploy request from hubot"
   */
  description: string | null;

  /**
   * Name for the target deployment environment.
   *
   * @example
   * "production"
   */
  environment: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/deployments/1/statuses"
   */
  statuses_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example"
   */
  repository_url: string;

  /**
   *
   * @example
   * "staging"
   */
  original_environment?: string;

  /**
   * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
   *
   * @example
   * true
   */
  transient_environment?: boolean;

  /**
   * Specifies if the given environment is one that end-users directly interact with. Default: false.
   *
   * @example
   * true
   */
  production_environment?: boolean;
  performed_via_github_app?: Integration | null;
};

/**
 * The status of a deployment.
 * @example @see https://apihero.run/integrations/github/examples/deployment-status
 */
export type DeploymentStatus = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/deployments/42/statuses/1"
   */
  url: string;

  /**
   * The state of the status.
   *
   * @example
   * "success"
   */
  state: "error" | "failure" | "inactive" | "pending" | "success" | "queued" | "in_progress";
  creator: SimpleUser | null;

  /**
   * The URL to associate with this status.
   *
   * @example
   * "https://example.com/deployment/42/output"
   */
  log_url?: string;

  /**
   *
   * @example
   * "MDE2OkRlcGxveW1lbnRTdGF0dXMx"
   */
  node_id: string;

  /**
   *
   * @example
   * "2012-07-20T01:19:13Z"
   */
  created_at: string;

  /**
   * Deprecated: the URL to associate with this status.
   *
   * @example
   * "https://example.com/deployment/42/output"
   */
  target_url: string;

  /**
   *
   * @example
   * "2012-07-20T01:19:13Z"
   */
  updated_at: string;

  /**
   * A short description of the status.
   *
   * @example
   * "Deployment finished successfully."
   */
  description: string;

  /**
   * The environment of the deployment that the status is for.
   *
   * @example
   * "production"
   */
  environment?: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/deployments/42"
   */
  deployment_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example"
   */
  repository_url: string;

  /**
   * The URL for accessing your environment.
   *
   * @example
   * "https://staging.example.com/"
   */
  environment_url?: string;
  performed_via_github_app?: Integration | null;
};

/**
 * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
 *
 * @example @see https://apihero.run/integrations/github/examples/interaction-group
 */
export type InteractionGroup = "existing_users" | "contributors_only" | "collaborators_only";

/**
 * Limit interactions to a specific type of user for a specified duration
 */
export type InteractionLimit = {
  limit: InteractionGroup;
  expiry?: InteractionExpiry;
};

/**
 * Issue Event Label
 */
export type IssueEventLabel = {
  name: string | null;
  color: string | null;
};

/**
 * Organization Full
 * @example @see https://apihero.run/integrations/github/examples/organization-full
 */
export type OrganizationFull = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github"
   */
  url: string;

  /**
   *
   * @example
   * "https://github.com/blog"
   */
  blog?: string;

  /**
   *
   * @example
   * "github"
   */
  name?: string;
  plan?: {
    name: string;
    seats?: number;
    space: number;
    filled_seats?: number;
    private_repos: number;
  };

  /**
   *
   * @example
   * "Organization"
   */
  type: string;

  /**
   *
   * @example
   * "octocat@github.com"
   */
  email?: string;

  /**
   *
   * @example
   * "github"
   */
  login: string;

  /**
   *
   * @example
   * "GitHub"
   */
  company?: string;

  /**
   *
   * @example
   * "MDEyOk9yZ2FuaXphdGlvbjE="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat"
   */
  html_url: string;

  /**
   *
   * @example
   * "San Francisco"
   */
  location?: string;

  /**
   *
   * @example
   * 20
   */
  followers: number;

  /**
   *
   * @example
   * 0
   */
  following: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/hooks"
   */
  hooks_url: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/repos"
   */
  repos_url: string;

  /**
   *
   * @example
   * "https://github.com/images/error/octocat_happy.gif"
   */
  avatar_url: string;

  /**
   *
   * @example
   * "2008-01-14T04:33:35Z"
   */
  created_at: string;

  /**
   *
   * @example
   * 10000
   */
  disk_usage?: number | null;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/events"
   */
  events_url: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/issues"
   */
  issues_url: string;
  updated_at: string;

  /**
   *
   * @example
   * "A great organization"
   */
  description: string | null;

  /**
   *
   * @example
   * true
   */
  is_verified?: boolean;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/members{/member}"
   */
  members_url: string;

  /**
   *
   * @example
   * 1
   */
  public_gists: number;

  /**
   *
   * @example
   * 2
   */
  public_repos: number;

  /**
   *
   * @example
   * "org@example.com"
   */
  billing_email?: string | null;

  /**
   *
   * @example
   * 8
   */
  collaborators?: number | null;

  /**
   *
   * @example
   * 81
   */
  private_gists?: number | null;

  /**
   *
   * @example
   * "github"
   */
  twitter_username?: string | null;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/public_members{/member}"
   */
  public_members_url: string;

  /**
   *
   * @example
   * 100
   */
  owned_private_repos?: number;

  /**
   *
   * @example
   * 100
   */
  total_private_repos?: number;

  /**
   *
   * @example
   * true
   */
  has_repository_projects: boolean;

  /**
   *
   * @example
   * true
   */
  members_can_create_pages?: boolean;

  /**
   *
   * @example
   * true
   */
  has_organization_projects: boolean;
  default_repository_permission?: string | null;

  /**
   *
   * @example
   * true
   */
  two_factor_requirement_enabled?: boolean | null;

  /**
   *
   * @example
   * true
   */
  members_can_create_public_pages?: boolean;

  /**
   *
   * @example
   * true
   */
  members_can_create_repositories?: boolean | null;

  /**
   *
   * @example
   * true
   */
  members_can_create_private_pages?: boolean;

  /**
   *
   * @example
   * false
   */
  members_can_fork_private_repositories?: boolean | null;

  /**
   *
   * @example
   * true
   */
  members_can_create_public_repositories?: boolean;

  /**
   *
   * @example
   * true
   */
  members_can_create_private_repositories?: boolean;

  /**
   *
   * @example
   * "all"
   */
  members_allowed_repository_creation_type?: string;

  /**
   *
   * @example
   * true
   */
  members_can_create_internal_repositories?: boolean;
};

/**
 * Page Build Status
 * @example @see https://apihero.run/integrations/github/examples/page-build-status
 */
export type PageBuildStatus = {
  /**
   *
   * @example
   * "https://api.github.com/repos/github/hello-world/pages/builds/latest"
   */
  url: string;

  /**
   *
   * @example
   * "queued"
   */
  status: string;
};

export type PagesSourceHash = {
  path: string;
  branch: string;
};

/**
 * Porter Large File
 */
export type PorterLargeFile = {
  oid: string;
  path: string;
  size: number;
  ref_name: string;
};

export type RunnerGroupsOrg = {
  id: number;
  name: string;
  default: boolean;
  inherited: boolean;
  visibility: string;
  runners_url: string;

  /**
   * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
   * Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.
   *
   * @example
   * ["octo-org/octo-repo/.github/workflows/deploy.yaml@main"]
   */
  selected_workflows?: Array<string>;

  /**
   * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
   */
  restricted_to_workflows?: boolean;

  /**
   * Link to the selected repositories resource for this runner group. Not present unless visibility was set to `selected`
   */
  selected_repositories_url?: string;
  allows_public_repositories: boolean;

  /**
   * If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified.
   */
  workflow_restrictions_read_only?: boolean;
  inherited_allows_public_repositories?: boolean;
};

/**
 * Response of S4 Proxy endpoint that provides GHES statistics
 * @example @see https://apihero.run/integrations/github/examples/server-statistics
 */
export type ServerStatistics = {};

/**
 * Simple Repository
 */
export type SimpleRepository = {
  /**
   * A unique identifier of the repository.
   *
   * @example
   * 1296269
   */
  id: number;

  /**
   * The URL to get more information about the repository from the GitHub API.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World"
   */
  url: string;

  /**
   * Whether the repository is a fork.
   */
  fork: boolean;

  /**
   * The name of the repository.
   *
   * @example
   * "Hello-World"
   */
  name: string;
  owner: SimpleUser;

  /**
   * The GraphQL identifier of the repository.
   *
   * @example
   * "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
   */
  node_id: string;

  /**
   * Whether the repository is private.
   */
  private: boolean;

  /**
   * The URL to view the repository on GitHub.com.
   *
   * @example
   * "https://github.com/octocat/Hello-World"
   */
  html_url: string;

  /**
   * A template for the API URL to get information about deploy keys on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/keys{/key_id}"
   */
  keys_url: string;

  /**
   * The API URL to get information about tags on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/tags"
   */
  tags_url: string;

  /**
   * A template for the API URL to create or retrieve a raw Git blob in the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}"
   */
  blobs_url: string;

  /**
   * The API URL to list the forks of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/forks"
   */
  forks_url: string;

  /**
   * The full, globally unique, name of the repository.
   *
   * @example
   * "octocat/Hello-World"
   */
  full_name: string;

  /**
   * The API URL to list the hooks on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/hooks"
   */
  hooks_url: string;

  /**
   * A template for the API URL to get information about pull requests on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls{/number}"
   */
  pulls_url: string;

  /**
   * The API URL to list the teams on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/teams"
   */
  teams_url: string;

  /**
   * A template for the API URL to create or retrieve a raw Git tree of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}"
   */
  trees_url: string;

  /**
   * The API URL to list the events of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/events"
   */
  events_url: string;

  /**
   * A template for the API URL to get information about issues on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues{/number}"
   */
  issues_url: string;

  /**
   * A template for the API URL to get information about labels of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/labels{/name}"
   */
  labels_url: string;

  /**
   * The API URL to merge branches in the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/merges"
   */
  merges_url: string;

  /**
   * A template for the API URL to download the repository as an archive.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}"
   */
  archive_url: string;

  /**
   * A template for the API URL to get information about commits on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/commits{/sha}"
   */
  commits_url: string;

  /**
   * A template for the API URL to compare two commits or refs.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}"
   */
  compare_url: string;

  /**
   * The repository description.
   *
   * @example
   * "This your first repo!"
   */
  description: string | null;

  /**
   * A template for the API URL to get information about branches in the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/branches{/branch}"
   */
  branches_url: string;

  /**
   * A template for the API URL to get information about comments on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/comments{/number}"
   */
  comments_url: string;

  /**
   * A template for the API URL to get the contents of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/contents/{+path}"
   */
  contents_url: string;

  /**
   * A template for the API URL to get information about Git refs of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}"
   */
  git_refs_url: string;

  /**
   * A template for the API URL to get information about Git tags of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
   */
  git_tags_url: string;

  /**
   * A template for the API URL to get information about releases on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/releases{/id}"
   */
  releases_url: string;

  /**
   * A template for the API URL to get information about statuses of a commit.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/statuses/{sha}"
   */
  statuses_url: string;

  /**
   * A template for the API URL to list the available assignees for issues in the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/assignees{/user}"
   */
  assignees_url: string;

  /**
   * The API URL to list the downloads on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/downloads"
   */
  downloads_url: string;

  /**
   * The API URL to get information about the languages of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/languages"
   */
  languages_url: string;

  /**
   * A template for the API URL to get information about milestones of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/milestones{/number}"
   */
  milestones_url: string;

  /**
   * The API URL to list the stargazers on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/stargazers"
   */
  stargazers_url: string;

  /**
   * The API URL to list the deployments of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/deployments"
   */
  deployments_url: string;

  /**
   * A template for the API URL to get information about Git commits of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}"
   */
  git_commits_url: string;

  /**
   * The API URL to list the subscribers on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/subscribers"
   */
  subscribers_url: string;

  /**
   * A template for the API URL to list the contributors to the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/contributors"
   */
  contributors_url: string;

  /**
   * A template for the API URL to get information about issue events on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/events{/number}"
   */
  issue_events_url: string;

  /**
   * The API URL to subscribe to notifications for this repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/subscription"
   */
  subscription_url: string;

  /**
   * A template for the API URL to get information about collaborators of the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}"
   */
  collaborators_url: string;

  /**
   * A template for the API URL to get information about issue comments on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}"
   */
  issue_comment_url: string;

  /**
   * A template for the API URL to get information about notifications on the repository.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}"
   */
  notifications_url: string;
};

/**
 * Repository actions caches
 * @example @see https://apihero.run/integrations/github/examples/actions-cache-list
 */
export type ActionsCacheList = {
  /**
   * Total number of caches
   *
   * @example
   * 2
   */
  total_count: number;

  /**
   * Array of caches
   */
  actions_caches: Array<{
    /**
     *
     * @example
     * 2
     */
    id?: number;

    /**
     *
     * @example
     * "Linux-node-958aff96db2d75d67787d1e634ae70b659de937b"
     */
    key?: string;

    /**
     *
     * @example
     * "refs/heads/main"
     */
    ref?: string;

    /**
     *
     * @example
     * "73885106f58cc52a7df9ec4d4a5622a5614813162cb516c759a30af6bf56e6f0"
     */
    version?: string;

    /**
     *
     * @example
     * "2019-01-24T22:45:36.000Z"
     */
    created_at?: string;

    /**
     *
     * @example
     * 1024
     */
    size_in_bytes?: number;

    /**
     *
     * @example
     * "2019-01-24T22:45:36.000Z"
     */
    last_accessed_at?: string;
  }>;
};

/**
 * The public key used for setting Actions Secrets.
 * @example @see https://apihero.run/integrations/github/examples/actions-public-key
 */
export type ActionsPublicKey = {
  /**
   *
   * @example
   * 2
   */
  id?: number;

  /**
   * The Base64 encoded public key.
   *
   * @example
   * "hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs="
   */
  key: string;

  /**
   *
   * @example
   * "https://api.github.com/user/keys/2"
   */
  url?: string;

  /**
   *
   * @example
   * "ssh-rsa AAAAB3NzaC1yc2EAAA"
   */
  title?: string;

  /**
   * The identifier for the key.
   *
   * @example
   * "1234567"
   */
  key_id: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at?: string;
};

/**
 * How the author is associated with the repository.
 *
 * @example @see https://apihero.run/integrations/github/examples/author-association
 */
export type AuthorAssociation =
  | "COLLABORATOR"
  | "CONTRIBUTOR"
  | "FIRST_TIMER"
  | "FIRST_TIME_CONTRIBUTOR"
  | "MANNEQUIN"
  | "MEMBER"
  | "NONE"
  | "OWNER";

/**
 * Gitignore Template
 * @example @see https://apihero.run/integrations/github/examples/gitignore-template
 */
export type GitignoreTemplate = {
  /**
   *
   * @example
   * "C"
   */
  name: string;

  /**
   *
   * @example
   * "# Object files\n*.o\n\n# Libraries\n*.lib\n*.a\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n*.out\n*.app\n"
   */
  source: string;
};

/**
 * Delivery made by a webhook, without request and response information.
 */
export type HookDeliveryItem = {
  /**
   * Unique identifier of the webhook delivery.
   *
   * @example
   * 42
   */
  id: number;

  /**
   * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
   *
   * @example
   * "58474f00-b361-11eb-836d-0e4f3503ccbe"
   */
  guid: string;

  /**
   * The event that triggered the delivery.
   *
   * @example
   * "issues"
   */
  event: string;

  /**
   * The type of activity for the event that triggered the delivery.
   *
   * @example
   * "opened"
   */
  action: string | null;

  /**
   * Describes the response returned after attempting the delivery.
   *
   * @example
   * "failed to connect"
   */
  status: string;

  /**
   * Time spent delivering.
   *
   * @example
   * 0.03
   */
  duration: number;

  /**
   * Whether the webhook delivery is a redelivery.
   *
   * @example
   * false
   */
  redelivery: boolean;

  /**
   * Status code received when delivery was made.
   *
   * @example
   * 502
   */
  status_code: number;

  /**
   * Time when the webhook delivery occurred.
   *
   * @example
   * "2021-05-12T20:33:44Z"
   */
  delivered_at: string;

  /**
   * The id of the repository associated with this event.
   *
   * @example
   * 123
   */
  repository_id: number | null;

  /**
   * The id of the GitHub App installation associated with this event.
   *
   * @example
   * 123
   */
  installation_id: number | null;
};

/**
 * Authentication token for a GitHub App installed on a user or org.
 * @example @see https://apihero.run/integrations/github/examples/installation-token
 */
export type InstallationToken = {
  token: string;
  expires_at: string;
  permissions?: AppPermissions;

  /**
   *
   * @example
   * "README.md"
   */
  single_file?: string;
  repositories?: Array<Repository>;

  /**
   *
   * @example
   * ["config.yml"]
   *
   * @example
   * [".github/issue_TEMPLATE.md"]
   */
  single_file_paths?: Array<string>;
  repository_selection?: "all" | "selected";

  /**
   *
   * @example
   * true
   */
  has_multiple_single_files?: boolean;
};

/**
 * The duration of the interaction restriction. Default: `one_day`.
 *
 * @example @see https://apihero.run/integrations/github/examples/interaction-expiry
 */
export type InteractionExpiry = "one_day" | "three_days" | "one_week" | "one_month" | "six_months";

/**
 * Issue Event Rename
 */
export type IssueEventRename = {
  to: string;
  from: string;
};

/**
 * Locked Issue Event
 */
export type LockedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;

  /**
   *
   * @example
   * "\"off-topic\""
   */
  lock_reason: string | null;
  performed_via_github_app: Integration | null;
};

/**
 * Minimal Repository
 * @example @see https://apihero.run/integrations/github/examples/minimal-repository
 */
export type MinimalRepository = {
  /**
   *
   * @example
   * 1296269
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World"
   */
  url: string;
  fork: boolean;

  /**
   *
   * @example
   * "Hello-World"
   */
  name: string;
  size?: number;

  /**
   *
   * @example
   * 0
   */
  forks?: number;
  owner: SimpleUser;
  topics?: Array<string>;
  git_url?: string;
  license?: {
    key?: string;
    url?: string;
    name?: string;
    node_id?: string;
    spdx_id?: string;
  } | null;

  /**
   *
   * @example
   * "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
   */
  node_id: string;
  private: boolean;
  ssh_url?: string;
  svn_url?: string;
  archived?: boolean;
  disabled?: boolean;
  has_wiki?: boolean;
  homepage?: string | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World"
   */
  html_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}"
   */
  keys_url: string;
  language?: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/tags"
   */
  tags_url: string;

  /**
   *
   * @example
   * 0
   */
  watchers?: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}"
   */
  blobs_url: string;
  clone_url?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/forks"
   */
  forks_url: string;

  /**
   *
   * @example
   * "octocat/Hello-World"
   */
  full_name: string;
  has_pages?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/hooks"
   */
  hooks_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/pulls{/number}"
   */
  pulls_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:06:43Z"
   */
  pushed_at?: string | null;

  /**
   *
   * @example
   * "admin"
   */
  role_name?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/teams"
   */
  teams_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}"
   */
  trees_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at?: string | null;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/events"
   */
  events_url: string;
  has_issues?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues{/number}"
   */
  issues_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/labels{/name}"
   */
  labels_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/merges"
   */
  merges_url: string;
  mirror_url?: string | null;

  /**
   *
   * @example
   * "2011-01-26T19:14:43Z"
   */
  updated_at?: string | null;
  visibility?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}"
   */
  archive_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/commits{/sha}"
   */
  commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}"
   */
  compare_url: string;

  /**
   *
   * @example
   * "This your first repo!"
   */
  description: string | null;
  forks_count?: number;
  is_template?: boolean;

  /**
   *
   * @example
   * 0
   */
  open_issues?: number;
  permissions?: {
    pull?: boolean;
    push?: boolean;
    admin?: boolean;
    triage?: boolean;
    maintain?: boolean;
  };

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/branches{/branch}"
   */
  branches_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/comments{/number}"
   */
  comments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contents/{+path}"
   */
  contents_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}"
   */
  git_refs_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
   */
  git_tags_url: string;
  has_projects?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/releases{/id}"
   */
  releases_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}"
   */
  statuses_url: string;
  allow_forking?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/assignees{/user}"
   */
  assignees_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/downloads"
   */
  downloads_url: string;
  has_downloads?: boolean;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/languages"
   */
  languages_url: string;
  network_count?: number;
  default_branch?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/milestones{/number}"
   */
  milestones_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/stargazers"
   */
  stargazers_url: string;
  watchers_count?: number;
  code_of_conduct?: CodeOfConduct;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/deployments"
   */
  deployments_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}"
   */
  git_commits_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscribers"
   */
  subscribers_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/contributors"
   */
  contributors_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}"
   */
  issue_events_url: string;
  stargazers_count?: number;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/subscription"
   */
  subscription_url: string;
  temp_clone_token?: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}"
   */
  collaborators_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}"
   */
  issue_comment_url: string;

  /**
   *
   * @example
   * "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}"
   */
  notifications_url: string;
  open_issues_count?: number;
  subscribers_count?: number;
  template_repository?: Repository | null;
  delete_branch_on_merge?: boolean;
};

/**
 * Pages Health Check Status
 * @example @see https://apihero.run/integrations/github/examples/pages-health-check
 */
export type PagesHealthCheck = {
  domain?: {
    uri?: string;
    host?: string;
    reason?: string | null;
    is_valid?: boolean;
    caa_error?: string | null;
    is_proxied?: boolean | null;
    https_error?: string | null;
    is_a_record?: boolean | null;
    nameservers?: string;
    dns_resolves?: boolean;
    is_fastly_ip?: boolean | null;
    enforces_https?: boolean;
    is_apex_domain?: boolean;
    is_pages_domain?: boolean;
    is_valid_domain?: boolean;
    has_cname_record?: boolean | null;
    is_cloudflare_ip?: boolean | null;
    is_https_eligible?: boolean | null;
    is_old_ip_address?: boolean | null;
    responds_to_https?: boolean;
    is_cname_to_fastly?: boolean | null;
    is_served_by_pages?: boolean | null;
    should_be_a_record?: boolean | null;
    has_mx_records_present?: boolean | null;
    is_pointed_to_github_pages_ip?: boolean | null;
    is_cname_to_github_user_domain?: boolean | null;
    is_non_github_pages_ip_present?: boolean | null;
    is_cname_to_pages_dot_github_dot_com?: boolean | null;
  };
  alt_domain?: {
    uri?: string;
    host?: string;
    reason?: string | null;
    is_valid?: boolean;
    caa_error?: string | null;
    is_proxied?: boolean | null;
    https_error?: string | null;
    is_a_record?: boolean | null;
    nameservers?: string;
    dns_resolves?: boolean;
    is_fastly_ip?: boolean | null;
    enforces_https?: boolean;
    is_apex_domain?: boolean;
    is_pages_domain?: boolean;
    is_valid_domain?: boolean;
    has_cname_record?: boolean | null;
    is_cloudflare_ip?: boolean | null;
    is_https_eligible?: boolean | null;
    is_old_ip_address?: boolean | null;
    responds_to_https?: boolean;
    is_cname_to_fastly?: boolean | null;
    is_served_by_pages?: boolean | null;
    should_be_a_record?: boolean | null;
    has_mx_records_present?: boolean | null;
    is_pointed_to_github_pages_ip?: boolean | null;
    is_cname_to_github_user_domain?: boolean | null;
    is_non_github_pages_ip_present?: boolean | null;
    is_cname_to_pages_dot_github_dot_com?: boolean | null;
  } | null;
};

/**
 * Details of a deployment that is waiting for protection rules to pass
 */
export type PendingDeployment = {
  /**
   * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
   */
  reviewers: Array<{
    type?: DeploymentReviewerType;
    reviewer?: SimpleUser | Team;
  }>;

  /**
   * The set duration of the wait timer
   *
   * @example
   * 30
   */
  wait_timer: number;
  environment: {
    /**
     * The id of the environment.
     *
     * @example
     * 56780428
     */
    id?: number;

    /**
     *
     * @example
     * "https://api.github.com/repos/github/hello-world/environments/staging"
     */
    url?: string;

    /**
     * The name of the environment.
     *
     * @example
     * "staging"
     */
    name?: string;

    /**
     *
     * @example
     * "MDExOkVudmlyb25tZW50NTY3ODA0Mjg="
     */
    node_id?: string;

    /**
     *
     * @example
     * "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging"
     */
    html_url?: string;
  };

  /**
   * The time that the wait timer began.
   *
   * @example
   * "2020-11-23T22:00:40Z"
   */
  wait_timer_started_at: string | null;

  /**
   * Whether the currently authenticated user can approve the deployment
   *
   * @example
   * true
   */
  current_user_can_approve: boolean;
};

/**
 * Runner Application
 */
export type RunnerApplication = {
  os: string;
  filename: string;
  architecture: string;
  download_url: string;
  sha256_checksum?: string;

  /**
   * A short lived bearer token used to download the runner, if needed.
   */
  temp_download_token?: string;
};

/**
 * Starred Repository
 */
export type StarredRepository = {
  repo: Repository;
  starred_at: string;
};

/**
 * The URL to which the payloads will be delivered.
 *
 * @example @see https://apihero.run/integrations/github/examples/webhook-config-url
 */
export type WebhookConfigUrl = string;

/**
 * Workflow Run Usage
 * @example @see https://apihero.run/integrations/github/examples/workflow-run-usage
 */
export type WorkflowRunUsage = {
  billable: {
    MACOS?: {
      jobs: number;
      job_runs?: Array<{
        job_id: number;
        duration_ms: number;
      }>;
      total_ms: number;
    };
    UBUNTU?: {
      jobs: number;
      job_runs?: Array<{
        job_id: number;
        duration_ms: number;
      }>;
      total_ms: number;
    };
    WINDOWS?: {
      jobs: number;
      job_runs?: Array<{
        job_id: number;
        duration_ms: number;
      }>;
      total_ms: number;
    };
  };
  run_duration_ms?: number;
};

/**
 * The REST API URL for fetching the list of instances for an alert.
 */
export type AlertInstancesUrl = string;

/**
 * Code Frequency Stat
 */
export type CodeFrequencyStat = Array<number>;

export type CodeScanningAlert = {
  url: AlertUrl;
  rule: CodeScanningAlertRule;
  tool: CodeScanningAnalysisTool;
  state: CodeScanningAlertState;
  number: AlertNumber;
  fixed_at?: CodeScanningAlertFixedAt;
  html_url: AlertHtmlUrl;
  created_at: AlertCreatedAt;
  updated_at?: AlertUpdatedAt;
  dismissed_at: CodeScanningAlertDismissedAt;
  dismissed_by: SimpleUser | null;
  instances_url: AlertInstancesUrl;
  dismissed_reason: CodeScanningAlertDismissedReason;
  dismissed_comment?: CodeScanningAlertDismissedComment;
  most_recent_instance: CodeScanningAlertInstance;
};

/**
 * Labeled Issue Event
 */
export type LabeledIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  label: {
    name: string;
    color: string;
  };
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

export type MarketplaceAccount = {
  id: number;
  url: string;
  type: string;
  email?: string | null;
  login: string;
  node_id?: string;
  organization_billing_email?: string | null;
};

/**
 * Organization Simple
 */
export type OrganizationSimple = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github"
   */
  url: string;

  /**
   *
   * @example
   * "github"
   */
  login: string;

  /**
   *
   * @example
   * "MDEyOk9yZ2FuaXphdGlvbjE="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/hooks"
   */
  hooks_url: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/repos"
   */
  repos_url: string;

  /**
   *
   * @example
   * "https://github.com/images/error/octocat_happy.gif"
   */
  avatar_url: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/events"
   */
  events_url: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/issues"
   */
  issues_url: string;

  /**
   *
   * @example
   * "A great organization"
   */
  description: string | null;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/members{/member}"
   */
  members_url: string;

  /**
   *
   * @example
   * "https://api.github.com/orgs/github/public_members{/member}"
   */
  public_members_url: string;
};

export type ParticipationStats = {
  all: Array<number>;
  owner: Array<number>;
};

/**
 * Pull Request Reviews are reviews on pull requests.
 * @example @see https://apihero.run/integrations/github/examples/pull-request-review
 */
export type PullRequestReview = {
  /**
   * Unique identifier of the review
   *
   * @example
   * 42
   */
  id: number;

  /**
   * The text of the review.
   *
   * @example
   * "This looks great."
   */
  body: string;
  user: SimpleUser | null;

  /**
   *
   * @example
   * "CHANGES_REQUESTED"
   */
  state: string;
  _links: {
    html: {
      href: string;
    };
    pull_request: {
      href: string;
    };
  };

  /**
   *
   * @example
   * "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80"
   */
  html_url: string;
  body_html?: string;
  body_text?: string;

  /**
   * A commit SHA for the review.
   *
   * @example
   * "54bb654c9e6025347f57900a4a5c2313a96b8035"
   */
  commit_id: string;
  submitted_at?: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/12"
   */
  pull_request_url: string;
  author_association: AuthorAssociation;
};

/**
 * Pull Request Simple
 * @example @see https://apihero.run/integrations/github/examples/pull-request-simple
 */
export type PullRequestSimple = {
  /**
   *
   * @example
   * 1
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1347"
   */
  url: string;
  base: {
    ref: string;
    sha: string;
    repo: Repository;
    user: SimpleUser | null;
    label: string;
  };

  /**
   *
   * @example
   * "Please pull these awesome changes"
   */
  body: string | null;
  head: {
    ref: string;
    sha: string;
    repo: Repository;
    user: SimpleUser | null;
    label: string;
  };
  user: SimpleUser | null;

  /**
   * Indicates whether or not the pull request is a draft.
   *
   * @example
   * false
   */
  draft?: boolean;

  /**
   *
   * @example
   * "open"
   */
  state: string;

  /**
   *
   * @example
   * "new-feature"
   */
  title: string;
  _links: {
    html: Link;
    self: Link;
    issue: Link;
    commits: Link;
    comments: Link;
    statuses: Link;
    review_comment: Link;
    review_comments: Link;
  };
  labels: Array<{
    id: number;
    url: string;
    name: string;
    color: string;
    default: boolean;
    node_id: string;
    description: string;
  }>;

  /**
   *
   * @example
   * true
   */
  locked: boolean;

  /**
   *
   * @example
   * 1347
   */
  number: number;

  /**
   *
   * @example
   * "MDExOlB1bGxSZXF1ZXN0MQ=="
   */
  node_id: string;
  assignee: SimpleUser | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1347.diff"
   */
  diff_url: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1347"
   */
  html_url: string;
  assignees?: Array<SimpleUser> | null;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  closed_at: string | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/1347"
   */
  issue_url: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  merged_at: string | null;
  milestone: Milestone | null;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1347.patch"
   */
  patch_url: string;
  auto_merge: AutoMerge;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  updated_at: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits"
   */
  commits_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/issues/1347/comments"
   */
  comments_url: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  statuses_url: string;
  requested_teams?: Array<Team> | null;

  /**
   *
   * @example
   * "e5bd3914e2e596debea16f433f57875b5b90bcd6"
   */
  merge_commit_sha: string | null;

  /**
   *
   * @example
   * "too heated"
   */
  active_lock_reason?: string | null;
  author_association: AuthorAssociation;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}"
   */
  review_comment_url: string;
  requested_reviewers?: Array<SimpleUser> | null;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments"
   */
  review_comments_url: string;
};

/**
 * Rate Limit Overview
 * @example @see https://apihero.run/integrations/github/examples/rate-limit-overview
 */
export type RateLimitOverview = {
  rate: RateLimit;
  resources: {
    core: RateLimit;
    scim?: RateLimit;
    search: RateLimit;
    graphql?: RateLimit;
    source_import?: RateLimit;
    code_scanning_upload?: RateLimit;
    dependency_snapshots?: RateLimit;
    integration_manifest?: RateLimit;
    actions_runner_registration?: RateLimit;
  };
};

/**
 * A workflow referenced/reused by the initial caller workflow
 */
export type ReferencedWorkflow = {
  ref?: string;
  sha: string;
  path: string;
};

/**
 * Renamed Issue Event
 */
export type RenamedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  rename: {
    to: string;
    from: string;
  };
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

export type ScopedInstallation = {
  account: SimpleUser;
  permissions: AppPermissions;

  /**
   *
   * @example
   * "https://api.github.com/users/octocat/repos"
   */
  repositories_url: string;

  /**
   *
   * @example
   * "config.yaml"
   */
  single_file_name: string | null;

  /**
   *
   * @example
   * ["config.yml"]
   *
   * @example
   * [".github/issue_TEMPLATE.md"]
   */
  single_file_paths?: Array<string>;

  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection: "all" | "selected";

  /**
   *
   * @example
   * true
   */
  has_multiple_single_files?: boolean;
};

/**
 * Simple Installation
 */
export type SimpleInstallation = {
  /**
   * The ID of the installation.
   *
   * @example
   * 1
   */
  id: number;

  /**
   * The global node ID of the installation.
   *
   * @example
   * "MDQ6VXNlcjU4MzIzMQ=="
   */
  node_id: string;
};

/**
 * Status Check Policy
 * @example @see https://apihero.run/integrations/github/examples/status-check-policy
 */
export type StatusCheckPolicy = {
  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks"
   */
  url: string;
  checks: Array<{
    app_id: number | null;

    /**
     *
     * @example
     * "continuous-integration/travis-ci"
     */
    context: string;
  }>;

  /**
   *
   * @example
   * true
   */
  strict: boolean;

  /**
   *
   * @example
   * ["continuous-integration/travis-ci"]
   */
  contexts: Array<string>;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts"
   */
  contexts_url: string;
};

/**
 * Thread Subscription
 * @example @see https://apihero.run/integrations/github/examples/thread-subscription
 */
export type ThreadSubscription = {
  /**
   *
   * @example
   * "https://api.github.com/notifications/threads/1/subscription"
   */
  url: string;
  reason: string | null;
  ignored: boolean;

  /**
   *
   * @example
   * "2012-10-06T21:34:12Z"
   */
  created_at: string | null;

  /**
   *
   * @example
   * true
   */
  subscribed: boolean;

  /**
   *
   * @example
   * "https://api.github.com/notifications/threads/1"
   */
  thread_url?: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/1"
   */
  repository_url?: string;
};

/**
 * Assigned Issue Event
 */
export type AssignedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  assignee: SimpleUser;
  assigner: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration;
};

/**
 * Authentication Token
 * @example @see https://apihero.run/integrations/github/examples/authentication-token
 */
export type AuthenticationToken = {
  /**
   * The token used for authentication
   *
   * @example
   * "v1.1f699f1069f60xxx"
   */
  token: string;

  /**
   * The time this token expires
   *
   * @example
   * "2016-07-11T22:14:10Z"
   */
  expires_at: string;

  /**
   *
   * @example
   * {
   *   "issues": "read",
   *   "deployments": "write"
   * }
   */
  permissions?: {};

  /**
   *
   * @example
   * "config.yaml"
   */
  single_file?: string | null;

  /**
   * The repositories this token has access to
   */
  repositories?: Array<Repository>;

  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection?: "all" | "selected";
};

/**
 * Contributor Activity
 */
export type ContributorActivity = {
  /**
   *
   * @example
   * 135
   */
  total: number;

  /**
   *
   * @example
   * [{
   *   "a": 6898,
   *   "c": 10,
   *   "d": 77,
   *   "w": "1367712000"
   * }]
   */
  weeks: Array<{
    a?: number;
    c?: number;
    d?: number;
    w?: number;
  }>;
  author: SimpleUser | null;
};

/**
 * The policy that controls the repositories in the organization that are allowed to run GitHub Actions.
 */
export type EnabledRepositories = "all" | "none" | "selected";

/**
 * Marketplace Purchase
 * @example @see https://apihero.run/integrations/github/examples/marketplace-purchase
 */
export type MarketplacePurchase = {
  id: number;
  url: string;
  type: string;
  email?: string | null;
  login: string;
  marketplace_purchase: {
    plan?: MarketplaceListingPlan;
    unit_count?: number | null;
    updated_at?: string;
    is_installed?: boolean;
    billing_cycle?: string;
    on_free_trial?: boolean;
    next_billing_date?: string | null;
    free_trial_ends_on?: string | null;
  };
  marketplace_pending_change?: {
    id?: number;
    plan?: MarketplaceListingPlan;
    unit_count?: number | null;
    is_installed?: boolean;
    effective_date?: string;
  } | null;
  organization_billing_email?: string;
};

export type PullRequestMinimal = {
  id: number;
  url: string;
  base: {
    ref: string;
    sha: string;
    repo: {
      id: number;
      url: string;
      name: string;
    };
  };
  head: {
    ref: string;
    sha: string;
    repo: {
      id: number;
      url: string;
      name: string;
    };
  };
  number: number;
};

export type ScimEnterpriseUser = {
  id: string;
  meta?: {
    created?: string;
    location?: string;
    lastModified?: string;
    resourceType?: string;
  };
  name?: {
    givenName?: string;
    familyName?: string;
  };
  active?: boolean;
  emails?: Array<{
    type?: string;
    value?: string;
    primary?: boolean;
  }>;
  groups?: Array<{
    value?: string;
  }>;
  schemas: Array<string>;
  userName?: string;
  externalId?: string;
};

/**
 * The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.
 */
export type SelectedActionsUrl = string;

export type SimpleCommitStatus = {
  id: number;
  url: string;
  state: string;
  context: string;
  node_id: string;
  required?: boolean | null;
  avatar_url: string | null;
  created_at: string;
  target_url: string | null;
  updated_at: string;
  description: string | null;
};

export type ActionsBillingUsage = {
  /**
   * The amount of free GitHub Actions minutes available.
   */
  included_minutes: number;

  /**
   * The sum of the free and paid GitHub Actions minutes used.
   */
  total_minutes_used: number;
  minutes_used_breakdown: {
    /**
     * Total minutes used on macOS runner machines.
     */
    MACOS?: number;

    /**
     * Total minutes used on all runner machines.
     */
    total?: number;

    /**
     * Total minutes used on Ubuntu runner machines.
     */
    UBUNTU?: number;

    /**
     * Total minutes used on Windows runner machines.
     */
    WINDOWS?: number;

    /**
     * Total minutes used on Ubuntu 4 core runner machines.
     */
    ubuntu_4_core?: number;

    /**
     * Total minutes used on Ubuntu 8 core runner machines.
     */
    ubuntu_8_core?: number;

    /**
     * Total minutes used on Ubuntu 16 core runner machines.
     */
    ubuntu_16_core?: number;

    /**
     * Total minutes used on Ubuntu 32 core runner machines.
     */
    ubuntu_32_core?: number;

    /**
     * Total minutes used on Ubuntu 64 core runner machines.
     */
    ubuntu_64_core?: number;

    /**
     * Total minutes used on Windows 4 core runner machines.
     */
    windows_4_core?: number;

    /**
     * Total minutes used on Windows 8 core runner machines.
     */
    windows_8_core?: number;

    /**
     * Total minutes used on Windows 16 core runner machines.
     */
    windows_16_core?: number;

    /**
     * Total minutes used on Windows 32 core runner machines.
     */
    windows_32_core?: number;

    /**
     * Total minutes used on Windows 64 core runner machines.
     */
    windows_64_core?: number;
  };

  /**
   * The total paid GitHub Actions minutes used.
   */
  total_paid_minutes_used: number;
};

/**
 * The public key used for setting Codespaces secrets.
 * @example @see https://apihero.run/integrations/github/examples/codespaces-public-key
 */
export type CodespacesPublicKey = {
  /**
   *
   * @example
   * 2
   */
  id?: number;

  /**
   * The Base64 encoded public key.
   *
   * @example
   * "hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs="
   */
  key: string;

  /**
   *
   * @example
   * "https://api.github.com/user/keys/2"
   */
  url?: string;

  /**
   *
   * @example
   * "ssh-rsa AAAAB3NzaC1yc2EAAA"
   */
  title?: string;

  /**
   * The identifier for the key.
   *
   * @example
   * "1234567"
   */
  key_id: string;

  /**
   *
   * @example
   * "2011-01-26T19:01:12Z"
   */
  created_at?: string;
};

export type CommunityHealthFile = {
  url: string;
  html_url: string;
};

/**
 * The public key used for setting Dependabot Secrets.
 * @example @see https://apihero.run/integrations/github/examples/dependabot-public-key
 */
export type DependabotPublicKey = {
  /**
   * The Base64 encoded public key.
   *
   * @example
   * "hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs="
   */
  key: string;

  /**
   * The identifier for the key.
   *
   * @example
   * "1234567"
   */
  key_id: string;
};

/**
 * A diff of the dependencies between two commits.
 */
export type DependencyGraphDiff = Array<{
  /**
   *
   * @example
   * "@actions/core"
   */
  name: string;

  /**
   *
   * @example
   * "MIT"
   */
  license: string | null;

  /**
   *
   * @example
   * "1.0.0"
   */
  version: string;

  /**
   *
   * @example
   * "path/to/package-lock.json"
   */
  manifest: string;

  /**
   *
   * @example
   * "npm"
   */
  ecosystem: string;
  change_type: "added" | "removed";

  /**
   *
   * @example
   * "pkg:/npm/%40actions/core@1.1.0"
   */
  package_url: string | null;
  vulnerabilities: Array<{
    /**
     *
     * @example
     * "critical"
     */
    severity: string;

    /**
     *
     * @example
     * "https://github.com/advisories/GHSA-rf4j-j272-fj86"
     */
    advisory_url: string;

    /**
     *
     * @example
     * "GHSA-rf4j-j272-fj86"
     */
    advisory_ghsa_id: string;

    /**
     *
     * @example
     * "A summary of the advisory."
     */
    advisory_summary: string;
  }>;

  /**
   *
   * @example
   * "https://github.com/github/actions"
   */
  source_repository_url: string | null;
}>;

/**
 * The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.
 */
export type EnabledOrganizations = "all" | "none" | "selected";

/**
 * An entry in the reviews log for environment deployments
 */
export type EnvironmentApprovals = {
  user: SimpleUser;

  /**
   * Whether deployment to the environment(s) was approved or rejected
   *
   * @example
   * "approved"
   */
  state: "approved" | "rejected";

  /**
   * The comment submitted with the deployment review
   *
   * @example
   * "Ship it!"
   */
  comment: string;

  /**
   * The list of environments that were approved or rejected
   */
  environments: Array<{
    /**
     * The id of the environment.
     *
     * @example
     * 56780428
     */
    id?: number;

    /**
     *
     * @example
     * "https://api.github.com/repos/github/hello-world/environments/staging"
     */
    url?: string;

    /**
     * The name of the environment.
     *
     * @example
     * "staging"
     */
    name?: string;

    /**
     *
     * @example
     * "MDExOkVudmlyb25tZW50NTY3ODA0Mjg="
     */
    node_id?: string;

    /**
     *
     * @example
     * "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging"
     */
    html_url?: string;

    /**
     * The time that the environment was created, in ISO 8601 format.
     *
     * @example
     * "2020-11-23T22:00:40Z"
     */
    created_at?: string;

    /**
     * The time that the environment was last updated, in ISO 8601 format.
     *
     * @example
     * "2020-11-23T22:00:40Z"
     */
    updated_at?: string;
  }>;
};

/**
 * Issue Event for Issue
 */
export type IssueEventForIssue =
  | LabeledIssueEvent
  | UnlabeledIssueEvent
  | AssignedIssueEvent
  | UnassignedIssueEvent
  | MilestonedIssueEvent
  | DemilestonedIssueEvent
  | RenamedIssueEvent
  | ReviewRequestedIssueEvent
  | ReviewRequestRemovedIssueEvent
  | ReviewDismissedIssueEvent
  | LockedIssueEvent
  | AddedToProjectIssueEvent
  | MovedColumnInProjectIssueEvent
  | RemovedFromProjectIssueEvent
  | ConvertedNoteToIssueIssueEvent;

/**
 * Issue Event Milestone
 */
export type IssueEventMilestone = {
  title: string;
};

/**
 * Generated name and body describing a release
 * @example @see https://apihero.run/integrations/github/examples/release-notes-content
 */
export type ReleaseNotesContent = {
  /**
   * The generated body describing the contents of the release supporting markdown formatting
   */
  body: string;

  /**
   * The generated name of the release
   *
   * @example
   * "Release v1.0.0 is now available!"
   */
  name: string;
};

/**
 * Repository invitations let you manage who you collaborate with.
 * @example @see https://apihero.run/integrations/github/examples/repository-invitation
 */
export type RepositoryInvitation = {
  /**
   * Unique identifier of the repository invitation.
   *
   * @example
   * 42
   */
  id: number;

  /**
   * URL for the repository invitation
   *
   * @example
   * "https://api.github.com/user/repository-invitations/1"
   */
  url: string;

  /**
   * Whether or not the invitation has expired
   */
  expired?: boolean;
  invitee: SimpleUser | null;
  inviter: SimpleUser | null;
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/invitations"
   */
  html_url: string;

  /**
   *
   * @example
   * "2016-06-13T14:52:50-05:00"
   */
  created_at: string;
  repository: MinimalRepository;

  /**
   * The permission associated with the invitation.
   *
   * @example
   * "read"
   */
  permissions: "read" | "write" | "admin" | "triage" | "maintain";
};

export type ScimEnterpriseGroup = {
  id: string;
  meta?: {
    created?: string;
    location?: string;
    lastModified?: string;
    resourceType?: string;
  };
  members?: Array<{
    $ref?: string;
    value?: string;
    display?: string;
  }>;
  schemas: Array<string>;
  externalId?: string | null;
  displayName?: string;
};

export type SecretScanningAlert = {
  url?: AlertUrl;
  state?: SecretScanningAlertState;
  number?: AlertNumber;

  /**
   * The secret that was detected.
   */
  secret?: string;
  html_url?: AlertHtmlUrl;
  created_at?: AlertCreatedAt;
  resolution?: SecretScanningAlertResolution;
  updated_at?: AlertUpdatedAt;

  /**
   * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  resolved_at?: string | null;
  resolved_by?: SimpleUser | null;

  /**
   * The type of secret that secret scanning detected.
   */
  secret_type?: string;

  /**
   * The REST API URL of the code locations for this alert.
   */
  locations_url?: string;

  /**
   * Whether push protection was bypassed for the detected secret.
   */
  push_protection_bypassed?: boolean | null;

  /** 
* User-friendly name for the detected secret, matching the `secret_type`.
For a list of built-in patterns, see "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)."
*/
  secret_type_display_name?: string;

  /**
   * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  push_protection_bypassed_at?: string | null;
  push_protection_bypassed_by?: SimpleUser | null;
};

export type SecurityAndAnalysis = {
  secret_scanning?: {
    status?: "enabled" | "disabled";
  };
  advanced_security?: {
    status?: "enabled" | "disabled";
  };
  secret_scanning_push_protection?: {
    status?: "enabled" | "disabled";
  };
};

/**
 * Timeline Event
 * @example @see https://apihero.run/integrations/github/examples/timeline-issue-events
 */
export type TimelineIssueEvents =
  | LabeledIssueEvent
  | UnlabeledIssueEvent
  | MilestonedIssueEvent
  | DemilestonedIssueEvent
  | RenamedIssueEvent
  | ReviewRequestedIssueEvent
  | ReviewRequestRemovedIssueEvent
  | ReviewDismissedIssueEvent
  | LockedIssueEvent
  | AddedToProjectIssueEvent
  | MovedColumnInProjectIssueEvent
  | RemovedFromProjectIssueEvent
  | ConvertedNoteToIssueIssueEvent
  | TimelineCommentEvent
  | TimelineCrossReferencedEvent
  | TimelineCommittedEvent
  | TimelineReviewedEvent
  | TimelineLineCommentedEvent
  | TimelineCommitCommentedEvent
  | TimelineAssignedIssueEvent
  | TimelineUnassignedIssueEvent
  | StateChangeIssueEvent;

/**
 * Unlabeled Issue Event
 */
export type UnlabeledIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  label: {
    name: string;
    color: string;
  };
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

/**
 * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
 *
 * @example @see https://apihero.run/integrations/github/examples/webhook-config-secret
 */
export type WebhookConfigSecret = string;

/**
 * Branch With Protection
 * @example @see https://apihero.run/integrations/github/examples/branch-with-protection
 */
export type BranchWithProtection = {
  name: string;
  _links: {
    html: string;
    self: string;
  };
  commit: Commit;

  /**
   *
   * @example
   * "\"mas*\""
   */
  pattern?: string;
  protected: boolean;
  protection: BranchProtection;
  protection_url: string;

  /**
   *
   * @example
   * 1
   */
  required_approving_review_count?: number;
};

/**
 * Check suite configuration preferences for a repository.
 * @example @see https://apihero.run/integrations/github/examples/check-suite-preference
 */
export type CheckSuitePreference = {
  repository: MinimalRepository;
  preferences: {
    auto_trigger_checks?: Array<{
      app_id: number;
      setting: boolean;
    }>;
  };
};

/**
 * Code of Conduct Simple
 */
export type CodeOfConductSimple = {
  /**
   *
   * @example
   * "citizen_code_of_conduct"
   */
  key: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/github/docs/community/code_of_conduct"
   */
  url: string;

  /**
   *
   * @example
   * "Citizen Code of Conduct"
   */
  name: string;

  /**
   *
   * @example
   * "https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md"
   */
  html_url: string | null;
};

export type CodeScanningAnalysis = {
  /**
   * Unique identifier for this analysis.
   */
  id: number;
  ref: CodeScanningRef;
  url: CodeScanningAnalysisUrl;
  tool: CodeScanningAnalysisTool;

  /**
   *
   * @example
   * "error reading field xyz"
   */
  error: string;

  /**
   * Warning generated when processing the analysis
   *
   * @example
   * "123 results were ignored"
   */
  warning: string;
  category?: CodeScanningAnalysisCategory;
  sarif_id: CodeScanningAnalysisSarifId;
  deletable: boolean;
  commit_sha: CodeScanningAnalysisCommitSha;
  created_at: CodeScanningAnalysisCreatedAt;
  environment: CodeScanningAnalysisEnvironment;

  /**
   * The total number of rules used in the analysis.
   */
  rules_count: number;
  analysis_key: CodeScanningAnalysisAnalysisKey;

  /**
   * The total number of results in the analysis.
   */
  results_count: number;
};

export type CombinedBillingUsage = {
  /**
   * Numbers of days left in billing cycle.
   */
  days_left_in_billing_cycle: number;

  /**
   * Estimated sum of free and paid storage space (GB) used in billing cycle.
   */
  estimated_storage_for_month: number;

  /**
   * Estimated storage space (GB) used in billing cycle.
   */
  estimated_paid_storage_for_month: number;
};

/**
 * Combined Commit Status
 * @example @see https://apihero.run/integrations/github/examples/combined-commit-status
 */
export type CombinedCommitStatus = {
  sha: string;
  url: string;
  state: string;
  statuses: Array<SimpleCommitStatus>;
  commit_url: string;
  repository: MinimalRepository;
  total_count: number;
};

/**
 * Milestoned Issue Event
 */
export type MilestonedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  milestone: {
    title: string;
  };
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

export type PackagesBillingUsage = {
  /**
   * Free storage space (GB) for GitHub Packages.
   */
  included_gigabytes_bandwidth: number;

  /**
   * Sum of the free and paid storage space (GB) for GitHuub Packages.
   */
  total_gigabytes_bandwidth_used: number;

  /**
   * Total paid storage space (GB) for GitHuub Packages.
   */
  total_paid_gigabytes_bandwidth_used: number;
};

/**
 * Set repository secrets for GitHub Codespaces.
 * @example @see https://apihero.run/integrations/github/examples/repo-codespaces-secret
 */
export type RepoCodespacesSecret = {
  /**
   * The name of the secret.
   *
   * @example
   * "SECRET_TOKEN"
   */
  name: string;
  created_at: string;
  updated_at: string;
};

/**
 * Timeline Comment Event
 */
export type TimelineCommentEvent = {
  /**
   * Unique identifier of the issue comment
   *
   * @example
   * 42
   */
  id: number;

  /**
   * URL for the issue comment
   *
   * @example
   * "https://api.github.com/repositories/42/issues/comments/1"
   */
  url: string;

  /**
   * Contents of the issue comment
   *
   * @example
   * "What version of Safari were you using when you observed this bug?"
   */
  body?: string;
  user: SimpleUser;
  actor: SimpleUser;
  event: string;
  node_id: string;
  html_url: string;
  body_html?: string;
  body_text?: string;
  issue_url: string;
  reactions?: ReactionRollup;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  updated_at: string;
  author_association: AuthorAssociation;
  performed_via_github_app?: Integration | null;
};

/**
 * Unassigned Issue Event
 */
export type UnassignedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  assignee: SimpleUser;
  assigner: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

/**
 * Code Search Result Item
 */
export type CodeSearchResultItem = {
  sha: string;
  url: string;
  name: string;
  path: string;
  score: number;
  git_url: string;
  html_url: string;
  language?: string | null;
  file_size?: number;
  repository: MinimalRepository;

  /**
   *
   * @example
   * ["73..77"]
   *
   * @example
   * ["77..78"]
   */
  line_numbers?: Array<string>;
  text_matches?: SearchResultTextMatches;
  last_modified_at?: string;
};

/**
 * OIDC Customer Subject
 * @example @see https://apihero.run/integrations/github/examples/opt-out-oidc-custom-sub
 */
export type OptOutOidcCustomSub = {
  use_default: boolean;
};

/**
 * Organization Invitation
 * @example @see https://apihero.run/integrations/github/examples/organization-invitation
 */
export type OrganizationInvitation = {
  id: number;
  role: string;
  email: string | null;
  login: string | null;
  inviter: SimpleUser;

  /**
   *
   * @example
   * "\"MDIyOk9yZ2FuaXphdGlvbkludml0YXRpb24x\""
   */
  node_id: string;
  failed_at?: string | null;
  created_at: string;
  team_count: number;
  failed_reason?: string | null;

  /**
   *
   * @example
   * "\"https://api.github.com/organizations/16/invitations/1/teams\""
   */
  invitation_teams_url: string;
};

export type PagesHttpsCertificate = {
  /**
   *
   * @example
   * "approved"
   */
  state:
    | "new"
    | "authorization_created"
    | "authorization_pending"
    | "authorized"
    | "authorization_revoked"
    | "issued"
    | "uploaded"
    | "approved"
    | "errored"
    | "bad_authz"
    | "destroy_pending"
    | "dns_changed";

  /**
   * Array of the domain set and its alternate name (if it is configured)
   *
   * @example
   * ["example.com"]
   *
   * @example
   * ["www.example.com"]
   */
  domains: Array<string>;
  expires_at?: string;

  /**
   *
   * @example
   * "Certificate is approved"
   */
  description: string;
};

/**
 * Repo Search Result Item
 */
export type RepoSearchResultItem = {
  id: number;
  url: string;
  fork: boolean;
  name: string;
  size: number;
  forks: number;
  owner: SimpleUser | null;
  score: number;
  topics?: Array<string>;
  git_url: string;
  license: LicenseSimple | null;
  node_id: string;
  private: boolean;
  ssh_url: string;
  svn_url: string;
  archived: boolean;

  /**
   * Returns whether or not this repository disabled.
   */
  disabled: boolean;
  has_wiki: boolean;
  homepage: string | null;
  html_url: string;
  keys_url: string;
  language: string | null;
  tags_url: string;
  watchers: number;
  blobs_url: string;
  clone_url: string;
  forks_url: string;
  full_name: string;
  has_pages: boolean;
  hooks_url: string;
  pulls_url: string;
  pushed_at: string;
  teams_url: string;
  trees_url: string;
  created_at: string;
  events_url: string;
  has_issues: boolean;
  issues_url: string;
  labels_url: string;
  merges_url: string;
  mirror_url: string | null;
  updated_at: string;

  /**
   * The repository visibility: public, private, or internal.
   */
  visibility?: string;
  archive_url: string;
  commits_url: string;
  compare_url: string;
  description: string | null;
  forks_count: number;
  is_template?: boolean;
  open_issues: number;
  permissions?: {
    pull: boolean;
    push: boolean;
    admin: boolean;
    triage?: boolean;
    maintain?: boolean;
  };
  branches_url: string;
  comments_url: string;
  contents_url: string;
  git_refs_url: string;
  git_tags_url: string;
  has_projects: boolean;
  releases_url: string;
  statuses_url: string;
  text_matches?: SearchResultTextMatches;
  allow_forking?: boolean;
  assignees_url: string;
  downloads_url: string;
  has_downloads: boolean;
  languages_url: string;
  master_branch?: string;
  default_branch: string;
  milestones_url: string;
  stargazers_url: string;
  watchers_count: number;
  deployments_url: string;
  git_commits_url: string;
  subscribers_url: string;
  allow_auto_merge?: boolean;
  contributors_url: string;
  issue_events_url: string;
  stargazers_count: number;
  subscription_url: string;
  temp_clone_token?: string;
  collaborators_url: string;
  issue_comment_url: string;
  notifications_url: string;
  open_issues_count: number;
  allow_merge_commit?: boolean;
  allow_rebase_merge?: boolean;
  allow_squash_merge?: boolean;
  delete_branch_on_merge?: boolean;
};

/**
 * Repository invitations let you manage who you collaborate with.
 * @example @see https://apihero.run/integrations/github/examples/repository-subscription
 */
export type RepositorySubscription = {
  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example/subscription"
   */
  url: string;
  reason: string | null;

  /**
   * Determines if all notifications should be blocked from this repository.
   */
  ignored: boolean;

  /**
   *
   * @example
   * "2012-10-06T21:34:12Z"
   */
  created_at: string;

  /**
   * Determines if notifications should be received from this repository.
   *
   * @example
   * true
   */
  subscribed: boolean;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/example"
   */
  repository_url: string;
};

/**
 * A reply to a discussion within a team.
 * @example @see https://apihero.run/integrations/github/examples/team-discussion-comment
 */
export type TeamDiscussionComment = {
  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/2403582/discussions/1/comments/1"
   */
  url: string;

  /**
   * The main text of the comment.
   *
   * @example
   * "I agree with this suggestion."
   */
  body: string;
  author: SimpleUser | null;

  /**
   * The unique sequence number of a team discussion comment.
   *
   * @example
   * 42
   */
  number: number;

  /**
   *
   * @example
   * "MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1"
   */
  html_url: string;

  /**
   *
   * @example
   * "<p>Do you like apples?</p>"
   */
  body_html: string;
  reactions?: ReactionRollup;

  /**
   *
   * @example
   * "2018-01-15T23:53:58Z"
   */
  created_at: string;

  /**
   *
   * @example
   * "2018-01-15T23:53:58Z"
   */
  updated_at: string;

  /**
   * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
   *
   * @example
   * "0307116bbf7ced493b8d8a346c650b71"
   */
  body_version: string;

  /**
   *
   * @example
   * "https://api.github.com/organizations/1/team/2403582/discussions/1"
   */
  discussion_url: string;
  last_edited_at: string | null;
};

/**
 * Timeline Reviewed Event
 */
export type TimelineReviewedEvent = {
  /**
   * Unique identifier of the review
   *
   * @example
   * 42
   */
  id: number;

  /**
   * The text of the review.
   *
   * @example
   * "This looks great."
   */
  body: string | null;
  user: SimpleUser;
  event: string;

  /**
   *
   * @example
   * "CHANGES_REQUESTED"
   */
  state: string;
  _links: {
    html: {
      href: string;
    };
    pull_request: {
      href: string;
    };
  };

  /**
   *
   * @example
   * "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA="
   */
  node_id: string;

  /**
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80"
   */
  html_url: string;
  body_html?: string;
  body_text?: string;

  /**
   * A commit SHA for the review.
   *
   * @example
   * "54bb654c9e6025347f57900a4a5c2313a96b8035"
   */
  commit_id: string;
  submitted_at?: string;

  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/12"
   */
  pull_request_url: string;
  author_association: AuthorAssociation;
};

/**
 * User Search Result Item
 */
export type UserSearchResultItem = {
  id: number;
  bio?: string | null;
  url: string;
  blog?: string | null;
  name?: string | null;
  type: string;
  email?: string | null;
  login: string;
  score: number;
  company?: string | null;
  node_id: string;
  hireable?: boolean | null;
  html_url: string;
  location?: string | null;
  followers?: number;
  following?: number;
  gists_url: string;
  repos_url: string;
  avatar_url: string;
  created_at?: string;
  events_url: string;
  site_admin: boolean;
  updated_at?: string;
  gravatar_id: string | null;
  starred_url: string;
  public_gists?: number;
  public_repos?: number;
  suspended_at?: string | null;
  text_matches?: SearchResultTextMatches;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  subscriptions_url: string;
  received_events_url: string;
};

/**
 * Validation Error Simple
 */
export type ValidationErrorSimple = {
  errors?: Array<string>;
  message: string;
  documentation_url: string;
};

export type CodeScanningAlertRule = {
  /**
   * A unique identifier for the rule used to detect the alert.
   */
  id?: string | null;

  /**
   * Detailed documentation for the rule as GitHub Flavored Markdown.
   */
  help?: string | null;

  /**
   * The name of the rule used to detect the alert.
   */
  name?: string;

  /**
   * A set of tags applicable for the rule.
   */
  tags?: Array<string> | null;

  /**
   * The severity of the alert.
   */
  severity?: "none" | "note" | "warning" | "error" | null;

  /**
   * A short description of the rule used to detect the alert.
   */
  description?: string;

  /**
   * description of the rule used to detect the alert.
   */
  full_description?: string;

  /**
   * The security severity of the alert.
   */
  security_severity_level?: "low" | "medium" | "high" | "critical" | null;
};

/**
 * An export of a codespace. Also, latest export details for a codespace can be fetched with id = latest
 */
export type CodespaceExportDetails = {
  /**
   * Id for the export details
   *
   * @example
   * "latest"
   */
  id?: string;

  /**
   * Git commit SHA of the exported branch
   *
   * @example
   * "fd95a81ca01e48ede9f39c799ecbcef817b8a3b2"
   */
  sha?: string | null;

  /**
   * State of the latest export
   *
   * @example
   * "succeeded | failed | in_progress"
   */
  state?: string | null;

  /**
   * Name of the exported branch
   *
   * @example
   * "codespace-monalisa-octocat-hello-world-g4wpq6h95q"
   */
  branch?: string | null;

  /**
   * Web url for the exported branch
   *
   * @example
   * "https://github.com/octocat/hello-world/tree/:branch"
   */
  html_url?: string | null;

  /**
   * Url for fetching export details
   *
   * @example
   * "https://api.github.com/user/codespaces/:name/exports/latest"
   */
  export_url?: string;

  /**
   * Completion time of the last export operation
   *
   * @example
   * "2021-01-01T19:01:12Z"
   */
  completed_at?: string | null;
};

/**
 * Credential Authorization
 */
export type CredentialAuthorization = {
  /**
   * User login that owns the underlying credential.
   *
   * @example
   * "monalisa"
   */
  login: string;

  /**
   * List of oauth scopes the token has been granted.
   *
   * @example
   * ["user"]
   *
   * @example
   * ["repo"]
   */
  scopes?: Array<string>;

  /**
   * Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key.
   *
   * @example
   * "jklmnop12345678"
   */
  fingerprint?: string;

  /**
   * Unique identifier for the credential.
   *
   * @example
   * 1
   */
  credential_id: number;

  /**
   * Human-readable description of the credential type.
   *
   * @example
   * "SSH Key"
   */
  credential_type: string;

  /**
   * Last eight characters of the credential. Only included in responses with credential_type of personal access token.
   *
   * @example
   * "12345678"
   */
  token_last_eight?: string;

  /**
   * Date when the credential was last accessed. May be null if it was never accessed
   *
   * @example
   * "2011-01-26T19:06:43Z"
   */
  credential_accessed_at: string | null;

  /**
   *
   * @example
   * 12345678
   */
  authorized_credential_id: number | null;

  /**
   * Date when the credential was authorized for use.
   *
   * @example
   * "2011-01-26T19:06:43Z"
   */
  credential_authorized_at: string;

  /**
   * The note given to the token. This will only be present when the credential is a token.
   *
   * @example
   * "my token"
   */
  authorized_credential_note?: string | null;

  /**
   * The title given to the ssh key. This will only be present when the credential is an ssh key.
   *
   * @example
   * "my ssh key"
   */
  authorized_credential_title?: string | null;

  /**
   * The expiry for the token. This will only be present when the credential is a token.
   */
  authorized_credential_expires_at?: string | null;
};

/**
 * Demilestoned Issue Event
 */
export type DemilestonedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  milestone: {
    title: string;
  };
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

/**
 * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
 */
export type DeploymentBranchPolicy = {
  /**
   * Whether only branches with branch protection rules can deploy to this environment. If `protected_branches` is `true`, `custom_branch_policies` must be `false`; if `protected_branches` is `false`, `custom_branch_policies` must be `true`.
   */
  protected_branches: boolean;

  /**
   * Whether only branches that match the specified name patterns can deploy to this environment.  If `custom_branch_policies` is `true`, `protected_branches` must be `false`; if `custom_branch_policies` is `false`, `protected_branches` must be `true`.
   */
  custom_branch_policies: boolean;
};

/**
 * The type of reviewer.
 *
 * @example @see https://apihero.run/integrations/github/examples/deployment-reviewer-type
 */
export type DeploymentReviewerType = "User" | "Team";

/**
 * Issue Event Project Card
 */
export type IssueEventProjectCard = {
  id: number;
  url: string;
  project_id: number;
  column_name: string;
  project_url: string;
  previous_column_name?: string;
};

/**
 * Issue Search Result Item
 */
export type IssueSearchResultItem = {
  id: number;
  url: string;
  body?: string;
  user: SimpleUser | null;
  draft?: boolean;
  score: number;
  state: string;
  title: string;
  labels: Array<{
    id?: number;
    url?: string;
    name?: string;
    color?: string;
    default?: boolean;
    node_id?: string;
    description?: string | null;
  }>;
  locked: boolean;
  number: number;
  node_id: string;
  assignee: SimpleUser | null;
  comments: number;
  html_url: string;
  assignees?: Array<SimpleUser> | null;
  body_html?: string;
  body_text?: string;
  closed_at: string | null;
  milestone: Milestone | null;
  reactions?: ReactionRollup;
  created_at: string;
  events_url: string;
  labels_url: string;
  repository?: Repository;
  updated_at: string;
  comments_url: string;
  pull_request?: {
    url: string | null;
    diff_url: string | null;
    html_url: string | null;
    merged_at?: string | null;
    patch_url: string | null;
  };
  state_reason?: string | null;
  text_matches?: SearchResultTextMatches;
  timeline_url?: string;
  repository_url: string;
  active_lock_reason?: string | null;
  author_association: AuthorAssociation;
  performed_via_github_app?: Integration | null;
};

/**
 * Label Search Result Item
 */
export type LabelSearchResultItem = {
  id: number;
  url: string;
  name: string;
  color: string;
  score: number;
  default: boolean;
  node_id: string;
  description: string | null;
  text_matches?: SearchResultTextMatches;
};

/**
 * Marketplace Listing Plan
 */
export type MarketplaceListingPlan = {
  /**
   *
   * @example
   * 1313
   */
  id: number;

  /**
   *
   * @example
   * "https://api.github.com/marketplace_listing/plans/1313"
   */
  url: string;

  /**
   *
   * @example
   * "Pro"
   */
  name: string;

  /**
   *
   * @example
   * "published"
   */
  state: string;

  /**
   *
   * @example
   * 3
   */
  number: number;

  /**
   *
   * @example
   * ["Up to 25 private repositories"]
   *
   * @example
   * ["11 concurrent builds"]
   */
  bullets: Array<string>;
  unit_name: string | null;

  /**
   *
   * @example
   * "A professional-grade CI solution"
   */
  description: string;

  /**
   *
   * @example
   * "flat-rate"
   */
  price_model: string;

  /**
   *
   * @example
   * "https://api.github.com/marketplace_listing/plans/1313/accounts"
   */
  accounts_url: string;

  /**
   *
   * @example
   * true
   */
  has_free_trial: boolean;

  /**
   *
   * @example
   * 11870
   */
  yearly_price_in_cents: number;

  /**
   *
   * @example
   * 1099
   */
  monthly_price_in_cents: number;
};

export type RunnerGroupsEnterprise = {
  id: number;
  name: string;
  default: boolean;
  visibility: string;
  runners_url: string;

  /**
   * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
   * Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.
   *
   * @example
   * ["octo-org/octo-repo/.github/workflows/deploy.yaml@main"]
   */
  selected_workflows?: Array<string>;

  /**
   * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
   */
  restricted_to_workflows?: boolean;
  allows_public_repositories: boolean;
  selected_organizations_url?: string;

  /**
   * If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified.
   */
  workflow_restrictions_read_only?: boolean;
};

export type SecretScanningLocation = {
  /**
   * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
   *
   * @example
   * "commit"
   */
  type: "commit";
  details: SecretScanningLocationCommit;
};

/**
 * State Change Issue Event
 */
export type StateChangeIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  state_reason?: string | null;
  performed_via_github_app: Integration | null;
};

/**
 * Timeline Committed Event
 */
export type TimelineCommittedEvent = {
  /**
   * SHA for the commit
   *
   * @example
   * "7638417db6d59f3c431d3e1f261cc637155684cd"
   */
  sha: string;
  url: string;
  tree: {
    /**
     * SHA for the commit
     *
     * @example
     * "7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    sha: string;
    url: string;
  };
  event?: string;

  /**
   * Identifying information for the git-user
   */
  author: {
    /**
     * Timestamp of the commit
     *
     * @example
     * "2014-08-09T08:02:04+12:00"
     */
    date: string;

    /**
     * Name of the git user
     *
     * @example
     * "Monalisa Octocat"
     */
    name: string;

    /**
     * Git email address of the user
     *
     * @example
     * "monalisa.octocat@example.com"
     */
    email: string;
  };

  /**
   * Message describing the purpose of the commit
   *
   * @example
   * "Fix #42"
   */
  message: string;
  node_id: string;
  parents: Array<{
    /**
     * SHA for the commit
     *
     * @example
     * "7638417db6d59f3c431d3e1f261cc637155684cd"
     */
    sha: string;
    url: string;
    html_url: string;
  }>;
  html_url: string;

  /**
   * Identifying information for the git-user
   */
  committer: {
    /**
     * Timestamp of the commit
     *
     * @example
     * "2014-08-09T08:02:04+12:00"
     */
    date: string;

    /**
     * Name of the git user
     *
     * @example
     * "Monalisa Octocat"
     */
    name: string;

    /**
     * Git email address of the user
     *
     * @example
     * "monalisa.octocat@example.com"
     */
    email: string;
  };
  verification: {
    reason: string;
    payload: string | null;
    verified: boolean;
    signature: string | null;
  };
};

/**
 * Topic Search Result Item
 */
export type TopicSearchResultItem = {
  name: string;
  score: number;
  aliases?: Array<{
    topic_relation?: {
      id?: number;
      name?: string;
      topic_id?: number;
      relation_type?: string;
    };
  }> | null;
  curated: boolean;
  related?: Array<{
    topic_relation?: {
      id?: number;
      name?: string;
      topic_id?: number;
      relation_type?: string;
    };
  }> | null;
  featured: boolean;
  logo_url?: string | null;
  released: string | null;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  description: string | null;
  display_name: string | null;
  text_matches?: SearchResultTextMatches;
  repository_count?: number | null;
  short_description: string | null;
};

/**
 * Branch Restriction Policy
 * @example @see https://apihero.run/integrations/github/examples/branch-restriction-policy
 */
export type BranchRestrictionPolicy = {
  url: string;
  apps: Array<{
    id?: number;
    name?: string;
    slug?: string;
    owner?: {
      id?: number;
      url?: string;

      /**
       *
       * @example
       * "\"Organization\""
       */
      type?: string;
      login?: string;
      node_id?: string;

      /**
       *
       * @example
       * "\"https://github.com/testorg-ea8ec76d71c3af4b\""
       */
      html_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/gists{/gist_id}\""
       */
      gists_url?: string;
      hooks_url?: string;
      repos_url?: string;
      avatar_url?: string;
      events_url?: string;
      issues_url?: string;

      /**
       *
       * @example
       * false
       */
      site_admin?: boolean;
      description?: string;

      /**
       *
       * @example
       * "\"\""
       */
      gravatar_id?: string;
      members_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/starred{/owner}{/repo}\""
       */
      starred_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/followers\""
       */
      followers_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/following{/other_user}\""
       */
      following_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/orgs\""
       */
      organizations_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/subscriptions\""
       */
      subscriptions_url?: string;
      public_members_url?: string;

      /**
       *
       * @example
       * "\"https://api.github.com/users/testorg-ea8ec76d71c3af4b/received_events\""
       */
      received_events_url?: string;
    };
    events?: Array<string>;
    node_id?: string;
    html_url?: string;
    created_at?: string;
    updated_at?: string;
    description?: string;
    permissions?: {
      issues?: string;
      contents?: string;
      metadata?: string;
      single_file?: string;
    };
    external_url?: string;
  }>;
  teams: Array<{
    id?: number;
    url?: string;
    name?: string;
    slug?: string;
    parent?: string | null;
    node_id?: string;
    privacy?: string;
    html_url?: string;
    permission?: string;
    description?: string | null;
    members_url?: string;
    repositories_url?: string;
  }>;
  users: Array<{
    id?: number;
    url?: string;
    type?: string;
    login?: string;
    node_id?: string;
    html_url?: string;
    gists_url?: string;
    repos_url?: string;
    avatar_url?: string;
    events_url?: string;
    site_admin?: boolean;
    gravatar_id?: string;
    starred_url?: string;
    followers_url?: string;
    following_url?: string;
    organizations_url?: string;
    subscriptions_url?: string;
    received_events_url?: string;
  }>;
  apps_url: string;
  teams_url: string;
  users_url: string;
};

export type CodeScanningAlertItems = {
  url: AlertUrl;
  rule: CodeScanningAlertRuleSummary;
  tool: CodeScanningAnalysisTool;
  state: CodeScanningAlertState;
  number: AlertNumber;
  fixed_at?: CodeScanningAlertFixedAt;
  html_url: AlertHtmlUrl;
  created_at: AlertCreatedAt;
  updated_at?: AlertUpdatedAt;
  dismissed_at: CodeScanningAlertDismissedAt;
  dismissed_by: SimpleUser | null;
  instances_url: AlertInstancesUrl;
  dismissed_reason: CodeScanningAlertDismissedReason;
  dismissed_comment?: CodeScanningAlertDismissedComment;
  most_recent_instance: CodeScanningAlertInstance;
};

/**
 * State of a code scanning alert.
 */
export type CodeScanningAlertState = "open" | "closed" | "dismissed" | "fixed";

/**
 * Commit Search Result Item
 */
export type CommitSearchResultItem = {
  sha: string;
  url: string;
  score: number;
  author: SimpleUser | null;
  commit: {
    url: string;
    tree: {
      sha: string;
      url: string;
    };
    author: {
      date: string;
      name: string;
      email: string;
    };
    message: string;
    committer: GitUser | null;
    verification?: Verification;
    comment_count: number;
  };
  node_id: string;
  parents: Array<{
    sha?: string;
    url?: string;
    html_url?: string;
  }>;
  html_url: string;
  committer: GitUser | null;
  repository: MinimalRepository;
  comments_url: string;
  text_matches?: SearchResultTextMatches;
};

/**
 * Pull Request Merge Result
 */
export type PullRequestMergeResult = {
  sha: string;
  merged: boolean;
  message: string;
};

export type ScimUserListEnterprise = {
  schemas: Array<string>;
  Resources: Array<{
    id: string;
    meta?: {
      created?: string;
      location?: string;
      lastModified?: string;
      resourceType?: string;
    };
    name?: {
      givenName?: string;
      familyName?: string;
    };
    active?: boolean;
    emails?: Array<{
      type?: string;
      value?: string;
      primary?: boolean;
    }>;
    groups?: Array<{
      value?: string;
    }>;
    schemas: Array<string>;
    userName?: string;
    externalId?: string;
  }>;
  startIndex: number;
  itemsPerPage: number;
  totalResults: number;
};

/**
 * User Marketplace Purchase
 */
export type UserMarketplacePurchase = {
  plan: MarketplaceListingPlan;
  account: MarketplaceAccount;
  unit_count: number | null;

  /**
   *
   * @example
   * "2017-11-02T01:12:12Z"
   */
  updated_at: string | null;

  /**
   *
   * @example
   * "monthly"
   */
  billing_cycle: string;

  /**
   *
   * @example
   * true
   */
  on_free_trial: boolean;

  /**
   *
   * @example
   * "2017-11-11T00:00:00Z"
   */
  next_billing_date: string | null;

  /**
   *
   * @example
   * "2017-11-11T00:00:00Z"
   */
  free_trial_ends_on: string | null;
};

/**
 * The REST API URL of the analysis resource.
 */
export type CodeScanningAnalysisUrl = string;

/**
 * The public key used for setting user Codespaces' Secrets.
 * @example @see https://apihero.run/integrations/github/examples/codespaces-user-public-key
 */
export type CodespacesUserPublicKey = {
  /**
   * The Base64 encoded public key.
   *
   * @example
   * "hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs="
   */
  key: string;

  /**
   * The identifier for the key.
   *
   * @example
   * "1234567"
   */
  key_id: string;
};

/**
 * Interaction limit settings.
 * @example @see https://apihero.run/integrations/github/examples/interaction-limit-response
 */
export type InteractionLimitResponse = {
  limit: InteractionGroup;

  /**
   *
   * @example
   * "repository"
   */
  origin: string;

  /**
   *
   * @example
   * "2018-08-17T04:18:39Z"
   */
  expires_at: string;
};

export type ScimGroupListEnterprise = {
  schemas: Array<string>;
  Resources: Array<{
    id: string;
    meta?: {
      created?: string;
      location?: string;
      lastModified?: string;
      resourceType?: string;
    };
    members?: Array<{
      $ref?: string;
      value?: string;
      display?: string;
    }>;
    schemas: Array<string>;
    externalId?: string | null;
    displayName?: string;
  }>;
  startIndex: number;
  itemsPerPage: number;
  totalResults: number;
};

export type SearchResultTextMatches = Array<{
  matches?: Array<{
    text?: string;
    indices?: Array<number>;
  }>;
  fragment?: string;
  property?: string;
  object_url?: string;
  object_type?: string | null;
}>;

export type CodeScanningAnalysisTool = {
  guid?: CodeScanningAnalysisToolGuid;
  name?: CodeScanningAnalysisToolName;
  version?: CodeScanningAnalysisToolVersion;
};

export type CodeScanningSarifsStatus = {
  /**
   * Any errors that ocurred during processing of the delivery.
   */
  readonly errors?: Array<string> | null;

  /**
   * The REST API URL for getting the analyses associated with the upload.
   */
  readonly analyses_url?: string | null;

  /**
   * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
   */
  processing_status?: "pending" | "complete" | "failed";
};

/**
 * Secrets for GitHub Actions for an organization.
 * @example @see https://apihero.run/integrations/github/examples/organization-actions-secret
 */
export type OrganizationActionsSecret = {
  /**
   * The name of the secret.
   *
   * @example
   * "SECRET_TOKEN"
   */
  name: string;
  created_at: string;
  updated_at: string;

  /**
   * Visibility of a secret
   */
  visibility: "all" | "private" | "selected";

  /**
   *
   * @example
   * "https://api.github.com/organizations/org/secrets/my_secret/repositories"
   */
  selected_repositories_url?: string;
};

/**
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
 * @example @see https://apihero.run/integrations/github/examples/pull-request-review-comment
 */
export type PullRequestReviewComment = {
  /**
   * The ID of the pull request review comment.
   *
   * @example
   * 1
   */
  id: number;

  /**
   * URL for the pull request review comment
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1"
   */
  url: string;

  /**
   * The text of the comment.
   *
   * @example
   * "We should probably include a check for null values here."
   */
  body: string;

  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   *
   * @example
   * 2
   */
  line?: number;

  /**
   * The relative path of the file to which the comment applies.
   *
   * @example
   * "config/database.yaml"
   */
  path: string;

  /**
   * The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
   */
  side?: "LEFT" | "RIGHT";
  user: SimpleUser;
  _links: {
    html: {
      /**
       *
       * @example
       * "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1"
       */
      href: string;
    };
    self: {
      /**
       *
       * @example
       * "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1"
       */
      href: string;
    };
    pull_request: {
      /**
       *
       * @example
       * "https://api.github.com/repos/octocat/Hello-World/pulls/1"
       */
      href: string;
    };
  };

  /**
   * The node ID of the pull request review comment.
   *
   * @example
   * "MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw"
   */
  node_id: string;

  /**
   * HTML URL for the pull request review comment.
   *
   * @example
   * "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1"
   */
  html_url: string;

  /**
   * The line index in the diff to which the comment applies. This field is deprecated; use `line` instead.
   *
   * @example
   * 1
   */
  position: number;

  /**
   *
   * @example
   * "\"<p>comment body</p>\""
   */
  body_html?: string;

  /**
   *
   * @example
   * "\"comment body\""
   */
  body_text?: string;

  /**
   * The SHA of the commit to which the comment applies.
   *
   * @example
   * "6dcb09b5b57875f334f61aebed695e2e4193db5e"
   */
  commit_id: string;

  /**
   * The diff of the line that the comment refers to.
   *
   * @example
   * "@@ -16,33 +16,40 @@ public class Connection : IConnection..."
   */
  diff_hunk: string;
  reactions?: ReactionRollup;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  created_at: string;

  /**
   * The first line of the range for a multi-line comment.
   *
   * @example
   * 2
   */
  start_line?: number | null;

  /**
   * The side of the first line of the range for a multi-line comment.
   */
  start_side?: "LEFT" | "RIGHT" | null;

  /**
   *
   * @example
   * "2011-04-14T16:00:49Z"
   */
  updated_at: string;

  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   *
   * @example
   * 2
   */
  original_line?: number;

  /**
   * The comment ID to reply to.
   *
   * @example
   * 8
   */
  in_reply_to_id?: number;

  /**
   * URL for the pull request that the review comment belongs to.
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/pulls/1"
   */
  pull_request_url: string;

  /**
   * The index of the original line in the diff to which the comment applies. This field is deprecated; use `original_line` instead.
   *
   * @example
   * 4
   */
  original_position: number;
  author_association: AuthorAssociation;

  /**
   * The SHA of the original commit to which the comment applies.
   *
   * @example
   * "9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840"
   */
  original_commit_id: string;

  /**
   * The first line of the range for a multi-line comment.
   *
   * @example
   * 2
   */
  original_start_line?: number | null;

  /**
   * The ID of the pull request review to which the comment belongs.
   *
   * @example
   * 42
   */
  pull_request_review_id: number | null;
};

/**
 * Pull Request Review Request
 * @example @see https://apihero.run/integrations/github/examples/pull-request-review-request
 */
export type PullRequestReviewRequest = {
  teams: Array<Team>;
  users: Array<SimpleUser>;
};

/**
 * Sets the state of the secret scanning alert. Can be either `open` or `resolved`. You must provide `resolution` when you set the state to `resolved`.
 */
export type SecretScanningAlertState = "open" | "resolved";

/**
 * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 *
 * @example @see https://apihero.run/integrations/github/examples/webhook-config-content-type
 */
export type WebhookConfigContentType = string;

export type WebhookConfigInsecureSsl = string | number;

/**
 * Added to Project Issue Event
 */
export type AddedToProjectIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  project_card?: {
    id: number;
    url: string;
    project_id: number;
    column_name: string;
    project_url: string;
    previous_column_name?: string;
  };
  performed_via_github_app: Integration | null;
};

/**
 * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type CodeScanningAlertFixedAt = string | null;

export type CodeScanningAlertInstance = {
  ref?: CodeScanningRef;
  state?: CodeScanningAlertState;
  message?: {
    text?: string;
  };
  category?: CodeScanningAnalysisCategory;
  html_url?: string;
  location?: CodeScanningAlertLocation;
  commit_sha?: string;
  environment?: CodeScanningAlertEnvironment;
  analysis_key?: CodeScanningAnalysisAnalysisKey;

  /** 
* Classifications that have been applied to the file that triggered the alert.
For example identifying it as documentation, or a generated file.
*/
  classifications?: Array<CodeScanningAlertClassification>;
};

/**
 * Describe a region within a file for the alert.
 */
export type CodeScanningAlertLocation = {
  path?: string;
  end_line?: number;
  end_column?: number;
  start_line?: number;
  start_column?: number;
};

export type CodeScanningSarifsReceipt = {
  id?: CodeScanningAnalysisSarifId;

  /**
   * The REST API URL for checking the status of the upload.
   */
  readonly url?: string;
};

export type IssueEventDismissedReview = {
  state: string;
  review_id: number;
  dismissal_message: string | null;
  dismissal_commit_id?: string | null;
};

export type MergeGroupChecksRequested = {
  action: string;
  sender?: SimpleUser;
  repository?: Repository;
  merge_group: {
    base_ref: string;
    head_ref: string;
    head_sha: string;
  };
  installation?: SimpleInstallation;
  organization?: OrganizationSimple;
};

/**
 * Review Dismissed Issue Event
 */
export type ReviewDismissedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  dismissed_review: {
    state: string;
    review_id: number;
    dismissal_message: string | null;
    dismissal_commit_id?: string;
  };
  performed_via_github_app: Integration | null;
};

/**
 * Review Requested Issue Event
 */
export type ReviewRequestedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  requested_team?: Team;
  review_requester: SimpleUser;
  requested_reviewer?: SimpleUser;
  performed_via_github_app: Integration | null;
};

/**
 * Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.
 */
export type CodeScanningAlertSetState = "open" | "dismissed";

/**
 * Timeline Assigned Issue Event
 */
export type TimelineAssignedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  assignee: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

/**
 * Timeline Line Commented Event
 */
export type TimelineLineCommentedEvent = {
  event?: string;
  node_id?: string;
  comments?: Array<PullRequestReviewComment>;
};

export type ActionsEnterprisePermissions = {
  allowed_actions?: AllowedActions;
  selected_actions_url?: SelectedActionsUrl;
  enabled_organizations: EnabledOrganizations;

  /**
   * The API URL to use to get or set the selected organizations that are allowed to run GitHub Actions, when `enabled_organizations` is set to `selected`.
   */
  selected_organizations_url?: string;
};

export type ActionsRepositoryPermissions = {
  enabled: ActionsEnabled;
  allowed_actions?: AllowedActions;
  selected_actions_url?: SelectedActionsUrl;
};

/**
 * Secrets for GitHub Dependabot for an organization.
 * @example @see https://apihero.run/integrations/github/examples/organization-dependabot-secret
 */
export type OrganizationDependabotSecret = {
  /**
   * The name of the secret.
   *
   * @example
   * "SECRET_TOKEN"
   */
  name: string;
  created_at: string;
  updated_at: string;

  /**
   * Visibility of a secret
   */
  visibility: "all" | "private" | "selected";

  /**
   *
   * @example
   * "https://api.github.com/organizations/org/dependabot/secrets/my_secret/repositories"
   */
  selected_repositories_url?: string;
};

/**
 * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
 */
export type CodeScanningAlertEnvironment = string;

/**
 * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
 */
export type CodeScanningAnalysisCategory = string;

/**
 * Successful deletion of a code scanning analysis
 * @example @see https://apihero.run/integrations/github/examples/code-scanning-analysis-deletion
 */
export type CodeScanningAnalysisDeletion = {
  /**
   * Next deletable analysis in chain, without last analysis deletion confirmation
   */
  readonly next_analysis_url: string | null;

  /**
   * Next deletable analysis in chain, with last analysis deletion confirmation
   */
  readonly confirm_delete_url: string | null;
};

/**
 * An identifier for the upload.
 *
 * @example @see https://apihero.run/integrations/github/examples/code-scanning-analysis-sarif-id
 */
export type CodeScanningAnalysisSarifId = string;

/**
 * Project Collaborator Permission
 * @example @see https://apihero.run/integrations/github/examples/project-collaborator-permission
 */
export type ProjectCollaboratorPermission = {
  user: SimpleUser | null;
  permission: string;
};

/**
 * Protected Branch Admin Enforced
 * @example @see https://apihero.run/integrations/github/examples/protected-branch-admin-enforced
 */
export type ProtectedBranchAdminEnforced = {
  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins"
   */
  url: string;

  /**
   *
   * @example
   * true
   */
  enabled: boolean;
};

/**
 * Represents a 'commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository.
 */
export type SecretScanningLocationCommit = {
  /**
   * The file path in the repository
   *
   * @example
   * "/example/secrets.txt"
   */
  path: string;

  /**
   * SHA-1 hash ID of the associated blob
   *
   * @example
   * "af5626b4a114abcb82d63db7c8082c3c4756e51b"
   */
  blob_sha: string;

  /**
   * The API URL to get the associated blob resource
   */
  blob_url: string;

  /**
   * Line number at which the secret ends in the file
   */
  end_line: number;

  /**
   * SHA-1 hash ID of the associated commit
   *
   * @example
   * "af5626b4a114abcb82d63db7c8082c3c4756e51b"
   */
  commit_sha: string;

  /**
   * The API URL to get the associated commit resource
   */
  commit_url: string;

  /**
   * The column at which the secret ends within the end line when the file is interpreted as 8BIT ASCII
   */
  end_column: number;

  /**
   * Line number at which the secret starts in the file
   */
  start_line: number;

  /**
   * The column at which the secret starts within the start line when the file is interpreted as 8BIT ASCII
   */
  start_column: number;
};

/**
 * Timeline Commit Commented Event
 */
export type TimelineCommitCommentedEvent = {
  event?: string;
  node_id?: string;
  comments?: Array<CommitComment>;
  commit_id?: string;
};

/**
 * Timeline Cross Referenced Event
 */
export type TimelineCrossReferencedEvent = {
  actor?: SimpleUser;
  event: string;
  source: {
    type?: string;
    issue?: Issue;
  };
  created_at: string;
  updated_at: string;
};

/**
 * Timeline Unassigned Issue Event
 */
export type TimelineUnassignedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  assignee: SimpleUser;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: Integration | null;
};

export type ActionsOrganizationPermissions = {
  allowed_actions?: AllowedActions;
  enabled_repositories: EnabledRepositories;
  selected_actions_url?: SelectedActionsUrl;

  /**
   * The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.
   */
  selected_repositories_url?: string;
};

/**
 * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type CodeScanningAlertDismissedAt = string | null;

export type CodeScanningAlertRuleSummary = {
  /**
   * A unique identifier for the rule used to detect the alert.
   */
  id?: string | null;

  /**
   * The name of the rule used to detect the alert.
   */
  name?: string;

  /**
   * A set of tags applicable for the rule.
   */
  tags?: Array<string> | null;

  /**
   * The severity of the alert.
   */
  severity?: "none" | "note" | "warning" | "error" | null;

  /**
   * A short description of the rule used to detect the alert.
   */
  description?: string;
};

/**
 * The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.
 */
export type CodeScanningAnalysisToolGuid = string | null;

/**
 * The name of the tool used to generate the code scanning analysis.
 */
export type CodeScanningAnalysisToolName = string;

/**
 * Removed from Project Issue Event
 */
export type RemovedFromProjectIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  project_card?: {
    id: number;
    url: string;
    project_id: number;
    column_name: string;
    project_url: string;
    previous_column_name?: string;
  };
  performed_via_github_app: Integration | null;
};

/**
 * **Required when the `state` is `resolved`.** The reason for resolving the alert.
 */
export type SecretScanningAlertResolution =
  | "false_positive"
  | "wont_fix"
  | "revoked"
  | "used_in_tests"
  | null;

/**
 * GitHub Actions Cache Usage by repository.
 */
export type ActionsCacheUsageByRepository = {
  /**
   * The repository owner and name for the cache usage being shown.
   *
   * @example
   * "octo-org/Hello-World"
   */
  full_name: string;

  /**
   * The number of active caches in the repository.
   *
   * @example
   * 3
   */
  active_caches_count: number;

  /**
   * The sum of the size in bytes of all the active cache items in the repository.
   *
   * @example
   * 2322142
   */
  active_caches_size_in_bytes: number;
};

/**
 * The SHA of the commit to which the analysis you are uploading relates.
 */
export type CodeScanningAnalysisCommitSha = string;

/**
 * The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
 */
export type CodeScanningAnalysisCreatedAt = string;

/**
 * A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning)."
 */
export type CodeScanningAnalysisSarifFile = string;

export type ActionsCacheUsageOrgEnterprise = {
  /**
   * The count of active caches across all repositories of an enterprise or an organization.
   */
  total_active_caches_count: number;

  /**
   * The total size in bytes of all active cache items across all repositories of an enterprise or an organization.
   */
  total_active_caches_size_in_bytes: number;
};

/**
 * A classification of the file. For example to identify it as generated.
 */
export type CodeScanningAlertClassification = "source" | "generated" | "test" | "library" | null;

/**
 * Identifies the variable values associated with the environment in which this analysis was performed.
 */
export type CodeScanningAnalysisEnvironment = string;

export type OrganizationSecretScanningAlert = {
  url?: AlertUrl;
  state?: SecretScanningAlertState;
  number?: AlertNumber;

  /**
   * The secret that was detected.
   */
  secret?: string;
  html_url?: AlertHtmlUrl;
  created_at?: AlertCreatedAt;
  repository?: SimpleRepository;
  resolution?: SecretScanningAlertResolution;
  updated_at?: AlertUpdatedAt | null;

  /**
   * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  resolved_at?: string | null;
  resolved_by?: SimpleUser | null;

  /**
   * The type of secret that secret scanning detected.
   */
  secret_type?: string;

  /**
   * The REST API URL of the code locations for this alert.
   */
  locations_url?: string;

  /**
   * Whether push protection was bypassed for the detected secret.
   */
  push_protection_bypassed?: boolean | null;

  /** 
* User-friendly name for the detected secret, matching the `secret_type`.
For a list of built-in patterns, see "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)."
*/
  secret_type_display_name?: string;

  /**
   * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  push_protection_bypassed_at?: string | null;
  push_protection_bypassed_by?: SimpleUser | null;
};

/**
 * Repository Collaborator Permission
 */
export type RepositoryCollaboratorPermission = {
  user: Collaborator | null;

  /**
   *
   * @example
   * "admin"
   */
  role_name: string;
  permission: string;
};

/**
 * Review Request Removed Issue Event
 */
export type ReviewRequestRemovedIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  requested_team?: Team;
  review_requester: SimpleUser;
  requested_reviewer?: SimpleUser;
  performed_via_github_app: Integration | null;
};

export type AdvancedSecurityActiveCommitters = {
  /**
   *
   * @example
   * 2
   */
  total_count?: number;
  repositories: Array<AdvancedSecurityActiveCommittersRepository>;

  /**
   *
   * @example
   * 25
   */
  total_advanced_security_committers?: number;
};

/**
 * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
 */
export type CodeScanningAnalysisAnalysisKey = string;

/**
 * The version of the tool used to generate the code scanning analysis.
 */
export type CodeScanningAnalysisToolVersion = string | null;

/**
 * Converted Note to Issue Issue Event
 */
export type ConvertedNoteToIssueIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  project_card?: {
    id: number;
    url: string;
    project_id: number;
    column_name: string;
    project_url: string;
    previous_column_name?: string;
  };
  performed_via_github_app: Integration;
};

/**
 * Moved Column in Project Issue Event
 */
export type MovedColumnInProjectIssueEvent = {
  id: number;
  url: string;
  actor: SimpleUser;
  event: string;
  node_id: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  project_card?: {
    id: number;
    url: string;
    project_id: number;
    column_name: string;
    project_url: string;
    previous_column_name?: string;
  };
  performed_via_github_app: Integration | null;
};

/**
 * Custom repository roles created by organization administrators
 */
export type OrganizationCustomRepositoryRole = {
  /**
   * The unique identifier of the custom role.
   */
  id: number;

  /**
   * The name of the custom role.
   */
  name: string;
};

/**
 * The default workflow permissions granted to the GITHUB_TOKEN when running workflows.
 * @example @see https://apihero.run/integrations/github/examples/actions-default-workflow-permissions
 */
export type ActionsDefaultWorkflowPermissions = "read" | "write";

/**
 * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
 */
export type CodeScanningAlertDismissedReason =
  | "false positive"
  | "won't fix"
  | "used in tests"
  | null;

/**
 * Protected Branch Pull Request Review
 * @example @see https://apihero.run/integrations/github/examples/protected-branch-pull-request-review
 */
export type ProtectedBranchPullRequestReview = {
  /**
   *
   * @example
   * "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions"
   */
  url?: string;

  /**
   *
   * @example
   * true
   */
  dismiss_stale_reviews: boolean;
  dismissal_restrictions?: {
    /**
     *
     * @example
     * "\"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions\""
     */
    url?: string;

    /**
     * The list of apps with review dismissal access.
     */
    apps?: Array<Integration>;

    /**
     * The list of teams with review dismissal access.
     */
    teams?: Array<Team>;

    /**
     * The list of users with review dismissal access.
     */
    users?: Array<SimpleUser>;

    /**
     *
     * @example
     * "\"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions/teams\""
     */
    teams_url?: string;

    /**
     *
     * @example
     * "\"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions/users\""
     */
    users_url?: string;
  };

  /**
   *
   * @example
   * true
   */
  require_code_owner_reviews: boolean;

  /**
   * Allow specific users, teams, or apps to bypass pull request requirements.
   */
  bypass_pull_request_allowances?: {
    /**
     * The list of apps allowed to bypass pull request requirements.
     */
    apps?: Array<Integration>;

    /**
     * The list of teams allowed to bypass pull request requirements.
     */
    teams?: Array<Team>;

    /**
     * The list of users allowed to bypass pull request requirements.
     */
    users?: Array<SimpleUser>;
  };

  /**
   *
   * @example
   * 2
   */
  required_approving_review_count?: number;
};

export type ActionsWorkflowAccessToRepository = {
  /** 
* Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
repository. `none` means access is only possible from workflows in this repository.
*/
  access_level: "none" | "organization" | "enterprise";
};

/**
 * The dismissal comment associated with the dismissal of the alert.
 */
export type CodeScanningAlertDismissedComment = string | null;

export type CodeScanningOrganizationAlertItems = {
  url: AlertUrl;
  rule: CodeScanningAlertRule;
  tool: CodeScanningAnalysisTool;
  state: CodeScanningAlertState;
  number: AlertNumber;
  fixed_at?: CodeScanningAlertFixedAt;
  html_url: AlertHtmlUrl;
  created_at: AlertCreatedAt;
  repository: SimpleRepository;
  updated_at?: AlertUpdatedAt;
  dismissed_at: CodeScanningAlertDismissedAt;
  dismissed_by: SimpleUser | null;
  instances_url: AlertInstancesUrl;
  dismissed_reason: CodeScanningAlertDismissedReason;
  dismissed_comment?: CodeScanningAlertDismissedComment;
  most_recent_instance: CodeScanningAlertInstance;
};

/**
 * Protected Branch Required Status Check
 */
export type ProtectedBranchRequiredStatusCheck = {
  url?: string;
  checks: Array<{
    app_id: number | null;
    context: string;
  }>;
  strict?: boolean;
  contexts: Array<string>;
  contexts_url?: string;
  enforcement_level?: string;
};

/**
 * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
 */
export type ActionsCanApprovePullRequestReviews = boolean;

export type ActionsGetDefaultWorkflowPermissions = {
  default_workflow_permissions: ActionsDefaultWorkflowPermissions;
  can_approve_pull_request_reviews: ActionsCanApprovePullRequestReviews;
};

export type ActionsSetDefaultWorkflowPermissions = {
  default_workflow_permissions?: ActionsDefaultWorkflowPermissions;
  can_approve_pull_request_reviews?: ActionsCanApprovePullRequestReviews;
};

export type AdvancedSecurityActiveCommittersUser = {
  user_login: string;

  /**
   *
   * @example
   * "2021-11-03"
   */
  last_pushed_date: string;
};

export type AdvancedSecurityActiveCommittersRepository = {
  /**
   *
   * @example
   * "octocat/Hello-World"
   */
  name: string;

  /**
   *
   * @example
   * 25
   */
  advanced_security_committers: number;
  advanced_security_committers_breakdown: Array<AdvancedSecurityActiveCommittersUser>;
};

export type ActionsOidcCustomIssuerPolicyForEnterprise = {
  /**
   * Whether the enterprise customer requested a custom issuer URL.
   *
   * @example
   * true
   */
  include_enterprise_slug?: boolean;
};
