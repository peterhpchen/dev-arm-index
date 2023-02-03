# NVM - Node Version Manager <Badge type="warning" text="Zsh" />

<p><img src="./assets/cover.svg" style="height: 100px; width: 100px;" /></p>

Node.js 版本管理器。

## 相依

- 設置於 Zsh 。

## 安裝

```sh
#!/bin/sh

NVM_DIR="$XDG_CONFIG_HOME/nvm"

if [ ! -f "$NVM_DIR/nvm.sh" ]; then
  echo "NVM not installed. Installing."
  git clone --quiet https://github.com/nvm-sh/nvm.git "$NVM_DIR"
  cd "$NVM_DIR"
  git checkout --quiet $(git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1))
fi

ln -s "$DOTS/nvm/default-packages" "$NVM_DIR"
. "$NVM_DIR/nvm.sh"
nvm install --no-progress --default 'lts/*'
```

- 行 5 到 10 ：安裝 NVM 。
- 行 12 到 14 ：
  - 安裝最新版的 LTS 並且設為預設。
  - 安裝預設套件。

## zshenv

```zsh
#!/bin/zsh

export NVM_DIR="$XDG_CONFIG_HOME/nvm"
```

## zhsrc

```zsh
#!/bin/zsh

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# https://github.com/nvm-sh/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file
# Calling nvm use automatically in a directory with a .nvmrc file
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

- 行 8 到 27 ：在進到目錄時自動檢查是否有設定檔 `.nvmrc` ，有的話則使用 `.nvmrc` 所設定的版本，沒有的話則復歸為預設的版本。

## default-packages

```
npm-check-updates
yarn
```

## 常用指令

- `nvm ls` ：列出已安裝的版本。
- `nvm ls-remote --lts` ：列出所有可安裝的 LTS 版本。
- `nvm use [<version>]` ：使用 `<version>` 版本，如果沒指定 `<version>` 則會使用當前目錄 `.nvmrc` 設定的版本。
- `nvm install [<version>]` ：安裝 `<version>` 版本，如果沒指定 `<version>` 則會安裝當前目錄 `.nvmrc` 設定的版本。

## 慣用方式

* 使用 `default-packages` 設定全域套件。
* 使用 `.nvmrc` 管理各專案的 Node.js 版本。

## 延伸閱讀

- [15 - NVM - Node.js 版本管理工具 | 尋覓網站開發的神兵利器 | 2021 iThome 鐵人賽 | iT邦幫忙](https://ithelp.ithome.com.tw/articles/10275647)
