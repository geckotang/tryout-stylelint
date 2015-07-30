```
$npm install
$npm run csslint
> @ csslint /Users/geckotang/Work/sandbox/tryout-stylelint
> gulp css

[01:39:54] Using gulpfile ~/Work/sandbox/tryout-stylelint/gulpfile.js
[01:39:54] Starting 'css'...

css/invalid-style.css
1:1	⚠  Expected single space before "{" (block-opening-brace-space-before) [stylelint]
2:3	⚠  Unexpected whitespace before ":" (declaration-colon-space-before) [stylelint]
2:3	⚠  Unexpected unit on zero length number (number-zero-length-no-unit) [stylelint]
3:3	⚠  Expected single space after ":" (declaration-colon-space-after) [stylelint]
4:3	⚠  Expected a leading zero (number-leading-zero) [stylelint]
5:3	⚠  Unexpected trailing zero(s) (number-no-trailing-zeros) [stylelint]
6:3	⚠  Unexpected trailing zero(s) (number-no-trailing-zeros) [stylelint]
8:1	⚠  Expected indentation of 2 spaces at line 8 (indentation) [stylelint]
8:1	⚠  Expected indentation of 2 spaces at line 10 (indentation) [stylelint]
9:3	⚠  Expected indentation of 4 spaces at line 9 (indentation) [stylelint]
11:3	⚠  Expected indentation of 4 spaces at line 11 (indentation) [stylelint]
11:3	⚠  Expected indentation of 4 spaces at line 13 (indentation) [stylelint]
11:3	⚠  Expected single space before "{" (block-opening-brace-space-before) [stylelint]
12:5	⚠  Expected indentation of 6 spaces at line 12 (indentation) [stylelint]
15:1	⚠  Expected single space after "{" of a single-line block (block-opening-brace-space-after) [stylelint]
17:1	⚠  Expected single space before "}" of a single-line block (block-closing-brace-space-before) [stylelint]
20:3	⚠  Expected "#FFFFFF" to be "#ffffff" (color-hex-case) [stylelint]
20:3	⚠  Expected "#FFFFFF" to be "#FFF" (color-hex-length) [stylelint]
21:3	⚠  Expected "#000000" to be "#000" (color-hex-length) [stylelint]
26:3	⚠  Expected single space before "!" (declaration-bang-space-before) [stylelint]
27:3	⚠  Unexpected whitespace after "!" (declaration-bang-space-after) [stylelint]
31:3	⚠  Expected no quotes around url argument (function-url-quotes) [stylelint]
32:3	⚠  Expected no quotes around url argument (function-url-quotes) [stylelint]

[01:39:54] Finished 'css' after 70 ms
```
