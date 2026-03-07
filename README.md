# DnD Payment Frontend

Standalone frontend test app for Trust Payments Google Pay, Apple Pay, and Card (`st.Components`) flows.

## Configure

Update `config.js`:

```js
window.PAYMENT_API_BASE_URL = 'https://payment-service.dropndash.co.uk';
```

Optional (instead of entering token in UI each time):

```js
window.PAYMENT_AUTH_TOKEN = '<user-or-store-bearer-token>';
```

## Run locally

```bash
npx serve . -l 4173
```

Trust CDN blocks `localhost`/`127.0.0.1`, so open using your machine IPv4 URL (for example `http://192.168.1.25:4173`).

## Backend endpoints used

- `POST /api/v1/payments/jwt/init` with `paymentMethod: "GOOGLEPAY" | "APPLEPAY" | "CARD"`
- `POST /api/v1/payments/response/verify`
- `POST /api/v1/payments/card/process` (form action fallback)
