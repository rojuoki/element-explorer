// convert.js
// IMF の「Primary Commodity Prices」CSVから、
// Element Explorer 用の metal_prices.json を作るスクリプト

const fs = require("fs");

const INPUT_FILE = "imf_prices.csv";      // あなたが保存したCSV
const OUTPUT_FILE = "metal_prices.json";  // 出力JSON

// ヘッダー名 → Element Explorer で使う記号
// あなたのCSVヘッダーに合わせてあるので、このままでOK
const TARGET_COLUMNS = {
  PALUM: "Al",     // アルミニウム
  PCOPP: "Cu",     // 銅
  PNICK: "Ni",     // ニッケル
  PLEAD: "Pb",     // 鉛
  PZINC: "Zn",     // 亜鉛
  PTIN: "Sn",      // スズ
  PGOLD: "Au",     // 金
  PSILVER: "Ag",   // 銀
  PLMMODY: "Mo",   // モリブデン
  PCOBA: "Co",     // コバルト
  PIORECR: "Fe_ore", // 鉄鉱石（元素じゃないので別名）
  PURAN: "U"       // ウラン
};

// ---- CSV 読み込み ----
const raw = fs.readFileSync(INPUT_FILE, "utf8");

// 行に分割（空行は除外）
const lines = raw
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l.length > 0);

if (lines.length < 2) {
  console.error("CSV の行数が足りません");
  process.exit(1);
}

// 1行目: ヘッダー
const headerLine = lines[0];
const headers = headerLine.split(",").map((h) => h.trim());
console.log("ヘッダー行:", headerLine);

// ヘッダー名 → 列インデックスのマップを作る
const headerIndex = {};
headers.forEach((name, idx) => {
  headerIndex[name] = idx;
});

// 「日付」が入っている列（IMFのこのCSVでは先頭が 'Commodity'）
const dateColIndex = headerIndex["Commodity"] ?? 0;

// 出力オブジェクト初期化
const result = {};
Object.values(TARGET_COLUMNS).forEach((symbol) => {
  result[symbol] = [];
});

// ---- データ行をパース ----
// このCSVは、2行目以降に説明行（Commodity.Description, Data Type, Frequency）などがあるので
// 「1列目が '1990M1' みたいな形の行だけ」をデータとして扱う。
for (let i = 1; i < lines.length; i++) {
  const cols = lines[i].split(",").map((c) => c.trim());
  const rawDate = cols[dateColIndex];

  // 例: 1990M1, 2005M12 など → こういう形だけを使う
  if (!/^\d{4}M\d{1,2}$/.test(rawDate)) {
    continue; // 説明行などは飛ばす
  }

  // "1990M1" → "1990-01" に変換
  const [yStr, mStr] = rawDate.split("M");
  const year = parseInt(yStr, 10);
  const month = parseInt(mStr, 10);
  if (!year || !month) continue;
  const date = `${year}-${String(month).padStart(2, "0")}`;

  // 各金属カラムを読み出し
  for (const [colName, symbol] of Object.entries(TARGET_COLUMNS)) {
    const idx = headerIndex[colName];
    if (idx == null) continue; // ヘッダーに存在しない場合

    const v = cols[idx];
    if (!v || v === "n/a") continue;

    const price = parseFloat(v);
    if (Number.isNaN(price)) continue;

    result[symbol].push({ date, price });
  }
}

// ---- JSON 出力 ----
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2), "utf8");
console.log("✅ 変換完了:", OUTPUT_FILE);
