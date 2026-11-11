/* =========================================================
   LANGUAGES  (English / اردو / Deutsch)
   ---------------------------------------------------------
   English is whatever is written in index.html — keep editing
   it there as usual. This file holds only Urdu and German.

   TO CHANGE A TRANSLATION: edit the text below.

   TO TRANSLATE A NEW PIECE OF TEXT:
     1. Give its element a key in index.html:
          <p data-i18n="myKey">English text</p>
     2. Add   myKey: '...',   to both  ur  and  de  below.
   A key missing below simply shows the English text.

   Note: if you change English text in index.html, update the
   matching Urdu and German lines here too — they don't follow
   along on their own.

   The invitation opens in Urdu by default. Share a link that opens in
   another language by adding ?lang=en or ?lang=de to the address, e.g.
     https://abdulwasay1100.github.io/invitation/?lang=en
   To change the default, edit DEFAULT_LANG further down this file.
   ========================================================= */

const TRANSLATIONS = {

  /* ---------------- اردو ---------------- */
  ur: {
    title:              'آپ مدعو ہیں',
    tapToOpen:          '✦ کھولنے کے لیے ٹیپ کریں ✦',
    bismillahMeaning:   'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے',
    quote:              'جو اپنی زندگی کا ایک خوبصورت باب شروع کرنے جا رہے ہیں، اور اس پرمسرت موقع پر آپ کی شرکت ہمارے لیے باعثِ مسرت ہوگی۔',
    name1:              'محمد عبد الواسع خالد',
    name2:              'بنت محمد صابر خان',
    scrollDown:         'نیچے سکرول کریں',

    host1:              'خالد مسعود خان و بیگم',
    alongWith:          'اور',
    withFamilies:       'اور جملہ افرادِ خانہ',
    invitesYou:         'آپ کو',
    toJoinUs:           'مدعو کرتے ہیں',
    ceremonyNotice:     'اس تقریب میں آپ کی شرکت باعثِ افتخار ہوگی',
    ceremonySub:        'اور ہماری خوشیوں کو دوبالا کرے گی',
    
    // Legacy support for line keys if referenced in HTML
    line1:              'اپنے پیارے بیٹے کی',
    line2:              'ولیمہ و تقریب میں',
    line3:              'اس تقریب میں آپ کی شرکت باعثِ افتخار ہوگی',
    line4:              'اور ہماری خوشیوں کو دوبالا کرے گی',
    qabool:             '"قبول ہے"',

    saveTheDate:        'تاریخ یاد رکھیں',
    scratchToReveal:    'کھرچ کر دیکھیں',
    nikkahRukhsatiCaps: 'نکاح و رخصتی',
    date1:              'نکاح و رخصتی ۲۹ جنوری ۲۰۲۷ بروز جمعہ',
    nikkahDate:         'نکاح و رخصتی ۲۹ جنوری ۲۰۲۷ بروز جمعہ',
    hijri1:             '21 شعبان 1448 ہجری',
    receptionCaps:      'ولیمہ',
    date2:              'ولیمہ ۳۱ جنوری ۲۰۲۷ بروز اتوار',
    valimaDate:         'ولیمہ ۳۱ جنوری ۲۰۲۷ بروز اتوار',
    hijri2:             '23 شعبان 1448 ہجری',

    momentApproaches:  'مبارک گھڑی قریب ہے',
    countdownTitle:     'ولیمہ میں باقی وقت',
    days:               'دن',
    hours:              'گھنٹے',
    minutes:            'منٹ',
    seconds:            'سیکنڈ',
    today:              'آج!',

    wordsTitle:         'آغاز سے پہلے چند الفاظ',
    words1:             'اسلام نے نکاح کو سادہ، آسان اور بغیر کسی بوجھ کے بنایا ہے۔ وقت کے ساتھ ہماری رسموں نے اسے سادگی سے دور اور مشکل بنا دیا ہے۔',
    words2:             'نبی کریم صلی اللہ علیہ وسلم نے فرمایا کہ نکاح انسان کے ایمان کا آدھا حصہ مکمل کرتا ہے۔ باقی آدھا حصہ مل کر سیکھنے اور بہتر بننے کا نام ہے۔',
    words3:             'یہ سفر ایک ساتھ آگے بڑھنے اور چھوٹی چھوٹی خوشیوں کو بانٹنے کا نام ہے، سامان کے تبادلے کا نہیں۔',
    words4:             'ہمیں اپنی رسموں پر دوبارہ غور کرنا چاہیے تاکہ شادیاں سادہ اور خوشیوں سے بھری رہیں۔',
    words5:             'اللہ تعالیٰ سب کے لیے آسانی فرمائے۔ آمین۔',

    nikkahRukhsati:    'نکاح و رخصتی',
    whenWhere:          'کب اور کہاں',
    nikkah:             'نکاح',
    nikkahTime:         'شام 5:00 بجے',
    nikkahNote:         'مسجد — جلد اعلان کیا جائے گا',
    dinner:             'عشائیہ',
    dinnerTime:         'رات 8:00 بجے',
    dinnerNote:         'بینکوئٹ ہال',
    rukhsati:           'رخصتی',
    rukhsatiTime:       'رات 10:00 بجے',
    rukhsatiNote:       'نیک تمناؤں اور دعاؤں کے ساتھ',
    venueVideo:         'ویڈیو میں مقام دیکھیں',
    venue:              'مقام',
    venueTba:           'جلد اعلان کیا جائے گا',
    venueNote:          'مقام کی تفصیلات جلد فراہم کی جائیں گی',

    walimaTitle:        'دعوتِ ولیمہ',
    reception:          'استقبال',
    receptionTime:      'سہ پہر 4:00 بجے',
    receptionNote:      'مہمانوں کی آمد اور استقبال',
    walimaDinner:       'عشائیہ',
    walimaDinnerTime:   'شام 7:00 بجے',
    walimaDinnerNote:   'پرتکلف عشائیہ',

    footerLine:        'ہم آپ کے ساتھ خوشیاں منانے کے منتظر ہیں۔',
    credit:             'ڈیجیٹل دعوت نامہ از: H&W Invites',
  },

  /* ---------------- English ---------------- */
  en: {
    title:              "You're Invited",
    tapToOpen:          '✦ TAP TO OPEN ✦',
    bismillahMeaning:   'In the name of Allah, the Most Gracious, the Most Merciful',
    quote:              'A beautiful chapter of our lives is about to begin, and we would be honored to have you with us.',
    name1:              'Muhammad Abdul Wasay Khalid',
    name2:              'Binte Muhammad Sabir Khan',
    scrollDown:         'SCROLL DOWN',

    host1:              'MR. & MRS. KHALID MASOOD KHAN',
    alongWith:          'AND',
    withFamilies:       'AND TOGETHER WITH THEIR FAMILY',
    invitesYou:         'Invites You',
    toJoinUs:           'TO JOIN US',
    ceremonyNotice:     'Your presence will be a matter of great honor for us',
    ceremonySub:        'as we celebrate this joyful occasion',

    line1:              'for the Valima Reception',
    line2:              'of their beloved Son',
    line3:              'Your presence will be a matter of great honor for us',
    line4:              'as we celebrate this joyful occasion',
    qabool:             '"Qabool Hai"',

    saveTheDate:        'SAVE THE DATE',
    scratchToReveal:    'Scratch to Reveal',
    nikkahRukhsatiCaps: 'NIKKAH & RUKHSATI',
    date1:              'Friday, 29 January 2027',
    nikkahDate:         'Nikkah & Rukhsati: Friday, 29 January 2027',
    hijri1:             '21 Sha\'ban 1448 AH',
    receptionCaps:      'VALIMA RECEPTION',
    date2:              'Sunday, 31 January 2027',
    valimaDate:         'Valima: Sunday, 31 January 2027',
    hijri2:             '23 Sha\'ban 1448 AH',

    momentApproaches:  'THE MOMENT APPROACHES',
    countdownTitle:     'Walima Countdown',
    days:               'DAYS',
    hours:              'HOURS',
    minutes:            'MINUTES',
    seconds:            'SECONDS',
    today:              'Today!',

    wordsTitle:         'A few words before we begin',
    words1:             'Islam made marriage simple and light, easy, and without hardship. Over time our customs carried it far from that simplicity.',
    words2:             'The Prophet Muhammad (PBUH) said that marriage completes half of one\'s faith. The other half is that we keep learning and growing better together.',
    words3:             'This journey is about building something from nothing, facing hardship side by side, and finding joy in small victories.',
    words4:             'The world is changing, and we should think again about our customs, so that weddings stay simple and full of joy.',
    words5:             'May Allah make it easy for everyone. Ameen.',

    whenWhere:          'WHEN & WHERE',
    nikkahTime:         '5:00 PM',
    nikkahNote:         'Mosque – Details updating soon',
    dinner:             'DINNER',
    dinnerTime:         '8:00 PM',
    dinnerNote:         'Banquet Hall',
    rukhsatiTime:       '10:00 PM',
    rukhsatiNote:       'With warm wishes & prayers',
    venueVideo:         'View Venue Video',
    venue:              'VENUE',
    venueTba:           'To Be Announced',
    venueNote:          'Location details updating soon',

    walimaTitle:        'Walima Reception',
    reception:          'RECEPTION',
    receptionTime:      '4:00 PM',
    receptionNote:      'Guest arrival & welcome',
    walimaDinner:       'DINNER',
    walimaDinnerTime:   '7:00 PM',
    walimaDinnerNote:   'Grand dinner served',

    footerLine:        "We can't wait to celebrate with you.",
    credit:             'Digital Invitation by: H&W Invites',
  },

  /* ---------------- Deutsch ---------------- */
  de: {
    title:              'Sie sind eingeladen',
    tapToOpen:          '✦ ZUM ÖFFNEN TIPPEN ✦',
    bismillahMeaning:   'Im Namen Allahs, des Allerbarmers, des Barmherzigen',
    quote:              'Ein wunderschönes Kapitel unseres Lebens beginnt – und es wäre uns eine Ehre, Sie dabei zu haben.',
    name1:              'Muhammad Abdul Wasay Khalid',
    name2:              'Binte Muhammad Sabir Khan',
    scrollDown:         'NACH UNTEN SCROLLEN',

    host1:              'HERR & FRAU KHALID MASOOD KHAN',
    alongWith:          'UND',
    withFamilies:       'UND ZUSAMMEN MIT IHRER FAMILIE',
    invitesYou:         'Laden Sie ein',
    toJoinUs:           'UNS BEIZUTRETEN',
    ceremonyNotice:     'Ihre Anwesenheit wäre uns eine große Ehre',
    ceremonySub:        'während wir diesen freudigen Anlass feiern',

    line1:              'für den Valima-Empfang',
    line2:              'ihres geliebten Sohnes',
    line3:              'Ihre Anwesenheit wäre uns eine große Ehre',
    line4:              'während wir diesen freudigen Anlass feiern',
    qabool:             '„Qabool Hai“',

    saveTheDate:        'TERMIN VORMERKEN',
    scratchToReveal:    'Zum Aufdecken rubbeln',
    date1:              'Freitag, 29. Januar 2027',
    nikkahDate:         'Nikkah & Rukhsati: Freitag, 29. Januar 2027',
    hijri1:             '21. Schaban 1448 n. H.',
    receptionCaps:      'EMPFANG',
    date2:              'Sonntag, 31. Januar 2027',
    valimaDate:         'Valima: Sonntag, 31. Januar 2027',
    hijri2:             '23. Schaban 1448 n. H.',

    momentApproaches:  'DER GROSSE MOMENT NAHT',
    countdownTitle:     'Countdown zur Valima',
    days:               'TAGE',
    hours:              'STUNDEN',
    minutes:            'MINUTEN',
    seconds:            'SEKUNDEN',
    today:              'Heute!',

    wordsTitle:         'Ein paar Worte, bevor wir beginnen',
    words1:             'Der Islam hat die Ehe einfach und schlicht angelegt, leicht und ohne Mühsal.',
    words2:             'Der Prophet Muhammad (Friede sei mit ihm) sagte, dass die Ehe die Hälfte des Glaubens vervollständigt.',
    words3:             'Auf diesem Weg geht es darum, gemeinsam etwas aufzubauen und Freude an kleinen Erfolgen zu finden.',
    words4:             'Die Welt verändert sich, und wir sollten unsere Bräuche überdenken, damit Hochzeiten einfach und voller Freude bleiben.',
    words5:             'Möge Allah es allen leicht machen. Amin',

    whenWhere:          'WANN & WO',
    nikkahTime:         '17:00 Uhr',
    nikkahNote:         'Moschee – wird noch bekannt gegeben',
    dinner:             'ABENDESSEN',
    dinnerTime:         '20:00 Uhr',
    dinnerNote:         'Festsaal',
    rukhsatiTime:       '22:00 Uhr',
    rukhsatiNote:       'Mit herzlichen Wünschen & Gebeten',
    venueVideo:         'Video vom Veranstaltungsort ansehen',
    venue:              'ORT',
    venueTba:           'Wird noch bekannt gegeben',
    venueNote:          'Details zum Ort folgen in Kürze',

    walimaTitle:        'Walima-Empfang',
    reception:          'EMPFANG',
    receptionTime:      '16:00 Uhr',
    receptionNote:      'Ankunft & Begrüßung der Gäste',
    walimaDinner:       'ABENDESSEN',
    walimaDinnerTime:   '19:00 Uhr',
    walimaDinnerNote:   'Festliches Abendessen',

    footerLine:        'Wir freuen uns darauf, mit Ihnen zu feiern.',
    credit:             'Digitale Einladung von: H&W Invites',
  },
};

