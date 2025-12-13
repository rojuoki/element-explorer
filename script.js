// ===============================
// 元素データ（1〜83）
// ===============================
const ELEMENTS_DATA = [
  {
    n: 1,
    s: "H",
    ja: "水素",
    en: "Hydrogen",
    period: 1,
    group: 1,
    category: "非金属",
    mass: 1.008,
    state: "気体",
    density: "0.0000899 g/cm³",
    melting_c: -259.1,
    boiling_c: -252.9
  },
  {
    n: 2,
    s: "He",
    ja: "ヘリウム",
    en: "Helium",
    period: 1,
    group: 18,
    category: "希ガス",
    mass: 4.0026,
    state: "気体",
    density: "0.0001785 g/cm³",
    melting_c: null,
    boiling_c: -268.9
  },

  {
    n: 3,
    s: "Li",
    ja: "リチウム",
    en: "Lithium",
    period: 2,
    group: 1,
    category: "アルカリ金属",
    mass: 6.94,
    state: "固体",
    density: "0.534 g/cm³",
    melting_c: 180.5,
    boiling_c: 1342
  },
  {
    n: 4,
    s: "Be",
    ja: "ベリリウム",
    en: "Beryllium",
    period: 2,
    group: 2,
    category: "アルカリ土類金属",
    mass: 9.0122,
    state: "固体",
    density: "1.85 g/cm³",
    melting_c: 1287,
    boiling_c: 2469
  },
  {
    n: 5,
    s: "B",
    ja: "ホウ素",
    en: "Boron",
    period: 2,
    group: 13,
    category: "半金属",
    mass: 10.81,
    state: "固体",
    density: "2.34 g/cm³",
    melting_c: 2076,
    boiling_c: 3927
  },
  {
    n: 6,
    s: "C",
    ja: "炭素",
    en: "Carbon",
    period: 2,
    group: 14,
    category: "非金属",
    mass: 12.011,
    state: "固体",
    density: "2.26 g/cm³（黒鉛）",
    melting_c: null,
    boiling_c: 3825
  },
  {
    n: 7,
    s: "N",
    ja: "窒素",
    en: "Nitrogen",
    period: 2,
    group: 15,
    category: "非金属",
    mass: 14.007,
    state: "気体",
    density: "0.001251 g/cm³",
    melting_c: -210.0,
    boiling_c: -195.8
  },
  {
    n: 8,
    s: "O",
    ja: "酸素",
    en: "Oxygen",
    period: 2,
    group: 16,
    category: "非金属",
    mass: 15.999,
    state: "気体",
    density: "0.001429 g/cm³",
    melting_c: -218.4,
    boiling_c: -183.0
  },
  {
    n: 9,
    s: "F",
    ja: "フッ素",
    en: "Fluorine",
    period: 2,
    group: 17,
    category: "ハロゲン",
    mass: 18.998,
    state: "気体",
    density: "0.001696 g/cm³",
    melting_c: -219.6,
    boiling_c: -188.1
  },
  {
    n: 10,
    s: "Ne",
    ja: "ネオン",
    en: "Neon",
    period: 2,
    group: 18,
    category: "希ガス",
    mass: 20.18,
    state: "気体",
    density: "0.0009 g/cm³",
    melting_c: -248.6,
    boiling_c: -246.1
  },

  {
    n: 11,
    s: "Na",
    ja: "ナトリウム",
    en: "Sodium",
    period: 3,
    group: 1,
    category: "アルカリ金属",
    mass: 22.99,
    state: "固体",
    density: "0.968 g/cm³",
    melting_c: 97.8,
    boiling_c: 883
  },
  {
    n: 12,
    s: "Mg",
    ja: "マグネシウム",
    en: "Magnesium",
    period: 3,
    group: 2,
    category: "アルカリ土類金属",
    mass: 24.305,
    state: "固体",
    density: "1.74 g/cm³",
    melting_c: 650,
    boiling_c: 1091
  },
  {
    n: 13,
    s: "Al",
    ja: "アルミニウム",
    en: "Aluminum",
    period: 3,
    group: 13,
    category: "金属",
    mass: 26.982,
    state: "固体",
    density: "2.70 g/cm³",
    melting_c: 660.3,
    boiling_c: 2470
  },
  {
    n: 14,
    s: "Si",
    ja: "ケイ素",
    en: "Silicon",
    period: 3,
    group: 14,
    category: "半金属",
    mass: 28.085,
    state: "固体",
    density: "2.33 g/cm³",
    melting_c: 1414,
    boiling_c: 3265
  },
  {
    n: 15,
    s: "P",
    ja: "リン",
    en: "Phosphorus",
    period: 3,
    group: 15,
    category: "非金属",
    mass: 30.974,
    state: "固体",
    density: null,
    melting_c: 44.1,
    boiling_c: 280.5
  },
  {
    n: 16,
    s: "S",
    ja: "硫黄",
    en: "Sulfur",
    period: 3,
    group: 16,
    category: "非金属",
    mass: 32.06,
    state: "固体",
    density: "2.07 g/cm³",
    melting_c: 115.2,
    boiling_c: 444.6
  },
  {
    n: 17,
    s: "Cl",
    ja: "塩素",
    en: "Chlorine",
    period: 3,
    group: 17,
    category: "ハロゲン",
    mass: 35.45,
    state: "気体",
    density: "0.00321 g/cm³",
    melting_c: -101.5,
    boiling_c: -34.0
  },
  {
    n: 18,
    s: "Ar",
    ja: "アルゴン",
    en: "Argon",
    period: 3,
    group: 18,
    category: "希ガス",
    mass: 39.948,
    state: "気体",
    density: "0.00178 g/cm³",
    melting_c: -189.3,
    boiling_c: -185.8
  },

  {
    n: 19,
    s: "K",
    ja: "カリウム",
    en: "Potassium",
    period: 4,
    group: 1,
    category: "アルカリ金属",
    mass: 39.098,
    state: "固体",
    density: "0.862 g/cm³",
    melting_c: 63.5,
    boiling_c: 759
  },
  {
    n: 20,
    s: "Ca",
    ja: "カルシウム",
    en: "Calcium",
    period: 4,
    group: 2,
    category: "アルカリ土類金属",
    mass: 40.078,
    state: "固体",
    density: "1.55 g/cm³",
    melting_c: 842,
    boiling_c: 1484
  },
  {
    n: 21,
    s: "Sc",
    ja: "スカンジウム",
    en: "Scandium",
    period: 4,
    group: 3,
    category: "遷移金属",
    mass: 44.956,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 22,
    s: "Ti",
    ja: "チタン",
    en: "Titanium",
    period: 4,
    group: 4,
    category: "遷移金属",
    mass: 47.867,
    state: "固体",
    density: "4.51 g/cm³",
    melting_c: 1668,
    boiling_c: 3287
  },
  {
    n: 23,
    s: "V",
    ja: "バナジウム",
    en: "Vanadium",
    period: 4,
    group: 5,
    category: "遷移金属",
    mass: 50.942,
    state: "固体",
    density: "6.11 g/cm³",
    melting_c: 1910,
    boiling_c: 3407
  },
  {
    n: 24,
    s: "Cr",
    ja: "クロム",
    en: "Chromium",
    period: 4,
    group: 6,
    category: "遷移金属",
    mass: 51.996,
    state: "固体",
    density: "7.19 g/cm³",
    melting_c: 1907,
    boiling_c: 2671
  },
  {
    n: 25,
    s: "Mn",
    ja: "マンガン",
    en: "Manganese",
    period: 4,
    group: 7,
    category: "遷移金属",
    mass: 54.938,
    state: "固体",
    density: "7.21 g/cm³",
    melting_c: 1246,
    boiling_c: 2061
  },
  {
    n: 26,
    s: "Fe",
    ja: "鉄",
    en: "Iron",
    period: 4,
    group: 8,
    category: "遷移金属",
    mass: 55.845,
    state: "固体",
    density: "7.87 g/cm³",
    melting_c: 1538,
    boiling_c: 2862
  },
  {
    n: 27,
    s: "Co",
    ja: "コバルト",
    en: "Cobalt",
    period: 4,
    group: 9,
    category: "遷移金属",
    mass: 58.933,
    state: "固体",
    density: "8.86 g/cm³",
    melting_c: 1495,
    boiling_c: 2927
  },
  {
    n: 28,
    s: "Ni",
    ja: "ニッケル",
    en: "Nickel",
    period: 4,
    group: 10,
    category: "遷移金属",
    mass: 58.693,
    state: "固体",
    density: "8.90 g/cm³",
    melting_c: 1455,
    boiling_c: 2913
  },
  {
    n: 29,
    s: "Cu",
    ja: "銅",
    en: "Copper",
    period: 4,
    group: 11,
    category: "遷移金属",
    mass: 63.546,
    state: "固体",
    density: "8.96 g/cm³",
    melting_c: 1084,
    boiling_c: 2562
  },
  {
    n: 30,
    s: "Zn",
    ja: "亜鉛",
    en: "Zinc",
    period: 4,
    group: 12,
    category: "遷移金属",
    mass: 65.38,
    state: "固体",
    density: "7.14 g/cm³",
    melting_c: 419.5,
    boiling_c: 907
  },
  {
    n: 31,
    s: "Ga",
    ja: "ガリウム",
    en: "Gallium",
    period: 4,
    group: 13,
    category: "金属",
    mass: 69.723,
    state: "固体（室温近くで液体）",
    density: "5.91 g/cm³",
    melting_c: 29.8,
    boiling_c: 2204
  },
  {
    n: 32,
    s: "Ge",
    ja: "ゲルマニウム",
    en: "Germanium",
    period: 4,
    group: 14,
    category: "半金属",
    mass: 72.63,
    state: "固体",
    density: "5.32 g/cm³",
    melting_c: 938.3,
    boiling_c: 2833
  },
  {
    n: 33,
    s: "As",
    ja: "ヒ素",
    en: "Arsenic",
    period: 4,
    group: 15,
    category: "半金属",
    mass: 74.922,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 34,
    s: "Se",
    ja: "セレン",
    en: "Selenium",
    period: 4,
    group: 16,
    category: "非金属",
    mass: 78.971,
    state: "固体",
    density: "4.81 g/cm³",
    melting_c: 221,
    boiling_c: 685
  },
  {
    n: 35,
    s: "Br",
    ja: "臭素",
    en: "Bromine",
    period: 4,
    group: 17,
    category: "ハロゲン",
    mass: 79.904,
    state: "液体",
    density: "3.12 g/cm³",
    melting_c: -7.2,
    boiling_c: 58.8
  },
  {
    n: 36,
    s: "Kr",
    ja: "クリプトン",
    en: "Krypton",
    period: 4,
    group: 18,
    category: "希ガス",
    mass: 83.798,
    state: "気体",
    density: "0.00375 g/cm³",
    melting_c: -157.4,
    boiling_c: -153.4
  },

  {
    n: 37,
    s: "Rb",
    ja: "ルビジウム",
    en: "Rubidium",
    period: 5,
    group: 1,
    category: "アルカリ金属",
    mass: 85.468,
    state: "固体",
    density: null,
    melting_c: 39.3,
    boiling_c: 688
  },
  {
    n: 38,
    s: "Sr",
    ja: "ストロンチウム",
    en: "Strontium",
    period: 5,
    group: 2,
    category: "アルカリ土類金属",
    mass: 87.62,
    state: "固体",
    density: null,
    melting_c: 777,
    boiling_c: 1377
  },
  {
    n: 39,
    s: "Y",
    ja: "イットリウム",
    en: "Yttrium",
    period: 5,
    group: 3,
    category: "遷移金属",
    mass: 88.906,
    state: "固体",
    density: null,
    melting_c: 1526,
    boiling_c: 3338
  },
  {
    n: 40,
    s: "Zr",
    ja: "ジルコニウム",
    en: "Zirconium",
    period: 5,
    group: 4,
    category: "遷移金属",
    mass: 91.224,
    state: "固体",
    density: null,
    melting_c: 1855,
    boiling_c: 4409
  },
  {
    n: 41,
    s: "Nb",
    ja: "ニオブ",
    en: "Niobium",
    period: 5,
    group: 5,
    category: "遷移金属",
    mass: 92.906,
    state: "固体",
    density: null,
    melting_c: 2477,
    boiling_c: 4744
  },
  {
    n: 42,
    s: "Mo",
    ja: "モリブデン",
    en: "Molybdenum",
    period: 5,
    group: 6,
    category: "遷移金属",
    mass: 95.95,
    state: "固体",
    density: null,
    melting_c: 2623,
    boiling_c: 4639
  },
  {
    n: 43,
    s: "Tc",
    ja: "テクネチウム",
    en: "Technetium",
    period: 5,
    group: 7,
    category: "遷移金属",
    mass: 98,
    state: "固体",
    density: null,
    melting_c: 2157,
    boiling_c: 4265
  },
  {
    n: 44,
    s: "Ru",
    ja: "ルテニウム",
    en: "Ruthenium",
    period: 5,
    group: 8,
    category: "遷移金属",
    mass: 101.07,
    state: "固体",
    density: null,
    melting_c: 2334,
    boiling_c: 4150
  },
  {
    n: 45,
    s: "Rh",
    ja: "ロジウム",
    en: "Rhodium",
    period: 5,
    group: 9,
    category: "遷移金属",
    mass: 102.91,
    state: "固体",
    density: null,
    melting_c: 1964,
    boiling_c: 3695
  },
  {
    n: 46,
    s: "Pd",
    ja: "パラジウム",
    en: "Palladium",
    period: 5,
    group: 10,
    category: "遷移金属",
    mass: 106.42,
    state: "固体",
    density: null,
    melting_c: 1554.9,
    boiling_c: 2963
  },
  {
    n: 47,
    s: "Ag",
    ja: "銀",
    en: "Silver",
    period: 5,
    group: 11,
    category: "遷移金属",
    mass: 107.87,
    state: "固体",
    density: "10.49 g/cm³",
    melting_c: 961.8,
    boiling_c: 2162
  },
  {
    n: 48,
    s: "Cd",
    ja: "カドミウム",
    en: "Cadmium",
    period: 5,
    group: 12,
    category: "遷移金属",
    mass: 112.41,
    state: "固体",
    density: null,
    melting_c: 321.1,
    boiling_c: 767
  },
  {
    n: 49,
    s: "In",
    ja: "インジウム",
    en: "Indium",
    period: 5,
    group: 13,
    category: "金属",
    mass: 114.82,
    state: "固体",
    density: null,
    melting_c: 156.6,
    boiling_c: 2072
  },
  {
    n: 50,
    s: "Sn",
    ja: "スズ",
    en: "Tin",
    period: 5,
    group: 14,
    category: "金属",
    mass: 118.71,
    state: "固体",
    density: "7.31 g/cm³",
    melting_c: 231.9,
    boiling_c: 2602
  },
  {
    n: 51,
    s: "Sb",
    ja: "アンチモン",
    en: "Antimony",
    period: 5,
    group: 15,
    category: "半金属",
    mass: 121.76,
    state: "固体",
    density: null,
    melting_c: 630.6,
    boiling_c: 1587
  },
  {
    n: 52,
    s: "Te",
    ja: "テルル",
    en: "Tellurium",
    period: 5,
    group: 16,
    category: "半金属",
    mass: 127.6,
    state: "固体",
    density: null,
    melting_c: 449.5,
    boiling_c: 988
  },
  {
    n: 53,
    s: "I",
    ja: "ヨウ素",
    en: "Iodine",
    period: 5,
    group: 17,
    category: "ハロゲン",
    mass: 126.9,
    state: "固体（昇華しやすい）",
    density: "4.93 g/cm³",
    melting_c: 113.7,
    boiling_c: 184.3
  },
  {
    n: 54,
    s: "Xe",
    ja: "キセノン",
    en: "Xenon",
    period: 5,
    group: 18,
    category: "希ガス",
    mass: 131.29,
    state: "気体",
    density: null,
    melting_c: -111.7,
    boiling_c: -108.1
  },

  {
    n: 55,
    s: "Cs",
    ja: "セシウム",
    en: "Cesium",
    period: 6,
    group: 1,
    category: "アルカリ金属",
    mass: 132.91,
    state: "固体（柔らかい金属）",
    density: null,
    melting_c: 28.5,
    boiling_c: 671
  },
  {
    n: 56,
    s: "Ba",
    ja: "バリウム",
    en: "Barium",
    period: 6,
    group: 2,
    category: "アルカリ土類金属",
    mass: 137.33,
    state: "固体",
    density: null,
    melting_c: 727,
    boiling_c: 1870
  },
  {
    n: 57,
    s: "La",
    ja: "ランタン",
    en: "Lanthanum",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 138.91,
    state: "固体",
    density: null,
    melting_c: 920,
    boiling_c: 3469
  },
  {
    n: 58,
    s: "Ce",
    ja: "セリウム",
    en: "Cerium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 140.12,
    state: "固体",
    density: null,
    melting_c: 795,
    boiling_c: 3443
  },
  {
    n: 59,
    s: "Pr",
    ja: "プラセオジム",
    en: "Praseodymium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 140.91,
    state: "固体",
    density: null,
    melting_c: 935,
    boiling_c: 3520
  },
  {
    n: 60,
    s: "Nd",
    ja: "ネオジム",
    en: "Neodymium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 144.24,
    state: "固体",
    density: null,
    melting_c: 1024,
    boiling_c: 3074
  },
  {
    n: 61,
    s: "Pm",
    ja: "プロメチウム",
    en: "Promethium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 145,
    state: "固体",
    density: null,
    melting_c: 1042,
    boiling_c: 3000
  },
  {
    n: 62,
    s: "Sm",
    ja: "サマリウム",
    en: "Samarium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 150.36,
    state: "固体",
    density: null,
    melting_c: 1072,
    boiling_c: 1794
  },
  {
    n: 63,
    s: "Eu",
    ja: "ユウロピウム",
    en: "Europium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 151.96,
    state: "固体",
    density: null,
    melting_c: 822,
    boiling_c: 1597
  },
  {
    n: 64,
    s: "Gd",
    ja: "ガドリニウム",
    en: "Gadolinium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 157.25,
    state: "固体",
    density: null,
    melting_c: 1313,
    boiling_c: 3273
  },
  {
    n: 65,
    s: "Tb",
    ja: "テルビウム",
    en: "Terbium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 158.93,
    state: "固体",
    density: null,
    melting_c: 1356,
    boiling_c: 3123
  },
  {
    n: 66,
    s: "Dy",
    ja: "ジスプロシウム",
    en: "Dysprosium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 162.50,
    state: "固体",
    density: null,
    melting_c: 1412,
    boiling_c: 2562
  },
  {
    n: 67,
    s: "Ho",
    ja: "ホルミウム",
    en: "Holmium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 164.93,
    state: "固体",
    density: null,
    melting_c: 1474,
    boiling_c: 2700
  },
  {
    n: 68,
    s: "Er",
    ja: "エルビウム",
    en: "Erbium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 167.26,
    state: "固体",
    density: null,
    melting_c: 1529,
    boiling_c: 2868
  },
  {
    n: 69,
    s: "Tm",
    ja: "ツリウム",
    en: "Thulium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 168.93,
    state: "固体",
    density: null,
    melting_c: 1545,
    boiling_c: 1950
  },
  {
    n: 70,
    s: "Yb",
    ja: "イッテルビウム",
    en: "Ytterbium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 173.05,
    state: "固体",
    density: null,
    melting_c: 824,
    boiling_c: 1196
  },
  {
    n: 71,
    s: "Lu",
    ja: "ルテチウム",
    en: "Lutetium",
    period: 6,
    group: 3,
    category: "ランタノイド",
    mass: 174.97,
    state: "固体",
    density: null,
    melting_c: 1663,
    boiling_c: 3402
  },
  {
    n: 72,
    s: "Hf",
    ja: "ハフニウム",
    en: "Hafnium",
    period: 6,
    group: 4,
    category: "遷移金属",
    mass: 178.49,
    state: "固体",
    density: null,
    melting_c: 2233,
    boiling_c: 4603
  },
  {
    n: 73,
    s: "Ta",
    ja: "タンタル",
    en: "Tantalum",
    period: 6,
    group: 5,
    category: "遷移金属",
    mass: 180.95,
    state: "固体",
    density: null,
    melting_c: 3017,
    boiling_c: 5458
  },
  {
    n: 74,
    s: "W",
    ja: "タングステン",
    en: "Tungsten",
    period: 6,
    group: 6,
    category: "遷移金属",
    mass: 183.84,
    state: "固体",
    density: "19.25 g/cm³",
    melting_c: 3422,
    boiling_c: 5555
  },
  {
    n: 75,
    s: "Re",
    ja: "レニウム",
    en: "Rhenium",
    period: 6,
    group: 7,
    category: "遷移金属",
    mass: 186.21,
    state: "固体",
    density: null,
    melting_c: 3186,
    boiling_c: 5596
  },
  {
    n: 76,
    s: "Os",
    ja: "オスミウム",
    en: "Osmium",
    period: 6,
    group: 8,
    category: "遷移金属",
    mass: 190.23,
    state: "固体",
    density: "22.59 g/cm³",
    melting_c: 3033,
    boiling_c: 5012
  },
  {
    n: 77,
    s: "Ir",
    ja: "イリジウム",
    en: "Iridium",
    period: 6,
    group: 9,
    category: "遷移金属",
    mass: 192.22,
    state: "固体",
    density: null,
    melting_c: 2446,
    boiling_c: 4428
  },
  {
    n: 78,
    s: "Pt",
    ja: "白金",
    en: "Platinum",
    period: 6,
    group: 10,
    category: "遷移金属",
    mass: 195.08,
    state: "固体",
    density: "21.45 g/cm³",
    melting_c: 1768,
    boiling_c: 3825
  },
  {
    n: 79,
    s: "Au",
    ja: "金",
    en: "Gold",
    period: 6,
    group: 11,
    category: "遷移金属",
    mass: 196.97,
    state: "固体",
    density: "19.32 g/cm³",
    melting_c: 1064,
    boiling_c: 2856
  },
  {
    n: 80,
    s: "Hg",
    ja: "水銀",
    en: "Mercury",
    period: 6,
    group: 12,
    category: "遷移金属",
    mass: 200.59,
    state: "液体",
    density: "13.53 g/cm³",
    melting_c: -38.8,
    boiling_c: 356.7
  },
  {
    n: 81,
    s: "Tl",
    ja: "タリウム",
    en: "Thallium",
    period: 6,
    group: 13,
    category: "金属",
    mass: 204.38,
    state: "固体",
    density: null,
    melting_c: 304,
    boiling_c: 1473
  },
  {
    n: 82,
    s: "Pb",
    ja: "鉛",
    en: "Lead",
    period: 6,
    group: 14,
    category: "金属",
    mass: 207.2,
    state: "固体",
    density: "11.34 g/cm³",
    melting_c: 327.5,
    boiling_c: 1749
  },
  {
    n: 83,
    s: "Bi",
    ja: "ビスマス",
    en: "Bismuth",
    period: 6,
    group: 15,
    category: "金属",
    mass: 208.98,
    state: "固体",
    density: null,
    melting_c: 271.3,
    boiling_c: 1564
  },
  {
    n: 84,
    s: "Po",
    ja: "ポロニウム",
    en: "Polonium",
    period: 6,
    group: 16,
    category: "金属",
    mass: 209,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 85,
    s: "At",
    ja: "アスタチン",
    en: "Astatine",
    period: 6,
    group: 17,
    category: "ハロゲン",
    mass: 210,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 86,
    s: "Rn",
    ja: "ラドン",
    en: "Radon",
    period: 6,
    group: 18,
    category: "希ガス",
    mass: 222,
    state: "気体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 87,
    s: "Fr",
    ja: "フランシウム",
    en: "Francium",
    period: 7,
    group: 1,
    category: "アルカリ金属",
    mass: 223,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 88,
    s: "Ra",
    ja: "ラジウム",
    en: "Radium",
    period: 7,
    group: 2,
    category: "アルカリ土類金属",
    mass: 226,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 89,
    s: "Ac",
    ja: "アクチニウム",
    en: "Actinium",
    period: 7,
    group: 3,
    category: "アクチノイド",
    mass: 227,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 90,
    s: "Th",
    ja: "トリウム",
    en: "Thorium",
    period: 7,
    group: 4,
    category: "アクチノイド",
    mass: 232.04,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 91,
    s: "Pa",
    ja: "プロトアクチニウム",
    en: "Protactinium",
    period: 7,
    group: 5,
    category: "アクチノイド",
    mass: 231.04,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 92,
    s: "U",
    ja: "ウラン",
    en: "Uranium",
    period: 7,
    group: 6,
    category: "アクチノイド",
    mass: 238.03,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 93,
    s: "Np",
    ja: "ネプツニウム",
    en: "Neptunium",
    period: 7,
    group: 7,
    category: "アクチノイド",
    mass: 237,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 94,
    s: "Pu",
    ja: "プルトニウム",
    en: "Plutonium",
    period: 7,
    group: 8,
    category: "アクチノイド",
    mass: 244,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 95,
    s: "Am",
    ja: "アメリシウム",
    en: "Americium",
    period: 7,
    group: 9,
    category: "アクチノイド",
    mass: 243,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 96,
    s: "Cm",
    ja: "キュリウム",
    en: "Curium",
    period: 7,
    group: 10,
    category: "アクチノイド",
    mass: 247,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 97,
    s: "Bk",
    ja: "バークリウム",
    en: "Berkelium",
    period: 7,
    group: 11,
    category: "アクチノイド",
    mass: 247,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 98,
    s: "Cf",
    ja: "カリフォルニウム",
    en: "Californium",
    period: 7,
    group: 12,
    category: "アクチノイド",
    mass: 251,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 99,
    s: "Es",
    ja: "アインスタイニウム",
    en: "Einsteinium",
    period: 7,
    group: 13,
    category: "アクチノイド",
    mass: 252,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 100,
    s: "Fm",
    ja: "フェルミウム",
    en: "Fermium",
    period: 7,
    group: 14,
    category: "アクチノイド",
    mass: 257,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 101,
    s: "Md",
    ja: "メンデレビウム",
    en: "Mendelevium",
    period: 7,
    group: 15,
    category: "アクチノイド",
    mass: 258,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 102,
    s: "No",
    ja: "ノーベリウム",
    en: "Nobelium",
    period: 7,
    group: 16,
    category: "アクチノイド",
    mass: 259,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 103,
    s: "Lr",
    ja: "ローレンシウム",
    en: "Lawrencium",
    period: 7,
    group: 17,
    category: "アクチノイド",
    mass: 262,
    state: "固体",
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 104,
    s: "Rf",
    ja: "ラザホージウム",
    en: "Rutherfordium",
    period: 7,
    group: 4,
    category: "遷移金属",
    mass: 267,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 105,
    s: "Db",
    ja: "ドブニウム",
    en: "Dubnium",
    period: 7,
    group: 5,
    category: "遷移金属",
    mass: 270,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 106,
    s: "Sg",
    ja: "シーボーギウム",
    en: "Seaborgium",
    period: 7,
    group: 6,
    category: "遷移金属",
    mass: 271,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 107,
    s: "Bh",
    ja: "ボーリウム",
    en: "Bohrium",
    period: 7,
    group: 7,
    category: "遷移金属",
    mass: 270,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 108,
    s: "Hs",
    ja: "ハッシウム",
    en: "Hassium",
    period: 7,
    group: 8,
    category: "遷移金属",
    mass: 277,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 109,
    s: "Mt",
    ja: "マイトネリウム",
    en: "Meitnerium",
    period: 7,
    group: 9,
    category: "遷移金属",
    mass: 278,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 110,
    s: "Ds",
    ja: "ダームスタチウム",
    en: "Darmstadtium",
    period: 7,
    group: 10,
    category: "遷移金属",
    mass: 281,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 111,
    s: "Rg",
    ja: "レントゲニウム",
    en: "Roentgenium",
    period: 7,
    group: 11,
    category: "遷移金属",
    mass: 282,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 112,
    s: "Cn",
    ja: "コペルニシウム",
    en: "Copernicium",
    period: 7,
    group: 12,
    category: "遷移金属",
    mass: 285,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 113,
    s: "Nh",
    ja: "ニホニウム",
    en: "Nihonium",
    period: 7,
    group: 13,
    category: "金属",
    mass: 286,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 114,
    s: "Fl",
    ja: "フレロビウム",
    en: "Flerovium",
    period: 7,
    group: 14,
    category: "金属",
    mass: 289,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 115,
    s: "Mc",
    ja: "モスコビウム",
    en: "Moscovium",
    period: 7,
    group: 15,
    category: "金属",
    mass: 289,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 116,
    s: "Lv",
    ja: "リバモリウム",
    en: "Livermorium",
    period: 7,
    group: 16,
    category: "金属",
    mass: 293,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 117,
    s: "Ts",
    ja: "テネシン",
    en: "Tennessine",
    period: 7,
    group: 17,
    category: "ハロゲン",
    mass: 294,
    state: null,
    density: null,
    melting_c: null,
    boiling_c: null
  },
  {
    n: 118,
    s: "Og",
    ja: "オガネソン",
    en: "Oganesson",
    period: 7,
    group: 18,
    category: "希ガス",
    mass: 294,
    state: "気体",
    density: null,
    melting_c: null,
    boiling_c: null
  }
];

