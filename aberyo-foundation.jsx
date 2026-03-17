"use client";

/**
 * 一般財団法人 阿部 亮 財団 — React/Next.js 実装
 * 元サイト: https://aberyo.or.jp/
 * デザインを元サイトに忠実に再現しています。
 *
 * セットアップ:
 *   npx create-next-app@latest aberyo-foundation --app
 *   このファイルを app/page.jsx に配置
 *   npm run dev
 *
 * 画像について:
 *   元サイトの画像 URL をそのまま参照しています。
 *   本番では /public/ に自前の画像を配置してパスを変更してください。
 */

import { useState } from "react";

// ─────────────────────────────────────────────
// 定数・データ
// ─────────────────────────────────────────────

const BASE = "https://aberyo.or.jp/wp-content/themes/arz/img";
const UPLOADS = "https://aberyo.or.jp/wp-content/uploads";

const NAV_ITEMS = [
  { label: "サイトトップ", href: "#top", img: `${BASE}/m0.jpg` },
  {
    label: "毎年100人の子どもの命を救うプロジェクト",
    short: "毎年100人の子どもの命を救う\nプロジェクト",
    href: "#sec2",
    img: `${BASE}/m3.jpg`,
  },
  {
    label: "ヒマラヤで森をつくろうプロジェクト",
    short: "ヒマラヤで森をつくろう\nプロジェクト",
    href: "#sec6",
    img: `${BASE}/m6.jpg`,
  },
  {
    label: "世界に学校を建てようプロジェクト",
    short: "世界に学校を建てよう\nプロジェクト",
    href: "#sec1",
    img: `${BASE}/m2.jpg`,
    sub: [
      { label: "プロジェクトトップ", href: "https://aberyo.or.jp/schoolproject/" },
      { label: "カンボジア", href: "https://aberyo.or.jp/schoolproject/cambodia/" },
      { label: "ネパール", href: "https://aberyo.or.jp/schoolproject/nepal/" },
      { label: "アフリカ", href: "https://aberyo.or.jp/schoolproject/africa/" },
      { label: "ミャンマー", href: "https://aberyo.or.jp/schoolproject/myanmar/" },
      { label: "漫画でわかる学校建設", href: "https://aberyo.or.jp/schoolproject/comic/page_1" },
    ],
  },
  {
    label: "ミャンマーで日本語を教えようプロジェクト",
    short: "ミャンマーで日本語を教えよう\nプロジェクト",
    href: "#sec7",
    img: `${BASE}/m7.jpg`,
  },
  {
    label: "会長メッセージ",
    short: "会長メッセージ",
    href: "https://aberyo.or.jp/messages/",
    img: `${BASE}/m1.jpg`,
  },
  {
    label: "子どもの未来を広げる活動",
    short: "子どもの未来を広げる活動",
    href: "#sec4",
    img: `${BASE}/m5.jpg`,
  },
];

const SEC_NAV = [
  { label: "毎年100人の\n子どもの命を救う\nプロジェクト", href: "#sec2" },
  { label: "ヒマラヤで\n森をつくろう\nプロジェクト", href: "#sec6" },
  { label: "世界に学校を\n建てよう\nプロジェクト", href: "#sec1" },
  { label: "ミャンマーで\n日本語を教えよう\nプロジェクト", href: "#sec7" },
  { label: "子どもの未来を\n広げる活動", href: "#sec4" },
  { label: "会長\nメッセージ", href: "https://aberyo.or.jp/messages/" },
];

const TITLE_IMGS = ["ti_01","ti_02","ti_03","ti_05","ti_06","ti_07","ti_08","ti_10","ti_11","ti_12"];

const HOSPITAL_NEWS = [
  { date: "2026.01", title: "正月イベントを実施しました。", href: "https://aberyo.or.jp/archives/hospitals/report2601", img: `${UPLOADS}/2026/02/2601thumb-280x210.png` },
  { date: "2025.12", title: "現地の献血センターと連携し、献血イベントを実施しました。", href: "https://aberyo.or.jp/archives/hospitals/report2512", img: `${UPLOADS}/2026/01/2512thumb-280x210.png` },
  { date: "2025.11", title: "新しい病院へ、小児がんと闘うお子さんたちが引っ越しをしました。", href: "https://aberyo.or.jp/archives/hospitals/report2511", img: `${UPLOADS}/2025/12/2511thumb-280x210.png` },
  { date: "2025.10", title: "新病院「ジャパンハートアジア小児医療センター」開院式を開催しました。", href: "https://aberyo.or.jp/archives/hospitals/report2510", img: `${UPLOADS}/2025/11/25101-280x210.jpg` },
];

