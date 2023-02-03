export default {
  title: '兵器譜',
  description: '我的軟體開發工具列表',
  lang: 'zh-Hant',
  base: '/my-dev-arms/',
  cleanUrls: 'without-subfolders',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      // {
      //   text: '指南',
      //   items: [{ text: '目錄', link: '/guide/' }],
      // },
      {
        text: '桌面應用程式',
        items: [
          { text: 'Rectangle - 視窗管理工具', link: '/desktop/rectangle/' },
        ],
      },
      {
        text: '終端',
        items: [
          { text: 'Homebrew - 套件管理工具', link: '/terminal/homebrew/' },
          { text: 'NVM - Node Version Manager', link: '/terminal/nvm/' },
          // {
          //   text: 'Neofetch',
          //   link: '/terminal/neofetch/',
          // },
          // {
          //   text: 'tmux - 終端管理工具',
          //   link: '/terminal/tmux/',
          //   items: [
          //     {
          //       text: 'tmuxinator - tmux sessions 管理工具',
          //       link: '/terminal/tmux/tmuxinator/',
          //     },
          //     {
          //       text: 'TPM - Tmux Plugin Manager',
          //       link: '/terminal/tmux/tpm/',
          //     },
          //   ],
          // },
          // {
          //   text: 'Z shell - Zsh',
          //   link: '/terminal/zsh/',
          //   items: [
          //     {
          //       text: 'Powerlevel10k',
          //       link: '/terminal/zsh/powerlevel10k/',
          //     },
          //     {
          //       text: 'zsh-autosuggestions',
          //       link: '/terminal/zsh/zsh-autosuggestions/',
          //     },
          //     {
          //       text: 'zsh-completions',
          //       link: '/terminal/zsh/zsh-completions/',
          //     },
          //     {
          //       text: 'zsh-history-substring-search',
          //       link: '/terminal/zsh/zsh-history-substring-search/',
          //     },
          //     {
          //       text: 'zsh-syntax-highlighting',
          //       link: '/terminal/zsh/zsh-syntax-highlighting/',
          //     },
          //   ],
          // },
          { text: 'im-select', link: '/terminal/im-select/' },
        ],
      },
      {
        text: '編輯器',
        items: [
          {
            text: 'Neovim',
            link: '/editor/nvim/',
            items: [
              {
                text: 'packer.nvim',
                link: '/editor/nvim/packer.nvim/',
              },
              {
                text: 'fidget.nvim',
                link: '/editor/nvim/fidget.nvim/',
              },
              {
                text: 'im-select.nvim',
                link: '/editor/nvim/im-select.nvim/',
              },
            ],
          },
        ],
      },
    ],
  },
};
