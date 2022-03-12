const express = require('express');
const app = express();
require("./routes")(app);

//add hot reloading for local environment
if (process.env.APP_ENV == 'local') {
    console.log("local server...");
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
