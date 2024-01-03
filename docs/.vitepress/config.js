const firstLayerList = [
  'guide',
  'rectangle',
  'kitty',
  'bat',
  'curl',
  'docker',
  'exa',
  'homebrew',
  'im-select',
  'man',
  'mas-cli',
  'neofetch',
  'nvm',
  'tmux',
  'zsh',
  'nvim',
];

const sidebar = () => {
  return firstLayerList
    .map((item) => {
      return {
        key: `/${item}/`,
        value: [
          { text: '介紹', link: '/guide/introduction' },
          { text: '速查表', link: '/guide/cheatsheet' },
          {
            text: '桌面',
            items: [
              { text: 'Rectangle', link: '/rectangle/' },
              {
                text: 'kitty',
                link: '/kitty/',
                items: [{ text: 'nord-kitty', link: '/kitty/nord-kitty/' }],
              },
            ],
          },
          {
            text: '終端',
            items: [
              { text: 'BAT', link: '/bat/' },
              { text: 'curl', link: '/curl/' },
              { text: 'docker', link: '/docker/' },
              { text: 'exa', link: '/exa/' },
              { text: 'Homebrew', link: '/homebrew/' },
              { text: 'im-select', link: '/im-select/' },
              { text: 'man', link: '/man/' },
              { text: 'mas-cli', link: '/mas-cli/' },
              { text: 'neofetch', link: '/neofetch/' },
              { text: 'nvm', link: '/nvm/' },
            ],
          },
          {
            text: '終端 | tmux',
            items: [
              { text: 'tmux', link: '/tmux/' },
              { text: 'tmuxinator', link: '/tmux/tmuxinator/' },
              { text: 'TPM', link: '/tmux/tpm/' },
            ],
          },
          {
            text: '終端 | Zsh',
            items: [
              { text: 'Zsh', link: '/zsh/' },
              { text: 'Powerlevel10k', link: '/zsh/powerlevel10k/' },
              {
                text: 'zsh-autosuggestions',
                link: '/zsh/zsh-autosuggestions/',
              },
              { text: 'zsh-completions', link: '/zsh/zsh-completions/' },
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
          {
            text: '編輯器 | Neovim',
            items: [
              { text: 'Neovim', link: '/nvim/' },
              { text: 'fidget.nvim', link: '/nvim/fidget.nvim/' },
              { text: 'im-select.nvim', link: '/nvim/im-select.nvim/' },
              { text: 'packer.nvim', link: '/nvim/packer.nvim/' },
            ],
          },
          { text: '候選者', link: '/guide/candidates' },
          { text: '貢獻', link: '/guide/contributing' },
        ],
      };
    })
    .reduce((acc, cur) => {
      acc[cur.key] = cur.value;
      return acc;
    }, {});
};

export default {
  title: '工具指南',
  description: '軟體開發工具的使用及配置說明',
  lang: 'zh-Hant',
  base: '/my-dev-arms/',
  cleanUrls: 'without-subfolders',
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    siteTitle: 'peterhpchen',
    nav: [
      { text: '指南', link: '/guide/cheatsheet' },
      { text: 'Vim', link: '/vim/' },
      { text: 'Git', link: '/git/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/peterhpchen/my-dev-arms' },
    ],
    sidebar: {
      '/vim/': [
        { text: '管理檔案', link: '/vim/manage-files' },
        { text: '折疊', link: '/vim/folding' },
        { text: '標記', link: '/vim/marks' },
        { text: 'Register', link: '/vim/register' },
        { text: 'Macro', link: '/vim/macro' },
        { text: 'Motions', link: '/vim/motion' },
      ],
      '/git/': [{ text: 'commit', link: '/git/commit' }],
      ...sidebar(),
    },
  },
};
