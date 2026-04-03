// HYBOUCLIER™ — Noyau logique v0.3-dev

export const HYBOUCLIER_CORE_VERSION = "0.3-dev";

export function initCore() {
  return {
    startedAt: Date.now(),
    status: "core-initialized"
  };
}
