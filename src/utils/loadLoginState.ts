export const STORAGE_KEY = 'skillnest_isLoggedIn';

export function loadLogin() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}