// ===============================
// 追加の細かいデータ（電子配置など）
// ===============================
const EXTRA_DETAILS = {
  1: {
    electron_config: "1s¹",
    shell: "K:1",
    oxidation_states: "+1, -1",
    electronegativity: 2.20,
    atomic_radius_pm: 53,
    ionization_energy_kj_mol: 1312
  },
  2: {
    electron_config: "1s²",
    shell: "K:2",
    oxidation_states: "0",
    electronegativity: null,
    atomic_radius_pm: 31,
    ionization_energy_kj_mol: 2372
  },
  6: {
    electron_config: "[He] 2s² 2p²",
    shell: "K:2, L:4",
    oxidation_states: "-4, +2, +4",
    electronegativity: 2.55,
    atomic_radius_pm: 67,
    ionization_energy_kj_mol: 1086
  },
  8: {
    electron_config: "[He] 2s² 2p⁴",
    shell: "K:2, L:6",
    oxidation_states: "-2",
    electronegativity: 3.44,
    atomic_radius_pm: 60,
    ionization_energy_kj_mol: 1314
  },
  17: {
    electron_config: "[Ne] 3s² 3p⁵",
    shell: "K:2, L:8, M:7",
    oxidation_states: "-1, +1, +3, +5, +7",
    electronegativity: 3.16,
    atomic_radius_pm: 79,
    ionization_energy_kj_mol: 1251
  },
  26: {
    electron_config: "[Ar] 3d⁶ 4s²",
    shell: "K:2, L:8, M:14, N:2",
    oxidation_states: "+2, +3",
    electronegativity: 1.83,
    atomic_radius_pm: 156,
    ionization_energy_kj_mol: 762
  },
  29: {
    electron_config: "[Ar] 3d¹⁰ 4s¹",
    shell: "K:2, L:8, M:18, N:1",
    oxidation_states: "+1, +2",
    electronegativity: 1.90,
    atomic_radius_pm: 145,
    ionization_energy_kj_mol: 745
  },
  79: {
    electron_config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    shell: "K:2, L:8, M:18, N:32, O:18, P:1",
    oxidation_states: "+1, +3",
    electronegativity: 2.54,
    atomic_radius_pm: 144,
    ionization_energy_kj_mol: 890
  }
};

