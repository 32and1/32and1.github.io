// =========================================================
// ★ アフィリエイト表示設定＆教材リスト（全ページ共通で反映されます）
// =========================================================
const PR_CONFIG = {
  // 結果画面にPR枠を表示する確率 (0.6 = 約60%の確率で表示、1.0 = 毎回表示、0 = 非表示)
  showRate: 1.0,

  // 学年別の教材候補（ここを自分の商品・アフィリエイトURLに書き換えて増やしてください）
  items: {
    "1": [
      {
        title: "小学生～中1向け！イラストで覚える英単語ドリル",
        desc: "基礎単語を音声とイラストで「書く・読む」まで楽しく定着させたい方におすすめです。",
        amazonUrl: "https://link.amazon/B06SPTOxu",
        rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/0b4452f0.ce6f9970.0b4452f1.76748351/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17530942%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
      },
      {
        title: "中1英語をひとつひとつわかりやすく。",
        desc: "中学1年生の英語の土台を、超基礎からやさしい解説と問題でしっかり固められる人気シリーズです。",
        amazonUrl: "https://link.amazon/B0hrQ5NAz",
        rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/1ac05bcb.7d8e89d1.1ac05bcc.89db3d75/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbookfan%2Fbk-4053052440%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
      }
    ],
    "2": [
      {
        title: "中2英語をひとつひとつわかりやすく。",
        desc: "定期テストによく出る動詞・形容詞や文法を、スキマ時間で無理なく復習できる定番の1冊です。",
        amazonUrl: "https://link.amazon/B03666ZdX",
        rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/0b4452f0.ce6f9970.0b4452f1.76748351/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16580155%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
      },
      {
        title: "英検4級・3級 でる順パス単",
        desc: "中学前半～中2レベルの必須語彙を効率よくチェック！アプリ音声付きで通学中にも便利です。",
        amazonUrl: "https://link.amazon/B01e7bwaA",
        rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/0b4452f0.ce6f9970.0b4452f1.76748351/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18660700%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
      }
    ],
    "3": [
      {
        title: "高校入試 ターゲット1800（中学英単語）",
        desc: "長文読解や高校受験で武器になる重要単語を総仕上げ！一問一答形式で実力がつきます。",
        amazonUrl: "https://link.amazon/B02LDP67s",
        rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/0b4452f0.ce6f9970.0b4452f1.76748351/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F18501056%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
      },
      {
        title: "中学3年間の英語を10時間で復習する本",
        desc: "単語だけでなく文法や長文の読み方まで一気に総整理したい方におすすめの一冊です。",
        amazonUrl: "https://link.amazon/B0gyjwlm5",
        rakutenUrl: "https://hb.afl.rakuten.co.jp/ichiba/59c62a79.852839f9.59c62a7a.1c910144/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fmanmaru-fresta%2F20261111025253_211%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9"
      }
    ]
  }
};

const LOGO_URL = "https://32and1.com/logo.png";

// =========================================================
// 1. 初期化チェック & DB読み込み
// =========================================================
if (!window.WORDFIND_DB) {
  document.getElementById("appRoot").innerHTML =
    `<div style="padding:30px;text-align:center;font-weight:bold;">words-db.js が見つかりません。同じフォルダに配置してください。</div>`;
  throw new Error("WORDFIND_DB not loaded");
}

const SERIES_LIST = window.WORDFIND_DB.series;
const WORDS_DB = window.WORDFIND_DB.words.map(([word, meaning, grade, seriesId]) => ({
  word, meaning, grade, seriesId
}));
const WORDS_MAP = new Map(WORDS_DB.map(w => [w.word, w]));

const CURRENT_SERIES_ID = document.body.dataset.series || "all";
const CURRENT_SERIES = SERIES_LIST.find(s => s.id === CURRENT_SERIES_ID) || SERIES_LIST[0];

const MARKER_COLORS = [
  "rgba(244, 63, 94, 0.35)", "rgba(59, 130, 246, 0.35)", "rgba(16, 185, 129, 0.35)",
  "rgba(245, 158, 11, 0.38)", "rgba(168, 85, 247, 0.35)", "rgba(6, 182, 212, 0.35)",
  "rgba(236, 72, 153, 0.35)", "rgba(132, 204, 22, 0.38)", "rgba(99, 102, 241, 0.35)",
  "rgba(249, 115, 22, 0.38)"
];

// =========================================================
// 2. HTML画面の自動生成
// =========================================================
function buildSeriesSelectHtml() {
  const groups = { "1": [], "2": [], "3": [], "all": [] };
  SERIES_LIST.forEach(s => { if (groups[s.grade]) groups[s.grade].push(s); });
  const makeOpts = (arr) => arr.map(s =>
    `<option value="${s.file}" ${s.id === CURRENT_SERIES.id ? "selected" : ""}>${s.title}</option>`
  ).join("");

  return `
    <optgroup label="📘 小・中1">${makeOpts(groups["1"])}</optgroup>
    <optgroup label="📗 中2">${makeOpts(groups["2"])}</optgroup>
    <optgroup label="📕 中3">${makeOpts(groups["3"])}</optgroup>
    <optgroup label="🌟 全学年ミックス">${makeOpts(groups["all"])}</optgroup>
  `;
}

function buildQuickLinksHtml() {
  return SERIES_LIST.map(s =>
    `<a href="${s.file}" class="series-link-pill ${s.id === CURRENT_SERIES.id ? "current" : ""}">${s.gradeLabel}: ${s.shortTitle || s.title}</a>`
  ).join("");
}

