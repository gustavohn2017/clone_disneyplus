// Importa o módulo 'gulp' e o armazena na constante Gulp
const gulp = require('gulp');

// Importa o módulo 'gulp-sass' e o configura para usar a implementação 'sass'
// A função require('sass') é passada como argumento para gulp-sass
const sass = require('gulp-sass')(require('sass'));

//plugin de minificação de imagens do sass
const imagemin = require('gulp-imagemin');

// Define a função 'styles' que processa arquivos SASS
function styles() {
    // Gulp obtém os arquivos SASS na pasta './src/styles/' com extensão '.scss'
    return gulp.src('./src/styles/*.scss')
        // Compila os arquivos SASS para CSS e comprime o resultado
        .pipe(sass({ outputStyle: 'compressed' }))
        // Salva o arquivo CSS compilado na pasta './src/styles'
        .pipe(gulp.dest('./dist/styles'));
}

// Exporta a função 'styles' como a tarefa padrão do Gulp
exports.default = styles;

//Observador
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}


// Função 'images' que processa arquivos de imagem
function images() {
    return gulp.src('./src/images/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Exporta as funções como tarefas do Gulp
exports.default = gulp.parallel(styles, images);

// Observador
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/**/*.{png,jpg,jpeg,gif,svg}', gulp.parallel(images));
}