const HIMALAYA_NEWS = [
  { date: "2021.06", title: "支援したフェンスのおかげで、苗木は順調に育っています。", href: "#", img: `${UPLOADS}/2021/07/h2106n-280x210.png` },
  { date: "2019.07", title: "森になる苗木を守るフェンス 取り付け完了しました。", href: "#", img: `${UPLOADS}/2019/08/1908hima-280x210.jpg` },
  { date: "2019.06", title: "苗木を守るフェンス工事に必要な部材はすべて、サマ村に到着しました。", href: "#", img: `${UPLOADS}/2019/06/h1906d-280x210.png` },
  { date: "2019.04", title: "2019年4月サマ村に森をつくる 支援を開始しました。", href: "#", img: `${UPLOADS}/2019/06/IMG_1124-1-280x210.jpg` },
];

const SCHOOL_NEWS = [
  { date: "2025.01", title: "2025年1月 阿部 亮 財団が建設支援した 尼寺小屋学校3校へ寄付を届けました", href: "#", img: `${UPLOADS}/2025/02/2501s2-a-280x210.png` },
  { date: "2024.01", title: "2024年1月 阿部 亮 財団が建設支援した尼寺小屋学校へ寄付を届けました。", href: "#", img: `${UPLOADS}/2024/01/2401sx-280x210.png` },
  { date: "2019.01", title: "ミャンマーに6校目の学校が完成！", href: "#", img: `${UPLOADS}/2019/01/my6_18-280x210.png` },
  { date: "2017.06", title: "ミャンマーに5校目の学校が完成！", href: "#", img: `${UPLOADS}/2016/12/IMGP6285-260x210.jpg` },
];

const JAPANESE_NEWS = [
  { date: "2023.03", title: "2023年3月 阿部 亮 財団が建設支援した尼寺小屋学校へ寄付を届けました。", href: "#", img: `${UPLOADS}/2023/04/j04c-280x210.png` },
  { date: "2022.09", title: "2年半ぶりにミャンマーの僧院、尼寺学校へ再訪と調査、そして寄付を届けました。", href: "#", img: `${UPLOADS}/2022/10/IMG-1347-1-280x210.jpg` },
  { date: "2022.06", title: "チャンミャワディ僧院学校で日本語を学んでいた生徒が新しい生活をスタートさせました。", href: "#", img: `${UPLOADS}/2022/06/j2206-280x210.png` },
];

const JAPANESE_VIDEOS = [
  { date: "2019.11", title: "にほんごはっぴょうかい" },
  { date: "2019.10", title: "「わたしのいちにち」を作ろう！" },
  { date: "2019.09", title: "お掃除大会！どのチームが1番ゴミを集められるかな？" },
  { date: "2019.08", title: "ひらがなパズルもだいぶできるようになりました。" },
  { date: "2019.07", title: "自己紹介に挑戦中！" },
  { date: "2019.06", title: "日本語の授業がスタート！" },
];

