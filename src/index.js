import {GetUV, SetUV} from "./utils";
import Server from "./server";

/**
 * 主要实现方法
 *  1. 检测本地存储是否存在值
 *  2. 动态加载script 执行 jsonp 回调
 *  3. 加载成功后插入对应标签
 */

async function main() {
    let server = new Server();
    let funcName = await server.jsonp(GetUV());
    if (funcName && !GetUV()) await SetUV()
}
/**
 * 浏览器兼容加载
 *
 */
function run() {
    if (document.addEventListener) {                //兼容主流浏览器
        document.addEventListener('DOMContentLoaded',
            function a() {
                document.removeEventListener('DOMContentLoaded', a, false);
                main()
                // console.log('DOMContentLoaded')
            }
            , false);
    }

    else if (document.attachEvent) {                //兼容IE8+
        document.attachEvent('onreadystatechange', function a() {
            if (document.readyState === 'complete') {
                document.detachEvent('onreadystatechange', a);
                main()
                // console.log('onreadystatechange')
            }
        });

        if (document.documentElement.doScroll && typeof window.frameElement === 'undefined') { //兼容低版本IE
            try {
                document.documentElement.doScroll('left');
            } catch (e) {
                return setTimeout(ready, 50);
            }
            main()
            // console.log('doScroll')
        }
    }
}

export default {
    run
}


