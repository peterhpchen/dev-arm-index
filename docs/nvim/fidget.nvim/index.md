# fidget.nvim <Badge type="danger" text="Neovim" /> <Badge type="warning" text="packer.nvim" />

顯示當前 nvim-lsp 的進度。

## 相依

- 僅可安裝於 Neovim 。
- 使用 packer.nvim 管理。

## 安裝

::: code-group

```lua [lua/plugins/init.lua]
use({
  'j-hui/fidget.nvim',
  config = function()
    require('plugins.configs.fidget')
  end,
})
```

:::

## 配置

::: code-group

```lua [lua/plugins/configs/fidget.lua]
fidget.setup()
```

:::
