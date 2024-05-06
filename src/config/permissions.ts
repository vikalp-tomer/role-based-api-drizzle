export const ALL_PERMISSOINS = [
  // users
  "users:roles:write", // Allowed to add a role to a user
  "users:roles:delete", // Allowed to remove a role from a user

  // posts
  "posts:write",
  "posts:read",
] as const;

export const PERMISSIONS = ALL_PERMISSOINS.reduce((acc, permission) => {
  acc[permission] = permission;

  return acc;
}, {} as Record<(typeof ALL_PERMISSOINS)[number], (typeof ALL_PERMISSOINS)[number]>);

export const USER_ROLE_PERMISSIONS = [
  PERMISSIONS["posts:write"],
  PERMISSIONS["posts:read"],
];

export const SYSTEM_ROLES = {
  SUPER_ADMIN: "SUPER_ADMIN",
  APPLICATION_USER: "APPLICATION_USER",
};
