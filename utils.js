// Function

// square root
export function square(x) {
  return x * x;
}

// plot
import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6.10/+esm";

export function funcpl(data, xx, yy, show, strokew) {return Plot.plot({
    marks: [
      Plot.frame(),
      show ? Plot.dot(data, {x: xx, y: yy}) : Plot.line(data, {x: xx, y: yy, z: "stroke_id", strokeWidth: strokew})
    ]
  })}

// conditional params

import * as Inputs from "https://cdn.jsdelivr.net/npm/@observablehq/inputs@0.10.6/+esm";

export function showpar(showparams){
  let inputs;
  if (showparams == "show") {
    inputs = Inputs.form([
      Inputs.range([0, 255], {step: 1, label: "r"}),
      Inputs.range([0, 255], {step: 1, label: "g"}),
      Inputs.range([0, 255], {step: 1, label: "b"}),
      Inputs.range([0, 255], {step: 1, label: "r"}),
      Inputs.range([0, 255], {step: 1, label: "g"}),
      Inputs.range([0, 255], {step: 1, label: "b"})
    ]);
  } else {
    inputs = Inputs.select(["a", "b"], {label: "Par:"});
  }
  return inputs;
}

// arquero
import * as arquero from "https://cdn.jsdelivr.net/npm/arquero@5.2.0/+esm";

export function desc_stats(dt, grup) {
  let dt_desc;
  dt_desc = dt
  .groupby(grup)
  .rollup({
    count: d => op.count(),
    depth_min: d => Math.round(op.min(d.depth) * 100) / 100,
    depth_max: d => Math.round(op.max(d.depth) * 100) / 100,
    qc_min: d => Math.round(op.min(d.qc) * 100) / 100,
    qc_q05: d => Math.round(op.quantile(d.qc, 0.05) * 100) / 100,
    qc_q10: d => Math.round(op.quantile(d.qc, 0.10) * 100) / 100,
    qc_med: d => Math.round(op.median(d.qc) * 100) / 100,
    qc_q90: d => Math.round(op.quantile(d.qc, 0.90) * 100) / 100,
    qc_q95: d => Math.round(op.quantile(d.qc, 0.95) * 100) / 100,
    qc_max: d => Math.round(op.max(d.qc) * 100) / 100,
  })

  return dt_desc;
}

