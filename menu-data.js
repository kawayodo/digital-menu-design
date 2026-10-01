/* ============================================================
   川淀 全メニュー データ
   データの正: 川淀_フルメニュー.xlsx（料理）・川淀_ドリンクメニュー.xlsx（ドリンク）
   このファイルは xlsx から生成（tools/gen_menu_data.py）。日本語は xlsx の記述をそのまま使用。価格は税込（円）。
   ============================================================ */

const LANGUAGES = [
  { code:"en", label:"EN", htmlLang:"en" },
  { code:"ja", label:"日本語", htmlLang:"ja" },
  { code:"ko", label:"한국어", htmlLang:"ko" },
  { code:"zhHans", label:"简体中文", htmlLang:"zh-Hans" },
  { code:"zhHant", label:"繁體中文", htmlLang:"zh-Hant" },
  { code:"eo", label:"Esperanto", htmlLang:"eo" }
];

/* service: "dinein" | "takeout"   kind: "food" | "drink"
   stop: どのオーダーストップ時刻を適用するか（SERVICE_HOURS）
     "food"    = 店内の料理（昼 stopFood・夜 stopFood まで）
     "course"  = コース（昼 stopCourse・夜 stopCourse まで）
     "takeout" = 持ち帰り（昼の開店から夜の stopFood まで通し。昼のラストオーダー・昼休みは適用しない：2026-09-30 決定）
     "drink"   = ドリンク（昼 stopDrink・夜 stopDrink まで） */
const CATEGORIES = {
  "teishoku-unagi": {
    service: "dinein",
    stop: "food",
    kind: "food",
    name: { ja:"定食（うなぎ）", en:"Eel Set Meals", ko:"장어 정식", zhHans:"鳗鱼套餐", zhHant:"鰻魚套餐", eo:"Angilaj manĝaroj" }
  },
  "teishoku-niku": {
    service: "dinein",
    stop: "food",
    kind: "food",
    name: { ja:"定食（肉）", en:"Meat Set Meals", ko:"고기 정식", zhHans:"肉类套餐", zhHant:"肉類套餐", eo:"Viandaj manĝaroj" }
  },
  "tanpin-unagi": {
    service: "dinein",
    stop: "food",
    kind: "food",
    name: { ja:"単品（うなぎ）", en:"Eel à la Carte", ko:"장어 단품", zhHans:"鳗鱼单点", zhHant:"鰻魚單點", eo:"Angilo (unuopaj pladoj)" }
  },
  "tanpin-niku": {
    service: "dinein",
    stop: "food",
    kind: "food",
    name: { ja:"単品（肉）", en:"Meat à la Carte", ko:"고기 단품", zhHans:"肉类单点", zhHant:"肉類單點", eo:"Viando (unuopaj pladoj)" }
  },
  "ippin-unagi": {
    service: "dinein",
    stop: "food",
    kind: "food",
    name: { ja:"うなぎの一品料理", en:"Eel Side Dishes", ko:"장어 일품요리", zhHans:"鳗鱼小菜", zhHant:"鰻魚小菜", eo:"Angilaj kromaj pladoj" }
  },
  ippin: {
    service: "dinein",
    stop: "food",
    kind: "food",
    name: { ja:"一品料理", en:"Side Dishes", ko:"일품요리", zhHans:"小菜", zhHant:"小菜", eo:"Kromaj pladoj" }
  },
  course: {
    service: "dinein",
    stop: "course",
    kind: "food",
    name: { ja:"お勧めコース", en:"Recommended Courses", ko:"추천 코스", zhHans:"推荐套餐（御膳）", zhHant:"推薦套餐（御膳）", eo:"Rekomendataj menuoj" }
  },
  "takeout-bento-unagi": {
    service: "takeout",
    stop: "takeout",
    kind: "food",
    name: { ja:"持ち帰り（うなぎの弁当）", en:"Takeout — Eel Bento", ko:"포장 — 장어 도시락", zhHans:"外带 — 鳗鱼便当", zhHant:"外帶 — 鰻魚便當", eo:"Forporte — Angilaj bentoj" }
  },
  "takeout-bento-niku": {
    service: "takeout",
    stop: "takeout",
    kind: "food",
    name: { ja:"持ち帰り（肉の弁当）", en:"Takeout — Meat Bento", ko:"포장 — 고기 도시락", zhHans:"外带 — 肉类便当", zhHant:"外帶 — 肉類便當", eo:"Forporte — Viandaj bentoj" }
  },
  "takeout-tanpin": {
    service: "takeout",
    stop: "takeout",
    kind: "food",
    name: { ja:"持ち帰り（うなぎの単品）", en:"Takeout — Eel à la Carte", ko:"포장 — 장어 단품", zhHans:"外带 — 鳗鱼单点", zhHant:"外帶 — 鰻魚單點", eo:"Forporte — Angilo (unuopaj pladoj)" }
  },
  "takeout-other": {
    service: "takeout",
    stop: "takeout",
    kind: "food",
    name: { ja:"持ち帰り（その他）", en:"Takeout — Others", ko:"포장 — 기타", zhHans:"外带 — 其他", zhHant:"外帶 — 其他", eo:"Forporte — Aliaj" }
  },
  "drink-wine": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"ワイン", en:"Wine", ko:"와인", zhHans:"葡萄酒", zhHant:"葡萄酒", eo:"Vino" }
  },
  "drink-sparkling": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"スパークリング", en:"Sparkling", ko:"스파클링", zhHans:"起泡酒", zhHant:"氣泡酒", eo:"Spumvino" }
  },
  "drink-sake": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"清酒", en:"Sake", ko:"청주(사케)", zhHans:"清酒", zhHant:"清酒", eo:"Sakeo" }
  },
  "drink-reishu": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"冷酒", en:"Chilled Sake", ko:"냉주", zhHans:"冷酒", zhHant:"冷酒", eo:"Malvarma sakeo" }
  },
  "drink-beer": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"ビール他", en:"Beer & Others", ko:"맥주 외", zhHans:"啤酒等", zhHant:"啤酒等", eo:"Biero kaj aliaj" }
  },
  "drink-shochu": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"焼酎", en:"Shochu", ko:"소주(쇼츄)", zhHans:"烧酒", zhHant:"燒酒", eo:"Ŝoĉuo" }
  },
  "drink-soft": {
    service: "dinein",
    stop: "drink",
    kind: "drink",
    name: { ja:"ソフトドリンク", en:"Soft Drinks", ko:"소프트 드링크", zhHans:"软饮料", zhHant:"軟飲料", eo:"Nealkoholaj trinkaĵoj" }
  }
};

/* 営業時間とオーダーストップ（料理 xlsx「注意事項」シート） */
const SERVICE_HOURS = {
  lunch: { open:"11:00", close:"15:00", stopCourse:"14:00", stopFood:"14:30", stopDrink:"14:30" },
  dinner: { open:"17:00", close:"20:00", stopCourse:"18:30", stopFood:"19:00", stopDrink:"19:30" }
};

const ALLERGENS = {
  egg: { ja:"卵", en:"Egg", ko:"계란", zhHans:"鸡蛋", zhHant:"雞蛋", eo:"Ovo" },
  wheat: { ja:"小麦", en:"Wheat", ko:"밀", zhHans:"小麦", zhHant:"小麥", eo:"Tritiko" },
  sesame: { ja:"ゴマ", en:"Sesame", ko:"참깨", zhHans:"芝麻", zhHant:"芝麻", eo:"Sezamo" }
};

const LABELS = { limited:{ ja:"数量限定", en:"Limited", ko:"수량 한정", zhHans:"限量", zhHant:"限量", eo:"Limigita" } };

/* オプション定義
   - price が 0 以外の選択肢は商品価格に加算する
   - slipAbbr が空文字の選択肢は店員画面に出さない
   - countAs: 店員画面ではこの選択を、指定した単独商品（variant＋選択）と合算して1行として数える
   - course-main: inheritFrom の商品の optionGroups を引き継ぐ。slipLine は店員画面の行の先頭に出す料理名
   - type:"count"（グラス数・お猪口数）: 選択肢ではなく min〜max の数を選ぶ。値は数字の文字列
   - slipLabel（ドリンク）: 店員画面で「グラス数：3杯」「飲み方：熱燗」のように見出しを付けて出す */
const OPTION_GROUPS = {
  "rice-amount": {
    label: { ja:"ご飯の量", en:"Rice portion", ko:"밥 양", zhHans:"米饭分量", zhHant:"米飯分量", eo:"Kvanto de rizo" },
    required: true,
    default: "M",
    choices: [
      {
        id: "S",
        label: { ja:"少なめ", en:"Small", ko:"적게", zhHans:"少一点", zhHant:"少一點", eo:"Malpli" },
        slipAbbr: "S",
        price: 0
      },
      {
        id: "M",
        label: { ja:"普通", en:"Regular", ko:"보통", zhHans:"普通", zhHant:"普通", eo:"Normala" },
        slipAbbr: "M",
        price: 0
      },
      {
        id: "L",
        label: { ja:"多め", en:"Large", ko:"많이", zhHans:"多一点", zhHant:"多一點", eo:"Pli" },
        slipAbbr: "L",
        price: 0
      }
    ]
  },
  negi: {
    label: { ja:"ネギ", en:"Green onion", ko:"파", zhHans:"葱", zhHant:"蔥", eo:"Verda cepo" },
    required: true,
    choices: [
      {
        id: "yes",
        label: { ja:"あり", en:"With", ko:"넣기", zhHans:"要", zhHant:"要", eo:"Kun" },
        slipAbbr: "ネ",
        price: 0
      },
      {
        id: "no",
        label: { ja:"なし", en:"Without", ko:"빼기", zhHans:"不要", zhHant:"不要", eo:"Sen" },
        slipAbbr: "なし",
        price: 0
      }
    ]
  },
  doneness: {
    label: { ja:"焼き加減", en:"Doneness", ko:"굽기 정도", zhHans:"熟度", zhHant:"熟度", eo:"Kuirgrado" },
    required: true,
    choices: [
      {
        id: "rare",
        label: { ja:"レア", en:"Rare", ko:"레어", zhHans:"一分熟", zhHant:"一分熟", eo:"Sangeta" },
        slipAbbr: "R",
        price: 0
      },
      {
        id: "medium-rare",
        label: { ja:"ミディアムレア", en:"Medium Rare", ko:"미디엄 레어", zhHans:"三分熟", zhHant:"三分熟", eo:"Iom sangeta" },
        slipAbbr: "MR",
        price: 0
      },
      {
        id: "medium",
        label: { ja:"ミディアム", en:"Medium", ko:"미디엄", zhHans:"五分熟", zhHant:"五分熟", eo:"Meze kuirita" },
        slipAbbr: "M",
        price: 0
      },
      {
        id: "medium-well",
        label: { ja:"ミディアムウェルダン", en:"Medium Well", ko:"미디엄 웰던", zhHans:"七分熟", zhHant:"七分熟", eo:"Preskaŭ bone kuirita" },
        slipAbbr: "MW",
        price: 0
      },
      {
        id: "well",
        label: { ja:"ウェルダン", en:"Well Done", ko:"웰던", zhHans:"全熟", zhHant:"全熟", eo:"Bone kuirita" },
        slipAbbr: "W",
        price: 0
      }
    ]
  },
  garlic: {
    label: { ja:"ガーリックパウダー", en:"Garlic powder", ko:"갈릭 파우더", zhHans:"蒜粉", zhHant:"蒜粉", eo:"Ajla pulvoro" },
    required: true,
    choices: [
      {
        id: "yes",
        label: { ja:"あり", en:"With", ko:"넣기", zhHans:"要", zhHant:"要", eo:"Kun" },
        slipAbbr: "G",
        price: 0
      },
      {
        id: "no",
        label: { ja:"なし", en:"Without", ko:"빼기", zhHans:"不要", zhHant:"不要", eo:"Sen" },
        slipAbbr: "なし",
        price: 0
      }
    ]
  },
  kimosui: {
    label: { ja:"きも吸い（+290円）", en:"Eel liver soup (+¥290)", ko:"장어 간 국 (+290엔)", zhHans:"鳗鱼肝汤（+290日元）", zhHant:"鰻魚肝湯（+290日圓）", eo:"Supo kun angila hepato (+290 enoj)" },
    required: true,
    choices: [
      {
        id: "hot",
        label: { ja:"温かいものを付ける", en:"Add (hot)", ko:"따뜻한 것 추가", zhHans:"添加（热）", zhHant:"加點（熱）", eo:"Aldoni (varman)" },
        slipAbbr: "",
        price: 290,
        countAs: { variant:"takeout-kimosui", selections:{ "kimosui-temp":"hot" } }
      },
      {
        id: "cold",
        label: { ja:"冷たいものを付ける", en:"Add (cold)", ko:"차가운 것 추가", zhHans:"添加（冷）", zhHant:"加點（冷）", eo:"Aldoni (malvarman)" },
        slipAbbr: "",
        price: 290,
        countAs: { variant:"takeout-kimosui", selections:{ "kimosui-temp":"cold" } }
      },
      {
        id: "none",
        label: { ja:"付けない", en:"No thanks", ko:"추가 안 함", zhHans:"不需要", zhHant:"不需要", eo:"Ne, dankon" },
        slipAbbr: "吸 なし",
        price: 0
      }
    ]
  },
  paperbag: {
    label: { ja:"紙袋（+22円）", en:"Paper bag (+¥22)", ko:"종이봉투 (+22엔)", zhHans:"纸袋（+22日元）", zhHant:"紙袋（+22日圓）", eo:"Papera sako (+22 enoj)" },
    required: true,
    choices: [
      {
        id: "yes",
        label: { ja:"必要", en:"Yes", ko:"필요", zhHans:"需要", zhHant:"需要", eo:"Jes" },
        slipAbbr: "",
        price: 22,
        countAs: { variant:"takeout-paperbag", selections:{} }
      },
      {
        id: "no",
        label: { ja:"不要", en:"No", ko:"불필요", zhHans:"不需要", zhHant:"不需要", eo:"Ne" },
        slipAbbr: "",
        price: 0
      }
    ]
  },
  "kimosui-temp": {
    label: { ja:"温度", en:"Temperature", ko:"온도", zhHans:"温度", zhHant:"溫度", eo:"Temperaturo" },
    required: true,
    choices: [
      {
        id: "hot",
        label: { ja:"温かい", en:"Hot", ko:"따뜻하게", zhHans:"热的", zhHant:"熱的", eo:"Varma" },
        slipAbbr: "温 吸",
        price: 0
      },
      {
        id: "cold",
        label: { ja:"冷たい", en:"Cold", ko:"차갑게", zhHans:"冷的", zhHant:"冷的", eo:"Malvarma" },
        slipAbbr: "冷 吸",
        price: 0
      }
    ]
  },
  "course-main": {
    label: { ja:"蒲焼・ご飯", en:"Grilled eel & rice", ko:"장어구이·밥", zhHans:"蒲烧鳗鱼·米饭", zhHant:"蒲燒鰻魚・米飯", eo:"Rostita angilo kaj rizo" },
    required: true,
    default: "default",
    choices: [
      {
        id: "default",
        label: { ja:"変更なし（蒲焼・ご飯）", en:"No change (grilled eel & rice)", ko:"변경 없음 (장어구이·밥)", zhHans:"不更换（蒲烧鳗鱼·米饭）", zhHant:"不更換（蒲燒鰻魚・米飯）", eo:"Sen ŝanĝo (rostita angilo kaj rizo)" },
        slipAbbr: "",
        slipLine: "蒲焼・ご飯",
        price: 0,
        inheritFrom: null,
        extraGroups: ["rice-amount"]
      },
      {
        id: "seiro",
        label: { ja:"セイロ蒸しに変更", en:"Change to Seiro-mushi (steamed eel over rice)", ko:"세이로무시로 변경", zhHans:"改为蒸笼鳗鱼饭", zhHant:"改為蒸籠鰻魚飯", eo:"Ŝanĝi al Seiro-muŝi" },
        slipAbbr: "セイロ",
        slipLine: "セイロ",
        price: 0,
        inheritFrom: "seiro-mushi"
      },
      {
        id: "unadon",
        label: { ja:"うな丼に変更", en:"Change to Unadon (eel rice bowl)", ko:"우나동으로 변경", zhHans:"改为鳗鱼盖饭", zhHant:"改為鰻魚丼", eo:"Ŝanĝi al Unadon" },
        slipAbbr: "うな丼",
        slipLine: "うな丼",
        price: 0,
        inheritFrom: "unadon"
      },
      {
        id: "mabushi",
        label: { ja:"まぶし丼に変更", en:"Change to Mabushi-don (chopped eel rice bowl)", ko:"마부시동으로 변경", zhHans:"改为鳗鱼碎拌饭", zhHant:"改為鰻魚碎拌飯", eo:"Ŝanĝi al Mabuŝi-don" },
        slipAbbr: "まぶし丼",
        slipLine: "まぶし丼",
        price: 0,
        inheritFrom: "mabushidon"
      }
    ]
  },
  "glass-count": {
    type: "count",
    label: { ja:"グラス数", en:"Glasses", ko:"잔 수", zhHans:"杯数", zhHant:"杯數", eo:"Nombro de glasoj" },
    unit: { ja:"杯", en:"glass", ko:"잔", zhHans:"杯", zhHant:"杯", eo:"glaso" },
    required: true,
    min: 1,
    max: 20,
    slipLabel: "グラス数",
    slipUnit: "杯"
  },
  "ochoko-count": {
    type: "count",
    label: { ja:"お猪口数", en:"Ochoko (cup)", ko:"오쵸코(잔) 수", zhHans:"猪口（酒杯）数", zhHant:"豬口（酒杯）數", eo:"Nombro de ochokoj (tasetoj)" },
    unit: { ja:"杯", en:"ochoko", ko:"잔", zhHans:"杯", zhHant:"杯", eo:"ochoko" },
    required: true,
    min: 1,
    max: 20,
    slipLabel: "お猪口",
    slipUnit: "杯"
  },
  "serving-sake": {
    label: { ja:"飲み方", en:"Serving style", ko:"마시는 방법", zhHans:"饮用方式", zhHant:"飲用方式", eo:"Maniero de servado" },
    required: true,
    slipLabel: "飲み方",
    choices: [
      {
        id: "atsukan",
        label: { ja:"熱燗", en:"Hot (Atsukan)", ko:"뜨겁게 (아츠캉)", zhHans:"热酒（Atsukan）", zhHant:"熱酒（Atsukan）", eo:"Varma (Atsukan)" },
        slipAbbr: "熱燗",
        price: 0
      },
      {
        id: "hiya",
        label: { ja:"ひや", en:"Cold (Hiya)", ko:"차갑게 (히야)", zhHans:"冷酒（Hiya）", zhHant:"冷酒（Hiya）", eo:"Malvarma (Hiya)" },
        slipAbbr: "ひや",
        price: 0
      }
    ]
  },
  "serving-umeshu": {
    label: { ja:"飲み方", en:"Serving style", ko:"마시는 방법", zhHans:"饮用方式", zhHant:"飲用方式", eo:"Maniero de servado" },
    required: true,
    slipLabel: "飲み方",
    choices: [
      {
        id: "rock",
        label: { ja:"ロック", en:"On the Rocks", ko:"온더락", zhHans:"加冰", zhHant:"加冰", eo:"Kun glacio" },
        slipAbbr: "ロック",
        price: 0
      },
      {
        id: "straight",
        label: { ja:"ストレート", en:"Straight (Neat)", ko:"스트레이트", zhHans:"纯饮", zhHant:"純飲", eo:"Pura (senmiksa)" },
        slipAbbr: "ストレート",
        price: 0
      },
      {
        id: "mizuwari",
        label: { ja:"水割り", en:"With Water", ko:"미즈와리 (물 타서)", zhHans:"兑水", zhHant:"兌水", eo:"Kun akvo" },
        slipAbbr: "水割り",
        price: 0
      }
    ]
  },
  "serving-shochu": {
    label: { ja:"飲み方", en:"Serving style", ko:"마시는 방법", zhHans:"饮用方式", zhHant:"飲用方式", eo:"Maniero de servado" },
    required: true,
    slipLabel: "飲み方",
    choices: [
      {
        id: "rock",
        label: { ja:"ロック", en:"On the Rocks", ko:"온더락", zhHans:"加冰", zhHant:"加冰", eo:"Kun glacio" },
        slipAbbr: "ロック",
        price: 0
      },
      {
        id: "straight",
        label: { ja:"ストレート", en:"Straight (Neat)", ko:"스트레이트", zhHans:"纯饮", zhHant:"純飲", eo:"Pura (senmiksa)" },
        slipAbbr: "ストレート",
        price: 0
      },
      {
        id: "mizuwari",
        label: { ja:"水割り", en:"With Water", ko:"미즈와리 (물 타서)", zhHans:"兑水", zhHant:"兌水", eo:"Kun akvo" },
        slipAbbr: "水割り",
        price: 0
      },
      {
        id: "oyuwari",
        label: { ja:"お湯割り", en:"With Hot Water", ko:"오유와리 (뜨거운 물 타서)", zhHans:"兑热水", zhHant:"兌熱水", eo:"Kun varma akvo" },
        slipAbbr: "お湯割り",
        price: 0
      }
    ]
  }
};