// Global compatibility alias
const translations = TRANSLATIONS;

/* ------------- nothing below needs editing ------------- */

const I18n = (() => {
  const LANGS = { en: 'ltr', de: 'ltr', ur: 'rtl' };
  const STORE_KEY = 'invite-lang';
  const titleEn = document.title;
  const known = lang => Object.prototype.hasOwnProperty.call(LANGS, lang);
  let current = 'en';

  // The English text of an element, captured the first time we see it.
  function english(el) {
    if (!('i18nEn' in el.dataset)) el.dataset.i18nEn = el.textContent;
    return el.dataset.i18nEn;
  }

  function t(key, fallback) {
    const table = TRANSLATIONS[current];
    return (table && table[key]) || fallback;
  }

  function apply(lang) {
    if (!known(lang)) lang = 'en';
    current = lang;

    const root = document.documentElement;
    root.lang = lang;
    root.dir = LANGS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n, english(el));
    });
    document.title = t('title', titleEn);

    document.querySelectorAll('#langSwitch [data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  // Urdu is the default. A visitor who picks a language keeps it (stored
  // below), and ?lang=en / ?lang=de in the address wins over both.
  const DEFAULT_LANG = 'ur';

  function initial() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (known(fromUrl)) return fromUrl;
    try { return localStorage.getItem(STORE_KEY) || DEFAULT_LANG; }
    catch (e) { return DEFAULT_LANG; }
  }

  document.querySelectorAll('#langSwitch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => apply(btn.dataset.lang));
  });

  // Capture every element's English before the first language is applied.
  document.querySelectorAll('[data-i18n]').forEach(english);
  apply(initial());

  return { apply, t, get current() { return current; } };
})();
