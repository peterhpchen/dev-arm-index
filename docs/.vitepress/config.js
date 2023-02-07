export default {
  title: '兵器譜',
  description: '我的軟體開發工具列表',
  lang: 'zh-Hant',
  base: '/my-dev-arms/',
  cleanUrls: 'without-subfolders',
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '桌面', link: '/desktop/' },
      { text: '終端', link: '/terminal/' },
      { text: 'Zsh', link: '/zsh/' },
      { text: 'tmux', link: '/tmux/' },
      { text: 'Neovim', link: '/nvim/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '用途', link: '/guide/' },
            { text: '貢獻指南', link: '/guide/contributing' },
            { text: '速查表', link: '/guide/cheatsheet' },
          ],
        },
      ],
      '/desktop/': [
        {
          text: '桌面',
          items: [{ text: '介紹', link: '/desktop/' }],
        },
        {
          text: 'Apps',
          items: [
            { text: 'Rectangle - 視窗管理工具', link: '/desktop/rectangle/' },
          ],
        },
      ],
      '/terminal/': [
        {
          text: '終端',
          items: [{ text: '介紹', link: '/terminal/' }],
        },
        {
          text: 'Tools',
          items: [
            { text: 'Homebrew - 套件管理工具', link: '/terminal/homebrew/' },
            { text: 'NVM - Node Version Manager', link: '/terminal/nvm/' },
            { text: 'Neofetch', link: '/terminal/neofetch/' },
            { text: 'im-select', link: '/terminal/im-select/' },
          ],
        },
      ],
      '/zsh/': [
        {
          text: 'Z shell - Zsh',
          items: [
            {
              text: '介紹',

              link: '/zsh/',
            },
          ],
        },
        {
          text: 'Plugins',
          items: [
            {
              text: 'Powerlevel10k',
              link: '/zsh/powerlevel10k/',
            },
            {
              text: 'zsh-autosuggestions',
              link: '/zsh/zsh-autosuggestions/',
            },
            {
              text: 'zsh-completions',
              link: '/zsh/zsh-completions/',
            },
            {
              text: 'zsh-history-substring-search',
              link: '/zsh/zsh-history-substring-search/',
            },
            {
              text: 'zsh-syntax-highlighting',
              link: '/zsh/zsh-syntax-highlighting/',
            },
          ],
        },
      ],
      '/tmux/': [
        {
          text: 'tmux - 終端管理工具',
          items: [{ text: '介紹', link: '/tmux/' }],
        },
        {
          text: 'Plugins',
          items: [
            {
              text: 'tmuxinator - tmux sessions 管理工具',
              link: '/tmux/tmuxinator/',
            },
            {
              text: 'TPM - Tmux Plugin Manager',
              link: '/tmux/tpm/',
            },
          ],
        },
      ],
      '/nvim/': [
        {
          text: 'Neovim',
          items: [
            {
              text: '介紹',
              link: '/nvim/',
            },
          ],
        },
        {
          text: 'Plugins',
          items: [
            {
              text: 'packer.nvim',
              link: '/nvim/packer.nvim/',
            },
            {
              text: 'fidget.nvim',
              link: '/nvim/fidget.nvim/',
            },
            {
              text: 'im-select.nvim',
              link: '/nvim/im-select.nvim/',
            },
          ],
        },
      ],
    },
  },
};
