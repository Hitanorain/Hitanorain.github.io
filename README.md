# Hitanorain 的游戏厅

网页游戏导航页：https://hitanorain.github.io/

## 加一个新游戏

1. 在 `index.html` 里的 `GAMES` 列表加一项（`id` 就是仓库名，页面会链接到 `https://hitanorain.github.io/<id>/`）。
2. 把一张 16:10 的截图（建议 1200×750 JPG）放到 `thumbs/<id>.jpg`。

## 星叶档案馆（`archive/`）

游戏宇宙的世界观和小说：https://hitanorain.github.io/archive/

- 世界观总纲：`archive/codex/codex.md`
- 加一本书：在 `archive/catalog.js` 的 `books` 里加一项，正文放到 `archive/books/<id>/text.md`。正文格式和 oh-story 的 `正文.md` 一样：开头是导语，`###1.`、`###2.` 分节。
- 根目录的 `.nojekyll` 让 GitHub Pages 原样提供 `.md` 文件，不要删。
