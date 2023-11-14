/*************************************

项目名称：**********
使用声明：⚠️仅供参考，🈲转载与售卖！
电报频道：https://t.me/chxm1023

**************************************
[rewrite_local]
^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/dengxinke123/js/main/gg.js
^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/dengxinke123/js/main/gg.js

[mitm]
hostname = isi.*.g*.com

*************************************/



done({
    body: JSON.stringify({
  "request_date_ms": 1699986529579,
  "request_date": "2023-11-14T18:28:49Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2023-08-31T23:23:14Z",
    "original_application_version": "1578030.383984727",
    "other_purchases": {
    },
    "management_url": null,
    "subscriptions": {
      "com.goodnotes.gn6_one_time_unlock_3999": {
        "Author": "chxm1023",
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "warning": "仅供学习，禁止转载或售卖",
        "original_purchase_date": "2022-09-09T09:09:09Z",
        "Telegram": "https:\/\/t.me\/chxm1023",
        "purchase_date": "2022-09-09T09:09:09Z"
      }
    },
    "entitlements": {
      "apple_access": {
        "Telegram": "https:\/\/t.me\/chxm1023",
        "warning": "仅供学习，禁止转载或售卖",
        "purchase_date": "2022-09-09T09:09:09Z",
        "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999",
        "Author": "chxm1023"
      },
      "crossplatform_access": {
        "Telegram": "https:\/\/t.me\/chxm1023",
        "warning": "仅供学习，禁止转载或售卖",
        "purchase_date": "2022-09-09T09:09:09Z",
        "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999",
        "Author": "chxm1023"
      }
    },
    "original_purchase_date": "2022-04-05T15:06:27Z",
    "original_app_user_id": "23f96c76-fd80-4675-9767-8045ef926155",
    "last_seen": "2023-11-14T18:27:25Z"
  })
});