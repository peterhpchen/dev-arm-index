export default {
  title: '兵器譜',
  description: '我的軟體開發工具列表',
  lang: 'zh-Hant',
  base: '/my-dev-arms/',
  themeConfig: {
    nav: [
      {
        text: '作業系統',
        items: [
          {
            text: '跨平台',
            link: '/os/cross-platform',
          },
          {
            text: 'macOS',
            link: '/os/macos',
          },
          {
            text: 'Linux',
            link: '/os/linux',
          },
        ],
      },
      {
        text: '終端',
        items: [
          {
            text: '跨 Shell',
            link: '/terminal/cross-shell',
          },
          {
            text: 'Z shell',
            link: '/terminal/zsh',
          },
        ],
      },
      {
        text: '編輯器',
        items: [
          {
            text: 'Neovim',
            link: '/editor/nvim',
          },
          {
            text: 'Visual Studio Code',
            link: '/editor/vscode',
          },
        ],
      },
      {
        text: '專案',
        items: [
          {
            text: 'Web',
            link: '/proj/web',
          },
        ],
      },
    ],
  },
};