const FUTURE_NEWS = [
  { date: "2025.07", title: "モヨ・チルドレン・センター 子ども達からのお礼のお手紙や動画", href: "https://aberyo.or.jp/archives/3644", img: `${UPLOADS}/2025/07/スクリーンショット-2025-08-06-9.30.07-280x210.png` },
  { date: "2025.04", title: "寄付の御礼報告", href: "https://aberyo.or.jp/archives/3573", img: `${UPLOADS}/2025/05/DSC5837-280x210.jpg` },
  { date: "2025.04", title: "2024年度下半期活動報告", href: "https://aberyo.or.jp/archives/3578", img: `${UPLOADS}/2022/11/スクリーンショット-2022-11-07-13.42.08-1-280x210.png` },
  { date: "2024.11", title: "認定NPO法人マナビファクトリー　認定NPO法人フードバンク渋谷 「マナビ無料塾・代々木スペース」2023年度活動報告", href: "https://aberyo.or.jp/archives/3301", img: `${UPLOADS}/2024/11/3-1-280x210.png` },
  { date: "2024.10", title: "2024年度上半期活動報告", href: "https://aberyo.or.jp/archives/3294", img: `${UPLOADS}/2022/11/スクリーンショット-2022-11-07-13.42.08-1-280x210.png` },
  { date: "2024.05", title: "2023年度下半期活動報告", href: "https://aberyo.or.jp/archives/3170", img: `${UPLOADS}/2022/11/スクリーンショット-2022-11-07-13.42.08-1-280x210.png` },
  { date: "2023.10", title: "2023年度上半期活動報告", href: "https://aberyo.or.jp/archives/3013", img: `${UPLOADS}/2022/11/スクリーンショット-2022-11-07-13.42.08-1-280x210.png` },
  { date: "2023.02", title: "NPO法人　日喉連へオンライン設備寄贈しました。（下半期活動）", href: "https://aberyo.or.jp/archives/2775", img: `${UPLOADS}/2023/02/m2302b-280x210.png` },
  { date: "2022.09", title: "「高徳ひだまり」のリフォーム工事のご支援をしました。", href: "https://aberyo.or.jp/archives/2496", img: `${UPLOADS}/2022/09/j2209-280x210.png` },
  { date: "2022.09", title: "JHP・学校をつくる会より、カンボジア プレイクラー小学校の様子が届きました。", href: "https://aberyo.or.jp/archives/2472", img: `${UPLOADS}/2022/08/j2208-280x210.png` },
];

const PARTNERS = [
  { name: "Japan Heart", img: `${BASE}/fl6_2.png`, url: "http://www.japanheart.org/" },
  { name: "foodbank-shibuya", img: `${BASE}/fl21.png`, url: "https://foodbank-shibuya.org/" },
  { name: "だいじょうぶ", img: `${BASE}/daijoubu.png`, url: "http://www.npo-daijobu.com/" },
  { name: "siab", img: `${BASE}/fl18.png`, url: "https://siab.jp/" },
  { name: "GMI", img: `${BASE}/fl7.png`, url: "http://www.gmijp.net/" },
  { name: "accept", img: `${BASE}/fl16.jpg`, url: "https://accept-int.org/" },
  { name: "ユースガーディアン", img: `${BASE}/fl20.png`, url: "http://ijime-sos.com/" },
  { name: "nikkouren", img: `${BASE}/fl19.png`, url: "https://www.nikkouren.org/" },
  { name: "Peak Aid", img: `${BASE}/fl10.png`, url: "https://peak-aid.or.jp/" },
  { name: "JHP・学校をつくる会", img: `${BASE}/fl22.png`, url: "http://www.jhp.or.jp/" },
  { name: "アーシャ", img: `${BASE}/fl14.jpg`, url: "http://ashaasia.org/" },
  { name: "アナコット", img: `${BASE}/fl17.png`, url: "http://anacott.web.fc2.com/action/act_top.html" },
  { name: "UNESCO", img: `${BASE}/fl8.png`, url: "http://www.unesco.or.jp/saitama/" },
];

const PREFS = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];

// ─────────────────────────────────────────────
// スタイル定数
// ─────────────────────────────────────────────

const RED = "#cc0000";
const FONT_SANS = "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif";
const FONT_SERIF = "'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'Yu Mincho', Georgia, serif";

const sectionTitleStyle = {
  fontFamily: FONT_SERIF,
  fontSize: 20,
  color: "#333",
  borderLeft: `5px solid ${RED}`,
  paddingLeft: 10,
  margin: "0 0 12px",
  lineHeight: 1.5,
};

const moreButtonStyle = {
  display: "inline-block",
  padding: "9px 28px",
  background: RED,
  color: "#fff",
  fontFamily: FONT_SANS,
  fontSize: 13,
  textDecoration: "none",
  borderRadius: 2,
  border: "none",
  cursor: "pointer",
};

// ─────────────────────────────────────────────
// 小コンポーネント
// ─────────────────────────────────────────────

