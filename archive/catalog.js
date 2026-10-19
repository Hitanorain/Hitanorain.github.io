// 星叶档案馆的馆藏目录。
// 加一本书：在 BOOKS 里加一项，正文放进 books/<id>/text.md（oh-story 的 正文.md 原样复制即可）。
// sealed: true 表示「未启封」，只在书架上占位，还不能读。
window.ARCHIVE = {
  shelves: [
    { id: 'codex', name: '卷首', sub: '总纲', desc: '世界从这里开始。' },
    { id: 'main', name: '天幕卷', sub: '正传', desc: '发生在天幕、浮岛和两极的主线故事。' },
    { id: 'side', name: '足迹卷', sub: '外传', desc: '跟着游戏里的旅人，走一段他们的路。' },
    { id: 'beyond', name: '异闻卷', sub: '番外', desc: '不在这个世界里，却和它说着同一件事。' },
  ],

  games: {
    'penguin-run': { name: '企鹅跑酷', icon: '🐧' },
    'starleaf-wardens': { name: '星叶守望', icon: '🌙' },
    'star-weaver': { name: '织星', icon: '✨' },
    'polar-roadtrip': { name: '北极熊房车记', icon: '🐻‍❄️' },
    'little-glade': { name: '小小林间', icon: '🏰' },
    'stargazer-fund': { name: '观星者基金', icon: '📈' },
  },

  books: [
    {
      id: 'codex', shelf: 'codex', no: '馆藏 000', kind: 'codex',
      title: '星叶总纲', en: 'The Starleaf Codex', color: '#8a6a32',
      status: '修订中', file: 'codex/codex.md',
      blurb: '星叶宇宙的基本设定：天幕、浮岛与人间三层世界，顺着断线爬行的腐化，两极的守门人，以及那些还没解开的谜。',
    },
    {
      id: 'red-scarf', shelf: 'main', no: '馆藏 001', kind: 'story',
      title: '红围巾', en: 'The Red Scarf', color: '#a8343a',
      status: '连载中', planned: 8, file: 'books/red-scarf/text.md',
      games: ['penguin-run', 'starleaf-wardens', 'star-weaver'],
      blurb: '南极守门人小团，每天日落前沿着海岸奔跑，把星屑送回极光的缝口。七年了，天上从没有人回过他一句话。直到一个傍晚，海滩上落下来的不是星屑，是露娜。',
    },
    {
      id: 'luna-watch', shelf: 'main', no: '馆藏 002', sealed: true,
      title: '露娜守夜记', color: '#5d4a8a', games: ['starleaf-wardens'],
      blurb: '月之仙子第一次遇见腐化的那一夜。',
    },
    {
      id: 'bear-roads', shelf: 'side', no: '足迹 001', sealed: true,
      title: '北极熊公路日记', color: '#c27a4a', games: ['polar-roadtrip'],
      blurb: '一个州一章，一枚邮戳一个故事。',
    },
    {
      id: 'island-notes', shelf: 'side', no: '足迹 002', sealed: true,
      title: '筑岛人手记', color: '#6f8a4a', games: ['little-glade'],
      blurb: '一座刚被托起的浮岛，和第一个住上去的人。',
    },
    {
      id: 'npc-village', shelf: 'beyond', no: '异闻 001', kind: 'story',
      title: '停服前，我在新手村冲业绩', en: 'Before the Servers Go Dark', color: '#3f6a8c',
      status: '试写', planned: 9, file: 'books/npc-village/text.md',
      blurb: '停服倒计时三十天，新手村杂货铺的 NPC 王翠花突然有了意识。为了不被清理，她决定利用唯一的顾客，一个每天晚上八点整来买一瓶小还丹的挂机脚本。',
    },
  ],
};