function renderAppShell() {
  const poolCount = CURRENT_SERIES.id === "all"
    ? WORDS_DB.length
    : WORDS_DB.filter(w => w.seriesId === CURRENT_SERIES.id).length;

  document.getElementById("appRoot").innerHTML = `
    <canvas id="confettiCanvas"></canvas>
    <div class="app-container">
      <header>
        <div class="brand">
          <img src="${LOGO_URL}" alt="ロゴ" class="brand-logo" onerror="this.style.display='none'">
          <div>
            <h1>${CURRENT_SERIES.gradeLabel}｜${CURRENT_SERIES.title}</h1>
            <small>収録 ${poolCount}語（全シリーズ計 ${WORDS_DB.length}語・毎回ランダム）</small>
          </div>
        </div>
        <div class="header-actions">
          <div class="stat-pill" title="連続クリア回数">🔥 <span id="streakVal">0</span>連勝</div>
          <div class="stat-pill" title="ハイスコア">👑 <span id="bestScoreVal">0</span></div>
          <button class="btn btn-accent" id="openDictBtn">📖 図鑑 (<span id="dictCountVal">0</span>/${WORDS_DB.length})</button>
          <button class="btn btn-secondary" id="openTutorialBtn" title="遊び方を見る">❓ 遊び方</button>
          <button class="btn btn-icon" id="soundToggleBtn" title="効果音 ON/OFF">🔊</button>
          <button class="btn btn-icon" id="voiceToggleBtn" title="英語読み上げ ON/OFF">🗣️</button>
        </div>
      </header>

      <div class="controls-bar">
        <div class="control-group">
          <div class="select-wrap">
            <label>学年・シリーズ変更</label>
            <select id="seriesJumpSelect">${buildSeriesSelectHtml()}</select>
          </div>
          <div class="select-wrap">
            <label>リスト表示</label>
            <select id="displayModeSelect">
              <option value="both">英語 ＋ 日本語</option>
              <option value="quiz">日本語のみ（1.5倍）</option>
            </select>
          </div>
          <div class="select-wrap">
            <label>盤面サイズ</label>
            <select id="sizeSelect">
              <option value="easy">かんたん (8×8 / 6語)</option>
              <option value="normal" selected>ふつう (10×10 / 8語)</option>
              <option value="hard">むずかしい (12×12 / 10語)</option>
            </select>
          </div>
          <div class="select-wrap">
            <label>ルール</label>
            <select id="ruleSelect">
              <option value="relax">じっくり（制限なし）</option>
              <option value="time">タイムアタック (90秒)</option>
            </select>
          </div>
        </div>
        <button class="btn btn-secondary" id="newGameBtn" style="display:none;">🔄 別の問題でやり直す</button>
      </div>

      <div class="main-grid">
        <div class="panel">
          <div class="hud">
            <div class="hud-stats">
              <div class="hud-box">
                <span class="hud-label">SCORE</span>
                <span class="hud-val" id="scoreVal">0</span>
              </div>
              <div class="hud-box">
                <span class="hud-label">TIME</span>
                <span class="hud-val" id="timerVal">00:00</span>
              </div>
              <button class="btn btn-secondary" id="pauseBtn" disabled>⏸ 一時停止</button>
            </div>
            <div class="combo-badge" id="comboBadge">⚡ 2 COMBO!</div>
          </div>

          <div class="preview-bar placeholder" id="previewBar">下の「ゲームスタート！」を押して始めよう！</div>

          <div class="board-wrapper" id="boardWrapper">
            <div class="board-inner" id="boardInner">
              <svg class="lines-svg" id="linesSvg"></svg>
              <div class="grid size-10" id="grid"></div>
            </div>
            <div class="board-overlay active" id="boardOverlay">
              <img src="${LOGO_URL}" alt="ロゴ" class="overlay-logo" id="overlayLogo" onerror="this.style.display='none'">
              <div class="overlay-title" id="overlayTitle">準備はいいですか？</div>
              <div class="overlay-desc" id="overlayDesc"></div>
              <button class="btn btn-primary btn-lg" id="overlayStartBtn">▶ ゲームスタート！</button>
            </div>
          </div>

          <div class="board-footer">
            <button class="btn btn-accent" id="hintBtn" disabled>💡 ヒント (残り <span id="hintCountVal">3</span>)</button>
            <span style="font-size:0.74rem; color:var(--muted); font-weight:600;" id="directionInfo">方向: タテ・ヨコ・ナナメ</span>
          </div>
        </div>

        <div class="panel">
          <div class="list-header">
            <h2>📝 探す単語リスト</h2>
            <span class="progress-pill" id="foundProgress">0 / 8</span>
          </div>
          <div class="word-list" id="wordList"></div>

          <div class="secret-box" id="secretBox">
            <div>
              <strong style="color:#b45309;">🌟 隠しボーナス単語</strong>
              <div id="secretHintText" style="color:#78350f; margin-top:2px;">スタートするとヒントが出ます！</div>
            </div>
            <span id="secretStatusBadge" style="font-weight:900; color:#d97706;">+200pt</span>
          </div>

          <div class="series-links-box">
            <div class="series-links-title">📚 他の学年・シリーズで遊ぶ</div>
            <div class="series-links-grid">${buildQuickLinksHtml()}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- チュートリアルモーダル（スキップ可能） -->
    <div class="modal-backdrop" id="tutorialModal">
      <div class="modal tutorial-modal">
        <div class="modal-header">
          <h3>🎮 かんたん遊び方ガイド</h3>
          <button class="btn btn-ghost" id="tutCloseX" style="padding:4px 8px;">✕</button>
        </div>
        <div class="modal-body">
          <div class="tut-dots" id="tutDots"></div>
          <div class="tut-visual" id="tutVisual"></div>
          <h4 class="tut-step-title" id="tutTitle"></h4>
          <p class="tut-step-desc" id="tutDesc"></p>
        </div>
        <div class="modal-footer" style="justify-content:space-between;">
          <button class="btn btn-ghost" id="tutSkipBtn">スキップ</button>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary" id="tutPrevBtn" style="display:none;">← 戻る</button>
            <button class="btn btn-primary" id="tutNextBtn">次へ →</button>
          </div>
        </div>
      </div>
    </div>

    <!-- リザルトモーダル -->
    <div class="modal-backdrop" id="resultModal">
      <div class="modal">
        <div class="modal-header">
          <h3 id="resultTitle">🎉 ステージクリア！</h3>
          <button class="btn btn-secondary" onclick="closeModal('resultModal')">✕</button>
        </div>
        <div class="modal-body">
          <div class="result-banner">
            <img src="${LOGO_URL}" alt="ロゴ" class="result-logo" onerror="this.style.display='none'">
            <div style="font-size:0.85rem; color:var(--muted); font-weight:700;">TOTAL SCORE</div>
            <div class="result-score" id="finalScoreVal">0</div>
            <div id="resultSubText" style="font-size:0.85rem; font-weight:700; color:#059669; margin-top:4px;"></div>
          </div>
          <h4 style="margin:0 0 8px 0; font-size:0.9rem;">📚 今回の単語復習（タップで発音）</h4>
          <div class="word-list" id="reviewList"></div>

          <div class="pr-box" id="prBox" style="display:none;">
            <div class="pr-header">
              <span style="font-size:0.78rem; font-weight:800; color:#92400e;">📖 さらに英語力を伸ばそう！ピックアップ教材</span>
              <span class="pr-badge">PR</span>
            </div>
            <p class="pr-title" id="prTitle"></p>
            <p class="pr-desc" id="prDesc"></p>
            <div class="pr-buttons">
              <a class="btn btn-amazon" id="prAmazonBtn" href="#" target="_blank" rel="noopener noreferrer sponsored">🛒 Amazonで見る</a>
              <a class="btn btn-rakuten" id="prRakutenBtn" href="#" target="_blank" rel="noopener noreferrer sponsored">🛍️ 楽天市場で見る</a>
            </div>
            <div style="font-size:0.68rem; color:#92400e; margin-top:6px; opacity:0.8;">※上記はアフィリエイトリンクを含みます。</div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeModal('resultModal')">盤面を見る</button>
          <button class="btn btn-primary" id="nextStageBtn">🎲 別の単語で次へ！</button>
        </div>
      </div>
    </div>

    <!-- 図鑑モーダル -->
    <div class="modal-backdrop" id="dictModal">
      <div class="modal">
        <div class="modal-header">
          <h3>📖 全シリーズ共通・単語マスター図鑑</h3>
          <button class="btn btn-secondary" onclick="closeModal('dictModal')">✕</button>
        </div>
        <div class="modal-body">
          <div class="dict-stats">
            <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.9rem;">
              <span>全シリーズ コンプリート率</span>
              <span id="dictProgressText">0 / ${WORDS_DB.length} 語 (0%)</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" id="dictProgressBar" style="width:0%"></div>
            </div>
          </div>
          <div class="dict-filters" id="dictFilters">
            <button class="filter-chip active" data-filter="current">このページ</button>
            <button class="filter-chip" data-filter="all">全シリーズ</button>
            <button class="filter-chip" data-filter="found">発見済み</button>
            <button class="filter-chip" data-filter="unfound">未発見</button>
            <button class="filter-chip" data-filter="1">小・中1</button>
            <button class="filter-chip" data-filter="2">中2</button>
            <button class="filter-chip" data-filter="3">中3</button>
          </div>
          <div class="dict-grid" id="dictGrid"></div>
        </div>
        <div class="modal-footer" style="justify-content:space-between;">
          <button class="btn btn-secondary" style="color:var(--danger);" id="resetDataBtn">記録リセット</button>
          <button class="btn btn-primary" onclick="closeModal('dictModal')">閉じる</button>
        </div>
      </div>
    </div>
  `;
}