// 用途・特徴・歴史などのテキスト
const EXTRA_TEXT = {
  26: {
    usage:
      "鉄は建築材料、橋梁、自動車、船舶など、構造材料として最も広く利用される金属です。炭素などと合金化した鋼として使われることが多く、強度と加工性のバランスを調整できます。",
    feature:
      "比較的安価で強度が高い一方、酸化しやすく錆びやすい性質があります。ステンレス鋼ではクロムなどを加えることで耐食性を大きく改善しています。",
    history:
      "古代から『鉄器時代』を象徴する素材として文明の発展に大きく貢献しました。産業革命以降は製鉄技術の発達とともに、現代社会の基盤材料となっています。",
    notice:
      "鉄そのものは日常的に触れても問題ありませんが、錆びた鉄片はけがや破傷風のリスクになるため取り扱いには注意が必要です。"
  },
  13: {
    usage:
      "アルミニウムは軽量で耐食性が高く、輸送機器、建材、飲料缶、電子機器の筐体などに広く利用されています。熱伝導性も良く、ヒートシンクや調理器具にも使われます。",
    feature:
      "密度は鉄のおよそ3分の1と非常に軽く、合金化することで強度を高められます。電気伝導性・熱伝導性も良好で、表面に自然にできる酸化皮膜が耐食性を高めています。",
    history:
      "かつては金や銀よりも貴重な金属とされていましたが、ホール・エルー法により大量生産が可能となり、現代では身の回りのさまざまな製品に使われる金属になりました。",
    notice:
      "一般的な使用では安全性の高い金属ですが、高温での溶融や粉末の取り扱いなど、工業用途では専用の安全対策が必要です。"
  },
  29: {
    usage:
      "非常に高い電気伝導性を持ち、電線や配線、モーター巻線、プリント基板などの電気・電子分野で広く利用されています。また、水道管や熱交換器など配管・熱関連用途にも使われます。",
    feature:
      "銀に次ぐ電気伝導性を持ち、熱伝導性や耐食性にも優れた金属です。表面が酸化して緑青と呼ばれる緑色の皮膜ができると、内部を保護する働きを持ちます。",
    history:
      "古くから人類が利用してきた金属で、錫との合金である青銅は『青銅器文明』を支えました。現在もエネルギーや通信インフラに欠かせない重要な金属です。",
    notice:
      "通常の金属状態では安全性が高い一方、溶融状態や粉末状では高温・発火の危険を伴うことがあり、産業現場では適切な安全管理が求められます。"
  },
  79: {
    usage:
      "主に装飾品や貴金属として利用されるほか、優れた電気伝導性と耐食性を活かして、コネクタやICパッケージなど高信頼性が求められる電子部品にも用いられます。",
    feature:
      "非常に安定した貴金属で、酸や酸化に強く、長期間輝きを保ちます。密度が高く、比重の大きい金属の代表例であり、展延性・延性にも優れています。",
    history:
      "古代から価値の象徴として扱われ、貨幣・装飾品・宗教的な工芸品などに広く用いられてきました。現在も価値保存資産や投資対象として重要な役割を持ちます。",
    notice:
      "通常の使用では安全な金属ですが、高価なため盗難や偽造品に関する注意が必要です。投資商品として扱う場合は、信頼できる業者や保管方法の確認が重要です。"
  },
  50: {
    usage:
      "スズは主にはんだ材料、錫メッキ、ブリキ鋼板（缶詰など）として利用されます。また、青銅やはんだ合金など、多くの合金の成分としても重要です。",
    feature:
      "融点が比較的低く（約232℃）、鉛と比較して毒性が低いため、鉛フリーはんだ材料としても広く利用されています。表面が酸化しても比較的安定な皮膜を作ります。",
    history:
      "古代から銅との合金である青銅の成分として利用され、『青銅器時代』を支えた金属の一つです。現代では電子機器の鉛フリーはんだとしての役割が大きくなっています。",
    notice:
      "食品用の缶詰などに用いられるスズメッキ鋼板は、適切に管理されていれば安全ですが、腐食が進んだ場合には金属溶出に注意が必要です。電子機器の鉛フリー化に伴い、スズを多く含むはんだでは『ウィスカ』と呼ばれる細い金属結晶が伸びる問題があり、信頼性設計が必要です。"
  }
};

