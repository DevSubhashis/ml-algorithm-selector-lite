# 🧠 ML Algorithm Selector Lite  
> EDA → ML Algorithm Decision Engine

A lightweight, interactive **React-based decision engine** that helps you choose the **right Machine Learning algorithm** based on **EDA insights and dataset characteristics**.

🔗 **Live Demo:**  
https://github.com/DevSubhashis/ml-algorithm-selector-lite

---

## 🚀 What is this project?

**ML Algorithm Selector Lite** is an educational and practical tool that bridges the gap between **Exploratory Data Analysis (EDA)** and **Machine Learning model selection**.

Instead of blindly trying algorithms, this app:
- Takes **dataset characteristics as inputs**
- Applies **rule-based ML knowledge**
- Ranks algorithms with **explanations and confidence scores**
- Generates **auto-notes, tips, and comparison checklists**

Think of it as a **ML decision assistant for beginners and practitioners**.

---

## 🎯 Key Objectives

- Convert **EDA observations → algorithm decisions**
- Explain **why** an algorithm is recommended
- Teach **ML intuition**, not just outputs
- Provide a **safe baseline-first mindset**

---

## 🧩 Features

### 🔍 Dataset Characteristics Input
- Problem Type  
  - Classification
  - Regression
  - Clustering
  - Time-Series
- Feature Distribution  
  - Gaussian
  - Non-Gaussian
- Error Cost Focus  
  - False Positives
  - False Negatives
- Special Conditions  
  - Class Imbalance
  - High Dimensional Data (p ≫ n)

---

### 🤖 Algorithm Recommendation Engine
- Rule-based knowledge system
- Weighted scoring for each rule
- Algorithms ranked by **confidence score**
- Each recommendation includes **clear reasoning**

Example output:
- **Random Forest – 85%**
  - Trees make no distribution assumptions
  - Better recall for imbalanced data

---

### 📘 Auto-Generated ML Notes
Context-aware notes generated dynamically, such as:
- Why accuracy fails with imbalance
- Why Gaussian assumptions matter
- Why time-series needs special validation
- Why regularization is mandatory for p ≫ n

---

### 💡 Tips & Tricks Section
Practical ML wisdom like:
- Always compare with a simple baseline
- EDA matters more than hyperparameter tuning
- Cross-validation beats a single split
- Tree models are safest for messy data

---

### 🧪 Model Comparison Checklist
Quick reminders on **what to tune and why**:
- Logistic / Linear → L1 vs L2
- LDA / QDA → Gaussian & covariance check
- Trees → max depth, min samples
- Random Forest → n_estimators, max_features
- Boosting → learning rate first
- SVM → C and kernel
- K-Means → K and distance metric
- Time-Series → trend & seasonality

---

## 🛠 Tech Stack

- **React (Functional Components)**
- **Pure CSS** (no external UI libraries)
- **Rule-based ML knowledge engine**
- No backend, no API — **fully client-side**

---


## 🧪 How the Decision Engine Works (High Level)

1. User selects dataset characteristics
2. Each rule checks if conditions match
3. Matching rules contribute weighted scores
4. Algorithms accumulate scores
5. Results are ranked and explained

This mimics **how an ML expert reasons**, not how AutoML brute-forces.

---

## 🎓 Who is this for?

- ML beginners learning **EDA-driven thinking**
- Students preparing for **ML interviews**
- Practitioners needing a **quick sanity check**
- Educators explaining **algorithm selection logic**

---

## ⚠️ Disclaimer

This tool is **educational**, not a replacement for:
- Proper experimentation
- Domain knowledge
- Model validation

Always validate recommendations with real data.

---

## 🌱 Future Enhancements (Ideas)

- Add EDA plots integration
- Dataset upload support
- Confidence threshold explanations
- Bias–Variance visualization
- Feature selection suggestions

---

## 👨‍💻 Author

**Subhashis Routh**  
Software Engineer | ML & System Design Enthusiast  

GitHub: https://github.com/DevSubhashis

---

## ⭐ If you find this useful

- Star ⭐ the repo  
- Fork 🍴 and experiment  
- Use it as a learning companion  

Happy Learning 🚀


