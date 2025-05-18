'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/MaterialIcons-Regular.otf": "e3cd902acab03fc432ba71a686ca309b",
"assets/AssetManifest.bin.json": "b5e1841aeb175627a2639096635c4b76",
"assets/AssetManifest.bin": "79838f3945cb2feb3ad0439b02fc1a2d",
"assets/AssetManifest.json": "f49283e6ea8a4752fbde7212f48d59eb",
"assets/assets/icons/delivery4.svg": "d335aa96dd4a1bb1af0944245eb149a2",
"assets/assets/icons/unknown.svg": "e29ae827ed6b54d077b8f81e586cd168",
"assets/assets/icons/menu_task.svg": "58bafa8d1e6f52ec443bc3178b30d7a8",
"assets/assets/icons/delivery6.svg": "9102056bd76ede932e68c7fea97bd77c",
"assets/assets/icons/xd_file.svg": "a6e5f3b54d2a494c50f09e4a8e8a290b",
"assets/assets/icons/Search.svg": "14b11df4ac9e01bf7fb543fced19b579",
"assets/assets/icons/menu_tran.svg": "d224482a81c0eb29f2966731fd32a700",
"assets/assets/icons/delivery5.svg": "54fb74d6350cfa6bbc0592a5ddd97abe",
"assets/assets/icons/Product4.svg": "86063cedaa445c304d5ee30ddb3d289b",
"assets/assets/icons/media_file.svg": "9918c4a01e8611ff9a0dc6e30a66a951",
"assets/assets/icons/Figma_file.svg": "bce756769e7b94fc82a38d660418bfc3",
"assets/assets/icons/pdf_file.svg": "73cf4797b4059639496d40db2f745935",
"assets/assets/icons/menu_setting.svg": "81261b9117805d29f893d842cd2cad80",
"assets/assets/icons/media.svg": "55a268b3c9897e313755c0bef64d6f89",
"assets/assets/icons/doc_file.svg": "227dc28ec7596ffc8d7414c5982eeea5",
"assets/assets/icons/menu_dashboard.svg": "fd564605fe6e3010b82b96e01908a956",
"assets/assets/icons/logo.svg": "3c801a0eb1822b5c698885deae5995e0",
"assets/assets/icons/menu_notification.svg": "f4d82f8afa213fd393b9ab7e5d2f7763",
"assets/assets/icons/delivery2.svg": "df0cf665f7c6c0094c018c8289f516b4",
"assets/assets/icons/menu_doc.svg": "fdf20f946dc24ede9a0e708f2ffd17cd",
"assets/assets/icons/Product3.svg": "b9855659940314d2965d2841538b9623",
"assets/assets/icons/menu_store.svg": "fc5fd595e43cc802152383a79e6fc17e",
"assets/assets/icons/notification.svg": "2d6b8f5d258ef572597fdfe36847eec3",
"assets/assets/icons/one_drive.svg": "c98f49ad0028b8713f555ad03b1c1b85",
"assets/assets/icons/google_drive.svg": "1d2db7589dd779939867173147068eac",
"assets/assets/icons/excel_file.svg": "97a7e1b30300a8789edd6821a76f9c50",
"assets/assets/icons/drop_box.svg": "e6f68701a474624713e9de8f7b7f8eb6",
"assets/assets/icons/folder.svg": "a4f80451d2dea20f0337061349cb0469",
"assets/assets/icons/Product1.svg": "240d94cb86885e071338d2886b13bbed",
"assets/assets/icons/delivery1.svg": "f6ac0f2901cbfe05f9a1a1c91e0558f5",
"assets/assets/icons/sound_file.svg": "552e367bed9151a7422f371076c3adc5",
"assets/assets/icons/delivery3.svg": "7d4f6cd4e850fe0231cd8b76ccaefc6c",
"assets/assets/icons/Product2.svg": "7cd6a845406e324adf05936f4f01f1cc",
"assets/assets/icons/menu_profile.svg": "4e529b9cf247031be19dcca23b9d950d",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/profile_pic.png": "3259839d3753863893a88c2b60f2d9da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "da8b8aa34168f82ddb1c03b7e493403d",
"main.dart.js": "11ca8cc11b479c807344ee446dcf3239",
"manifest.json": "54f52ca08dfa4a408b68d5a98c51de8c",
"version.json": "e9eb58db72d407be27e9fa052224c304",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"flutter_bootstrap.js": "2d986af627766c55ecefc152745bfe36",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "7d23790fc72deffca49d207be80fa1d8",
"/": "7d23790fc72deffca49d207be80fa1d8",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
