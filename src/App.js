import React, { useState } from "react";

/*
 FULL REGENERATED VERSION
 - Pure React + Pure CSS
 - Context-aware Tips & Tricks (with reasons)
 - Model Comparison Checklist (what to tune & why)
*/

const KNOWLEDGE_BASE = [
  { id: "lda", weight: 0.9, when: { problemType: "classification", gaussian: true }, algorithms: ["LDA"], why: "Gaussian data allows optimal linear boundaries." },
  { id: "qda", weight: 0.85, when: { problemType: "classification", gaussian: true }, algorithms: ["QDA"], why: "Different class spread requires curved boundaries." },
  { id: "tree", weight: 0.8, when: { gaussian: false }, algorithms: ["Decision Tree", "Random Forest", "Gradient Boosting"], why: "Trees make no distribution assumptions." },
  { id: "imbalance", weight: 0.75, when: { classImbalance: true }, algorithms: ["Logistic (class_weight)", "Random Forest (balanced)", "XGBoost"], why: "Imbalance skews learning toward majority class." },
  { id: "p_gt_n", weight: 0.88, when: { pGreaterThanN: true }, algorithms: ["Ridge", "Lasso", "ElasticNet"], why: "Too many features increase variance → regularization needed." },
  { id: "fp", weight: 0.7, when: { errorFocus: "fp" }, algorithms: ["Logistic Regression", "Linear SVM"], why: "Precision reduces false alarms." },
  { id: "fn", weight: 0.7, when: { errorFocus: "fn" }, algorithms: ["Random Forest", "Boosting"], why: "Recall reduces missed positives." },
  { id: "regression", weight: 0.9, when: { problemType: "regression" }, algorithms: ["Linear Regression", "Random Forest Regressor", "XGBoost Regressor"], why: "Baseline + non-linear regressors cover most cases." },
  { id: "clustering", weight: 0.85, when: { problemType: "clustering" }, algorithms: ["K-Means", "DBSCAN", "Hierarchical"], why: "Cluster shape and density drive algorithm choice." },
  { id: "time", weight: 0.9, when: { problemType: "time-series" }, algorithms: ["ARIMA", "Prophet", "LSTM"], why: "Temporal dependency breaks random split assumptions." }
];

