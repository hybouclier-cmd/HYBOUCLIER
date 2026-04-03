// HYBOUCLIER™ — Interface utilisateur v0.3-dev

import { initCore } from "../backend/core.js";
import { createCitizen } from "../backend/citizen.js";

export function initUI() {
  console.log("HYBOUCLIER UI initialized");

  const core = initCore();
  console.log("Core status:", core.status);

  const citizen = createCitizen("local-user");
  console.log("Citizen created:", citizen.id);

  return {
    core,
    citizen
  };
}
