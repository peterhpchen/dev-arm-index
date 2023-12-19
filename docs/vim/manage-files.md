# 管理檔案

## Buffer

開啟檔案時，檔案的內容會被 Vim 複製到 buffer 中，我們會在 window 中看到 buffer
的內容，在 Vim 中做的任何編緝動作都是針對 buffer ，當編輯完成時，指令 `:w` 會將
buffer 中的內容更新至檔案中。

## Window

Window 是用來顯示 Buffer 內容的窗口，可以在同個 window 中載入不同 buffer
的內容，也可以在不同 window 中載入同個 buffer 。

## Tab page

Tab page 管控一個或多個 window ，藉由多個 Tab page 來管理不同的 window 集合。

## 延伸閱讀

- [Using buffers, windows, and tabs efficiently in Vim - DEV Community](https://dev.to/iggredible/using-buffers-windows-and-tabs-efficiently-in-vim-56jc)
- [Usr_22 - Neovim docs](https://neovim.io/doc/user/usr_22.html)
- [Windows - Neovim docs](https://neovim.io/doc/user/windows.html)
- [Tabpage - Neovim docs](https://neovim.io/doc/user/tabpage.html)
