function debounce(fn, delay){
    let timeoutid;
    
    return function(...args){
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() =>{
            fn.apply(this, args);
        }, delay);
    };
}

MediaSourceHandle.exports = debounce;