// =========================================================
// 3. Save Data & State
// =========================================================
const SAVE_KEY = "wordfind_series_save_v1";
let saveData = {
  discovered: [],
  recentHistory: [],
  bestScore: 0,
  streak: 0,
  soundOn: true,
  voiceOn: true,
  tutorialDone: false
};

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) saveData = { ...saveData, ...JSON.parse(raw) };
  } catch (e) {}
}

function writeSave() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(saveData)); } catch (e) {}
}

let lastShownPrTitle = "";
let state = {
  phase: "idle",
  size: 10,
  grid: [],
  targets: [],
  secretWord: null,
  extraFoundBonus: [],
  foundLines: [],
  score: 0,
  combo: 0,
  lastFoundTime: 0,
  hintsLeft: 3,
  elapsedSec: 0,
  remainingSec: 90,
  timerId: null,
  rule: "relax",
  displayMode: "both",
  isDragging: false,
  hasMovedMulti: false,
  startCell: null,
  selectedCells: [],
  tapStartCell: null
};

// =========================================================
// 4. Tutorial Logic (3ステップ・スキップ可能)
// =========================================================
const TUTORIAL_STEPS = [
  {
    title: "① リストの英単語を盤面から探そう！",
    desc: "「探す単語リスト」にある英単語が、タテ・ヨコ・ナナメに隠れています。<br>文字を<strong>指でなぞる</strong>か、<strong>「最初の文字 → 最後の文字」を2回タップ</strong>して見つけよう！",
    visual: `
      <div class="tut-mini-grid">
        <div class="tut-mini-cell hl">A</div>
        <div class="tut-mini-cell hl">P</div>
        <div class="tut-mini-cell hl">P</div>
        <div class="tut-mini-cell hl">L</div>
        <div class="tut-mini-cell hl">E</div>
        <div class="tut-mini-cell">X</div>
        <div class="tut-mini-cell">C</div>
        <div class="tut-mini-cell">R</div>
        <div class="tut-mini-cell">M</div>
        <div class="tut-mini-cell">T</div>
      </div>
      <div style="margin-top:10px;font-size:0.78rem;font-weight:700;color:#059669;">🍎 APPLE (りんご) 発見！</div>
    `
  },
  {
    title: "② 2つのモード＆困った時のヒント！",
    desc: "慣れてきたら「リスト表示」を<strong>「日本語のみ（1.5倍）」</strong>にすると記憶力クイズに！<br>どうしても見つからない時は<strong>「💡ヒント」</strong>を押すと先頭の文字が光ります。",
    visual: `
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
        <div style="background:white;border:1.5px solid #e2e8f0;border-radius:10px;padding:8px 12px;text-align:left;">
          <div style="font-size:0.78rem;font-weight:800;color:#4f46e5;">🔑 ? (5文字)</div>
          <div style="font-size:0.75rem;color:#64748b;">りんご → APPLEを探そう！</div>
        </div>
        <div style="background:#fef3c7;border:1.5px solid #f59e0b;border-radius:10px;padding:8px 12px;font-weight:800;font-size:0.85rem;color:#b45309;display:flex;align-items:center;">
          💡 1文字目が光る！
        </div>
      </div>
    `
  },
  {
    title: "③ 隠しボーナス＆全540語図鑑！",
    desc: "リストにない<strong>秘密の単語</strong>を見つけてもボーナスGET！<br>見つけた単語は英語の発音付きで<strong>「📖図鑑」</strong>に登録されます。全シリーズ制覇を目指そう！",
    visual: `
      <div style="display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;">
        <div style="background:linear-gradient(135deg,#fffbeb,#fdf2f8);border:1.5px dashed #f59e0b;border-radius:10px;padding:8px 12px;font-size:0.8rem;font-weight:800;color:#b45309;">
          🌟 隠し単語 +200pt
        </div>
        <div style="background:#eef2ff;border:1.5px solid #4f46e5;border-radius:10px;padding:8px 12px;font-size:0.8rem;font-weight:800;color:#4f46e5;">
          📖 図鑑 ＆ 🔊 発音
        </div>
      </div>
    `
  }
];

let tutStep = 0;

function renderTutorial() {
  const step = TUTORIAL_STEPS[tutStep];
  document.getElementById("tutDots").innerHTML = TUTORIAL_STEPS.map((_, i) =>
    `<div class="tut-dot ${i === tutStep ? "active" : ""}"></div>`
  ).join("");
  document.getElementById("tutVisual").innerHTML = step.visual;
  document.getElementById("tutTitle").textContent = step.title;
  document.getElementById("tutDesc").innerHTML = step.desc;

  document.getElementById("tutPrevBtn").style.display = tutStep > 0 ? "inline-flex" : "none";
  document.getElementById("tutSkipBtn").style.visibility = tutStep < TUTORIAL_STEPS.length - 1 ? "visible" : "hidden";
  document.getElementById("tutNextBtn").textContent =
    tutStep === TUTORIAL_STEPS.length - 1 ? "さっそく遊ぶ！ 🚀" : "次へ →";
}

function openTutorial() {
  tutStep = 0;
  renderTutorial();
  openModal("tutorialModal");
}

function finishTutorial() {
  saveData.tutorialDone = true;
  writeSave();
  closeModal("tutorialModal");
}

