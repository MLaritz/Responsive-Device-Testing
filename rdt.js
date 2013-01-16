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
        frame.style.overflow = 'hidden';
        frame.scrolling = 'no';

        var div = document.createElement('div');
        div.style.margin = '0 auto';
        div.style.textAlign = 'center';
        div.style.backgroundColor = '#333';
        div.appendChild(frame);

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