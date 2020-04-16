function bind(obj,eventName,callback) {
    if(obj.addEventListener) {
        obj.addEventListener(eventName,callback,false);
    }else {
        obj.attachEvent("on" + eventName,function () {
            callback.call(obj);
        });
    }
}