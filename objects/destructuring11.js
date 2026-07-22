const settings = {theme:'dark'};

//find 'volume', rename it to 'soundLevel', and default to 50 if missing

const { theme, volume:soundLevel = 50 } = settings;

console.log(soundLevel);//50