// =========================================================
// 5. Audio & Speech
// =========================================================
let audioCtx = null;
function playTone(freq, duration = 0.08, type = "sine", vol = 0.12) {
  if (!saveData.soundOn) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playSuccessSfx() {
  playTone(523.25, 0.1, "triangle", 0.15);
  setTimeout(() => playTone(659.25, 0.1, "triangle", 0.15), 70);
  setTimeout(() => playTone(783.99, 0.18, "triangle", 0.18), 140);
}

function playBonusSfx() {
  [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => playTone(f, 0.15, "sine", 0.16), i * 70));
}

function playClearSfx() {
  [523, 659, 784, 659, 784, 1046].forEach((f, i) => setTimeout(() => playTone(f, 0.2, "triangle", 0.16), i * 100));
}

function speakWord(word) {
  if (!saveData.voiceOn || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const uttr = new SpeechSynthesisUtterance(word.toLowerCase());
    uttr.lang = "en-US";
    uttr.rate = 0.92;
    window.speechSynthesis.speak(uttr);
  } catch (e) {}
}

// =========================================================
// 6. Smart Word Selection & Board Generator
// =========================================================
function pickCandidateWords(count, maxLen) {
  let pool = WORDS_DB.filter(w =>
    (CURRENT_SERIES.id === "all" || w.seriesId === CURRENT_SERIES.id) &&
    w.word.length <= maxLen
  );
  if (pool.length < count) {
    pool = WORDS_DB.filter(w => w.word.length <= maxLen);
  }

  const discoveredSet = new Set(saveData.discovered);
  const recentMap = new Map();
  saveData.recentHistory.forEach((w, idx) => {
    if (!recentMap.has(w)) recentMap.set(w, idx);
  });

  const scored = pool.map(item => {
    let priority = Math.random() * 40;
    if (!discoveredSet.has(item.word)) priority += 100;
    if (recentMap.has(item.word)) {
      priority -= Math.max(0, 80 - recentMap.get(item.word) * 2);
    } else {
      priority += 30;
    }
    return { item, priority };
  });

  scored.sort((a, b) => b.priority - a.priority);
  return scored.slice(0, count).map(s => s.item);
}

function getDirections(difficulty) {
  const basic = [[0, 1], [1, 0]];
  const diag = [[1, 1], [-1, 1]];
  const rev = [[0, -1], [-1, 0], [-1, -1], [1, -1]];
  if (difficulty === "easy") return basic;
  if (difficulty === "normal") return [...basic, ...diag];
  return [...basic, ...diag, ...rev];
}

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function tryPlaceWord(grid, word, size, dirs) {
  let bestSpot = null;
  let bestScore = -1;
  const positions = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) positions.push([r, c]);
  }

  for (const [r, c] of shuffleArr(positions)) {
    for (const [dr, dc] of shuffleArr(dirs)) {
      const endR = r + dr * (word.length - 1);
      const endC = c + dc * (word.length - 1);
      if (endR < 0 || endR >= size || endC < 0 || endC >= size) continue;

      let valid = true;
      let overlaps = 0;
      for (let i = 0; i < word.length; i++) {
        const ch = grid[r + dr * i][c + dc * i];
        if (ch !== "" && ch !== word[i]) { valid = false; break; }
        if (ch === word[i]) overlaps++;
      }

      if (valid) {
        const score = overlaps * 10 + Math.random();
        if (score > bestScore) { bestScore = score; bestSpot = { r, c, dr, dc, endR, endC }; }
      }
    }
  }

  if (!bestSpot) return null;
  for (let i = 0; i < word.length; i++) {
    grid[bestSpot.r + bestSpot.dr * i][bestSpot.c + bestSpot.dc * i] = word[i];
  }
  return { start: [bestSpot.r, bestSpot.c], end: [bestSpot.endR, bestSpot.endC] };
}

function generateBoard(difficulty) {
  const cfg = {
    easy: { size: 8, count: 6 },
    normal: { size: 10, count: 8 },
    hard: { size: 12, count: 10 }
  }[difficulty];

  const dirs = getDirections(difficulty);
  const candidates = pickCandidateWords(cfg.count + 12, cfg.size);
  const grid = Array.from({ length: cfg.size }, () => Array(cfg.size).fill(""));
  const placedTargets = [];

  const mainCandidates = candidates.slice(0, cfg.count + 6).sort((a, b) => b.word.length - a.word.length);

  for (const item of mainCandidates) {
    if (placedTargets.length >= cfg.count) break;
    const pos = tryPlaceWord(grid, item.word, cfg.size, dirs);
    if (pos) placedTargets.push({ ...item, found: false, hinted: false, start: pos.start, end: pos.end });
  }

  let secretWord = null;
  const usedSet = new Set(placedTargets.map(t => t.word));
  const secretPool = shuffleArr(WORDS_DB.filter(w => !usedSet.has(w.word) && w.word.length <= cfg.size));
  for (const item of secretPool.slice(0, 15)) {
    const pos = tryPlaceWord(grid, item.word, cfg.size, dirs);
    if (pos) { secretWord = { ...item, found: false, start: pos.start, end: pos.end }; break; }
  }

  const weightedLetters = "EEEEEEEEAAAAIIIIOOOONNNNRRRRSSSSTTTTLLLDUGCMPBHFVYKWJXQZ";
  for (let r = 0; r < cfg.size; r++) {
    for (let c = 0; c < cfg.size; c++) {
      if (grid[r][c] === "") grid[r][c] = weightedLetters[Math.floor(Math.random() * weightedLetters.length)];
    }
  }

  const newHistory = [...placedTargets.map(t => t.word), ...saveData.recentHistory];
  saveData.recentHistory = Array.from(new Set(newHistory)).slice(0, 100);
  writeSave();

  return { size: cfg.size, grid, targets: placedTargets, secretWord };
}

// =========================================================
// 7. Game Lifecycle & Rendering
// =========================================================
function prepareIdleState() {
  clearInterval(state.timerId);
  const diff = document.getElementById("sizeSelect").value;
  const rule = document.getElementById("ruleSelect").value;
  const displayMode = document.getElementById("displayModeSelect").value;

  const cfg = { easy: { size: 8, count: 6 }, normal: { size: 10, count: 8 }, hard: { size: 12, count: 10 } }[diff];
  const dummyGrid = Array.from({ length: cfg.size }, () => Array(cfg.size).fill("?"));

  state = {
    ...state,
    phase: "idle",
    size: cfg.size,
    grid: dummyGrid,
    targets: [],
    secretWord: null,
    extraFoundBonus: [],
    foundLines: [],
    score: 0,
    combo: 0,
    lastFoundTime: 0,
    hintsLeft: 3,
    elapsedSec: 0,
    remainingSec: 90,
    rule,
    displayMode,
    tapStartCell: null
  };

  const dirLabels = {
    easy: "方向: タテ(↓)・ヨコ(→)のみ",
    normal: "方向: タテ・ヨコ・ナナメ",
    hard: "方向: 全8方向（逆向きあり！）"
  };
  document.getElementById("directionInfo").textContent = dirLabels[diff];
  document.getElementById("foundProgress").textContent = `0 / ${cfg.count}`;

  renderBoard();
  renderLines();
  renderWordList();
  updateHUD();
  showOverlay(
    `${CURRENT_SERIES.gradeLabel}｜${CURRENT_SERIES.title}`,
    "準備ができたら「ゲームスタート」を押してください！",
    "▶ ゲームスタート！",
    true
  );
  resetPreview("下の「ゲームスタート！」を押して始めよう！");
}

