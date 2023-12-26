/** Types */
type Paragraph = {
  id: string;
  title: string;
  description: string[];
};

/** Dictionaries */
export const WEBSITE_URL = "https://meguro.es";

export const TITLE_SUFFIX = " | Meguro.es";
export const DEFAULT_TITLE = "Meguro.es";
export const DEFAULT_DESCRIPTION =
  "Meguro.esは目黒周辺のフロントエンド開発者による勉強会です";

export const WE_ARE_BACK_ID = "We are back!";
export const WE_ARE_BACK_TITLE = "Meguro.esが帰ってきました！";
export const WE_ARE_BACK_DESCRIPTION =
  "Meguro.es は、目黒周辺のフロントエンドエンジニアによる勉強会コミュニティです。このサイトでは、二ヶ月ごとに開催されるイベントの過去のミートアップの情報や、運営に関する情報をお知らせします。";

export const POST_PARTIAL_LIST_ID = "Articles";
export const POST_PARTIAL_LIST_TITLE = "イベントレポート";

export const CONTACT_ID = "Contact";
export const CONTACT_TITLE = "ご連絡はこちらから";

export const GUIDELINE_INTRO_ID = "Guideline";
export const GUIDELINE_INTRO_TITLE = "ガイドラインへのご協力をお願いします";
export const GUIDELINE_INTRO_DESCRIPTION = [
  "Meguro.esでは、快適なコミュニティの運営のためにガイドラインへのご協力をお願いしています。",
  "登壇の有無に関わらず、全ての参加者とMeguro.es運営がコミュニティの一員です。",
  "みなさまのご協力があって Meguro.es が運営されています。ありがとうございます。",
];

export const ABOUT = "私たちについて";
export const ABOUT_TITLE = `${ABOUT}${TITLE_SUFFIX}`;
export const ABOUT_DESCRIPTION = "Meguro.esとは";
export const ABOUT_SUB_DESCRIPTION = [];
export const ABOUT_SUMMARY: Paragraph[] = [];
export const ABOUT_WANTED_SPONSOR_TITLE = "";
export const ABOUT_WANTED_SPONSOR_DESCRIPTION = [];
export const ABOUT_SPONSOR_REWARD_TITLE = "";
export const ABOUT_SPONSOR_REWARD: Paragraph[] = [];

