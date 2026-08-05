export function isLocalhost() {
  const hostname = window.location.hostname;
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.startsWith("127.") ||
    hostname.startsWith("0:0:0:0:0:0:0:1") ||
    hostname === "::ffff:127.0.0.1"
  );
}
