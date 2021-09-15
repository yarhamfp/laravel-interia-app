const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.sass", "public/css", [
        //
    ]);

mix.browserSync("127.0.0.1:8000");
