/* Dar Alkahrbaa Training Center — shared data store.
   Used by index.html (public site) and admin.html (control panel).
   Real content taken from the academy's posts: Round 25/24 كهرباء, Round 5 تسعير (Commercial Engineering),
   Round 2 تيار خفيف, EMIND Season 2, Egyptian Universities Workshops Season 3 (908 attendees), the workshop
   feedback, and Dar Alkahrbaa Holding's clients from the 2025 company profile.
   Still SAMPLE (waiting for Eng. Hamdy): prices, exact start dates, hours per module, mechanical rounds, and the
   per-round graduate archive.
   The admin panel saves edits to localStorage under DK.KEY; the site reads the same key. In production this file
   is replaced by API calls to the backend (see notes at the bottom). */
(function () {
  var KEY = 'dk-store-v1';

  var seed = {
    version: 5,
    settings: {
      brandAr: 'مركز دار الكهرباء للتدريب',
      brandEn: 'Dar Alkahrbaa Training Center',
      tagline: 'مركز تدريب وتأهيل المهندسين حديثي التخرج وطلاب الفرقة النهائية لسوق العمل، والتابع لشركة دار الكهرباء',
      whatsapp: '201061667184',
      whatsappLabel: '010 61667184',
      phone: '010 61667184',
      email: 'training@daralkahrabaa.com',
      address: 'القاهرة — مصر',
      handle: '@daralkahrabaa',
      contractingUrl: '#',
      facebook: '#', youtube: '#', linkedin: '#', instagram: '#',
      googleLogin: true,
      announcement: 'التسجيل مفتوح في راوند 24 كهرباء — أونلاين + فيديوهات مسجلة',
      counters: [
        { id: 'eng', value: 15000, suffix: '+', label: 'مهندس وطالب اتدربوا معانا', sub: 'من الراوند الأول' },
        { id: 'rounds', value: 24, suffix: '', label: 'راوند كهرباء', sub: 'والراوند 25 في الطريق' },
        { id: 'workshop', value: 908, suffix: '', label: 'طالب في ورش الجامعات', sub: 'الموسم الثالث' },
        { id: 'unis', value: 8, suffix: '', label: 'جامعات ومعاهد', sub: 'زرناها في الموسم الثالث' },
        { id: 'clients', value: 50, suffix: '+', label: 'عميل لدار الكهرباء القابضة', sub: 'من 2014 لحد النهارده' }
      ],
      aiPresets: [
        { id: 'p1', q: 'أنا مهندس كهرباء حديث التخرج، أبدأ بإيه؟', tags: ['elec', 'beginner'] },
        { id: 'p2', q: 'عايز أتعلم التيار الخفيف', tags: ['lowcurrent'] },
        { id: 'p3', q: 'محتاج كورس التسعير والتنفيذ', tags: ['pm', 'pricing'] },
        { id: 'p4', q: 'أنا لسه طالب في الكلية', tags: ['students'] },
        { id: 'p5', q: 'إمتى الراوند الجاي؟', tags: ['next'] },
        { id: 'p6', q: 'فيه فيديوهات مسجلة؟', tags: ['recorded'] }
      ]
    },

    categories: [
      { id: 'elec', name: 'الكهرباء', en: 'Electrical', desc: 'راوندات تصميم وتنفيذ الكهرباء والتيار الخفيف' },
      { id: 'mech', name: 'الميكانيكا', en: 'Mechanical', desc: 'التكييف والتهوية والحريق والصحي' },
      { id: 'pm', name: 'التسعير والتنفيذ', en: 'Commercial Engineering', desc: 'حصر وتسعير وعطاءات لمهندسي التنفيذ والمكتب الفني' },
      { id: 'students', name: 'طلبة الجامعات', en: 'EMIND', desc: 'مبادرة EMIND لتأهيل طلبة الهندسة من الإعدادي' }
    ],

    courses: [
      {
        id: 'r24-elec', cat: 'elec', kind: 'round', roundNo: 24, featured: true,
        title: 'راوند 24 كهرباء', subtitle: 'Winter 2027 — أونلاين + فيديوهات مسجلة',
        mode: ['أونلاين مباشر', 'فيديوهات مسجلة'], status: 'open',
        start: '2027-01-09', schedule: 'المواعيد بتتعلن في جروب الراوند', duration: 'موسم الشتاء 2027',
        seats: 60, booked: 41, price: 9500, oldPrice: 0, currency: 'ج.م',
        instructor: 'م. حمدي عبد الرسول وفريق دار الكهرباء',
        poster: { a: '#262A5C', b: '#F2B705', mark: '24', en: 'ROUND 24', season: 'Winter 2027', modeEn: 'Online + Recorded Videos' },
        image: 'assets/poster-r24-elec.jpg',
        tags: ['elec', 'beginner', 'design', 'recorded'],
        summary: 'الراوند الأساسي للكهرباء: تصميم وتنفيذ من أول حساب الأحمال لحد الشوب دروينج، أونلاين مع تسجيلات لكل محاضرة.',
        modules: [
          { name: 'أساسيات التصميم وحسابات الأحمال', hours: 16 },
          { name: 'الإنارة', hours: 14 },
          { name: 'توزيع القوى واللوحات', hours: 18 },
          { name: 'الكابلات وهبوط الجهد', hours: 12 },
          { name: 'المحولات والمولدات', hours: 12 },
          { name: 'التأريض والصواعق', hours: 10 },
          { name: 'AutoCAD و Revit', hours: 22 },
          { name: 'الشوب دروينج والتنفيذ', hours: 16 }
        ],
        outcomes: ['مشروع تصميم كامل', 'تسجيلات لكل المحاضرات', 'شهادة من مركز دار الكهرباء للتدريب']
      },
      {
        id: 'r25-elec', cat: 'elec', kind: 'round', roundNo: 25, featured: true,
        title: 'راوند 25 كهرباء', subtitle: 'Summer 2027 — التفاصيل قريباً',
        mode: ['حضوري', 'أونلاين مباشر'], status: 'soon',
        start: '', schedule: 'هيتعلن قريباً', duration: 'موسم الصيف 2027',
        seats: 0, booked: 0, price: 0, oldPrice: 0, currency: 'ج.م',
        instructor: 'م. حمدي عبد الرسول وفريق دار الكهرباء',
        poster: { a: '#262A5C', b: '#F2B705', mark: '25', en: 'ROUND 25', season: 'Summer 2027', modeEn: '???' },
        image: 'assets/poster-r25-elec.jpg',
        tags: ['elec', 'beginner', 'next'],
        summary: 'الراوند الجاي في الكهرباء. سجّل اهتمامك ونبعتلك أول ما التسجيل يفتح.',
        modules: [{ name: 'نفس محتوى الراوند الأساسي للكهرباء', hours: 120 }],
        outcomes: []
      },
      {
        id: 'r5-pricing', cat: 'pm', kind: 'round', roundNo: 5, featured: true, ribbon: 'TOP RATED',
        title: 'راوند 5 تسعير وتنفيذ', subtitle: 'Commercial Engineering — تنفيذ وتسعير',
        mode: ['أونلاين مباشر', 'فيديوهات مسجلة'], status: 'open',
        start: '2027-07-13', schedule: 'محاضرتان أسبوعيًا: الجمعة والإثنين على Zoom', duration: '14 محاضرة + 14 تاسك + مشروع',
        seats: 40, booked: 34, price: 5000, oldPrice: 0, currency: 'ج.م',
        instructor: 'م. حمدي عبد الرسول',
        poster: { a: '#262A5C', b: '#F2B705', mark: '5', en: 'ROUND 5', season: 'Commercial Engineering', modeEn: 'Online + Recorded' },
        image: 'assets/poster-r5-pricing.jpg',
        tags: ['pm', 'pricing', 'recorded'],
        summary: 'راوند التسعير والتنفيذ — الأعلى تقييماً والأكثر طلباً. بيجمع الفهم التنفيذي الواقعي واحتراف التسعير التجاري لمشاريع الكهرباء والميكانيكا: 14 محاضرة تفاعلية + 14 تاسك عملي + مشروع تسعير مبنى كامل. للخريجين من 2026 وما قبلها.',
        modules: [
          { name: 'تطبيقات الـ AI في التسعير والتنفيذ', hours: 3 },
          { name: 'تنفيذ المشاريع (Mixed Use / Steel / Factory)', hours: 4 },
          { name: 'تسعير الكابلات LV/MV/LC وحوامل الكابلات', hours: 4 },
          { name: 'الـ Third Fix (كهرباء / تيار خفيف / Fiber)', hours: 3 },
          { name: 'دراسة لوحات LV وMV وعروض الموردين والمطابقة', hours: 4 },
          { name: 'تركيبات MV ولوحات LV وMCC', hours: 3 },
          { name: 'تسعير الإنارة والقوى ومخارج التيار الخفيف', hours: 3 },
          { name: 'قراءة المواصفات قبل التسعير', hours: 2 },
          { name: 'العرض المالي وتحليل الأسعار وأوامر التغيير', hours: 4 },
          { name: 'تسعير الحريق والتكييف والصحي', hours: 4 },
          { name: 'مستخلصات المقاول (جاري / نصف نهائي / نهائي)', hours: 2 },
          { name: 'المشروع النهائي: تسعير مبنى كامل', hours: 4 }
        ],
        outcomes: ['BOQ مسعّر لمبنى كامل', 'شهادة معتمدة من دار الكهرباء للمقاولات والتدريب', 'اعتماد من نقابة المهندسين وإمكانية توثيق من الخارجية', 'محاضرات مسجّلة متاحة مدى الحياة', 'نماذج تصحيح وIdeal Task Solution لكل تاسك']
      },
      {
        id: 'r2-lc', cat: 'elec', kind: 'round', roundNo: 2, featured: true,
        title: 'راوند 2 تيار خفيف', subtitle: 'تصميم + شوب دروينج + تسعير — أونلاين',
        mode: ['أونلاين مباشر', 'فيديوهات مسجلة'], status: 'open',
        start: '2027-07-14', schedule: 'محاضرتان أسبوعيًا مساءً على Zoom', duration: '14 محاضرة + مشروع نهائي',
        seats: 40, booked: 28, price: 5000, oldPrice: 0, currency: 'ج.م',
        instructor: 'م. حمدي عبد الرسول وفريق التيار الخفيف',
        poster: { a: '#262A5C', b: '#F2B705', mark: '2', en: 'ROUND 2', season: 'Light Current', modeEn: 'Online + Recorded' },
        image: 'assets/poster-r2-lc.jpg',
        tags: ['elec', 'lowcurrent', 'recorded'],
        summary: 'دبلومة متكاملة في التيار الخفيف: تصميم + شوب دروينج + مكتب فني وتسعير. 14 محاضرة أونلاين (Zoom + مسجّل مدى الحياة) بأحدث الأكواد NFPA وTIA وIEC والكود المصري، ومشروع تصميم مبنى كامل. بتأهّلك لوظائف: مهندس تصميم، مكتب فني (شوب دروينج)، تسعير وعطاءات، وموقع.',
        modules: [
          { name: 'أنظمة إنذار الحريق (Fire Alarm)', hours: 4 },
          { name: 'أنظمة الأمن: كاميرات CCTV والتحكم في الدخول', hours: 4 },
          { name: 'الاتصالات وشبكات الداتا والكابلات الهيكلية', hours: 4 },
          { name: 'الصوتيات: Public Address وأنظمة الصوت', hours: 3 },
          { name: 'أنظمة المستشفيات والفنادق: Nurse Call / MATV / IPTV', hours: 3 },
          { name: 'السلامة والأتمتة: Intercom وIntrusion وMaster Clock', hours: 3 },
          { name: 'الأنظمة الخاصة: إدارة المواقف والطوابير وتغطية الموبايل DAS', hours: 3 },
          { name: 'الشوب دروينج: Layouts وRisers وDetails والتنسيق', hours: 4 },
          { name: 'المكتب الفني والتسعير: Vendor List وBOQ وSpecs والعروض المالية', hours: 4 },
          { name: 'المشروع النهائي: تصميم مبنى كامل', hours: 4 }
        ],
        outcomes: ['تصميم تيار خفيف لمبنى كامل', 'شهادة معتمدة من دار الكهرباء للتدريب', 'إمكانية اعتماد الشهادة من نقابة المهندسين وتوثيقها من الخارجية المصرية', 'محاضرات مسجّلة متاحة مدى الحياة', 'جروب متابعة ودعم فني']
      },
      {
        id: 'emind-zero', cat: 'students', kind: 'program', roundNo: null, featured: false,
        title: 'EMIND ZERO', subtitle: 'الفرقة الإعدادية — Season 2',
        mode: ['حضوري'], status: 'open',
        start: '', schedule: 'مع بداية الترم', duration: 'Season 2',
        seats: 0, booked: 0, price: 0, oldPrice: 0, currency: 'ج.م',
        instructor: 'فريق EMIND', poster: { a: '#262A5C', b: '#F2B705', mark: 'ZERO', en: 'EMIND ZERO', season: 'Season 2', modeEn: '' },
        image: 'assets/poster-emind.jpg',
        tags: ['students', 'beginner'],
        summary: 'بداية الطريق لطالب الإعدادي: Excel و PowerPoint و Word و AutoCAD، وفهم مجالات الشغل في الكهروميكانيك.',
        modules: [{ name: 'Office و AutoCAD ومسارات الشغل', hours: 24 }],
        outcomes: ['أساسيات البرامج الهندسية', 'Roadmap واضح للتخصص']
      },
      {
        id: 'emind-power', cat: 'students', kind: 'program', roundNo: null, featured: false,
        title: 'EMIND POWER', subtitle: 'الفرقة الأولى كهرباء — Season 2',
        mode: ['حضوري'], status: 'open',
        start: '', schedule: 'مع بداية الترم', duration: 'Season 2',
        seats: 0, booked: 0, price: 0, oldPrice: 0, currency: 'ج.م',
        instructor: 'فريق EMIND', poster: { a: '#262A5C', b: '#F2B705', mark: 'POWER', en: 'EMIND POWER', season: 'Season 2', modeEn: '' },
        image: 'assets/poster-emind.jpg',
        tags: ['students', 'elec'],
        summary: 'لطلبة أولى كهرباء: المكونات الكهربائية على أرض الواقع، والفرق بين التصميم والمكتب الفني والموقع.',
        modules: [{ name: 'أساسيات الكهرباء العملية', hours: 24 }],
        outcomes: ['فهم سوق الشغل في الكهرباء', 'Roadmap للتخصص']
      },
      {
        id: 'emind-motion', cat: 'students', kind: 'program', roundNo: null, featured: false,
        title: 'EMIND MOTION', subtitle: 'الفرقة الأولى ميكانيكا — Season 2',
        mode: ['حضوري'], status: 'open',
        start: '', schedule: 'مع بداية الترم', duration: 'Season 2',
        seats: 0, booked: 0, price: 0, oldPrice: 0, currency: 'ج.م',
        instructor: 'فريق EMIND', poster: { a: '#262A5C', b: '#F2B705', mark: 'MOTION', en: 'EMIND MOTION', season: 'Season 2', modeEn: '' },
        image: 'assets/poster-emind.jpg',
        tags: ['students', 'mech'],
        summary: 'لطلبة أولى ميكانيكا: التكييف والحريق والصحي على أرض الواقع، ومسارات الشغل في الميكانيكا.',
        modules: [{ name: 'أساسيات الميكانيكا العملية', hours: 24 }],
        outcomes: ['فهم سوق الشغل في الميكانيكا', 'Roadmap للتخصص']
      },
      {
        id: 'r12-mech', cat: 'mech', kind: 'round', roundNo: 12, featured: false,
        title: 'راوند 12 ميكانيكا', subtitle: 'HVAC — بيانات تجريبية',
        mode: ['حضوري', 'أونلاين مباشر'], status: 'soon',
        start: '2027-01-17', schedule: 'هيتعلن قريباً', duration: '14 أسبوع',
        seats: 35, booked: 0, price: 9000, oldPrice: 0, currency: 'ج.م',
        instructor: 'فريق الميكانيكا — دار الكهرباء',
        poster: { a: '#262A5C', b: '#F2B705', mark: '12', en: 'ROUND 12', season: 'Mechanical', modeEn: 'Online + Offline' },
        image: '',
        tags: ['mech', 'hvac', 'beginner'],
        summary: 'حساب الأحمال الحرارية وتصميم مجاري الهواء وأنظمة التشيلر على مشروع حقيقي.',
        modules: [
          { name: 'أساسيات التكييف', hours: 14 },
          { name: 'حساب الأحمال الحرارية', hours: 18 },
          { name: 'مجاري الهواء', hours: 16 },
          { name: 'أنظمة التشيلر', hours: 14 },
          { name: 'التهوية', hours: 10 },
          { name: 'Revit ميكانيكا', hours: 20 },
          { name: 'الشوب دروينج', hours: 18 }
        ],
        outcomes: ['تصميم HVAC لمبنى تجاري', 'شهادة من مركز دار الكهرباء للتدريب']
      },
      {
        id: 'r23-elec', cat: 'elec', kind: 'round', roundNo: 23, featured: false,
        title: 'راوند 23 كهرباء', subtitle: 'راوند مكتمل',
        mode: ['حضوري', 'أونلاين مباشر'], status: 'done',
        start: '2026-06-06', schedule: 'انتهى', duration: 'موسم الصيف 2026',
        seats: 0, booked: 0, price: 0, oldPrice: 0, currency: 'ج.م',
        instructor: 'م. حمدي عبد الرسول',
        poster: { a: '#262A5C', b: '#F2B705', mark: '23', en: 'ROUND 23', season: 'Summer 2026', modeEn: '' },
        image: '', tags: ['elec'], summary: 'راوند مكتمل.',
        modules: [{ name: 'الراوند الأساسي للكهرباء', hours: 120 }], outcomes: []
      }
    ],

    // Egyptian Universities Workshops — Season 3 (real numbers from the posts)
    workshops: {
      title: 'ورش الجامعات المصرية', season: 'Season 3', total: 908,
      intro: 'ورشة عملية من شركة دار الكهرباء للتوريدات والمقاولات في كل جامعة: سوق العمل ماشي إزاي، أنهي مسار يناسبك، وإزاي تحوّل اللي درسته لخبرة حقيقية.',
      presenter: { name: 'م. حمدي عبد الرسول', role: 'المدير التنفيذي بشركة دار الكهرباء والمدير العام لمركز دار الكهرباء للتدريب', photo: 'assets/hamdy.jpg' },
      rows: [
        { id: 'w1', name: 'جامعة طنطا', date: '9 فبراير', attended: 53, logo: 'assets/uni-tanta.png' },
        { id: 'w2', name: 'جامعة الإسكندرية', date: '10 فبراير', attended: 166, logo: 'assets/uni-alex.png' },
        { id: 'w3', name: 'جامعة المنصورة', date: '11 فبراير', attended: 25, logo: 'assets/uni-mansoura.png' },
        { id: 'w4', name: 'هندسة جامعة قناة السويس', date: '12 فبراير', attended: 128, logo: 'assets/uni-suez.png' },
        { id: 'w5', name: 'هندسة شبرا — جامعة بنها', date: '14 فبراير', attended: 48, logo: 'assets/uni-benha.png' },
        { id: 'w6', name: 'هندسة جامعة المنوفية', date: '15 فبراير', attended: 210, logo: 'assets/uni-menoufia.png' },
        { id: 'w7', name: 'معهد الأهرامات العالي للهندسة والتكنولوجيا', date: '16 فبراير', attended: 183, logo: 'assets/uni-pyramids.png' },
        { id: 'w8', name: 'IEEE PES — هندسة الزقازيق', date: '17 فبراير', attended: 95, logo: 'assets/uni-ieee-pes.png' }
      ],
      photos: ['assets/ws-2.jpg', 'assets/ws-3.jpg', 'assets/ws-4.jpg', 'assets/ws-1.jpg', 'assets/ws-5.jpg', 'assets/ws-6.jpg']
    },

    // The yearly group photo: "صفوة متدربي دار الكهرباء" (first photo 2020, latest 2026)
    gallery: {
      title: 'صُنع في دار الكهرباء',
      text: 'الصورة اللي بنستناها كل سنة علشان تنضم لإخواتها. أول صورة 2020 وآخر صورة 2026. اللي في آخر صورة كانوا في تانية ثانوي وقت أول صورة، واللي في أول صورة كبروا وماسكين السوق دلوقتي.',
      photos: [
        { id: 'g1', src: 'assets/group-a.jpg', caption: 'صفوة متدربي دار الكهرباء' },
        { id: 'g2', src: 'assets/group-r19.jpg', caption: 'تكريم المتميزين — راوند 19' },
        { id: 'g3', src: 'assets/group-c.jpg', caption: 'حفل ختام الراوند' },
        { id: 'g4', src: 'assets/group-b.jpg', caption: 'صورة الدفعة' }
      ]
    },

    // Past rounds showcase — one card per round (17→24) with a team photo + stats.
    // Graduate counts and the electrical/mechanical split are SAMPLE until the real data arrives.
    showcase: [
      { id: 'r24', no: 24, year: 2025, grads: 2350, elec: 1760, mech: 590, rating: 5.0, photo: 'assets/group-a.jpg' },
      { id: 'r23', no: 23, year: 2025, grads: 2150, elec: 1610, mech: 540, rating: 4.9, photo: 'assets/group-b.jpg' },
      { id: 'r22', no: 22, year: 2024, grads: 2050, elec: 1540, mech: 510, rating: 5.0, photo: 'assets/group-c.jpg' },
      { id: 'r21', no: 21, year: 2024, grads: 1950, elec: 1460, mech: 490, rating: 5.0, photo: 'assets/group-r19.jpg' },
      { id: 'r20', no: 20, year: 2023, grads: 1850, elec: 1390, mech: 460, rating: 4.9, photo: 'assets/group-a.jpg' },
      { id: 'r19', no: 19, year: 2023, grads: 1700, elec: 1275, mech: 425, rating: 5.0, photo: 'assets/group-r19.jpg' },
      { id: 'r18', no: 18, year: 2022, grads: 1550, elec: 1160, mech: 390, rating: 4.9, photo: 'assets/group-b.jpg' },
      { id: 'r17', no: 17, year: 2022, grads: 1400, elec: 1050, mech: 350, rating: 4.8, photo: 'assets/group-c.jpg' }
    ],

    // Archive of completed rounds. Graduate counts are SAMPLE until the real list arrives.
    archive: (function () {
      var rows = [], i;
      for (i = 1; i <= 23; i++) rows.push({ id: 'e' + i, cat: 'elec', no: i, year: 2015 + Math.floor((i - 1) / 2), graduates: 180 + ((i * 37) % 160), mode: i > 15 ? 'حضوري + أونلاين' : 'حضوري' });
      for (i = 1; i <= 4; i++) rows.push({ id: 'p' + i, cat: 'pm', no: i, year: 2024 + Math.floor((i - 1) / 2), graduates: 60 + i * 14, mode: 'حضوري + أونلاين' });
      rows.push({ id: 'lc1', cat: 'elec', no: 1, year: 2026, graduates: 74, mode: 'تيار خفيف — حضوري + أونلاين' });
      return rows;
    })(),

    // Real feedback from the university workshops (Season 3). stars: 0 = no rating shown.
    reviews: [
      { id: 'v1', name: 'مشارك في ورش الجامعات', role: 'الموسم الثالث', stars: 0, visible: true, text: 'وضّحوا الفجوة بين الكلية وسوق العمل. الكلية بتديك الأساس العلمي، لكن السوق محتاج مهارات وسلوك مهني. وعرفت الفرق بين مهندس التصميم والمكتب الفني ومهندس الموقع.' },
      { id: 'v2', name: 'مشارك في ورش الجامعات', role: 'الموسم الثالث', stars: 0, visible: true, text: 'فهمت إزاي أكون مهندس كهرباء حقيقي وأصمم مشاريع، وأنواع الإضاءة المطلوبة حسب المبنى، وحجم ألواح الكهرباء، وإزاي أحدد الأسعار.' },
      { id: 'v3', name: 'مشارك في ورش الجامعات', role: 'الموسم الثالث', stars: 0, visible: true, text: 'فايدة علمية ممتازة ونقل خبرة من الإنستراكتور حوالين السوق وتقسيم الشغل، وحصل فعلاً بشكل ممتاز.' },
      { id: 'v4', name: 'مشارك في ورش الجامعات', role: 'الموسم الثالث', stars: 0, visible: true, text: 'استفدت بمعلومات عن الـ circuit breaker ماكنتش أعرفها قبل كده رغم إني أخدت كورسات classic control كتير، غير توضيح المسار والـ roadmap.' },
      { id: 'v5', name: 'مشارك في ورش الجامعات', role: 'الموسم الثالث', stars: 0, visible: true, text: 'اتكلمنا عن خطوات تنفيذ مشروع من بداية الاستشاري ثم المقاول لحد نهاية المشروع والـ TC. استفدت جداً.' },
      { id: 'v6', name: 'مشارك في ورش الجامعات', role: 'الموسم الثالث', stars: 0, visible: true, text: 'رود ماب عن القسم وتراكات وفرص العمل ومفاهيم كنت حابب أعرفها. اليوم كان لذيذ وصريح ومفيد وماحسيناش بالوقت.' },
      { id: 'r3f1', name: 'متدرب راوند 3', name_en: 'Round 3 trainee', role: 'تنفيذ وتسعير', role_en: 'Execution & Pricing', stars: 5, visible: true,
        text: 'أهم ما يميز الراوند إن الشرح بيخوض في تفاصيل التنفيذ ومشاكله الحقيقية، وكويزات المحاضرات بتثبّت الفهم. والراوند فيه عدد كبير من الخبرات اللي بتساعد في طرح المشاكل وحلّها.',
        text_en: 'The best thing about the round is that it digs into real execution details and problems, and the lecture quizzes lock in the understanding. The round brings together a lot of experienced people who help raise and solve problems.' },
      { id: 'r3f2', name: 'متدرب راوند 3', name_en: 'Round 3 trainee', role: 'تنفيذ وتسعير', role_en: 'Execution & Pricing', stars: 5, visible: true,
        text: 'ربط الشغل العملي في الموقع بالتسعير خلّاني أفهم البنود، وفيديوهات الموقع والمصانع حاجة هايلة. الدمج بين التنفيذ والتسعير سهّل تخيّل كل بند وأنا بسعّره.',
        text_en: 'Linking real site work to pricing made me understand the items, and the site and factory videos are amazing. Combining execution with pricing made it easy to picture every item while pricing it.' }
    ],

    // Clients of Dar Alkahrbaa Holding (company profile 2025, "Stakeholders").
    partners: [
      'Hilton', 'Samsung', 'Elsewedy Electric', 'Palm Hills', 'Marakez', 'SYSTRA', 'Hassan Allam Holding', 'Orascom Construction',
      'Almarasem', 'ASGC', 'Kortech', 'PSC Protection', 'Hassan Allam Properties', 'Dar', 'Shaker Consultancy', 'ACE Consulting',
      'ECG', 'Elite Consolidated Engineers', 'MAF', 'EHAF', 'Sabbour', 'Diaa Consult', 'CES Consulting', 'Mangroovy El Gouna',
      'Amwaj', 'Seashell', 'CAPMAS', 'وزارة النقل', 'وزارة الشباب والرياضة', 'Al Ahly Sabbour', 'MENCO', 'Perfect', 'ZCC',
      'Ecologi', 'Leeds Fit-Out', 'B.TECH', 'Corona', 'Extrucoat21', 'EGY Holding', 'Dahab Developments', 'Tadawi', 'مستشفى السلام', 'مستشفى الرحمة'
    ].map(function (n, i) { return { id: 'pa' + (i + 1), name: n, type: 'عميل' }; }),

    // Where our graduates work (representative — confirm/expand with the real list).
    employers: [
      'Elsewedy Electric', 'Schneider Electric', 'ABB', 'Siemens', 'Elsewedy Cables', 'El Araby Group',
      'Hassan Allam', 'Orascom Construction', 'PGESCo', 'Concord', 'Bahgat Group', 'SMW Engineering',
      'Benha Electronics', 'El Sewedy Electrometer', 'Egyptian Electricity'
    ].map(function (n, i) { return { id: 'emp' + (i + 1), name: n }; }),

    faq: [
      { id: 'f1', q: 'مين يقدر يشترك في الراوندات؟', a: 'حديثي التخرج والمهندسين العاملين في الكهرباء والميكانيكا. ولطلبة الكلية من الإعدادي فيه مبادرة EMIND.' },
      { id: 'f2', q: 'التدريب حضوري ولا أونلاين؟', a: 'حسب الراوند. راوند 24 كهرباء أونلاين مع فيديوهات مسجلة، وطريقة كل راوند مكتوبة على البوستر بتاعه.' },
      { id: 'f3', q: 'إيه الفرق بين الراوند ومبادرة EMIND؟', a: 'الراوند دفعة تدريب للمهندسين بتبدأ في ميعاد ثابت. EMIND مبادرة لطلبة الجامعات: ZERO للإعدادي، POWER لأولى كهرباء، MOTION لأولى ميكانيكا.' },
      { id: 'f4', q: 'هاخد شهادة؟', a: 'أيوه، شهادة من مركز دار الكهرباء للتدريب بعد تسليم المشروع النهائي.' },
      { id: 'f5', q: 'ينفع أقسط المصاريف؟', a: 'كلمنا على واتساب 010 61667184 ونظبطها معاك.' },
      { id: 'f6', q: 'لو فاتتني محاضرة؟', a: 'في الراوندات الأونلاين كل محاضرة بتتسجل وبتفضل متاحة ليك.' },
      { id: 'f7', q: 'إزاي أعرف ميعاد الراوند الجاي؟', a: 'تابع صفحتنا @daralkahrabaa أو سجّل اهتمامك من صفحة الراوند وهنبعتلك.' }
    ],

    leads: [
      { id: 'l1', name: 'م. حسام علي', phone: '01001234567', course: 'r24-elec', mode: 'أونلاين مباشر', date: '2026-11-14', status: 'new', note: 'مثال' },
      { id: 'l2', name: 'م. منة الله سعيد', phone: '01112345678', course: 'r2-lc', mode: 'حضوري', date: '2026-11-14', status: 'contacted', note: 'مثال' },
      { id: 'l3', name: 'م. يوسف كمال', phone: '01223456789', course: 'r5-pricing', mode: 'حضوري', date: '2026-11-13', status: 'paid', note: 'مثال' }
    ]
  };

  /* ---------- English text (the site's default language). Every field gets a `<field>_en` twin;
     the site shows it when English is selected and falls back to the Arabic field when it's missing. ---------- */
  var EN = {
    settings: {
      brandAr_en: 'Dar Alkahrbaa Training Center',
      tagline_en: 'A training center that prepares fresh graduate engineers and final-year students for the job market. Part of Dar Alkahrbaa.',
      address_en: 'Cairo, Egypt',
      announcement_en: 'Registration is open for Round 24 Electrical — online + recorded videos',
      counters: {
        eng: ['engineers and students trained', 'since the first round'],
        rounds: ['electrical rounds', 'Round 25 is on the way'],
        workshop: ['students at university workshops', 'Season 3'],
        unis: ['universities and institutes', 'visited in Season 3'],
        clients: ['Dar Alkahrbaa Holding clients', 'from 2014 until today']
      },
      aiPresets: {
        p1: "I'm a fresh electrical graduate. Where do I start?",
        p2: 'I want to learn low current systems',
        p3: 'I need the pricing & execution course',
        p4: "I'm still a university student",
        p5: 'When does the next round start?',
        p6: 'Are there recorded videos?'
      }
    },
    categories: {
      elec: ['Electrical', 'Electrical design and execution rounds, plus low current systems'],
      mech: ['Mechanical', 'HVAC, ventilation, firefighting and plumbing'],
      pm: ['Pricing & Execution', 'Quantity surveying, pricing and tenders for site and technical-office engineers'],
      students: ['University Students', 'EMIND: preparing engineering students from the preparatory year']
    },
    courses: {
      'r24-elec': { title: 'Round 24 Electrical', subtitle: 'Winter 2027 — online + recorded videos', schedule: 'Times are announced in the round group', duration: 'Winter 2027 season', instructor: 'Eng. Hamdy Abdelrasoul and the Dar Alkahrbaa team',
        summary: 'The core electrical round: design and execution from load calculations to shop drawings, online with a recording of every lecture.',
        modules: ['Design basics and load calculations', 'Lighting', 'Power distribution and panels', 'Cables and voltage drop', 'Transformers and generators', 'Earthing and lightning protection', 'AutoCAD and Revit', 'Shop drawings and execution'],
        outcomes: ['A complete design project', 'Recordings of every lecture', 'Dar Alkahrbaa Training Center certificate'] },
      'r25-elec': { title: 'Round 25 Electrical', subtitle: 'Summer 2027 — details soon', schedule: 'To be announced', duration: 'Summer 2027 season', instructor: 'Eng. Hamdy Abdelrasoul and the Dar Alkahrbaa team',
        summary: "The next electrical round. Register your interest and we'll message you as soon as registration opens.",
        modules: ['Same content as the core electrical round'] },
      'r5-pricing': { title: 'Round 5 Pricing & Execution', subtitle: 'Commercial Engineering — execution & pricing', schedule: 'Two lectures a week: Friday and Monday on Zoom', duration: '14 lectures + 14 tasks + project', instructor: 'Eng. Hamdy Abdelrasoul',
        summary: 'The Commercial Engineering round — our top-rated and most requested. It combines real execution know-how with commercial pricing mastery for electrical and mechanical projects: 14 interactive lectures + 14 practical tasks + a full-building pricing project. For 2026 graduates and earlier.',
        modules: ['AI applications in tendering & execution', 'Project execution (Mixed Use / Steel / Factory)', 'Cable pricing LV/MV/LC and cable trays', 'Third fix (electrical / low current / fiber)', 'LV & MV panel study, supplier offers and compliance', 'MV installations, LV and MCC panels', 'Lighting, power and low-current outlets pricing', 'Reading specifications before pricing', 'Financial offer, price analysis and variation orders', 'Fire fighting, HVAC and plumbing pricing', 'Contractor invoices (ongoing / semi-final / final)', 'Final project: pricing a complete building'],
        outcomes: ['A priced BOQ for a full building', 'Certificate from Dar Alkahrbaa Contracting & Training', 'Engineers Syndicate accreditation and optional Foreign Ministry authentication', 'Recorded lectures available for life', 'Correction models and an Ideal Task Solution for every task'] },
      'r2-lc': { title: 'Round 2 Low Current', subtitle: 'Design + Shop Drawing + Tendering — Online', schedule: 'Two lectures a week, evenings, on Zoom', duration: '14 lectures + final project', instructor: 'Eng. Hamdy Abdelrasoul and the low current team',
        summary: 'A complete low-current diploma: design + shop drawings + technical office & pricing. 14 live online lectures (Zoom + recorded for life) to the latest codes (NFPA, TIA, IEC) and the Egyptian code, with a full-building design project. Prepares you for design, technical-office, tendering and site roles.',
        modules: ['Fire Alarm systems', 'Security: CCTV and access control', 'Telecom, data networks and structured cabling', 'Audio: Public Address and sound systems', 'Healthcare & hospitality: Nurse Call / MATV / IPTV', 'Safety & automation: Intercom, Intrusion, Master Clock', 'Special systems: parking, queuing and DAS mobile coverage', 'Shop drawings: layouts, risers, details and coordination', 'Technical office & tendering: Vendor List, BOQ, Specs, financial offers', 'Final project: full-building design'],
        outcomes: ['Low-current design for a full building', 'Dar Alkahrbaa Training Center certificate', 'Can be accredited by the Engineers Syndicate and authenticated by the Egyptian Foreign Ministry', 'Recorded lectures available for life', 'Follow-up group and technical support'] },
      'emind-zero': { subtitle: 'Preparatory year — Season 2', schedule: 'At the start of the term', instructor: 'EMIND team',
        summary: 'The first step for preparatory-year students: Excel, PowerPoint, Word and AutoCAD, and an overview of electromechanical careers.',
        modules: ['Office, AutoCAD and career paths'], outcomes: ['Engineering software basics', 'A clear roadmap for your specialisation'] },
      'emind-power': { subtitle: 'First year Electrical — Season 2', schedule: 'At the start of the term', instructor: 'EMIND team',
        summary: 'For first-year electrical students: real electrical components, and the difference between design, technical office and site work.',
        modules: ['Practical electrical basics'], outcomes: ['Understand the electrical job market', 'A roadmap for your specialisation'] },
      'emind-motion': { subtitle: 'First year Mechanical — Season 2', schedule: 'At the start of the term', instructor: 'EMIND team',
        summary: 'For first-year mechanical students: HVAC, firefighting and plumbing in practice, and mechanical career paths.',
        modules: ['Practical mechanical basics'], outcomes: ['Understand the mechanical job market', 'A roadmap for your specialisation'] },
      'r12-mech': { title: 'Round 12 Mechanical', subtitle: 'HVAC — sample data', schedule: 'To be announced', duration: '14 weeks', instructor: 'Dar Alkahrbaa mechanical team',
        summary: 'Cooling load calculations, duct design and chiller systems on a real project.',
        modules: ['HVAC basics', 'Cooling load calculations', 'Duct design', 'Chiller systems', 'Ventilation', 'Revit Mechanical', 'Shop drawings'],
        outcomes: ['HVAC design for a commercial building', 'Dar Alkahrbaa Training Center certificate'] },
      'r23-elec': { title: 'Round 23 Electrical', subtitle: 'Completed round', schedule: 'Finished', duration: 'Summer 2026 season', instructor: 'Eng. Hamdy Abdelrasoul', summary: 'Completed round.', modules: ['Core electrical round'] }
    },
    workshops: {
      title: 'Egyptian Universities Workshops',
      intro: 'A hands-on workshop from Dar Alkahrbaa for Supplies & Contracting at every university: how the job market works, which path suits you, and how to turn what you studied into real experience.',
      presenter: ['Eng. Hamdy Abdelrasoul', 'CEO of Dar Alkahrbaa and General Manager of Dar Alkahrbaa Training Center'],
      rows: { w1: ['Tanta University', '9 Feb'], w2: ['Alexandria University', '10 Feb'], w3: ['Mansoura University', '11 Feb'], w4: ['Faculty of Engineering, Suez Canal University', '12 Feb'],
        w5: ['Faculty of Engineering Shoubra, Benha University', '14 Feb'], w6: ['Faculty of Engineering, Menoufia University', '15 Feb'], w7: ['Pyramids Higher Institute for Engineering and Technology', '16 Feb'], w8: ['IEEE PES, Zagazig Student Chapter', '17 Feb'] }
    },
    gallery: {
      title: 'Made in Dar Alkahrbaa',
      text: 'The photo we wait for every year, to join the ones before it. The first was taken in 2020 and the latest in 2026. The people in the latest photo were in high school when the first one was taken, and the people in the first one now run projects across the market.',
      captions: { g1: 'The best of Dar Alkahrbaa trainees', g2: 'Honouring top trainees — Round 19', g3: 'Round graduation', g4: 'Class photo' }
    },
    reviews: {
      v1: 'They explained the gap between university and the job market. University gives you the scientific basis, but the market needs skills and professional attitude. I learned the difference between a design engineer, the technical office and a site engineer.',
      v2: 'I understood how to be a real electrical engineer and design projects, which lighting each building type needs, how panel sizes are chosen, and how to set prices.',
      v3: 'Excellent technical value and real market experience from the instructor about how the work is divided. It delivered on that.',
      v4: "I learned things about circuit breakers I didn't know, even after many classic control courses, plus a clear path and roadmap.",
      v5: 'We went through the steps of executing a project, from the consultant to the contractor to handover and TC. Very useful.',
      v6: 'A roadmap of the department, tracks and job opportunities I wanted to know about. Honest, useful, and the time flew.'
    },
    reviewWho: ['University workshop attendee', 'Season 3'],
    faq: {
      f1: ['Who can join the rounds?', 'Fresh graduates and working engineers in electrical and mechanical. For university students from the preparatory year, there is the EMIND initiative.'],
      f2: ['Is the training in person or online?', 'It depends on the round. Round 24 Electrical is online with recorded videos, and each round shows its format on its poster.'],
      f3: ["What's the difference between a round and EMIND?", 'A round is a training cohort for engineers with a fixed start date. EMIND is for university students: ZERO for the preparatory year, POWER for first-year electrical, MOTION for first-year mechanical.'],
      f4: ['Do I get a certificate?', 'Yes, a Dar Alkahrbaa Training Center certificate after you submit the final project.'],
      f5: ['Can I pay in instalments?', "Message us on WhatsApp at 010 61667184 and we'll arrange it with you."],
      f6: ['What if I miss a lecture?', 'In online rounds every lecture is recorded and stays available to you.'],
      f7: ['How do I find out when the next round starts?', "Follow @daralkahrabaa or register your interest on the round's page and we'll message you."]
    },
    partners: { 'وزارة النقل': 'Ministry of Transport', 'وزارة الشباب والرياضة': 'Ministry of Youth and Sports', 'مستشفى السلام': 'El Salam Hospital', 'مستشفى الرحمة': 'El Rahma Hospital' },
    archiveMode: { 'حضوري': 'In person', 'حضوري + أونلاين': 'In person + online', 'تيار خفيف — حضوري + أونلاين': 'Low current — in person + online' }
  };

  function applyEn(s) {
    var e = EN, k;
    for (k in e.settings) if (typeof e.settings[k] === 'string') s.settings[k] = e.settings[k];
    s.settings.counters.forEach(function (c) { var t = e.settings.counters[c.id]; if (t) { c.label_en = t[0]; c.sub_en = t[1]; } });
    s.settings.aiPresets.forEach(function (p) { if (e.settings.aiPresets[p.id]) p.q_en = e.settings.aiPresets[p.id]; });
    s.categories.forEach(function (c) { var t = e.categories[c.id]; if (t) { c.name_en = t[0]; c.desc_en = t[1]; } });
    s.courses.forEach(function (c) {
      var t = e.courses[c.id]; if (!t) return;
      ['title', 'subtitle', 'schedule', 'duration', 'instructor', 'summary'].forEach(function (f) { if (t[f]) c[f + '_en'] = t[f]; });
      if (t.modules) c.modules.forEach(function (m, i) { if (t.modules[i]) m.name_en = t.modules[i]; });
      if (t.outcomes) c.outcomes_en = t.outcomes;
    });
    s.workshops.title_en = e.workshops.title; s.workshops.intro_en = e.workshops.intro;
    s.workshops.presenter.name_en = e.workshops.presenter[0]; s.workshops.presenter.role_en = e.workshops.presenter[1];
    s.workshops.rows.forEach(function (r) { var t = e.workshops.rows[r.id]; if (t) { r.name_en = t[0]; r.date_en = t[1]; } });
    s.gallery.title_en = e.gallery.title; s.gallery.text_en = e.gallery.text;
    s.gallery.photos.forEach(function (p) { if (e.gallery.captions[p.id]) p.caption_en = e.gallery.captions[p.id]; });
    s.reviews.forEach(function (r) { if (e.reviews[r.id]) { r.text_en = e.reviews[r.id]; r.name_en = e.reviewWho[0]; r.role_en = e.reviewWho[1]; } });
    s.faq.forEach(function (f) { var t = e.faq[f.id]; if (t) { f.q_en = t[0]; f.a_en = t[1]; } });
    s.partners.forEach(function (p) { if (e.partners[p.name]) p.name_en = e.partners[p.name]; p.type_en = 'Client'; });
    s.archive.forEach(function (a) { if (e.archiveMode[a.mode]) a.mode_en = e.archiveMode[a.mode]; });
    return s;
  }
  applyEn(seed);

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  var DK = {
    KEY: KEY,
    seed: clone(seed),
    load: function () {
      try {
        var raw = localStorage.getItem(KEY);
        if (raw) { var d = JSON.parse(raw); if (d && d.version === seed.version) return d; }
      } catch (e) {}
      return clone(seed);
    },
    save: function (state) {
      try { localStorage.setItem(KEY, JSON.stringify(state)); return true; } catch (e) { return false; }
    },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} return clone(seed); },
    uid: function (p) { return (p || 'id') + Math.random().toString(36).slice(2, 8); },
    totalHours: function (c) { return (c.modules || []).reduce(function (s, m) { return s + (+m.hours || 0); }, 0); },
    statusLabel: { open: 'التسجيل مفتوح', soon: 'قريباً', closed: 'مكتمل العدد', done: 'انتهى' },
    kindLabel: { round: 'راوند', diploma: 'دبلومة', course: 'كورس', program: 'مبادرة' },
    leadStatus: { new: 'جديد', contacted: 'تم التواصل', paid: 'تم الدفع', cancelled: 'ملغي' },
    statusLabelEn: { open: 'Registration open', soon: 'Coming soon', closed: 'Fully booked', done: 'Finished' },
    kindLabelEn: { round: 'Round', diploma: 'Diploma', course: 'Course', program: 'Initiative' },
    modeEn: { 'حضوري': 'In person', 'أونلاين مباشر': 'Live online', 'فيديوهات مسجلة': 'Recorded videos', 'مسجل': 'Recorded' }
  };
  /* Backend mapping (for the real build):
     GET/PUT /api/settings · CRUD /api/categories · /api/courses (rounds, programs, courses)
     /api/workshops · /api/archive · /api/reviews · /api/partners · /api/faq · /api/leads (POST from site form)
     Auth: Google OAuth for students, email+password with roles for admins. */
  window.DK = DK;
})();
