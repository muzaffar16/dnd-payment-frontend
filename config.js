// For local testing point to the backend running on localhost:8003
window.PAYMENT_API_BASE_URL = 'https://payment-service.dropndash.co.uk/';
// Trust site reference used by backend JWT init.
window.APPLE_PAY_SITE_REFERENCE = 'test_rrominternational130858';
// Apple Pay merchant id for st.ApplePay; falls back to APPLE_PAY_SITE_REFERENCE if left empty.
window.APPLE_PAY_MERCHANT_ID = 'test_rrominternational130858';
// Google Pay merchant id (reuse this for Apple Pay when your provider uses a single wallet merchant id)
window.GOOGLE_PAY_MERCHANT_ID = 'BCR2DN5TZC6I563Y';
window.APPLE_PAY_COUNTRY_CODE = 'GB';



// Optional:
// window.PAYMENT_AUTH_TOKEN = '<bearer token>';
// window.PAYMENT_CARD_OWNER_ID = '<card owner id>';

