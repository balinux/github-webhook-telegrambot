## tool pendukung
- https://kigiri.github.io/fetch/
- https://www.npmjs.com/package/githubhook
- ngrok

## send message telegram

```js
fetch("https://api.telegram.org/bot<TOKEN>/sendMessage", {
  body: "chat_id=<ID Telegram>&text=gulugulu",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})
```

```c
curl -s -X POST https://api.telegram.org/bot<TOKEN>/sendMessage -d chat_id=<ID Telegram> -d text="gulugulu"
```

```
https://api.telegram.org/bot<TOKEN>/getUpdates
```

# referensi
 - https://github.com/satyakresna/catatan-programmer/blob/master/laravel-github-webhook.md

 - https://www.shellhacks.com/telegram-api-send-message-personal-notification-bot/

 - repo target : https://github.com/balinux/tesdeploy

 - setting hook : https://github.com/balinux/tesdeploy/settings/hooks/141009399

 - example hook registrasi : https://xxx.ngrok.io/githubhook

 ## note

 - add id telegra, and token