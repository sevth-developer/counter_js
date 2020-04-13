import {GetCookie, SetCookie} from "./utils";
import Server from "./server";

/**
 * 主要实现方法
 *  1. 检测cookie是否存在
 *  2. 动态加载script 执行 jsonp 回调
 *  3. 加载成功后
 */

async function main() {
    // let user_check = false;
    // if (await GetCookie) {user_check = true;}
    let server = new Server();
    // console.log(GetCookie());
    let funcName = await server.jsonp(GetCookie());
    if (funcName && !GetCookie()) await SetCookie()
}
/**
 * 浏览器兼容加载
 *
 */
function ready() {
    if (document.addEventListener) {                //兼容主流浏览器
        document.addEventListener('DOMContentLoaded',
            function a() {
            document.removeEventListener('DOMContentLoaded', a, false);
            main().then(r => {});
            // console.log('DOMContentLoaded')
        }
            // main
        , false);
    }

    else if (document.attachEvent) {                //兼容IE8+
        document.attachEvent('onreadystatechange', function a() {
            if (document.readyState === 'complete') {
                document.detachEvent('onreadystatechange', a);
                main().then(r => {});
                // console.log('onreadystatechange')
            }
        });

        if (document.documentElement.doScroll && typeof window.frameElement === 'undefined') { //兼容低版本IE
            try {
                document.documentElement.doScroll('left');
            } catch (e) {
                return setTimeout(ready, 50);
            }
            main().then(r => {});
            // console.log('doScroll')
        }
    }
}

export default {
    ready
}


