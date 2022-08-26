import {
  Link,
  Project,
  ProjectCard,
  ProjectCollaboratorPermission,
  ProjectColumn,
  SimpleUser,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/projects#create-a-user-project


* Create a user project
* Creates a user project board. Returns a `410 Gone` status if the user does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned. 
*/
export const createForAuthenticatedUser: ApiHeroEndpoint<
  {
    project: {
      /**
       * Body of the project
       *
       * @example
       * "This project represents the sprint of the first week in January"
       */
      body?: string | null;

      /**
       * Name of the project
       *
       * @example
       * "Week One Sprint"
       */
      name: string;
    };
  },
  Project
> = {
  id: "projects/create-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#list-organization-projects


* List organization projects
* Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`. 
*/
export const listForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number; state?: "open" | "closed" | "all" },
  Array<Project>,
  { Link: Link }
> = {
  id: "projects/list-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#create-an-organization-project


* Create an organization project
* Creates an organization project board. Returns a `410 Gone` status if projects are disabled in the organization or if the organization does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
* @param org - The organization name. The name is not case sensitive. 
*/
export const createForOrg: ApiHeroEndpoint<
  {
    org: string;
    project: {
      /**
       * The description of the project.
       */
      body?: string;

      /**
       * The name of the project.
       */
      name: string;
    };
  },
  Project
> = {
  id: "projects/create-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#get-a-project


* Get a project
* Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
* @param projectId - The unique identifier of the project. 
*/
export const getProjects: ApiHeroEndpoint<{ projectId: number }, Project> = {
  id: "projects/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#delete-a-project


* Delete a project
* Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
* @param projectId - The unique identifier of the project. 
*/
export const deleteProjects: ApiHeroEndpoint<{ projectId: number }, void> = {
  id: "projects/delete",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#update-a-project


* Update a project
* Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
* @param projectId - The unique identifier of the project. 
*/
export const update: ApiHeroEndpoint<
  {
    projectId: number;
    project?: {
      /**
       * Body of the project
       *
       * @example
       * "This project represents the sprint of the first week in January"
       */
      body?: string | null;

      /**
       * Name of the project
       *
       * @example
       * "Week One Sprint"
       */
      name?: string;

      /**
       * State of the project; either 'open' or 'closed'
       *
       * @example
       * "open"
       */
      state?: string;

      /**
       * Whether or not this project can be seen by everyone.
       */
      private?: boolean;

      /**
       * The baseline permission that all organization members have on this project
       */
      organization_permission?: "read" | "write" | "admin" | "none";
    };
  },
  Project
> = {
  id: "projects/update",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#list-user-projects


* List user projects
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`. 
*/
export const listForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number; state?: "open" | "closed" | "all" },
  Array<Project>,
  { Link: Link }
> = {
  id: "projects/list-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#get-a-project-column


* Get a project column
* @param columnId - The unique identifier of the column. 
*/
export const getColumn: ApiHeroEndpoint<{ columnId: number }, ProjectColumn> = {
  id: "projects/get-column",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#delete-a-project-column


* Delete a project column
* @param columnId - The unique identifier of the column. 
*/
export const deleteColumn: ApiHeroEndpoint<{ columnId: number }, void> = {
  id: "projects/delete-column",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#update-a-project-column


* Update an existing project column
* @param columnId - The unique identifier of the column. 
*/
export const updateColumn: ApiHeroEndpoint<
  {
    columnId: number;
    column: {
      /**
       * Name of the project column
       *
       * @example
       * "Remaining tasks"
       */
      name: string;
    };
  },
  ProjectColumn
> = {
  id: "projects/update-column",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#list-project-columns


* List project columns
* @param projectId - The unique identifier of the project.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listColumns: ApiHeroEndpoint<
  { projectId: number; perPage?: number; page?: number },
  Array<ProjectColumn>,
  { Link: Link }
> = {
  id: "projects/list-columns",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#create-a-project-column


* Create a project column
* @param projectId - The unique identifier of the project. 
*/
export const createColumn: ApiHeroEndpoint<
  {
    projectId: number;
    column: {
      /**
       * Name of the project column
       *
       * @example
       * "Remaining tasks"
       */
      name: string;
    };
  },
  ProjectColumn
> = {
  id: "projects/create-column",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#list-repository-projects


* List repository projects
* Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`. 
*/
export const listForRepo: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    perPage?: number;
    page?: number;
    state?: "open" | "closed" | "all";
  },
  Array<Project>,
  { Link: Link }
> = {
  id: "projects/list-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#create-a-repository-project


* Create a repository project
* Creates a repository project board. Returns a `410 Gone` status if projects are disabled in the repository or if the repository does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const createForRepo: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    project: {
      /**
       * The description of the project.
       */
      body?: string;

      /**
       * The name of the project.
       */
      name: string;
    };
  },
  Project
> = {
  id: "projects/create-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#get-a-project-card


* Get a project card
* @param cardId - The unique identifier of the card. 
*/
export const getCard: ApiHeroEndpoint<{ cardId: number }, ProjectCard> = {
  id: "projects/get-card",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#delete-a-project-card


* Delete a project card
* @param cardId - The unique identifier of the card. 
*/
export const deleteCard: ApiHeroEndpoint<{ cardId: number }, void> = {
  id: "projects/delete-card",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#update-a-project-card


* Update an existing project card
* @param cardId - The unique identifier of the card. 
*/
export const updateCard: ApiHeroEndpoint<
  {
    cardId: number;
    card?: {
      /**
       * The project card's note
       *
       * @example
       * "Update all gems"
       */
      note?: string | null;

      /**
       * Whether or not the card is archived
       *
       * @example
       * false
       */
      archived?: boolean;
    };
  },
  ProjectCard
> = {
  id: "projects/update-card",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#list-project-cards


* List project cards
* @param columnId - The unique identifier of the column.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [archivedState] - Filters the project cards that are returned by the card's state. 
*/
export const listCards: ApiHeroEndpoint<
  {
    columnId: number;
    perPage?: number;
    page?: number;
    archivedState?: "all" | "archived" | "not_archived";
  },
  Array<ProjectCard>,
  { Link: Link }
> = {
  id: "projects/list-cards",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#create-a-project-card


* Create a project card
* @param columnId - The unique identifier of the column. 
*/
export const createCard: ApiHeroEndpoint<
  {
    columnId: number;
    card:
      | {
          /**
           * The project card's note
           *
           * @example
           * "Update all gems"
           */
          note: string | null;
        }
      | {
          /**
           * The unique identifier of the content associated with the card
           *
           * @example
           * 42
           */
          content_id: number;

          /**
           * The piece of content associated with the card
           *
           * @example
           * "PullRequest"
           */
          content_type: string;
        };
  },
  ProjectCard
> = {
  id: "projects/create-card",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#move-a-project-column


* Move a project column
* @param columnId - The unique identifier of the column. 
*/
export const moveColumn: ApiHeroEndpoint<
  {
    columnId: number;
    move: {
      /**
       * The position of the column in a project. Can be one of: `first`, `last`, or `after:<column_id>` to place after the specified column.
       *
       * @example
       * "last"
       */
      position: string;
    };
  },
  {}
> = {
  id: "projects/move-column",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#list-project-collaborators


* List project collaborators
* Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
* @param projectId - The unique identifier of the project.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [affiliation] - Filters the collaborators by their affiliation. `outside` means outside collaborators of a project that are not a member of the project's organization. `direct` means collaborators with permissions to a project, regardless of organization membership status. `all` means all collaborators the authenticated user can see. 
*/
export const listCollaborators: ApiHeroEndpoint<
  {
    projectId: number;
    perPage?: number;
    page?: number;
    affiliation?: "outside" | "direct" | "all";
  },
  Array<SimpleUser>,
  { Link: Link }
> = {
  id: "projects/list-collaborators",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#move-a-project-card


* Move a project card
* @param cardId - The unique identifier of the card. 
*/
export const moveCard: ApiHeroEndpoint<
  {
    cardId: number;
    move: {
      /**
       * The position of the card in a column. Can be one of: `top`, `bottom`, or `after:<card_id>` to place after the specified card.
       *
       * @example
       * "bottom"
       */
      position: string;

      /**
       * The unique identifier of the column the card should be moved to
       *
       * @example
       * 42
       */
      column_id?: number;
    };
  },
  {}
> = {
  id: "projects/move-card",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#add-project-collaborator


* Add project collaborator
* Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
* @param username - The handle for the GitHub user account.
* @param projectId - The unique identifier of the project. 
*/
export const addCollaborator: ApiHeroEndpoint<
  {
    username: string;
    projectId: number;
    collaborator?: {
      /**
       * The permission to grant the collaborator.
       *
       * @example
       * "write"
       */
      permission?: "read" | "write" | "admin";
    } | null;
  },
  void
> = {
  id: "projects/add-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#remove-project-collaborator


* Remove user as a collaborator
* Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
* @param username - The handle for the GitHub user account.
* @param projectId - The unique identifier of the project. 
*/
export const removeCollaborator: ApiHeroEndpoint<{ username: string; projectId: number }, void> = {
  id: "projects/remove-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/projects#get-project-permission-for-a-user


* Get project permission for a user
* Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
* @param username - The handle for the GitHub user account.
* @param projectId - The unique identifier of the project. 
*/
export const getPermissionForUser: ApiHeroEndpoint<
  { username: string; projectId: number },
  ProjectCollaboratorPermission
> = {
  id: "projects/get-permission-for-user",
  clientId: "github",
};
