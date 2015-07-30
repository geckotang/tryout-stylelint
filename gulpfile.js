'use strict';

var gulp = require('gulp');
var postcss = require("gulp-postcss");
var stylelint = require("stylelint");
var reporter = require("postcss-reporter");

gulp.task("css", function () {

  return gulp.src("./css/**/*.css")
    .pipe(postcss([
      // 0 - turn the rule off.
      // 2 - turn the rule on as an error (exit code is 1 when triggered).
      stylelint({
        "rules": {
          // ブロックのインデント2スペース, 値のインデント2スペース
          "indentation": [2, 2, {
            // セレクタの階層のインデント: 許可
            "hierarchicalSelectors": true
          }],
          // 0.5などの小数点の場合、0を省いて.5を許可しない
          "number-leading-zero": [2, "always"],
          // 宣言のコロンの前にスペースを入れない
          "declaration-colon-space-before": [2, "never"],
          // 宣言のコロンの前にスペースを入れる
          "declaration-colon-space-after": [2, "always"],
          // 0の場合、単位を許可しない
          "number-zero-length-no-unit": 2,
          // 1.0や1.50などの無駄な0を許可しない
          "number-no-trailing-zeros": 2,
          // ルールセットのないブロックを許可しない
          "block-no-empty": 2,
          // 波括弧関連の設定
          "block-closing-brace-newline-after": [ 2, "always-multi-line" ],
          "block-closing-brace-newline-before": [ 2, "always-multi-line" ],
          "block-closing-brace-space-before": [ 2, "always-single-line" ],
          "block-opening-brace-newline-after": [ 2, "always-multi-line" ],
          "block-opening-brace-space-after": [ 2, "always-single-line" ],
          "block-opening-brace-space-before": [ 2, "always" ],
          // カラーコードは小文字
          "color-hex-case": [ 2, "lower" ],
          // カラーコードで省略可能なら省略する
          "color-hex-length": [ 2, "short" ],
          // 不正なカラーコードはエラー
          "color-no-invalid-hex": 2,
          // !のあとにはスペースを入れない
          "declaration-bang-space-after": [ 2, "never" ],
          // !の前にスペースを入れる
          "declaration-bang-space-before": [ 2, "always" ],
          //url関数をクオーテーションで囲まない
          "function-url-quotes": [ 2, "none" ],
        }
      }),
      reporter({
        clearMessages: true
      })
    ]));

});
