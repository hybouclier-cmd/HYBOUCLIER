// HYBOUCLIER™ — Configuration système v0.3-dev

export const CONFIG = {
  version: "0.3-dev",
  localFirst: true,
  debug: true,
  storageLimit: 1024 * 1024, // 1MB local storage
  citizenDefaultId: "local-user"
};

export function getConfig() {
  return CONFIG;
}