// EXTRA_DETAILS を ELEMENTS_DATA にマージ
ELEMENTS_DATA.forEach((el) => {
  if (EXTRA_DETAILS[el.n]) {
    Object.assign(el, EXTRA_DETAILS[el.n]);
  }
});

// ===============================
// 価格データ（JSON を読み込み）
// ===============================

// JSON から読み込んだ価格データを入れておく箱
// 形式: { "Cu": [{ date: "1990M1", price: 123 }, ... ], "Al": [...], ... }
let PRICE_DATA = {};

// IMF の "1990M1" 形式から「年」だけ取り出すヘルパー
function getYearFromIMFDate(dateStr) {
  if (!dateStr || dateStr.length < 4) return null;
  const y = parseInt(dateStr.slice(0, 4), 10);
  return Number.isNaN(y) ? null : y;
}

// 年セレクタを埋める
function setupYearSelectors() {
  if (!PRICE_DATA || !Object.keys(PRICE_DATA).length) {
    console.warn("価格データがまだ読み込まれていません");
    return;
  }

  let minY = Infinity;
  let maxY = -Infinity;

  // すべての金属のデータから最小年・最大年を探す
  Object.values(PRICE_DATA).forEach((rows) => {
    if (!Array.isArray(rows)) return;
    rows.forEach((p) => {
      const y = getYearFromIMFDate(p.date);
      if (y == null) return;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    });
  });

  if (!isFinite(minY) || !isFinite(maxY)) {
    console.warn("年情報が取得できませんでした");
    return;
  }

  if (priceFromYearEl) priceFromYearEl.innerHTML = "";
  if (priceToYearEl) priceToYearEl.innerHTML = "";

  for (let y = minY; y <= maxY; y++) {
    if (priceFromYearEl) {
      const optFrom = document.createElement("option");
      optFrom.value = String(y);
      optFrom.textContent = String(y);
      priceFromYearEl.appendChild(optFrom);
    }
    if (priceToYearEl) {
      const optTo = document.createElement("option");
      optTo.value = String(y);
      optTo.textContent = String(y);
      priceToYearEl.appendChild(optTo);
    }
  }

  currentFromYear = minY;
  currentToYear = maxY;
  if (priceFromYearEl) priceFromYearEl.value = String(minY);
  if (priceToYearEl) priceToYearEl.value = String(maxY);
}

