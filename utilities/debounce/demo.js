const debounce = require("./debounce")

function search(query){
    console.log("searching for:", query);
}

const debouncedSearch = debounce(search,1000);

debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("react");