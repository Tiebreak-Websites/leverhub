// Cloudflare Pages Functions middleware — HTTP Basic Auth gate for the
// staging deployment. Remove this file (or the credentials check) to go public.
const USERNAME = "parola";
const PASSWORD = "parola";

export async function onRequest(context) {
  const auth = context.request.headers.get("Authorization");
  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const separator = decoded.indexOf(":");
      const user = decoded.slice(0, separator);
      const pass = decoded.slice(separator + 1);
      if (user === USERNAME && pass === PASSWORD) {
        return context.next();
      }
    }
  }
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="LeverHub staging", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}