/* ドリンクの容器。vessel を持つ商品は、数量＝本数（徳利の数）、グラス数（お猪口数）は OPTION_GROUPS で選ぶ */
const VESSELS = {
  bottle: {
    containerLabel: { ja:"本数", en:"Bottles", ko:"병 수", zhHans:"瓶数", zhHant:"瓶數", eo:"Nombro de boteloj" },
    glassLabel: { ja:"グラス数", en:"Glasses", ko:"잔 수", zhHans:"杯数", zhHant:"杯數", eo:"Nombro de glasoj" },
    containerUnit: { ja:"本", en:"bottle", ko:"병", zhHans:"瓶", zhHant:"瓶", eo:"botelo" },
    glassUnit: { ja:"杯", en:"glass", ko:"잔", zhHans:"杯", zhHant:"杯", eo:"glaso" },
    slipContainerLabel: "本数",
    slipContainerUnit: "本"
  },
  tokkuri: {
    containerLabel: { ja:"徳利数", en:"Tokkuri (decanter)", ko:"도쿠리(술병) 수", zhHans:"德利（酒壶）数", zhHant:"德利（酒壺）數", eo:"Nombro de tokkurioj (karafoj)" },
    glassLabel: { ja:"お猪口数", en:"Ochoko (cup)", ko:"오쵸코(잔) 수", zhHans:"猪口（酒杯）数", zhHant:"豬口（酒杯）數", eo:"Nombro de ochokoj (tasetoj)" },
    containerUnit: { ja:"本", en:"tokkuri", ko:"병", zhHans:"壶", zhHant:"壺", eo:"tokkurio" },
    glassUnit: { ja:"杯", en:"ochoko", ko:"잔", zhHans:"杯", zhHant:"杯", eo:"ochoko" },
    slipContainerLabel: "徳利",
    slipContainerUnit: "本"
  }
};

/* 商品
   - variants: サイズ違い（価格と伝票略号は variant ごと）。サイズがない商品は size:null の1件
   - slipLines: 店員画面で料理ごとに行を分ける商品だけが持つ。
       { label, groups } = その料理名の行に groups の略号を並べる
       { fromChoice } = コースのメイン行（選んだ選択肢の slipLine と、その選択で表示されたオプション）
   - vessel: "bottle" | "tokkuri"（ドリンクで本数とグラス数を聞く商品だけ） */
