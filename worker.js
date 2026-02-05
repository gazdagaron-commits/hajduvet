// Cloudflare Worker - Hajduvet statikus oldal

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Gyökér -> index.html
    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }
    
    // Ha nincs kiterjesztés, próbáljuk meg .html-lel
    if (!pathname.includes('.')) {
      // Először próbáljuk a pages mappában
      const pagesPath = `/pages${pathname}.html`;
      const pagesRequest = new Request(new URL(pagesPath, request.url), request);
      const pagesResponse = await env.ASSETS.fetch(pagesRequest);
      
      if (pagesResponse.status === 200) {
        return pagesResponse;
      }
      
      // Ha nem található a pages-ben, próbáljuk a gyökérben
      pathname = `${pathname}.html`;
    }

    // Kérés az asset-hez
    const assetRequest = new Request(new URL(pathname, request.url), request);
    const response = await env.ASSETS.fetch(assetRequest);

    // Ha megtalálta, visszaadjuk
    if (response.status === 200) {
      return response;
    }

    // 404 - egyedi hibaoldal
    const notFoundRequest = new Request(new URL('/404.html', request.url), request);
    const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
    
    return new Response(notFoundResponse.body, {
      status: 404,
      headers: notFoundResponse.headers
    });
  },
};