// 粒度と期間のコントロールにイベントを付ける
function setupPriceControls() {
  if (priceGranularityEl) {
    priceGranularityEl.addEventListener("change", () => {
      currentGranularity = priceGranularityEl.value; // "month" or "year"
      const el = ELEMENTS_DATA.find((e) => e.n === currentAtomicNumber);
      if (el) updatePriceChart(el);
    });
  }

  const onYearChange = () => {
    if (priceFromYearEl) {
      const v = parseInt(priceFromYearEl.value, 10);
      currentFromYear = Number.isNaN(v) ? null : v;
    }
    if (priceToYearEl) {
      const v = parseInt(priceToYearEl.value, 10);
      currentToYear = Number.isNaN(v) ? null : v;
    }
    const el = ELEMENTS_DATA.find((e) => e.n === currentAtomicNumber);
    if (el) updatePriceChart(el);
  };

  if (priceFromYearEl) priceFromYearEl.addEventListener("change", onYearChange);
  if (priceToYearEl) priceToYearEl.addEventListener("change", onYearChange);
}

// 価格データを JSON ファイルから読み込む
function loadPriceData() {
  // ★ あなたの JSON ファイル名に合わせてね
  // 例: "./metal_prices.json"
  const url = "./metal_prices.json";

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      }
      return res.json();
    })
    .then((json) => {
      PRICE_DATA = json;

      setupYearSelectors();
      setupPriceControls();

      const el = ELEMENTS_DATA.find((e) => e.n === currentAtomicNumber);
      if (el) {
        updatePriceChart(el);
      }
    })
    .catch((err) => {
      console.error("価格データの読み込みに失敗しました:", err);
      if (priceMessageEl) {
        priceMessageEl.textContent =
          "価格データが読み込めませんでした（オフライン or ファイル未配置）。";
      }
    });
}

