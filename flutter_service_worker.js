'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8a88ae2646a3cff51bd4a4ee583ea844",
"version.json": "086445b34b6ebd8bdddaa26cc62ac813",
"index.html": "fc3a1fed3f86f4802e61f56f474309ed",
"/": "fc3a1fed3f86f4802e61f56f474309ed",
"styles.css": "5a3b3d6bcf0bb90a902f2af2d01d3921",
"main.dart.js": "22170b4da13a5cbbbc219c8696f7db0a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "72bf0da3c9e0a198836af7b96f3b4887",
"icons/Icon-192.png": "2f9798ec756da3f5e0b337675c056e66",
"icons/Icon-maskable-192.png": "2f9798ec756da3f5e0b337675c056e66",
"icons/Icon-maskable-512.png": "c02f0a0ebae4cc4a18ae73b0947052ed",
"icons/Icon-512.png": "c02f0a0ebae4cc4a18ae73b0947052ed",
"manifest.json": "dd85faf15abb7466231a823d12f354b4",
"assets/AssetManifest.json": "46fd3a851746487c1d5719bc1e3a0c9b",
"assets/NOTICES": "76e7160b5d83a730b05d4e4a4b18603a",
"assets/FontManifest.json": "70267adb5b4edde655ecb8c9676c1a7b",
"assets/AssetManifest.bin.json": "d3a2fd483c700fc4a7fa7764e18d19de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "90467b13b55339a412684fd691cdfe9a",
"assets/fonts/MaterialIcons-Regular.otf": "c155e442126322ceab7de3e092df0476",
"assets/assets/images/ukraine.png": "d8a1822bece583518f397dc57881fc46",
"assets/assets/images/background1.jpg": "951245d732542f7ae8fe4ba8c727c21a",
"assets/assets/images/WardrobeWave/Screenshot_1.PNG": "635daaf7de7f76a78f14b5801233c741",
"assets/assets/images/WardrobeWave/Screenshot_3.PNG": "7493e37a813586a8dbfa3b5445337031",
"assets/assets/images/WardrobeWave/Screenshot_2.PNG": "4879cb2d71767b3196045c461306d8fd",
"assets/assets/images/PhotoIgor.png": "19f0cb20d106df66040beec64c7973c4",
"assets/assets/images/united-kingdom.png": "aac0dfefc080856931658ea9c760534e",
"assets/assets/images/FoodieFlow/Screenshot_1.png": "3e43df4219abef804152e20054c40c10",
"assets/assets/images/FoodieFlow/Screenshot_3.png": "7f199bb9b956a2821d4429c7039d9363",
"assets/assets/images/FoodieFlow/Screenshot_2.png": "356d99d34fc8ba4378b8d5665698538b",
"assets/assets/images/ShopDrop/Screenshot_1.jpg": "8a13cf486704b6c63bf565b3ace9ca0e",
"assets/assets/images/ShopDrop/Screenshot_3.jpg": "f9d8574fba05e5feb548308a96e9e9a6",
"assets/assets/images/ShopDrop/Screenshot_2.jpg": "d4e1359b6945713a1d5ad3992ed0ada9",
"assets/assets/images/AdventureAid/Screenshot_4.jpg": "3963806ddb7979beecfdeae1369e80ed",
"assets/assets/images/AdventureAid/Screenshot_1.jpg": "42b48834b0c91f99e92f1e5a7e1f1835",
"assets/assets/images/AdventureAid/Screenshot_3.jpg": "2d35783110455c6bf52ce0449696c671",
"assets/assets/images/AdventureAid/Screenshot_2.jpg": "73db3a7d1024056318c13ec947aca5fb",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/instagram.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/icons/telegram.svg": "b4fb41c46f8d7f8add6ca3b2488ae9b6",
"assets/assets/icons/linkedin.svg": "17d8ef4edcd1e181ec2508d9bd589bca",
"assets/assets/icons/english_flag_rounded.svg": "db68882cbf4beac3f3ee3923f1a91b82",
"assets/assets/fonts/shabnam_fd/Shabnam-Bold-FD.ttf": "f5337a2043ef5fdc49e0b5d2c10fc27b",
"assets/assets/fonts/shabnam_fd/Shabnam-FD.ttf": "3f7a15d71d0893f4560782b45cf7a97d",
"assets/assets/fonts/shabnam_fd/Shabnam-Light-FD.ttf": "b603c4f303f98ba3ed23aa373cad20d0",
"assets/assets/fonts/shabnam/Shabnam.ttf": "69fc335794c0fcfd006f49066c650505",
"assets/assets/fonts/shabnam/Shabnam-Bold.ttf": "b7f6b7386ee3eb72d8d709f895e7c912",
"assets/assets/fonts/shabnam/Shabnam-Light.ttf": "ecf1c57199b540fb02260ccbe1acc3f1",
"assets/assets/fonts/SassyFrass-Regular.ttf": "57eec450184e35fd8c76441054c0e2b7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
