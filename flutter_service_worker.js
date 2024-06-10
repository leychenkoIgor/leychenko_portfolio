'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f1e25663f4dc01481888609a6cc8a018",
"version.json": "086445b34b6ebd8bdddaa26cc62ac813",
"index.html": "58532e5919a49689474c12c7954d7911",
"/": "58532e5919a49689474c12c7954d7911",
"styles.css": "5a3b3d6bcf0bb90a902f2af2d01d3921",
"main.dart.js": "671278a61323ffd90a5c22e7aae3b0a8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "72bf0da3c9e0a198836af7b96f3b4887",
"icons/Icon-192.png": "2f9798ec756da3f5e0b337675c056e66",
"icons/Icon-maskable-192.png": "2f9798ec756da3f5e0b337675c056e66",
"icons/Icon-maskable-512.png": "c02f0a0ebae4cc4a18ae73b0947052ed",
"icons/Icon-512.png": "c02f0a0ebae4cc4a18ae73b0947052ed",
"manifest.json": "dd85faf15abb7466231a823d12f354b4",
".git/config": "8302cf8fda2180207bca48e42b78e320",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/0d/c03c9477efb2ae22863ee79face626d84ee772": "d8298c60e8d92174755e791b7cb055e7",
".git/objects/66/9d0f2968c4929549896730ff904dd67b053464": "cb4b029f579d8bf4f531c33a8e4c1000",
".git/objects/3e/c95d4ed4d5154b6afd47c70a78640ba720bbfb": "52327162299f0964a55641654575282e",
".git/objects/50/e22ee4ccfe78c90e94d8576020ad04abf948ed": "049e0f5dd3af3661ad284c94409d11e2",
".git/objects/03/612d1f5033c3043b5a1fd84969a98ebf586cc7": "a49378fbc7362d80c0031fd88efb31b6",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/32/ad7afc0b7fe43bc5489d0283c487a48be773ea": "552959277007b13ee4366389eb02d66e",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/3c/2b32d52da676ba58042fc0193cbc6d6d05f637": "581232be8715b76ca61c7fbfaf44eada",
".git/objects/56/34a392b490b8e4d617181b0a132c60c2b3463b": "7d8815b934f620d90ae2e0ccac2c524c",
".git/objects/56/24ec725ffb2bc51fce71dad508738699c9d0e7": "18db4f0401c6ef61de7b2aca5a416cad",
".git/objects/56/fe07a36896c099c5d5c5d92f90b3c11e171ddd": "ea96c50fa73b053672e3e073a42da0c7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/795c8eadb7a53603544667364ab1e145d3840d": "8f9f3daba15d36c08912f467704aceea",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/5b1836714107d2ac0580fb789485a6fb604bc8": "07f3b11ea2e65cb013320cdf1d15d336",
".git/objects/0e/fa4e5e2fe6d6719986589877cecc6faa3a4b74": "4423d45635bc33291160e216742b811f",
".git/objects/9d/15bcf359555bb8fe377b84cf3fdcd897ed8bb0": "5bff33825c0048bcb77707fe7ec085c2",
".git/objects/9c/902835e83b1620b0d5eb7869bee283c333148d": "d025565fd4b4af9419e967f5fec983a0",
".git/objects/02/f37bde033a09f1ca86b7bd708bf3d9dfbb3f19": "d5254e9d107b30a630ced4b8d17da294",
".git/objects/b3/8d1617127109f77e1584e34c1bb9b16f5bc8b7": "aa789fafd35c399db0bea10b0269a15c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/d2c53ee84ebddcfe6399d8ab8208910da9611c": "d5cb8fa169d8f952feb25c9ec6d032eb",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/894bcaf4900a71f41562e9161db219170a42e7": "7b171eae5aaaf16e7e22414e4f2a754a",
".git/objects/bd/fd7e1aeed0270f57c5f56fd40ba7370d6b33f5": "cfb58d1f52ae68569097384d07284d6f",
".git/objects/bd/901a224319fc2ef6776cc0477cd4fa2530dffd": "a78367f246f2b9119f7276f76505fb4c",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/6bada1e0c167f1a3391e8da0c62bf6ea5d5c69": "ea648584be3d81e1b75e7b213a7518f2",
".git/objects/d6/fdc72f69ca16dd8f55cf5f76e03d4df46a8a43": "d4e20db193c86894a34d37b92506dafe",
".git/objects/ab/5d5e1f997ba6040383782f0f525a1f0fac7985": "33d3e20f7c1fb894b2bd51dae7e8157b",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e2/f95826aa48b5ca454b10c4bf0894e0a3706c37": "0ac58b6c3cf3c5fe15943e2a46b04d7f",
".git/objects/f3/e05adce53c6e9c6f9b4276b57444f9105ad54d": "d00dea1212410c1925f0f71cda477e9e",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/c7/0ac1f014ab4993409ebf7afaeb42cee2565e7c": "0765c487f33efa4c38330c15ad3fd23c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/24b40f3f758840133295b7ce4ae1d29f5c1e4e": "71c2c7e4884a6d5eaa89ad58e67acf65",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/8f5c779e7ab81dcfdc0052466337d36e74e84a": "920a1fbd50fcb13d392b217ebc3eda94",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/9d72b11333a0d0d2875abb15583d1adb01b1f0": "83c7f98d198b6973d521f172d464e4b4",
".git/objects/74/9ae26b0fb58e7116f4e6e0fc8358cb0091fe40": "8d9fa284a4a28ff30771bdf93199bd7a",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/8f/ea429f1669e929ead06cf3c8b00ada314a06e6": "4fd8fb6078adcba8a3d1b3ddb1477d66",
".git/objects/8f/2fbe06a7523b0caebfd76fbe69e77597ca194c": "5b162cb9a3caf77591afc89f7320fece",
".git/objects/26/9726bf5ce42bda1ffc7e49e20fa2f3902ddb7e": "8dea33dc9a93c717eba7fc854f15c026",
".git/objects/26/2854a25f6986e0caa17d3cd453ef2f0f8655ae": "540e907c290410c33e79dec511a899fc",
".git/objects/26/a234ac27b1cab2094873b011792ece6a458837": "6b70c2bb28c91884fe77d5b30ef47aa4",
".git/objects/86/a053a9d72faf9966d7ccb659574ba3dd863cf6": "c48dbb6b4100fbc1ca357a893212b602",
".git/objects/2a/e34564620284f44667fc2c538b9d3f79ddc2ff": "cf9f5674aac7fde387e095aa81f4ef01",
".git/objects/2f/329da9eece9821340fabc6849bc08242e6e5b8": "8ad7d0786a77d9e65acf44dd4552d043",
".git/objects/2f/392152613eb30950c01cd8c97bd231d7d7e23a": "d3d60335a215db880dede452d3f0371c",
".git/objects/88/4e3e4ab6398fcdcccfabc76743a7ecccdd18dd": "fa9830cf15d4b0577af461e7a55d9f96",
".git/objects/38/05f2767310ccec1d7424c04ccd32b436627a0b": "eddc8c171b5009b36d6745b2ac8f335a",
".git/objects/00/10e008de26bbaf768065f4cf5b8ba0acb42592": "3820fe12232cb4fd948fe09caef68c4e",
".git/objects/5c/2a83edb7582c0768353048d9c558be6d640795": "5c4a26bbf7e03767eaad988b01ef380d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/cb4ab03b7b620f1fd8b71c9e4a56ba8b5354fe": "c519a791ca6a3a5dde1e80b16574e6e5",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/96/1f98a4aa7bb48742f4e52da631f73786d2d2b8": "b19ba9d8a4b24e61c9f4531540ef68a2",
".git/objects/54/e3521e383eea593a1ab0dd2f8eace255da4936": "19b25a8816d38a308cfec587183a410c",
".git/objects/54/5272fa1c3a2de2876f9e77e970c2ac9cbf1d3b": "ce02943913438f860a0658f04aa09b95",
".git/objects/54/cd8a26f24066b462e007ec53974945e891eddf": "e74b9ee18525e6b87635b76fc31debf1",
".git/objects/54/9e1c25d82a52eb30950db44614b3b4c7f57152": "029e9f9f425dbdbbcb8296edcd8d8a92",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/08/6af8263c7daad2c9f2ba6147bf2f09203034c7": "2dfe9e4c0eed1e82199bf35670f5272d",
".git/objects/6d/ddef0caaf622a9ab8857bb143975d04c2faab7": "333782b3af27f007731865c648bb548b",
".git/objects/06/f2a838d0a30aa4c581b54ad60f1919fb7028e0": "767f52928c39dfee020ac1b2c2a70674",
".git/objects/52/c739937490c66179fe5b84e1e85c911ebae275": "137dfeda36f578c9ea264ede49833238",
".git/objects/90/d29bea369e76583d5bf503b726700b4afee426": "1db106b28e726ab0f3cd98e0b0418e6d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4d97ff7e2bac7d80dc8329e234118508242ecf": "ae38472b07df978ef34de03b4152a5f9",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/1426be50043d72bb6a3b0f869d467a9270c83b": "bb4e18149ede14c4ae2a9e05aadac0c5",
".git/objects/dc/1dbf41e8d5034eeeac2bf46b8c4e1f03ac84e6": "57a212346c9eb48ecdd57cf4a1b5b116",
".git/objects/a9/524b24b419e4b6f8e8d163de4812b702424c87": "3bda3897e9e3e4ab3d304955d98ea748",
".git/objects/aa/e29e09a9b082b78b1ceabb63334a0db851c3a1": "bcb36e00f07f6281f64dc1b5b3efa5c8",
".git/objects/af/2dfb3b091a3d28d7c5816e4404eb81d290d897": "3910d9d51b5c8f6b3776604738765e0c",
".git/objects/a1/60f6c3640082a9501eb0543085c284fbf69676": "2c3ce4d3896c4c633ef0e6dcc6fe97c7",
".git/objects/a1/aa9f8424c979d559eedd9a4778a74b0d1b4d26": "90097a51148fa3fb5456cf50288b05cd",
".git/objects/f0/ab9750056dc5a61cc8f197fc9bccb1f82331c8": "7d39a3ae4b430a0c5f683a3f3df1b333",
".git/objects/c5/a87193c5d8a05fa97bc11dcb8ab273a7b01a1f": "d2511ec743b8bf8981d2a7c55dac6ec0",
".git/objects/c5/2262449e356ac1f1c5a49132d6afa19468dc4b": "fea2549fe6f96c0239e1157775c3d8f0",
".git/objects/e9/1f50aa1c47a5b12e6da85c78202875fd0c1b47": "109aa0da84a0da93ad45ce0a1e72532f",
".git/objects/e9/1f71d4e3e7a334f5525f01ad068a4f2065a812": "33cbb3cfe887f8ae31581298122a7d6f",
".git/objects/f8/148905d3b330e92324e514f57ab4a34a0d6fdf": "431ec4285442f6305bc9278478800cea",
".git/objects/f8/3d852ebb16000ce92d76fc5f06bb0a7fbda812": "c3ecffc98fff49ca944da1ab301df75e",
".git/objects/e0/43e2b51d14642f4c70bfa2747724f2e33e2055": "9b53eb10d6bbba13740d0806fe3ea317",
".git/objects/1b/c643e0eded9dee6979b46f7be6814bccac87e2": "3f65f5eecfde9c2935bbcdcd00f475e0",
".git/objects/48/cc0fa165e97e3345b1263049af9d29007cc0bd": "3ea63440ee33952cc8993ed8a60a3d15",
".git/objects/70/5f817bb2bcca5d7a235514c4caadc189eb8b93": "1712b29127960b2a126607f79b2a7998",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/0ee7fec179e1cdc7b3082d83a4d769bff23f7e": "d12518480e3e040799b7629a88e9eee0",
".git/objects/8b/707abd1a13515f2e5d94bd2de03c61369db46a": "d4429dc747a6e9745917408d4bd2d324",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/8b/e3aa9a33b93d9c2d2f5b600987f3c86f0a5b6d": "4a4d9048632acb5127f02d0f29bb1cf3",
".git/objects/25/947f81fd0b87fc35e11935ccd33366d47de547": "0660350a4b10b02659bb807b546b5280",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b57a48f54b8b5d84e0983815d60c3e88",
".git/logs/refs/heads/main": "f3165a20d6f0ff8362b2afc17bf98f37",
".git/logs/refs/remotes/origin/main": "3ea4967d6c9d3f2f93930b8688d0d9ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f13107efba799de55f5c48002c886600",
".git/refs/remotes/origin/main": "f13107efba799de55f5c48002c886600",
".git/index": "e4b95e7ec9312273899b27588668ef96",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
"assets/AssetManifest.json": "095d5dae4288586be4cf72a62ddba266",
"assets/NOTICES": "76e7160b5d83a730b05d4e4a4b18603a",
"assets/FontManifest.json": "89ac8c73350c479974c41909489ab78e",
"assets/AssetManifest.bin.json": "fe208e82c70eaab01c1f68c1ef618bac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3b40c829e45699aa4a3cc3ac86058430",
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
"assets/assets/fonts/SocialIcons.ttf": "390f531fe5bef53402b3669b660fe2cc",
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