// ===============================
// DOM 取得
// ===============================
const listEl = document.getElementById("elementList");
const searchEl = document.getElementById("elementSearch");
const periodicEl = document.getElementById("periodicTable");
const metalPillsEl = document.getElementById("metalPills");

const cardAtomicNumberEl = document.getElementById("cardAtomicNumber");
const cardSymbolEl = document.getElementById("cardSymbol");
const cardNamesEl = document.getElementById("cardNames");

const infoAtomicNumberEl = document.getElementById("infoAtomicNumber");
const infoSymbolEl = document.getElementById("infoSymbol");
const infoNameJaEl = document.getElementById("infoNameJa");
const infoNameEnEl = document.getElementById("infoNameEn");
const infoMassEl = document.getElementById("infoMass");
const infoCategoryEl = document.getElementById("infoCategory");
const infoPeriodEl = document.getElementById("infoPeriod");
const infoGroupEl = document.getElementById("infoGroup");
const infoStateEl = document.getElementById("infoState");
const infoDensityEl = document.getElementById("infoDensity");
const infoMeltingEl = document.getElementById("infoMelting");
const infoBoilingEl = document.getElementById("infoBoiling");

const infoElectronConfigEl = document.getElementById("infoElectronConfig");
const infoShellEl = document.getElementById("infoShell");
const infoOxidationEl = document.getElementById("infoOxidation");
const infoElectronegativityEl = document.getElementById(
  "infoElectronegativity"
);
const infoAtomicRadiusEl = document.getElementById("infoAtomicRadius");
const infoIonizationEnergyEl = document.getElementById("infoIonizationEnergy");

// 詳細テキスト（用途・特徴など）
const textUsageEl = document.getElementById("textUsage");
const textFeatureEl = document.getElementById("textFeature");
const textHistoryEl = document.getElementById("textHistory");
const textNoticeEl = document.getElementById("textNotice");

const priceMessageEl = document.getElementById("priceMessage");
const langToggleEl = document.getElementById("langToggle");
const appSubtitleEl = document.getElementById("appSubtitle");

let priceChart = null;
let currentAtomicNumber = 1;
let currentLang = "ja"; // "ja" or "en"
let currentGranularity = "month"; // "month" or "year"
let currentFromYear = null; // 数値 or null
let currentToYear = null; // 数値 or null

// 価格チャート用コントロール
const priceRangeEl = document.getElementById("priceRange"); // 使っていなくても OK
const priceGranularityEl = document.getElementById("priceGranularity");
const priceFromYearEl = document.getElementById("priceFromYear");
const priceToYearEl = document.getElementById("priceToYear");

// ===============================
// 分類 → CSS クラス
// ===============================
function categoryToClass(category) {
  if (!category) return "";
  if (category.includes("アルカリ土類")) return "alkaline-earth-metal";
  if (category.includes("アルカリ金属")) return "alkali-metal";
  if (category.includes("遷移金属")) return "transition-metal";
  if (category === "金属") return "metal";
  if (category === "半金属") return "metalloid";
  if (category === "非金属") return "nonmetal";
  if (category === "ハロゲン") return "halogen";
  if (category === "希ガス") return "noble-gas";
  return "";
}

// スマホ版レイアウト調整（幅 768px 以下）
function setupMobileLayout() {
  // PCサイズのときは何もしない
  if (window.innerWidth > 768) return;

  // 念のため：周期表を消す（もう消えていてもOK）
  const periodicSection = document.querySelector(".periodic-section");
  if (periodicSection) {
    periodicSection.style.display = "none";
  }

  // サイドバー（元素一覧＋検索）と詳細カードを取得
  const sidebar = document.querySelector(".sidebar");
  const detailSection = document.querySelector(".detail-section");

  // 元素一覧のブロック（UL の箱）
  const listWrapper =
    document.querySelector(".element-list-wrapper") ||
    (document.getElementById("elementList")
      ? document.getElementById("elementList").parentElement
      : null);

  if (!sidebar || !detailSection) return;

  // すでに sidebar の中に入っているなら何もしない
  if (detailSection.parentElement === sidebar) {
    return;
  }

  // 「検索 → 詳細カード → 一覧」となるように、
  // 一覧(listWrapper)の“手前”に詳細カードを差し込む
  if (listWrapper && listWrapper.parentElement === sidebar) {
    sidebar.insertBefore(detailSection, listWrapper);
  } else {
    // 念のため一覧の箱が取れなかった場合は、最後に付ける
    sidebar.appendChild(detailSection);
  }

  // スマホで見やすいように幅などを少し調整
  detailSection.style.width = "100%";
  detailSection.style.marginTop = "8px";

}

// ===============================
// 初期化
// ===============================
function init() {
  renderElementList(ELEMENTS_DATA);
  renderPeriodicTable();
  attachSearchHandler();
  attachLangToggle();
  initPriceChart();
  loadPriceData();
  setupPriceToggle();

  // スマホ用レイアウト調整
  setupMobileLayout();

  selectElement(1);
  applyLanguage();
}

