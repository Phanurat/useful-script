# WORKING NOTES

## 28/04/2024 - 29/05/2024

- [ ] options page for smooth scroll: disable for specific sites, config smooth, ...

- [ ] restore data options: merge / override

- [ ] tiktok video downloader <https://chromewebstore.google.com/detail/chrome-video-downloader-f/kmobjdioiclamniofdnngmafbhgcniok>

- [x] chrome flags for faster web exp <https://www.androidauthority.com/chrome-flags-1009941/>

- [ ] fb detect unfriend - xem ai huỷ kết bạn với bạn

- [x] Enable smooth scroll <https://chrome.google.com/webstore/detail/nbokbjkabcmbfdlbddjidfmibcpneigj>

- [x] tham khảo <https://github.com/imhiendev/API_FACEBOOK> => facebook graph api có nhiều hơn

- [ ] update rules cho auto inlarge image <https://chromewebstore.google.com/detail/hover-zoom+/pccckmaobkjjboncdfnnofkonhgpceea>

- [x] Update contributor guide khi release ver mới

- [x] Fix simple allow copy <https://chrome.google.com/webstore/detail/aefehdhdciieocakfobpaaolhipkcpgc>

- [x] optimize prevent close browser on last tab, try debounce/throttle => chắc ko optimize đc nữa

- [x] import UfsGlobal thay vì để global + tách nhỏ UfsGobal

- [x] Show recently closed tabs => Bỏ, browser có sẵn rồi

- [ ] css variables hay <https://codepen.io/valhead/pen/yXYYdm> <https://valhead.com/2017/07/21/animating-with-css-variables/> <https://codepen.io/magnificode/pen/JedJPO>

- [x] giấu dữ liệu trong text <https://tranxuanthang.github.io/zwc-datahider/index.html>

- [x] image downloader <https://chromewebstore.google.com/detail/image-downloader-imageye/agionbommeaifngbhincahgmoflcikhm> => chrome.downloads không tải nhiều link cùng lúc đc => dùng fdm, idm vẫn ổn hơn

- [x] save to facebook <https://chromewebstore.google.com/detail/save-to-facebook/jmfikkaogpplgnfjmbjdpalkhclendgd> => Cần load script/css từ facebook => không ổn

- [x] youtube dislike UI

- [x] Switch to Swal

- [ ] Clear browser histories for specific website.

- [x] Export all data, and restore when re-install extension

- [x] Check window focus in iframes => truyền details vào allFrames đang không hoạt động đúng dưới background script

- [x] thêm event onInstalled, onStartup cho background script

- [x] Kiểm tra trang web an toàn <https://chongluadao.vn/> <https://api.chongluadao.vn/v2/blacklist> <https://api.chongluadao.vn/v2/whitelist>

- [x] Fix magnify image on right click

- [x] Auto lock websites

- [x] add option to run script in allframes

- [x] consistent extension id => publish draft to store to get public key => add to manifest => DONE

- [x] Oauth to google <https://stackoverflow.com/a/25046173/23648002> <https://console.cloud.google.com/apis/credentials/consent?authuser=1&project=useful-scripts-423305&supportedpurview=project> => This API is not supported on Microsoft Edge

- [x] @@extension_id <https://developer.chrome.com/docs/extensions/reference/api/i18n#overview-predefined> => chưa biết làm gì

- [x] extends chrome devtools <https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools> => Chưa dùng tới

- [x] Render video in document.title => spam event tab update quá => khỏi làm

- [x] setTimeout is awsome <https://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful>

- [ ] dynamic rules editor

- [x] onBeforeNavigate event => use declarativeNetRequest

- [x] finish webTimer + add filter by range

- [ ] Tự động mời bạn bè vào nhóm <https://chromewebstore.google.com/detail/hifb-auto-group-inviter-m/nhdpeaeaafgbncmionfngamhohnngabl>

- [ ] Tự động kết bạn <https://chromewebstore.google.com/detail/hifb-auto-k%E1%BA%BFt-b%E1%BA%A1n-%C4%91%E1%BB%8Ba-ph%C6%B0/mjgfhahcmnbbmolopombeaklmdnakmml>

- [x] theme selector for popup extension

- [x] scroll to top popup extension

- [x] optimize UfsGlbal

- [x] Boost timer + bypass all short link <https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks> => Not interested

- [x] call js function from url <https://stackoverflow.com/a/8466513/23648002> => chrome đã chặn, không dùng được

