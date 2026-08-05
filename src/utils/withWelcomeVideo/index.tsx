export function hasWelcomeVideoInUrl() {
  const path = window.location.pathname;
  return path === "/welcome-video" || path.startsWith("/welcome-video/");
}