export default function App() {
  const [state, setState] = useState({
    problemType: "classification",
    gaussian: true,
    classImbalance: false,
    pGreaterThanN: false,
    errorFocus: "fp"
  });

  /* ---------------- Algorithm Ranking ---------------- */
  const scored = {};
  KNOWLEDGE_BASE.forEach(rule => {
    const match = Object.entries(rule.when).every(([k, v]) => state[k] === v);
    if (match) {
      rule.algorithms.forEach(algo => {
        if (!scored[algo]) scored[algo] = { score: 0, reasons: [] };
        scored[algo].score += rule.weight;
        scored[algo].reasons.push(rule.why);
      });
    }
  });

  const ranked = Object.entries(scored).sort((a, b) => b[1].score - a[1].score);

  return (
    <div className="page">
      <style>{css}</style>

      <h1 className="title">🧠 EDA → ML Algorithm Decision Engine</h1>

      <div className="layout">
        {/* Controls */}
        <div className="card">
          <h2>Dataset Characteristics</h2>

          <label>Problem Type</label>
          <select onChange={e => setState({ ...state, problemType: e.target.value })}>
            <option value="classification">Classification</option>
            <option value="regression">Regression</option>
            <option value="clustering">Clustering</option>
            <option value="time-series">Time-Series</option>
          </select>

          <label>Feature Distribution</label>
          <select onChange={e => setState({ ...state, gaussian: e.target.value === "gaussian" })}>
            <option value="gaussian">Gaussian</option>
            <option value="non">Non-Gaussian</option>
          </select>

          <label>Error Cost Focus</label>
          <select onChange={e => setState({ ...state, errorFocus: e.target.value })}>
            <option value="fp">False Positives</option>
            <option value="fn">False Negatives</option>
          </select>

          <div className="checkbox">
            <input type="checkbox" onChange={e => setState({ ...state, classImbalance: e.target.checked })} /> Class Imbalance
          </div>
          <div className="checkbox">
            <input type="checkbox" onChange={e => setState({ ...state, pGreaterThanN: e.target.checked })} /> p ≫ n (High Dimensional)
          </div>
        </div>

        {/* Recommendations */}
        <div className="card">
          <h2>Recommended Models</h2>
          {ranked.length === 0 && <p className="muted">Select options to see recommendations</p>}
          {ranked.map(([algo, info]) => (
            <div key={algo} className="result">
              <div className="result-header">
                <strong>{algo}</strong>
                <span>{Math.round(info.score * 100)}%</span>
              </div>
              <ul>
                {info.reasons.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Notes & Tips */}
        <div className="card full">
          <h2>📘 Auto-Generated ML Notes & Tips</h2>

          <ul className="notes">
            {state.problemType === "classification" && <li><strong>Classification:</strong> Metrics must be chosen first because accuracy can hide imbalance.</li>}
            {state.problemType === "regression" && <li><strong>Regression:</strong> Linear models reveal bias–variance behavior.</li>}
            {state.problemType === "clustering" && <li><strong>Clustering:</strong> No labels exist, validation relies on structure.</li>}
            {state.problemType === "time-series" && <li><strong>Time-Series:</strong> Random splits cause leakage.</li>}
            {!state.gaussian && <li><strong>Non-Gaussian:</strong> Tree models work better due to no distribution assumptions.</li>}
            {state.gaussian && <li><strong>Gaussian:</strong> Linear & discriminant models are statistically efficient.</li>}
            {state.classImbalance && <li><strong>Imbalance:</strong> Use Precision/Recall instead of Accuracy.</li>}
            {state.errorFocus === "fp" && <li><strong>FP Costly:</strong> Precision minimizes false alarms.</li>}
            {state.errorFocus === "fn" && <li><strong>FN Costly:</strong> Recall avoids missing positives.</li>}
            {state.pGreaterThanN && <li><strong>p ≫ n:</strong> Regularization or PCA is mandatory.</li>}
          </ul>

          <h3 className="tips-title">💡 Tips & Tricks</h3>
          <ul className="tips">
            <li>Always compare against a simple baseline.</li>
            <li>EDA quality matters more than hyperparameter tuning.</li>
            <li>Cross-validation beats a single split.</li>
            <li>Tree models are safest for messy real-world data.</li>
          </ul>

          <h3 className="tips-title">🧪 Model Comparison Checklist</h3>
          <ul className="checklist">
            <li><strong>Linear / Logistic:</strong> Tune L1 vs L2 regularization.</li>
            <li><strong>LDA / QDA:</strong> Validate Gaussian assumption & covariance.</li>
            <li><strong>Decision Tree:</strong> Tune max depth, min samples per leaf.</li>
            <li><strong>Random Forest:</strong> Tune n_estimators, max_features.</li>
            <li><strong>Boosting:</strong> Tune learning rate before adding trees.</li>
            <li><strong>SVM:</strong> Tune C and kernel choice.</li>
            <li><strong>K-Means:</strong> Experiment with K and distance metric.</li>
            <li><strong>Time-Series Models:</strong> Validate trend & seasonality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const css = `
* { box-sizing: border-box; font-family: system-ui, sans-serif; }
.page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: #e5e7eb;
  padding: 40px;
}
.title { text-align: center; font-size: 32px; margin-bottom: 40px; }
.layout {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.card {
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 14px;
  padding: 24px;
}
.card.full { grid-column: 1 / -1; }
label { display: block; margin-top: 12px; margin-bottom: 6px; }
select {
  width: 100%; padding: 8px; background: #020617; color: #e5e7eb;
  border: 1px solid #334155; border-radius: 6px;
}
.checkbox { margin-top: 12px; }
.result { margin-top: 16px; padding: 14px; border: 1px solid #1e293b; border-radius: 10px; }
.result-header { display: flex; justify-content: space-between; color: #22c55e; }
.result ul { margin-top: 8px; padding-left: 18px; }
.muted { color: #94a3b8; }
.notes li { color: #c7d2fe; margin-bottom: 6px; }
.tips-title { margin-top: 18px; }
.tips li { color: #86efac; margin-bottom: 6px; }
.checklist li { color: #fcd34d; margin-bottom: 6px; }
@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
}
`;
