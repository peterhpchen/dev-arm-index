:::: details Configs

::: details tmux.conf

<<< ../../src/dotfiles/dots/tmux/tmux.conf

::::

- `tmux ls` ：列出所有 server 中的 sessions 。
- `tmux attach -t <target-session>` ：進入指定的 session 中。
- `tmux kill-server` ：結束 server 並刪除所有 sessions 。

::: tip 提示
下列指令作用於 tmux 內。
:::

- `<prefix> c` ：新增 window 。
- `<prefix> n` ：移動至下一個 window 。
- `<prefix> p` ：移動至上一個 window 。
- `<prefix> s` ：開啟 sessions 選擇功能。
- `<prefix> d` ： detach 目前的 client 。
- `<prefix> [` ：進入 copy 模式，藉以複製字串或觀看歷史紀錄。
- `<prefix> %` ：將此 pane 切割為兩個 panes ，左跟右。
- `<prefix> "` ：將此 pane 切割為兩個 panes ，上跟下。
- `<prefix> :` ：開啟 command line ，並開始輸入指令。
  - `join-pane -s <from-window> -t <to-window>` ：將 `<from-window>` 合併至 `<to-window>` 。
  - `respwan-pane -k` ：將目前的 pane 結束（ kill ），並且重啟。
