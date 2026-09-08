# مستندات فلووا

منبع مستندات عمومی و فارسی پلتفرم Flova با Mintlify.

## توسعهٔ محلی

برای اجرای پیش‌نمایش، [Mintlify CLI](https://www.mintlify.com/docs/cli) را
نصب کنید و از ریشهٔ پروژه اجرا کنید:

```bash
mint dev
```

## اعتبارسنجی

```bash
mint validate --check-redirects
mint a11y
```

مرجع API از فایل‌های عمومی `openapi/organization.yaml` و `openapi/user.yaml`
ساخته می‌شود. این فایل‌ها snapshot قراردادهای عمومی Engine هستند؛ هنگام تغییر
قرارداد API باید با منبع canonical سرویس بازبینی و همگام شوند.

## مرز محتوای عمومی

این پروژه فقط رفتار عمومی و قابل‌استفادهٔ فلووا را توضیح می‌دهد. credential،
توکن، آدرس خصوصی، نام سرویس داخلی، schema دیتابیس، broker contract، payload
داخلی Device Link و جزئیات زیرساختی نباید وارد این repository شوند.

نثر فارسی و راست‌به‌چپ است؛ کد، کلیدهای فنی، مسیرهای API و کوئری‌ها عمداً
انگلیسی و چپ‌به‌راست باقی می‌مانند.
