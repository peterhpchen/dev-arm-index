# Rectangle - 視窗管理工具 <Badge type="danger" text="macOS" /> <Badge type="warning" text="Homebrew" />

使用指令配置桌面應用程式的視窗位置與大小。

## 相依

* 僅可安裝於 macOS 作業系統。
* 使用 Homebrew 管理。

## 安裝

::: code-group

```ruby [Brewfile]
tap "homebrew/cask"
cask "rectangle"
```

:::

## 配置

```shellscript 
# 重複左右的指令時，視窗跳至同邊鄰近的螢幕上。
defaults write com.knollsoft.Rectangle subsequentExecutionMode -int 1
```

## 常用指令

<!-- @include: ./sheet.md -->

## 慣用方式

<!-- @include: ./usage.md -->

## 延伸閱讀

* [02 - Rectangle - 視窗管理工具 | 尋覓網站開發的神兵利器 | 2021 iThome 鐵人賽 | iT邦幫忙](https://ithelp.ithome.com.tw/articles/10266526)
* [Rectangle Terminal Commands for Hidden Preferences | rxhanson/Rectangle | GitHub](https://github.com/rxhanson/Rectangle/blob/master/TerminalCommands.md)
