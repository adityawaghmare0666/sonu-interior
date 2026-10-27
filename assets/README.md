# SONU Interior Home Designer — complete static website

Five editable HTML pages, shared CSS/JavaScript, local fonts and AI-generated interior concept images. No build, subscription, framework or API key is required to run these files.

## Open the website

The download ZIP places `index.html` at the top level. Extract the entire ZIP, keep the `assets` directory beside the HTML files, and open `index.html` in a browser. The five pages are:

- `index.html` — homepage, approach, service introduction, design concepts and Google reputation.
- `services.html` — false ceilings, walls and mouldings, tiling and interior work, plus FAQs.
- `inspiration.html` — filterable design gallery with accessible enlarged images.
- `contact.html` — business details, hours, social links, directions and WhatsApp appointment request.
- `privacy.html` — privacy and AI imagery explanation.

All pages work from local files. Internet access is needed only to follow external business links or open WhatsApp.

## Host the files

Upload `index.html`, the other HTML pages and the full `assets` folder into the public root of a static host (for example, `public_html` on conventional hosting). For a drag-and-drop deployment, upload the extracted website folder. Do not upload the ZIP itself as your homepage. No build command is needed. In this development checkout, website files live in `dist/`.

## WhatsApp appointments

All WhatsApp links use `919119573539` (displayed as +91 91195 73539). The consultation form prepares the visitor's name, service, location, budget, optional preferred date and note in a WhatsApp message. It does not send a message automatically, save submissions, or confirm a booking. The visitor reviews and sends the message, and the business confirms availability. JavaScript must be enabled for the detailed form; direct WhatsApp links remain available without it. A registered WhatsApp account on the listed business number could not be independently verified.

## Editing

Edit text directly in the HTML pages. Shared appearance is in `assets/style.css`; menu, gallery and form behavior are in `assets/site.js`. Shared header/footer content is repeated across the five pages so each page is ordinary standalone HTML; update all five copies when changing business details. For a new phone number, update every `tel:` and `wa.me` link, JSON-LD telephone, visible phone text and the phone in the JavaScript form handler.

To replace artwork, use the same image filenames or update every reference. Main images are `assets/living.webp`, `assets/bedroom.webp` and `assets/ceiling.webp`; smaller gallery versions end in `-small.webp`. Update captions and image disclosures if replacing them with actual completed-project photos. Local URW serif fonts include their license in `assets/FONT-LICENSE.txt`.

## Facts and imagery

Business details were checked on 24 October 2026 against the supplied Google Business Profile. See `BUSINESS-SOURCES.md` for source links and exact hours. The website includes no invented testimonials, project counts, awards, quotations or guarantees. Approximate budget choices are visitor preferences, not business prices.

All three interior images were created using the built-in image-generation tool. They are clearly identified as AI design concepts, not completed SONU projects. The prompt set is recorded in `IMAGE-PROMPTS.md`.

## Validation

Checked desktop appearance and phone/tablet layouts, including 320–390 pixel phone frames and a 768 pixel tablet frame. Verified no horizontal page overflow in those checks, local file and anchor targets, JavaScript syntax, mobile menu, gallery filtering, enlarged images, and WhatsApp message destination and encoding. No WhatsApp message was sent during testing.
