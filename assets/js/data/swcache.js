const resource = [ /* --- CSS --- */ '/s22-ewco/assets/css/style.css', /* --- PWA --- */ '/s22-ewco/app.js', '/s22-ewco/sw.js', /* --- HTML --- */ '/s22-ewco/index.html', '/s22-ewco/404.html', '/s22-ewco/categories/', '/s22-ewco/tags/', '/s22-ewco/archives/', '/s22-ewco/about/', /* --- Favicons & compressed JS --- */ ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'cs481-ekh.github.io/s22-ewco/', 'cdn.jsdelivr.net', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
