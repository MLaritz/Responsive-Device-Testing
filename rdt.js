var rdt = function() {

    var copyUrl = function() {
        return window.location.href;
    }

    var removeBody = function() {
        var bodyChildren = document.body.children;
        var len = bodyChildren.length;
        for (var i = 1; i <= len; i++) {
            var child = bodyChildren[len - i];
            child.parentNode.removeChild(child);
        }
    };

    var addIFrame = function() {
        var url = copyUrl();
        var frame = document.createElement('iframe');
        frame.src = url;
        frame.style.width = '320px';
        frame.style.height = '480px';
        frame.style.backgroundColor = '#fff';

        var div = document.createElement('div');
        div.style.margin = '0 auto';
        div.style.textAlign = 'center';
        div.appendChild(frame);

        var refresh = document.createElement('a');
        refresh.style.color = '#fff';
        refresh.innerHTML = 'Refresh the Frame';
        refresh.href = 'javascript:document.getElementById(\'responsiveFrame\').src += \' \'';
        refresh.style.float = 'right';
        div.appendChild(refresh);

        var iphone = document.createElement('a');
        iphone.style.color = '#fff';
        iphone.innerHTML = 'iPhone - Portrait';
        iphone.href = 'javascript: document.getElementById(\'responsiveFrame\').style.width=\'320px\';document.getElementById(\'responsiveFrame\').style.height=\'480px\';';
        iphone.style.float = 'right';
        iphone.style.clear = 'right';
        iphone.style.margin = '10px 0 0 0';
        div.appendChild(iphone);

        var iphone = document.createElement('a');
        iphone.style.color = '#fff';
        iphone.innerHTML = 'iPhone - Landscape';
        iphone.href = 'javascript: document.getElementById(\'responsiveFrame\').style.width=\'480px\';document.getElementById(\'responsiveFrame\').style.height=\'320px\';';
        iphone.style.float = 'right';
        iphone.style.clear = 'right';
        div.appendChild(iphone);

        var iphone = document.createElement('a');
        iphone.style.color = '#fff';
        iphone.innerHTML = 'iPhone 5 - Portrait';
        iphone.href = 'javascript: document.getElementById(\'responsiveFrame\').style.width=\'320px\';document.getElementById(\'responsiveFrame\').style.height=\'568px\';';
        iphone.style.float = 'right';
        iphone.style.clear = 'right';
        iphone.style.margin = '10px 0 0 0';
        div.appendChild(iphone);

        var iphone = document.createElement('a');
        iphone.style.color = '#fff';
        iphone.innerHTML = 'iPhone 5 - Landscape';
        iphone.href = 'javascript: document.getElementById(\'responsiveFrame\').style.width=\'568px\';document.getElementById(\'responsiveFrame\').style.height=\'320px\';';
        iphone.style.float = 'right';
        iphone.style.clear = 'right';
        div.appendChild(iphone);

        var iphone = document.createElement('a');
        iphone.style.color = '#fff';
        iphone.innerHTML = 'iPad - Portrait';
        iphone.href = 'javascript: document.getElementById(\'responsiveFrame\').style.width=\'768px\';document.getElementById(\'responsiveFrame\').style.height=\'1024px\';';
        iphone.style.float = 'right';
        iphone.style.clear = 'right';
        iphone.style.margin = '10px 0 0 0';
        div.appendChild(iphone);

        var iphone = document.createElement('a');
        iphone.style.color = '#fff';
        iphone.innerHTML = 'iPad - Landscape';
        iphone.href = 'javascript: document.getElementById(\'responsiveFrame\').style.width=\'1024px\';document.getElementById(\'responsiveFrame\').style.height=\'768px\';';
        iphone.style.float = 'right';
        iphone.style.clear = 'right';
        div.appendChild(iphone);

        document.body.style.backgroundColor = '#333';
        document.body.style.background = '#333';
        document.body.style.backgroundImage = 'none';
        document.body.appendChild(div);
    };

    var go = function() {
        removeBody();
        addIFrame();
    };

    return {
        go: go
    };

}();