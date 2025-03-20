const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-COS0MwYC.js","assets/index-CfOhYXNc.js","assets/css-dDMgxRl5.js","assets/prism-DioJVDXm.js"])))=>i.map(i=>d[i]);
import { l as createBaseVNode, d as defineComponent, m as mergeDefaults, u as useSlots, b as inject, r as ref, t as toRefs, c as computed, n as unref, p as createElementBlock, w as watch, q as onBeforeMount, o as onMounted, v as openBlock, x as createCommentVNode, y as normalizeStyle, z as renderSlot, B as normalizeProps, C as mergeProps, F as Fragment, D as createTextVNode, E as toDisplayString, G as normalizeClass, H as createBlock, _ as __vitePreload, j as createVNode, I as useQuasar, J as withCtx } from "./index-MP0GapPT.js";
import { g as getDefaultExportFromCjs, r as requireCore, c as cpp, a as css } from "./css-dDMgxRl5.js";
import { Q as QTooltip } from "./QTooltip-BZ0wz_nu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./scroll-DpMCZdWh.js";
const wrapper = (callback) => callback;
const defineBoot = wrapper;
var uaParser$1 = { exports: {} };
var uaParser = uaParser$1.exports;
var hasRequiredUaParser;
function requireUaParser() {
  if (hasRequiredUaParser) return uaParser$1.exports;
  hasRequiredUaParser = 1;
  (function(module, exports) {
    (function(window2, undefined$1) {
      var LIBVERSION = "1.0.40", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS", SUFFIX_BROWSER = " Browser";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined$1;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                  }
                } else {
                  this[q] = match ? match : undefined$1;
                }
              }
            }
          }
          i += 2;
        }
      }, strMapper = function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined$1 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined$1 : i;
          }
        }
        return map.hasOwnProperty("*") ? map["*"] : str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION, [NAME, OPERA + " Mini"]],
          [
            /\bop(?:rg)?x\/([\w\.]+)/i
            // Opera GX
          ],
          [VERSION, [NAME, OPERA + " GX"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION, [NAME, "Baidu"]],
          [
            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
            // Maxthon
          ],
          [VERSION, [NAME, "Maxthon"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
            // Trident based
            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
            // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
            /(heytap|ovi|115)browser\/([\d\.]+)/i,
            // HeyTap/Ovi/115
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION],
          [
            /quark(?:pc)?\/([-\w\.]+)/i
            // Quark
          ],
          [VERSION, [NAME, "Quark"]],
          [
            /\bddg\/([\w\.]+)/i
            // DuckDuckGo
          ],
          [VERSION, [NAME, "DuckDuckGo"]],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
          [
            /fxios\/([\w\.-]+)/i
            // Firefox for iOS
          ],
          [VERSION, [NAME, FIREFOX]],
          [
            /\bqihoobrowser\/?([\w\.]*)/i
            // 360
          ],
          [VERSION, [NAME, "360"]],
          [
            /\b(qq)\/([\w\.]+)/i
            // QQ
          ],
          [[NAME, /(.+)/, "$1Browser"], VERSION],
          [
            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION, [NAME, SAMSUNG + " Internet"]],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
            // QQ/2345
          ],
          [NAME, VERSION],
          [
            /(lbbrowser|rekonq)/i,
            // LieBao Browser/Rekonq
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            /ome\/([\w\.]+) \w* ?(iron) saf/i,
            // Iron
            /ome\/([\w\.]+).+qihu (360)[es]e/i
            // 360
          ],
          [VERSION, NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            // Twitter
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION],
          [
            /(wolvic|librewolf)\/([\w\.]+)/i
            // Wolvic/LibreWolf
          ],
          [NAME, VERSION],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i
            // Links
          ],
          [NAME, [VERSION, /_/g, "."]],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[ARCHITECTURE, lowerize]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Honor
            /(?:honor)([-\w ]+)[;\)]/i
          ],
          [MODEL, [VENDOR, "Honor"], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
          [
            /\b(opd2\d{3}a?) bui/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, TABLET]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // TCL
            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i
          ],
          [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
          [
            // itel
            /(itel) ((\w+))/i
          ],
          [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // Energizer
            /; (energy ?\w+)(?: bui|\))/i,
            /; energizer ([\w ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
          [
            // Cat
            /; cat (b35);/i,
            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
          [
            // Smartfren
            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
          [
            // Nothing
            /droid.+; (a(?:015|06[35]|142p?))/i
          ],
          [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
            /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
            // IMO
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(imo) (tab \w+)/i,
            // IMO
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i
            // Samsung Galaxy Watch
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
          [
            /((pebble))app/i
            // Pebble
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            ///////////////////
            // XR
            ///////////////////
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /(pico) (4|neo3(?: link|pro)?)/i
            // Pico
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /; (quest( \d| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION, [NAME, EDGE + "HTML"]],
          [
            /(arkweb)\/([\w\.]+)/i
            // ArkWeb
          ],
          [NAME, VERSION],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [NAME, VERSION],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION, NAME],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS/OpenHarmony
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [NAME, VERSION],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined$1;
        }
        if (!(this instanceof UAParser)) {
          return new UAParser(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined$1;
          _browser[VERSION] = undefined$1;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined$1;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined$1;
          _device[MODEL] = undefined$1;
          _device[TYPE] = undefined$1;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined$1;
          _engine[VERSION] = undefined$1;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined$1;
          _os[VERSION] = undefined$1;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser.CPU = enumerize([ARCHITECTURE]);
      UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
      {
        if (module.exports) {
          exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : uaParser);
  })(uaParser$1, uaParser$1.exports);
  return uaParser$1.exports;
}
var uaParserExports = requireUaParser();
const Wn = /* @__PURE__ */ getDefaultExportFromCjs(uaParserExports);
/**
 * @name @wdns/vue-code-block
 * @version 2.3.5
 * @description Vue 3 CodeBlock - Highlight your code with ease using this syntax highlighting component powered by PrismJS or Highlight.js.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vue-code-block/
 * @repository https://github.com/webdevnerdstuff/vue-code-block
 * @license MIT License
 */
const u = "v-code-block";
function jn(r) {
  return r === "" || r === "prism" ? "default" : r;
}
function cn(r) {
  return r ? "highlightjs" : "prism";
}
const W = (r) => {
  const { str: t, unit: b = "px" } = r;
  if (t != null && t !== "" && t !== void 0) return +t ? `${Number(t)}${b}` : String(t);
}, En = [createBaseVNode("path", { d: "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" }, null, -1)], Ln = [createBaseVNode("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }, null, -1)], An = [createBaseVNode("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }, null, -1)], pn = defineComponent({ __name: "StatusIcons", props: { icon: { type: String, required: true } }, setup: (r) => (t, b) => r.icon === "copy" ? (openBlock(), createElementBlock("svg", mergeProps({ key: 0 }, t.$attrs, { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" }), En, 16)) : r.icon === "success" ? (openBlock(), createElementBlock("svg", mergeProps({ key: 1 }, t.$attrs, { viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" }), Ln, 16)) : r.icon === "failed" ? (openBlock(), createElementBlock("svg", mergeProps({ key: 2 }, t.$attrs, { viewBox: "0 0 320 512", xmlns: "http://www.w3.org/2000/svg" }), An, 16)) : createCommentVNode("", true) });
function Fn(r) {
  return { name: "Plain text", aliases: ["text", "txt"], disableAutodetect: true };
}
const In = { class: "v-code-block--button-copy" }, Gn = { class: "v-code-block--button-run" }, Jn = { class: "v-code-block--code" }, On = ["textContent"], Rn = ["innerHTML"], Un = ((r, t) => {
  const b = r.__vccOpts || r;
  for (const [f, q] of t) b[f] = q;
  return b;
})(defineComponent({ __name: "VCodeBlock", props: mergeDefaults({ browserWindow: { type: Boolean }, cssPath: {}, code: {}, codeBlockRadius: {}, copyButton: { type: Boolean }, copyIcons: { type: Boolean }, copyTab: { type: Boolean }, copyFailedText: {}, copyText: {}, copySuccessText: {}, floatingTabs: { type: Boolean }, globalOptions: { type: Boolean }, height: {}, highlightjs: { type: Boolean }, indent: {}, label: {}, lang: {}, languages: {}, maxHeight: {}, persistentCopyButton: { type: Boolean }, prismjs: { type: Boolean }, prismPlugin: { type: Boolean }, runTab: { type: Boolean }, runText: {}, tabGap: {}, tabs: { type: Boolean }, theme: { type: [String, Boolean] } }, { browserWindow: false, cssPath: void 0, code: "", codeBlockRadius: "0.5rem", copyButton: true, copyIcons: true, copyTab: true, copyFailedText: "Copy failed!", copyText: "Copy Code", copySuccessText: "Copied!", floatingTabs: true, height: "auto", highlightjs: false, indent: 2, label: "", lang: "javascript", maxHeight: "auto", persistentCopyButton: false, prismjs: false, prismPlugin: false, runTab: false, runText: "Run", tabGap: "0.25rem", tabs: false, theme: "neon-bunny" }), emits: ["run", "update:copy-status"], setup(r, { emit: t }) {
  const b = t, f = useSlots(), q = inject(vn, {}), E = r, e = ref({ ...E, ...q });
  let L, A;
  const _ = ref(null), h = ref("copy"), T = ref(""), F = ref(false), I = ref(false), C = ref(false), mn = ref("https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles"), Y = ref("https://cdn.jsdelivr.net/gh/PrismJS/prism@1.29.0/themes"), dn = ref("https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@1.9.0/themes"), M = ref(""), G = ref(""), j = ref(""), { copyButton: kn, copyIcons: fn, copyTab: K, label: Q, runTab: X, tabs: N } = toRefs(e.value), _n = computed(() => {
    let a = "";
    return e.value.highlightjs && (a = M.value), e.value.prismjs && e.value.prismPlugin && (a = _.value), a;
  }), wn = computed(() => ((a) => {
    const { isMobile: l, isPrism: o } = a;
    return { [`${u}`]: true, [`${u}-mb-5`]: true, [`${u}--mobile`]: unref(l), [`${u}--prismjs`]: unref(o), [`${u}--highlightjs`]: !unref(o) };
  })({ isMobile: C, isPrism: e.value.prismjs })), xn = computed(() => ((a) => {
    const { copyStatus: l, isMobile: o, persistentCopyButton: s } = a;
    return { [`${u}--code-copy-button`]: true, [`${u}--code-copy-button-mobile`]: unref(o), [`${u}--code-copy-button-persist`]: unref(s), [`${u}--code-copy-button-status-${unref(l)}`]: true };
  })({ copyStatus: h, isMobile: C, persistentCopyButton: e.value.persistentCopyButton })), Z = computed(() => ((a) => {
    const { copyStatus: l, highlightjs: o, useTheme: s } = a, y = cn(unref(o)), v = jn(unref(s));
    return { [`${u}--button-copy-icon-status-${unref(l)}`]: true, [`${u}--me-1`]: true, [`${u}--tab-${y}-${v}-icon-status-${unref(l)}`]: true, [`${u}--tab-${y}-${v}-icon`]: true };
  })({ copyStatus: h, highlightjs: e.value.highlightjs, useTheme: j })), Tn = computed(() => ((a) => {
    const { isMobile: l } = a;
    return { [`${u}--label`]: true, [`${u}--label-mobile`]: unref(l) };
  })({ isMobile: C })), nn = computed(() => ((a) => {
    const { highlightjs: l, useTheme: o } = a, s = cn(unref(l)), y = jn(unref(o));
    return { [`${u}--tab-${y}`]: true, [`${u}--tab-${s}-${y}`]: true };
  })({ highlightjs: e.value.highlightjs, useTheme: j })), en = computed(() => ((a) => {
    const { isLoading: l, useTheme: o } = a, s = { width: unref(o) === "coy" && unref(l) === false ? "100%" : "" };
    return unref(o) === "coy" && (s.padding = "1em"), s;
  })({ isLoading: I, useTheme: j })), $n = computed(() => ((a) => {
    const { floatingTabs: l, tabGap: o } = a;
    return { bottom: l ? "1px" : "0", gap: W({ str: unref(o) }) || "0px" };
  })({ floatingTabs: e.value.floatingTabs, tabGap: e.value.tabGap })), Cn = computed(() => ((a) => {
    const { copyTab: l, height: o, maxHeight: s, radius: y, runTab: v, tabs: z, useTheme: S } = a, p = unref(y);
    let w = `${p} 0 ${p} ${p} !important`;
    return unref(z) && (unref(l) || unref(v)) || (w = p), { borderRadius: w, display: unref(S) !== "funky" ? "flex" : "block", height: W({ str: unref(o) }), maxHeight: W({ str: unref(s) }), overflow: "auto" };
  })({ copyTab: K.value, height: e.value.height, maxHeight: e.value.maxHeight, radius: e.value.codeBlockRadius, runTab: X.value, tabs: N.value, useTheme: j })), zn = computed(() => ((a) => {
    const { tabGap: l } = a;
    return { gap: W({ str: unref(l) }) || "0px" };
  })({ tabGap: e.value.tabGap }));
  function an() {
    if (!e.value.prismjs && !e.value.highlightjs) throw new Error("[vue-code-block]: You must set either the prismjs or highlightjs props.");
    if (e.value.prismjs && e.value.highlightjs) throw new Error("[vue-code-block]: You cannot have both prismjs and highlightjs props set at the same time.");
    if (e.value.highlightjs && e.value.prismPlugin) throw new Error("[vue-code-block]: Highlight.js does not support PrismJS plugins. Unexpected results may occur. Remove the `prism-plugin` prop from the vue-code-block component.");
  }
  function Sn() {
    if (e.value.lang === "json") {
      const a = e.value.code.toString();
      return function(l) {
        try {
          return JSON.parse(l), true;
        } catch {
          return false;
        }
      }(a) ? void (_.value = JSON.stringify(JSON.parse(a), null, e.value.indent)) : (e.value.lang = "text", void (_.value = a));
    }
    _.value = e.value.code;
  }
  function P() {
    F.value || (F.value = true, navigator.clipboard.writeText(_.value).then(() => {
      T.value = e.value.copySuccessText, h.value = "success", b("update:copy-status", h.value);
    }, (a) => {
      T.value = e.value.copyFailedText, h.value = "failed", b("update:copy-status", h.value), console.error("Copy to clipboard failed: ", a);
    }), setTimeout(() => {
      T.value = e.value.copyText, h.value = "copy", b("update:copy-status", h.value), F.value = false;
    }, 3e3));
  }
  function ln() {
    let a = "";
    const l = e.value.highlightjs ? "highlightjs" : "prism", o = document.getElementsByTagName("head")[0], s = document.createElement("style"), y = document.body.getAttribute("data-v-code-block-theme");
    let v = `v-code-block--theme-${j.value}-${l}`, z = true, S = true, p = "", w = "";
    if (v = on(l, v), y === j.value || y === v || typeof j.value == "boolean") return;
    switch (document.body.setAttribute("data-v-code-block-theme", v), s.setAttribute("type", "text/css"), s.setAttribute("data-theme-id", v), s.setAttribute("data-theme", "v-code-block--theme-sheet"), j.value) {
      case "neon-bunny":
        a = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow: #fef611;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-blue-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-green-neon);--neon-bunny-important: var(--neon-bunny-red);--neon-bunny-inserted: var(--neon-bunny-lime-lighter);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-pink);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-url: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-html-attr-name: var(--neon-bunny-green);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-peach-darker);--neon-bunny-html-attr-value: var(--neon-bunny-peach-darker);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-lime);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-js-keyword: var(--neon-bunny-blue);--neon-bunny-js-literal-property: var(--neon-bunny-neon-green);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-php-boolean: var(--neon-bunny-blue);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-magenta);--neon-bunny-php-class-name-return-type: var(--neon-bunny-gray-lighter);--neon-bunny-php-class-name: var(--neon-bunny-teal);--neon-bunny-php-double-quote-string: var(--neon-bunny-salmon);--neon-bunny-php-function: var(--neon-bunny-green-neon);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-gray-lighter);--neon-bunny-php-keyword: var(--neon-bunny-blue);--neon-bunny-php-operator: var(--neon-bunny-purple);--neon-bunny-php-package: var(--neon-bunny-peach);--neon-bunny-php-property: var(--neon-bunny-purple-light);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-yellow);--neon-bunny-php-variable: var(--neon-bunny-purple-light)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.constant{color:var(--neon-bunny-constant)}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token.attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value .token.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string .token.string,.language-js .token.template-string .token.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name.return-type{color:var(--neon-bunny-php-class-name-return-type);font-style:italic}.language-php .token.function{color:var(--neon-bunny-php-function)}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint);font-style:italic}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`, S = false, z = false, l === "highlightjs" && (a = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-darker: #276AFF;--neon-bunny-blue-light-faded: #a5a8ff;--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray-lighter: #aaa;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #2bb71d;--neon-bunny-green-neon: #0aff04;--neon-bunny-green: #00d205;--neon-bunny-lime-lighter: #c3e88d;--neon-bunny-lime: #b2ff02;--neon-bunny-magenta-neon: #FF25D9;--neon-bunny-magenta: #df00df;--neon-bunny-neon-green: #00ff00;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #e58100;--neon-bunny-peach-darker: #ffb46a;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #d285cc;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff3229;--neon-bunny-salmon: #ff6f5b;--neon-bunny-teal: #80fcff;--neon-bunny-white: #fff;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #fef611;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-blue);--neon-bunny-literal: var(--neon-bunny-blue-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-green-darker);--neon-bunny-property: var(--neon-bunny-blue-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-peach-darker);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-green-darker);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-green-darker);--neon-bunny-title-function: var(--neon-bunny-green-neon);--neon-bunny-title: var(--neon-bunny-green-darker);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-blue-light);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-green);--neon-bunny-meta-prompt: var(--neon-bunny-blue-light);--neon-bunny-meta-string: var(--neon-bunny-blue-light);--neon-bunny-meta: var(--neon-bunny-blue-light);--neon-bunny-attr: var(--neon-bunny-green);--neon-bunny-attribute: var(--neon-bunny-green);--neon-bunny-name: var(--neon-bunny-blue-light);--neon-bunny-section: var(--neon-bunny-green);--neon-bunny-tag-attr: var(--neon-bunny-blue-light);--neon-bunny-tag: var(--neon-bunny-blue-light);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-class: var(--neon-bunny-lime);--neon-bunny-selector-id: var(--neon-bunny-lime);--neon-bunny-selector-pseudo: var(--neon-bunny-purple-light-dim);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-green);--neon-bunny-css: var(--neon-bunny-purple-light-dim);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-green-darker);--neon-bunny-js-params-variable-language: var(--neon-bunny-green-darker);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-pink);--neon-bunny-php: var(--neon-bunny-blue-light);--neon-bunny-php-class-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-class-title: var(--neon-bunny-magenta);--neon-bunny-php-function-title: var(--neon-bunny-green-neon);--neon-bunny-php-keyword: var(--neon-bunny-blue-darker);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-gray-lighter);--neon-bunny-php-string: var(--neon-bunny-yellow);--neon-bunny-php-title-class: var(--neon-bunny-gray-lighter);--neon-bunny-php-title-function-invoke: var(--neon-bunny-green-neon);--neon-bunny-php-title: var(--neon-bunny-peach);--neon-bunny-php-variable: var(--neon-bunny-purple-light);--neon-bunny-php-meta: var(--neon-bunny-red)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params);font-style:italic}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class);font-style:italic}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`);
        break;
      case "neon-bunny-carrot":
        a = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow: #ffff00;--neon-bunny-atrule: var(--neon-bunny-peach);--neon-bunny-attr-name: var(--neon-bunny-purple-light-dim);--neon-bunny-attr-value: var(--neon-bunny-peach);--neon-bunny-boolean: var(--neon-bunny-purple-light);--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-cdata: var(--neon-bunny-gray);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class-name: var(--neon-bunny-peach);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-constant: var(--neon-bunny-green-darker);--neon-bunny-deleted: var(--neon-bunny-red);--neon-bunny-entity: var(--neon-bunny-peach);--neon-bunny-function: var(--neon-bunny-orange-light);--neon-bunny-important: var(--neon-bunny-pink);--neon-bunny-inserted: var(--neon-bunny-lime);--neon-bunny-keyword: var(--neon-bunny-purple-light);--neon-bunny-namespace: var(--neon-bunny-peach);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-orange);--neon-bunny-prolog: var(--neon-bunny-gray);--neon-bunny-property: var(--neon-bunny-orange-light);--neon-bunny-punctuation: var(--neon-bunny-orange);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green-light);--neon-bunny-symbol: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-url: var(--neon-bunny-orange-darker);--neon-bunny-variable: var(--neon-bunny-orange);--neon-bunny-html-attr-name: var(--neon-bunny-orange-light);--neon-bunny-html-attr-value-punctuation: var(--neon-bunny-green);--neon-bunny-html-attr-value: var(--neon-bunny-green);--neon-bunny-css-atrule-rule: var(--neon-bunny-blue);--neon-bunny-css-atrule: var(--neon-bunny-white);--neon-bunny-css-function: var(--neon-bunny-orange-darker);--neon-bunny-css-property: var(--neon-bunny-pink);--neon-bunny-css-punctuation: var(--neon-bunny-white);--neon-bunny-css-selector: var(--neon-bunny-yellow);--neon-bunny-css-string: var(--neon-bunny-green-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-js-keyword: var(--neon-bunny-magenta);--neon-bunny-js-literal-property: var(--neon-bunny-orange);--neon-bunny-js-operator: var(--neon-bunny-blue-light);--neon-bunny-js-punctuation: var(--neon-bunny-white);--neon-bunny-js-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js-template-string-string: var(--neon-bunny-green-darker-darker);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-php-boolean: var(--neon-bunny-purple-light);--neon-bunny-php-class-name-return-type: var(--neon-bunny-yellow);--neon-bunny-php-class-name: var(--neon-bunny-yellow);--neon-bunny-php-double-quote-string: var(--neon-bunny-green);--neon-bunny-php-function: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-keyword-type-hint: var(--neon-bunny-magenta);--neon-bunny-php-class-name-definition-class-name: var(--neon-bunny-yellow);--neon-bunny-php-operator: var(--neon-bunny-yellow-light);--neon-bunny-php-package: var(--neon-bunny-yellow);--neon-bunny-php-property: var(--neon-bunny-orange);--neon-bunny-php-punctuation: var(--neon-bunny-white);--neon-bunny-php-single-quote-string: var(--neon-bunny-green-light);--neon-bunny-php-variable: var(--neon-bunny-orange)}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.token.atrule{color:var(--neon-bunny-atrule)}.token.attr-name{color:var(--neon-bunny-attr-name)}.token.attr-value{color:var(--neon-bunny-attr-value)}.token.bold{font-weight:bold}.token.boolean{color:var(--neon-bunny-boolean)}.token.builtin{color:var(--neon-bunny-builtin)}.token.cdata{color:var(--neon-bunny-cdata);font-style:italic}.token.char{color:var(--neon-bunny-char)}.token.class-name{color:var(--neon-bunny-class-name)}.token.constant{color:var(--neon-bunny-constant)}.token.comment{color:var(--neon-bunny-comment);font-style:italic}.token.deleted{color:var(--neon-bunny-deleted)}.token.entity{color:var(--neon-bunny-entity)}.token.function{color:var(--neon-bunny-function)}.token.important{color:var(--neon-bunny-important);font-style:italic}.token.inserted{color:var(--neon-bunny-inserted)}.token.italic{font-style:italic}.token.keyword{color:var(--neon-bunny-keyword)}.token.number{color:var(--neon-bunny-number)}.token.operator{color:var(--neon-bunny-operator)}.token.prolog{color:var(--neon-bunny-prolog);font-style:italic}.token.property{color:var(--neon-bunny-property)}.token.punctuation{color:var(--neon-bunny-punctuation)}.token.regex{color:var(--neon-bunny-regex)}.token.string{color:var(--neon-bunny-string)}.token.symbol{color:var(--neon-bunny-symbol)}.token.tag{color:var(--neon-bunny-tag)}.token.url{color:var(--neon-bunny-url);text-decoration:underline}.token.variable{color:var(--neon-bunny-variable)}.namespace{color:var(--neon-bunny-namespace)}.language-html .token .attr-name{color:var(--neon-bunny-html-attr-name)}.language-html .token.attr-value{color:var(--neon-bunny-html-attr-value)}.language-html .token.attr-value.punctuation{color:var(--neon-bunny-html-attr-value-punctuation)}.language-css{color:var(--neon-bunny-css) !important}.language-css .token.atrule{color:var(--neon-bunny-css-atrule)}.language-css .token.atrule .token.rule{color:var(--neon-bunny-css-atrule-rule)}.language-css .token.function{color:var(--neon-bunny-css-function)}.language-css .token.property{color:var(--neon-bunny-css-property)}.language-css .token.punctuation{color:var(--neon-bunny-css-punctuation)}.language-css .token.selector{color:var(--neon-bunny-css-selector)}.language-css .token.string{color:var(--neon-bunny-css-string);font-style:italic}.style .token.string{color:var(--neon-bunny-css-string);font-style:italic}.language-javascript,.language-js{color:var(--neon-bunny-js) !important;font-style:italic}.language-javascript span,.language-js span{font-style:normal}.language-javascript .token.keyword,.language-js .token.keyword{color:var(--neon-bunny-js-keyword)}.language-javascript .token.literal-property.property,.language-js .token.literal-property.property{color:var(--neon-bunny-js-literal-property);font-style:italic}.language-javascript .token.operator,.language-js .token.operator{color:var(--neon-bunny-js-operator);font-style:italic}.language-javascript .token.punctuation,.language-js .token.punctuation{color:var(--neon-bunny-js-punctuation)}.language-javascript .token.template-string.string,.language-js .token.template-string.string{color:var(--neon-bunny-js-template-string-string)}.language-php .token.boolean{color:var(--neon-bunny-boolean)}.language-php .token.class-name{color:var(--neon-bunny-php-class-name)}.language-php .token.class-name-definition.class-name{color:var(--neon-bunny-php-class-name-definition-class-name)}.language-php .token.class-name .return-type{color:var(--neon-bunny-php-class-name-return-type)}.language-php .token.function{color:var(--neon-bunny-php-function);text-decoration:underline}.language-php .token.keyword{color:var(--neon-bunny-php-keyword)}.language-php .token.keyword.type-hint{color:var(--neon-bunny-php-keyword-type-hint)}.language-php .token.operator{color:var(--neon-bunny-php-operator)}.language-php .token.package{color:var(--neon-bunny-php-package)}.language-php .token.property{color:var(--neon-bunny-php-property)}.language-php .token.punctuation{color:var(--neon-bunny-php-punctuation)}.language-php .token.string.double-quoted-string{color:var(--neon-bunny-php-double-quote-string)}.language-php .token.string.single-quoted-string{color:var(--neon-bunny-php-single-quote-string)}.language-php .token.variable{color:var(--neon-bunny-php-variable)}
`, S = false, z = false, l === "highlightjs" && (a = `/**
	* MIT License
	* Copyright (c) 2023 WebDevNerdStuff
	* WebDevNerdStuff Neon Bunny Carrot Theme
	* VSCode Theme: https://marketplace.visualstudio.com/items?itemName=WebDevNerdStuff.neon-bunny
	*/
	:root{--neon-bunny-blue-light: #2492ff;--neon-bunny-blue: #0b93ff;--neon-bunny-gray: #7f817e;--neon-bunny-green-darker-darker: #008b05;--neon-bunny-green-darker: #2bb71d;--neon-bunny-green-light: #7cd47d;--neon-bunny-green: #00d205;--neon-bunny-lime: #c3e88d;--neon-bunny-magenta: #dd00ff;--neon-bunny-orange-darker: #e58100;--neon-bunny-orange-light: #ffc266;--neon-bunny-orange-lighter: #ff8d04;--neon-bunny-orange: #ff9900;--neon-bunny-peach-light: #ffe4a6;--neon-bunny-peach: #ffcb6b;--neon-bunny-pink: #ff1190;--neon-bunny-purple-light-dim: #c792ea;--neon-bunny-purple-light: #da96df;--neon-bunny-purple: #ea03ff;--neon-bunny-red: #ff5370;--neon-bunny-teal: #00EEFF;--neon-bunny-white: #fff;--neon-bunny-yellow-light: #ffffa2;--neon-bunny-yellow-light-faded: #ffe3b8;--neon-bunny-yellow: #ffff00;--neon-bunny-builtin: var(--neon-bunny-purple);--neon-bunny-char: var(--neon-bunny-pink);--neon-bunny-class: var(--neon-bunny-magenta);--neon-bunny-comment: var(--neon-bunny-gray);--neon-bunny-doctag: var(--neon-bunny-blue-light);--neon-bunny-keyword: var(--neon-bunny-magenta);--neon-bunny-literal: var(--neon-bunny-purple-light);--neon-bunny-number: var(--neon-bunny-white);--neon-bunny-operator: var(--neon-bunny-blue-light);--neon-bunny-params: var(--neon-bunny-orange);--neon-bunny-property: var(--neon-bunny-yellow-light-faded);--neon-bunny-punctuation: var(--neon-bunny-blue);--neon-bunny-regex: var(--neon-bunny-peach-light);--neon-bunny-string: var(--neon-bunny-green);--neon-bunny-subst: var(--neon-bunny-green-darker);--neon-bunny-symbol: var(--neon-bunny-pink);--neon-bunny-title-class-inherited: var(--neon-bunny-orange);--neon-bunny-title-class: var(--neon-bunny-green-neon);--neon-bunny-title-function-invoke: var(--neon-bunny-orange);--neon-bunny-title-function: var(--neon-bunny-orange-light);--neon-bunny-title: var(--neon-bunny-orange);--neon-bunny-type: var(--neon-bunny-pink);--neon-bunny-variable-constant: var(--neon-bunny-green-darker);--neon-bunny-variable-language: var(--neon-bunny-orange);--neon-bunny-variable: var(--neon-bunny-green-darker);--neon-bunny-meta-keyword: var(--neon-bunny-purple-light);--neon-bunny-meta-prompt: var(--neon-bunny-orange);--neon-bunny-meta-string: var(--neon-bunny-orange);--neon-bunny-meta: var(--neon-bunny-orange);--neon-bunny-attr: var(--neon-bunny-orange);--neon-bunny-attribute: var(---neon-bunny-orange);--neon-bunny-name: var(--neon-bunny-orange);--neon-bunny-section: var(--neon-bunny-orange);--neon-bunny-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-tag: var(--neon-bunny-orange);--neon-bunny-bullet: var(--neon-bunny-white);--neon-bunny-code: var(--neon-bunny-white);--neon-bunny-emphasis: var(--neon-bunny-white);--neon-bunny-formula: var(--neon-bunny-white);--neon-bunny-link: var(--neon-bunny-orange);--neon-bunny-quote: var(--neon-bunny-white);--neon-bunny-strong: var(--neon-bunny-white);--neon-bunny-css-selector-id: var(--neon-bunny-green);--neon-bunny-selector-attr: var(--neon-bunny-orange);--neon-bunny-selector-class: var(--neon-bunny-yellow);--neon-bunny-selector-id: var(--neon-bunny-selector);--neon-bunny-selector-pseudo: var(--neon-bunny-orange);--neon-bunny-selector-tag: var(--neon-bunny-white);--neon-bunny-selector: var(--neon-bunny-lime);--neon-bunny-addition: var(--neon-bunny-green-neon);--neon-bunny-deletion: var(--neon-bunny-red);--neon-bunny-html-tag-attr: var(--neon-bunny-orange-light);--neon-bunny-css: var(--neon-bunny-teal);--neon-bunny-css-builtin: var(--neon-bunny-orange);--neon-bunny-css-meta: var(--neon-bunny-red);--neon-bunny-css-attribute: var(--neon-bunny-pink);--neon-bunny-json-punctuation: var(--neon-bunny-white);--neon-bunny-js: var(--neon-bunny-orange);--neon-bunny-js-params-variable-language: var(--neon-bunny-orange);--neon-bunny-js-title-class: var(--neon-bunny-orange-lighter);--neon-bunny-js-variable-language: var(--neon-bunny-yellow);--neon-bunny-php: var(--neon-bunny-white);--neon-bunny-php-class-keyword: var(--neon-bunny-pink);--neon-bunny-php-class-title: var(--neon-bunny-yellow);--neon-bunny-php-function-title: var(--neon-bunny-orange-light);--neon-bunny-php-keyword: var(--neon-bunny-magenta);--neon-bunny-php-params-variable: var(--neon-bunny-green-darker);--neon-bunny-php-params: var(--neon-bunny-yellow);--neon-bunny-php-string: var(--neon-bunny-green-light);--neon-bunny-php-title-class: var(--neon-bunny-yellow);--neon-bunny-php-title-function-invoke: var(--neon-bunny-orange-light);--neon-bunny-php-title: var(--neon-bunny-white);--neon-bunny-php-variable: var(--neon-bunny-orange);--neon-bunny-php-meta: var(--neon-bunny-pink)}pre code.hljs{display:block;overflow-x:auto;padding:1em}code[class*=language-],pre[class*=language-]{-moz-hyphens:none;-moz-tab-size:4;-ms-hyphens:none;-o-tab-size:4;-webkit-hyphens:none;color:var(--neon-bunny-white);font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;hyphens:none;line-height:1.5;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal;word-wrap:normal}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:rgba(29,59,83,.99);text-shadow:none}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:rgba(255,255,255,.0823529412);text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{background:#000;color:#fff;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-]{background:#000;color:#fff;border-radius:.3em;padding:.1em;white-space:normal}.hljs-built_in{color:var(--neon-bunny-builtin)}.hljs-char{color:var(--neon-bunny-char)}.hljs-comment{color:var(--neon-bunny-comment);font-style:italic}.hljs-doctag{color:var(--neon-bunny-doctag)}.hljs-keyword{color:var(--neon-bunny-keyword)}.hljs-literal{color:var(--neon-bunny-literal)}.hljs-number{color:var(--neon-bunny-number)}.hljs-operator{color:var(--neon-bunny-operator)}.hljs-params{color:var(--neon-bunny-params)}.hljs-property{color:var(--neon-bunny-property)}.hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs-regexp{color:var(--neon-bunny-regex)}.hljs-string{color:var(--neon-bunny-string)}.hljs-subst{color:var(--neon-bunny-subst)}.hljs-symbol{color:var(--neon-bunny-symbol)}.hljs-title{color:var(--neon-bunny-title)}.hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs-title.function_{color:var(--neon-bunny-title-function);text-decoration:underline}.hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs-type{color:var(--neon-bunny-type)}.hljs-variable{color:var(--neon-bunny-variable)}.hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs-variable.language_{color:var(--neon-bunny-variable-language);font-style:italic}.hljs-meta{color:var(--neon-bunny-meta)}.hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs-attr{color:var(--neon-bunny-attr)}.hljs-attribute{color:var(--neon-bunny-attribute)}.hljs-name{color:var(--neon-bunny-name)}.hljs-section{color:var(--neon-bunny-section)}.hljs-tag{color:var(--neon-bunny-tag)}.hljs-tag .hljs-attr{color:var(--neon-bunny-tag-attr)}.hljs-bullet{color:var(--neon-bunny-bullet)}.hljs-code{color:var(--neon-bunny-code)}.hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs-formula{color:var(--neon-bunny-formula)}.hljs-link{color:var(--neon-bunny-link)}.hljs-quote{color:var(--neon-bunny-quote)}.hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs-selector{color:var(--neon-bunny-selector)}.hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs-addition{color:var(--neon-bunny-addition)}.hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-html .hljs-tag .hljs-attr,.hljs .language-html .hljs-tag .hljs-attr{color:var(--neon-bunny-html-tag-attr)}.hljs.language-css,.hljs .language-css{color:var(--neon-bunny-css)}.hljs.language-css .hljs-built_in,.hljs .language-css .hljs-built_in{color:var(--neon-bunny-css-builtin)}.hljs.language-css .hljs-char,.hljs .language-css .hljs-char{color:var(--neon-bunny-char)}.hljs.language-css .hljs-comment,.hljs .language-css .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-css .hljs-doctag,.hljs .language-css .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-css .hljs-keyword,.hljs .language-css .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-css .hljs-literal,.hljs .language-css .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-css .hljs-number,.hljs .language-css .hljs-number{color:var(--neon-bunny-number)}.hljs.language-css .hljs-operator,.hljs .language-css .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-css .hljs-params,.hljs .language-css .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-css .hljs-property,.hljs .language-css .hljs-property{color:var(--neon-bunny-property)}.hljs.language-css .hljs-punctuation,.hljs .language-css .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-css .hljs-regexp,.hljs .language-css .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-css .hljs-string,.hljs .language-css .hljs-string{color:var(--neon-bunny-string)}.hljs.language-css .hljs-subst,.hljs .language-css .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-css .hljs-symbol,.hljs .language-css .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-css .hljs-title,.hljs .language-css .hljs-title{color:var(--neon-bunny-title)}.hljs.language-css .hljs-title.class_,.hljs .language-css .hljs-title.class_{color:var(--neon-bunny-title-class)}.hljs.language-css .hljs-title.class_.inherited__,.hljs .language-css .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-css .hljs-title.function_,.hljs .language-css .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-css .hljs-title.function_.invoke__,.hljs .language-css .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-css .hljs-type,.hljs .language-css .hljs-type{color:var(--neon-bunny-type)}.hljs.language-css .hljs-variable,.hljs .language-css .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-css .hljs-variable.constant_,.hljs .language-css .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-css .hljs-variable.language_,.hljs .language-css .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-css .hljs-meta,.hljs .language-css .hljs-meta{color:var(--neon-bunny-css-meta)}.hljs.language-css .hljs-meta.prompt_,.hljs .language-css .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-css .hljs-meta.keyword_,.hljs .language-css .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-css .hljs-meta.string_,.hljs .language-css .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-css .hljs-attr,.hljs .language-css .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-css .hljs-attribute,.hljs .language-css .hljs-attribute{color:var(--neon-bunny-css-attribute)}.hljs.language-css .hljs-name,.hljs .language-css .hljs-name{color:var(--neon-bunny-name)}.hljs.language-css .hljs-section,.hljs .language-css .hljs-section{color:var(--neon-bunny-section)}.hljs.language-css .hljs-tag,.hljs .language-css .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-css .hljs-bullet,.hljs .language-css .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-css .hljs-code,.hljs .language-css .hljs-code{color:var(--neon-bunny-code)}.hljs.language-css .hljs-emphasis,.hljs .language-css .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-css .hljs-formula,.hljs .language-css .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-css .hljs-link,.hljs .language-css .hljs-link{color:var(--neon-bunny-link)}.hljs.language-css .hljs-quote,.hljs .language-css .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-css .hljs-strong,.hljs .language-css .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-css .hljs-selector,.hljs .language-css .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-css .hljs-selector-attr,.hljs .language-css .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-css .hljs-selector-class,.hljs .language-css .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-css .hljs-selector-id,.hljs .language-css .hljs-selector-id{color:var(--neon-bunny-css-selector-id)}.hljs.language-css .hljs-selector-pseudo,.hljs .language-css .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-css .hljs-selector-tag,.hljs .language-css .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-css .hljs-addition,.hljs .language-css .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-css .hljs-deletion,.hljs .language-css .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-json .hljs-punctuation,.hljs .language-json .hljs-punctuation{color:var(--neon-bunny-json-punctuation)}.hljs.language-javascript,.hljs.language-js,.hljs .language-javascript,.hljs .language-js{color:var(--neon-bunny-js)}.hljs.language-javascript .hljs-built_in,.hljs.language-js .hljs-built_in,.hljs .language-javascript .hljs-built_in,.hljs .language-js .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-javascript .hljs-char,.hljs.language-js .hljs-char,.hljs .language-javascript .hljs-char,.hljs .language-js .hljs-char{color:var(--neon-bunny-char)}.hljs.language-javascript .hljs-comment,.hljs.language-js .hljs-comment,.hljs .language-javascript .hljs-comment,.hljs .language-js .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-javascript .hljs-doctag,.hljs.language-js .hljs-doctag,.hljs .language-javascript .hljs-doctag,.hljs .language-js .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-javascript .hljs-keyword,.hljs.language-js .hljs-keyword,.hljs .language-javascript .hljs-keyword,.hljs .language-js .hljs-keyword{color:var(--neon-bunny-keyword)}.hljs.language-javascript .hljs-literal,.hljs.language-js .hljs-literal,.hljs .language-javascript .hljs-literal,.hljs .language-js .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-javascript .hljs-number,.hljs.language-js .hljs-number,.hljs .language-javascript .hljs-number,.hljs .language-js .hljs-number{color:var(--neon-bunny-number)}.hljs.language-javascript .hljs-operator,.hljs.language-js .hljs-operator,.hljs .language-javascript .hljs-operator,.hljs .language-js .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-javascript .hljs-params,.hljs.language-js .hljs-params,.hljs .language-javascript .hljs-params,.hljs .language-js .hljs-params{color:var(--neon-bunny-params);font-style:italic}.hljs.language-javascript .hljs-params .hljs-variable.language_,.hljs.language-js .hljs-params .hljs-variable.language_,.hljs .language-javascript .hljs-params .hljs-variable.language_,.hljs .language-js .hljs-params .hljs-variable.language_{color:var(--neon-bunny-js-params-variable-language)}.hljs.language-javascript .hljs-property,.hljs.language-js .hljs-property,.hljs .language-javascript .hljs-property,.hljs .language-js .hljs-property{color:var(--neon-bunny-property)}.hljs.language-javascript .hljs-punctuation,.hljs.language-js .hljs-punctuation,.hljs .language-javascript .hljs-punctuation,.hljs .language-js .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-javascript .hljs-regexp,.hljs.language-js .hljs-regexp,.hljs .language-javascript .hljs-regexp,.hljs .language-js .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-javascript .hljs-string,.hljs.language-js .hljs-string,.hljs .language-javascript .hljs-string,.hljs .language-js .hljs-string{color:var(--neon-bunny-string)}.hljs.language-javascript .hljs-subst,.hljs.language-js .hljs-subst,.hljs .language-javascript .hljs-subst,.hljs .language-js .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-javascript .hljs-symbol,.hljs.language-js .hljs-symbol,.hljs .language-javascript .hljs-symbol,.hljs .language-js .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-javascript .hljs-title,.hljs.language-js .hljs-title,.hljs .language-javascript .hljs-title,.hljs .language-js .hljs-title{color:var(--neon-bunny-title)}.hljs.language-javascript .hljs-title.class_,.hljs.language-js .hljs-title.class_,.hljs .language-javascript .hljs-title.class_,.hljs .language-js .hljs-title.class_{color:var(--neon-bunny-js-title-class)}.hljs.language-javascript .hljs-title.class_.inherited__,.hljs.language-js .hljs-title.class_.inherited__,.hljs .language-javascript .hljs-title.class_.inherited__,.hljs .language-js .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-javascript .hljs-title.function_,.hljs.language-js .hljs-title.function_,.hljs .language-javascript .hljs-title.function_,.hljs .language-js .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-javascript .hljs-title.function_.invoke__,.hljs.language-js .hljs-title.function_.invoke__,.hljs .language-javascript .hljs-title.function_.invoke__,.hljs .language-js .hljs-title.function_.invoke__{color:var(--neon-bunny-title-function-invoke)}.hljs.language-javascript .hljs-type,.hljs.language-js .hljs-type,.hljs .language-javascript .hljs-type,.hljs .language-js .hljs-type{color:var(--neon-bunny-type)}.hljs.language-javascript .hljs-variable,.hljs.language-js .hljs-variable,.hljs .language-javascript .hljs-variable,.hljs .language-js .hljs-variable{color:var(--neon-bunny-variable)}.hljs.language-javascript .hljs-variable.constant_,.hljs.language-js .hljs-variable.constant_,.hljs .language-javascript .hljs-variable.constant_,.hljs .language-js .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-javascript .hljs-variable.language_,.hljs.language-js .hljs-variable.language_,.hljs .language-javascript .hljs-variable.language_,.hljs .language-js .hljs-variable.language_{color:var(--neon-bunny-js-variable-language)}.hljs.language-javascript .hljs-meta,.hljs.language-js .hljs-meta,.hljs .language-javascript .hljs-meta,.hljs .language-js .hljs-meta{color:var(--neon-bunny-meta)}.hljs.language-javascript .hljs-meta.prompt_,.hljs.language-js .hljs-meta.prompt_,.hljs .language-javascript .hljs-meta.prompt_,.hljs .language-js .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-javascript .hljs-meta.keyword_,.hljs.language-js .hljs-meta.keyword_,.hljs .language-javascript .hljs-meta.keyword_,.hljs .language-js .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-javascript .hljs-meta.string_,.hljs.language-js .hljs-meta.string_,.hljs .language-javascript .hljs-meta.string_,.hljs .language-js .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-javascript .hljs-attr,.hljs.language-js .hljs-attr,.hljs .language-javascript .hljs-attr,.hljs .language-js .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-javascript .hljs-attribute,.hljs.language-js .hljs-attribute,.hljs .language-javascript .hljs-attribute,.hljs .language-js .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-javascript .hljs-name,.hljs.language-js .hljs-name,.hljs .language-javascript .hljs-name,.hljs .language-js .hljs-name{color:var(--neon-bunny-name)}.hljs.language-javascript .hljs-section,.hljs.language-js .hljs-section,.hljs .language-javascript .hljs-section,.hljs .language-js .hljs-section{color:var(--neon-bunny-section)}.hljs.language-javascript .hljs-tag,.hljs.language-js .hljs-tag,.hljs .language-javascript .hljs-tag,.hljs .language-js .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-javascript .hljs-bullet,.hljs.language-js .hljs-bullet,.hljs .language-javascript .hljs-bullet,.hljs .language-js .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-javascript .hljs-code,.hljs.language-js .hljs-code,.hljs .language-javascript .hljs-code,.hljs .language-js .hljs-code{color:var(--neon-bunny-code)}.hljs.language-javascript .hljs-emphasis,.hljs.language-js .hljs-emphasis,.hljs .language-javascript .hljs-emphasis,.hljs .language-js .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-javascript .hljs-formula,.hljs.language-js .hljs-formula,.hljs .language-javascript .hljs-formula,.hljs .language-js .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-javascript .hljs-link,.hljs.language-js .hljs-link,.hljs .language-javascript .hljs-link,.hljs .language-js .hljs-link{color:var(--neon-bunny-link)}.hljs.language-javascript .hljs-quote,.hljs.language-js .hljs-quote,.hljs .language-javascript .hljs-quote,.hljs .language-js .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-javascript .hljs-strong,.hljs.language-js .hljs-strong,.hljs .language-javascript .hljs-strong,.hljs .language-js .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-javascript .hljs-selector,.hljs.language-js .hljs-selector,.hljs .language-javascript .hljs-selector,.hljs .language-js .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-javascript .hljs-selector-attr,.hljs.language-js .hljs-selector-attr,.hljs .language-javascript .hljs-selector-attr,.hljs .language-js .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-javascript .hljs-selector-class,.hljs.language-js .hljs-selector-class,.hljs .language-javascript .hljs-selector-class,.hljs .language-js .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-javascript .hljs-selector-id,.hljs.language-js .hljs-selector-id,.hljs .language-javascript .hljs-selector-id,.hljs .language-js .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-javascript .hljs-selector-pseudo,.hljs.language-js .hljs-selector-pseudo,.hljs .language-javascript .hljs-selector-pseudo,.hljs .language-js .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-javascript .hljs-selector-tag,.hljs.language-js .hljs-selector-tag,.hljs .language-javascript .hljs-selector-tag,.hljs .language-js .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-javascript .hljs-addition,.hljs.language-js .hljs-addition,.hljs .language-javascript .hljs-addition,.hljs .language-js .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-javascript .hljs-deletion,.hljs.language-js .hljs-deletion,.hljs .language-javascript .hljs-deletion,.hljs .language-js .hljs-deletion{color:var(--neon-bunny-deletion)}.hljs.language-php,.hljs .language-php{color:var(--neon-bunny-php)}.hljs.language-php .hljs-built_in,.hljs .language-php .hljs-built_in{color:var(--neon-bunny-builtin)}.hljs.language-php .hljs-char,.hljs .language-php .hljs-char{color:var(--neon-bunny-char)}.hljs.language-php .hljs-class .hljs-title,.hljs .language-php .hljs-class .hljs-title{color:var(--neon-bunny-php-class-title) !important}.hljs.language-php .hljs-class .hljs-keyword,.hljs .language-php .hljs-class .hljs-keyword{color:var(--neon-bunny-php-class-keyword)}.hljs.language-php .hljs-comment,.hljs .language-php .hljs-comment{color:var(--neon-bunny-comment)}.hljs.language-php .hljs-doctag,.hljs .language-php .hljs-doctag{color:var(--neon-bunny-doctag)}.hljs.language-php .hljs-function .hljs-title,.hljs .language-php .hljs-function .hljs-title{color:var(--neon-bunny-php-function-title)}.hljs.language-php .hljs-keyword,.hljs .language-php .hljs-keyword{color:var(--neon-bunny-php-keyword)}.hljs.language-php .hljs-literal,.hljs .language-php .hljs-literal{color:var(--neon-bunny-literal)}.hljs.language-php .hljs-number,.hljs .language-php .hljs-number{color:var(--neon-bunny-number)}.hljs.language-php .hljs-operator,.hljs .language-php .hljs-operator{color:var(--neon-bunny-operator)}.hljs.language-php .hljs-params,.hljs .language-php .hljs-params{color:var(--neon-bunny-php-params)}.hljs.language-php .hljs-params .hljs-variable,.hljs .language-php .hljs-params .hljs-variable{color:var(--neon-bunny-php-params-variable)}.hljs.language-php .hljs-property,.hljs .language-php .hljs-property{color:var(--neon-bunny-property)}.hljs.language-php .hljs-punctuation,.hljs .language-php .hljs-punctuation{color:var(--neon-bunny-punctuation)}.hljs.language-php .hljs-regexp,.hljs .language-php .hljs-regexp{color:var(--neon-bunny-regex)}.hljs.language-php .hljs-string,.hljs .language-php .hljs-string{color:var(--neon-bunny-php-string)}.hljs.language-php .hljs-subst,.hljs .language-php .hljs-subst{color:var(--neon-bunny-subst)}.hljs.language-php .hljs-symbol,.hljs .language-php .hljs-symbol{color:var(--neon-bunny-symbol)}.hljs.language-php .hljs-title,.hljs .language-php .hljs-title{color:var(--neon-bunny-php-title)}.hljs.language-php .hljs-title.class_,.hljs .language-php .hljs-title.class_{color:var(--neon-bunny-php-title-class)}.hljs.language-php .hljs-title.class_.inherited__,.hljs .language-php .hljs-title.class_.inherited__{color:var(--neon-bunny-title-class-inherited)}.hljs.language-php .hljs-title.function_,.hljs .language-php .hljs-title.function_{color:var(--neon-bunny-title-function)}.hljs.language-php .hljs-title.function_.invoke__,.hljs .language-php .hljs-title.function_.invoke__{color:var(--neon-bunny-php-title-function-invoke)}.hljs.language-php .hljs-type,.hljs .language-php .hljs-type{color:var(--neon-bunny-type)}.hljs.language-php .hljs-variable,.hljs .language-php .hljs-variable{color:var(--neon-bunny-php-variable)}.hljs.language-php .hljs-variable.constant_,.hljs .language-php .hljs-variable.constant_{color:var(--neon-bunny-variable-constant)}.hljs.language-php .hljs-variable.language_,.hljs .language-php .hljs-variable.language_{color:var(--neon-bunny-variable-language)}.hljs.language-php .hljs-meta,.hljs .language-php .hljs-meta{color:var(--neon-bunny-php-meta)}.hljs.language-php .hljs-meta.prompt_,.hljs .language-php .hljs-meta.prompt_{color:var(--neon-bunny-meta-prompt)}.hljs.language-php .hljs-meta.keyword_,.hljs .language-php .hljs-meta.keyword_{color:var(--neon-bunny-meta-keyword)}.hljs.language-php .hljs-meta.string_,.hljs .language-php .hljs-meta.string_{color:var(--neon-bunny-meta-string)}.hljs.language-php .hljs-attr,.hljs .language-php .hljs-attr{color:var(--neon-bunny-attr)}.hljs.language-php .hljs-attribute,.hljs .language-php .hljs-attribute{color:var(--neon-bunny-attribute)}.hljs.language-php .hljs-name,.hljs .language-php .hljs-name{color:var(--neon-bunny-name)}.hljs.language-php .hljs-section,.hljs .language-php .hljs-section{color:var(--neon-bunny-section)}.hljs.language-php .hljs-tag,.hljs .language-php .hljs-tag{color:var(--neon-bunny-tag)}.hljs.language-php .hljs-bullet,.hljs .language-php .hljs-bullet{color:var(--neon-bunny-bullet)}.hljs.language-php .hljs-code,.hljs .language-php .hljs-code{color:var(--neon-bunny-code)}.hljs.language-php .hljs-emphasis,.hljs .language-php .hljs-emphasis{color:var(--neon-bunny-emphasis);font-style:italic}.hljs.language-php .hljs-formula,.hljs .language-php .hljs-formula{color:var(--neon-bunny-formula)}.hljs.language-php .hljs-link,.hljs .language-php .hljs-link{color:var(--neon-bunny-link)}.hljs.language-php .hljs-quote,.hljs .language-php .hljs-quote{color:var(--neon-bunny-quote)}.hljs.language-php .hljs-strong,.hljs .language-php .hljs-strong{color:var(--neon-bunny-strong);font-weight:bold}.hljs.language-php .hljs-selector,.hljs .language-php .hljs-selector{color:var(--neon-bunny-selector)}.hljs.language-php .hljs-selector-attr,.hljs .language-php .hljs-selector-attr{color:var(--neon-bunny-selector-attr)}.hljs.language-php .hljs-selector-class,.hljs .language-php .hljs-selector-class{color:var(--neon-bunny-selector-class)}.hljs.language-php .hljs-selector-id,.hljs .language-php .hljs-selector-id{color:var(--neon-bunny-selector-id)}.hljs.language-php .hljs-selector-pseudo,.hljs .language-php .hljs-selector-pseudo{color:var(--neon-bunny-selector-pseudo)}.hljs.language-php .hljs-selector-tag,.hljs .language-php .hljs-selector-tag{color:var(--neon-bunny-selector-tag)}.hljs.language-php .hljs-addition,.hljs .language-php .hljs-addition{color:var(--neon-bunny-addition)}.hljs.language-php .hljs-deletion,.hljs .language-php .hljs-deletion{color:var(--neon-bunny-deletion)}
`);
    }
    if (!S && !z) return rn(), s.appendChild(document.createTextNode(a)), void o.appendChild(s);
    const un = on(l, j.value);
    if (e.value.cssPath !== void 0) w = e.value.cssPath;
    else switch (l) {
      case "highlightjs":
        p = `${un}.min.css`, w = `${mn.value}/${p}`;
        break;
      case "prism":
        p = `${un}.css`, w = j.value === "default" ? `${Y.value}/prism.css` : j.value.includes("themes-") ? `${dn.value}/${p}` : `${Y.value}/prism-${p}`;
        break;
      default:
        p = "";
    }
    I.value = true, fetch(w).then((B) => B.text()).then((B) => {
      rn(), s.appendChild(document.createTextNode(B)), o.appendChild(s), I.value = false;
    }).catch((B) => {
      const Bn = e.value.highlightjs ? "Highlight.js" : "PrismJS";
      console.error(`${Bn} CDN Error:`, B);
    });
  }
  function sn() {
    const a = Wn().device;
    C.value = a.type === "mobile";
  }
  function on(a, l, o = false) {
    let s = l;
    return a === "prism" && (s = s.replace("themes-", "prism-"), s = s.replace("prism-prism-", "prism-"), s = s.replace("theme-prism-", "theme-"), o && (s = s.replace("prism-prism-", ""), s = s.replace("prism-", ""))), a === "highlightjs" && (s = s.replace("base16-", "base16/")), s;
  }
  function rn() {
    const a = document.querySelectorAll('[data-theme="v-code-block--theme-sheet"]');
    a.length > 0 && a.forEach((l) => {
      l.remove();
    });
  }
  function tn() {
    Sn(), e.value.highlightjs && __vitePreload(() => import("./index-COS0MwYC.js"), true ? __vite__mapDeps([0,1,2]) : void 0).then((a) => {
      L = a.default, L.registerLanguage("plain", Fn), M.value = L.highlight(_.value, { language: e.value.lang }).value;
    }).catch((a) => {
      console.error("Highlight.js import:", { err: a });
    }), e.value.prismjs && __vitePreload(() => import("./prism-DioJVDXm.js").then((n) => n.p), true ? __vite__mapDeps([3,2]) : void 0).then((a) => {
      A = a.default, M.value = A.highlight(_.value, A.languages[e.value.lang], e.value.lang);
    }).catch((a) => {
      console.error("PrismJS import:", { err: a });
    });
  }
  function J() {
    b("run");
  }
  return watch(E, () => {
    e.value = { ...E, ...q }, e.value.code && tn(), (e.value.theme || e.value.prismjs || e.value.highlightjs) && (an(), j.value = e.value.theme, ln()), e.value.copyText && (T.value = e.value.copyText), e.value.runText && (G.value = e.value.runText);
  }), onBeforeMount(() => {
    T.value = e.value.copyText, G.value = e.value.runText, an();
  }), onMounted(() => {
    j.value = e.value.theme, ln(), sn(), tn();
  }), window.addEventListener("orientationchange", () => {
    sn();
  }), (a, l) => (openBlock(), createElementBlock("div", { class: normalizeClass(unref(wn)) }, [unref(Q) || unref(N) || unref(f).label || unref(f).tabs ? (openBlock(), createElementBlock("div", { key: 0, class: "v-code-block--header", style: normalizeStyle(unref($n)) }, [createBaseVNode("div", { class: normalizeClass(["v-code-block--label v-code-block--pb-1", unref(Tn)]) }, [unref(f).label ? renderSlot(a.$slots, "label", normalizeProps(mergeProps({ key: 0 }, { copyCode: P, copyStatus: unref(h), runCode: J })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(Q)), 1)], 64))], 2), createBaseVNode("div", { class: "v-code-block--tabs", style: normalizeStyle(unref(zn)) }, [unref(f).tabs ? renderSlot(a.$slots, "tabs", normalizeProps(mergeProps({ key: 0 }, { copyCode: P, copyStatus: unref(h), runCode: J })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(K) && unref(N) ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["v-code-block--tab", unref(nn)]), onClick: P }, [createBaseVNode("div", In, [unref(fn) ? (openBlock(), createBlock(pn, { key: 0, class: normalizeClass(["v-code-block--button-copy-icon", unref(Z)]), icon: unref(h) }, null, 8, ["class", "icon"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(T)), 1)])], 2)) : createCommentVNode("", true), unref(X) && unref(N) && !unref(C) ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(["v-code-block--tab v-code-block--tab-run", unref(nn)]), onClick: J }, [createBaseVNode("div", Gn, toDisplayString(unref(G)), 1)], 2)) : createCommentVNode("", true)], 64))], 4)], 4)) : createCommentVNode("", true), createBaseVNode("div", Jn, [createBaseVNode("div", { class: normalizeClass(["v-code-block--code-copy-button", unref(xn)]), onClick: P }, [unref(f).copyButton ? renderSlot(a.$slots, "copyButton", normalizeProps(mergeProps({ key: 0 }, { copyStatus: unref(h) })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(kn) ? (openBlock(), createBlock(pn, { key: 0, class: normalizeClass(["v-code-block--button-copy-icon", unref(Z)]), icon: unref(h) }, null, 8, ["class", "icon"])) : createCommentVNode("", true)], 64))], 2), createBaseVNode("pre", mergeProps(a.$attrs, { class: `language-${unref(e).lang}`, style: unref(Cn) }), [createTextVNode("		"), a.prismPlugin ? (openBlock(), createElementBlock("code", { key: 0, class: normalizeClass(`language-${unref(e).lang} ${unref(e).browserWindow ? "v-code-block--code-browser" : ""} ${unref(e).highlightjs ? "hljs" : ""}`), style: normalizeStyle(unref(en)), textContent: toDisplayString(unref(_n)) }, null, 14, On)) : (openBlock(), createElementBlock("code", { key: 1, class: normalizeClass(`language-${unref(e).lang} ${unref(e).browserWindow ? "v-code-block--code-browser" : ""} ${unref(e).highlightjs ? "hljs" : ""}`), style: normalizeStyle(unref(en)), innerHTML: unref(M) }, null, 14, Rn)), createTextVNode(`
	`)], 16)])], 2));
} }), [["__scopeId", "data-v-51ec5829"]]);
Object.freeze(Object.defineProperty({ __proto__: null, default: Un }, Symbol.toStringTag, { value: "Module" }));
const vn = Symbol();
(function() {
  try {
    if (typeof document < "u") {
      var i = document.createElement("style");
      i.appendChild(document.createTextNode(`:root{--v-cb-blue: 206 80% 39%;--v-cb-blue-hex: #146eb4;--v-cb-blue-rgb: 20, 110, 180;--v-cb-primary: var(--v-cb-blue);--v-cb-primary-hex: var(--v-cb-blue-hex);--v-cb-primary-rgb: var(--v-cb-blue-rgb);--v-cb-green: 120 61% 34%;--v-cb-green-hex: #228b22;--v-cb-green-rgb: 34, 139, 34;--v-cb-success: var(--v-cb-green);--v-cb-success-hex: var(--v-cb-green-hex);--v-cb-success-rgb: var(--v-cb-green-rgb);--v-cb-red: 0 68% 42%;--v-cb-red-hex: #b22222;--v-cb-red-rgb: 178, 34, 34;--v-cb-danger: var(--v-cb-red);--v-cb-danger-hex: var(--v-cb-red-hex);--v-cb-danger-rgb: var(--v-cb-red-rgb);--v-cb-tab-neon-bunny-bkg: 0 0% 0%;--v-cb-tab-neon-bunny-text: 0 0% 100%;--v-cb-tab-neon-bunny-icon: 207 100% 52%;--v-cb-tab-neon-bunny-icon-success: 119 100% 51%;--v-cb-tab-neon-bunny-icon-failed: 3 100% 58%;--v-cb-tab-neon-bunny-carrot-bkg: 0 0% 0%;--v-cb-tab-neon-bunny-carrot-text: 0 0% 100%;--v-cb-tab-neon-bunny-carrot-icon: 292 100% 50%;--v-cb-tab-neon-bunny-carrot-icon-success: 119 100% 51%;--v-cb-tab-neon-bunny-carrot-icon-failed: 3 100% 58%;--v-cb-tab-prism-coy-bkg: 205 59% 50%;--v-cb-tab-prism-coy-text: 0 0% 0%;--v-cb-tab-prism-coy-icon: 195 76% 41%;--v-cb-tab-prism-coy-icon-success: 80 100% 30%;--v-cb-tab-prism-coy-icon-failed: 0 64% 48%;--v-cb-tab-prism-dark-bkg: 30 20% 25%;--v-cb-tab-prism-dark-text: 0 0% 100%;--v-cb-tab-prism-dark-border: 30 20% 40%;--v-cb-tab-prism-dark-icon: 40 90% 60%;--v-cb-tab-prism-dark-icon-success: 75 70% 60%;--v-cb-tab-prism-dark-icon-failed: 0 100% 50%;--v-cb-tab-prism-default-bkg: 24 20% 95%;--v-cb-tab-prism-default-text: 0 0% 0%;--v-cb-tab-prism-default-icon: 198 100% 33%;--v-cb-tab-prism-default-icon-success: 80 100% 30%;--v-cb-tab-prism-default-icon-failed: 348 68% 58%;--v-cb-tab-prism-funky-bkg: 0 0% 80%;--v-cb-tab-prism-funky-text: 0 0% 100%;--v-cb-tab-prism-funky-dark: 0 0% 0%;--v-cb-tab-prism-funky-icon: 328 100% 54%;--v-cb-tab-prism-funky-icon-success: 80 61% 50%;--v-cb-tab-prism-funky-icon-failed: 0 100% 50%;--v-cb-tab-prism-okaidia-bkg: 70 8% 15%;--v-cb-tab-prism-okaidia-text: 0 0% 100%;--v-cb-tab-prism-okaidia-icon: 190 81% 67%;--v-cb-tab-prism-okaidia-icon-success: 80 76% 53%;--v-cb-tab-prism-okaidia-icon-failed: 338 95% 56%;--v-cb-tab-prism-solarizedlight-bkg: 44 87% 94%;--v-cb-tab-prism-solarizedlight-text: 196 13% 45%;--v-cb-tab-prism-solarizedlight-icon: 175 59% 40%;--v-cb-tab-prism-solarizedlight-icon-success: 68 100% 30%;--v-cb-tab-prism-solarizedlight-icon-failed: 18 80% 44%;--v-cb-tab-prism-tomorrow-bkg: 0 0% 18%;--v-cb-tab-prism-tomorrow-text: 0 0% 80%;--v-cb-tab-prism-tomorrow-icon: 299 34% 70%;--v-cb-tab-prism-tomorrow-icon-success: 143 39% 64%;--v-cb-tab-prism-tomorrow-icon-failed: 358 65% 68%;--v-cb-tab-prism-twilight-bkg: 0 0% 8%;--v-cb-tab-prism-twilight-text: 0 0% 80%;--v-cb-tab-prism-twilight-border: 0 0% 33%;--v-cb-tab-prism-twilight-icon: 53 89% 79%;--v-cb-tab-prism-twilight-icon-success: 76 21% 52%;--v-cb-tab-prism-twilight-icon-failed: 14 58% 55%;--v-cb-tab-prism-themes-night-owl: 207 95% 8%;--v-cb-tab-prism-themes-night-owl-text: 217 34% 88%;--v-cb-tab-prism-themes-night-owl-icon: 169 56% 68%;--v-cb-tab-prism-themes-night-owl-icon-success: 84 62% 63%;--v-cb-tab-prism-themes-night-owl-icon-failed: 350 100% 67%;--v-cb-tab-highlightjs-a11y-dark-bkg: 0 0% 17%;--v-cb-tab-highlightjs-a11y-dark-text: 60 30% 96%;--v-cb-tab-highlightjs-a11y-dark-icon: 180 100% 44%;--v-cb-tab-highlightjs-a11y-dark-icon-success: 80 75% 55%;--v-cb-tab-highlightjs-a11y-dark-icon-failed: 17 100% 74%;--v-cb-tab-highlightjs-a11y-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-a11y-light-text: 0 0% 33%;--v-cb-tab-highlightjs-a11y-light-icon: 280 60% 39%;--v-cb-tab-highlightjs-a11y-light-icon-success: 120 100% 25%;--v-cb-tab-highlightjs-a11y-light-icon-failed: 2 80% 47%;--v-cb-tab-highlightjs-agate-bkg: 0 0% 20%;--v-cb-tab-highlightjs-agate-text: 0 0% 100%;--v-cb-tab-highlightjs-agate-icon: 197 93% 83%;--v-cb-tab-highlightjs-agate-icon-success: 136 53% 66%;--v-cb-tab-highlightjs-agate-icon-failed: 0 56% 61%;--v-cb-tab-highlightjs-an-old-hope-bkg: 228 8% 12%;--v-cb-tab-highlightjs-an-old-hope-text: 219 13% 78%;--v-cb-tab-highlightjs-an-old-hope-icon: 195 63% 58%;--v-cb-tab-highlightjs-an-old-hope-icon-success: 116 75% 62%;--v-cb-tab-highlightjs-an-old-hope-icon-failed: 352 81% 58%;--v-cb-tab-highlightjs-androidstudio-bkg: 210 7% 17%;--v-cb-tab-highlightjs-androidstudio-text: 211 20% 72%;--v-cb-tab-highlightjs-androidstudio-icon: 206 38% 57%;--v-cb-tab-highlightjs-androidstudio-icon-success: 108 28% 46%;--v-cb-tab-highlightjs-androidstudio-icon-failed: 27 61% 50%;--v-cb-tab-highlightjs-arduino-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-arduino-light-text: 198 11% 30%;--v-cb-tab-highlightjs-arduino-light-icon: 182 100% 31%;--v-cb-tab-highlightjs-arduino-light-icon-success: 182 100% 19%;--v-cb-tab-highlightjs-arduino-light-icon-failed: 24 100% 41%;--v-cb-tab-highlightjs-arta-bkg: 0 0% 13%;--v-cb-tab-highlightjs-arta-text: 0 0% 67%;--v-cb-tab-highlightjs-arta-icon: 202 85% 56%;--v-cb-tab-highlightjs-arta-icon-success: 150 100% 40%;--v-cb-tab-highlightjs-arta-icon-failed: 330 83% 40%;--v-cb-tab-highlightjs-ascetic-bkg: 0 0% 100%;--v-cb-tab-highlightjs-ascetic-text: 0 0% 0%;--v-cb-tab-highlightjs-ascetic-icon: 0 0% 53%;--v-cb-tab-highlightjs-ascetic-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-ascetic-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg: 220 13% 18%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-text: 219 14% 71%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon: 29 54% 61%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-atom-one-dark-bkg: 220 13% 18%;--v-cb-tab-highlightjs-atom-one-dark-text: 219 14% 71%;--v-cb-tab-highlightjs-atom-one-dark-icon: 29 54% 61%;--v-cb-tab-highlightjs-atom-one-dark-icon-success: 95 38% 62%;--v-cb-tab-highlightjs-atom-one-dark-icon-failed: 355 65% 65%;--v-cb-tab-highlightjs-atom-one-light-bkg: 0 0% 98%;--v-cb-tab-highlightjs-atom-one-light-text: 228 8% 24%;--v-cb-tab-highlightjs-atom-one-light-icon: 41 99% 30%;--v-cb-tab-highlightjs-atom-one-light-icon-success: 119 34% 47%;--v-cb-tab-highlightjs-atom-one-light-icon-failed: 5 74% 59%;--v-cb-tab-highlightjs-base16-onedark-bkg: 220 13% 18%;--v-cb-tab-highlightjs-base16-onedark-text: 219 14% 71%;--v-cb-tab-highlightjs-base16-onedark-icon: 207 82% 66%;--v-cb-tab-highlightjs-base16-onedark-icon-success: 95 38% 62%;--v-cb-tab-highlightjs-base16-onedark-icon-failed: 5 48% 51%;--v-cb-tab-highlightjs-brown-paper-bkg: 35 22% 64%;--v-cb-tab-highlightjs-brown-paper-bkg-img: url(brown-papersq.png);--v-cb-tab-highlightjs-brown-paper-text: 233 32% 31%;--v-cb-tab-highlightjs-brown-paper-icon: 207 100% 30%;--v-cb-tab-highlightjs-brown-paper-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-brown-paper-icon-failed: 359 60% 31%;--v-cb-tab-highlightjs-codepen-embed-bkg: 0 0% 13%;--v-cb-tab-highlightjs-codepen-embed-text: 0 0% 100%;--v-cb-tab-highlightjs-codepen-embed-icon: 300 10% 57%;--v-cb-tab-highlightjs-codepen-embed-icon-success: 76 20% 52%;--v-cb-tab-highlightjs-codepen-embed-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-color-brewer-bkg: 0 0% 100%;--v-cb-tab-highlightjs-color-brewer-text: 0 0% 0%;--v-cb-tab-highlightjs-color-brewer-icon: 205 59% 47%;--v-cb-tab-highlightjs-color-brewer-icon-success: 138 54% 42%;--v-cb-tab-highlightjs-color-brewer-icon-failed: 20 89% 48%;--v-cb-tab-highlightjs-dark-bkg: 0 0% 19%;--v-cb-tab-highlightjs-dark-text: 0 0% 87%;--v-cb-tab-highlightjs-dark-icon: 0 56% 70%;--v-cb-tab-highlightjs-dark-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-dark-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-default-bkg: 0 0% 95%;--v-cb-tab-highlightjs-default-text: 0 0% 27%;--v-cb-tab-highlightjs-default-icon: 0 0% 27%;--v-cb-tab-highlightjs-default-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-default-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-devibeans-bkg: 0 0% 0%;--v-cb-tab-highlightjs-devibeans-text: 23 4% 62%;--v-cb-tab-highlightjs-devibeans-icon: 207 89% 68%;--v-cb-tab-highlightjs-devibeans-icon-success: 95 49% 36%;--v-cb-tab-highlightjs-devibeans-icon-failed: 1 83% 63%;--v-cb-tab-highlightjs-docco-bkg: 240 100% 99%;--v-cb-tab-highlightjs-docco-text: 0 0% 0%;--v-cb-tab-highlightjs-docco-icon: 195 100% 35%;--v-cb-tab-highlightjs-docco-icon-success: 150 43% 44%;--v-cb-tab-highlightjs-docco-icon-failed: 17 64% 36%;--v-cb-tab-highlightjs-far-bkg: 240 100% 25%;--v-cb-tab-highlightjs-far-text: 180 100% 50%;--v-cb-tab-highlightjs-far-icon: 60 100% 50%;--v-cb-tab-highlightjs-far-icon-success: 120 100% 50%;--v-cb-tab-highlightjs-far-icon-failed: 0 100% 50%;--v-cb-tab-highlightjs-felipec-bkg: 240 6% 13%;--v-cb-tab-highlightjs-felipec-text: 240 6% 87%;--v-cb-tab-highlightjs-felipec-icon: 210 75% 75%;--v-cb-tab-highlightjs-felipec-icon-success: 120 75% 75%;--v-cb-tab-highlightjs-felipec-icon-failed: 0 75% 75%;--v-cb-tab-highlightjs-foundation-bkg: 0 0% 93%;--v-cb-tab-highlightjs-foundation-text: 0 0% 0%;--v-cb-tab-highlightjs-foundation-icon: 180 100% 30%;--v-cb-tab-highlightjs-foundation-icon-success: 345 86% 47%;--v-cb-tab-highlightjs-foundation-icon-failed: 120 100% 23%;--v-cb-tab-highlightjs-github-dark-dimmed-bkg: 215 15% 16%;--v-cb-tab-highlightjs-github-dark-dimmed-text: 210 19% 73%;--v-cb-tab-highlightjs-github-dark-dimmed-icon: 207 100% 79%;--v-cb-tab-highlightjs-github-dark-dimmed-icon-success: 119 52% 70%;--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed: 359 66% 28%;--v-cb-tab-highlightjs-github-dark-bkg: 216 28% 7%;--v-cb-tab-highlightjs-github-dark-text: 210 17% 82%;--v-cb-tab-highlightjs-github-dark-icon: 208 100% 74%;--v-cb-tab-highlightjs-github-dark-icon-success: 125 69% 70%;--v-cb-tab-highlightjs-github-dark-icon-failed: 4 100% 72%;--v-cb-tab-highlightjs-github-bkg: 0 0% 100%;--v-cb-tab-highlightjs-github-text: 210 12% 16%;--v-cb-tab-highlightjs-github-icon: 212 100% 39%;--v-cb-tab-highlightjs-github-icon-success: 134 60% 33%;--v-cb-tab-highlightjs-github-icon-failed: 354 66% 54%;--v-cb-tab-highlightjs-gml-bkg: 0 0% 13%;--v-cb-tab-highlightjs-gml-text: 0 0% 75%;--v-cb-tab-highlightjs-gml-icon: 60 100% 50%;--v-cb-tab-highlightjs-gml-icon-success: 121 73% 62%;--v-cb-tab-highlightjs-gml-icon-failed: 0 100% 75%;--v-cb-tab-highlightjs-googlecode-bkg: 0 0% 100%;--v-cb-tab-highlightjs-googlecode-text: 0 0% 0%;--v-cb-tab-highlightjs-googlecode-icon: 180 100% 20%;--v-cb-tab-highlightjs-googlecode-icon-success: 120 100% 27%;--v-cb-tab-highlightjs-googlecode-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-gradient-dark-bkg: 279 58% 34%;--v-cb-tab-highlightjs-gradient-dark-bkg-gradient: linear-gradient(160deg, #652487 0, #443ac3 35%, #0174b7 68%, #04988e 100%);--v-cb-tab-highlightjs-gradient-dark-text: 266 15% 91%;--v-cb-tab-highlightjs-gradient-dark-icon: 199 100% 61%;--v-cb-tab-highlightjs-gradient-dark-icon-success: 75 100% 81%;--v-cb-tab-highlightjs-gradient-dark-icon-failed: 29 100% 63%;--v-cb-tab-highlightjs-gradient-light-bkg: 293 100% 90%;--v-cb-tab-highlightjs-gradient-light-bkg-gradient: linear-gradient(295deg, #f9ccff 0, #e6bbf9 11%, #9ec6f9 32%, #55e6ee 60%, #91f5d1 74%, #f9ffbf 98%);--v-cb-tab-highlightjs-gradient-light-text: 256 94% 26%;--v-cb-tab-highlightjs-gradient-light-icon: 199 64% 41%;--v-cb-tab-highlightjs-gradient-light-icon-success: 149 93% 38%;--v-cb-tab-highlightjs-gradient-light-icon-failed: 19 98% 25%;--v-cb-tab-highlightjs-grayscale-bkg: 0 0% 100%;--v-cb-tab-highlightjs-grayscale-text: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon-success: 0 0% 20%;--v-cb-tab-highlightjs-grayscale-icon-failed: 0 0% 20%;--v-cb-tab-highlightjs-hybrid-bkg: 210 6% 12%;--v-cb-tab-highlightjs-hybrid-text: 140 3% 78%;--v-cb-tab-highlightjs-hybrid-icon: 208 32% 63%;--v-cb-tab-highlightjs-hybrid-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-hybrid-icon-failed: 0 50% 60%;--v-cb-tab-highlightjs-idea-bkg: 0 0% 100%;--v-cb-tab-highlightjs-idea-text: 0 0% 0%;--v-cb-tab-highlightjs-idea-icon: 240 100% 25%;--v-cb-tab-highlightjs-idea-icon-success: 120 60% 83%;--v-cb-tab-highlightjs-idea-icon-failed: 10 100% 87%;--v-cb-tab-highlightjs-intellij-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-intellij-light-text: 223 100% 35%;--v-cb-tab-highlightjs-intellij-light-icon: 294 80% 32%;--v-cb-tab-highlightjs-intellij-light-icon-success: 129 91% 26%;--v-cb-tab-highlightjs-intellij-light-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-ir-black-bkg: 0 0% 0%;--v-cb-tab-highlightjs-ir-black-text: 0 0% 97%;--v-cb-tab-highlightjs-ir-black-icon: 209 98% 79%;--v-cb-tab-highlightjs-ir-black-icon-success: 93 100% 69%;--v-cb-tab-highlightjs-ir-black-icon-failed: 301 100% 73%;--v-cb-tab-highlightjs-isbl-editor-dark-bkg: 0 0% 25%;--v-cb-tab-highlightjs-isbl-editor-dark-text: 0 0% 94%;--v-cb-tab-highlightjs-isbl-editor-dark-icon: 0 0% 94%;--v-cb-tab-highlightjs-isbl-editor-dark-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed: 13 76% 50%;--v-cb-tab-highlightjs-isbl-editor-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-isbl-editor-light-text: 0 0% 0%;--v-cb-tab-highlightjs-isbl-editor-light-icon: 240 100% 25%;--v-cb-tab-highlightjs-isbl-editor-light-icon-success: 90 100% 23%;--v-cb-tab-highlightjs-isbl-editor-light-icon-failed: 11 100% 49%;--v-cb-tab-highlightjs-kimbie-dark-bkg: 35 39% 10%;--v-cb-tab-highlightjs-kimbie-dark-text: 32 47% 68%;--v-cb-tab-highlightjs-kimbie-dark-icon: 356 19% 50%;--v-cb-tab-highlightjs-kimbie-dark-icon-success: 74 35% 45%;--v-cb-tab-highlightjs-kimbie-dark-icon-failed: 349 70% 54%;--v-cb-tab-highlightjs-kimbie-light-bkg: 35 83% 91%;--v-cb-tab-highlightjs-kimbie-light-text: 30 37% 38%;--v-cb-tab-highlightjs-kimbie-light-icon: 32 92% 58%;--v-cb-tab-highlightjs-kimbie-light-icon-success: 74 35% 45%;--v-cb-tab-highlightjs-kimbie-light-icon-failed: 349 70% 54%;--v-cb-tab-highlightjs-lightfair-bkg: 0 0% 100%;--v-cb-tab-highlightjs-lightfair-text: 0 0% 27%;--v-cb-tab-highlightjs-lightfair-icon: 217 89% 61%;--v-cb-tab-highlightjs-lightfair-icon-success: 180 69% 46%;--v-cb-tab-highlightjs-lightfair-icon-failed: 0 41% 56%;--v-cb-tab-highlightjs-lioshi-bkg: 0 0% 19%;--v-cb-tab-highlightjs-lioshi-text: 140 3% 78%;--v-cb-tab-highlightjs-lioshi-icon: 304 24% 66%;--v-cb-tab-highlightjs-lioshi-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-lioshi-icon-failed: 0 50% 60%;--v-cb-tab-highlightjs-magula-bkg: 0 0% 96%;--v-cb-tab-highlightjs-magula-text: 0 0% 0%;--v-cb-tab-highlightjs-magula-icon: 240 100% 25%;--v-cb-tab-highlightjs-magula-icon-success: 120 100% 17%;--v-cb-tab-highlightjs-magula-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-mono-blue-bkg: 213 27% 94%;--v-cb-tab-highlightjs-mono-blue-text: 214 100% 11%;--v-cb-tab-highlightjs-mono-blue-icon: 215 100% 34%;--v-cb-tab-highlightjs-mono-blue-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-mono-blue-icon-failed: var(--v-cb-failed);--v-cb-tab-highlightjs-monokai-sublime-bkg: 72 7% 13%;--v-cb-tab-highlightjs-monokai-sublime-text: 60 30% 96%;--v-cb-tab-highlightjs-monokai-sublime-icon: 54 70% 68%;--v-cb-tab-highlightjs-monokai-sublime-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-monokai-sublime-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-monokai-bkg: 70 8% 15%;--v-cb-tab-highlightjs-monokai-text: 0 0% 87%;--v-cb-tab-highlightjs-monokai-icon: 0 0% 87%;--v-cb-tab-highlightjs-monokai-icon-success: 80 76% 53%;--v-cb-tab-highlightjs-monokai-icon-failed: 338 95% 56%;--v-cb-tab-highlightjs-night-owl-bkg: 207 95% 8%;--v-cb-tab-highlightjs-night-owl-text: 217 34% 88%;--v-cb-tab-highlightjs-night-owl-icon: 276 68% 75%;--v-cb-tab-highlightjs-night-owl-icon-success: 84 62% 63%;--v-cb-tab-highlightjs-night-owl-icon-failed: 350 100% 67%;--v-cb-tab-highlightjs-nnfx-dark-bkg: 0 0% 20%;--v-cb-tab-highlightjs-nnfx-dark-text: 0 0% 100%;--v-cb-tab-highlightjs-nnfx-dark-icon: 270 50% 60%;--v-cb-tab-highlightjs-nnfx-dark-icon-success: 90 50% 60%;--v-cb-tab-highlightjs-nnfx-dark-icon-failed: 18 100% 43%;--v-cb-tab-highlightjs-nnfx-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-nnfx-light-text: 0 0% 0%;--v-cb-tab-highlightjs-nnfx-light-icon: 240 100% 50%;--v-cb-tab-highlightjs-nnfx-light-icon-success: 120 100% 23%;--v-cb-tab-highlightjs-nnfx-light-icon-failed: 120 100% 48%;--v-cb-tab-highlightjs-nord-bkg: 220 16% 22%;--v-cb-tab-highlightjs-nord-text: 210 34% 63%;--v-cb-tab-highlightjs-nord-icon: 179 25% 65%;--v-cb-tab-highlightjs-nord-icon-success: 92 28% 65%;--v-cb-tab-highlightjs-nord-icon-failed: 14 51% 63%;--v-cb-tab-highlightjs-obsidian-bkg: 210 7% 17%;--v-cb-tab-highlightjs-obsidian-text: 210 7% 89%;--v-cb-tab-highlightjs-obsidian-icon: 210 32% 55%;--v-cb-tab-highlightjs-obsidian-icon-success: 162 26% 64%;--v-cb-tab-highlightjs-obsidian-icon-failed: 30 100% 46%;--v-cb-tab-highlightjs-panda-syntax-dark-bkg: 200 3% 17%;--v-cb-tab-highlightjs-panda-syntax-dark-text: 0 0% 90%;--v-cb-tab-highlightjs-panda-syntax-dark-icon: 207 94% 62%;--v-cb-tab-highlightjs-panda-syntax-dark-icon-success: 171 95% 54%;--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed: 342 100% 65%;--v-cb-tab-highlightjs-panda-syntax-light-bkg: 0 0% 90%;--v-cb-tab-highlightjs-panda-syntax-light-text: 200 3% 17%;--v-cb-tab-highlightjs-panda-syntax-light-icon: 207 57% 50%;--v-cb-tab-highlightjs-panda-syntax-light-icon-success: 171 81% 27%;--v-cb-tab-highlightjs-panda-syntax-light-icon-failed: 324 70% 50%;--v-cb-tab-highlightjs-paraiso-dark-bkg: 304 22% 15%;--v-cb-tab-highlightjs-paraiso-dark-text: 23 4% 62%;--v-cb-tab-highlightjs-paraiso-dark-icon: 45 99% 55%;--v-cb-tab-highlightjs-paraiso-dark-icon-success: 153 43% 50%;--v-cb-tab-highlightjs-paraiso-dark-icon-failed: 5 83% 64%;--v-cb-tab-highlightjs-paraiso-light-bkg: 69 24% 89%;--v-cb-tab-highlightjs-paraiso-light-text: 314 9% 28%;--v-cb-tab-highlightjs-paraiso-light-icon: 45 99% 55%;--v-cb-tab-highlightjs-paraiso-light-icon-success: 153 43% 50%;--v-cb-tab-highlightjs-paraiso-light-icon-failed: 5 83% 64%;--v-cb-tab-highlightjs-pojoaque-bkg: 72 11% 9%;--v-cb-tab-highlightjs-pojoaque-bkg-img: url(pojoaque.jpg) left top;--v-cb-tab-highlightjs-pojoaque-text: 50 52% 71%;--v-cb-tab-highlightjs-pojoaque-icon: 36 100% 62%;--v-cb-tab-highlightjs-pojoaque-icon-success: 149 32% 41%;--v-cb-tab-highlightjs-pojoaque-icon-failed: 1 71% 52%;--v-cb-tab-highlightjs-purebasic-bkg: 60 100% 94%;--v-cb-tab-highlightjs-purebasic-text: 0 0% 0%;--v-cb-tab-highlightjs-purebasic-icon: 210 100% 50%;--v-cb-tab-highlightjs-purebasic-icon-success: 180 100% 33%;--v-cb-tab-highlightjs-purebasic-icon-failed: 327 32% 43%;--v-cb-tab-highlightjs-qtcreator-dark-bkg: 0 0% 0%;--v-cb-tab-highlightjs-qtcreator-dark-text: 0 0% 67%;--v-cb-tab-highlightjs-qtcreator-dark-icon: 240 100% 77%;--v-cb-tab-highlightjs-qtcreator-dark-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-qtcreator-dark-icon-failed: 0 100% 67%;--v-cb-tab-highlightjs-qtcreator-light-bkg: 0 0% 100%;--v-cb-tab-highlightjs-qtcreator-light-text: 0 0% 0%;--v-cb-tab-highlightjs-qtcreator-light-icon: 240 100% 25%;--v-cb-tab-highlightjs-qtcreator-light-icon-success: 60 100% 25%;--v-cb-tab-highlightjs-qtcreator-light-icon-failed: 0 100% 25%;--v-cb-tab-highlightjs-rainbow-bkg: 180 1% 28%;--v-cb-tab-highlightjs-rainbow-text: 210 21% 85%;--v-cb-tab-highlightjs-rainbow-icon: 208 32% 63%;--v-cb-tab-highlightjs-rainbow-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-rainbow-icon-failed: 1 71% 52%;--v-cb-tab-highlightjs-routeros-bkg: 0 0% 94%;--v-cb-tab-highlightjs-routeros-text: 0 0% 27%;--v-cb-tab-highlightjs-routeros-icon: 200 66% 36%;--v-cb-tab-highlightjs-routeros-icon-success: 115 100% 30%;--v-cb-tab-highlightjs-routeros-icon-failed: 0 100% 27%;--v-cb-tab-highlightjs-school-book-bkg: 59 79% 83%;--v-cb-tab-highlightjs-school-book-text: 84 62% 22%;--v-cb-tab-highlightjs-school-book-icon: 207 100% 30%;--v-cb-tab-highlightjs-school-book-icon-success: var(--v-cb-success);--v-cb-tab-highlightjs-school-book-icon-failed: 355 97% 46%;--v-cb-tab-highlightjs-shades-of-purple-bkg: 243 34% 25%;--v-cb-tab-highlightjs-shades-of-purple-text: 248 100% 94%;--v-cb-tab-highlightjs-shades-of-purple-icon: 38 100% 49%;--v-cb-tab-highlightjs-shades-of-purple-icon-success: 102 83% 45%;--v-cb-tab-highlightjs-shades-of-purple-icon-failed: 344 94% 69%;--v-cb-tab-highlightjs-srcery-bkg: 40 6% 10%;--v-cb-tab-highlightjs-srcery-text: 39 90% 88%;--v-cb-tab-highlightjs-srcery-icon: 41 96% 57%;--v-cb-tab-highlightjs-srcery-icon-success: 76 55% 48%;--v-cb-tab-highlightjs-srcery-icon-failed: 2 86% 55%;--v-cb-tab-highlightjs-stackoverflow-dark-bkg: 0 2% 11%;--v-cb-tab-highlightjs-stackoverflow-dark-text: 0 0% 100%;--v-cb-tab-highlightjs-stackoverflow-dark-icon: 207 42% 67%;--v-cb-tab-highlightjs-stackoverflow-dark-icon-success: 66 39% 57%;--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed: 357 62% 66%;--v-cb-tab-highlightjs-stackoverflow-light-bkg: 0 0% 96%;--v-cb-tab-highlightjs-stackoverflow-light-text: 210 8% 20%;--v-cb-tab-highlightjs-stackoverflow-light-icon: 205 99% 29%;--v-cb-tab-highlightjs-stackoverflow-light-icon-success: 140 41% 31%;--v-cb-tab-highlightjs-stackoverflow-light-icon-failed: 360 62% 46%;--v-cb-tab-highlightjs-sunburst-bkg: 0 0% 0%;--v-cb-tab-highlightjs-sunburst-text: 0 0% 97%;--v-cb-tab-highlightjs-sunburst-icon: 214 100% 77%;--v-cb-tab-highlightjs-sunburst-icon-success: 101 45% 47%;--v-cb-tab-highlightjs-sunburst-icon-failed: 18 68% 64%;--v-cb-tab-highlightjs-tokyo-night-dark-bkg: 235 19% 13%;--v-cb-tab-highlightjs-tokyo-night-dark-text: 227 35% 71%;--v-cb-tab-highlightjs-tokyo-night-dark-icon: 261 85% 79%;--v-cb-tab-highlightjs-tokyo-night-dark-icon-success: 89 51% 61%;--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed: 349 89% 72%;--v-cb-tab-highlightjs-tokyo-night-light-bkg: 230 8% 85%;--v-cb-tab-highlightjs-tokyo-night-light-text: 230 12% 38%;--v-cb-tab-highlightjs-tokyo-night-light-icon: 218 45% 37%;--v-cb-tab-highlightjs-tokyo-night-light-icon-success: 89 32% 28%;--v-cb-tab-highlightjs-tokyo-night-light-icon-failed: 348 35% 41%;--v-cb-tab-highlightjs-tomorrow-night-blue-bkg: 213 100% 16%;--v-cb-tab-highlightjs-tomorrow-night-blue-text: 0 0% 100%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon: 282 100% 87%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success: 87 72% 80%;--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed: 356 100% 81%;--v-cb-tab-highlightjs-tomorrow-night-bright-bkg: 0 0% 0%;--v-cb-tab-highlightjs-tomorrow-night-bright-text: 0 0% 92%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon: 281 45% 72%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success: 68 55% 54%;--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed: 358 62% 57%;--v-cb-tab-highlightjs-vs-bkg: 0 0% 100%;--v-cb-tab-highlightjs-vs-text: 0 0% 0%;--v-cb-tab-highlightjs-vs-icon: 240 100% 50%;--v-cb-tab-highlightjs-vs-icon-success: 120 100% 25%;--v-cb-tab-highlightjs-vs-icon-failed: 0 100% 50%;--v-cb-tab-highlightjs-vs2015-bkg: 0 0% 12%;--v-cb-tab-highlightjs-vs2015-text: 0 0% 86%;--v-cb-tab-highlightjs-vs2015-icon: 207 61% 59%;--v-cb-tab-highlightjs-vs2015-icon-success: 112 38% 47%;--v-cb-tab-highlightjs-vs2015-icon-failed: 0 0% 0%;--v-cb-tab-highlightjs-xcode-bkg: 0 0% 100%;--v-cb-tab-highlightjs-xcode-text: 0 0% 0%;--v-cb-tab-highlightjs-xcode-icon: 240 100% 53%;--v-cb-tab-highlightjs-xcode-icon-success: 120 100% 23%;--v-cb-tab-highlightjs-xcode-icon-failed: 1 80% 43%;--v-cb-tab-highlightjs-xt256-bkg: 0 0% 0%;--v-cb-tab-highlightjs-xt256-text: 0 0% 92%;--v-cb-tab-highlightjs-xt256-icon: 240 100% 50%;--v-cb-tab-highlightjs-xt256-icon-success: 120 100% 50%;--v-cb-tab-highlightjs-xt256-icon-failed: 0 100% 50%}.v-code-block{display:block;max-width:100%}.v-code-block--header{align-items:end;display:flex;justify-content:space-between;overflow:visible;position:relative;width:100%}.v-code-block--label{overflow:auto}.v-code-block--tabs{align-items:end;display:flex;justify-content:flex-end}.v-code-block--tab{align-items:center;border-radius:5px 5px 0 0;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;padding:5px 15px;text-align:center;transition:background-color .35s ease;white-space:nowrap;width:fit-content}.v-code-block--tab svg{height:.85rem;width:.85rem}.v-code-block--code{position:relative;z-index:1}.v-code-block--code pre,.v-code-block--code pre[class*=language-]{margin-top:0}.v-code-block--code pre[class*=language-]:before,.v-code-block--code pre[class*=language-]:after{bottom:.95em}.v-code-block--code pre code{width:100%}.v-code-block--code-browser:before{background-image:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');background-position:.5em .5em;background-repeat:no-repeat;content:"";display:block;padding-right:10em;padding-top:3rem;width:100%}.v-code-block--code:hover .v-code-block--code-copy-button{opacity:1}.v-code-block--code-copy-button{align-items:center;color:#ccc;cursor:pointer;display:flex;fill:#ccc;height:1.5em;justify-content:center;opacity:0;position:absolute;right:.9rem;top:.7rem;transition:opacity .2s ease-in-out;width:auto;z-index:2}.v-code-block--code-copy-button:hover{opacity:1}.v-code-block--code-copy-button-persist{opacity:.5}.v-code-block--code-copy-button svg{height:1rem;width:1rem}.v-code-block--tab-prism-funky{background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.v-code-block--tab-prism-neon-bunny,.v-code-block--tab-highlightjs-neon-bunny{background-color:hsl(var(--v-cb-tab-neon-bunny-bkg)/100%)!important;color:hsl(var(--v-cb-tab-neon-bunny-text))!important}.v-code-block--tab-prism-neon-bunny:hover,.v-code-block--tab-highlightjs-neon-bunny:hover{background-color:hsl(var(--v-cb-tab-neon-bunny-bkg)/50%)!important}.v-code-block--tab-prism-neon-bunny-icon,.v-code-block--tab-highlightjs-neon-bunny-icon{color:hsl(var(--v-cb-tab-neon-bunny-icon))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon))!important}.v-code-block--tab-prism-neon-bunny-icon-status-success,.v-code-block--tab-highlightjs-neon-bunny-icon-status-success{color:hsl(var(--v-cb-tab-neon-bunny-icon-success))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon-success))!important}.v-code-block--tab-prism-neon-bunny-icon-status-failed,.v-code-block--tab-highlightjs-neon-bunny-icon-status-failed{color:hsl(var(--v-cb-tab-neon-bunny-icon-failed))!important;fill:hsl(var(--v-cb-tab-neon-bunny-icon-failed))!important}.v-code-block--tab-prism-neon-bunny>div,.v-code-block--tab-highlightjs-neon-bunny>div{color:hsl(var(--v-cb-tab-neon-bunny-text))}.v-code-block--tab-prism-neon-bunny-carrot,.v-code-block--tab-highlightjs-neon-bunny-carrot{background-color:hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/100%)!important;color:hsl(var(--v-cb-tab-neon-bunny-carrot-text))!important}.v-code-block--tab-prism-neon-bunny-carrot:hover,.v-code-block--tab-highlightjs-neon-bunny-carrot:hover{background-color:hsl(var(--v-cb-tab-neon-bunny-carrot-bkg)/50%)!important}.v-code-block--tab-prism-neon-bunny-carrot-icon,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon))!important}.v-code-block--tab-prism-neon-bunny-carrot-icon-status-success,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon-status-success{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-success))!important}.v-code-block--tab-prism-neon-bunny-carrot-icon-status-failed,.v-code-block--tab-highlightjs-neon-bunny-carrot-icon-status-failed{color:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed))!important;fill:hsl(var(--v-cb-tab-neon-bunny-carrot-icon-failed))!important}.v-code-block--tab-prism-neon-bunny-carrot>div,.v-code-block--tab-highlightjs-neon-bunny-carrot>div{color:hsl(var(--v-cb-tab-neon-bunny-carrot-text))}.v-code-block--tab-prism-coy{background-color:hsl(var(--v-cb-tab-prism-coy-bkg)/10%)!important;border-left:5px solid hsl(var(--v-cb-tab-prism-coy-bkg));border-radius:0}.v-code-block--tab-prism-coy:hover{background-color:hsl(var(--v-cb-tab-prism-coy-bkg)/20%)!important}.v-code-block--tab-prism-coy-icon{color:hsl(var(--v-cb-tab-prism-coy-icon))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon))!important}.v-code-block--tab-prism-coy-icon-status-success{color:hsl(var(--v-cb-tab-prism-coy-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon-success))!important}.v-code-block--tab-prism-coy-icon-status-failed{color:hsl(var(--v-cb-tab-prism-coy-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-coy-icon-failed))!important}.v-code-block--tab-prism-coy>div{color:hsl(var(--v-cb-tab-prism-coy-text))}.v-code-block--tab-prism-dark{background-color:hsl(var(--v-cb-tab-prism-dark-bkg)/100%)!important;border-color:hsl(var(--v-cb-tab-prism-dark-border));border-style:solid;border-width:.3em .3em 0}.v-code-block--tab-prism-dark:hover{background-color:hsl(var(--v-cb-tab-prism-dark-border)/50%)!important}.v-code-block--tab-prism-dark-icon{color:hsl(var(--v-cb-tab-prism-dark-icon))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon))!important}.v-code-block--tab-prism-dark-icon-status-success{color:hsl(var(--v-cb-tab-prism-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon-success))!important}.v-code-block--tab-prism-dark-icon-status-failed{color:hsl(var(--v-cb-tab-prism-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-dark-icon-failed))!important}.v-code-block--tab-prism-dark>div{color:hsl(var(--v-cb-tab-prism-dark-text))}.v-code-block--tab-prism-default{background-color:hsl(var(--v-cb-tab-prism-default-bkg)/100%)!important}.v-code-block--tab-prism-default:hover{background-color:hsl(var(--v-cb-tab-prism-default-bkg)/50%)!important}.v-code-block--tab-prism-default-icon{color:hsl(var(--v-cb-tab-prism-default-icon))!important;fill:hsl(var(--v-cb-tab-prism-default-icon))!important}.v-code-block--tab-prism-default-icon-status-success{color:hsl(var(--v-cb-tab-prism-default-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-default-icon-success))!important}.v-code-block--tab-prism-default-icon-status-failed{color:hsl(var(--v-cb-tab-prism-default-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-default-icon-failed))!important}.v-code-block--tab-prism-default>div{color:hsl(var(--v-cb-tab-prism-default-text))}.v-code-block--tab-prism-funky{background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.v-code-block--tab-prism-funky:hover{background-color:hsl(var(--v-cb-tab-prism-funky-bkg))!important}.v-code-block--tab-prism-funky-icon{color:hsl(var(--v-cb-tab-prism-funky-icon))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon))!important}.v-code-block--tab-prism-funky-icon-status-success{color:hsl(var(--v-cb-tab-prism-funky-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon-success))!important}.v-code-block--tab-prism-funky-icon-status-failed{color:hsl(var(--v-cb-tab-prism-funky-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-funky-icon-failed))!important}.v-code-block--tab-prism-funky>div{background-color:hsl(var(--v-cb-tab-prism-funky-dark))!important;color:hsl(var(--v-cb-tab-prism-funky-text))}.v-code-block--tab-prism-okaidia{background-color:hsl(var(--v-cb-tab-prism-okaidia-bkg)/100%)!important}.v-code-block--tab-prism-okaidia:hover{background-color:hsl(var(--v-cb-tab-prism-okaidia-bkg)/50%)!important}.v-code-block--tab-prism-okaidia-icon{color:hsl(var(--v-cb-tab-prism-okaidia-icon))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon))!important}.v-code-block--tab-prism-okaidia-icon-status-success{color:hsl(var(--v-cb-tab-prism-okaidia-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon-success))!important}.v-code-block--tab-prism-okaidia-icon-status-failed{color:hsl(var(--v-cb-tab-prism-okaidia-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-okaidia-icon-failed))!important}.v-code-block--tab-prism-okaidia>div{color:hsl(var(--v-cb-tab-prism-okaidia-text))}.v-code-block--tab-prism-solarizedlight{background-color:hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/100%)!important}.v-code-block--tab-prism-solarizedlight:hover{background-color:hsl(var(--v-cb-tab-prism-solarizedlight-bkg)/50%)!important}.v-code-block--tab-prism-solarizedlight-icon{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon))!important}.v-code-block--tab-prism-solarizedlight-icon-status-success{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon-success))!important}.v-code-block--tab-prism-solarizedlight-icon-status-failed{color:hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-solarizedlight-icon-failed))!important}.v-code-block--tab-prism-solarizedlight>div{color:hsl(var(--v-cb-tab-prism-solarizedlight-text))}.v-code-block--tab-prism-tomorrow{background-color:hsl(var(--v-cb-tab-prism-tomorrow-bkg)/100%)!important}.v-code-block--tab-prism-tomorrow:hover{background-color:hsl(var(--v-cb-tab-prism-tomorrow-bkg)/50%)!important}.v-code-block--tab-prism-tomorrow-icon{color:hsl(var(--v-cb-tab-prism-tomorrow-icon))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon))!important}.v-code-block--tab-prism-tomorrow-icon-status-success{color:hsl(var(--v-cb-tab-prism-tomorrow-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon-success))!important}.v-code-block--tab-prism-tomorrow-icon-status-failed{color:hsl(var(--v-cb-tab-prism-tomorrow-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-tomorrow-icon-failed))!important}.v-code-block--tab-prism-tomorrow>div{color:hsl(var(--v-cb-tab-prism-tomorrow-text))}.v-code-block--tab-prism-twilight{background-color:hsl(var(--v-cb-tab-prism-twilight-bkg)/100%)!important;border-color:hsl(var(--v-cb-tab-prism-twilight-border));border-style:solid;border-width:.3em .3em 0}.v-code-block--tab-prism-twilight:hover{background-color:hsl(var(--v-cb-tab-prism-twilight-bkg)/50%)!important}.v-code-block--tab-prism-twilight-icon{color:hsl(var(--v-cb-tab-prism-twilight-icon))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon))!important}.v-code-block--tab-prism-twilight-icon-status-success{color:hsl(var(--v-cb-tab-prism-twilight-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon-success))!important}.v-code-block--tab-prism-twilight-icon-status-failed{color:hsl(var(--v-cb-tab-prism-twilight-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-twilight-icon-failed))!important}.v-code-block--tab-prism-twilight>div{color:hsl(var(--v-cb-tab-prism-twilight-text))}.v-code-block--tab-prism-themes-night-owl{background-color:hsl(var(--v-cb-tab-prism-themes-night-owl)/100%)!important}.v-code-block--tab-prism-themes-night-owl:hover{background-color:hsl(var(--v-cb-tab-prism-themes-night-owl)/50%)!important}.v-code-block--tab-prism-themes-night-owl-icon{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon))!important}.v-code-block--tab-prism-themes-night-owl-icon-status-success{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-success))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-success))!important}.v-code-block--tab-prism-themes-night-owl-icon-status-failed{color:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-failed))!important;fill:hsl(var(--v-cb-tab-prism-themes-night-owl-icon-failed))!important}.v-code-block--tab-prism-themes-night-owl>div{color:hsl(var(--v-cb-tab-prism-themes-night-owl-text))}.v-code-block--tab-highlightjs-brown-paper{background-color:var(--v-cb-tab-highlightjs-brown-paper-bkg);background-image:var(--v-cb-tab-highlightjs-brown-paper-bkg-img)}.v-code-block--tab-highlightjs-brown-paper:hover{background-color:hsl(var(--v-cb-tab-highlightjs-brown-paper-bkg))!important}.v-code-block--tab-highlightjs-brown-paper-icon{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon))!important}.v-code-block--tab-highlightjs-brown-paper-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-success))!important}.v-code-block--tab-highlightjs-brown-paper-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-brown-paper-icon-failed))!important}.v-code-block--tab-highlightjs-brown-paper>div{color:hsl(var(--v-cb-tab-highlightjs-brown-paper-text))}.v-code-block--tab-highlightjs-gradient-dark{background:var(--v-cb-tab-highlightjs-gradient-dark-bkg-gradient);background-color:var(--v-cb-tab-highlightjs-gradient-dark-bkg)}.v-code-block--tab-highlightjs-gradient-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-bkg))!important}.v-code-block--tab-highlightjs-gradient-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon))!important}.v-code-block--tab-highlightjs-gradient-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-success))!important}.v-code-block--tab-highlightjs-gradient-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-dark-icon-failed))!important}.v-code-block--tab-highlightjs-gradient-dark>div{color:hsl(var(--v-cb-tab-highlightjs-gradient-dark-text))}.v-code-block--tab-highlightjs-gradient-light{background:var(--v-cb-tab-highlightjs-gradient-light-bkg-gradient);background-color:var(--v-cb-tab-highlightjs-gradient-light-bkg)}.v-code-block--tab-highlightjs-gradient-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gradient-light-bkg))!important}.v-code-block--tab-highlightjs-gradient-light-icon{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon))!important}.v-code-block--tab-highlightjs-gradient-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-success))!important}.v-code-block--tab-highlightjs-gradient-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gradient-light-icon-failed))!important}.v-code-block--tab-highlightjs-gradient-light>div{color:hsl(var(--v-cb-tab-highlightjs-gradient-light-text))}.v-code-block--tab-highlightjs-pojoaque{background:var(--v-cb-tab-highlightjs-pojoaque-bkg-img);background-color:var(--v-cb-tab-highlightjs-pojoaque-bkg)}.v-code-block--tab-highlightjs-pojoaque:hover{background-color:hsl(var(--v-cb-tab-highlightjs-pojoaque-bkg))!important}.v-code-block--tab-highlightjs-pojoaque-icon{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon))!important}.v-code-block--tab-highlightjs-pojoaque-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-v-icon-success))!important}.v-code-block--tab-highlightjs-pojoaque-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-pojoaque-icon-failed))!important}.v-code-block--tab-highlightjs-pojoaque>div{color:hsl(var(--v-cb-tab-highlightjs-pojoaque-text))}.v-code-block--tab-highlightjs-default{background-color:hsl(var(--v-cb-tab-highlightjs-default-bkg)/100%)!important}.v-code-block--tab-highlightjs-default:hover{background-color:hsl(var(--v-cb-tab-highlightjs-default-bkg)/50%)!important}.v-code-block--tab-highlightjs-default-icon{color:hsl(var(--v-cb-tab-highlightjs-default-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon))!important}.v-code-block--tab-highlightjs-default-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-default-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon-success))!important}.v-code-block--tab-highlightjs-default-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-default-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-default-icon-failed))!important}.v-code-block--tab-highlightjs-default>div{color:hsl(var(--v-cb-tab-highlightjs-default-text))}.v-code-block--tab-highlightjs-a11y-dark{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-a11y-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-a11y-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon))!important}.v-code-block--tab-highlightjs-a11y-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-success))!important}.v-code-block--tab-highlightjs-a11y-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-dark-icon-failed))!important}.v-code-block--tab-highlightjs-a11y-dark>div{color:hsl(var(--v-cb-tab-highlightjs-a11y-dark-text))}.v-code-block--tab-highlightjs-a11y-light{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-a11y-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-a11y-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-a11y-light-icon{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon))!important}.v-code-block--tab-highlightjs-a11y-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-success))!important}.v-code-block--tab-highlightjs-a11y-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-a11y-light-icon-failed))!important}.v-code-block--tab-highlightjs-a11y-light>div{color:hsl(var(--v-cb-tab-highlightjs-a11y-light-text))}.v-code-block--tab-highlightjs-agate{background-color:hsl(var(--v-cb-tab-highlightjs-agate-bkg)/100%)!important}.v-code-block--tab-highlightjs-agate:hover{background-color:hsl(var(--v-cb-tab-highlightjs-agate-bkg)/50%)!important}.v-code-block--tab-highlightjs-agate-icon{color:hsl(var(--v-cb-tab-highlightjs-agate-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon))!important}.v-code-block--tab-highlightjs-agate-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-agate-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon-success))!important}.v-code-block--tab-highlightjs-agate-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-agate-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-agate-icon-failed))!important}.v-code-block--tab-highlightjs-agate>div{color:hsl(var(--v-cb-tab-highlightjs-agate-text))}.v-code-block--tab-highlightjs-an-old-hope{background-color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-bkg)/100%)!important}.v-code-block--tab-highlightjs-an-old-hope:hover{background-color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-bkg)/50%)!important}.v-code-block--tab-highlightjs-an-old-hope-icon{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon))!important}.v-code-block--tab-highlightjs-an-old-hope-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-success))!important}.v-code-block--tab-highlightjs-an-old-hope-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-an-old-hope-icon-failed))!important}.v-code-block--tab-highlightjs-an-old-hope>div{color:hsl(var(--v-cb-tab-highlightjs-an-old-hope-text))}.v-code-block--tab-highlightjs-androidstudio{background-color:hsl(var(--v-cb-tab-highlightjs-androidstudio-bkg)/100%)!important}.v-code-block--tab-highlightjs-androidstudio:hover{background-color:hsl(var(--v-cb-tab-highlightjs-androidstudio-bkg)/50%)!important}.v-code-block--tab-highlightjs-androidstudio-icon{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon))!important}.v-code-block--tab-highlightjs-androidstudio-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-success))!important}.v-code-block--tab-highlightjs-androidstudio-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-androidstudio-icon-failed))!important}.v-code-block--tab-highlightjs-androidstudio>div{color:hsl(var(--v-cb-tab-highlightjs-androidstudio-text))}.v-code-block--tab-highlightjs-arduino-light{background-color:hsl(var(--v-cb-tab-highlightjs-arduino-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-arduino-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-arduino-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-arduino-light-icon{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon))!important}.v-code-block--tab-highlightjs-arduino-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-success))!important}.v-code-block--tab-highlightjs-arduino-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-arduino-light-icon-failed))!important}.v-code-block--tab-highlightjs-arduino-light>div{color:hsl(var(--v-cb-tab-highlightjs-arduino-light-text))}.v-code-block--tab-highlightjs-arta{background-color:hsl(var(--v-cb-tab-highlightjs-arta-bkg)/100%)!important}.v-code-block--tab-highlightjs-arta:hover{background-color:hsl(var(--v-cb-tab-highlightjs-arta-bkg)/50%)!important}.v-code-block--tab-highlightjs-arta-icon{color:hsl(var(--v-cb-tab-highlightjs-arta-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon))!important}.v-code-block--tab-highlightjs-arta-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-arta-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon-success))!important}.v-code-block--tab-highlightjs-arta-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-arta-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-arta-icon-failed))!important}.v-code-block--tab-highlightjs-arta>div{color:hsl(var(--v-cb-tab-highlightjs-arta-text))}.v-code-block--tab-highlightjs-ascetic{background-color:hsl(var(--v-cb-tab-highlightjs-ascetic-bkg)/100%)!important}.v-code-block--tab-highlightjs-ascetic:hover{background-color:hsl(var(--v-cb-tab-highlightjs-ascetic-bkg)/50%)!important}.v-code-block--tab-highlightjs-ascetic-icon{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon))!important}.v-code-block--tab-highlightjs-ascetic-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-success))!important}.v-code-block--tab-highlightjs-ascetic-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-ascetic-icon-failed))!important}.v-code-block--tab-highlightjs-ascetic>div{color:hsl(var(--v-cb-tab-highlightjs-ascetic-text))}.v-code-block--tab-highlightjs-atom-one-dark-reasonable{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-dark-reasonable>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-reasonable-text))}.v-code-block--tab-highlightjs-atom-one-dark{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon))!important}.v-code-block--tab-highlightjs-atom-one-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-dark>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-dark-text))}.v-code-block--tab-highlightjs-atom-one-light{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-atom-one-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-atom-one-light-icon{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon))!important}.v-code-block--tab-highlightjs-atom-one-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-success))!important}.v-code-block--tab-highlightjs-atom-one-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-atom-one-light-icon-failed))!important}.v-code-block--tab-highlightjs-atom-one-light>div{color:hsl(var(--v-cb-tab-highlightjs-atom-one-light-text))}.v-code-block--tab-highlightjs-codepen-embed{background-color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-bkg)/100%)!important}.v-code-block--tab-highlightjs-codepen-embed:hover{background-color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-bkg)/50%)!important}.v-code-block--tab-highlightjs-codepen-embed-icon{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon))!important}.v-code-block--tab-highlightjs-codepen-embed-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-success))!important}.v-code-block--tab-highlightjs-codepen-embed-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-codepen-embed-icon-failed))!important}.v-code-block--tab-highlightjs-codepen-embed>div{color:hsl(var(--v-cb-tab-highlightjs-codepen-embed-text))}.v-code-block--tab-highlightjs-color-brewer{background-color:hsl(var(--v-cb-tab-highlightjs-color-brewer-bkg)/100%)!important}.v-code-block--tab-highlightjs-color-brewer:hover{background-color:hsl(var(--v-cb-tab-highlightjs-color-brewer-bkg)/50%)!important}.v-code-block--tab-highlightjs-color-brewer-icon{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon))!important}.v-code-block--tab-highlightjs-color-brewer-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-success))!important}.v-code-block--tab-highlightjs-color-brewer-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-color-brewer-icon-failed))!important}.v-code-block--tab-highlightjs-color-brewer>div{color:hsl(var(--v-cb-tab-highlightjs-color-brewer-text))}.v-code-block--tab-highlightjs-dark{background-color:hsl(var(--v-cb-tab-highlightjs-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon))!important}.v-code-block--tab-highlightjs-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon-success))!important}.v-code-block--tab-highlightjs-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-dark-icon-failed))!important}.v-code-block--tab-highlightjs-dark>div{color:hsl(var(--v-cb-tab-highlightjs-dark-text))}.v-code-block--tab-highlightjs-devibeans{background-color:hsl(var(--v-cb-tab-highlightjs-devibeans-bkg)/100%)!important}.v-code-block--tab-highlightjs-devibeans:hover{background-color:hsl(var(--v-cb-tab-highlightjs-devibeans-bkg)/50%)!important}.v-code-block--tab-highlightjs-devibeans-icon{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon))!important}.v-code-block--tab-highlightjs-devibeans-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-success))!important}.v-code-block--tab-highlightjs-devibeans-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-devibeans-icon-failed))!important}.v-code-block--tab-highlightjs-devibeans>div{color:hsl(var(--v-cb-tab-highlightjs-devibeans-text))}.v-code-block--tab-highlightjs-docco{background-color:hsl(var(--v-cb-tab-highlightjs-docco-bkg)/100%)!important}.v-code-block--tab-highlightjs-docco:hover{background-color:hsl(var(--v-cb-tab-highlightjs-docco-bkg)/50%)!important}.v-code-block--tab-highlightjs-docco-icon{color:hsl(var(--v-cb-tab-highlightjs-docco-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon))!important}.v-code-block--tab-highlightjs-docco-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-docco-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon-success))!important}.v-code-block--tab-highlightjs-docco-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-docco-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-docco-icon-failed))!important}.v-code-block--tab-highlightjs-docco>div{color:hsl(var(--v-cb-tab-highlightjs-docco-text))}.v-code-block--tab-highlightjs-far{background-color:hsl(var(--v-cb-tab-highlightjs-far-bkg)/100%)!important}.v-code-block--tab-highlightjs-far:hover{background-color:hsl(var(--v-cb-tab-highlightjs-far-bkg)/50%)!important}.v-code-block--tab-highlightjs-far-icon{color:hsl(var(--v-cb-tab-highlightjs-far-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon))!important}.v-code-block--tab-highlightjs-far-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-far-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon-success))!important}.v-code-block--tab-highlightjs-far-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-far-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-far-icon-failed))!important}.v-code-block--tab-highlightjs-far>div{color:hsl(var(--v-cb-tab-highlightjs-far-text))}.v-code-block--tab-highlightjs-felipec{background-color:hsl(var(--v-cb-tab-highlightjs-felipec-bkg)/100%)!important}.v-code-block--tab-highlightjs-felipec:hover{background-color:hsl(var(--v-cb-tab-highlightjs-felipec-bkg)/50%)!important}.v-code-block--tab-highlightjs-felipec-icon{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon))!important}.v-code-block--tab-highlightjs-felipec-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon-success))!important}.v-code-block--tab-highlightjs-felipec-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-felipec-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-felipec-icon-failed))!important}.v-code-block--tab-highlightjs-felipec>div{color:hsl(var(--v-cb-tab-highlightjs-felipec-text))}.v-code-block--tab-highlightjs-foundation{background-color:hsl(var(--v-cb-tab-highlightjs-foundation-bkg)/100%)!important}.v-code-block--tab-highlightjs-foundation:hover{background-color:hsl(var(--v-cb-tab-highlightjs-foundation-bkg)/50%)!important}.v-code-block--tab-highlightjs-foundation-icon{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon))!important}.v-code-block--tab-highlightjs-foundation-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon-success))!important}.v-code-block--tab-highlightjs-foundation-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-foundation-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-foundation-icon-failed))!important}.v-code-block--tab-highlightjs-foundation>div{color:hsl(var(--v-cb-tab-highlightjs-foundation-text))}.v-code-block--tab-highlightjs-github-dark-dimmed{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-bkg)/100%)!important}.v-code-block--tab-highlightjs-github-dark-dimmed:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon))!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-success))!important}.v-code-block--tab-highlightjs-github-dark-dimmed-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-icon-failed))!important}.v-code-block--tab-highlightjs-github-dark-dimmed>div{color:hsl(var(--v-cb-tab-highlightjs-github-dark-dimmed-text))}.v-code-block--tab-highlightjs-github-dark{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-github-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon))!important}.v-code-block--tab-highlightjs-github-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-success))!important}.v-code-block--tab-highlightjs-github-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-dark-icon-failed))!important}.v-code-block--tab-highlightjs-github-dark>div{color:hsl(var(--v-cb-tab-highlightjs-github-dark-text))}.v-code-block--tab-highlightjs-github{background-color:hsl(var(--v-cb-tab-highlightjs-github-bkg)/100%)!important}.v-code-block--tab-highlightjs-github:hover{background-color:hsl(var(--v-cb-tab-highlightjs-github-bkg)/50%)!important}.v-code-block--tab-highlightjs-github-icon{color:hsl(var(--v-cb-tab-highlightjs-github-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon))!important}.v-code-block--tab-highlightjs-github-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-github-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon-success))!important}.v-code-block--tab-highlightjs-github-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-github-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-github-icon-failed))!important}.v-code-block--tab-highlightjs-github>div{color:hsl(var(--v-cb-tab-highlightjs-github-text))}.v-code-block--tab-highlightjs-gml{background-color:hsl(var(--v-cb-tab-highlightjs-gml-bkg)/100%)!important}.v-code-block--tab-highlightjs-gml:hover{background-color:hsl(var(--v-cb-tab-highlightjs-gml-bkg)/50%)!important}.v-code-block--tab-highlightjs-gml-icon{color:hsl(var(--v-cb-tab-highlightjs-gml-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon))!important}.v-code-block--tab-highlightjs-gml-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-gml-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon-success))!important}.v-code-block--tab-highlightjs-gml-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-gml-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-gml-icon-failed))!important}.v-code-block--tab-highlightjs-gml>div{color:hsl(var(--v-cb-tab-highlightjs-gml-text))}.v-code-block--tab-highlightjs-googlecode{background-color:hsl(var(--v-cb-tab-highlightjs-googlecode-bkg)/100%)!important}.v-code-block--tab-highlightjs-googlecode:hover{background-color:hsl(var(--v-cb-tab-highlightjs-googlecode-bkg)/50%)!important}.v-code-block--tab-highlightjs-googlecode-icon{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon))!important}.v-code-block--tab-highlightjs-googlecode-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-success))!important}.v-code-block--tab-highlightjs-googlecode-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-googlecode-icon-failed))!important}.v-code-block--tab-highlightjs-googlecode>div{color:hsl(var(--v-cb-tab-highlightjs-googlecode-text))}.v-code-block--tab-highlightjs-grayscale{background-color:hsl(var(--v-cb-tab-highlightjs-grayscale-bkg)/100%)!important}.v-code-block--tab-highlightjs-grayscale:hover{background-color:hsl(var(--v-cb-tab-highlightjs-grayscale-bkg)/50%)!important}.v-code-block--tab-highlightjs-grayscale-icon{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon))!important}.v-code-block--tab-highlightjs-grayscale-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-success))!important}.v-code-block--tab-highlightjs-grayscale-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-grayscale-icon-failed))!important}.v-code-block--tab-highlightjs-grayscale>div{color:hsl(var(--v-cb-tab-highlightjs-grayscale-text))}.v-code-block--tab-highlightjs-hybrid{background-color:hsl(var(--v-cb-tab-highlightjs-hybrid-bkg)/100%)!important}.v-code-block--tab-highlightjs-hybrid:hover{background-color:hsl(var(--v-cb-tab-highlightjs-hybrid-bkg)/50%)!important}.v-code-block--tab-highlightjs-hybrid-icon{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon))!important}.v-code-block--tab-highlightjs-hybrid-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-success))!important}.v-code-block--tab-highlightjs-hybrid-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-hybrid-icon-failed))!important}.v-code-block--tab-highlightjs-hybrid>div{color:hsl(var(--v-cb-tab-highlightjs-hybrid-text))}.v-code-block--tab-highlightjs-idea{background-color:hsl(var(--v-cb-tab-highlightjs-idea-bkg)/100%)!important}.v-code-block--tab-highlightjs-idea:hover{background-color:hsl(var(--v-cb-tab-highlightjs-idea-bkg)/50%)!important}.v-code-block--tab-highlightjs-idea-icon{color:hsl(var(--v-cb-tab-highlightjs-idea-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon))!important}.v-code-block--tab-highlightjs-idea-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-idea-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon-success))!important}.v-code-block--tab-highlightjs-idea-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-idea-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-idea-icon-failed))!important}.v-code-block--tab-highlightjs-idea>div{color:hsl(var(--v-cb-tab-highlightjs-idea-text))}.v-code-block--tab-highlightjs-intellij-light{background-color:hsl(var(--v-cb-tab-highlightjs-intellij-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-intellij-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-intellij-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-intellij-light-icon{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon))!important}.v-code-block--tab-highlightjs-intellij-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-success))!important}.v-code-block--tab-highlightjs-intellij-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-intellij-light-icon-failed))!important}.v-code-block--tab-highlightjs-intellij-light>div{color:hsl(var(--v-cb-tab-highlightjs-intellij-light-text))}.v-code-block--tab-highlightjs-ir-black{background-color:hsl(var(--v-cb-tab-highlightjs-ir-black-bkg)/100%)!important}.v-code-block--tab-highlightjs-ir-black:hover{background-color:hsl(var(--v-cb-tab-highlightjs-ir-black-bkg)/50%)!important}.v-code-block--tab-highlightjs-ir-black-icon{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon))!important}.v-code-block--tab-highlightjs-ir-black-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-success))!important}.v-code-block--tab-highlightjs-ir-black-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-ir-black-icon-failed))!important}.v-code-block--tab-highlightjs-ir-black>div{color:hsl(var(--v-cb-tab-highlightjs-ir-black-text))}.v-code-block--tab-highlightjs-isbl-editor-dark{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-isbl-editor-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon))!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-success))!important}.v-code-block--tab-highlightjs-isbl-editor-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-icon-failed))!important}.v-code-block--tab-highlightjs-isbl-editor-dark>div{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-dark-text))}.v-code-block--tab-highlightjs-isbl-editor-light{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-isbl-editor-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon))!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-success))!important}.v-code-block--tab-highlightjs-isbl-editor-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-icon-failed))!important}.v-code-block--tab-highlightjs-isbl-editor-light>div{color:hsl(var(--v-cb-tab-highlightjs-isbl-editor-light-text))}.v-code-block--tab-highlightjs-kimbie-dark{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-kimbie-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-kimbie-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon))!important}.v-code-block--tab-highlightjs-kimbie-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-success))!important}.v-code-block--tab-highlightjs-kimbie-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-icon-failed))!important}.v-code-block--tab-highlightjs-kimbie-dark>div{color:hsl(var(--v-cb-tab-highlightjs-kimbie-dark-text))}.v-code-block--tab-highlightjs-kimbie-light{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-kimbie-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-kimbie-light-icon{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon))!important}.v-code-block--tab-highlightjs-kimbie-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-success))!important}.v-code-block--tab-highlightjs-kimbie-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-kimbie-light-icon-failed))!important}.v-code-block--tab-highlightjs-kimbie-light>div{color:hsl(var(--v-cb-tab-highlightjs-kimbie-light-text))}.v-code-block--tab-highlightjs-lightfair{background-color:hsl(var(--v-cb-tab-highlightjs-lightfair-bkg)/100%)!important}.v-code-block--tab-highlightjs-lightfair:hover{background-color:hsl(var(--v-cb-tab-highlightjs-lightfair-bkg)/50%)!important}.v-code-block--tab-highlightjs-lightfair-icon{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon))!important}.v-code-block--tab-highlightjs-lightfair-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-success))!important}.v-code-block--tab-highlightjs-lightfair-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-lightfair-icon-failed))!important}.v-code-block--tab-highlightjs-lightfair>div{color:hsl(var(--v-cb-tab-highlightjs-lightfair-text))}.v-code-block--tab-highlightjs-lioshi{background-color:hsl(var(--v-cb-tab-highlightjs-lioshi-bkg)/100%)!important}.v-code-block--tab-highlightjs-lioshi:hover{background-color:hsl(var(--v-cb-tab-highlightjs-lioshi-bkg)/50%)!important}.v-code-block--tab-highlightjs-lioshi-icon{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon))!important}.v-code-block--tab-highlightjs-lioshi-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-success))!important}.v-code-block--tab-highlightjs-lioshi-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-lioshi-icon-failed))!important}.v-code-block--tab-highlightjs-lioshi>div{color:hsl(var(--v-cb-tab-highlightjs-lioshi-text))}.v-code-block--tab-highlightjs-magula{background-color:hsl(var(--v-cb-tab-highlightjs-magula-bkg)/100%)!important}.v-code-block--tab-highlightjs-magula:hover{background-color:hsl(var(--v-cb-tab-highlightjs-magula-bkg)/50%)!important}.v-code-block--tab-highlightjs-magula-icon{color:hsl(var(--v-cb-tab-highlightjs-magula-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon))!important}.v-code-block--tab-highlightjs-magula-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-magula-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon-success))!important}.v-code-block--tab-highlightjs-magula-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-magula-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-magula-icon-failed))!important}.v-code-block--tab-highlightjs-magula>div{color:hsl(var(--v-cb-tab-highlightjs-magula-text))}.v-code-block--tab-highlightjs-mono-blue{background-color:hsl(var(--v-cb-tab-highlightjs-mono-blue-bkg)/100%)!important}.v-code-block--tab-highlightjs-mono-blue:hover{background-color:hsl(var(--v-cb-tab-highlightjs-mono-blue-bkg)/50%)!important}.v-code-block--tab-highlightjs-mono-blue-icon{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon))!important}.v-code-block--tab-highlightjs-mono-blue-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-success))!important}.v-code-block--tab-highlightjs-mono-blue-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-mono-blue-icon-failed))!important}.v-code-block--tab-highlightjs-mono-blue>div{color:hsl(var(--v-cb-tab-highlightjs-mono-blue-text))}.v-code-block--tab-highlightjs-monokai-sublime{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-bkg)/100%)!important}.v-code-block--tab-highlightjs-monokai-sublime:hover{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-bkg)/50%)!important}.v-code-block--tab-highlightjs-monokai-sublime-icon{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon))!important}.v-code-block--tab-highlightjs-monokai-sublime-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-success))!important}.v-code-block--tab-highlightjs-monokai-sublime-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-icon-failed))!important}.v-code-block--tab-highlightjs-monokai-sublime>div{color:hsl(var(--v-cb-tab-highlightjs-monokai-sublime-text))}.v-code-block--tab-highlightjs-monokai{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-bkg)/100%)!important}.v-code-block--tab-highlightjs-monokai:hover{background-color:hsl(var(--v-cb-tab-highlightjs-monokai-bkg)/50%)!important}.v-code-block--tab-highlightjs-monokai-icon{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon))!important}.v-code-block--tab-highlightjs-monokai-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon-success))!important}.v-code-block--tab-highlightjs-monokai-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-monokai-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-monokai-icon-failed))!important}.v-code-block--tab-highlightjs-monokai>div{color:hsl(var(--v-cb-tab-highlightjs-monokai-text))}.v-code-block--tab-highlightjs-night-owl{background-color:hsl(var(--v-cb-tab-highlightjs-night-owl-bkg)/100%)!important}.v-code-block--tab-highlightjs-night-owl:hover{background-color:hsl(var(--v-cb-tab-highlightjs-night-owl-bkg)/50%)!important}.v-code-block--tab-highlightjs-night-owl-icon{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon))!important}.v-code-block--tab-highlightjs-night-owl-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-success))!important}.v-code-block--tab-highlightjs-night-owl-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-night-owl-icon-failed))!important}.v-code-block--tab-highlightjs-night-owl>div{color:hsl(var(--v-cb-tab-highlightjs-night-owl-text))}.v-code-block--tab-highlightjs-nnfx-dark{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-nnfx-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-nnfx-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon))!important}.v-code-block--tab-highlightjs-nnfx-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-success))!important}.v-code-block--tab-highlightjs-nnfx-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-icon-failed))!important}.v-code-block--tab-highlightjs-nnfx-dark>div{color:hsl(var(--v-cb-tab-highlightjs-nnfx-dark-text))}.v-code-block--tab-highlightjs-nnfx-light{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-nnfx-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-nnfx-light-icon{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon))!important}.v-code-block--tab-highlightjs-nnfx-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-success))!important}.v-code-block--tab-highlightjs-nnfx-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nnfx-light-icon-failed))!important}.v-code-block--tab-highlightjs-nnfx-light>div{color:hsl(var(--v-cb-tab-highlightjs-nnfx-light-text))}.v-code-block--tab-highlightjs-nord{background-color:hsl(var(--v-cb-tab-highlightjs-nord-bkg)/100%)!important}.v-code-block--tab-highlightjs-nord:hover{background-color:hsl(var(--v-cb-tab-highlightjs-nord-bkg)/50%)!important}.v-code-block--tab-highlightjs-nord-icon{color:hsl(var(--v-cb-tab-highlightjs-nord-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon))!important}.v-code-block--tab-highlightjs-nord-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-nord-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon-success))!important}.v-code-block--tab-highlightjs-nord-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-nord-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-nord-icon-failed))!important}.v-code-block--tab-highlightjs-nord>div{color:hsl(var(--v-cb-tab-highlightjs-nord-text))}.v-code-block--tab-highlightjs-obsidian{background-color:hsl(var(--v-cb-tab-highlightjs-obsidian-bkg)/100%)!important}.v-code-block--tab-highlightjs-obsidian:hover{background-color:hsl(var(--v-cb-tab-highlightjs-obsidian-bkg)/50%)!important}.v-code-block--tab-highlightjs-obsidian-icon{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon))!important}.v-code-block--tab-highlightjs-obsidian-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-success))!important}.v-code-block--tab-highlightjs-obsidian-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-obsidian-icon-failed))!important}.v-code-block--tab-highlightjs-obsidian>div{color:hsl(var(--v-cb-tab-highlightjs-obsidian-text))}.v-code-block--tab-highlightjs-panda-syntax-dark{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-panda-syntax-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon))!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-success))!important}.v-code-block--tab-highlightjs-panda-syntax-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-icon-failed))!important}.v-code-block--tab-highlightjs-panda-syntax-dark>div{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-dark-text))}.v-code-block--tab-highlightjs-panda-syntax-light{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-panda-syntax-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon))!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-success))!important}.v-code-block--tab-highlightjs-panda-syntax-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-icon-failed))!important}.v-code-block--tab-highlightjs-panda-syntax-light>div{color:hsl(var(--v-cb-tab-highlightjs-panda-syntax-light-text))}.v-code-block--tab-highlightjs-paraiso-dark{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-paraiso-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-paraiso-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon))!important}.v-code-block--tab-highlightjs-paraiso-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-success))!important}.v-code-block--tab-highlightjs-paraiso-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-icon-failed))!important}.v-code-block--tab-highlightjs-paraiso-dark>div{color:hsl(var(--v-cb-tab-highlightjs-paraiso-dark-text))}.v-code-block--tab-highlightjs-paraiso-light{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-paraiso-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-paraiso-light-icon{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon))!important}.v-code-block--tab-highlightjs-paraiso-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-success))!important}.v-code-block--tab-highlightjs-paraiso-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-paraiso-light-icon-failed))!important}.v-code-block--tab-highlightjs-paraiso-light>div{color:hsl(var(--v-cb-tab-highlightjs-paraiso-light-text))}.v-code-block--tab-highlightjs-purebasic{background-color:hsl(var(--v-cb-tab-highlightjs-purebasic-bkg)/100%)!important}.v-code-block--tab-highlightjs-purebasic:hover{background-color:hsl(var(--v-cb-tab-highlightjs-purebasic-bkg)/50%)!important}.v-code-block--tab-highlightjs-purebasic-icon{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon))!important}.v-code-block--tab-highlightjs-purebasic-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-success))!important}.v-code-block--tab-highlightjs-purebasic-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-purebasic-icon-failed))!important}.v-code-block--tab-highlightjs-purebasic>div{color:hsl(var(--v-cb-tab-highlightjs-purebasic-text))}.v-code-block--tab-highlightjs-qtcreator-dark{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-qtcreator-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon))!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-success))!important}.v-code-block--tab-highlightjs-qtcreator-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-icon-failed))!important}.v-code-block--tab-highlightjs-qtcreator-dark>div{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-dark-text))}.v-code-block--tab-highlightjs-qtcreator-light{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-qtcreator-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-qtcreator-light-icon{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon))!important}.v-code-block--tab-highlightjs-qtcreator-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-success))!important}.v-code-block--tab-highlightjs-qtcreator-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-icon-failed))!important}.v-code-block--tab-highlightjs-qtcreator-light>div{color:hsl(var(--v-cb-tab-highlightjs-qtcreator-light-text))}.v-code-block--tab-highlightjs-rainbow{background-color:hsl(var(--v-cb-tab-highlightjs-rainbow-bkg)/100%)!important}.v-code-block--tab-highlightjs-rainbow:hover{background-color:hsl(var(--v-cb-tab-highlightjs-rainbow-bkg)/50%)!important}.v-code-block--tab-highlightjs-rainbow-icon{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon))!important}.v-code-block--tab-highlightjs-rainbow-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-success))!important}.v-code-block--tab-highlightjs-rainbow-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-rainbow-icon-failed))!important}.v-code-block--tab-highlightjs-rainbow>div{color:hsl(var(--v-cb-tab-highlightjs-rainbow-text))}.v-code-block--tab-highlightjs-routeros{background-color:hsl(var(--v-cb-tab-highlightjs-routeros-bkg)/100%)!important}.v-code-block--tab-highlightjs-routeros:hover{background-color:hsl(var(--v-cb-tab-highlightjs-routeros-bkg)/50%)!important}.v-code-block--tab-highlightjs-routeros-icon{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon))!important}.v-code-block--tab-highlightjs-routeros-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon-success))!important}.v-code-block--tab-highlightjs-routeros-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-routeros-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-routeros-icon-failed))!important}.v-code-block--tab-highlightjs-routeros>div{color:hsl(var(--v-cb-tab-highlightjs-routeros-text))}.v-code-block--tab-highlightjs-school-book{background-color:hsl(var(--v-cb-tab-highlightjs-school-book-bkg)/100%)!important}.v-code-block--tab-highlightjs-school-book:hover{background-color:hsl(var(--v-cb-tab-highlightjs-school-book-bkg)/50%)!important}.v-code-block--tab-highlightjs-school-book-icon{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon))!important}.v-code-block--tab-highlightjs-school-book-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon-success))!important}.v-code-block--tab-highlightjs-school-book-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-school-book-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-school-book-icon-failed))!important}.v-code-block--tab-highlightjs-school-book>div{color:hsl(var(--v-cb-tab-highlightjs-school-book-text))}.v-code-block--tab-highlightjs-shades-of-purple{background-color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-bkg)/100%)!important}.v-code-block--tab-highlightjs-shades-of-purple:hover{background-color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-bkg)/50%)!important}.v-code-block--tab-highlightjs-shades-of-purple-icon{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon))!important}.v-code-block--tab-highlightjs-shades-of-purple-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-success))!important}.v-code-block--tab-highlightjs-shades-of-purple-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-icon-failed))!important}.v-code-block--tab-highlightjs-shades-of-purple>div{color:hsl(var(--v-cb-tab-highlightjs-shades-of-purple-text))}.v-code-block--tab-highlightjs-srcery{background-color:hsl(var(--v-cb-tab-highlightjs-srcery-bkg)/100%)!important}.v-code-block--tab-highlightjs-srcery:hover{background-color:hsl(var(--v-cb-tab-highlightjs-srcery-bkg)/50%)!important}.v-code-block--tab-highlightjs-srcery-icon{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon))!important}.v-code-block--tab-highlightjs-srcery-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon-success))!important}.v-code-block--tab-highlightjs-srcery-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-srcery-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-srcery-icon-failed))!important}.v-code-block--tab-highlightjs-srcery>div{color:hsl(var(--v-cb-tab-highlightjs-srcery-text))}.v-code-block--tab-highlightjs-stackoverflow-dark{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-stackoverflow-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon))!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-success))!important}.v-code-block--tab-highlightjs-stackoverflow-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-icon-failed))!important}.v-code-block--tab-highlightjs-stackoverflow-dark>div{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-dark-text))}.v-code-block--tab-highlightjs-stackoverflow-light{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-stackoverflow-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon))!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-success))!important}.v-code-block--tab-highlightjs-stackoverflow-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-icon-failed))!important}.v-code-block--tab-highlightjs-stackoverflow-light>div{color:hsl(var(--v-cb-tab-highlightjs-stackoverflow-light-text))}.v-code-block--tab-highlightjs-sunburst{background-color:hsl(var(--v-cb-tab-highlightjs-sunburst-bkg)/100%)!important}.v-code-block--tab-highlightjs-sunburst:hover{background-color:hsl(var(--v-cb-tab-highlightjs-sunburst-bkg)/50%)!important}.v-code-block--tab-highlightjs-sunburst-icon{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon))!important}.v-code-block--tab-highlightjs-sunburst-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-success))!important}.v-code-block--tab-highlightjs-sunburst-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-sunburst-icon-failed))!important}.v-code-block--tab-highlightjs-sunburst>div{color:hsl(var(--v-cb-tab-highlightjs-sunburst-text))}.v-code-block--tab-highlightjs-tokyo-night-dark{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-bkg)/100%)!important}.v-code-block--tab-highlightjs-tokyo-night-dark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-bkg)/50%)!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon))!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-success))!important}.v-code-block--tab-highlightjs-tokyo-night-dark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-icon-failed))!important}.v-code-block--tab-highlightjs-tokyo-night-dark>div{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-dark-text))}.v-code-block--tab-highlightjs-tokyo-night-light{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-bkg)/100%)!important}.v-code-block--tab-highlightjs-tokyo-night-light:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-bkg)/50%)!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon))!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-success))!important}.v-code-block--tab-highlightjs-tokyo-night-light-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-icon-failed))!important}.v-code-block--tab-highlightjs-tokyo-night-light>div{color:hsl(var(--v-cb-tab-highlightjs-tokyo-night-light-text))}.v-code-block--tab-highlightjs-tomorrow-night-blue{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-bkg)/100%)!important}.v-code-block--tab-highlightjs-tomorrow-night-blue:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-bkg)/50%)!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-success))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-icon-failed))!important}.v-code-block--tab-highlightjs-tomorrow-night-blue>div{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-blue-text))}.v-code-block--tab-highlightjs-tomorrow-night-bright{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-bkg)/100%)!important}.v-code-block--tab-highlightjs-tomorrow-night-bright:hover{background-color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-bkg)/50%)!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-success))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-icon-failed))!important}.v-code-block--tab-highlightjs-tomorrow-night-bright>div{color:hsl(var(--v-cb-tab-highlightjs-tomorrow-night-bright-text))}.v-code-block--tab-highlightjs-vs{background-color:hsl(var(--v-cb-tab-highlightjs-vs-bkg)/100%)!important}.v-code-block--tab-highlightjs-vs:hover{background-color:hsl(var(--v-cb-tab-highlightjs-vs-bkg)/50%)!important}.v-code-block--tab-highlightjs-vs-icon{color:hsl(var(--v-cb-tab-highlightjs-vs-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon))!important}.v-code-block--tab-highlightjs-vs-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-vs-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon-success))!important}.v-code-block--tab-highlightjs-vs-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-vs-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs-icon-failed))!important}.v-code-block--tab-highlightjs-vs>div{color:hsl(var(--v-cb-tab-highlightjs-vs-text))}.v-code-block--tab-highlightjs-vs2015{background-color:hsl(var(--v-cb-tab-highlightjs-vs2015-bkg)/100%)!important}.v-code-block--tab-highlightjs-vs2015:hover{background-color:hsl(var(--v-cb-tab-highlightjs-vs2015-bkg)/50%)!important}.v-code-block--tab-highlightjs-vs2015-icon{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon))!important}.v-code-block--tab-highlightjs-vs2015-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-success))!important}.v-code-block--tab-highlightjs-vs2015-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-vs2015-icon-failed))!important}.v-code-block--tab-highlightjs-vs2015>div{color:hsl(var(--v-cb-tab-highlightjs-vs2015-text))}.v-code-block--tab-highlightjs-xcode{background-color:hsl(var(--v-cb-tab-highlightjs-xcode-bkg)/100%)!important}.v-code-block--tab-highlightjs-xcode:hover{background-color:hsl(var(--v-cb-tab-highlightjs-xcode-bkg)/50%)!important}.v-code-block--tab-highlightjs-xcode-icon{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon))!important}.v-code-block--tab-highlightjs-xcode-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon-success))!important}.v-code-block--tab-highlightjs-xcode-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-xcode-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-xcode-icon-failed))!important}.v-code-block--tab-highlightjs-xcode>div{color:hsl(var(--v-cb-tab-highlightjs-xcode-text))}.v-code-block--tab-highlightjs-xt256{background-color:hsl(var(--v-cb-tab-highlightjs-xt256-bkg)/100%)!important}.v-code-block--tab-highlightjs-xt256:hover{background-color:hsl(var(--v-cb-tab-highlightjs-xt256-bkg)/50%)!important}.v-code-block--tab-highlightjs-xt256-icon{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon))!important}.v-code-block--tab-highlightjs-xt256-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon-success))!important}.v-code-block--tab-highlightjs-xt256-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-xt256-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-xt256-icon-failed))!important}.v-code-block--tab-highlightjs-xt256>div{color:hsl(var(--v-cb-tab-highlightjs-xt256-text))}.v-code-block--tab-highlightjs-base16-onedark{background-color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-bkg)/100%)!important}.v-code-block--tab-highlightjs-base16-onedark:hover{background-color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-bkg)/50%)!important}.v-code-block--tab-highlightjs-base16-onedark-icon{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon))!important}.v-code-block--tab-highlightjs-base16-onedark-icon-status-success{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-success))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-success))!important}.v-code-block--tab-highlightjs-base16-onedark-icon-status-failed{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-failed))!important;fill:hsl(var(--v-cb-tab-highlightjs-base16-onedark-icon-failed))!important}.v-code-block--tab-highlightjs-base16-onedark>div{color:hsl(var(--v-cb-tab-highlightjs-base16-onedark-text))}.v-code-block--mt-1{margin-top:.25rem!important}.v-code-block--me-1{margin-right:.25rem!important}.v-code-block--mb-1{margin-bottom:.25rem!important}.v-code-block--ms-1{margin-left:.25rem!important}.v-code-block--pt-1{padding-top:.25rem!important}.v-code-block--pe-1{padding-right:.25rem!important}.v-code-block--pb-1{padding-bottom:.25rem!important}.v-code-block--ps-1{padding-left:.25rem!important}.v-code-block--mt-2{margin-top:.5rem!important}.v-code-block--me-2{margin-right:.5rem!important}.v-code-block--mb-2{margin-bottom:.5rem!important}.v-code-block--ms-2{margin-left:.5rem!important}.v-code-block--pt-2{padding-top:.5rem!important}.v-code-block--pe-2{padding-right:.5rem!important}.v-code-block--pb-2{padding-bottom:.5rem!important}.v-code-block--ps-2{padding-left:.5rem!important}.v-code-block--mt-3{margin-top:.75rem!important}.v-code-block--me-3{margin-right:.75rem!important}.v-code-block--mb-3{margin-bottom:.75rem!important}.v-code-block--ms-3{margin-left:.75rem!important}.v-code-block--pt-3{padding-top:.75rem!important}.v-code-block--pe-3{padding-right:.75rem!important}.v-code-block--pb-3{padding-bottom:.75rem!important}.v-code-block--ps-3{padding-left:.75rem!important}.v-code-block--mt-4{margin-top:1rem!important}.v-code-block--me-4{margin-right:1rem!important}.v-code-block--mb-4{margin-bottom:1rem!important}.v-code-block--ms-4{margin-left:1rem!important}.v-code-block--pt-4{padding-top:1rem!important}.v-code-block--pe-4{padding-right:1rem!important}.v-code-block--pb-4{padding-bottom:1rem!important}.v-code-block--ps-4{padding-left:1rem!important}.v-code-block--mt-5{margin-top:1.25rem!important}.v-code-block--me-5{margin-right:1.25rem!important}.v-code-block--mb-5{margin-bottom:1.25rem!important}.v-code-block--ms-5{margin-left:1.25rem!important}.v-code-block--pt-5{padding-top:1.25rem!important}.v-code-block--pe-5{padding-right:1.25rem!important}.v-code-block--pb-5{padding-bottom:1.25rem!important}.v-code-block--ps-5{padding-left:1.25rem!important}.v-code-block---label-mobile input,.v-code-block---label-mobile select,.v-code-block---label-mobile textarea{display:none}.v-code-block[data-v-51ec5829]{display:block;max-width:100%}.v-code-block--header[data-v-51ec5829]{align-items:end;display:flex;justify-content:space-between;overflow:visible;position:relative;width:100%}.v-code-block--label[data-v-51ec5829]{overflow:auto}.v-code-block--tabs[data-v-51ec5829]{align-items:end;display:flex;justify-content:flex-end}.v-code-block--tab[data-v-51ec5829]{align-items:center;border-radius:5px 5px 0 0;cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;padding:5px 15px;text-align:center;transition:background-color .35s ease;white-space:nowrap;width:fit-content}.v-code-block--tab svg[data-v-51ec5829]{height:.85rem;width:.85rem}.v-code-block--code[data-v-51ec5829]{position:relative;z-index:1}.v-code-block--code pre[data-v-51ec5829],.v-code-block--code pre[class*=language-][data-v-51ec5829]{margin-top:0}.v-code-block--code pre[class*=language-][data-v-51ec5829]:before,.v-code-block--code pre[class*=language-][data-v-51ec5829]:after{bottom:.95em}.v-code-block--code pre code[data-v-51ec5829]{width:100%}.v-code-block--code-browser[data-v-51ec5829]:before{background-image:url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');background-position:.5em .5em;background-repeat:no-repeat;content:"";display:block;padding-right:10em;padding-top:3rem;width:100%}.v-code-block--code:hover .v-code-block--code-copy-button[data-v-51ec5829]{opacity:1}.v-code-block--code-copy-button[data-v-51ec5829]{align-items:center;color:#ccc;cursor:pointer;display:flex;fill:#ccc;height:1.5em;justify-content:center;opacity:0;position:absolute;right:.9rem;top:.7rem;transition:opacity .2s ease-in-out;width:auto;z-index:2}.v-code-block--code-copy-button[data-v-51ec5829]:hover{opacity:1}.v-code-block--code-copy-button-persist[data-v-51ec5829]{opacity:.5}.v-code-block--code-copy-button svg[data-v-51ec5829]{height:1rem;width:1rem}`)), document.head.appendChild(i);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var coreExports = /* @__PURE__ */ requireCore();
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
const _hoisted_1$1 = { class: "MDCode" };
const _sfc_main$1 = {
  __name: "MDCode",
  props: {
    content: String,
    codeLanguage: String,
    includePath: String,
    codeFilePath: String,
    fileExists: String
  },
  setup(__props) {
    HighlightJS.registerLanguage("cpp", cpp);
    HighlightJS.registerLanguage("c++", cpp);
    HighlightJS.registerLanguage("css", css);
    const theme = ref("base16/solarized-dark");
    const $q = useQuasar();
    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
          theme.value = "base16/solarized-dark";
        } else {
          theme.value = "base16/solarized-light";
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(Un), {
          code: __props.content,
          highlightjs: "",
          lang: __props.codeLanguage,
          theme: theme.value,
          label: __props.codeFilePath != "undefined" ? __props.codeFilePath : ""
        }, null, 8, ["code", "lang", "theme", "label"])
      ]);
    };
  }
};
const _hoisted_1 = { class: "MDAbbr" };
const _sfc_main = {
  __name: "MDAbbr",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createVNode(QTooltip, {
          anchor: "top middle",
          self: "bottom middle",
          class: "MDAbbrDescription bg-amber text-black shadow-4",
          "max-width": "40em"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "abbrDescription", {}, void 0, true)
          ]),
          _: 3
        })
      ]);
    };
  }
};
const MDAbbr = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa8e34f6"]]);
const registerGlobalComponents = defineBoot(async ({ app }) => {
  app.component("MDCode", _sfc_main$1);
  app.component("MDAbbr", MDAbbr);
});
export {
  registerGlobalComponents as default
};
