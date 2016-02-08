var baseArray = [1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0];

document.getElementsByClassName("before")[0].innerText = baseArray;
document.getElementsByClassName("runInvert")[0].addEventListener("click", function(){
    var val = document.getElementsByClassName("toChange")[0].value;
    var indices = val.split(" ").map(function(el){
                                    return +el;
                                });

    function invertMany(arr, invertIndices){
        var res = arr.slice();
        invertIndices.forEach(function(el){
            res[el] = res[el] === 0 ? 1 : 0;
        });
        return res;
    }
    document.getElementsByClassName("after")[0].innerText = invertMany(baseArray, indices);
});