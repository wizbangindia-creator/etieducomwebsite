# Requirements: etieducomfinal (cloned app)

## Core Value
User said: "https://github.com/etiadvertisements-sudo/etieducomfinal.git clone this whole app here and make it running as it is"

## Features
- Clone the full public repo https://github.com/etiadvertisements-sudo/etieducomfinal.git into this environment (/app) and get it running exactly as it is, no feature changes.
- Report any missing env keys/secrets the app needs.

## Round 2 (user's words, verbatim)
"need the following changes in the site 1) in the home page about section About ETI Educom can you remove the video section and make it more happening 2) from the home page remove the head office address 3) free counselling page doesnt look good make it good profesionla nd trust worthy 4) branch page also has to be good"

## Round 3 (user's words, verbatim)
"see these course cards are amazing , 2) we have talked about this 5000+ stats multiple times in home page keep it once only remove from all other places add this learning journey section in home page this is also cool , remove the about section from home and add The ETI Advantage instead of that"

Reference screenshots the user shared (inspiration for the style/layout, use ETI's own content):
- Course cards reference (IIDE "Our Programs": photo cards with Offline/Online tag, dark blue bottom with title, Duration, Best For, deadline line, white "View Program" button, category filter pills All/Marketing/Business/AI, carousel with dots): https://customer-assets-0z36b82j.emergentagent.net/job_etiedu--2a2o31hh/artifacts/6849c2c27a18e709_Screenshot%202026-11-16%20at%2004.53.59.webp
- Learning journey reference (NIIT "How it works – Your Learning Journey": 5 numbered steps Enroll, Start Orientation, Learn, Practice, Get Hired*): https://customer-assets-0z36b82j.emergentagent.net/job_etiedu--2a2o31hh/artifacts/d5d8e9b876f44a16_Screenshot%202026-11-16%20at%2004.57.55.webp
(If the screenshot order is unclear, match by content.)

## Round 4 (user's words, verbatim)
"Program Finder Bot: Add a "find your program" helper like NIIT's that suggests a course in seconds, and in the attached image see the hero section how amzing it is"
- NIIT reference for the helper: floating bot bubble "Click me to find your program" (bottom-left in the NIIT learning-journey screenshot above).
- Hero reference (IIDE hero: big headline, subline, "Online or Offline" line, scrolling brand logo strip, 3-point highlight bar, "Choose The Right Program" button, person cut-out on a blue shape with floating badges like "Get placed at top companies", "Get a super hike", "Build your portfolio", grid background; followed by outcome stat cards): https://customer-assets-0z36b82j.emergentagent.net/job_etiedu--2a2o31hh/artifacts/4d53ab09db6a3256_Screenshot%202026-11-16%20at%2004.51.51.webp
- Use ETI's own content and numbers. Keep the 5000+ stat appearing once on the home page (Round 3 rule).

## Round 5 (user's words, verbatim)
"as we designed the home poge hero section so make the free counselling page also like that"
- Context: the home page hero built in Round 4 (IIDE-style). Apply that same hero style to the Free Counselling page. The counselling booking form must keep working exactly as before.

## Round 6 (user's words, verbatim)
"while uploading the blog from the backend when i paste the html code it overrides it and makes it default i want that whatsoever the css is added in the blog html it must be rendered as it is and when someone books the counseling they must immediately recieve a message ontheir whatsapp from msg 91 ill share the tmplate details and must validate the number as 10 digit , starting from either 9 , 8 , 7 or 6"

MSG91 WhatsApp curl the user shared (authkey is stored as backend env MSG91_AUTH_KEY, never hardcode it):
curl --location --request POST 'https://api.msg91.com/api/v5/whatsapp/whatsapp-outbound-message/bulk/'
  --header 'Content-Type: application/json' --header 'authkey: <authkey>'
  --data-raw '{"integrated_number": "918728054145","content_type": "template","payload": {"messaging_product": "whatsapp","type": "template","template": {"name": "etiweb","language": {"code": "en","policy": "deterministic"},"namespace": null,"to_and_components": [{"to": ["<list_of_phone_numbers>"],"components": {"body_1": {"type": "text","value": "value1"}}}]}}}'
- body_1 value: use the student's name from the booking form for now (awaiting user confirmation; may change).
- Key is saved as backend env MSG91_AUTH_KEY.
