#!name=Pillow会员
#!desc=Pillow解锁会员
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/pillow.png
#!homepage=https://yfamily.vercel.app
#!author=CheeryTodo

[Script]

Pillow=type=http-response,pattern=https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts),requires-body=1 ,script-path=https://raw.githubusercontent.com/deezertidal/shadowrocket-rules/main/js/pillow.js

[MITM]

hostname = %APPEND% api.revenuecat.com