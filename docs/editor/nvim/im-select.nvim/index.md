# im-select.nvim <Badge type="danger" text="Neovim" /> <Badge type="danger" text="im-select" /> <Badge type="warning" text="packer.nvim" />

轉換模式時自動切換輸入法。

## 相依

- 僅可安裝於 Neovim 。
- 需安裝 [im-select](/terminal/im-select/) 。
- 使用 packer.nvim 管理。

## 安裝

::: code-group

```lua [lua/plugins/init.lua]
use({
  'keaising/im-select.nvim',
  config = function()
    require('plugins.configs.im-select')
  end,
})
```

:::

## 配置

::: code-group

```lua [lua/plugins/configs/im-select.lua]
im_select.setup()
```

:::

## 慣用方式

在寫文章時，會在進入 insert 模式時，將輸入法設為中文。這樣一來在回到 normal 模式時會自動切換回英文輸入法。