const PRODUCTS = [
  {
    id: "seiro-mushi",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"セイロ蒸し", en:"Seiro-mushi — Eel Steamed over Sauce-Seasoned Rice", ko:"세이로무시 — 양념 밥과 함께 쪄낸 장어", zhHans:"蒸笼鳗鱼饭（Seiro-mushi）", zhHant:"蒸籠鰻魚飯（Seiro-mushi）", eo:"Seiro-muŝi — Angilo vaporkuirita sur saŭcita rizo" },
    desc: { ja:"長年受け継ぐ川淀秘伝のタレは、独特の芳香を醸し出す味。タレをまぶしたご飯の上に蒲焼をのせ､器ごと蒸し上げました｡ふっくらとした旨味と香りを､あつあつのままお召し上がり下さい｡", en:"Kawayodo's secret sauce, handed down over many years, has a distinctive, fragrant flavor. We place grilled eel on rice coated in the sauce and steam it in its own vessel. Enjoy the plump, savory flavor and aroma piping hot.", ko:"오랜 세월 이어온 가와요도 비전의 양념은 독특한 향을 자아냅니다. 양념을 버무린 밥 위에 장어구이를 얹어 그릇째 쪄냈습니다. 폭신한 감칠맛과 향을 뜨거울 때 즐겨 주세요.", zhHans:"川淀代代相传的秘制酱汁，散发独特芳香。在拌有酱汁的米饭上铺上蒲烧鳗鱼，连同容器一起蒸制而成。请趁热品尝其松软鲜美的滋味与香气。", zhHant:"川淀代代相傳的秘製醬汁，散發獨特芳香。在拌有醬汁的米飯上鋪上蒲燒鰻魚，連同容器一起蒸製而成。請趁熱品嚐其鬆軟鮮美的滋味與香氣。", eo:"La sekreta saŭco de Kawayodo, heredita dum multaj jaroj, havas karakterizan aroman guston. Ni metas rostitan angilon sur rizon kovritan per la saŭco kaj vaporkuiras ĝin kune kun la ujo. Ĝuu la molan, riĉan guston kaj aromon tute varme." },
    allergens: ["egg", "wheat"],
    included: { ja:"きも吸，小鉢，香の物", en:"Eel liver soup, small side dish, pickles", ko:"장어 간 국, 작은 반찬, 절임", zhHans:"鳗鱼肝汤、小菜、腌菜", zhHant:"鰻魚肝湯、小菜、醃菜", eo:"Supo kun angila hepato, malgranda kromplado, piklaĵoj" },
    image: "seiro.webp",
    labels: [],
    optionGroups: ["negi", "rice-amount"],
    variants: [
      {
        id: "seiro-mushi-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2580,
        slipName: "並セイロ"
      },
      {
        id: "seiro-mushi-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中セイロ"
      },
      {
        id: "seiro-mushi-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4250,
        slipName: "上セイロ"
      },
      {
        id: "seiro-mushi-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 5090,
        slipName: "大セイロ"
      }
    ]
  },
  {
    id: "hitsumabushi",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"ひつまぶし", en:"Hitsumabushi — Chopped Grilled Eel over Rice, Enjoyed Three Ways", ko:"히츠마부시 — 잘게 썬 장어구이 덮밥 (세 가지 방법으로 즐기기)", zhHans:"鳗鱼饭三吃（Hitsumabushi）", zhHant:"鰻魚飯三吃（Hitsumabushi）", eo:"Hitsumabuŝi — Tranĉita rostita angilo sur rizo, ĝuata trimaniere" },
    desc: { ja:"直火焼蒲焼を短冊に切り､葱と共にご飯の上にのせました｡よく混ぜてうなぎ飯として､又お好みで薬味でひと味添えて、最後はだし茶をかけてお茶漬けでお楽しみ下さい｡", en:"Flame-grilled eel, cut into strips and placed on rice with green onion. First, mix well and enjoy it as eel rice; next, add condiments to taste; finally, pour dashi broth over it and enjoy it as ochazuke.", ko:"직화로 구운 장어를 길쭉하게 썰어 파와 함께 밥 위에 올렸습니다. 먼저 잘 섞어 장어밥으로, 다음은 취향에 따라 양념을 곁들여, 마지막에는 육수를 부어 오차즈케로 즐겨 주세요.", zhHans:"将直火烤制的蒲烧鳗鱼切成条状，与葱一起铺在米饭上。先充分拌匀作为鳗鱼饭品尝，再依喜好加入佐料，最后浇上高汤做成茶泡饭享用。", zhHant:"將直火烤製的蒲燒鰻魚切成條狀，與蔥一起鋪在米飯上。先充分拌勻作為鰻魚飯品嚐，再依喜好加入佐料，最後澆上高湯做成茶泡飯享用。", eo:"Flamrostita angilo, tranĉita en striojn kaj metita sur rizon kun verda cepo. Unue bone miksu kaj ĝuu ĝin kiel angilan rizon; poste aldonu spicaĵojn laŭplaĉe; fine verŝu dashi-buljonon kaj ĝuu ĝin kiel oĉazuke." },
    allergens: ["wheat"],
    included: { ja:"小鉢，薬味，小吸物，香の物", en:"Small side dish, condiments, small clear soup, pickles", ko:"작은 반찬, 양념, 작은 맑은국, 절임", zhHans:"小菜、佐料、小碗清汤、腌菜", zhHant:"小菜、佐料、小碗清湯、醃菜", eo:"Malgranda kromplado, spicaĵoj, malgranda klara supo, piklaĵoj" },
    image: "hitsumabushi.webp",
    labels: [],
    optionGroups: ["negi", "rice-amount"],
    variants: [
      {
        id: "hitsumabushi-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2820,
        slipName: "ひつま"
      },
      {
        id: "hitsumabushi-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中ひつま"
      },
      {
        id: "hitsumabushi-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4250,
        slipName: "上ひつま"
      },
      {
        id: "hitsumabushi-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 5090,
        slipName: "大ひつま"
      }
    ]
  },
  {
    id: "unaju",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"うな重", en:"Unaju — Grilled Eel over Rice in a Lacquered Box", ko:"우나주 — 찬합에 담은 장어구이 덮밥", zhHans:"鳗鱼重（Unaju）— 漆盒鳗鱼饭", zhHant:"鰻魚重（Unaju）— 漆盒鰻魚飯", eo:"Unaĝu — Rostita angilo sur rizo en lakita skatolo" },
    desc: { ja:"お重の上段は直火でじっくり焼き上げた自慢の蒲焼。下段は当店独自の国産ブランド米を使用したこだわりの白飯。秘伝のタレと鰻の旨味，あつあつのご飯のハーモニーをお楽しみ下さい。", en:"The top layer of the box is our prized eel, slowly grilled over an open flame; the bottom layer is white rice made with our own selected Japanese brand rice. Enjoy the harmony of our secret sauce, savory eel and piping-hot rice.", ko:"찬합 윗단에는 직화로 천천히 구워낸 자랑의 장어구이, 아랫단에는 당점 고유의 국산 브랜드 쌀로 지은 흰쌀밥. 비전의 양념과 장어의 감칠맛, 따끈한 밥의 조화를 즐겨 주세요.", zhHans:"漆盒上层是以直火慢烤而成的招牌蒲烧鳗鱼，下层是使用本店独家日本国产品牌米精心烹煮的白米饭。请享受秘制酱汁、鳗鱼鲜味与热腾腾米饭的完美和谐。", zhHant:"漆盒上層是以直火慢烤而成的招牌蒲燒鰻魚，下層是使用本店獨家日本國產品牌米精心烹煮的白米飯。請享受秘製醬汁、鰻魚鮮味與熱騰騰米飯的完美和諧。", eo:"La supra tavolo de la skatolo estas nia fiera angilo, malrapide rostita super malferma flamo; la malsupra tavolo estas blanka rizo el nia propre elektita japana rizmarko. Ĝuu la harmonion de nia sekreta saŭco, la bongusta angilo kaj la varmega rizo." },
    allergens: ["wheat"],
    included: { ja:"きも吸，小鉢，香の物", en:"Eel liver soup, small side dish, pickles", ko:"장어 간 국, 작은 반찬, 절임", zhHans:"鳗鱼肝汤、小菜、腌菜", zhHant:"鰻魚肝湯、小菜、醃菜", eo:"Supo kun angila hepato, malgranda kromplado, piklaĵoj" },
    image: "unaju.webp",
    labels: [],
    optionGroups: ["rice-amount"],
    variants: [
      {
        id: "unaju-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中重"
      },
      {
        id: "unaju-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4250,
        slipName: "上重"
      },
      {
        id: "unaju-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 5090,
        slipName: "大重"
      }
    ]
  },
  {
    id: "unadon",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"うな丼", en:"Unadon — Grilled Eel over Rice in a Bowl", ko:"우나동 — 장어구이 덮밥", zhHans:"鳗鱼盖饭（Unadon）", zhHant:"鰻魚丼（Unadon）", eo:"Unadon — Rostita angilo sur rizo en bovlo" },
    desc: { ja:"活鰻は、国産から良い物を選別し、生きたまま入荷。熟練の職人が割いた直後に直火でじっくり焼き上げた蒲焼をこだわりの飯に秘伝のタレで仕上げた鰻丼です。", en:"We carefully select the best Japanese eels and receive them alive. Right after a skilled chef fillets them, the eel is slowly grilled over an open flame, placed on our special rice and finished with our secret sauce.", ko:"국산 중에서 좋은 장어만을 골라 살아 있는 채로 들여옵니다. 숙련된 장인이 손질한 직후 직화로 천천히 구운 장어를 엄선한 밥 위에 올리고 비전의 양념으로 마무리한 장어덮밥입니다.", zhHans:"从日本国产鳗鱼中严选优质活鳗，活体进货。由熟练师傅剖开后立即以直火慢烤，铺在精选米饭上，再淋上秘制酱汁而成的鳗鱼盖饭。", zhHant:"從日本國產鰻魚中嚴選優質活鰻，活體進貨。由熟練師傅剖開後立即以直火慢烤，鋪在精選米飯上，再淋上秘製醬汁而成的鰻魚丼。", eo:"Ni zorge elektas la plej bonajn japanajn angilojn kaj ricevas ilin vivaj. Tuj post kiam sperta kuiristo fileas ilin, la angilo estas malrapide rostita super malferma flamo, metita sur nian specialan rizon kaj finita per nia sekreta saŭco." },
    allergens: ["wheat"],
    included: { ja:"きも吸，小鉢，香の物", en:"Eel liver soup, small side dish, pickles", ko:"장어 간 국, 작은 반찬, 절임", zhHans:"鳗鱼肝汤、小菜、腌菜", zhHant:"鰻魚肝湯、小菜、醃菜", eo:"Supo kun angila hepato, malgranda kromplado, piklaĵoj" },
    image: "unadon.webp",
    labels: [],
    optionGroups: ["rice-amount"],
    variants: [
      {
        id: "unadon-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2580,
        slipName: "並丼"
      },
      {
        id: "unadon-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中丼"
      },
      {
        id: "unadon-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4250,
        slipName: "上丼"
      },
      {
        id: "unadon-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 5090,
        slipName: "大丼"
      }
    ]
  },
  {
    id: "shirayaki-teishoku",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"白焼", en:"Shirayaki Set — Salt-Grilled Eel (No Sauce) with Rice", ko:"시라야키 정식 — 양념 없이 소금으로 구운 장어와 밥", zhHans:"白烧鳗鱼套餐（Shirayaki）— 盐烤鳗鱼（无酱汁）", zhHant:"白燒鰻魚套餐（Shirayaki）— 鹽烤鰻魚（無醬汁）", eo:"Ŝirajaki-aro — Sale rostita angilo (sen saŭco) kun rizo" },
    desc: { ja:"割いた活鰻に，その場で一塩，じっくり焼き上げました。シンプルな味付けがあっさりした鰻本来の風味で味わえます。酒肴にも最適，醤油・ポン酢にわさびとしょうがを添えてお出し致します。", en:"Freshly filleted live eel, lightly salted on the spot and slowly grilled. The simple seasoning lets you enjoy the light, natural flavor of the eel. Also perfect with sake — served with soy sauce, ponzu, wasabi and ginger.", ko:"갓 손질한 활장어에 그 자리에서 소금을 살짝 뿌려 천천히 구웠습니다. 담백한 간으로 장어 본연의 산뜻한 풍미를 느낄 수 있습니다. 술안주로도 좋으며, 간장·폰즈에 와사비와 생강을 곁들여 드립니다.", zhHans:"将剖开的活鳗当场撒上少许盐，慢火烤制而成。简单的调味让您品尝到鳗鱼清爽的原味。也非常适合下酒，配酱油、柑橘醋及山葵、生姜一同上桌。", zhHant:"將剖開的活鰻當場撒上少許鹽，慢火烤製而成。簡單的調味讓您品嚐到鰻魚清爽的原味。也非常適合下酒，搭配醬油、柑橘醋及山葵、生薑一同上桌。", eo:"Freŝe fileita viva angilo, iomete salita surloke kaj malrapide rostita. La simpla spicado lasas vin ĝui la malpezan, naturan guston de la angilo. Ankaŭ perfekta kun sakeo — servata kun sojsaŭco, ponzu, vasabio kaj zingibro." },
    allergens: ["wheat"],
    included: { ja:"ご飯，きも吸，小鉢，香の物", en:"Rice, eel liver soup, small side dish, pickles", ko:"밥, 장어 간 국, 작은 반찬, 절임", zhHans:"米饭、鳗鱼肝汤、小菜、腌菜", zhHant:"米飯、鰻魚肝湯、小菜、醃菜", eo:"Rizo, supo kun angila hepato, malgranda kromplado, piklaĵoj" },
    image: "shirayaki.webp",
    labels: [],
    optionGroups: ["rice-amount"],
    variants: [
      {
        id: "shirayaki-teishoku-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中白定"
      },
      {
        id: "shirayaki-teishoku-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4250,
        slipName: "上白定"
      },
      {
        id: "shirayaki-teishoku-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 5090,
        slipName: "大白定"
      }
    ]
  },
  {
    id: "mabushidon",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"まぶし丼", en:"Mabushi-don — Chopped Grilled Eel Mixed into Rice, in a Bowl", ko:"마부시동 — 잘게 썬 장어구이를 밥에 섞은 덮밥", zhHans:"鳗鱼碎拌饭（Mabushi-don）", zhHant:"鰻魚碎拌飯（Mabushi-don）", eo:"Mabuŝi-don — Tranĉita rostita angilo miksita en rizo, en bovlo" },
    desc: null,
    allergens: ["wheat"],
    included: { ja:"きも吸，小鉢，香の物", en:"Eel liver soup, small side dish, pickles", ko:"장어 간 국, 작은 반찬, 절임", zhHans:"鳗鱼肝汤、小菜、腌菜", zhHant:"鰻魚肝湯、小菜、醃菜", eo:"Supo kun angila hepato, malgranda kromplado, piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["negi", "rice-amount"],
    variants: [
      {
        id: "mabushidon-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2580,
        slipName: "並まぶし"
      },
      {
        id: "mabushidon-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中まぶし"
      },
      {
        id: "mabushidon-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4250,
        slipName: "上まぶし"
      }
    ]
  },
  {
    id: "mabushi-seiro",
    service: "dinein",
    category: "teishoku-unagi",
    name: { ja:"まぶしセイロ", en:"Mabushi Seiro — Chopped Eel Steamed with Sauce-Seasoned Rice", ko:"마부시 세이로 — 잘게 썬 장어와 양념 밥을 함께 쪄낸 요리", zhHans:"蒸笼鳗鱼碎饭（Mabushi Seiro）", zhHant:"蒸籠鰻魚碎飯（Mabushi Seiro）", eo:"Mabuŝi-Seiro — Tranĉita angilo vaporkuirita kun saŭcita rizo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"きも吸，小鉢，香の物", en:"Eel liver soup, small side dish, pickles", ko:"장어 간 국, 작은 반찬, 절임", zhHans:"鳗鱼肝汤、小菜、腌菜", zhHant:"鰻魚肝湯、小菜、醃菜", eo:"Supo kun angila hepato, malgranda kromplado, piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["negi", "rice-amount"],
    variants: [
      {
        id: "mabushi-seiro-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2580,
        slipName: "並まぶしセイロ"
      },
      {
        id: "mabushi-seiro-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3450,
        slipName: "中まぶしセイロ"
      }
    ]
  },
  {
    id: "karaage-teishoku",
    service: "dinein",
    category: "teishoku-niku",
    name: { ja:"スパイシーかしわ唐揚げ定食", en:"Spicy Kashiwa Karaage Set — Japanese Fried Chicken with Rice", ko:"스파이시 가시와 가라아게 정식 — 매콤한 닭튀김과 밥", zhHans:"香辣炸鸡块套餐（Karaage）", zhHant:"香辣炸雞塊套餐（Karaage）", eo:"Pikanta Kaŝiŭa-Karaage-aro — Japana fritita kokaĵo kun rizo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"ご飯，吸物，小鉢，香の物", en:"Rice, clear soup, small side dish, pickles", ko:"밥, 맑은국, 작은 반찬, 절임", zhHans:"米饭、清汤、小菜、腌菜", zhHant:"米飯、清湯、小菜、醃菜", eo:"Rizo, klara supo, malgranda kromplado, piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["rice-amount"],
    variants: [
      { id:"karaage-teishoku", size:null, price:1550, slipName:"からあげ定" }
    ]
  },
  {
    id: "kurobuta-teishoku",
    service: "dinein",
    category: "teishoku-niku",
    name: { ja:"国産黒豚肩ロース直火焼定食", en:"Kurobuta Pork Shoulder Set — Flame-Grilled Japanese Black Pork", ko:"구로부타 정식 — 국산 흑돼지 목심 직화구이", zhHans:"日本产黑猪肩里脊直火烤套餐（Kurobuta）", zhHant:"日本產黑豬肩里肌直火烤套餐（Kurobuta）", eo:"Kurobuta-aro — Flamrostita ŝultro de japana nigra porko" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"ご飯，吸物，小鉢，香の物", en:"Rice, clear soup, small side dish, pickles", ko:"밥, 맑은국, 작은 반찬, 절임", zhHans:"米饭、清汤、小菜、腌菜", zhHant:"米飯、清湯、小菜、醃菜", eo:"Rizo, klara supo, malgranda kromplado, piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["rice-amount", "garlic"],
    slipLines: [{ label:"ご飯", groups:["rice-amount"] }, { label:"肉", groups:["garlic"] }],
    variants: [
      { id:"kurobuta-teishoku", size:null, price:2200, slipName:"豚ロース定" }
    ]
  },
  {
    id: "sagari-teishoku",
    service: "dinein",
    category: "teishoku-niku",
    name: { ja:"国産牛サガリ直火焼定食", en:"Sagari Set — Flame-Grilled Japanese Beef Hanger Steak", ko:"사가리 정식 — 국산 소 안창살 직화구이", zhHans:"日本产牛横膈膜直火烤套餐（Sagari）", zhHant:"日本產牛橫膈膜直火烤套餐（Sagari）", eo:"Sagari-aro — Flamrostita diafragmo de japana bovo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"ご飯，吸物，小鉢，香の物", en:"Rice, clear soup, small side dish, pickles", ko:"밥, 맑은국, 작은 반찬, 절임", zhHans:"米饭、清汤、小菜、腌菜", zhHant:"米飯、清湯、小菜、醃菜", eo:"Rizo, klara supo, malgranda kromplado, piklaĵoj" },
    image: "steak.webp",
    labels: [],
    optionGroups: ["rice-amount", "doneness", "garlic"],
    slipLines: [{ label:"ご飯", groups:["rice-amount"] }, { label:"肉", groups:["doneness", "garlic"] }],
    variants: [
      { id:"sagari-teishoku", size:null, price:5010, slipName:"サガリ定" }
    ]
  },
  {
    id: "wagyu-rosu-teishoku",
    service: "dinein",
    category: "teishoku-niku",
    name: { ja:"黒毛和牛ロース直火焼定食", en:"Wagyu Loin Set — Flame-Grilled Japanese Black Wagyu Loin", ko:"와규 로스 정식 — 흑모 와규 등심 직화구이", zhHans:"黑毛和牛里脊直火烤套餐（Wagyu Rosu）", zhHant:"黑毛和牛里肌直火烤套餐（Wagyu Rosu）", eo:"Wagyu-lumbaĵo-aro — Flamrostita lumbaĵo de japana nigra bovo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"ご飯，吸物，小鉢，香の物", en:"Rice, clear soup, small side dish, pickles", ko:"밥, 맑은국, 작은 반찬, 절임", zhHans:"米饭、清汤、小菜、腌菜", zhHant:"米飯、清湯、小菜、醃菜", eo:"Rizo, klara supo, malgranda kromplado, piklaĵoj" },
    image: "steak.webp",
    labels: [],
    optionGroups: ["rice-amount", "doneness", "garlic"],
    slipLines: [{ label:"ご飯", groups:["rice-amount"] }, { label:"肉", groups:["doneness", "garlic"] }],
    variants: [
      { id:"wagyu-rosu-teishoku", size:null, price:5850, slipName:"ロース定" }
    ]
  },
  {
    id: "wagyu-hire-teishoku",
    service: "dinein",
    category: "teishoku-niku",
    name: { ja:"黒毛和牛ヒレ直火焼定食", en:"Wagyu Fillet Set — Flame-Grilled Japanese Black Wagyu Tenderloin", ko:"와규 히레 정식 — 흑모 와규 안심 직화구이", zhHans:"黑毛和牛菲力直火烤套餐（Wagyu Hire）", zhHant:"黑毛和牛菲力直火烤套餐（Wagyu Hire）", eo:"Wagyu-fileo-aro — Flamrostita fileo de japana nigra bovo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"ご飯，吸物，小鉢，香の物", en:"Rice, clear soup, small side dish, pickles", ko:"밥, 맑은국, 작은 반찬, 절임", zhHans:"米饭、清汤、小菜、腌菜", zhHant:"米飯、清湯、小菜、醃菜", eo:"Rizo, klara supo, malgranda kromplado, piklaĵoj" },
    image: "steak.webp",
    labels: [],
    optionGroups: ["rice-amount", "doneness", "garlic"],
    slipLines: [{ label:"ご飯", groups:["rice-amount"] }, { label:"肉", groups:["doneness", "garlic"] }],
    variants: [
      { id:"wagyu-hire-teishoku", size:null, price:6520, slipName:"ヒレ定" }
    ]
  },
  {
    id: "kabayaki-tanpin",
    service: "dinein",
    category: "tanpin-unagi",
    name: { ja:"活うなぎの蒲焼", en:"Kabayaki — Grilled Eel with Sauce (Eel Only)", ko:"가바야키 — 양념 장어구이 (장어만)", zhHans:"蒲烧鳗鱼（Kabayaki，单点）", zhHant:"蒲燒鰻魚（Kabayaki，單點）", eo:"Kabajaki — Rostita angilo kun saŭco (nur angilo)" },
    desc: { ja:"うなぎを食べたりない方には、うれしい追加メニュー。たっぷりご堪能下さい。", en:"A welcome extra for those who want more eel. Enjoy to your heart's content.", ko:"장어가 부족하신 분께 반가운 추가 메뉴. 마음껏 즐겨 주세요.", zhHans:"为还想多吃鳗鱼的您准备的加点菜品。请尽情享用。", zhHant:"為還想多吃鰻魚的您準備的加點菜品。請盡情享用。", eo:"Bonvena aldono por tiuj, kiuj volas pli da angilo. Ĝuu laŭ via kontento." },
    allergens: ["wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      {
        id: "kabayaki-tanpin-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3230,
        slipName: "単 中かば"
      },
      {
        id: "kabayaki-tanpin-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4030,
        slipName: "単 上かば"
      },
      {
        id: "kabayaki-tanpin-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 4870,
        slipName: "単 大かば"
      }
    ]
  },
  {
    id: "shirayaki-tanpin",
    service: "dinein",
    category: "tanpin-unagi",
    name: { ja:"活うなぎの白焼", en:"Shirayaki — Salt-Grilled Eel, No Sauce (Eel Only)", ko:"시라야키 — 양념 없이 소금으로 구운 장어 (장어만)", zhHans:"白烧鳗鱼（Shirayaki，单点）", zhHant:"白燒鰻魚（Shirayaki，單點）", eo:"Ŝirajaki — Sale rostita angilo sen saŭco (nur angilo)" },
    desc: { ja:"脂ののったうなぎそのものの味をシンプルに楽しめます。", en:"Simply enjoy the pure flavor of rich, fatty eel.", ko:"기름진 장어 본연의 맛을 심플하게 즐길 수 있습니다.", zhHans:"简单地品尝肥美鳗鱼本身的滋味。", zhHant:"簡單地品嚐肥美鰻魚本身的滋味。", eo:"Simple ĝuu la puran guston de riĉa, grasa angilo." },
    allergens: ["wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      {
        id: "shirayaki-tanpin-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3230,
        slipName: "単 中白"
      },
      {
        id: "shirayaki-tanpin-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 4030,
        slipName: "単 上白"
      },
      {
        id: "shirayaki-tanpin-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 4870,
        slipName: "単 大白"
      }
    ]
  },
  {
    id: "karaage-tanpin",
    service: "dinein",
    category: "tanpin-niku",
    name: { ja:"スパイシーかしわ唐揚げ", en:"Spicy Kashiwa Karaage — Japanese Fried Chicken", ko:"스파이시 가시와 가라아게 — 매콤한 닭튀김", zhHans:"香辣炸鸡块（Karaage）", zhHant:"香辣炸雞塊（Karaage）", eo:"Pikanta Kaŝiŭa-Karaage — Japana fritita kokaĵo" },
    desc: { ja:"食味のあるジューシーなかしわをスパイシーな味付けで唐揚げにしました。", en:"Juicy, flavorful chicken (kashiwa), deep-fried with a spicy seasoning.", ko:"맛이 깊고 육즙 가득한 닭고기(가시와)를 매콤하게 양념해 튀겼습니다.", zhHans:"将鲜嫩多汁、滋味浓郁的鸡肉以香辣调味炸制而成。", zhHant:"將鮮嫩多汁、滋味濃郁的雞肉以香辣調味炸製而成。", eo:"Suka, bongusta kokaĵo (kaŝiŭa), fritita kun pikanta spicado." },
    allergens: ["egg", "wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"karaage-tanpin", size:null, price:1050, slipName:"単 からあげ" }
    ]
  },
  {
    id: "kurobuta-tanpin",
    service: "dinein",
    category: "tanpin-niku",
    name: { ja:"国産黒豚肩ロース直火焼", en:"Kurobuta Pork Shoulder — Flame-Grilled Japanese Black Pork", ko:"구로부타 — 국산 흑돼지 목심 직화구이", zhHans:"日本产黑猪肩里脊直火烤（Kurobuta）", zhHant:"日本產黑豬肩里肌直火烤（Kurobuta）", eo:"Kurobuta — Flamrostita ŝultro de japana nigra porko" },
    desc: { ja:"自家製ポン酢、しょうがタレでどうぞ。", en:"Enjoy with our homemade ponzu or ginger sauce.", ko:"수제 폰즈 또는 생강 소스와 함께 드세요.", zhHans:"请搭配自制柑橘醋或生姜酱汁享用。", zhHant:"請搭配自製柑橘醋或生薑醬汁享用。", eo:"Ĝuu kun nia memfarita ponzu aŭ zingibra saŭco." },
    allergens: ["egg", "wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["garlic"],
    variants: [
      { id:"kurobuta-tanpin", size:null, price:1980, slipName:"単 豚ロース" }
    ]
  },
  {
    id: "sagari-tanpin",
    service: "dinein",
    category: "tanpin-niku",
    name: { ja:"国産牛サガリ直火焼", en:"Sagari — Flame-Grilled Japanese Beef Hanger Steak", ko:"사가리 — 국산 소 안창살 직화구이", zhHans:"日本产牛横膈膜直火烤（Sagari）", zhHant:"日本產牛橫膈膜直火烤（Sagari）", eo:"Sagari — Flamrostita diafragmo de japana bovo" },
    desc: { ja:"牛一頭からわずかしか取れないサガリは，味が濃厚かつあっさり。", en:"Sagari (hanger steak) — only a small amount comes from each cow. Rich in flavor, yet light.", ko:"소 한 마리에서 조금밖에 나오지 않는 사가리(안창살)는 맛이 진하면서도 담백합니다.", zhHans:"每头牛仅能取得少量的横膈膜肉（Sagari），味道浓郁却又清爽。", zhHant:"每頭牛僅能取得少量的橫膈膜肉（Sagari），味道濃郁卻又清爽。", eo:"Sagari (diafragma bovaĵo) — nur malgranda kvanto venas de ĉiu bovo. Riĉa je gusto, tamen malpeza." },
    allergens: ["egg", "wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic"],
    variants: [
      { id:"sagari-tanpin", size:null, price:4790, slipName:"単 サガリ" }
    ]
  },
  {
    id: "wagyu-rosu-tanpin",
    service: "dinein",
    category: "tanpin-niku",
    name: { ja:"黒毛和牛ロース直火焼", en:"Wagyu Loin — Flame-Grilled Japanese Black Wagyu Loin", ko:"와규 로스 — 흑모 와규 등심 직화구이", zhHans:"黑毛和牛里脊直火烤（Wagyu Rosu）", zhHant:"黑毛和牛里肌直火烤（Wagyu Rosu）", eo:"Wagyu-lumbaĵo — Flamrostita lumbaĵo de japana nigra bovo" },
    desc: { ja:"黒毛和牛のロースの持ち味を最大限に引き出します。", en:"We bring out the full natural flavor of Japanese Black Wagyu loin.", ko:"흑모 와규 등심 본연의 맛을 최대한 살렸습니다.", zhHans:"最大限度地展现黑毛和牛里脊的原有风味。", zhHant:"最大限度地展現黑毛和牛里肌的原有風味。", eo:"Ni elvokas la plenan naturan guston de lumbaĵo de japana nigra bovo (Wagyu)." },
    allergens: ["egg", "wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic"],
    variants: [
      { id:"wagyu-rosu-tanpin", size:null, price:5630, slipName:"単 ロース" }
    ]
  },
  {
    id: "wagyu-hire-tanpin",
    service: "dinein",
    category: "tanpin-niku",
    name: { ja:"黒毛和牛ヒレ直火焼", en:"Wagyu Fillet — Flame-Grilled Japanese Black Wagyu Tenderloin", ko:"와규 히레 — 흑모 와규 안심 직화구이", zhHans:"黑毛和牛菲力直火烤（Wagyu Hire）", zhHant:"黑毛和牛菲力直火烤（Wagyu Hire）", eo:"Wagyu-fileo — Flamrostita fileo de japana nigra bovo" },
    desc: { ja:"黒毛和牛の中の最高部位のひとつヒレ。脂肪と肉のバランスをご堪能下さい。", en:"Fillet — one of the finest cuts of Japanese Black Wagyu. Savor the balance of fat and meat.", ko:"흑모 와규 중에서도 최고 부위 중 하나인 안심. 지방과 살코기의 균형을 음미해 보세요.", zhHans:"菲力是黑毛和牛中最顶级的部位之一。请细细品味脂肪与瘦肉的完美平衡。", zhHant:"菲力是黑毛和牛中最頂級的部位之一。請細細品味脂肪與瘦肉的完美平衡。", eo:"Fileo — unu el la plej bonaj partoj de japana nigra bovo (Wagyu). Ĝuu la ekvilibron inter graso kaj viando." },
    allergens: ["egg", "wheat"],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic"],
    variants: [
      { id:"wagyu-hire-tanpin", size:null, price:6300, slipName:"単 ヒレ" }
    ]
  },
  {
    id: "kimosui",
    service: "dinein",
    category: "ippin-unagi",
    name: { ja:"きも吸", en:"Kimosui — Clear Soup with Eel Liver", ko:"기모스이 — 장어 간 맑은국", zhHans:"鳗鱼肝清汤（Kimosui）", zhHant:"鰻魚肝清湯（Kimosui）", eo:"Kimosui — Klara supo kun angila hepato" },
    desc: { ja:"うなぎのきもが入ったお吸い物", en:"Clear soup with eel liver.", ko:"장어 간이 들어간 맑은국", zhHans:"加入鳗鱼肝的清汤", zhHant:"加入鰻魚肝的清湯", eo:"Klara supo kun angila hepato." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"kimosui", size:null, price:380, slipName:"きも吸" }]
  },
  {
    id: "kimosu",
    service: "dinein",
    category: "ippin-unagi",
    name: { ja:"きも酢", en:"Kimosu — Eel Liver in Ponzu", ko:"기모스 — 장어 간 폰즈 무침", zhHans:"醋拌鳗鱼肝（Kimosu）", zhHant:"醋拌鰻魚肝（Kimosu）", eo:"Kimosu — Angila hepato en ponzu-saŭco" },
    desc: { ja:"うなぎのきもをボイルし，自家製ポン酢と小葱で!", en:"Boiled eel liver with our homemade ponzu and green onion!", ko:"삶은 장어 간을 수제 폰즈와 쪽파로!", zhHans:"水煮鳗鱼肝，佐以自制柑橘醋与小葱！", zhHant:"水煮鰻魚肝，佐以自製柑橘醋與小蔥！", eo:"Boligita angila hepato kun nia memfarita ponzu kaj verda cepo!" },
    allergens: [],
    included: null,
    image: null,
    labels: ["limited"],
    optionGroups: [],
    variants: [{ id:"kimosu", size:null, price:750, slipName:"きも酢" }]
  },
  {
    id: "kimoyaki",
    service: "dinein",
    category: "ippin-unagi",
    name: { ja:"きも焼", en:"Kimoyaki — Grilled Eel Liver", ko:"기모야키 — 장어 간 구이", zhHans:"烤鳗鱼肝（Kimoyaki）", zhHant:"烤鰻魚肝（Kimoyaki）", eo:"Kimojaki — Rostita angila hepato" },
    desc: { ja:"うなぎのきも焼。上品な苦味をご堪能下さい。", en:"Grilled eel liver. Savor its refined bitterness.", ko:"장어 간 구이. 고급스러운 쌉쌀함을 음미해 보세요.", zhHans:"烤鳗鱼肝。请细品其雅致的微苦滋味。", zhHant:"烤鰻魚肝。請細品其雅緻的微苦滋味。", eo:"Rostita angila hepato. Ĝuu ĝian delikatan amarecon." },
    allergens: [],
    included: null,
    image: null,
    labels: ["limited"],
    optionGroups: [],
    variants: [{ id:"kimoyaki", size:null, price:750, slipName:"きも焼" }]
  },
  {
    id: "uzaku",
    service: "dinein",
    category: "ippin-unagi",
    name: { ja:"うざく", en:"Uzaku — Grilled Eel, Seaweed & Cucumber in Vinegar Dressing", ko:"우자쿠 — 장어구이·미역·오이 초무침", zhHans:"醋拌鳗鱼黄瓜（Uzaku）", zhHant:"醋拌鰻魚小黃瓜（Uzaku）", eo:"Uzaku — Rostita angilo, algo kaj kukumo en vinagra saŭco" },
    desc: { ja:"うなぎの蒲焼とワカメときゅうりを自家製土佐酢で。", en:"Grilled eel, wakame seaweed and cucumber, dressed with our homemade Tosa vinegar.", ko:"장어구이와 미역, 오이를 수제 도사즈(가다랑어 향 식초)로 버무렸습니다.", zhHans:"蒲烧鳗鱼、裙带菜与黄瓜，拌以自制土佐醋。", zhHant:"蒲燒鰻魚、海帶芽與小黃瓜，拌以自製土佐醋。", eo:"Rostita angilo, vakame-algo kaj kukumo, kun nia memfarita Tosa-vinagro." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"uzaku", size:null, price:960, slipName:"うざく" }]
  },
  {
    id: "hawasabi",
    service: "dinein",
    category: "ippin",
    name: { ja:"国産 葉わさび醤油漬け", en:"Ha-wasabi — Japanese Wasabi Leaves Pickled in Soy Sauce", ko:"하와사비 — 국산 와사비 잎 간장절임", zhHans:"酱油渍山葵叶（Ha-wasabi）", zhHant:"醬油漬山葵葉（Ha-wasabi）", eo:"Ha-vasabio — Japanaj vasabiaj folioj piklitaj en sojsaŭco" },
    desc: { ja:"爽やかな辛味と豊かな香り。酒肴にどうぞ。", en:"Refreshing heat and a rich aroma. Perfect with sake.", ko:"상쾌한 매운맛과 풍부한 향. 술안주로 즐겨 보세요.", zhHans:"清爽的辛辣与丰富的香气。适合作为下酒菜。", zhHant:"清爽的辛辣與豐富的香氣。適合作為下酒菜。", eo:"Refreŝiga pikeco kaj riĉa aromo. Perfekta kun sakeo." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"hawasabi", size:null, price:330, slipName:"葉わさび" }]
  },
  {
    id: "edamame",
    service: "dinein",
    category: "ippin",
    name: { ja:"枝豆", en:"Edamame — Boiled Green Soybeans", ko:"에다마메 — 삶은 풋콩", zhHans:"毛豆（Edamame）", zhHant:"毛豆（Edamame）", eo:"Edamame — Boligitaj verdaj sojfaboj" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"edamame", size:null, price:360, slipName:"枝豆" }]
  },
  {
    id: "potato-salad",
    service: "dinein",
    category: "ippin",
    name: { ja:"ポテトサラダ", en:"Potato Salad — Homemade, Japanese Style", ko:"포테이토 샐러드 — 수제 일본식", zhHans:"日式土豆沙拉", zhHant:"日式馬鈴薯沙拉", eo:"Terpoma salato — Memfarita, japanstila" },
    desc: { ja:"手作りです。おふくろの味を思い出してください。", en:"Homemade — just like mom used to make.", ko:"직접 만들었습니다. 어머니의 손맛을 떠올려 보세요.", zhHans:"纯手工制作。让您回想起妈妈的味道。", zhHant:"純手工製作。讓您回想起媽媽的味道。", eo:"Memfarita — kiel tiu, kiun via patrino kutimis prepari." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"potato-salad", size:null, price:510, slipName:"ポテトサラダ" }
    ]
  },
  {
    id: "yakinasu",
    service: "dinein",
    category: "ippin",
    name: { ja:"焼きなす", en:"Yaki-nasu — Grilled Eggplant", ko:"야키나스 — 구운 가지", zhHans:"烤茄子（Yaki-nasu）", zhHant:"烤茄子（Yaki-nasu）", eo:"Jaki-nasu — Rostita melongeno" },
    desc: { ja:"だし醤油とおかかと生姜の定番の一品。", en:"A classic dish with dashi soy sauce, bonito flakes and ginger.", ko:"다시 간장과 가쓰오부시, 생강을 곁들인 정석 요리.", zhHans:"搭配高汤酱油、柴鱼片与生姜的经典小菜。", zhHant:"搭配高湯醬油、柴魚片與生薑的經典小菜。", eo:"Klasika plado kun dashi-sojsaŭco, bonitaj flokoj kaj zingibro." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"yakinasu", size:null, price:610, slipName:"焼きなす" }]
  },
  {
    id: "konomono",
    service: "dinein",
    category: "ippin",
    name: { ja:"香の物盛り合わせ", en:"Konomono — Assorted Japanese Pickles", ko:"고노모노 — 모둠 절임", zhHans:"日式腌菜拼盘（Konomono）", zhHant:"日式醃菜拼盤（Konomono）", eo:"Konomono — Asortitaj japanaj piklaĵoj" },
    desc: { ja:"当家で百余年の間大切に守り通した「ぬか床」でしっかり漬け込んだ味。", en:"Pickles thoroughly cured in our rice-bran bed (nukadoko), carefully kept by our family for over 100 years.", ko:"저희 가게에서 100여 년간 소중히 지켜온 쌀겨 절임장(누카도코)에 푹 절인 맛.", zhHans:"以本店百余年来悉心守护的“米糠床”充分腌渍而成的风味。", zhHant:"以本店百餘年來悉心守護的「米糠床」充分醃漬而成的風味。", eo:"Piklaĵoj zorge maceritaj en nia rizbrana lito (nukadoko), kiun nia familio gardas dum pli ol 100 jaroj." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"konomono", size:null, price:580, slipName:"香の物" }]
  },
  {
    id: "kobai-no-zen",
    service: "dinein",
    category: "course",
    name: { ja:"紅梅の膳", en:"Kobai no Zen — Red Plum Course", ko:"고바이노젠 — 홍매 코스", zhHans:"红梅御膳（Kobai no Zen）", zhHant:"紅梅御膳（Kobai no Zen）", eo:"Kobai-no-Zen — Ruĝpruna menuo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"小鉢，白焼，蒲焼・ご飯・きも吸・香の物，デザート", en:"Small side dish; shirayaki (salt-grilled eel); kabayaki (grilled eel with sauce), rice, eel liver soup & pickles; dessert", ko:"작은 반찬, 시라야키(소금구이 장어), 가바야키(양념 장어구이)·밥·장어 간 국·절임, 디저트", zhHans:"小菜、白烧鳗鱼、蒲烧鳗鱼·米饭·鳗鱼肝汤·腌菜、甜点", zhHant:"小菜、白燒鰻魚、蒲燒鰻魚・米飯・鰻魚肝湯・醃菜、甜點", eo:"Malgranda kromplado; ŝirajaki (sale rostita angilo); kabajaki (rostita angilo kun saŭco), rizo, supo kun angila hepato kaj piklaĵoj; deserto" },
    image: null,
    labels: [],
    optionGroups: ["course-main"],
    slipLines: [{ fromChoice:"course-main" }],
    variants: [{ id:"kobai-no-zen", size:null, price:6470, slipName:"紅梅" }]
  },
  {
    id: "ai-no-zen",
    service: "dinein",
    category: "course",
    name: { ja:"藍の膳", en:"Ai no Zen — Indigo Course", ko:"아이노젠 — 쪽빛 코스", zhHans:"蓝御膳（Ai no Zen）", zhHant:"藍御膳（Ai no Zen）", eo:"Ai-no-Zen — Indiga menuo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"前菜，小鉢一品，白焼，蒲焼・ご飯・きも吸・香の物，デザート", en:"Appetizer; one small side dish; shirayaki (salt-grilled eel); kabayaki (grilled eel with sauce), rice, eel liver soup & pickles; dessert", ko:"전채, 작은 반찬 한 가지, 시라야키(소금구이 장어), 가바야키(양념 장어구이)·밥·장어 간 국·절임, 디저트", zhHans:"前菜、小菜一道、白烧鳗鱼、蒲烧鳗鱼·米饭·鳗鱼肝汤·腌菜、甜点", zhHant:"前菜、小菜一道、白燒鰻魚、蒲燒鰻魚・米飯・鰻魚肝湯・醃菜、甜點", eo:"Antaŭmanĝaĵo; unu malgranda kromplado; ŝirajaki (sale rostita angilo); kabajaki (rostita angilo kun saŭco), rizo, supo kun angila hepato kaj piklaĵoj; deserto" },
    image: null,
    labels: [],
    optionGroups: ["course-main"],
    slipLines: [{ fromChoice:"course-main" }],
    variants: [{ id:"ai-no-zen", size:null, price:7120, slipName:"藍の膳" }]
  },
  {
    id: "moegi-no-zen",
    service: "dinein",
    category: "course",
    name: { ja:"萌葱の膳", en:"Moegi no Zen — Spring Green Course", ko:"모에기노젠 — 연두 코스", zhHans:"萌葱御膳（Moegi no Zen）", zhHant:"萌蔥御膳（Moegi no Zen）", eo:"Moegi-no-Zen — Printempverda menuo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"前菜，小鉢一品，国産牛直火焼，白焼，蒲焼・ご飯・きも吸・香の物，デザート", en:"Appetizer; one small side dish; flame-grilled Japanese beef; shirayaki (salt-grilled eel); kabayaki (grilled eel with sauce), rice, eel liver soup & pickles; dessert", ko:"전채, 작은 반찬 한 가지, 국산 소고기 직화구이, 시라야키(소금구이 장어), 가바야키(양념 장어구이)·밥·장어 간 국·절임, 디저트", zhHans:"前菜、小菜一道、日本产牛肉直火烤、白烧鳗鱼、蒲烧鳗鱼·米饭·鳗鱼肝汤·腌菜、甜点", zhHant:"前菜、小菜一道、日本產牛肉直火烤、白燒鰻魚、蒲燒鰻魚・米飯・鰻魚肝湯・醃菜、甜點", eo:"Antaŭmanĝaĵo; unu malgranda kromplado; flamrostita japana bovaĵo; ŝirajaki (sale rostita angilo); kabajaki (rostita angilo kun saŭco), rizo, supo kun angila hepato kaj piklaĵoj; deserto" },
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic", "course-main"],
    slipLines: [{ label:"国産牛", groups:["doneness", "garlic"] }, { fromChoice:"course-main" }],
    variants: [{ id:"moegi-no-zen", size:null, price:6690, slipName:"もえぎ" }]
  },
  {
    id: "takeout-unadon-bento",
    service: "takeout",
    category: "takeout-bento-unagi",
    name: { ja:"国内産 手焼き うなぎ丼弁当", en:"Unadon Bento — Hand-Grilled Japanese Eel over Rice", ko:"우나동 도시락 — 국산 수제 장어구이 덮밥", zhHans:"国产手烤鳗鱼盖饭便当（Unadon Bento）", zhHant:"國產手烤鰻魚丼便當（Unadon Bento）", eo:"Unadon-bento — Mane rostita japana angilo sur rizo" },
    desc: { ja:"地焼きでじっくり焼き上げた蒲焼きを厳選したお米で炊いた白ご飯にのせました。", en:"Eel slowly grilled in the jiyaki style (grilled without steaming), placed on white rice cooked from carefully selected rice.", ko:"지야키 방식(찌지 않고 굽기)으로 천천히 구운 장어를 엄선한 쌀로 지은 흰밥 위에 올렸습니다.", zhHans:"以地烧方式（不经蒸制直接烤）慢慢烤制的蒲烧鳗鱼，铺在严选大米煮成的白米饭上。", zhHant:"以地燒方式（不經蒸製直接烤）慢慢烤製的蒲燒鰻魚，鋪在嚴選白米煮成的白飯上。", eo:"Angilo malrapide rostita laŭ la stilo ĝijaki (rostita sen vaporkuirado), metita sur blankan rizon el zorge elektita rizo." },
    allergens: ["wheat"],
    included: { ja:"漬け物，うなぎのタレ，山椒", en:"Pickles, eel sauce, sansho pepper", ko:"절임, 장어 소스, 산초", zhHans:"腌菜、鳗鱼酱汁、山椒", zhHant:"醃菜、鰻魚醬汁、山椒", eo:"Piklaĵoj, angila saŭco, sanŝo-pipro" },
    image: null,
    labels: [],
    optionGroups: ["kimosui", "paperbag"],
    variants: [
      {
        id: "takeout-unadon-bento-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2270,
        slipName: "持 並弁当"
      },
      {
        id: "takeout-unadon-bento-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3130,
        slipName: "持 中弁当"
      },
      {
        id: "takeout-unadon-bento-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 3900,
        slipName: "持 上弁当"
      },
      {
        id: "takeout-unadon-bento-dai",
        size: { ja:"大串（うなぎ6切れ）", en:"Extra Large — 6 pieces of eel", ko:"대 — 장어 6조각", zhHans:"大 — 鳗鱼6块", zhHant:"大 — 鰻魚6塊", eo:"Ekstra granda — 6 pecoj de angilo" },
        price: 4750,
        slipName: "持 大弁当"
      }
    ]
  },
  {
    id: "takeout-seiro-mushi",
    service: "takeout",
    category: "takeout-bento-unagi",
    name: { ja:"国内産うなぎせいろ蒸し", en:"Seiro-mushi — Japanese Eel Steamed over Sauce-Seasoned Rice", ko:"세이로무시 — 국산 장어와 양념 밥을 함께 쪄낸 요리", zhHans:"国产蒸笼鳗鱼饭（Seiro-mushi）", zhHant:"國產蒸籠鰻魚飯（Seiro-mushi）", eo:"Seiro-muŝi — Japana angilo vaporkuirita sur saŭcita rizo" },
    desc: { ja:"高火力で一気に蒸す為、鰻はふっくらタレご飯との相性は抜群です。", en:"Steamed quickly over high heat, so the eel is plump and pairs perfectly with the sauce-seasoned rice.", ko:"강한 불로 단숨에 쪄내 장어는 폭신하고, 양념 밥과의 궁합이 뛰어납니다.", zhHans:"以大火一口气蒸制，鳗鱼松软饱满，与酱汁米饭绝配。", zhHant:"以大火一口氣蒸製，鰻魚鬆軟飽滿，與醬汁米飯絕配。", eo:"Rapide vaporkuirita super forta fajro, do la angilo estas mola kaj perfekte kongruas kun la saŭcita rizo." },
    allergens: ["egg", "wheat", "sesame"],
    included: { ja:"漬け物，ネギ，うなぎのタレ，山椒", en:"Pickles, green onion, eel sauce, sansho pepper", ko:"절임, 파, 장어 소스, 산초", zhHans:"腌菜、葱、鳗鱼酱汁、山椒", zhHant:"醃菜、蔥、鰻魚醬汁、山椒", eo:"Piklaĵoj, verda cepo, angila saŭco, sanŝo-pipro" },
    image: null,
    labels: [],
    optionGroups: ["kimosui", "paperbag"],
    variants: [
      {
        id: "takeout-seiro-mushi-nami",
        size: { ja:"並串（うなぎ2切れ）", en:"Regular — 2 pieces of eel", ko:"보통 — 장어 2조각", zhHans:"并 — 鳗鱼2块", zhHant:"並 — 鰻魚2塊", eo:"Normala — 2 pecoj de angilo" },
        price: 2270,
        slipName: "持 並セイロ弁当"
      },
      {
        id: "takeout-seiro-mushi-chu",
        size: { ja:"中串（うなぎ3切れ）", en:"Medium — 3 pieces of eel", ko:"중 — 장어 3조각", zhHans:"中 — 鳗鱼3块", zhHant:"中 — 鰻魚3塊", eo:"Meza — 3 pecoj de angilo" },
        price: 3130,
        slipName: "持 中セイロ弁当"
      },
      {
        id: "takeout-seiro-mushi-jo",
        size: { ja:"上串（うなぎ4切れ）", en:"Large — 4 pieces of eel", ko:"상 — 장어 4조각", zhHans:"上 — 鳗鱼4块", zhHant:"上 — 鰻魚4塊", eo:"Granda — 4 pecoj de angilo" },
        price: 3900,
        slipName: "持 上セイロ弁当"
      }
    ]
  },
  {
    id: "takeout-sagari-bento",
    service: "takeout",
    category: "takeout-bento-niku",
    name: { ja:"国産牛サガリ直火焼弁当", en:"Sagari Bento — Flame-Grilled Japanese Beef Hanger Steak", ko:"사가리 도시락 — 국산 소 안창살 직화구이", zhHans:"日本产牛横膈膜直火烤便当（Sagari）", zhHant:"日本產牛橫膈膜直火烤便當（Sagari）", eo:"Sagari-bento — Flamrostita diafragmo de japana bovo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"漬け物", en:"Pickles", ko:"절임", zhHans:"腌菜", zhHant:"醃菜", eo:"Piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic", "kimosui", "paperbag"],
    variants: [
      { id:"takeout-sagari-bento", size:null, price:4790, slipName:"持 サガリ弁当" }
    ]
  },
  {
    id: "takeout-wagyu-rosu-bento",
    service: "takeout",
    category: "takeout-bento-niku",
    name: { ja:"黒毛和牛ロース直火焼弁当", en:"Wagyu Loin Bento — Flame-Grilled Japanese Black Wagyu Loin", ko:"와규 로스 도시락 — 흑모 와규 등심 직화구이", zhHans:"黑毛和牛里脊直火烤便当（Wagyu Rosu）", zhHant:"黑毛和牛里肌直火烤便當（Wagyu Rosu）", eo:"Wagyu-lumbaĵo-bento — Flamrostita lumbaĵo de japana nigra bovo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"漬け物", en:"Pickles", ko:"절임", zhHans:"腌菜", zhHant:"醃菜", eo:"Piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic", "kimosui", "paperbag"],
    variants: [
      { id:"takeout-wagyu-rosu-bento", size:null, price:5630, slipName:"持 ロース弁当" }
    ]
  },
  {
    id: "takeout-wagyu-hire-bento",
    service: "takeout",
    category: "takeout-bento-niku",
    name: { ja:"黒毛和牛ヒレ直火焼弁当", en:"Wagyu Fillet Bento — Flame-Grilled Japanese Black Wagyu Tenderloin", ko:"와규 히레 도시락 — 흑모 와규 안심 직화구이", zhHans:"黑毛和牛菲力直火烤便当（Wagyu Hire）", zhHant:"黑毛和牛菲力直火烤便當（Wagyu Hire）", eo:"Wagyu-fileo-bento — Flamrostita fileo de japana nigra bovo" },
    desc: null,
    allergens: ["egg", "wheat"],
    included: { ja:"漬け物", en:"Pickles", ko:"절임", zhHans:"腌菜", zhHant:"醃菜", eo:"Piklaĵoj" },
    image: null,
    labels: [],
    optionGroups: ["doneness", "garlic", "kimosui", "paperbag"],
    variants: [
      { id:"takeout-wagyu-hire-bento", size:null, price:6300, slipName:"持 ヒレ弁当" }
    ]
  },
  {
    id: "takeout-kabayaki",
    service: "takeout",
    category: "takeout-tanpin",
    name: { ja:"国内産 手焼き 活うなぎ蒲焼き", en:"Kabayaki — Hand-Grilled Japanese Eel with Sauce (Eel Only)", ko:"가바야키 — 국산 수제 양념 장어구이 (장어만)", zhHans:"国产手烤蒲烧鳗鱼（Kabayaki，单点）", zhHant:"國產手烤蒲燒鰻魚（Kabayaki，單點）", eo:"Kabajaki — Mane rostita japana angilo kun saŭco (nur angilo)" },
    desc: { ja:"活きた鰻を店内で捌き熟練の職人の技で焼いています。", en:"Live eel is filleted in our restaurant and grilled with the skill of our experienced chefs.", ko:"살아 있는 장어를 가게에서 직접 손질해 숙련된 장인의 솜씨로 굽습니다.", zhHans:"活鳗在店内现剖，由熟练师傅的手艺烤制而成。", zhHant:"活鰻在店內現剖，由熟練師傅的手藝烤製而成。", eo:"Viva angilo estas fileita en nia restoracio kaj rostita per la lerteco de niaj spertaj kuiristoj." },
    allergens: ["wheat"],
    included: { ja:"うなぎのタレ，山椒", en:"Eel sauce, sansho pepper", ko:"장어 소스, 산초", zhHans:"鳗鱼酱汁、山椒", zhHant:"鰻魚醬汁、山椒", eo:"Angila saŭco, sanŝo-pipro" },
    image: null,
    labels: [],
    optionGroups: ["kimosui", "paperbag"],
    variants: [
      {
        id: "takeout-kabayaki-sho",
        size: { ja:"小", en:"Small", ko:"소", zhHans:"小", zhHant:"小", eo:"Malgranda" },
        price: 4250,
        slipName: "持 蒲焼き 小"
      },
      {
        id: "takeout-kabayaki-chu",
        size: { ja:"中", en:"Medium", ko:"중", zhHans:"中", zhHant:"中", eo:"Meza" },
        price: 4500,
        slipName: "持 蒲焼き 中"
      },
      {
        id: "takeout-kabayaki-dai",
        size: { ja:"大", en:"Large", ko:"대", zhHans:"大", zhHant:"大", eo:"Granda" },
        price: 4750,
        slipName: "持 蒲焼き 大"
      }
    ]
  },
  {
    id: "takeout-shirayaki",
    service: "takeout",
    category: "takeout-tanpin",
    name: { ja:"国内産 手焼き 活うなぎ白焼き", en:"Shirayaki — Hand-Grilled Japanese Eel, No Sauce (Eel Only)", ko:"시라야키 — 국산 수제 소금구이 장어 (장어만)", zhHans:"国产手烤白烧鳗鱼（Shirayaki，单点）", zhHant:"國產手烤白燒鰻魚（Shirayaki，單點）", eo:"Ŝirajaki — Mane rostita japana angilo sen saŭco (nur angilo)" },
    desc: null,
    allergens: ["wheat"],
    included: { ja:"うなぎのタレ，ポン酢，山椒", en:"Eel sauce, ponzu, sansho pepper", ko:"장어 소스, 폰즈, 산초", zhHans:"鳗鱼酱汁、柑橘醋、山椒", zhHant:"鰻魚醬汁、柑橘醋、山椒", eo:"Angila saŭco, ponzu, sanŝo-pipro" },
    image: null,
    labels: [],
    optionGroups: ["kimosui", "paperbag"],
    variants: [
      {
        id: "takeout-shirayaki-sho",
        size: { ja:"小", en:"Small", ko:"소", zhHans:"小", zhHant:"小", eo:"Malgranda" },
        price: 4250,
        slipName: "持 白焼き 小"
      },
      {
        id: "takeout-shirayaki-chu",
        size: { ja:"中", en:"Medium", ko:"중", zhHans:"中", zhHant:"中", eo:"Meza" },
        price: 4500,
        slipName: "持 白焼き 中"
      },
      {
        id: "takeout-shirayaki-dai",
        size: { ja:"大", en:"Large", ko:"대", zhHans:"大", zhHant:"大", eo:"Granda" },
        price: 4750,
        slipName: "持 白焼き 大"
      }
    ]
  },
  {
    id: "takeout-rice",
    service: "takeout",
    category: "takeout-other",
    name: { ja:"ご飯", en:"Steamed Rice", ko:"공기밥", zhHans:"白米饭", zhHant:"白飯", eo:"Kuirita rizo" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"takeout-rice", size:null, price:250, slipName:"持 ご飯" }]
  },
  {
    id: "takeout-kimosui",
    service: "takeout",
    category: "takeout-other",
    name: { ja:"きも吸い", en:"Kimosui — Clear Soup with Eel Liver", ko:"기모스이 — 장어 간 맑은국", zhHans:"鳗鱼肝清汤（Kimosui）", zhHant:"鰻魚肝清湯（Kimosui）", eo:"Kimosui — Klara supo kun angila hepato" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["kimosui-temp"],
    variants: [
      { id:"takeout-kimosui", size:null, price:290, slipName:"持 きも吸い" }
    ]
  },
  {
    id: "takeout-paperbag",
    service: "takeout",
    category: "takeout-other",
    name: { ja:"紙袋", en:"Paper Bag", ko:"종이봉투", zhHans:"纸袋", zhHant:"紙袋", eo:"Papera sako" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"takeout-paperbag", size:null, price:22, slipName:"持 紙袋" }
    ]
  },
  {
    id: "takeout-tare",
    service: "takeout",
    category: "takeout-other",
    name: { ja:"タレ", en:"Tare — Eel Sauce", ko:"타레 — 장어 소스", zhHans:"鳗鱼酱汁（Tare）", zhHant:"鰻魚醬汁（Tare）", eo:"Tare — Angila saŭco" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"takeout-tare", size:null, price:180, slipName:"持 タレ" }]
  },
  {
    id: "wine-yellowtail-cab",
    service: "dinein",
    category: "drink-wine",
    name: { ja:"イエローテイル カベルネ・ソーヴィニヨン(赤) (オーストラリア) 187ml", en:"Yellow Tail Cabernet Sauvignon (Red, Australia) 187ml", ko:"옐로우테일 까베르네 소비뇽 (레드, 호주) 187ml", zhHans:"黄尾袋鼠 赤霞珠红葡萄酒（红，澳大利亚）187ml", zhHant:"黃尾袋鼠 卡本內蘇維濃紅酒（紅，澳洲）187ml", eo:"Yellow Tail Cabernet Sauvignon (ruĝa, Aŭstralio) 187ml" },
    desc: { ja:"口当たりはなめらかながらボリュームがあり，果実味にあふれた奥行きのある味わい", en:"Smooth and full-bodied, with rich, deep fruit flavor.", ko:"부드럽고 풍부한 바디감에 깊은 과일 향이 느껴집니다.", zhHans:"口感顺滑饱满，果香浓郁深厚。", zhHant:"口感順滑飽滿，果香濃郁深厚。", eo:"Glata kaj plenkorpa, kun riĉa kaj profunda frukta gusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"wine-yellowtail-cab", size:null, price:1160, slipName:"赤ワイン" }
    ]
  },
  {
    id: "wine-concha-chardonnay",
    service: "dinein",
    category: "drink-wine",
    name: { ja:"コンチャ・イ・トロ・サンライズ・シャルドネ(白) (チリ) 250ml", en:"Concha y Toro Sunrise Chardonnay (White, Chile) 250ml", ko:"콘차 이 토로 선라이즈 샤르도네 (화이트, 칠레) 250ml", zhHans:"干露 日出霞多丽白葡萄酒（白，智利）250ml", zhHant:"康柯拉 日出夏多內白酒（白，智利）250ml", eo:"Concha y Toro Sunrise Chardonnay (blanka, Ĉilio) 250ml" },
    desc: { ja:"フレッシュな酸味と豊かな果実香が高いレベルでバランスを取っているワインです．", en:"Fresh acidity beautifully balanced with rich fruit aroma.", ko:"상큼한 산미와 풍부한 과일 향이 조화롭게 어우러집니다.", zhHans:"清新的酸度与浓郁果香完美平衡。", zhHant:"清新的酸度與濃郁果香完美平衡。", eo:"Freŝa acideco bele ekvilibrigita kun riĉa frukta aromo." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"wine-concha-chardonnay", size:null, price:1160, slipName:"白ワイン" }
    ]
  },
  {
    id: "sparkling-freixenet",
    service: "dinein",
    category: "drink-sparkling",
    name: { ja:"フレシネ・コルドン・ネグロ・ブリュット 200ml", en:"Freixenet Cordon Negro Brut 200ml", ko:"프레시넷 코르동 네그로 브뤼 200ml", zhHans:"菲斯奈特 黑色系列干型气泡酒 200ml", zhHant:"菲斯奈特 黑色系列 Brut 氣泡酒 200ml", eo:"Freixenet Cordon Negro Brut 200ml" },
    desc: { ja:"フルーティーな香り，華やかな風味の辛口スパークリングです．", en:"A dry sparkling wine with fruity aroma and gorgeous flavor.", ko:"과일 향이 풍부하고 화려한 맛의 드라이 스파클링 와인입니다.", zhHans:"干型气泡酒，果香怡人，口感华丽。", zhHant:"乾型氣泡酒，果香怡人，口感華麗。", eo:"Seka spumvino kun frukta aromo kaj bonega gusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"sparkling-freixenet", size:null, price:1430, slipName:"スパークリング" }
    ]
  },
  {
    id: "sake-kikumasamune",
    service: "dinein",
    category: "drink-sake",
    name: { ja:"菊正宗 (兵庫) 辛口", en:"Kikumasamune (Hyogo) Dry", ko:"기쿠마사무네 (효고) 드라이", zhHans:"菊正宗（兵库）辛口", zhHant:"菊正宗（兵庫）辛口", eo:"Kikumasamune (Hyogo) seka" },
    desc: { ja:"灘の宮水と山田錦が端麗でありながら深い味わいを醸し出します．", en:"Brewed with Nada's famous water and Yamada Nishiki rice — crisp yet deep in flavor.", ko:"나다의 명수와 야마다니시키 쌀로 빚어 깔끔하면서도 깊은 맛을 자랑합니다.", zhHans:"选用滩地名水与山田锦米酿造，口感清爽又不失深邃。", zhHant:"選用灘地名水與山田錦米釀造，口感清爽又不失深邃。", eo:"Farita per la fama akvo de Nada kaj rizo Yamada Nishiki — freŝa, tamen profunda gusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["ochoko-count", "serving-sake"],
    vessel: "tokkuri",
    variants: [
      { id:"sake-kikumasamune", size:null, price:700, slipName:"菊正宗（清酒）" }
    ]
  },
  {
    id: "sake-daishichi",
    service: "dinein",
    category: "drink-sake",
    name: { ja:"大七 純米生酛 (福島)", en:"Daishichi Junmai Kimoto (Fukushima)", ko:"다이시치 준마이 기모토 (후쿠시마)", zhHans:"大七 纯米生酛（福岛）", zhHant:"大七 純米生酛（福島）", eo:"Daishichi Junmai Kimoto (Fukushima)" },
    desc: { ja:"豊かなコクの旨味，上品な香りで後味のキレ良し．", en:"Rich, deep umami with an elegant aroma and clean finish.", ko:"깊고 진한 감칠맛과 우아한 향, 깔끔한 여운이 특징입니다.", zhHans:"浓郁深厚的鲜味，香气优雅，余韵清爽。", zhHant:"濃郁深厚的鮮味，香氣優雅，餘韻清爽。", eo:"Riĉa, profunda umami kun eleganta aromo kaj pura postgusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["ochoko-count", "serving-sake"],
    vessel: "tokkuri",
    variants: [
      { id:"sake-daishichi", size:null, price:750, slipName:"きもと" }
    ]
  },
  {
    id: "sake-kubota",
    service: "dinein",
    category: "drink-sake",
    name: { ja:"久保田 (新潟) 千寿", en:"Kubota Senju (Niigata)", ko:"구보타 센주 (니가타)", zhHans:"久保田 千寿（新潟）", zhHant:"久保田 千壽（新潟）", eo:"Kubota Senju (Niigata)" },
    desc: { ja:"飲み口のスッキリとした辛口．上品でやさしい香味．", en:"A clean, dry sake with an elegant, gentle aroma.", ko:"깔끔하고 드라이하며 우아하고 은은한 향이 특징인 사케입니다.", zhHans:"口感清爽干净，香气优雅柔和。", zhHant:"口感清爽乾淨，香氣優雅柔和。", eo:"Pura, seka sakeo kun eleganta kaj milda aromo." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["ochoko-count", "serving-sake"],
    vessel: "tokkuri",
    variants: [{ id:"sake-kubota", size:null, price:770, slipName:"久保田" }]
  },
  {
    id: "reishu-umeshu",
    service: "dinein",
    category: "drink-reishu",
    name: { ja:"梅酒 (グラス)", en:"Plum Wine (Glass)", ko:"우메슈 매실주 (잔)", zhHans:"梅酒（杯装）", zhHant:"梅酒（杯裝）", eo:"Prunvino (glaso)" },
    desc: { ja:"白玉の手作り梅酒です．", en:"Handmade Shiratama plum wine.", ko:"수제 시라타마 매실주입니다.", zhHans:"手工酿造的白玉梅酒。", zhHant:"手工釀造的白玉梅酒。", eo:"Mane farita prunvino de Shiratama." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["serving-umeshu"],
    variants: [{ id:"reishu-umeshu", size:null, price:620, slipName:"梅酒" }]
  },
  {
    id: "reishu-kikumasamune",
    service: "dinein",
    category: "drink-reishu",
    name: { ja:"菊正宗 (兵庫) 辛口 / 生貯蔵酒 / 180ml", en:"Kikumasamune (Hyogo) Dry / Namachozo / 180ml", ko:"기쿠마사무네 (효고) 드라이 / 나마초조슈 / 180ml", zhHans:"菊正宗（兵库）辛口／生贮藏酒／180ml", zhHant:"菊正宗（兵庫）辛口／生貯藏酒／180ml", eo:"Kikumasamune (Hyogo) seka / Namachozo / 180ml" },
    desc: { ja:"丸米仕込みでお米本来のうまみを十分引き出した「押し味」のある冷酒です．", en:"Whole-grain brewing draws out the rice's natural umami — a crisp, full-flavored chilled sake.", ko:"쌀알을 통째로 사용한 양조법으로 쌀 본연의 감칠맛을 살린, 산뜻하고 풍미 가득한 냉주입니다.", zhHans:"整粒酿造工艺充分释放米的天然鲜味，口感清爽、风味十足的冷酒。", zhHant:"整粒釀造工藝充分釋放米的天然鮮味，口感清爽、風味十足的冷酒。", eo:"Ŝlifado de la tuta rizgrajno elvokas la naturan umami de la rizo — freŝa kaj plengusta malvarma sakeo." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"reishu-kikumasamune", size:null, price:700, slipName:"菊正宗（冷酒）" }
    ]
  },
  {
    id: "reishu-suishin",
    service: "dinein",
    category: "drink-reishu",
    name: { ja:"酔心 (広島) 甘口 / 特別本醸造 / 300ml", en:"Suishin (Hiroshima) Sweet / Tokubetsu Honjozo / 300ml", ko:"스이신 (히로시마) 스위트 / 도쿠베츠 혼조조 / 300ml", zhHans:"醉心（广岛）甘口／特别本酿造／300ml", zhHant:"醉心（廣島）甘口／特別本釀造／300ml", eo:"Suishin (Hiroshima) dolĉa / Tokubetsu Honjozo / 300ml" },
    desc: { ja:"スッキリとした酸味は常に上品さを与え，爽やかな口当たりは飲みあきしません．", en:"Consistently elegant acidity with a refreshing taste you won't tire of.", ko:"한결같이 우아한 산미와 질리지 않는 상쾌한 맛이 특징입니다.", zhHans:"始终如一的优雅酸度，口感清爽不腻。", zhHant:"始終如一的優雅酸度，口感清爽不膩。", eo:"Ĉiam eleganta acideco kaj refreŝiga gusto, kiun oni neniam enuiĝas trinki." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [{ id:"reishu-suishin", size:null, price:990, slipName:"酔心" }]
  },
  {
    id: "reishu-asahiyama",
    service: "dinein",
    category: "drink-reishu",
    name: { ja:"朝日山 (新潟) 辛口 / 特別本醸造 / 300ml", en:"Asahiyama (Niigata) Dry / Tokubetsu Honjozo / 300ml", ko:"아사히야마 (니가타) 드라이 / 도쿠베츠 혼조조 / 300ml", zhHans:"朝日山（新潟）辛口／特别本酿造／300ml", zhHant:"朝日山（新潟）辛口／特別本釀造／300ml", eo:"Asahiyama (Niigata) seka / Tokubetsu Honjozo / 300ml" },
    desc: { ja:"絞ってからの火入（加熱処理）を行わない本生酒です．口当たりの良い冷酒です．", en:"Unpasteurized after pressing — smooth and easy to drink chilled.", ko:"압착 후 살균하지 않아 부드럽고 시원하게 마시기 좋습니다.", zhHans:"压榨后未经加热杀菌，口感顺滑，冰镇饮用格外顺口。", zhHant:"壓榨後未經加熱殺菌，口感順滑，冰鎮飲用格外順口。", eo:"Ne pasteŭrizita post premado — glata kaj facile trinkebla malvarme." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"reishu-asahiyama", size:null, price:1330, slipName:"朝日山" }
    ]
  },
  {
    id: "reishu-nishinoseki",
    service: "dinein",
    category: "drink-reishu",
    name: { ja:"西の関 (大分) 辛口 / 特別本醸造 / 300ml", en:"Nishinoseki (Oita) Dry / Tokubetsu Honjozo / 300ml", ko:"니시노세키 (오이타) 드라이 / 도쿠베츠 혼조조 / 300ml", zhHans:"西之关（大分）辛口／特别本酿造／300ml", zhHant:"西之關（大分）辛口／特別本釀造／300ml", eo:"Nishinoseki (Oita) seka / Tokubetsu Honjozo / 300ml" },
    desc: { ja:"香り高く芳ばしい濃厚な旨口．", en:"Highly aromatic with a rich, savory taste.", ko:"향이 풍부하고 진하고 감칠맛 나는 맛이 특징입니다.", zhHans:"香气浓郁，滋味醇厚鲜美。", zhHant:"香氣濃郁，滋味醇厚鮮美。", eo:"Tre aroma kun riĉa, bongusta gusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"reishu-nishinoseki", size:null, price:1520, slipName:"西の関" }
    ]
  },
  {
    id: "reishu-ugonotsuki",
    service: "dinein",
    category: "drink-reishu",
    name: { ja:"雨後の月 (広島) 辛口 / 大吟醸 / 300ml", en:"Ugonotsuki (Hiroshima) Dry / Daiginjo / 300ml", ko:"우고노츠키 (히로시마) 드라이 / 다이긴조 / 300ml", zhHans:"雨后之月（广岛）辛口／大吟酿／300ml", zhHant:"雨後之月（廣島）辛口／大吟釀／300ml", eo:"Ugonotsuki (Hiroshima) seka / Daiginjo / 300ml" },
    desc: { ja:"キリッと辛口．すっきりとした味わい．国内外で数々の賞を受賞．", en:"Crisp and dry with a clean finish — winner of numerous awards at home and abroad.", ko:"산뜻하고 드라이하며 깔끔한 여운이 특징으로, 국내외 각종 대회에서 수상한 명주입니다.", zhHans:"口感清爽干冽，余韵干净，曾在国内外屡获殊荣。", zhHant:"口感清爽乾冽，餘韻乾淨，曾在國內外屢獲殊榮。", eo:"Freŝa kaj seka kun pura postgusto — gajninto de multaj premioj hejme kaj eksterlande." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"reishu-ugonotsuki", size:null, price:1780, slipName:"雨後の月" }
    ]
  },
  {
    id: "beer-asahi-draft-glass",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"生ビール アサヒスーパードライ (グラス) 250ml", en:"Draft Beer — Asahi Super Dry (Glass) 250ml", ko:"생맥주 아사히 슈퍼 드라이 (글라스) 250ml", zhHans:"生啤酒 朝日超爽（杯装） 250ml", zhHant:"生啤酒 朝日超爽（杯裝） 250ml", eo:"Barelbiero — Asahi Super Dry (glaso) 250ml" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"beer-asahi-draft-glass", size:null, price:580, slipName:"グラスB" }
    ]
  },
  {
    id: "beer-asahi-draft-mug",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"生ビール アサヒスーパードライ (ジョッキ) 350ml", en:"Draft Beer — Asahi Super Dry (Mug) 350ml", ko:"생맥주 아사히 슈퍼 드라이 (조끼) 350ml", zhHans:"生啤酒 朝日超爽（扎杯） 350ml", zhHant:"生啤酒 朝日超爽（大杯） 350ml", eo:"Barelbiero — Asahi Super Dry (ĉopo) 350ml" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"beer-asahi-draft-mug", size:null, price:700, slipName:"生B" }
    ]
  },
  {
    id: "beer-asahi-bottle",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"アサヒスーパードライ (中瓶)", en:"Asahi Super Dry (Bottle)", ko:"아사히 슈퍼 드라이 (병)", zhHans:"朝日超爽（中瓶）", zhHant:"朝日超爽（中瓶）", eo:"Asahi Super Dry (botelo)" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"beer-asahi-bottle", size:null, price:700, slipName:"アサヒB" }
    ]
  },
  {
    id: "beer-kirin-bottle",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"キリンラガー (中瓶)", en:"Kirin Lager (Bottle)", ko:"기린 라거 (병)", zhHans:"麒麟拉格（中瓶）", zhHant:"麒麟拉格（中瓶）", eo:"Kirin Lager (botelo)" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"beer-kirin-bottle", size:null, price:700, slipName:"キリンB" }
    ]
  },
  {
    id: "beer-yebisu-bottle",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"エビスビール (中瓶)", en:"Yebisu Beer (Bottle)", ko:"에비스 맥주 (병)", zhHans:"惠比寿啤酒（中瓶）", zhHant:"惠比壽啤酒（中瓶）", eo:"Yebisu-biero (botelo)" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"beer-yebisu-bottle", size:null, price:750, slipName:"エビスB" }
    ]
  },
  {
    id: "beer-nonalcohol",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"ノンアルコールビール (小瓶)", en:"Non-Alcoholic Beer (Small Bottle)", ko:"논알코올 맥주 (작은 병)", zhHans:"无酒精啤酒（小瓶）", zhHant:"無酒精啤酒（小瓶）", eo:"Nealkohola biero (malgranda botelo)" },
    desc: { ja:"（アルコール0.00%）", en:"(0.00% alcohol)", ko:"(알코올 0.00%)", zhHans:"（酒精浓度0.00%）", zhHant:"（酒精濃度0.00%）", eo:"(0,00% alkoholo)" },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count"],
    vessel: "bottle",
    variants: [
      { id:"beer-nonalcohol", size:null, price:390, slipName:"ノンアル" }
    ]
  },
  {
    id: "beer-highball",
    service: "dinein",
    category: "drink-beer",
    name: { ja:"ハイボール", en:"Highball", ko:"하이볼", zhHans:"威士忌苏打（Highball）", zhHant:"威士忌蘇打（Highball）", eo:"Highball" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"beer-highball", size:null, price:580, slipName:"ハイボール" }
    ]
  },
  {
    id: "shochu-kurokirishima",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"黒霧島 (いも)", en:"Kurokirishima (Sweet Potato)", ko:"구로키리시마 (고구마)", zhHans:"黑雾岛（地瓜烧酒）", zhHant:"黑霧島（地瓜燒酒）", eo:"Kurokirishima (batato)" },
    desc: { ja:"黒麹の醸すうまさはトロリとしたあまみ，キリッとした後切れにあります．", en:"Black-koji sweetness with a smooth, crisp finish.", ko:"흑국의 은은한 단맛과 부드럽고 깔끔한 여운이 특징입니다.", zhHans:"黑曲的醇厚甘甜，口感顺滑清爽。", zhHant:"黑麴的醇厚甘甜，口感順滑清爽。", eo:"Dolĉeco de nigra koji kun glata, freŝa postgusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-kurokirishima", size:null, price:580, slipName:"黒霧島" }
    ]
  },
  {
    id: "shochu-rokudaime-yuri",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"六代目百合 (いも)", en:"Rokudaime Yuri (Sweet Potato)", ko:"로쿠다이메 유리 (고구마)", zhHans:"六代目百合（地瓜烧酒）", zhHant:"六代目百合（地瓜燒酒）", eo:"Rokudaime Yuri (batato)" },
    desc: { ja:"原料の芋の風味を最大限にいかした，軽快ながらも奥深い味わい．", en:"Light yet deep flavor that fully expresses the aroma of the sweet potato.", ko:"가볍지만 깊은 맛으로 고구마 본연의 향을 풍부하게 느낄 수 있습니다.", zhHans:"口感轻盈却层次丰富，充分展现地瓜的香气。", zhHant:"口感輕盈卻層次豐富，充分展現地瓜的香氣。", eo:"Malpeza sed profunda gusto, kiu plene esprimas la aromon de la batato." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-rokudaime-yuri", size:null, price:700, slipName:"六代目百合" }
    ]
  },
  {
    id: "shochu-akarui-nouson",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"明るい農村 赤芋仕込み (いも)", en:"Akarui Nouson Aka-imo Jikomi (Sweet Potato)", ko:"아카루이 노손 아카이모 지코미 (고구마)", zhHans:"明亮农村 红薯酿造（地瓜烧酒）", zhHant:"明亮農村 紅薯釀造（地瓜燒酒）", eo:"Akarui Nouson Aka-imo Jikomi (batato)" },
    desc: { ja:"赤芋によるフルーティな香りとやさしい甘さ．すっきりとした飲み口が特長．", en:"Fruity aroma and gentle sweetness from red sweet potato, with a clean finish.", ko:"붉은 고구마 특유의 과일 향과 은은한 단맛, 깔끔한 여운이 특징입니다.", zhHans:"红薯特有的果香与温和甜味，余韵干净。", zhHant:"紅薯特有的果香與溫和甜味，餘韻乾淨。", eo:"Frukta aromo kaj milda dolĉeco de ruĝa batato, kun pura postgusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-akarui-nouson", size:null, price:810, slipName:"明るい農村" }
    ]
  },
  {
    id: "shochu-nikaido",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"二階堂 (むぎ)", en:"Nikaido (Barley)", ko:"니카이도 (보리)", zhHans:"二阶堂（麦烧酒）", zhHant:"二階堂（麥燒酒）", eo:"Nikaido (hordeo)" },
    desc: { ja:"麦100%を使用して麦焼酎を開発し，原材料をそのまま銘柄としています．", en:"Made from 100% barley, named directly after its raw ingredient.", ko:"보리 100%로 만들어져 원재료의 이름을 그대로 딴 소주입니다.", zhHans:"100%大麦酿造，直接以原料命名。", zhHant:"100%大麥釀造，直接以原料命名。", eo:"Farita el 100% hordeo, nomita rekte laŭ sia ingredienco." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-nikaido", size:null, price:580, slipName:"二階堂" }
    ]
  },
  {
    id: "shochu-obinokurakara",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"おびの蔵から (むぎ)", en:"Obi no Kura Kara (Barley)", ko:"오비노쿠라카라 (보리)", zhHans:"饫肥藏（麦烧酒）", zhHant:"飫肥藏（麥燒酒）", eo:"Obi no Kura Kara (hordeo)" },
    desc: { ja:"古酒をブレンドすることで，麦の素朴な香りと幅のある味を引き出しました．", en:"Blended with aged shochu for a rustic barley aroma and rounded flavor.", ko:"숙성 소주를 블렌딩해 구수한 보리 향과 부드러운 맛을 살렸습니다.", zhHans:"混入陈年烧酒，带来质朴的麦香与圆润口感。", zhHant:"混入陳年燒酒，帶來質樸的麥香與圓潤口感。", eo:"Miksita kun maljuna ŝoĉuo por rustika hordea aromo kaj ronda gusto." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-obinokurakara", size:null, price:580, slipName:"おびの倉から" }
    ]
  },
  {
    id: "shochu-amaterasu",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"天照 (そば)", en:"Amaterasu (Buckwheat)", ko:"아마테라스 (메밀)", zhHans:"天照（荞麦烧酒）", zhHant:"天照（蕎麥燒酒）", eo:"Amaterasu (fagopiro)" },
    desc: { ja:"減圧蒸留により，風味の軽い都会的．口当たりのまろやかさ，キレのよさが好評．", en:"Vacuum distilled for a light, refined flavor — smooth and clean.", ko:"감압 증류로 가볍고 세련된 맛을 살려 부드럽고 깔끔합니다.", zhHans:"减压蒸馏工艺造就轻盈精致的风味，口感顺滑干净。", zhHant:"減壓蒸餾工藝造就輕盈精緻的風味，口感順滑乾淨。", eo:"Vakuuma distilado donas malpezan, rafinitan guston — glatan kaj puran." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-amaterasu", size:null, price:580, slipName:"天照" }
    ]
  },
  {
    id: "shochu-sannennetaro",
    service: "dinein",
    category: "drink-shochu",
    name: { ja:"三年寝太郎 (こめ)", en:"Sannen Netaro (Rice)", ko:"산넨 네타로 (쌀)", zhHans:"三年寝太郎（米烧酒）", zhHant:"三年寢太郎（米燒酒）", eo:"Sannen Netaro (rizo)" },
    desc: { ja:"3年間じっくり熟成．しっかりとした旨味とクセがなく飲みやすい．", en:"Slowly aged for three years — full umami with no harsh edge, easy to drink.", ko:"3년간 천천히 숙성시켜 감칠맛이 풍부하면서도 자극 없이 부드럽게 즐길 수 있습니다.", zhHans:"历经三年缓慢熟成，鲜味十足且口感圆润，易于入口。", zhHant:"歷經三年緩慢熟成，鮮味十足且口感圓潤，易於入口。", eo:"Malrapide maturigita dum tri jaroj — plena umami sen akreco, facile trinkebla." },
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: ["glass-count", "serving-shochu"],
    vessel: "bottle",
    variants: [
      { id:"shochu-sannennetaro", size:null, price:580, slipName:"三年寝太郎" }
    ]
  },
  {
    id: "soft-orange-juice",
    service: "dinein",
    category: "drink-soft",
    name: { ja:"オレンジジュース", en:"Orange Juice", ko:"오렌지 주스", zhHans:"橙汁", zhHant:"柳橙汁", eo:"Oranĝosuko" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"soft-orange-juice", size:null, price:390, slipName:"オレンジジュース" }
    ]
  },
  {
    id: "soft-kirin-lemon",
    service: "dinein",
    category: "drink-soft",
    name: { ja:"キリンレモン", en:"Kirin Lemon", ko:"기린 레몬", zhHans:"麒麟柠檬汽水", zhHant:"麒麟檸檬汽水", eo:"Kirin Lemon" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"soft-kirin-lemon", size:null, price:390, slipName:"キリンレモン" }
    ]
  },
  {
    id: "soft-cola",
    service: "dinein",
    category: "drink-soft",
    name: { ja:"コーラ", en:"Cola", ko:"콜라", zhHans:"可乐", zhHant:"可樂", eo:"Kolao" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"soft-cola", size:null, price:390, slipName:"コーラ" }]
  },
  {
    id: "soft-oolong",
    service: "dinein",
    category: "drink-soft",
    name: { ja:"ウーロン茶", en:"Oolong Tea", ko:"우롱차", zhHans:"乌龙茶", zhHant:"烏龍茶", eo:"Oolong-teo" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [{ id:"soft-oolong", size:null, price:390, slipName:"ウーロン茶" }]
  },
  {
    id: "soft-iced-coffee",
    service: "dinein",
    category: "drink-soft",
    name: { ja:"アイスコーヒー", en:"Iced Coffee", ko:"아이스 커피", zhHans:"冰咖啡", zhHant:"冰咖啡", eo:"Glacia kafo" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"soft-iced-coffee", size:null, price:450, slipName:"アイスコーヒー" }
    ]
  },
  {
    id: "soft-hot-coffee",
    service: "dinein",
    category: "drink-soft",
    name: { ja:"ホットコーヒー", en:"Hot Coffee", ko:"핫 커피", zhHans:"热咖啡", zhHant:"熱咖啡", eo:"Varma kafo" },
    desc: null,
    allergens: [],
    included: null,
    image: null,
    labels: [],
    optionGroups: [],
    variants: [
      { id:"soft-hot-coffee", size:null, price:450, slipName:"ホットコーヒー" }
    ]
  }
];