function startNewGame() {
  clearInterval(state.timerId);
  const diff = document.getElementById("sizeSelect").value;
  const rule = document.getElementById("ruleSelect").value;
  const displayMode = document.getElementById("displayModeSelect").value;
  const generated = generateBoard(diff);

  state = {
    ...state,
    phase: "playing",
    size: generated.size,
    grid: generated.grid,
    targets: generated.targets,
    secretWord: generated.secretWord,
    extraFoundBonus: [],
    foundLines: [],
    score: 0,
    combo: 0,
    lastFoundTime: 0,
    hintsLeft: 3,
    elapsedSec: 0,
    remainingSec: 90,
    rule,
    displayMode,
    isDragging: false,
    hasMovedMulti: false,
    startCell: null,
    selectedCells: [],
    tapStartCell: null
  };

  hideOverlay();
  renderBoard();
  renderWordList();
  renderLines();
  updateHUD();
  resetPreview("なぞる か 最初→最後をタップ！");
  playTone(523, 0.08, "triangle", 0.12);
  state.timerId = setInterval(tickTimer, 1000);
}

function togglePause() {
  if (state.phase === "playing") {
    state.phase = "paused";
    state.tapStartCell = null;
    renderTapAnchor();
    clearInterval(state.timerId);
    showOverlay("⏸ 一時停止中", "再開ボタンを押すとタイマーが再び動き出します。", "▶ ゲームを再開する", false);
    updateHUD();
  } else if (state.phase === "paused") {
    state.phase = "playing";
    hideOverlay();
    state.timerId = setInterval(tickTimer, 1000);
    updateHUD();
  }
}

function showOverlay(title, desc, btnText, showLogo = true) {
  const logoEl = document.getElementById("overlayLogo");
  if (logoEl) logoEl.style.display = showLogo ? "block" : "none";
  document.getElementById("overlayTitle").textContent = title;
  document.getElementById("overlayDesc").textContent = desc;
  document.getElementById("overlayStartBtn").textContent = btnText;
  document.getElementById("boardOverlay").classList.add("active");
}
function hideOverlay() { document.getElementById("boardOverlay").classList.remove("active"); }

function tickTimer() {
  if (state.phase !== "playing") return;
  if (state.rule === "time") {
    state.remainingSec--;
    if (state.remainingSec <= 0) { state.remainingSec = 0; updateHUD(); endGame(false); return; }
  } else {
    state.elapsedSec++;
  }
  updateHUD();
}

function formatTime(sec) {
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

function updateHUD() {
  document.getElementById("scoreVal").textContent = state.score;
  const tVal = document.getElementById("timerVal");
  if (state.rule === "time") {
    tVal.textContent = formatTime(state.remainingSec);
    tVal.classList.toggle("timer-warn", state.phase === "playing" && state.remainingSec <= 15);
  } else {
    tVal.textContent = formatTime(state.elapsedSec);
    tVal.classList.remove("timer-warn");
  }

  document.getElementById("hintCountVal").textContent = state.hintsLeft;
  document.getElementById("hintBtn").disabled = state.hintsLeft <= 0 || state.phase !== "playing";

  const pauseBtn = document.getElementById("pauseBtn");
  pauseBtn.disabled = state.phase !== "playing" && state.phase !== "paused";
  pauseBtn.textContent = state.phase === "paused" ? "▶ 再開" : "⏸ 一時停止";

  const newGameBtn = document.getElementById("newGameBtn");
  newGameBtn.style.display = state.phase === "idle" ? "none" : "inline-flex";

  const badge = document.getElementById("comboBadge");
  if (state.combo >= 2 && state.phase === "playing") {
    badge.textContent = `⚡ ${state.combo} COMBO!`;
    badge.classList.add("active");
  } else {
    badge.classList.remove("active");
  }

  document.getElementById("streakVal").textContent = saveData.streak;
  document.getElementById("bestScoreVal").textContent = saveData.bestScore;
  document.getElementById("dictCountVal").textContent = saveData.discovered.length;
}

function renderBoard() {
  const gridEl = document.getElementById("grid");
  gridEl.innerHTML = "";
  gridEl.className = `grid size-${state.size}`;
  gridEl.style.gridTemplateColumns = `repeat(${state.size}, 1fr)`;
  gridEl.style.gridTemplateRows = `repeat(${state.size}, 1fr)`;

  for (let r = 0; r < state.size; r++) {
    for (let c = 0; c < state.size; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.r = r;
      cell.dataset.c = c;
      cell.textContent = state.grid[r][c];
      gridEl.appendChild(cell);
    }
  }
}

function renderWordList() {
  const listEl = document.getElementById("wordList");
  listEl.innerHTML = "";

  if (state.phase === "idle") {
    listEl.innerHTML = `<div class="list-waiting-box">▶ スタートボタンを押すと、<br>今回の英単語リストが表示されます！</div>`;
    document.getElementById("secretBox").classList.remove("found");
    document.getElementById("secretHintText").textContent = "スタートするとヒントが出ます！";
    document.getElementById("secretStatusBadge").textContent = "+200pt";
    return;
  }

  let foundCount = 0;
  const lvNames = { "1": "小・中1", "2": "中2", "3": "中3" };

  state.targets.forEach(t => {
    if (t.found) foundCount++;
    const item = document.createElement("div");
    item.className = `word-item ${t.found ? "found" : ""} ${t.hinted && !t.found ? "hinted" : ""}`;

    let enHtml = "";
    if (state.displayMode === "quiz" && !t.found) {
      const firstChar = t.hinted ? t.word[0] + " " + "_ ".repeat(t.word.length - 1).trim() : `? (${t.word.length}文字)`;
      enHtml = `<span class="word-en quiz-hidden">🔑 ${firstChar}</span>`;
    } else {
      enHtml = `<span class="word-en">${t.found ? "✅ " : ""}${t.word}</span>`;
    }

    item.innerHTML = `
      <div class="word-text">
        ${enHtml}
        <span class="word-ja">${t.meaning}</span>
      </div>
      <div class="word-meta">
        <span class="level-tag lv-${t.grade}">${lvNames[t.grade]}</span>
        ${(state.displayMode === "both" || t.found) ? `<button class="speak-btn" title="発音を聞く">🔊</button>` : ""}
      </div>
    `;

    const sBtn = item.querySelector(".speak-btn");
    if (sBtn) sBtn.addEventListener("click", (e) => { e.stopPropagation(); speakWord(t.word); });
    listEl.appendChild(item);
  });

  document.getElementById("foundProgress").textContent = `${foundCount} / ${state.targets.length}`;

  const sBox = document.getElementById("secretBox");
  const sText = document.getElementById("secretHintText");
  const sBadge = document.getElementById("secretStatusBadge");
  if (state.secretWord) {
    if (state.secretWord.found) {
      sBox.classList.add("found");
      sText.textContent = `発見！ ${state.secretWord.word} (${state.secretWord.meaning})`;
      sBadge.textContent = "GET! 🌟";
    } else {
      sBox.classList.remove("found");
      sText.textContent = `ヒント: 「${state.secretWord.meaning}」(${state.secretWord.word.length}文字) が隠れているかも！`;
      sBadge.textContent = "+200pt";
    }
  } else {
    sText.textContent = "辞書の他の単語を偶然見つけてもボーナス！";
  }
}

function renderLines(tempCells = []) {
  const svg = document.getElementById("linesSvg");
  const viewSize = state.size * 100;
  svg.setAttribute("viewBox", `0 0 ${viewSize} ${viewSize}`);
  svg.innerHTML = "";

  const drawLine = (r0, c0, r1, c1, color) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", c0 * 100 + 50);
    line.setAttribute("y1", r0 * 100 + 50);
    line.setAttribute("x2", c1 * 100 + 50);
    line.setAttribute("y2", r1 * 100 + 50);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "66");
    line.setAttribute("stroke-linecap", "round");
    svg.appendChild(line);
  };

  state.foundLines.forEach(l => drawLine(l.r0, l.c0, l.r1, l.c1, l.color));
  if (tempCells.length > 0) {
    const first = tempCells[0], last = tempCells[tempCells.length - 1];
    drawLine(first[0], first[1], last[0], last[1], "rgba(79, 70, 229, 0.28)");
  }
}

