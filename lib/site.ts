export const SITE_URL = "https://storiesbrewgarden.com";

// ReserveGo has a per-channel widget URL (source=3 Facebook, 4 Instagram, 6
// Google, 10 WhatsApp …). Every booking link on this site is on the website, so
// source=9 ("Website") is correct everywhere — the others are for links placed
// on those external channels.
export const RESERVEGO_URL =
  "https://widget.reservego.co/reserveOutlets/6a9a472424277ab9c807c609?source=9";

export const INSTAGRAM_URL =
  "https://www.instagram.com/storiesbrewgarden.yelahanka";

// Bookings / celebration enquiries on WhatsApp.
export const WHATSAPP_NUMBER = "919187920636";
export const WHATSAPP_DISPLAY = "+91 91879 20636";
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hi Stories Brew Garden, I have a question about a booking.",
  );

// Bengaluru landline. Display form is the local dialled number; PHONE_TEL is the
// E.164 form for tel: links and for schema.org "telephone".
export const PHONE_DISPLAY = "080 4026 5613";
export const PHONE_TEL = "+918040265613";

// Avalahalli is the neighbourhood; Yelahanka is the area people search for.
// PIN is the one supplied for this outlet.
export const ADDRESS = {
  street:
    "4th Floor, Chandre Gowda Arcade, next to Vajram Tiara Road, Avalahalli",
  locality: "Yelahanka",
  region: "Karnataka",
  postalCode: "560119",
  country: "IN",
};

export const ADDRESS_LINES = [
  "4th Floor, Chandre Gowda Arcade",
  "Next to Vajram Tiara Road, Avalahalli",
  "Yelahanka, Bengaluru, Karnataka 560119",
];

export const GEO = { lat: 13.138694646726178, lng: 77.56961147054795 };

export const MAPS_URL =
  `https://www.google.com/maps/search/?api=1&query=${GEO.lat}%2C${GEO.lng}`;

// Open 12:00 noon to 01:00 (next day), every day.
export const HOURS_DISPLAY = "12:00 pm to 1:00 am";
export const HOURS_NOTE = "Open every day";