/* 店員表示画面の文言（常に日本語） */
const STAFF_TEXT = { heading:"注文内容（店員用）", drinks:"ドリンク", timingLabel:"提供" };

/* 画面の文言 */
const UI_TEXT = {
  ja: {
    listSep: "・",
    labelSep: "：",
    menuSubtitle: "モバイルメニュー",
    serviceQuestion: "ご利用方法をお選びください",
    dineIn: "店内でお召し上がり",
    takeout: "お持ち帰り",
    dineInBand: "店内",
    takeoutBand: "お持ち帰り",
    changeService: "切り替え",
    viewOrder: "注文を確認",
    yourOrder: "注文内容",
    back: "戻る",
    showToStaff: "店員に見せる",
    showToStaffNote: "この画面をスタッフにお見せください",
    add: "追加",
    choose: "選ぶ",
    addToOrder: "注文に追加",
    added: "追加しました",
    addSameAgain: "同じ内容でもう1つ",
    inCart: "カートに",
    quantity: "数量",
    subtotal: "小計",
    total: "合計",
    emptyOrder: "注文はまだありません",
    remove: "削除",
    close: "閉じる",
    selectRequired: "選択してください",
    included: "付属",
    courseContents: "内容",
    allergyLabel: "アレルギー表示",
    allergyAskStaff: "アレルギー情報は店員にお尋ねください。",
    allergyDisclaimer: "表示しているアレルギー情報は主要原材料に基づくものです。同一の調理場で他の食材を扱っているため、微量の混入を完全に防ぐことはできません。重度のアレルギーをお持ちの場合は、必ず店員にお申し付けください。",
    taxIncluded: "表示価格はすべて税込です",
    servingTimingHeading: "飲み物をお持ちするタイミング",
    timingFirst: "食事より先に",
    timingWith: "食事と一緒に",
    timingRequired: "選択してください",
    orderStopWarning: "オーダーストップの時間を過ぎています。店員にご確認ください"
  },
  en: {
    listSep: ", ",
    labelSep: ": ",
    menuSubtitle: "Mobile Menu",
    serviceQuestion: "How would you like your meal?",
    dineIn: "Dine in",
    takeout: "Takeout",
    dineInBand: "Dine in",
    takeoutBand: "Takeout",
    changeService: "Change",
    viewOrder: "View Order",
    yourOrder: "Your Order",
    back: "Back",
    showToStaff: "Show to Staff",
    showToStaffNote: "Please show this screen to staff",
    add: "Add",
    choose: "Choose",
    addToOrder: "Add to Order",
    added: "Added!",
    addSameAgain: "Add one more of the same",
    inCart: "In cart:",
    quantity: "Quantity",
    subtotal: "Subtotal",
    total: "Total",
    emptyOrder: "Your order is empty",
    remove: "Remove",
    close: "Close",
    selectRequired: "Please choose",
    included: "Comes with",
    courseContents: "Contents",
    allergyLabel: "Allergens",
    allergyAskStaff: "Please ask our staff for allergen information.",
    allergyDisclaimer: "The allergen information shown is based on the main ingredients. Because other ingredients are handled in the same kitchen, we cannot completely prevent trace cross-contamination. If you have a severe allergy, please be sure to tell our staff.",
    taxIncluded: "All prices include tax.",
    servingTimingHeading: "When should we bring your drinks?",
    timingFirst: "Before the meal",
    timingWith: "With the meal",
    timingRequired: "Please choose one to continue",
    orderStopWarning: "Last order time has passed. Please check with our staff."
  },
  ko: {
    listSep: ", ",
    labelSep: ": ",
    menuSubtitle: "모바일 메뉴",
    serviceQuestion: "이용 방법을 선택해 주세요",
    dineIn: "매장에서 식사",
    takeout: "포장",
    dineInBand: "매장 식사",
    takeoutBand: "포장",
    changeService: "변경",
    viewOrder: "주문 확인",
    yourOrder: "주문 내역",
    back: "뒤로",
    showToStaff: "직원에게 보여주기",
    showToStaffNote: "이 화면을 직원에게 보여주세요",
    add: "추가",
    choose: "선택",
    addToOrder: "주문에 추가",
    added: "추가되었습니다!",
    addSameAgain: "같은 것으로 하나 더",
    inCart: "카트에",
    quantity: "수량",
    subtotal: "소계",
    total: "합계",
    emptyOrder: "아직 주문한 항목이 없습니다",
    remove: "삭제",
    close: "닫기",
    selectRequired: "선택해 주세요",
    included: "포함",
    courseContents: "구성",
    allergyLabel: "알레르기 표시",
    allergyAskStaff: "알레르기 정보는 직원에게 문의해 주세요.",
    allergyDisclaimer: "표시된 알레르기 정보는 주요 원재료를 기준으로 합니다. 같은 조리장에서 다른 식재료도 다루고 있어 미량의 혼입을 완전히 막을 수는 없습니다. 심한 알레르기가 있으신 경우 반드시 직원에게 말씀해 주세요.",
    taxIncluded: "표시 가격은 모두 세금 포함입니다.",
    servingTimingHeading: "음료를 언제 가져다 드릴까요?",
    timingFirst: "식사 전에",
    timingWith: "식사와 함께",
    timingRequired: "선택해 주세요",
    orderStopWarning: "주문 마감 시간이 지났습니다. 직원에게 확인해 주세요."
  },
  zhHans: {
    listSep: "、",
    labelSep: "：",
    menuSubtitle: "手机菜单",
    serviceQuestion: "请选择用餐方式",
    dineIn: "堂食",
    takeout: "外带",
    dineInBand: "堂食",
    takeoutBand: "外带",
    changeService: "切换",
    viewOrder: "查看订单",
    yourOrder: "您的订单",
    back: "返回",
    showToStaff: "出示给店员",
    showToStaffNote: "请将此画面出示给店员",
    add: "添加",
    choose: "选择",
    addToOrder: "加入订单",
    added: "已添加！",
    addSameAgain: "再来一份相同的",
    inCart: "已选",
    quantity: "数量",
    subtotal: "小计",
    total: "合计",
    emptyOrder: "您的订单是空的",
    remove: "删除",
    close: "关闭",
    selectRequired: "请选择",
    included: "附带",
    courseContents: "内容",
    allergyLabel: "过敏原",
    allergyAskStaff: "过敏原信息请询问店员。",
    allergyDisclaimer: "所示过敏原信息基于主要原料。由于同一厨房也处理其他食材，无法完全避免微量混入。如您有严重过敏，请务必告知店员。",
    taxIncluded: "所有价格均含税。",
    servingTimingHeading: "饮品何时上桌？",
    timingFirst: "先于餐点上桌",
    timingWith: "与餐点一起上桌",
    timingRequired: "请选择",
    orderStopWarning: "已过最后点餐时间，请向店员确认。"
  },
  zhHant: {
    listSep: "、",
    labelSep: "：",
    menuSubtitle: "手機菜單",
    serviceQuestion: "請選擇用餐方式",
    dineIn: "內用",
    takeout: "外帶",
    dineInBand: "內用",
    takeoutBand: "外帶",
    changeService: "切換",
    viewOrder: "查看訂單",
    yourOrder: "您的訂單",
    back: "返回",
    showToStaff: "出示給店員",
    showToStaffNote: "請將此畫面出示給店員",
    add: "加入",
    choose: "選擇",
    addToOrder: "加入訂單",
    added: "已加入！",
    addSameAgain: "再來一份相同的",
    inCart: "已選",
    quantity: "數量",
    subtotal: "小計",
    total: "合計",
    emptyOrder: "您的訂單是空的",
    remove: "刪除",
    close: "關閉",
    selectRequired: "請選擇",
    included: "附帶",
    courseContents: "內容",
    allergyLabel: "過敏原",
    allergyAskStaff: "過敏原資訊請詢問店員。",
    allergyDisclaimer: "所示過敏原資訊係根據主要原料。由於同一廚房也處理其他食材，無法完全避免微量混入。如您有嚴重過敏，請務必告知店員。",
    taxIncluded: "所有價格均含稅。",
    servingTimingHeading: "飲品何時上桌？",
    timingFirst: "先於餐點上桌",
    timingWith: "與餐點一起上桌",
    timingRequired: "請選擇",
    orderStopWarning: "已過最後點餐時間，請向店員確認。"
  },
  eo: {
    listSep: ", ",
    labelSep: ": ",
    menuSubtitle: "Poŝtelefona menuo",
    serviceQuestion: "Kiel vi deziras vian manĝon?",
    dineIn: "Manĝi ĉi tie",
    takeout: "Forporti",
    dineInBand: "Ĉi tie",
    takeoutBand: "Forporte",
    changeService: "Ŝanĝi",
    viewOrder: "Vidi mendon",
    yourOrder: "Via mendo",
    back: "Reen",
    showToStaff: "Montri al la personaro",
    showToStaffNote: "Bonvolu montri ĉi tiun ekranon al la personaro",
    add: "Aldoni",
    choose: "Elekti",
    addToOrder: "Aldoni al mendo",
    added: "Aldonita!",
    addSameAgain: "Aldoni ankoraŭ unu samen",
    inCart: "En ĉaro:",
    quantity: "Kvanto",
    subtotal: "Subtotalo",
    total: "Sumo",
    emptyOrder: "Via mendo estas malplena",
    remove: "Forigi",
    close: "Fermi",
    selectRequired: "Bonvolu elekti",
    included: "Inkluzivas",
    courseContents: "Enhavo",
    allergyLabel: "Alergenoj",
    allergyAskStaff: "Bonvolu demandi nian personaron pri alergenoj.",
    allergyDisclaimer: "La montritaj informoj pri alergenoj baziĝas sur la ĉefaj ingrediencoj. Ĉar aliaj manĝaĵoj estas prilaborataj en la sama kuirejo, ni ne povas tute malhelpi spurojn de miksiĝo. Se vi havas severan alergion, nepre informu nian personaron.",
    taxIncluded: "Ĉiuj prezoj inkluzivas imposton.",
    servingTimingHeading: "Kiam ni portu viajn trinkaĵojn?",
    timingFirst: "Antaŭ la manĝo",
    timingWith: "Kune kun la manĝo",
    timingRequired: "Bonvolu elekti unu por daŭrigi",
    orderStopWarning: "La lasta mendotempo pasis. Bonvolu kontroli ĉe nia personaro."
  }
};
