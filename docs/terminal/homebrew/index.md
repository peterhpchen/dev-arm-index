# Homebrew - 套件管理工具 <Badge type="danger" text="macOS" />

<p><img src="./assets/cover.svg" style="height: 100px;" /></p>

## 相依

* 僅可安裝於 macOS 作業系統。

## 安裝

```sh
if [ ! "$(command -v brew)" ]; then
  echo "Homebrew not installed. Installing."
  curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash --login
fi
```