export const GUIDELINE = "ガイドライン";
export const GUIDELINE_TITLE = `${GUIDELINE}${TITLE_SUFFIX}`;
export const GUIDELINE_DESCRIPTION = "心地よいMeguro.esをつくるために";
export const GUIDELINE_SUB_DESCRIPTION = [
  "このガイドラインは、Meguro.esコミュニティーでの活動をするすべてのメンバーに対して協力をお願いするものです。",
  "コミュニティでの活動とは、Meguro.esが主催するミートアップ、講習会、それに付随するインターネット上の活動を指します。",
  "<br>",
  "参加者、発表者、運営メンバーは皆、Meguro.esコミュニティーの一員です。",
  "みなさまのご協力があって Meguro.es が運営されています。ありがとうございます。",
];
export const GUIDELINE_SLOGAN: Paragraph[] = [
  {
    id: "01",
    title: "技術的知見の共有をしよう",
    description: [
      "コミュニティでの活動は、技術的知見の共有やそれを元にした技術者間での交流を主目的に考えましょう。",
      "政治活動・宗教活動・勧誘活動・飲食を目的としてはなりません。",
    ],
  },
  {
    id: "02",
    title: "お互いに敬意を持とう",
    description: [
      "お互いを尊重し敬意を持って相手と接しましょう。",
      "個人、団体に関する誹謗中傷、他者を軽視した発言・行動・ハラスメントは許容しません",
    ],
  },
  {
    id: "03",
    title: "コミュニティーを運営をしよう",
    description: [
      "だれもがコミュニティーの一員として、コミュニティーの運営と発展に貢献しましょう。",
      "懇親会で新しい人と話をする、知ったことをSNSで発信する、運営メンバーへの改善点を提案する。できる範囲で構いません。Meguro.esを盛り上げましょう。",
    ],
  },
];
export const GUIDELINE_AGAINST_VIOLATION_TITLE = "ガイドラインへの違反";
export const GUIDELINE_AGAINST_VIOLATION: Paragraph[] = [
  {
    id: "Report",
    title: "ガイドライン違反を確認した場合",
    description: [
      "ガイドライン違反を確認した場合は、運営メンバーに連絡をしてください。 また、ガイドラインへ違反しているか迷った場合でも、運営メンバーにご相談ください。",
      "運営メンバーは「STAFF」の名札をつけております。",
      'イベント中に違反を確認した際は、運営メンバーへ直接ご連絡いただくか、公式Xアカウント <a href="https://twitter.com/meguroes">@meguroes</a> のダイレクトメッセージをご利用ください。',
      "<br>",
      "また、イベントの最後に行っているアンケートでも通報窓口は用意してあります。",
      "こちらはヒアリングやお返事ができませんので、できる限り詳細にご記入をお願いいたします。",
      "<br>",
      "運営メンバーが対象となる違反を確認した際は、公式Xアカウントではなく、対象とならない運営メンバーに直接ご相談ください。",
      "通報者の情報は、対象となっていない運営メンバー間のみで厳重に取り扱います。 通報者の同意なく公表することはございません。",
    ],
  },
  {
    id: "How we deal violations",
    title: "違反への対処",
    description: [
      "ガイドラインに反している場合、運営メンバーは、コミュニティーの運営を円滑にするため対処を行います。",
      "対処の際、周りの参加者の皆さまにご協力をお願いする場合がございます。",
      "<br>",
      "運営メンバーはガイドラインに違反した者に対し、警告、退出指示、参加禁止などの対処を行います。 非対処者は運営メンバーの指示に従ってください。",
      "また、必要に応じて警備員や各機関と連携し問題解決につとめます。",
      "とりわけ悪質な行為に関しては、他イベント運営者間で事案の公開と共有を行います。",
    ],
  },
];
export const GUIDELINE_SUPPLEMENT_TITLE = "補足";
export const GUIDELINE_SUPPLEMENT: Paragraph[] = [
  {
    id: "Harassment Prevention",
    title: "ハラスメントについて",
    description: [
      "Meguro.esでは",
      "・アイデンティティー（民族、国籍、人種、宗教）と性表現</li>",
      "・性的指向</li>",
      "・外見 / 身体的特徴</li>",
      "・障がい</li>",
      "における他者への支配的な促す言動をハラスメントと定義し、これに限定されるものではありません。私たちはこれらの行動に対して厳正に対処します。",
      "<br>",
      "また、イベントの有無に関わらず",
      "・その他の保護対象事項</li>",
      "・公共の場での不適切画像</li>",
      "・意図的な脅迫や侮辱的な言動</li>",
      "・ストーカー、追い掛け行為</li>",
      "・写真や動画撮影などによる嫌がらせ行為</li>",
      "・講演やイベントの断続的な妨害</li>",
      "・不適切な身体的接触</li>",
      "・不愉快な視線</li>",
      "これらの行為を確認した場合は違反者として対処を行います。以上の行為を止めるように注意された参加者は直ちに従ってください。",
    ],
  },
  {
    id: "About Invitation",
    title: "勧誘について",
    description: [
      "以下の行為は一般的な範囲であれば問題ありません。",
      "・採用サイトや技術イベントの簡単な告知</li>",
      "・知見の共有に必要である範囲の製品紹介・デモ</li>",
      "<br>",
      "発表時のすべての勧誘行為を防ぐものではありません。イベントの登壇者であるかないかに関わらず、当該人物を不快にしない範囲での勧誘・推薦を受け入れています。",
    ],
  },
  {
    id: "About Sponsors",
    title: "企業スポンサーについて",
    description: [
      "コミュニティーの継続運営、運営資金の調達のため、企業スポンサーにおいては採用・広報活動を認めています。強引な勧誘は禁止いたします。",
      "<br>",
      "また、参加者の個人情報を特定できる形でスポンサーに提供することはありません。",
      "<br>",
      "参加者にアンケートの実施をお願いすることがあります。 集計したアンケートの回答は、回答者の同意のもとスポンサーに提供することがあります。",
    ],
  },
];

export const MEETUP_LIST_ID = "Event";
export const MEETUP_LIST = "イベント一覧";

export const POST_LIST = "記事一覧";

export const ERROR_PAGE_NOT_FOUND = "ページが見つかりませんでした";
export const ERROR_SOMETHING_WENT_WRONG = "エラーが発生しました";

export const LABEL_COMING_SOON = "開催予定";
export const LABEL_FINISHED = "公開終了";
