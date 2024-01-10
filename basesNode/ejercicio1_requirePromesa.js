const { multiplicarPromesa, multiplicarPromesa2 } = require('./helpers/multiplicar');

console.clear();

multiplicarPromesa(4).
    then((response) => console.log(response)).
    catch((error) => console.error(error));

multiplicarPromesa2(8).
    then((response) => console.log(response)).
    catch((error) => console.error(error));