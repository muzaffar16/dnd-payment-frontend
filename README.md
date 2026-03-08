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
```
Optional (recommended for saved cards owner scoping):

```js
window.PAYMENT_CARD_OWNER_ID = 'user-123';
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

## Saved Cards UI

This frontend now includes a **Saved Cards** section with:

- Init save-card without payment -> `POST /api/v1/payments/cards/tokenize/init`
- Complete save-card tokenization -> `POST /api/v1/payments/cards/tokenize/complete`
- Save card -> `POST /api/v1/payments/cards/save`
- List cards -> `GET /api/v1/payments/cards`
- Delete card -> `DELETE /api/v1/payments/cards/:cardId`
- Charge saved card -> `POST /api/v1/payments/cards/charge`

Notes:

- Saved card APIs require auth token in `Authorization: Bearer <token>`.
- Use `cardOwnerId` for stable owner mapping across sessions/devices.
- `Charge saved card` endpoint expects callback `jwt` and existing `paymentSessionId`.
- Do not send PAN/CVV; backend accepts tokenized card data only.
- Use the UI button **Init Save Card (No Payment)** to tokenize + store card without regular checkout payment flow.
