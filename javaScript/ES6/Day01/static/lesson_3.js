var arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 不支持 break 与 continue
arr.forEach(function (item) {
        console.log(item);
});

// every

// for in