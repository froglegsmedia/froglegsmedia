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
    "01": { url: "https://buy.stripe.com/dRmbJ2gxUeRk0f69R5cMM02" },
    "02": { url: "https://buy.stripe.com/5kQ00kgxUgZsd1S0gvcMM03" },
    "03": { url: "https://buy.stripe.com/9B64gA81o9x02ne3sHcMM04" },
    "04": { url: "https://buy.stripe.com/bJe9AU0yW24yd1Sd3hcMM05" },
    "05": { url: "https://buy.stripe.com/28E3cw4PcbF82nee7lcMM06" },
    "06": { url: "https://buy.stripe.com/3cIeVe2H438C6Du1kzcMM07" },
    "07": { url: "https://buy.stripe.com/cNi9AU6Xk8sW0f63sHcMM08" },
    "08": { url: "https://buy.stripe.com/6oUeVe6Xk38C7HyaV9cMM09" },
    "09": { url: "https://buy.stripe.com/dRm3cwftQcJcaTKe7lcMM0a" },
    "10": { url: "https://buy.stripe.com/fZufZi6Xk8sW8LC3sHcMM0b" },
    "get-found": { url: "https://buy.stripe.com/5kQ9AUdlI4cG7Hyd3hcMM0c" },
    "social-content": { url: "https://buy.stripe.com/9B6aEY1D08sW4vm1kzcMM0d" },
    "plan-and-promote": { url: "https://buy.stripe.com/9B628sa9waB4e5W3sHcMM0e" },
    "complete": { url: "https://buy.stripe.com/bJe14ochEeRk4vm7IXcMM0f" }
  }
};