function NewsCard({ item }) {
  return (
    <li style={{ width: 210, flexShrink: 0, listStyle: "none" }}>
      <a href={item.href} target="_blank" rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <img src={item.img} alt={item.title}
          style={{ width: "100%", height: 158, objectFit: "cover", display: "block", border: "1px solid #ddd" }} />
        <p style={{ fontFamily: FONT_SANS, fontSize: 12, color: RED, margin: "6px 0 2px" }}>{item.date}</p>
        <p style={{ fontFamily: FONT_SANS, fontSize: 12, lineHeight: 1.6, color: "#333" }}>{item.title}</p>
      </a>
    </li>
  );
}

function SectionMoreBtn({ href, label }) {
  return (
    <div style={{ textAlign: "center", margin: "24px 0 0" }}>
      <a href={href} target="_blank" rel="noopener noreferrer" style={moreButtonStyle}>{label}</a>
    </div>
  );
}

// ─────────────────────────────────────────────
// ヘッダー
// ─────────────────────────────────────────────

function Header() {
  const [openSub, setOpenSub] = useState(null);

  return (
    <header id="top" style={{ background: "#fff", borderBottom: "1px solid #ccc" }}>
      {/* タイトルバー */}
      <div style={{ background: RED, padding: "7px 14px", display: "flex", alignItems: "baseline", gap: 10 }}>
        <a href="#top" style={{ color: "#fff", textDecoration: "none", fontFamily: FONT_SERIF, fontSize: 18, fontWeight: "bold" }}>
          一般財団法人 阿部 亮 財団
        </a>
        <span style={{ color: "rgba(255,255,255,0.75)", fontFamily: FONT_SERIF, fontSize: 12 }}>
          - ABE RYO FOUNDATION -
        </span>
      </div>

      {/* ナビゲーション */}
      <nav style={{ display: "flex", overflowX: "auto", background: "#fff" }}>
        {NAV_ITEMS.map((item, i) => (
          <div key={i} style={{ position: "relative", flexShrink: 0 }}
            onMouseEnter={() => item.sub && setOpenSub(i)}
            onMouseLeave={() => setOpenSub(null)}
          >
            <a href={item.href} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              width: 130, textDecoration: "none",
              borderRight: "1px solid #ddd",
            }}>
              <img src={item.img} alt={item.label}
                style={{ width: 130, height: 80, objectFit: "cover", display: "block" }} />
              <span style={{
                fontFamily: FONT_SANS, fontSize: 11, color: "#333",
                textAlign: "center", padding: "6px 4px 8px",
                lineHeight: 1.6, whiteSpace: "pre-line",
              }}>
                {item.short || item.label}
              </span>
            </a>

            {/* サブメニュー */}
            {item.sub && openSub === i && (
              <div style={{
                position: "absolute", top: "100%", left: 0, zIndex: 300,
                background: "#fff", border: "1px solid #ccc",
                minWidth: 200, boxShadow: "2px 4px 8px rgba(0,0,0,0.15)",
              }}>
                {item.sub.map((s, j) => (
                  <a key={j} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    display: "block", padding: "10px 14px",
                    fontFamily: FONT_SANS, fontSize: 12, color: "#333",
                    textDecoration: "none", borderBottom: "1px solid #eee",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

// ─────────────────────────────────────────────
// メインビジュアル
// ─────────────────────────────────────────────

function HeroSection() {
  return (
    <section style={{ background: "#fff" }}>
      <a href="https://aberyo.or.jp/awards/" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
        <img src={`${BASE}/top.jpg`} alt="阿部 亮 財団"
          style={{ width: "100%", height: "auto", display: "block" }} />
      </a>
      {/* アワードバナー */}
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: 24, padding: "12px 16px",
        background: "#f9f9f9", borderBottom: "1px solid #ddd",
      }}>
        <a href="https://aberyo.or.jp/awards" target="_blank" rel="noopener noreferrer">
          <img src={`${BASE}/award.png`} alt="award" style={{ height: 58, objectFit: "contain" }} />
        </a>
        <a href="https://aberyo.or.jp/awards2" target="_blank" rel="noopener noreferrer">
          <img src={`${BASE}/award2.png`} alt="award2" style={{ height: 58, objectFit: "contain" }} />
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// セクションナビ（赤ボタン列）
// ─────────────────────────────────────────────

function SectionNav() {
  return (
    <nav style={{ display: "flex", background: RED, flexWrap: "wrap" }}>
      {SEC_NAV.map((item, i) => (
        <a key={i} href={item.href} style={{
          flex: "1 1 16%", minWidth: 100,
          color: "#fff", textDecoration: "none",
          fontFamily: FONT_SANS, fontSize: 11,
          textAlign: "center", whiteSpace: "pre-line",
          padding: "10px 6px", lineHeight: 1.6,
          borderRight: i < SEC_NAV.length - 1 ? "1px solid rgba(255,255,255,0.3)" : "none",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.12)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

// ─────────────────────────────────────────────
// タイトル画像スライド
// ─────────────────────────────────────────────

function TitleImages() {
  return (
    <div style={{ display: "flex", overflowX: "auto", background: "#e8e8e8", borderBottom: "2px solid #ccc" }}>
      {TITLE_IMGS.map(id => (
        <img key={id} src={`${BASE}/${id}.jpg`} alt=""
          style={{ height: 60, flexShrink: 0, display: "block" }}
          onError={e => { e.currentTarget.style.display = "none"; }} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// 毎年100人の子どもの命を救うプロジェクト
// ─────────────────────────────────────────────

function HospitalSection() {
  return (
    <section id="sec2" style={{ background: "#fff5f5", padding: "36px 0 40px", borderBottom: "4px solid #ddd" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <img src={`${BASE}/sec2_sp.jpg`} alt="毎年100人の子どもの命を救うプロジェクト"
          style={{ maxWidth: "100%", display: "block", marginBottom: 20 }} />
        <h2 style={sectionTitleStyle}>毎年100人の子どもの命を救う プロジェクト</h2>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 24 }}>
          阿部 亮 財団は カンボジアで毎年１００人の子どもの命を救う「こども医療センター」の建設支援を行いました。
        </p>
        <ul style={{ display: "flex", gap: 16, padding: 0, flexWrap: "wrap" }}>
          {HOSPITAL_NEWS.map((n, i) => <NewsCard key={i} item={n} />)}
        </ul>
        <SectionMoreBtn href="https://aberyo.or.jp/hospital/" label="毎年100人の子どもの命を救うプロジェクト" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ヒマラヤで森をつくろうプロジェクト
// ─────────────────────────────────────────────

function HimalayaSection() {
  return (
    <section id="sec6" style={{ background: "#f5fff5", padding: "36px 0 40px", borderBottom: "4px solid #ddd" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <img src={`${BASE}/hima.png`} alt="ヒマラヤで森をつくろうプロジェクト"
          style={{ maxWidth: "100%", display: "block", marginBottom: 20 }} />
        <h2 style={sectionTitleStyle}>ヒマラヤで森をつくろう プロジェクト</h2>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
          <img src={`${BASE}/himalaya/hima1.jpg`} alt="アルピニスト 野口 健さんと阿部 亮 会長"
            style={{ width: 260, height: "auto", objectFit: "cover", flexShrink: 0 }}
            onError={e => { e.currentTarget.style.display = "none"; }} />
          <div>
            <p style={{ fontFamily: FONT_SANS, fontSize: 12, color: "#888", marginBottom: 6 }}>
              アルピニスト 野口 健さんと阿部 亮 会長
            </p>
            <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", lineHeight: 1.9 }}>
              阿部 亮 財団はアルピニスト野口健さんの「ヒマラヤのサマ村に森をつくるプロジェクト」に賛同し支援しています。
            </p>
          </div>
        </div>
        <ul style={{ display: "flex", gap: 16, padding: 0, flexWrap: "wrap" }}>
          {HIMALAYA_NEWS.map((n, i) => <NewsCard key={i} item={n} />)}
        </ul>
        <SectionMoreBtn href="https://aberyo.or.jp/himalaya/" label="ヒマラヤで森をつくろうプロジェクト" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ラジオ番組バナー
// ─────────────────────────────────────────────

function RadioBanner() {
  return (
    <section style={{ background: "#f8f8f8", borderBottom: "4px solid #ddd", padding: "24px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <a href="http://www.1242.com/aberyo/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginBottom: 12 }}>
          <img src={`${BASE}/radios1.png`} alt="阿部亮のNGO世界一周" style={{ maxWidth: "100%", height: "auto" }} />
        </a>
        <p style={{ fontFamily: FONT_SANS, fontSize: 14, color: "#333", margin: "0 0 6px" }}>
          当財団では「物理の推し活」プロジェクトを実施中！
        </p>
        <p style={{ marginBottom: 8 }}>
          <a href="https://www.1242.com/aberyo/aberyo_blog/20250502-338204/" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: FONT_SANS, fontSize: 13, color: RED }}>
            第一弾　ニッポン放送　ラジオ科学特番
          </a>
        </p>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", marginBottom: 14 }}>ぜひご視聴ください！</p>
        <a href="https://www.youtube.com/channel/UCjxPoNub9xtY9oM8OpOPx7w" target="_blank" rel="noopener noreferrer">
          <img src={`${BASE}/b2.jpg`} alt="YouTube" style={{ maxWidth: 300, height: "auto" }} />
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 世界に学校を建てようプロジェクト
// ─────────────────────────────────────────────

function SchoolSection() {
  return (
    <section id="sec1" style={{ background: "#f5f5ff", padding: "36px 0 40px", borderBottom: "4px solid #ddd" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <img src={`${BASE}/sec1_sp.jpg`} alt="世界に学校を建てようプロジェクト"
          style={{ maxWidth: "100%", display: "block", marginBottom: 20 }} />
        <h2 style={sectionTitleStyle}>世界に学校を建てよう プロジェクト</h2>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 24 }}>
          会長 阿部 亮は、世界を旅した時に助けられた現地の人々への恩返しとして、このプロジェクトを始めました。
        </p>
        <ul style={{ display: "flex", gap: 16, padding: 0, flexWrap: "wrap" }}>
          {SCHOOL_NEWS.map((n, i) => <NewsCard key={i} item={n} />)}
        </ul>
        <SectionMoreBtn href="https://aberyo.or.jp/schoolproject/" label="世界に学校を建てようプロジェクト" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ミャンマーで日本語を教えようプロジェクト
// ─────────────────────────────────────────────

function JapaneseSection() {
  return (
    <section id="sec7" style={{ background: "#fffaf8", padding: "36px 0 40px", borderBottom: "4px solid #ddd" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <img src={`${BASE}/japa2.jpg`} alt="ミャンマーで日本語を教えようプロジェクト"
          style={{ maxWidth: "100%", display: "block", marginBottom: 20 }} />
        <h2 style={sectionTitleStyle}>ミャンマーで日本語を教えよう プロジェクト</h2>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
          阿部 亮 財団は ミャンマーで6校の寺子屋学校建設支援をしました。さらに子どもの未来を広げるため、2019年～2022年まで、日本語を教えるプロジェクトを行いました。
        </p>

        <p style={{ fontFamily: FONT_SERIF, fontSize: 15, color: "#333", fontWeight: "bold", marginBottom: 10 }}>
          ミャンマーで日本語を教えよう プロジェクト ～2019年の軌跡～
        </p>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", marginBottom: 8 }}>日本語を教えようプロジェクト 活動動画</p>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, display: "flex", flexDirection: "column", gap: 0 }}>
          {JAPANESE_VIDEOS.map((v, i) => (
            <li key={i} style={{
              display: "flex", gap: 12, alignItems: "center",
              padding: "7px 0", borderBottom: "1px dotted #ddd",
            }}>
              <span style={{ fontFamily: FONT_SANS, fontSize: 12, color: RED, flexShrink: 0 }}>{v.date}</span>
              <span style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555" }}>{v.title}</span>
            </li>
          ))}
        </ul>

        <ul style={{ display: "flex", gap: 16, padding: 0, flexWrap: "wrap" }}>
          {JAPANESE_NEWS.map((n, i) => <NewsCard key={i} item={n} />)}
        </ul>
        <SectionMoreBtn href="https://aberyo.or.jp/japanese/" label="ミャンマーで日本語を教えようプロジェクト" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 財団理念・会長バナー
// ─────────────────────────────────────────────

function FoundationBanner() {
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #ddd", padding: "28px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <img src={`${BASE}/crs2.png`} alt="財団理念" style={{ maxWidth: "100%", marginBottom: 20 }} />
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
          <img src={`${BASE}/cl4s.png`} alt="" style={{ maxWidth: 280, height: "auto" }} />
          <a href="http://www.1242.com/aberyo/" target="_blank" rel="noopener noreferrer">
            <img src={`${BASE}/cl3.png`} alt="ラジオ" style={{ maxWidth: 280, height: "auto" }} />
          </a>
        </div>
        <div style={{ marginBottom: 16 }}>
          <a href="https://www.youtube.com/channel/UCjxPoNub9xtY9oM8OpOPx7w" target="_blank" rel="noopener noreferrer">
            <img src={`${BASE}/bs3.jpg`} alt="YouTube" style={{ maxWidth: 280, height: "auto" }} />
          </a>
        </div>
        <a href="https://aberyo.or.jp/messages/" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: FONT_SERIF, fontSize: 16, color: RED, textDecoration: "none" }}>
          ▶ 会長 阿部 亮 メッセージ
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 子どもの未来を広げる活動
// ─────────────────────────────────────────────

function FutureSection() {
  return (
    <section id="sec4" style={{ background: "#f5f9ff", padding: "36px 0 40px", borderBottom: "4px solid #ddd" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={sectionTitleStyle}>子どもの未来を広げる活動</h2>
        <ul style={{ display: "flex", gap: 16, padding: 0, flexWrap: "wrap" }}>
          {FUTURE_NEWS.map((n, i) => <NewsCard key={i} item={n} />)}
        </ul>
        <SectionMoreBtn href="https://aberyo.or.jp/future/" label="子どもの未来を広げる活動" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ページトップへ
// ─────────────────────────────────────────────

function ToTop() {
  return (
    <div style={{ textAlign: "right", padding: "6px 16px", background: "#eee", borderBottom: "1px solid #ddd" }}>
      <a href="#top"
        style={{ fontFamily: FONT_SANS, fontSize: 12, color: "#555", textDecoration: "none" }}>
        ▲ topへ
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────
// OUR PARTNERS
// ─────────────────────────────────────────────

function PartnersSection() {
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #ddd", padding: "32px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontFamily: FONT_SANS, fontSize: 18, color: "#333", textAlign: "center", marginBottom: 6 }}>
          OUR PARTNERS
        </h2>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#666", textAlign: "center", marginBottom: 20 }}>
          阿部 亮 財団は 下記の団体の活動を支援しています
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, alignItems: "center" }}>
          {PARTNERS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
              <img src={p.img} alt={p.name}
                style={{ maxHeight: 52, maxWidth: 150, objectFit: "contain", display: "block" }}
                onError={e => { e.currentTarget.replaceWith(Object.assign(document.createElement("span"), { textContent: p.name, style: "font-size:12px;color:#666;font-family:sans-serif;" })); }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// アクセス・お問い合わせ
// ─────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({
    name:"", kana:"", company:"", zip:"", pref:"", address:"", building:"", tel:"", email:"", emailConfirm:"", message:"",
  });
  const [sent, setSent] = useState(false);
  const setField = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const TH = ({ children }) => (
    <th style={{
      fontFamily: FONT_SANS, fontSize: 13, color: "#333",
      background: "#f0f0f0", padding: "10px 12px",
      textAlign: "left", whiteSpace: "nowrap",
      border: "1px solid #ccc", width: 160, verticalAlign: "middle",
    }}>
      {children}
    </th>
  );

  const TD = ({ children }) => (
    <td style={{ border: "1px solid #ccc", padding: "8px 10px", verticalAlign: "middle" }}>
      {children}
    </td>
  );

  const inputStyle = {
    fontFamily: FONT_SANS, fontSize: 13,
    padding: "6px 8px", border: "1px solid #bbb",
    borderRadius: 2, width: "100%", boxSizing: "border-box",
  };

  const FIELDS = [
    { label: "氏名＊", name: "name", required: true },
    { label: "フリガナ＊", name: "kana", required: true },
    { label: "会社名", name: "company" },
    { label: "郵便番号", name: "zip", placeholder: "例）000-0000" },
    { label: "ご住所", name: "address", placeholder: "例）東京都新宿区新宿4-3-17" },
    { label: "ビル・マンション名", name: "building", placeholder: "例）フォーキャスト新宿サウス4階" },
    { label: "電話番号＊", name: "tel", required: true, placeholder: "例）03-1234-5678" },
    { label: "メールアドレス＊", name: "email", required: true, type: "email" },
    { label: "（確認）", name: "emailConfirm", required: true, type: "email" },
  ];

  return (
    <section style={{ background: "#fff", padding: "40px 0 48px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>

        {/* アクセス */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={sectionTitleStyle}>アクセス</h2>
          <p style={{ fontFamily: FONT_SANS, fontSize: 14, color: "#555", marginTop: 10 }}>
            〒160-0023 東京都新宿区西新宿6-12-1 パークウエスト4F
          </p>
        </div>

        {/* お問い合わせ */}
        <h2 style={sectionTitleStyle}>お問い合わせ</h2>
        <p style={{ fontFamily: FONT_SANS, fontSize: 13, color: "#555", margin: "12px 0 20px", lineHeight: 1.7 }}>
          下記のフォームに必要事項をご記入ください。「＊」は必須項目になります。
        </p>

        {sent ? (
          <div style={{
            padding: "32px", background: "#f0fff0", border: "1px solid #9d9",
            borderRadius: 4, textAlign: "center",
          }}>
            <p style={{ fontFamily: FONT_SANS, fontSize: 15, color: "#363" }}>
              お問い合わせを送信しました。担当者よりご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {FIELDS.map(f => (
                  <tr key={f.name}>
                    <TH>{f.label}</TH>
                    <TD>
                      <input
                        name={f.name} type={f.type || "text"}
                        value={form[f.name]} onChange={setField}
                        required={f.required} placeholder={f.placeholder || ""}
                        style={inputStyle}
                      />
                    </TD>
                  </tr>
                ))}
                <tr>
                  <TH>都道府県</TH>
                  <TD>
                    <select name="pref" value={form.pref} onChange={setField} style={inputStyle}>
                      <option value="">選択してください</option>
                      {PREFS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </TD>
                </tr>
                <tr>
                  <TH>お問い合わせ内容</TH>
                  <TD>
                    <textarea
                      name="message" value={form.message} onChange={setField}
                      rows={5} style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </TD>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <button type="submit" style={moreButtonStyle}
                onMouseEnter={e => (e.currentTarget.style.background = "#a00")}
                onMouseLeave={e => (e.currentTarget.style.background = RED)}
              >
                送信する
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// フッター
// ─────────────────────────────────────────────

function Footer() {
  const links = [
    { label: "毎年100人の子どもの命を救うプロジェクト", href: "https://aberyo.or.jp/hospital/" },
    { label: "ヒマラヤで森をつくろうプロジェクト", href: "https://aberyo.or.jp/himalaya/" },
    { label: "世界に学校を建てようプロジェクト", href: "https://aberyo.or.jp/schoolproject/" },
    { label: "子どもの未来を広げる活動", href: "https://aberyo.or.jp/future/" },
    { label: "会長 阿部 亮 メッセージ", href: "https://aberyo.or.jp/messages/" },
    { label: "サイトマップ", href: "https://aberyo.or.jp/sitemaps/" },
  ];
  return (
    <footer style={{ background: "#444", color: "#ccc", padding: "28px 16px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <img src={`${BASE}/logo.png`} alt="阿部 亮 財団" style={{ height: 34, objectFit: "contain" }}
            onError={e => { e.currentTarget.style.display = "none"; }} />
        </div>
        <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px 18px", marginBottom: 14 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: FONT_SANS, fontSize: 11, color: "#bbb", textDecoration: "none",
            }}
            onMouseEnter={e => (e.target.style.color = "#fff")}
            onMouseLeave={e => (e.target.style.color = "#bbb")}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p style={{ fontFamily: FONT_SANS, fontSize: 11, color: "#888", textAlign: "center" }}>
          ©Abe Ryo Foundation
        </p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// ページ本体
// ─────────────────────────────────────────────

export default function AbeRyoFoundation() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #e0e0e0; }
        img { max-width: 100%; }
      `}</style>

      {/* 中央寄せ・最大幅960px のコンテナ */}
      <div style={{
        background: "#fff",
        maxWidth: 960,
        margin: "0 auto",
        boxShadow: "0 0 12px rgba(0,0,0,0.18)",
        overflowX: "hidden",
      }}>
        <Header />
        <HeroSection />
        <SectionNav />
        <TitleImages />

        <HospitalSection />
        <HimalayaSection />
        <RadioBanner />
        <SchoolSection />
        <JapaneseSection />
        <FoundationBanner />

        <ToTop />

        <FutureSection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