// =========================================================
// 8. Pointer Drag + 2-Tap Hybrid Interaction
// =========================================================
function getGridCoordsFromPointer(clientX, clientY) {
  const rect = document.getElementById("boardInner").getBoundingClientRect();
  const relX = (clientX - rect.left) / rect.width;
  const relY = (clientY - rect.top) / rect.height;
  return { r: Math.floor(relY * state.size), c: Math.floor(relX * state.size), relX, relY };
}

function computeSnappedCells(startR, startC, relX, relY) {
  const dx = relX - (startC + 0.5) / state.size;
  const dy = relY - (startR + 0.5) / state.size;
  const cellSizeRel = 1 / state.size;
  if (Math.hypot(dx, dy) < cellSizeRel * 0.4) return [[startR, startC]];

  const snappedAngle = Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) * (Math.PI / 4);
  const stepC = Math.round(Math.cos(snappedAngle));
  const stepR = Math.round(Math.sin(snappedAngle));
  const unitLen = Math.hypot(stepR, stepC) * cellSizeRel;
  const steps = Math.max(0, Math.round((dx * Math.cos(snappedAngle) + dy * Math.sin(snappedAngle)) / unitLen));

  const cells = [];
  for (let i = 0; i <= steps; i++) {
    const nr = startR + stepR * i, nc = startC + stepC * i;
    if (nr < 0 || nr >= state.size || nc < 0 || nc >= state.size) break;
    cells.push([nr, nc]);
  }
  return cells;
}

function getLineBetweenCells(r0, c0, r1, c1) {
  const dr = r1 - r0, dc = c1 - c0;
  if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
  const steps = Math.max(Math.abs(dr), Math.abs(dc));
  if (steps === 0) return null;
  const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
  const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
  const cells = [];
  for (let i = 0; i <= steps; i++) cells.push([r0 + stepR * i, c0 + stepC * i]);
  return cells;
}

function highlightSelectedCells(cells) {
  document.querySelectorAll(".cell.selected").forEach(el => el.classList.remove("selected"));
  cells.forEach(([r, c]) => {
    const el = document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`);
    if (el) el.classList.add("selected");
  });
}

function renderTapAnchor() {
  document.querySelectorAll(".cell.tap-anchor").forEach(el => el.classList.remove("tap-anchor"));
  if (state.tapStartCell) {
    const [r, c] = state.tapStartCell;
    const el = document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`);
    if (el) el.classList.add("tap-anchor");
  }
}

function updatePreview(cells) {
  const bar = document.getElementById("previewBar");
  bar.classList.remove("placeholder");
  bar.innerHTML = cells.map(([r, c]) => state.grid[r][c]).join("");
}

function resetPreview(msg = "なぞる か 最初→最後をタップ！") {
  const bar = document.getElementById("previewBar");
  if (bar.querySelector(".toast-msg")) return;
  bar.classList.add("placeholder");
  bar.textContent = msg;
}

function showToast(text, type = "toast-success") {
  const bar = document.getElementById("previewBar");
  bar.classList.remove("placeholder");
  bar.innerHTML = `<div class="toast-msg ${type}">${text}</div>`;
  setTimeout(() => {
    if (!state.isDragging && !state.tapStartCell) { bar.innerHTML = ""; resetPreview(); }
  }, 1600);
}

// =========================================================
// 9. Validation, EndGame, PR Box & Dictionary
// =========================================================
function registerDiscovery(word) {
  if (!saveData.discovered.includes(word)) {
    saveData.discovered.push(word);
    writeSave();
    return true;
  }
  return false;
}

function clearHints() {
  document.querySelectorAll(".cell.hint-glow").forEach(el => el.classList.remove("hint-glow"));
}

