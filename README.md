# DnD Payment Frontend

Standalone frontend app for the payment flow.

## Configure backend URL

Edit `config.js`:

```js
window.PAYMENT_API_BASE_URL = 'https://payment-service.dropndash.co.uk';
```

## Run locally

Use any static server, for example:

```bash
npx serve . -l 4173
```

Then open `http://localhost:4173`.

## Notes

- Backend must expose:
  - `POST /api/v1/payments/jwt/init`
  - `POST /api/v1/payments/response/verify`
- Use HTTPS domain for real payment tests.
