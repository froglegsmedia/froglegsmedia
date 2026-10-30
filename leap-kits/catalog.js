/* Leap Kits prices and checkout links.
   This file is the only place to change them.

   prices are dollars (not cents). Suggested placeholders, not final:
     single kit $37, 3-kit bundle $79, Complete Bundle $179, Custom from $397.

   products.*.url:
     Leave "" and the button stays "Coming soon" (disabled).
     Paste a Stripe Payment Link (https://...) to turn that button into a buy link.

   The offer sheet also floated $99 to $149 per custom kit and $397 to $497
   for a custom Complete Bundle. The page shows one starting price: customFrom.
*/
window.LEAP_KITS = {
  prices: {
    single: 37,
    bundle3: 79,
    complete: 179,
    customFrom: 397
  },
  customWaitlist: "mailto:tyler@froglegsmedia.com?subject=Custom%20Leap%20Kit",
  products: {
    "01": { url: "" },
    "02": { url: "" },
    "03": { url: "" },
    "04": { url: "" },
    "05": { url: "" },
    "06": { url: "" },
    "07": { url: "" },
    "08": { url: "" },
    "09": { url: "" },
    "10": { url: "" },
    "get-found": { url: "" },
    "social-content": { url: "" },
    "plan-and-promote": { url: "" },
    "complete": { url: "" }
  }
};
