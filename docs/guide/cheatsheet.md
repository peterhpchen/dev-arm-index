# 全表

## 桌面

### Rectangle <Badge text="macOS" />

<!-- @include: ../rectangle/sheet.md -->

### kitty

<!-- @include: ../kitty/sheet.md -->

## 終端

### Homebrew <Badge text="macOS" />

<Cover src="https://raw.githubusercontent.com/Homebrew/brew.sh/master/assets/img/homebrew.svg" />

<!-- @include: ../homebrew/sheet.md -->

### mas-cli <Badge text="macOS" />

<Cover src="https://raw.githubusercontent.com/mas-cli/mas/main/mas-cli.png" />

<!-- @include: ../mas-cli/sheet.md -->

### docker

<Cover src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" />

<!-- @include: ../docker/sheet.md -->

### tmux

<Cover src="https://raw.githubusercontent.com/tmux/tmux/master/logo/tmux-logo.svg" />

<!-- @include: ../tmux/sheet.md -->

### BAT

<!-- @include: ../bat/sheet.md -->

### exa

<!-- @include: ../exa/sheet.md -->

### man

<!-- @include: ../man/sheet.md -->

### curl

<!-- @include: ../curl/sheet.md -->

### SDKMAN

<Cover src="https://raw.githubusercontent.com/sdkman/sdkman-website/master/public/img/sdk-man-small-pattern.svg" />

<!-- @include: ../sdkman/sheet.md -->

### pyenv

- `pyenv install` ：依照當前目錄下的 `.python-version` 設定安裝對應的版本。
- `pyenv virtualenv <virtualenv-name>` ：用當前的版本建立 `<virtualenv-name>` 名稱的 virtual env 。
- `pyenv activate <virtualenv-name>` ：啟動 `<virtualenv-name>` 。
- `pyenv deactivate` ：關閉當前執行的 virtual env 。

### ssh

- `ssh <destination>` ：使用預設的設定進入 `<destination>` 中。

### scp

- `scp -i <ssh-key> -r <local-path> <remote-path>` ：將 `<local-path>` 的檔案以 `<ssh-key>` 的身份複製到 `<remote-path>` 上。 `<remote-path>` 格式為 `<ip>:<path>` 。

### docker

- `docker attach <container>` ：將 detached 的 container 重新叫回。
- `docker system prune --all` ：清空所有 docker 暫存檔。

### df

`df -h` ：硬碟容量以及剩餘大小。

### du

`du -a /var | sort -n -r | head -n 10` ：列出前十大容量的資料夾。

### lsblk

`lsblk` ：硬碟資訊總覽。

### passwd

- `passwd` ：更新當前 User 的密碼。

## 編輯器

### Neovim

<Cover src="https://raw.githubusercontent.com/neovim/neovim/master/cmake.packaging/neovim.svg" />

<!-- @include: ../nvim/sheet.md -->
