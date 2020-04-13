class Server {
    async jsonp($add) {
        let script = document.createElement('script');
        let funcName = 'counter_' + parseInt((Math.random() * 1000000).toString(), 10);
        window[funcName] = function (data) {
            const dom_uv = document.getElementById('counter-site-uv');
            const dom_page_pv = document.getElementById('counter-page-pv');
            const dom_site_pv = document.getElementById('counter-site-pv');
            // if (!uv){
            //     return 0;
            // }
            // console.log(dom_uv);
            dom_uv.innerHTML = data.site_uv;
            dom_page_pv.innerHTML = data.page_pv;
            dom_site_pv.innerHTML = data.site_pv;
        };
        let url = "https://api.sevth.com/v1/counter?callback=" + funcName;
        if (!$add) {
            url += '&add=1';
        }
        script.src = url;
        document.getElementsByTagName('HEAD')[0].appendChild(script);
        // document.body.appendChild();
        script.onload = function (e) {
            e.currentTarget.remove();
            delete window[funcName];
        };
        script.onerror = function (e) {
            e.currentTarget.remove();
            delete window[funcName];
        };

        return funcName;
    }
}

export default Server