// ===============================
// サイドバーリスト
// ===============================
function renderElementList(data) {
  listEl.innerHTML = "";
  data.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = `${el.n}. ${el.s}  ${el.ja}`;
    li.dataset.n = String(el.n);
    li.addEventListener("click", () => selectElement(el.n, true));
    listEl.appendChild(li);
  });
  updateActiveStates();
}

// ===============================
// 元素表（本物レイアウト＋下2段方式）
// ===============================
function renderPeriodicTable() {
  periodicEl.innerHTML = "";

  ELEMENTS_DATA.forEach((el) => {
    // 基本はデータの period / group をそのまま使う
    let row = el.period;
    let col = el.group;

    // ランタノイド（57〜71）：下から1段目に並べる
    if (el.n >= 57 && el.n <= 71) {
      row = 9;
      col = 4 + (el.n - 57); // 57→4, 71→18
    }

    // アクチノイド（89〜103）：下から2段目に並べる
    if (el.n >= 89 && el.n <= 103) {
      row = 10;
      col = 4 + (el.n - 89); // 89→4, 103→18
    }

    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "periodic-cell";
    cell.dataset.n = String(el.n);

    const cls = categoryToClass(el.category || "");
    if (cls) cell.classList.add(cls);
    if (el.n >= 57 && el.n <= 71) cell.classList.add("lanthanoid-row");
    if (el.n >= 89 && el.n <= 103) cell.classList.add("actinoid-row");

    if (col != null && row != null) {
      cell.style.gridColumn = col;
      cell.style.gridRow = row;
    }

    cell.innerHTML = `
      <div class="cell-number">${el.n}</div>
      <div class="cell-symbol">${el.s}</div>
    `;

    cell.addEventListener("click", () => {
      selectElement(el.n, false);
      const detail = document.querySelector(".detail-section");
      if (detail) {
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    periodicEl.appendChild(cell);
  });

  updateActiveStates();
}

// ===============================
// 言語トグル
// ===============================
function attachLangToggle() {
  if (!langToggleEl) return;

  langToggleEl.addEventListener("click", () => {
    currentLang = currentLang === "ja" ? "en" : "ja";
    applyLanguage();
  });
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "ja" ? "ja" : "en";

  if (langToggleEl) {
    langToggleEl.textContent = currentLang === "ja" ? "EN" : "日本語";
  }

  if (appSubtitleEl) {
    appSubtitleEl.textContent =
      currentLang === "ja"
        ? "全元素ビュー ＋ 金属ビュー（MVP）"
        : "All elements view + Metals view (MVP)";
  }

  const el = ELEMENTS_DATA.find((e) => e.n === currentAtomicNumber);
  if (el) {
    if (currentLang === "ja") {
      cardNamesEl.textContent = `${el.ja} / ${el.en}`;
    } else {
      cardNamesEl.textContent = `${el.en} / ${el.ja}`;
    }
  }
}

// ===============================
// 元素選択
// ===============================
function selectElement(atomicNumber, fromList) {
  currentAtomicNumber = atomicNumber;
  const el = ELEMENTS_DATA.find((e) => e.n === atomicNumber);
  if (!el) return;

  if (currentLang === "ja") {
    cardNamesEl.textContent = `${el.ja} / ${el.en}`;
  } else {
    cardNamesEl.textContent = `${el.en} / ${el.ja}`;
  }
  cardAtomicNumberEl.textContent = el.n;
  cardSymbolEl.textContent = el.s;

  infoAtomicNumberEl.textContent = el.n;
  infoSymbolEl.textContent = el.s;
  infoNameJaEl.textContent = el.ja;
  infoNameEnEl.textContent = el.en;
  infoMassEl.textContent = el.mass != null ? `${el.mass}` : "-";
  infoCategoryEl.textContent = el.category || "-";
  infoPeriodEl.textContent = el.period || "-";
  infoGroupEl.textContent = el.group || "-";
  infoStateEl.textContent = el.state || "-";
  infoDensityEl.textContent = el.density || "-";
  infoMeltingEl.textContent =
    el.melting_c != null ? `${el.melting_c} ℃` : "-";
  infoBoilingEl.textContent =
    el.boiling_c != null ? `${el.boiling_c} ℃` : "-";

  infoElectronConfigEl.textContent = el.electron_config || "-";
  infoShellEl.textContent = el.shell || "-";
  infoOxidationEl.textContent = el.oxidation_states || "-";
  infoElectronegativityEl.textContent =
    el.electronegativity != null ? `${el.electronegativity}` : "-";
  infoAtomicRadiusEl.textContent =
    el.atomic_radius_pm != null ? `${el.atomic_radius_pm}` : "-";
  infoIonizationEnergyEl.textContent =
    el.ionization_energy_kj_mol != null
      ? `${el.ionization_energy_kj_mol}`
      : "-";

  const extraText = EXTRA_TEXT[el.n] || {};
  textUsageEl.textContent =
    extraText.usage || "この元素の主な用途は準備中です。";
  textFeatureEl.textContent =
    extraText.feature || "この元素の性質や特徴は準備中です。";
  textHistoryEl.textContent =
    extraText.history || "この元素の歴史・背景は準備中です。";
  textNoticeEl.textContent =
    extraText.notice ||
    "この元素に関する注意点や関連情報は今後追加していけます。";
  updatePriceUI(el);
  updatePriceChart(el);
  updateActiveStates();

  if (fromList) {
    document
      .querySelector(".periodic-section")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ===============================
// 選択状態の更新
// ===============================
function updateActiveStates() {
  const n = String(currentAtomicNumber);

  document.querySelectorAll(".element-list li").forEach((li) => {
    li.classList.toggle("active", li.dataset.n === n);
  });

  document.querySelectorAll(".periodic-cell").forEach((cell) => {
    cell.classList.toggle("active", cell.dataset.n === n);
  });

  if (metalPillsEl) {
    metalPillsEl.querySelectorAll(".metal-pill").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.n === n);
    });
  }
}

// ===============================
// 価格チャート初期化
// ===============================
function initPriceChart() {
  const canvas = document.getElementById("priceChart");
  if (!canvas || !window.Chart) return;

  const ctx = canvas.getContext("2d");
  priceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          borderWidth: 2,
          tension: 0.25,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { ticks: { maxRotation: 0 } },
        y: { beginAtZero: false }
      },
      plugins: { legend: { display: false } }
    }
  });
}

