// HYBOUCLIER™ — Module de stockage local-first

export function saveData(key, value) {
  // À compléter dans v0.3
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadData(key) {
  // À compléter dans v0.3
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
