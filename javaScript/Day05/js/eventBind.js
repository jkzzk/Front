function bind(obj,eventName,callback) {
    if(obj.addEventListener) {
        obj.addEventListener(eventName,callback,false);
    }else {
        obj.attachEvent("on" + eventName,function () {
            callback.call(obj);
        });
    }
}

function unbind(obj,eventName,callback) {
    if(obj.removeEventListener) {
        obj.removeEventListener(eventName,callback,false);
    }else {
        obj.detachEvent("on" + eventName,function () {
            callback.call(obj);
        });
    }
}