// ===============================
// 価格チャート更新（粒度＋期間対応版）
// ===============================
function updatePriceUI(el) {
  const symbol = el.s;
  const points = PRICE_DATA[symbol];

  const priceLatestEl = document.getElementById("priceLatest");
  const priceDeltaEl = document.getElementById("priceDelta");
  const priceMetaEl = document.getElementById("priceMeta");

  const priceDetails = document.getElementById("priceDetails"); // 旧(details)方式が残っていても壊さない
  const priceToggle = document.getElementById("priceToggle");   // 現行(▽)方式
  const priceChartRow = document.getElementById("priceChartRow");
  const priceChartWrap = document.getElementById("priceChartWrap");

  const hideChartUI = () => {
    // details方式
    if (priceDetails) {
      priceDetails.open = false;
      priceDetails.hidden = true;
    }
    // row方式
    if (priceChartRow) priceChartRow.hidden = true;
    // wrap方式（rowが無い場合のフォールバック）
    if (priceChartWrap && !priceChartRow) priceChartWrap.hidden = true;

    if (priceToggle) {
      priceToggle.hidden = true;
      priceToggle.setAttribute("aria-expanded", "false");
      priceToggle.classList.remove("is-open");
    }
  };

  const closeChartUI = () => {
    // 表示はするが閉じる（初期折りたたみ）
    if (priceToggle) {
      priceToggle.hidden = false;
      priceToggle.classList.remove("is-open");
    }
  };

  // データなし
  if (!points || points.length === 0) {
    if (priceLatestEl) priceLatestEl.textContent = "-";
    if (priceDeltaEl) priceDeltaEl.textContent = "";
    if (priceMetaEl) priceMetaEl.textContent = "（データなし）";
    hideChartUI();
    return;
  }

  const { last, prev } = getLatestAndPrev(points);
  if (priceLatestEl) priceLatestEl.textContent = `${last.price.toLocaleString()} USD`;
  if (priceMetaEl) {
    priceMetaEl.textContent = isMonthlySeries(points)
      ? `（${last.date}）`
      : `（${last.date} 年平均）`;
  }

  if (priceDeltaEl) setDelta(priceDeltaEl, last.price, prev?.price);

  // 年足しかない → チャートは使えない
  if (!isMonthlySeries(points)) {
    closeChartUI(); // 最新値表示はするが、チャートUIは隠す
    // “チャートUIそのものを消す”要件なら hideChartUI() に差し替え
    if (priceToggle) priceToggle.hidden = true;
    if (priceDetails) priceDetails.hidden = true;
    return;
  }

  // 月足あり → チャート利用可（初期は閉じる）
  if (priceDetails) {
    priceDetails.hidden = false;
    priceDetails.open = false;
  }
  if (priceToggle) priceToggle.hidden = false;
  if (priceChartRow) priceChartRow.hidden = true;
  if (priceChartWrap && !priceChartRow && !priceDetails) priceChartWrap.hidden = true;
}

function updatePriceChart(el) {
  if (!priceChart) return;

  const points = PRICE_DATA[el.s];
  if (!points || points.length === 0) return;

  // 年足しかないならチャート描かない
  if (!isMonthlySeries(points)) return;

  // ここから先は今のロジック
  const symbol = el.s;
  const priceData = PRICE_DATA[symbol]; // JSON から読み込んだ IMF ベースの価格データ

  if (!priceData || priceData.length === 0) {
    priceChart.data.labels = [];
    priceChart.data.datasets[0].data = [];
    priceChart.update();
    if (priceMessageEl) {
      priceMessageEl.textContent =
        "この元素の価格データは IMF データベースに見つかりませんでした。";
    }
    return;
  }

  // 期間フィルタ（currentFromYear〜currentToYear）
  let rows = priceData.slice();
  const defaultFromYear = getYearFromIMFDate(rows[0].date);
  const defaultToYear = getYearFromIMFDate(rows[rows.length - 1].date);

  const fromY =
    currentFromYear != null ? currentFromYear : defaultFromYear;
  const toY = currentToYear != null ? currentToYear : defaultToYear;

  rows = rows.filter((p) => {
    const y = getYearFromIMFDate(p.date);
    return y != null && y >= fromY && y <= toY;
  });

  let labels = [];
  let values = [];
  let labelSuffix = "";

  if (currentGranularity === "year") {
    // 年足：年平均を作る
    const byYear = new Map(); // year -> {sum, count}

    rows.forEach((p) => {
      const y = getYearFromIMFDate(p.date);
      if (y == null || p.price == null) return;
      const rec = byYear.get(y) || { sum: 0, count: 0 };
      rec.sum += p.price;
      rec.count += 1;
      byYear.set(y, rec);
    });

    const years = Array.from(byYear.keys()).sort((a, b) => a - b);
    labels = years.map((y) => String(y));
    values = years.map((y) => {
      const r = byYear.get(y);
      return r.count ? r.sum / r.count : null;
    });
    labelSuffix = "（IMF 年平均価格）";
  } else {
    // 月足：そのまま
    labels = rows.map((p) => p.date);
    values = rows.map((p) => p.price);
    labelSuffix = "（IMF 月次価格）";
  }

  priceChart.data.labels = labels;
  priceChart.data.datasets[0].data = values;
  priceChart.data.datasets[0].label = `${el.ja}${labelSuffix}`;
  priceChart.update();

  if (priceMessageEl) {
    priceMessageEl.textContent =
      "この元素の価格データは IMF Primary Commodity Prices（月次／年平均, USドル建て）を元にしています。";
  }
}
function getLatestAndPrev(points) {
  // points: [{date, price}, ...]  date昇順想定。違うならソートする
  if (!points || points.length === 0) return null;

  const last = points[points.length - 1];
  const prev = points.length >= 2 ? points[points.length - 2] : null;

  return { last, prev };
}

function isMonthlySeries(points) {
  // dateが "YYYY-Mx" / "YYYY-MM" を想定
  // 年足しかないなら "YYYY" だけ、などで判定
  if (!points || points.length === 0) return false;
  return String(points[0].date).includes("-");
}

function formatNumber(n) {
  if (n == null || Number.isNaN(n)) return "-";
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function setDelta(elDelta, lastPrice, prevPrice) {
  if (prevPrice == null) {
    elDelta.textContent = "";
    elDelta.className = "delta neutral";
    return;
  }
  const diff = lastPrice - prevPrice;
  const abs = Math.abs(diff);

  if (diff > 0) {
    elDelta.textContent = `▲ +${formatNumber(abs)}`;
    elDelta.className = "delta up";
  } else if (diff < 0) {
    elDelta.textContent = `▼ -${formatNumber(abs)}`;
    elDelta.className = "delta down";
  } else {
    elDelta.textContent = `±0`;
    elDelta.className = "delta neutral";
  }
}

function setupPriceToggle() {
  const toggle = document.getElementById("priceToggle");
  const row = document.getElementById("priceChartRow");

  if (!toggle || !row) return;

  const setOpen = (open) => {
    row.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));

    // Chart.js は非表示→表示でサイズ0になることがあるため
    if (open && window.priceChart && typeof window.priceChart.resize === "function") {
      window.priceChart.resize();
    }
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    }
  });

  // 初期状態：閉じる
  setOpen(false);
}

function getLatestAndPrev(points) {
  if (!points || points.length === 0) return null;

  const last = points[points.length - 1];
  const prev = points.length >= 2 ? points[points.length - 2] : null;

  return { last, prev };
}
function isMonthlySeries(points) {
  if (!points || points.length === 0) return false;
  return String(points[0].date).includes("-");
}
function setDelta(elDelta, lastPrice, prevPrice) {
  if (prevPrice == null) {
    elDelta.textContent = "";
    elDelta.className = "delta neutral";
    return;
  }
  const diff = lastPrice - prevPrice;
  const abs = Math.abs(diff);

  if (diff > 0) {
    elDelta.textContent = `▲ +${abs.toLocaleString()}`;
    elDelta.className = "delta up";
  } else if (diff < 0) {
    elDelta.textContent = `▼ -${abs.toLocaleString()}`;
    elDelta.className = "delta down";
  } else {
    elDelta.textContent = `±0`;
    elDelta.className = "delta neutral";
  }
}



// ===============================
// 検索
// ===============================
function attachSearchHandler() {
  searchEl.addEventListener("input", () => {
    const q = searchEl.value.trim().toLowerCase();

    if (!q) {
      renderElementList(ELEMENTS_DATA);
      updateActiveStates();
      return;
    }

    const filtered = ELEMENTS_DATA.filter((el) => {
      return (
        el.ja.toLowerCase().includes(q) ||
        el.en.toLowerCase().includes(q) ||
        el.s.toLowerCase().includes(q) ||
        String(el.n) === q
      );
    });

    renderElementList(filtered);

    if (filtered.length > 0) {
      selectElement(filtered[0].n);
    }
  });
}


// ===============================
// 実行
// ===============================
init();
