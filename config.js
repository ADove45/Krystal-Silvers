/* ════════════════════════════════════════════════════════════════
   SITE SETTINGS — the only file you need to edit.
   Both pages (index.html and good-girl.html) read these values.

   BOOK_URL        Your sales link for the novel. While it is blank,
                   the book cover and "Read the full novel" link stay hidden.
   COVER_IMG       File name of the cover image in this folder.
   EMAIL_FORM_URL  The address your email service gives you for form
                   sign-ups (the form "action" URL). While it is blank,
                   readers are not asked for an email.
   EMAIL_FIELD     The name your email service uses for the email box
                   (usually "email"; Mailchimp uses "EMAIL").
   EMAIL_EXTRA     Extra hidden values your email service needs.
                   For GetResponse, EMAIL_FORM_URL is
                   "https://app.getresponse.com/add_subscriber.html"
                   and the list token goes in campaign_token below.
   EMAIL_REQUIRED  false = readers may skip the sign-up.
                   true  = readers must give an email to start.
   ════════════════════════════════════════════════════════════════ */
window.KS_SITE = {
  BOOK_URL: "https://www.amazon.com/dp/B0HF4172FC",
  COVER_IMG: "cover.jpg",
  EMAIL_FORM_URL: "",
  EMAIL_FIELD: "email",
  EMAIL_EXTRA: { campaign_token: "", start_day: "0" },
  EMAIL_REQUIRED: false
};