function checkSelection(cells) {
  const str = cells.map(([r, c]) => state.grid[r][c]).join("");
  const rev = str.split("").reverse().join("");
  const [r0, c0] = cells[0], [r1, c1] = cells[cells.length - 1];

  const target = state.targets.find(t => !t.found && (t.word === str || t.word === rev));
  if (target) {
    target.found = true;
    clearHints();
    const now = Date.now();
    state.combo = (now - state.lastFoundTime <= 12000 && state.lastFoundTime > 0) ? state.combo + 1 : 1;
    state.lastFoundTime = now;

    const gained = Math.round(target.word.length * 20 * (state.displayMode === "quiz" ? 1.5 : 1)) + (state.combo - 1) * 30;
    state.score += gained;
    if (state.rule === "time") state.remainingSec += 5;

    state.foundLines.push({ r0, c0, r1, c1, color: MARKER_COLORS[state.foundLines.length % MARKER_COLORS.length] });
    const isNew = registerDiscovery(target.word);
    playSuccessSfx();
    speakWord(target.word);
    showToast(`✨ ${target.word} (${target.meaning}) +${gained}pt${isNew ? " 🆕図鑑!" : ""}`, "toast-success");
    renderWordList();
    updateHUD();

    if (state.targets.every(t => t.found)) setTimeout(() => endGame(true), 600);
    return;
  }

  const matchedWord = WORDS_MAP.get(str) || WORDS_MAP.get(rev);
  if (matchedWord && !state.targets.some(t => t.word === matchedWord.word)) {
    const isDesignatedSecret = state.secretWord && state.secretWord.word === matchedWord.word && !state.secretWord.found;
    const alreadyExtra = state.extraFoundBonus.includes(matchedWord.word);

    if (isDesignatedSecret || !alreadyExtra) {
      if (isDesignatedSecret) state.secretWord.found = true;
      else state.extraFoundBonus.push(matchedWord.word);

      const bonusPt = isDesignatedSecret ? 200 : 120;
      state.score += bonusPt;
      state.foundLines.push({ r0, c0, r1, c1, color: "rgba(251, 191, 36, 0.48)" });
      registerDiscovery(matchedWord.word);
      playBonusSfx();
      speakWord(matchedWord.word);
      showToast(`🌟 BONUS! ${matchedWord.word} (${matchedWord.meaning}) +${bonusPt}pt`, "toast-bonus");
      renderWordList();
      updateHUD();
      return;
    }
  }
  resetPreview();
}

function renderAffiliateBox() {
  const prBox = document.getElementById("prBox");
  if (Math.random() > PR_CONFIG.showRate) { prBox.style.display = "none"; return; }

  let candidates = [];
  if (CURRENT_SERIES.grade === "all") {
    candidates = [...(PR_CONFIG.items["1"] || []), ...(PR_CONFIG.items["2"] || []), ...(PR_CONFIG.items["3"] || [])];
  } else {
    candidates = PR_CONFIG.items[CURRENT_SERIES.grade] || [];
  }
  if (candidates.length === 0) { prBox.style.display = "none"; return; }

  let filtered = candidates.filter(c => c.title !== lastShownPrTitle);
  if (filtered.length === 0) filtered = candidates;
  const picked = filtered[Math.floor(Math.random() * filtered.length)];
  lastShownPrTitle = picked.title;

  document.getElementById("prTitle").textContent = picked.title;
  document.getElementById("prDesc").textContent = picked.desc;
  document.getElementById("prAmazonBtn").href = picked.amazonUrl;
  document.getElementById("prRakutenBtn").href = picked.rakutenUrl;
  prBox.style.display = "block";
}

function endGame(cleared) {
  state.phase = "gameover";
  state.tapStartCell = null;
  renderTapAnchor();
  clearInterval(state.timerId);

  if (cleared) {
    saveData.streak++;
    let timeBonus = 0;
    if (state.rule === "time") { timeBonus = state.remainingSec * 10; state.score += timeBonus; }
    if (state.score > saveData.bestScore) saveData.bestScore = state.score;
    writeSave();
    playClearSfx();
    launchConfetti();

    document.getElementById("resultTitle").textContent = "🎉 ステージクリア！";
    document.getElementById("resultSubText").textContent =
      timeBonus > 0 ? `タイムボーナス +${timeBonus}pt！ 連勝記録: ${saveData.streak}連勝🔥` : `クリアおめでとう！ 連勝記録: ${saveData.streak}連勝🔥`;
  } else {
    saveData.streak = 0;
    writeSave();
    document.getElementById("resultTitle").textContent = "⏰ タイムアップ！";
    const foundCnt = state.targets.filter(t => t.found).length;
    document.getElementById("resultSubText").textContent = `${state.targets.length}語中 ${foundCnt}語 発見！次はクリアを目指そう！`;
  }

  updateHUD();
  document.getElementById("finalScoreVal").textContent = state.score;

  const revList = document.getElementById("reviewList");
  revList.innerHTML = "";
  const allReview = [...state.targets];
  if (state.secretWord) allReview.push(state.secretWord);

  allReview.forEach(w => {
    const div = document.createElement("div");
    div.className = `word-item ${w.found ? "found" : ""}`;
    div.style.cursor = "pointer";
    div.innerHTML = `
      <div class="word-text">
        <span class="word-en">${w.found ? "✅" : "⬜"} ${w.word}</span>
        <span class="word-ja">${w.meaning}</span>
      </div>
      <span class="speak-btn">🔊</span>
    `;
    div.addEventListener("click", () => speakWord(w.word));
    revList.appendChild(div);
  });

  renderAffiliateBox();
  openModal("resultModal");
}

function openModal(id) { document.getElementById(id).classList.add("open"); }
window.closeModal = function(id) { document.getElementById(id).classList.remove("open"); };

let dictFilter = CURRENT_SERIES.id === "all" ? "all" : "current";
function renderDictionary() {
  const discSet = new Set(saveData.discovered);
  const total = WORDS_DB.length;
  const count = discSet.size;
  const pct = Math.round((count / total) * 100);

  document.getElementById("dictProgressText").textContent = `${count} / ${total} 語 (${pct}%)`;
  document.getElementById("dictProgressBar").style.width = `${pct}%`;

  const grid = document.getElementById("dictGrid");
  grid.innerHTML = "";

  const filtered = WORDS_DB.filter(w => {
    const isFound = discSet.has(w.word);
    if (dictFilter === "current") return CURRENT_SERIES.id === "all" || w.seriesId === CURRENT_SERIES.id;
    if (dictFilter === "found") return isFound;
    if (dictFilter === "unfound") return !isFound;
    if (["1", "2", "3"].includes(dictFilter)) return w.grade === dictFilter;
    return true;
  });

  filtered.forEach(w => {
    const isFound = discSet.has(w.word);
    const card = document.createElement("div");
    card.className = `dict-card ${isFound ? "" : "locked"}`;
    card.innerHTML = `
      <div style="min-width:0;">
        <div style="font-weight:700; font-size:0.86rem; font-family:Verdana,sans-serif; color:${isFound ? "var(--primary-dark)" : "var(--muted)"};">
          ${isFound ? w.word : "???"}
        </div>
        <div style="font-size:0.74rem; color:var(--muted);">${w.meaning}</div>
      </div>
      ${isFound ? `<button class="speak-btn" title="発音">🔊</button>` : `<span style="font-size:0.8rem;">🔒</span>`}
    `;
    const btn = card.querySelector(".speak-btn");
    if (btn) btn.addEventListener("click", () => speakWord(w.word));
    grid.appendChild(card);
  });
}

function syncAudioButtons() {
  const sBtn = document.getElementById("soundToggleBtn");
  const vBtn = document.getElementById("voiceToggleBtn");
  sBtn.textContent = saveData.soundOn ? "🔊" : "🔇";
  sBtn.classList.toggle("off", !saveData.soundOn);
  vBtn.textContent = saveData.voiceOn ? "🗣️" : "🤫";
  vBtn.classList.toggle("off", !saveData.voiceOn);
}

