# 折疊

將指定的區塊以單行顯示。

## 配置

[Tree-sitter based folding.](https://github.com/nvim-treesitter/nvim-treesitter#folding)

```lua
vim.opt.foldmethod = 'expr'
vim.opt.foldexpr = 'nvim_treesitter#foldexpr()'
vim.opt.foldenable = false -- Disable folding at startup.
```

## 常用指令

- `za` ：切換目前光標所在位置的折疊狀態。

## 延伸閱讀

- [Usr_28 - Neovim docs](https://neovim.io/doc/user/usr_28.html)
- [Fold - Neovim docs](https://neovim.io/doc/user/fold.html)