```
chrome.tabs.update(tabId, {url: 'javascript:functionNameHere()'});
```

- [x] auto update extension <https://developer.chrome.com/docs/extensions/how-to/distribute/host-on-linux> => không cài được luôn do trình duyệt nói nguồn gốc không rõ

```
openssl rsa -in useful-script.pem -pubout > public_key.pem
```

- [x] p5 visualize music <https://github.com/therewasaguy/p5-music-viz>

- [ ] lyric generator <https://lrcgenerator.com/>

## 29/03/2024 - 28/04/2024

- [x] fb_invisible_message có vẻ không hoạt động => xoá luôn, giữ lại phần tạo text tàng hình

- [x] fb_whoIsTyping có vẻ không hoạt động => chỉ hoạt động nếu ko mã hoá

- [ ] zing mp3 - có api ngon mà chưa dùng hết chức năng

- [x] tất cả các script inject code vào website cần update để tuân thủ TrustedScript

- [ ] Tổng hợp các chức năng tải hàng loạt fb vào 1 trang web mới

- [x] Test thử [rapid api](https://rapidapi.com/) => toàn trả phí là chính

- [ ] Youtube local download => lấy data từ ytplayer.config.args.raw_player_response => Làm UI

- [x] html2img khá ngon, nhưng chưa biết xài vô cái gì => lỗi trusted type, không dùng đc

- [x] Optimize import jszip => có lẽ không cần

- [x] làm cho xong soundcloud_downloadMusic hoặc xóa => Xong rồi, Ngon

- [x] Move transfer.sh sang popup => Xoá luôn

- [x] text to qrcode không còn hoạt động => xoá luôn, ít xài

- [x] bookmark exporter/manager => export ra json, lười làm UI quá

- [x] Google docs/sheet downloader => Done

- [x] Tailieu.vn => PDFjs dễ crack

- [x] Wheel of name - input list of values

- [x] duck race - input list of values

- [x] fb_getAllUidOfGroupMembers đang lỗi

- [x] text to qrcode <https://hoothin.com/qrcode/>

- [x] extension ngon cho youtube [Improved youtube](https://chromewebstore.google.com/detail/improve-youtube-%F0%9F%8E%A7-for-yo/bnomihfieiccainjcjblhegjgglakjdd?authuser=1)

- [ ] Fix hack wheel of names

- [x] Thêm visualize music vào bất kỳ trang web nào => repo riêng

- [x] get bigest image: <https://greasyfork.org/scripts/2312> <https://github.com/hoothin/UserScripts/blob/master/Picviewer%20CE%2B/pvcep_rules.js> => check rule r array and s array

- [x] hoc regex di <https://github.com/regexhq> <https://www.regexbuddy.com/>

- [x] đọc extension samples <https://github.dev/GoogleChrome/chrome-extensions-samples>
  - [x] Run auto script from background service worker chrome.webNavigation.onDOMContentLoaded
  - [x] Sử dụng chrome.downloads
  - [x] Tìm hiểu chrome.topSites => không có nhiều ý tưởng lắm
  - [ ] permissions userScripts
  - [x] chrome.power => keep PC awake => we dont need this
  - [ ] chrome.windows => merge windows
  - [ ] offscreen clipboard write => Copy selected text on any web?
  - [ ] tabCapture => capture google meet?
  - [ ] webSocket => do something great?
  - [ ] contentSetting <https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/contentSettings/popup.js>

- [x] Thêm change logs cho từng scripts

- [x] Xem google extension howto [Link](https://developer.chrome.com/docs/extensions/how-to)
  - [x] record audio and video from another tab [link](https://developer.chrome.com/docs/extensions/how-to/web-platform/screen-capture) => **TIỀM NĂNG làm web visualize music**
  - [x] chụp ảnh website bằng chrome.tabs.captureVisibleTab => bỏ, không có tiềm năng
  - [x] chrome.tabCapture [link](https://developer.chrome.com/docs/extensions/reference/api/tabCapture) => access MediaStream of current tab => phải là 1 page trong extension mới truy cập được => không tiềm năng

- [x] Thêm UI cho get all friends fb => ???

- [x] <https://github.com/lelinhtinh/Userscript>

- [x] tiktok download api lỗi => Dùng snaptik api

- [ ] cào data tiktok/douyin <https://github.com/Evil0ctal/Douyin_TikTok_Download_API>