function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ["#4f46e5", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];
  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width, y: -20 - Math.random() * 150,
    w: 7 + Math.random() * 6, h: 5 + Math.random() * 5,
    vx: (Math.random() - 0.5) * 4, vy: 3 + Math.random() * 4,
    rot: Math.random() * 360, vRot: (Math.random() - 0.5) * 10,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vRot;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    if (++frame < 130) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// =========================================================
// 10. Init & Event Binding
// =========================================================
loadSave();
renderAppShell();
syncAudioButtons();

const boardInner = document.getElementById("boardInner");
boardInner.addEventListener("pointerdown", (e) => {
  if (state.phase !== "playing") return;
  const { r, c } = getGridCoordsFromPointer(e.clientX, e.clientY);
  if (r < 0 || r >= state.size || c < 0 || c >= state.size) return;

  boardInner.setPointerCapture(e.pointerId);
  state.isDragging = true;
  state.hasMovedMulti = false;
  state.startCell = [r, c];
  state.selectedCells = [[r, c]];
  highlightSelectedCells(state.selectedCells);
  renderLines(state.selectedCells);
  playTone(330, 0.04, "sine", 0.08);
});

boardInner.addEventListener("pointermove", (e) => {
  if (!state.isDragging || state.phase !== "playing") return;
  const { relX, relY } = getGridCoordsFromPointer(e.clientX, e.clientY);
  const newCells = computeSnappedCells(state.startCell[0], state.startCell[1], relX, relY);

  if (newCells.length >= 2) {
    state.hasMovedMulti = true;
    if (state.tapStartCell) {
      state.tapStartCell = null;
      renderTapAnchor();
    }
  }

  const changed = newCells.length !== state.selectedCells.length ||
    newCells.some((cell, i) => cell[0] !== state.selectedCells[i][0] || cell[1] !== state.selectedCells[i][1]);

  if (changed) {
    state.selectedCells = newCells;
    highlightSelectedCells(newCells);
    renderLines(newCells);
    if (state.hasMovedMulti) updatePreview(newCells);
    playTone(330 + Math.min(newCells.length, 10) * 35, 0.04, "sine", 0.07);
  }
});

function finishDrag() {
  if (!state.isDragging) return;
  state.isDragging = false;
  highlightSelectedCells([]);

  if (state.hasMovedMulti && state.selectedCells.length >= 2 && state.phase === "playing") {
    state.tapStartCell = null;
    renderTapAnchor();
    checkSelection(state.selectedCells);
  } else if (state.phase === "playing" && state.startCell) {
    const [r, c] = state.startCell;
    if (!state.tapStartCell) {
      state.tapStartCell = [r, c];
      renderTapAnchor();
      resetPreview(`「${state.grid[r][c]}」を選択中 → 最後の文字をタップ！`);
    } else if (state.tapStartCell[0] === r && state.tapStartCell[1] === c) {
      state.tapStartCell = null;
      renderTapAnchor();
      resetPreview();
    } else {
      const line = getLineBetweenCells(state.tapStartCell[0], state.tapStartCell[1], r, c);
      if (line) {
        state.tapStartCell = null;
        renderTapAnchor();
        checkSelection(line);
      } else {
        state.tapStartCell = [r, c];
        renderTapAnchor();
        resetPreview(`「${state.grid[r][c]}」に変更 → 最後の文字をタップ！`);
      }
    }
  } else {
    resetPreview();
  }

  state.selectedCells = [];
  renderLines();
}

boardInner.addEventListener("pointerup", finishDrag);
boardInner.addEventListener("pointercancel", finishDrag);

document.getElementById("hintBtn").addEventListener("click", () => {
  if (state.hintsLeft <= 0 || state.phase !== "playing") return;
  const unfound = state.targets.filter(t => !t.found);
  if (unfound.length === 0) return;
  const pool = unfound.filter(t => !t.hinted);
  const src = pool.length > 0 ? pool : unfound;
  const pick = src[Math.floor(Math.random() * src.length)];
  pick.hinted = true;
  state.hintsLeft--;
  clearHints();
  const [sr, sc] = pick.start;
  const cell = document.querySelector(`.cell[data-r="${sr}"][data-c="${sc}"]`);
  if (cell) cell.classList.add("hint-glow");
  playTone(660, 0.12, "sine", 0.12);
  showToast(`💡 「${pick.meaning}」の最初の文字 "${pick.word[0]}" が光ったよ！`, "toast-info");
  renderWordList();
  updateHUD();
});

document.getElementById("overlayStartBtn").addEventListener("click", () => {
  if (state.phase === "paused") togglePause();
  else startNewGame();
});
document.getElementById("pauseBtn").addEventListener("click", togglePause);
document.getElementById("newGameBtn").addEventListener("click", startNewGame);
document.getElementById("nextStageBtn").addEventListener("click", () => { closeModal("resultModal"); startNewGame(); });

document.getElementById("seriesJumpSelect").addEventListener("change", (e) => {
  window.location.href = e.target.value;
});

["displayModeSelect", "sizeSelect", "ruleSelect"].forEach(id => {
  document.getElementById(id).addEventListener("change", prepareIdleState);
});

document.getElementById("openDictBtn").addEventListener("click", () => {
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c.dataset.filter === dictFilter));
  renderDictionary();
  openModal("dictModal");
});

document.getElementById("dictFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  dictFilter = btn.dataset.filter;
  renderDictionary();
});

document.getElementById("resetDataBtn").addEventListener("click", () => {
  if (confirm("全シリーズ共通の図鑑・ハイスコア・連勝記録をリセットしますか？")) {
    saveData = { ...saveData, discovered: [], recentHistory: [], bestScore: 0, streak: 0 };
    writeSave();
    updateHUD();
    renderDictionary();
  }
});

document.getElementById("soundToggleBtn").addEventListener("click", () => {
  saveData.soundOn = !saveData.soundOn; writeSave(); syncAudioButtons();
});
document.getElementById("voiceToggleBtn").addEventListener("click", () => {
  saveData.voiceOn = !saveData.voiceOn; writeSave(); syncAudioButtons();
});

// チュートリアルのボタンイベント
document.getElementById("openTutorialBtn").addEventListener("click", openTutorial);
document.getElementById("tutSkipBtn").addEventListener("click", finishTutorial);
document.getElementById("tutCloseX").addEventListener("click", finishTutorial);
document.getElementById("tutPrevBtn").addEventListener("click", () => {
  if (tutStep > 0) { tutStep--; renderTutorial(); }
});
document.getElementById("tutNextBtn").addEventListener("click", () => {
  if (tutStep < TUTORIAL_STEPS.length - 1) {
    tutStep++;
    renderTutorial();
  } else {
    finishTutorial();
  }
});

prepareIdleState();

// 初回アクセス時のみチュートリアルを表示
if (!saveData.tutorialDone) {
  openTutorial();
}