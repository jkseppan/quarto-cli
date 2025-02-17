/*
* render.latex-output.test.ts
*
* Copyright (C) 2020 by RStudio, PBC
*
*/

import { docs } from "../../utils.ts";
import { renderVerifyLatexOutput } from "./render.ts";

renderVerifyLatexOutput(docs("latex-output/captionless-margin-image.qmd"), [
  /\\begin{marginfigure}/,
]);
renderVerifyLatexOutput(docs("latex-output/figure-div.qmd"), [
  /{\\centering/,
  /\\caption{\\label{fig-foo}This is the figure}/,
  /See Figure~\\ref{fig-foo} for more\./,
]);

// All captions should be placed at the bottom
// Note that the 'D' or '\\' are present after the caption command because one of the
// test tables purposely msisses the caption handling to be sure that we don't
// completely destory the document. Be sure that any test document captions that must be
// moved started with D or have a label.
renderVerifyLatexOutput(docs("latex-output/table-captions.qmd"), [
  /\\end{document}/,
], [
  /\\begin{longtable}.*\s\\caption{[D\\]/,
]);
