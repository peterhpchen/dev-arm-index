# Registers

寄存資料的地方。

## 種類

### 無名 Register (`""`)

沒有指派時，都會使用此 Register 。 `x` `z` `d{motion}` `c{motion}` `y{motion}` 以及他們對應的大寫指令所剪下的字串都會放於此。

### 複製專用 Register (`"0`)

`y{motion}` 所剪下的字串會儲存於此。

### 有名 Register (`"{a-z}`)

在做剪下的動作前，可以指定特定 Register 作為儲存地，例如： `"ayy` 會將 `yy`
的資料放於 a register 中，之後可以使用 `"ap` 將內容貼上。

## 延伸閱讀

- [USING REGISTERS | Usr_10 - Neovim docs](https://neovim.io/doc/user/usr_10.html#_using-registers)
