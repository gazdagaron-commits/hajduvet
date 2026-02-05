// Cloudflare Worker entry that serves the built Vite assets from the configured
// Assets binding. The SPA fallback is handled by the `serve_single_page_app`
// setting in `wrangler.toml`.

const isHtmlRequest = (request) => {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get("Accept") || "";
  const hasExtension = /\.[^/]+$/.test(url.pathname);

  return acceptHeader.includes("text/html") && !hasExtension;
};

const serveSpa = async (request, env) => {
  // Always fetch the SPA shell as a GET request to avoid reusing non-GET bodies.
  const spaRequest = new Request(new URL("/index.html", request.url), {
    method: "GET",
    headers: request.headers,
  });

  const spaResponse = await env.ASSETS.fetch(spaRequest);
  const headers = new Headers(spaResponse.headers);
  headers.set("Content-Type", "text/html; charset=UTF-8");

  return new Response(spaResponse.body, {
    status: 200,
    headers,
  });
};

export default {
  async fetch(request, env) {
    try {
      const response = await env.ASSETS.fetch(request);

      // If the asset exists (or another status like 500), return it as-is.
      if (response.status !== 404) {
        return response;
      }

      // For HTML navigations (real routes without file extensions) fall back to the SPA shell.
      if (isHtmlRequest(request)) {
        return await serveSpa(request, env);
      }

      return response;
    } catch {
      // If anything goes wrong while fetching assets, still try to serve the SPA for HTML requests.
      if (isHtmlRequest(request)) {
        return await serveSpa(request, env);
      }

      // Non-HTML requests should surface the original error as a 500.
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
