'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5db01ede17f2ef29dbe467af69b33afb",
"version.json": "9cc87bdeeef025f112c5239437f73027",
"index.html": "802cd9c7ecd15fc16cf552f51b2f8258",
"/": "802cd9c7ecd15fc16cf552f51b2f8258",
"styles.css": "5a3b3d6bcf0bb90a902f2af2d01d3921",
"main.dart.js": "c29f38ea9d0d5ef7a01f97f55d21210f",
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
".git/objects/92/6c821c6d2b0f4fcbcb1e1452803260fa2bbbe2": "f4ce81e6419499a0a0d9395928b0ee78",
".git/objects/0c/f231c24fd8c4da9fa39b5d9b7a1184d5c003ab": "a49f325cb0b78128264b80f908c9451e",
".git/objects/66/9d0f2968c4929549896730ff904dd67b053464": "cb4b029f579d8bf4f531c33a8e4c1000",
".git/objects/3e/c95d4ed4d5154b6afd47c70a78640ba720bbfb": "52327162299f0964a55641654575282e",
".git/objects/50/e22ee4ccfe78c90e94d8576020ad04abf948ed": "049e0f5dd3af3661ad284c94409d11e2",
".git/objects/68/593e3289ec657fd6d67903d5988adeb8071f26": "a938434ed56f85e9d17c399efe047805",
".git/objects/57/654a21a6d3c6c7becdd5f52eac83291d6e2103": "3c8e407cff53c7e4b16917f1819117eb",
".git/objects/3b/e516e5c283ac441eb69e7548e8bb047f6f050c": "4aec7147c43f7c2f9d71c199f482ea5f",
".git/objects/6f/3ad002888ffec42999ec3a8f2caebe4cca23fa": "fd2cafa79f81fdb6da00fd83ca2b5253",
".git/objects/6f/dc20a324cbff01e0bfbf0994a9a8710e1d01a7": "d3b10ef6c7dacaf7e8676e90a07bd50f",
".git/objects/03/612d1f5033c3043b5a1fd84969a98ebf586cc7": "a49378fbc7362d80c0031fd88efb31b6",
".git/objects/9b/ec8d1c685b7c94f4b8ebcd87a070564643b011": "8436e5ae56c51501ccb28765d0f0ac1b",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/32/808473a4d5dd3b9d6ef1cb01a328da35925eeb": "e5f58a87f682d3f5bc18e1cd59fc4de5",
".git/objects/32/ad7afc0b7fe43bc5489d0283c487a48be773ea": "552959277007b13ee4366389eb02d66e",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/3eff2a47ad3331d8867fad191c9511edd27c34": "c177c076d26ab26aee76b29445343a56",
".git/objects/3c/2b32d52da676ba58042fc0193cbc6d6d05f637": "581232be8715b76ca61c7fbfaf44eada",
".git/objects/56/34a392b490b8e4d617181b0a132c60c2b3463b": "7d8815b934f620d90ae2e0ccac2c524c",
".git/objects/56/24ec725ffb2bc51fce71dad508738699c9d0e7": "18db4f0401c6ef61de7b2aca5a416cad",
".git/objects/56/fe07a36896c099c5d5c5d92f90b3c11e171ddd": "ea96c50fa73b053672e3e073a42da0c7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/4df3eed5a6f83eeae4d1731dce53ca26f2b13e": "9b07d40178dce622b37db6eebde81cc3",
".git/objects/93/795c8eadb7a53603544667364ab1e145d3840d": "8f9f3daba15d36c08912f467704aceea",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/5b1836714107d2ac0580fb789485a6fb604bc8": "07f3b11ea2e65cb013320cdf1d15d336",
".git/objects/94/ec5f5980a0bc1e91dd714ecd31b04a865b1dbf": "f56af447d3f02d2e89f3ca79acc13a28",
".git/objects/0e/fa4e5e2fe6d6719986589877cecc6faa3a4b74": "4423d45635bc33291160e216742b811f",
".git/objects/5a/38a5f12187912f2794780d8806ae2c8a894ca1": "27e677211f3079b02e4072a9928da5a3",
".git/objects/9d/15bcf359555bb8fe377b84cf3fdcd897ed8bb0": "5bff33825c0048bcb77707fe7ec085c2",
".git/objects/9c/902835e83b1620b0d5eb7869bee283c333148d": "d025565fd4b4af9419e967f5fec983a0",
".git/objects/02/240f00ade9fc3814c1976486ed539497e251fb": "89bf2e3777f882358f8111acaffdb2a8",
".git/objects/02/f37bde033a09f1ca86b7bd708bf3d9dfbb3f19": "d5254e9d107b30a630ced4b8d17da294",
".git/objects/a3/d159556363ea7e92afc15ae2239a2ddcfba266": "27c86031b9750e391d78bc627d1907eb",
".git/objects/b5/7e4984b8367e5c4dfcf65a90dc0697d9538aa5": "2ee2a334d62667a09f07c1c6536c998f",
".git/objects/ad/d3cd7c69b153fd1f94aa49cb87f2d28c8ac139": "ac8e78effde9a40bfecfd2715dad15af",
".git/objects/ad/3a656d9e357a003f51142dcc8936b3e6a3c9f4": "d7eb67c6594a92436d86420b6f31139f",
".git/objects/d0/7d5f632c5186068db925bd07b76caa43b19f5c": "e583b2674cdd4471f0f5a5c9ddcedc66",
".git/objects/b3/8d1617127109f77e1584e34c1bb9b16f5bc8b7": "aa789fafd35c399db0bea10b0269a15c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/d2c53ee84ebddcfe6399d8ab8208910da9611c": "d5cb8fa169d8f952feb25c9ec6d032eb",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/894bcaf4900a71f41562e9161db219170a42e7": "7b171eae5aaaf16e7e22414e4f2a754a",
".git/objects/a5/b280b61a14edd16210a8d4dbb18cf25626a9a2": "720e3356392539ad13c31a2bc62c8bb2",
".git/objects/bd/fd7e1aeed0270f57c5f56fd40ba7370d6b33f5": "cfb58d1f52ae68569097384d07284d6f",
".git/objects/bd/901a224319fc2ef6776cc0477cd4fa2530dffd": "a78367f246f2b9119f7276f76505fb4c",
".git/objects/bd/5578295e4b88c733a5931b88c633d10acafe04": "6b1e1adb39f888e646e81762b826141b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/b51b7e057d38a79c8dd2310afadfdbb1c0c43f": "fd5f1d6b1ff805cc35515ba97bf64e86",
".git/objects/d6/6bada1e0c167f1a3391e8da0c62bf6ea5d5c69": "ea648584be3d81e1b75e7b213a7518f2",
".git/objects/d6/fdc72f69ca16dd8f55cf5f76e03d4df46a8a43": "d4e20db193c86894a34d37b92506dafe",
".git/objects/ab/75c5d048ab484016a2407f233741f419f605c7": "8ee20c929b81459efe034fb12f8b6f7f",
".git/objects/ab/5d5e1f997ba6040383782f0f525a1f0fac7985": "33d3e20f7c1fb894b2bd51dae7e8157b",
".git/objects/ab/115f346a7888e90327eabb4f4fec933c507f0f": "c6f1b55cf385556f5a1c570a129c14d7",
".git/objects/ab/79dfdbd0e8ec1504fad3c71f0e146dc1ec6c37": "b3b217824f1c9462a6adb873f6b97583",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e2/f95826aa48b5ca454b10c4bf0894e0a3706c37": "0ac58b6c3cf3c5fe15943e2a46b04d7f",
".git/objects/f4/8355331d17b21a114d2e5a3cfb41c20f134634": "3ec55432a44710175a24bb36cfdb922b",
".git/objects/f3/e05adce53c6e9c6f9b4276b57444f9105ad54d": "d00dea1212410c1925f0f71cda477e9e",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/eb/da931586f2c4536f2d9d18f20f4d9162edd33f": "fc14c483af1aab8b373b435f2ae39116",
".git/objects/c7/8e0bde4a1008408b89ba9761cfc186f053966a": "e298b7aa9994fe0b95c84bd55f63084e",
".git/objects/c7/0ac1f014ab4993409ebf7afaeb42cee2565e7c": "0765c487f33efa4c38330c15ad3fd23c",
".git/objects/c0/c9c5b0f81a3984de068e72861408e8219fc24e": "d3b7ff1d64b52ec85b8b8e8d057d14ab",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/23e261afe3b15e0d6a00358ad817b9fd02bf0d": "6083b7d9d19674add11c84ba412f8a1b",
".git/objects/fc/0bd832387e25e4526a311e7f0626deccd56067": "19dc911f399ec2cd9bf77826109c187f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/5b6ece0a3568d3b93d28ae4aafbcd81c84c0a7": "464998febbcf9b86991ce32d7b07dcc2",
".git/objects/fb/24b40f3f758840133295b7ce4ae1d29f5c1e4e": "71c2c7e4884a6d5eaa89ad58e67acf65",
".git/objects/ec/0b4254613c8b44d21cf46310dcdc10e9c2ea98": "8c54d76d82989bbba98417f2935efed9",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/ed2de9a960fb897c6344c4df97b50778574368": "952eaf812d1f080a5a1e0008d2ad286c",
".git/objects/7d/4de54d2262dba49f5936b1ee05e8ce69f450ef": "5a4309a6e1f9f638c85c8fb465a345a1",
".git/objects/29/88fbb93b9220856c55c4bbecbac9cfebcc5bdf": "c724e11bec62a5d2b7e405bb5a15c824",
".git/objects/29/8314d5f78202d3e7834aacae4fac754bfeac88": "992f6fbf1112988be23f0783a8641fb7",
".git/objects/7c/8f5c779e7ab81dcfdc0052466337d36e74e84a": "920a1fbd50fcb13d392b217ebc3eda94",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/882fe8dc839b96a11a19d829e35f770e762e53": "2979052349116cfa7aed927199d790f4",
".git/objects/87/9d72b11333a0d0d2875abb15583d1adb01b1f0": "83c7f98d198b6973d521f172d464e4b4",
".git/objects/87/a9625ef308ea04d16cfe0b7696a281c01f9ebc": "bd60ba11ee18d12b141e946d942d9ddd",
".git/objects/80/8e28bd14f82536fd9e2f74f30f901e7a2bf121": "f0e5113fe46bffcdd0c2b74a66a2366e",
".git/objects/80/e60d6949809b588bda2a734b0dd3edea3afbd2": "bda461fb03d706d3d55e58355a4ef60b",
".git/objects/74/9ae26b0fb58e7116f4e6e0fc8358cb0091fe40": "8d9fa284a4a28ff30771bdf93199bd7a",
".git/objects/17/9162d83f325e7c14d663238297840f4c944b6d": "06d7b36eeeeb41d508a4b8599f08ea44",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/8f/ea429f1669e929ead06cf3c8b00ada314a06e6": "4fd8fb6078adcba8a3d1b3ddb1477d66",
".git/objects/8f/2fbe06a7523b0caebfd76fbe69e77597ca194c": "5b162cb9a3caf77591afc89f7320fece",
".git/objects/7e/98a076193cb3e280e14ccc59a1d403b1173237": "b8f8a78d551108ba6d4d028f0ef2b34a",
".git/objects/10/22b7f33c6f982a59713ee4ce34a56071a3e0b7": "77ddee44a488319caccdd6946cd4dcb9",
".git/objects/26/326212a3726213eb12765ba1a7ddbe0bed8dc9": "31fd7231f79c4d08d7a8ca2e9017f8f8",
".git/objects/26/9726bf5ce42bda1ffc7e49e20fa2f3902ddb7e": "8dea33dc9a93c717eba7fc854f15c026",
".git/objects/26/2854a25f6986e0caa17d3cd453ef2f0f8655ae": "540e907c290410c33e79dec511a899fc",
".git/objects/26/a234ac27b1cab2094873b011792ece6a458837": "6b70c2bb28c91884fe77d5b30ef47aa4",
".git/objects/4d/339ef34ea34957654401e699826dc1ddd2b9b8": "789f78d186cc52bb772d466a732efcde",
".git/objects/75/77ecffd36a08633f31b2e31ec3b9c33cead31b": "5fa4acba7bde7433d1b503cdac8a9c03",
".git/objects/81/26da814858386158430f7b5511c85ad6aecdcf": "540554d18135f7b7b859f7a68839f531",
".git/objects/86/a053a9d72faf9966d7ccb659574ba3dd863cf6": "c48dbb6b4100fbc1ca357a893212b602",
".git/objects/86/2a4e710fdcdaa9fd7658f8f2bb1c39e09be32e": "ad1138c3fb7d42f0edfd7261b68eae2e",
".git/objects/44/aa02c1eb2ecbefe2fcd21ba52ef4fa45ae6b02": "1fda60ced85112c22c2e53e7c2d6baff",
".git/objects/2a/e34564620284f44667fc2c538b9d3f79ddc2ff": "cf9f5674aac7fde387e095aa81f4ef01",
".git/objects/2f/329da9eece9821340fabc6849bc08242e6e5b8": "8ad7d0786a77d9e65acf44dd4552d043",
".git/objects/2f/392152613eb30950c01cd8c97bd231d7d7e23a": "d3d60335a215db880dede452d3f0371c",
".git/objects/2f/794c93940724a632361148386b579fb0b81771": "90d105ec533c391858c56afbdf770a3f",
".git/objects/88/4e3e4ab6398fcdcccfabc76743a7ecccdd18dd": "fa9830cf15d4b0577af461e7a55d9f96",
".git/objects/88/114d7dbd497d7db9e4cc85e212bdf91053c27c": "4382a2a474812aafdadf33800705eebb",
".git/objects/38/05f2767310ccec1d7424c04ccd32b436627a0b": "eddc8c171b5009b36d6745b2ac8f335a",
".git/objects/00/10e008de26bbaf768065f4cf5b8ba0acb42592": "3820fe12232cb4fd948fe09caef68c4e",
".git/objects/00/8c9bc5c62bc1d69988e63d73551b77bfc54fc2": "36527687842a30cb8ce46b1cafbc1394",
".git/objects/6e/b7959047bbac5eac4c6b565ef74ad618f6ad32": "0866cf7a62e3ee2b753f86c8fe978fe7",
".git/objects/36/a2bb8d5fbe136050be150793016dc29bee5db3": "024534b959c2e346aff71b682e9f4eb6",
".git/objects/5c/2a83edb7582c0768353048d9c558be6d640795": "5c4a26bbf7e03767eaad988b01ef380d",
".git/objects/5c/d63ac904c5365061e60419305e61bccfd8a503": "e8cfa5120dbac12bb05fb1fea8ee74e1",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/cb4ab03b7b620f1fd8b71c9e4a56ba8b5354fe": "c519a791ca6a3a5dde1e80b16574e6e5",
".git/objects/5d/da0dc7a8edf41ef5daa750676e53fbc3a0b19b": "7aeed9a58d1c8b890b78fe4c42173596",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/65/c8db14178cc621b7f82792b7c740c69a15c53b": "a182fd63f1bf16d7c44e2a24bd3d8ae8",
".git/objects/96/1f98a4aa7bb48742f4e52da631f73786d2d2b8": "b19ba9d8a4b24e61c9f4531540ef68a2",
".git/objects/54/e3521e383eea593a1ab0dd2f8eace255da4936": "19b25a8816d38a308cfec587183a410c",
".git/objects/54/5272fa1c3a2de2876f9e77e970c2ac9cbf1d3b": "ce02943913438f860a0658f04aa09b95",
".git/objects/54/cd8a26f24066b462e007ec53974945e891eddf": "e74b9ee18525e6b87635b76fc31debf1",
".git/objects/54/9e1c25d82a52eb30950db44614b3b4c7f57152": "029e9f9f425dbdbbcb8296edcd8d8a92",
".git/objects/53/963e1243a56a00ffd09050e302dd534ceaeec8": "87fcd84095a6272acf402ecf9b7efbf6",
".git/objects/5b/bf903ece2a63d49e794047d6f58028cf31d913": "49edc471d13ea4f892a226d55d086ee9",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/08/291f3516d04d89ff1782b571c6a31aafa95a53": "c34436b7e31605323260fafbac22e287",
".git/objects/08/6af8263c7daad2c9f2ba6147bf2f09203034c7": "2dfe9e4c0eed1e82199bf35670f5272d",
".git/objects/6d/ddef0caaf622a9ab8857bb143975d04c2faab7": "333782b3af27f007731865c648bb548b",
".git/objects/06/f2a838d0a30aa4c581b54ad60f1919fb7028e0": "767f52928c39dfee020ac1b2c2a70674",
".git/objects/99/db1268639b4509cfecb08c997322f67a03f502": "0ae090895b35cb39e80510413a750821",
".git/objects/52/c739937490c66179fe5b84e1e85c911ebae275": "137dfeda36f578c9ea264ede49833238",
".git/objects/55/e8c845a21e396cb4e4b6b6ed6317851647c618": "64e0719959e3672c1e2820c825683c45",
".git/objects/90/d29bea369e76583d5bf503b726700b4afee426": "1db106b28e726ab0f3cd98e0b0418e6d",
".git/objects/bf/a71505161e71e21e4e757626d15654c973ce6c": "382d8f4ec8cb1f401b25c7df32336fa8",
".git/objects/d3/af4b7ce9c4268ae37b8a3b181cc4c7e14f247e": "4c1b9e86d466841d47a9e7ed4a557535",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4d97ff7e2bac7d80dc8329e234118508242ecf": "ae38472b07df978ef34de03b4152a5f9",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/1426be50043d72bb6a3b0f869d467a9270c83b": "bb4e18149ede14c4ae2a9e05aadac0c5",
".git/objects/dc/1dbf41e8d5034eeeac2bf46b8c4e1f03ac84e6": "57a212346c9eb48ecdd57cf4a1b5b116",
".git/objects/a9/524b24b419e4b6f8e8d163de4812b702424c87": "3bda3897e9e3e4ab3d304955d98ea748",
".git/objects/a9/a4423b088ddad4196c1eba5e51081f8cf1b93a": "f6b7ec9f4850f5c61b146befedee9b22",
".git/objects/aa/e29e09a9b082b78b1ceabb63334a0db851c3a1": "bcb36e00f07f6281f64dc1b5b3efa5c8",
".git/objects/af/715bc749a394959a508ec160e0dafcc5a1b188": "9ddc9950d455fba5dcd2d5cee18f8cdb",
".git/objects/af/def990f88bb2370fb5bb33a81d417bce7ec6f1": "c7b2bce14ee7673da7ca0b9a3f179123",
".git/objects/af/2dfb3b091a3d28d7c5816e4404eb81d290d897": "3910d9d51b5c8f6b3776604738765e0c",
".git/objects/b7/494973a6008a8db9605fe3e80eed2018ac1c57": "744ce5fdf9ab26a0e2ca81177bbeba0b",
".git/objects/a8/21b826c43550a4f4a47d5803cb512bc1ff1cd5": "e1695501a21e8ec7e3b08787e6664350",
".git/objects/de/9dcca5389a3f4660ef3a5fd17c5063c58b4459": "e107a5bfadcde600effbfc21abdd5f5e",
".git/objects/b0/7a9899844a8ef977dcb6b086eb1f666f992887": "777fe0f2d2fa3ae12e41dac2815169f7",
".git/objects/b0/e6b229a0f9296ffb218723edcbcce1e335f512": "d6d319c2308382479a23437a46408033",
".git/objects/b0/4ffeb956051fe2b17237f1d2924af1619a5d64": "3672a18f2ccc11a6537bc900d0e92328",
".git/objects/a6/13e3c2e216c8bab619e00c4411f874365c58e9": "a44b8b1acba12dab9d83b71078fbc41c",
".git/objects/a1/ab7c4057d416a45ab32249d0ca1218d4ee9328": "e69ac12cfadd85d4c315e2d9807d2e3d",
".git/objects/a1/60f6c3640082a9501eb0543085c284fbf69676": "2c3ce4d3896c4c633ef0e6dcc6fe97c7",
".git/objects/a1/aa9f8424c979d559eedd9a4778a74b0d1b4d26": "90097a51148fa3fb5456cf50288b05cd",
".git/objects/e1/1f685d417162900877a2b72c8dd60fd91636cf": "d24821dfeba94a361665402d767a08b1",
".git/objects/cd/0434bb6041d0743ce9f4ba04065337391ac735": "0caa401faaf2c0c594d73349d9fdd542",
".git/objects/cd/f8b4a8715c7545656ed5794dabe0d1e0906651": "a5ed1d65f7948c62de17e82977241778",
".git/objects/cc/c91009933aab27397f21bf22ce3e0ed7b5676b": "b03306f36689afa7a1d1b7001d1dd6fa",
".git/objects/cc/87b57abdcec49924c97fbfc9520e134f2332cb": "c74600b19eb0050fbd5f45b1e82ab6b8",
".git/objects/e6/a70c6bf9e9afd90d0ba31e3ae8eb6afdb050ce": "9a42eae7262feb8b51b1d61fab1e182a",
".git/objects/f0/ab9750056dc5a61cc8f197fc9bccb1f82331c8": "7d39a3ae4b430a0c5f683a3f3df1b333",
".git/objects/ff/e52603e0bce8dd5b84f2ce0252fff58c715d40": "95307d14f2cdd8a05c74676507367b5e",
".git/objects/c5/a87193c5d8a05fa97bc11dcb8ab273a7b01a1f": "d2511ec743b8bf8981d2a7c55dac6ec0",
".git/objects/c5/2262449e356ac1f1c5a49132d6afa19468dc4b": "fea2549fe6f96c0239e1157775c3d8f0",
".git/objects/c5/649fe17756a9ad1b77034ab10705e3c5324e2e": "0374ab5b95964374bc311f80c8fad575",
".git/objects/c2/15d06a35cb5c7035e9c48fc8d9f9a758a40c52": "d2b3cfb15b6be0ba28a3c0dfd4b67fbe",
".git/objects/f6/44b000eb4a75bb009eda6ea1a2ec381239b253": "059de9dc421b583231ec8b6591a6d8bb",
".git/objects/e9/1f50aa1c47a5b12e6da85c78202875fd0c1b47": "109aa0da84a0da93ad45ce0a1e72532f",
".git/objects/e9/1f71d4e3e7a334f5525f01ad068a4f2065a812": "33cbb3cfe887f8ae31581298122a7d6f",
".git/objects/e7/bc9f368842656ba6ab0deea3a907d34bdbdcd8": "804826b65bf1c4658881f4b3b272000f",
".git/objects/cb/2fdd40f0124d7929b665d446e5829cecf3e999": "86ec39204f3070e51b7323145408fdba",
".git/objects/f8/148905d3b330e92324e514f57ab4a34a0d6fdf": "431ec4285442f6305bc9278478800cea",
".git/objects/f8/3d852ebb16000ce92d76fc5f06bb0a7fbda812": "c3ecffc98fff49ca944da1ab301df75e",
".git/objects/e0/43e2b51d14642f4c70bfa2747724f2e33e2055": "9b53eb10d6bbba13740d0806fe3ea317",
".git/objects/2c/50f90342490138ce78f805fe1aad55897c39c5": "545edbe43a05fac2d03aa2963d837baf",
".git/objects/2c/8add65264f917460080e342154b92daa763e09": "4b13d751e1268329f6312f681e381307",
".git/objects/1b/c643e0eded9dee6979b46f7be6814bccac87e2": "3f65f5eecfde9c2935bbcdcd00f475e0",
".git/objects/48/cc0fa165e97e3345b1263049af9d29007cc0bd": "3ea63440ee33952cc8993ed8a60a3d15",
".git/objects/48/ab683429a69d42f4ecbff91b4b4b73c29915b5": "5178e3394831c7fb0d153f5999d7383c",
".git/objects/48/67ce1424cfc3b1901753e241578bcbf96c949d": "8fadc52233965df47e09a4e1b2226dfd",
".git/objects/70/5f817bb2bcca5d7a235514c4caadc189eb8b93": "1712b29127960b2a126607f79b2a7998",
".git/objects/84/1d5efcb587727c2aced75cd5ae99145fbc8a99": "9defaa36571893cb143b50653c6b5155",
".git/objects/84/1f47af1cb8ccd6e069f62159658bb9c77b7199": "fc12cdd5ba2e6c528c25824b31ded5f9",
".git/objects/84/20fb7a2e3d08c6be64a53589c8784d451f938b": "9dce3ef06f3f4f30dd3c8f4947bf429f",
".git/objects/4f/e3c79aee88e814888d84f823fd6f9cb7ffeaff": "851da4534655f8be3c9cd1a86d0b6cca",
".git/objects/15/5dded6786e034fb06e6cba03fcd846a0427e73": "1defc6ee00db3c50ecea0f26916cc656",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/23046abeacf0d424d3be8d1d2dc01548f8fd5c": "7e48a915a6af57cd26079c790039bc09",
".git/objects/1c/df0a5aaddbe425cbcdba51b702ed02d82aa3e9": "042218b2ef99842fa07333d7ec9d6644",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/b16d987610499f559602c676d224f9243b83f2": "839d951ba421bef54038c169e35e3ad3",
".git/objects/2e/0ee7fec179e1cdc7b3082d83a4d769bff23f7e": "d12518480e3e040799b7629a88e9eee0",
".git/objects/2b/c63d49be908f05a8849e6fb3dffc5977ff5bff": "caf37beab5632184a5f4ea145b932123",
".git/objects/2b/bb0f2bd94a868fe43a5b037b879618533f70b9": "b150a1707cd521ec828ffdb81b171e7e",
".git/objects/8b/707abd1a13515f2e5d94bd2de03c61369db46a": "d4429dc747a6e9745917408d4bd2d324",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/8b/e3aa9a33b93d9c2d2f5b600987f3c86f0a5b6d": "4a4d9048632acb5127f02d0f29bb1cf3",
".git/objects/7f/e7d46d52562fa5b92a2f070eb757212615af66": "55bfa50eb8c1ae33e23358841420734b",
".git/objects/8e/804235c3380bd383b7ef0a3821e785c574d4c5": "7edbfd246058e49474cfaaa589e03e21",
".git/objects/25/947f81fd0b87fc35e11935ccd33366d47de547": "0660350a4b10b02659bb807b546b5280",
".git/objects/25/819f80cbe1ae0fbae7144144b2e5c53665877e": "67567f8f48948d537cd2719c14ba62e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d81a9f1d0b0a4ee7fb01938b50cff47",
".git/logs/refs/heads/main": "32757edbd9c67faabe199abc8e27f3d9",
".git/logs/refs/remotes/origin/main": "ae9227b768051e2eb13583ee63e8bb6d",
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
".git/refs/heads/main": "6ab877a82b7230607b0f24afd6b86d81",
".git/refs/remotes/origin/main": "6ab877a82b7230607b0f24afd6b86d81",
".git/index": "d0d839be5bb3357ec51411c1f0621e81",
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
