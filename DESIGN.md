---
name: Optyk Piotrkowska, version B
description: Clinical precision as luxury. Near-white ruled pages, light large Archivo, instruments on photographic black, one bottle-green fill for booking.
colors:
  ink: "#111412"
  ink-2: "#545b57"
  mist: "#f2f3f1"
  rule: "#d9dcda"
  black: "#0b0d0c"
  photo-black: "#010101"
  on-black: "#f4f5f4"
  on-black-2: "#a9b1ad"
  book: "#0f6b52"
  book-hi: "#0b5441"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  display-sub:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.25rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  numeral:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(4.5rem, 8vw, 7.5rem)"
    fontWeight: 200
    lineHeight: 0.85
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\" 1"
    fontVariation: "\"wdth\" 75"
  figure:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "\"tnum\" 1"
    fontVariation: "\"wdth\" 87.5"
  list-large:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 2.8vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 300
    lineHeight: 1.4
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  row:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  subhead:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "0.02em"
    fontVariation: "\"wdth\" 87.5"
  label:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.09em"
    fontVariation: "\"wdth\" 75"
rounded:
  none: "0"
  soft: "20px"
  large: "clamp(48px, 7vw, 112px)"
  pill: "999px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "56px"
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(80px, 11vw, 152px)"
  column-gap: "clamp(32px, 6vw, 112px)"
  column-gap-tight: "clamp(32px, 5vw, 80px)"
  wrap: "1320px"
  header: "76px"
  header-mobile: "64px"
components:
  button-book:
    backgroundColor: "{colors.book}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-book-hover:
    backgroundColor: "{colors.book-hi}"
    textColor: "{colors.white}"
  button-book-header:
    backgroundColor: "{colors.book}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "44px"
  nav-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "{spacing.header}"
  nav-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.soft}"
    padding: "8px 24px"
    width: "380px"
  visit-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.soft}"
    padding: "28px 28px 22px"
    width: "420px"
  price-row:
    textColor: "{colors.ink}"
    typography: "{typography.row}"
    padding: "22px 0"
  price-row-compact:
    padding: "16px 0"
  peek:
    backgroundColor: "{colors.black}"
    width: "220px"
  instrument-band:
    backgroundColor: "{colors.photo-black}"
    textColor: "{colors.on-black}"
    padding: "clamp(80px, 11vw, 152px) 0"
  quiet-section:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    padding: "clamp(80px, 11vw, 152px) 0"
  closing-band:
    backgroundColor: "{colors.black}"
    textColor: "{colors.on-black}"
    padding: "clamp(64px, 8vw, 112px) 0"
  footer:
    backgroundColor: "{colors.black}"
    textColor: "{colors.on-black-2}"
    padding: "64px 0 28px"
  float-call:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    size: "56px"
  service-tile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-black}"
    rounded: "{rounded.none}"
    padding: "22px 24px"
  service-tile-label-on-photo:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  photo-badge:
    backgroundColor: "rgba(11, 13, 12, .62)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
---

# Design System: Optyk Piotrkowska, version B

Scope: the version B mockup only (`makieta-b/`). Version A keeps its own system in the project-root `DESIGN.md`; the two must not be merged. HTML is generated from `makieta-b/src` by `tools/build_makieta_b.py`; edit the sources, not the built pages.

## Overview

**Creative North Star: "The Instrument Ledger"**

The practice presents itself the way it measures: precisely. Pages are near-white sheets held on a strict grid, with information set in ruled rows like a ledger (service, who performs it, price) and figures set large in light, tabular numerals. Against that paper, the equipment is shown as an object of value: foropter, slit lamp and GDx scanner photographed on a black studio backdrop and placed in a band of the same black, so the photos have no visible frame.

Density is calm and generous. Sections breathe on a fluid rhythm of 80 to 152px, type is light at large sizes and condensed at small ones, and colour is almost absent: ink, grey, mist, hairline, black. The single chromatic note is bottle green, and it marks the action of booking or calling. Depth is flat; only layers that genuinely float (visit card, dropdown, pointer preview, phone button) cast a shadow.

The world refuses rounded-blob pastel clinic templates and the navy-and-gold palette of the client's reference site; it keeps that site's solutions (dropdown menu, person in glasses in the first viewport, exam as numbered stages, real figures, floating phone) and re-dresses them in this ledger language.

**Key Characteristics:**
- Ruled rows, not cards: information sits between a heavy ink top rule and hairline row dividers.
- One typeface, Archivo variable, used across its width axis: normal width for reading, 87.5% for figures and subheads, 75% for labels and stage numerals.
- Light weights (200 to 300) at display sizes, 600 only at label and action sizes.
- Black bands for instruments, closing calls and footer; mist bands for quiet sections; white everywhere else.
- Bottle green appears as a fill only on booking and call buttons.
- Ortorad's shape language: pill buttons, soft 20px corners on cards and panels, and one large rounded corner on photos, dark bands and the service-tile grid.

## Colors

A near-monochrome ink-on-white palette with two blacks and one reserved green.

### Primary
- **Bottle Green** (`book`): the fill of every booking or call button ("Umów wizytę", "Zadzwoń"), also the focus ring, the text-selection fill and the hover colour of links and table rows. White on it reaches 6.5:1.
- **Deep Bottle Green** (`book-hi`): hover state of the green button only.

### Neutral
- **Instrument Ink** (`ink`): all primary text, the 2px and 1px top rules that open every ruled list, the floating phone fill, the star rating.
- **Measured Grey** (`ink-2`): secondary text: ledes, descriptions, prices in the visit card, the "who" column, captions, FAQ answers. 7:1 on white, 6.3:1 on mist.
- **Clinic Mist** (`mist`): background of quiet sections (doctor, contact) and the hero photo placeholder.
- **Hairline** (`rule`): row dividers, header bottom border, dropdown border, separator slashes in breadcrumbs and the brand list. Decorative only; never carries text.
- **Salon Black** (`black`): closing band, footer, mockup guide bar, pointer-preview backdrop, dark product figure.
- **Studio Black** (`photo-black`): only the instrument band. It matches the studio photos' own backdrop so the objects float with no rectangle.
- **Paper White** (`white`): page ground, header, visit card, dropdown panel.
- **On-Black** (`on-black`) and **On-Black Grey** (`on-black-2`): primary and secondary text on either black (8.9:1 and above).

### Named Rules
**The Single Green Rule.** Bottle green is the only chroma in the system and the only button fill that means "act". If a surface has two green fills that do different things, one of them is wrong.

**The Two Blacks Rule.** Instrument photography sits on Studio Black (#010101) to dissolve the photo edge; every other dark surface uses Salon Black. Do not swap them.

## Typography

**Display Font:** Archivo variable (weight 100 to 900, width 62 to 125%), fallback Arial
**Body Font:** the same Archivo at normal width
**Label Font:** the same Archivo at 87.5% width, sentence case

**Character:** one engineered grotesque stretched across its width axis does the work of a whole family: wide-open and light for statements, compressed and tight for labels and numerals, so the page reads like a calibrated instrument scale rather than a brochure.

### Hierarchy
- **Display** (300, clamp 48 to 88px, 0.96): the page's one H1. On the homepage each line is held with `nowrap`; on subpages the Display Sub size (40 to 72px) is used. The contact address is set at Display Sub size as its section heading.
- **Headline** (300, clamp 32 to 52px, 1.05): every section H2, balanced wrapping. On black it switches to On-Black.
- **Numeral** (200, clamp 72 to 120px, 0.85, 75% width, tabular): exam stage numbers only.
- **Figure** (300, clamp 40 to 60px, 1, 87.5% width, tabular): review count, rating, price and measurement figures; 32 to 48px in the three-figure variant, 36px on mobile.
- **List Large** (300, clamp 26 to 40px): the brand list, slash-separated, as a typographic object.
- **Quote** (300, clamp 20 to 24px, 1.4): patient review text.
- **Title** (500, 22px): visit card heading; instrument names are 500 at 20px, stage and FAQ titles 500 to 600 at 18px.
- **Row** (400, clamp 18 to 22px): the service name in the price table.
- **Lede** (400, clamp 18 to 20px, Measured Grey, max 30 to 32em): the paragraph under a Display heading.
- **Body** (400, 18px, 1.6): reading text; paragraph measures are capped between 26em and 46em depending on the column.
- **Body Small** (400, 16px): stage descriptions, colleague note, buttons. Notes and breadcrumbs drop to 14px, legal and visit-card note to 13px.
- **Subhead** (600, 16px, 87.5% width, +0.02em): the small heading of related-link sections ("Zobacz też").
- **Label** (500, 15px, 87.5% width, sentence case): definition-list terms, the "who" column, review attributions. Navigation is 500 at 16px. Only the mobile menu group names stay uppercase (13px, 75% width, +0.09em).

### Named Rules
**The Light Large Rule.** The larger the type, the lighter the weight: 200 to 300 at 26px and above, 400 for reading, 500 to 600 only at 22px and below.

**The Tabular Rule.** Every number that can be compared (prices, figures, stage numerals, dropdown prices) is set with tabular figures and aligned in its column.

**The Width-Axis Rule.** Hierarchy at small sizes comes from width and weight, not from extra colour or tracked capitals; the audience is often 40+, so small text stays at 15px or more and in sentence case.

## Layout

Content sits in a 1320px wrap with a fluid gutter (20 to 56px); the header runs wider at 1440px. Sections are separated by a fluid section rhythm (80 to 152px) and by changes of ground (white, mist, black), never by decorative dividers.

Two-column sections use asymmetric 12-part splits with a fluid column gap (32 to 112px): 4/8 for a heading beside a table or stage list, 5/7 for media beside copy, 7/5 for copy beside media on subpages and contact. The homepage hero splits 43/57: copy on the left, the photo running to the right edge at full hero height (620 to 860px), and the visit card positioned across the photo's lower left.

Repeating sets use equal columns: three instruments (two on the glaucoma page), five, four or three exam stages divided by hairline verticals, two reviews, three figures.

Breakpoints: at 1100px the desktop navigation and header phone give way to a bordered "Menu" toggle, the visit card moves to the right edge and the price table drops its "who" column. Between 761 and 1400px the visit card compacts (tighter rows, note hidden) to stay clear of the face in the photo. At 760px everything stacks to one column, the header drops to 64px and loses its green button (the floating phone takes over), the visit card overlaps the photo bottom by 64px in flow, and stages run two per row.

Inner spacing steps are 8, 16, 24, 40 and 56px, with ruled rows padded 22px (table, FAQ), 16px (compact table, ruled list), 14px (facts, dropdown) and 13px (visit card).

## Elevation & Depth

Flat by default. Depth comes from change of ground (white, mist, black) and from rules, not from shadow. Shadows exist only on the four layers that physically float above the page.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 30px 60px rgba(11, 13, 12, .18), 0 2px 6px rgba(11, 13, 12, .08)`): the visit card over the hero photo.
- **Panel drop** (`box-shadow: 0 24px 48px rgba(11, 13, 12, .12)`): navigation dropdown.
- **Preview drop** (`box-shadow: 0 20px 40px rgba(11, 13, 12, .25)`): the pointer-following photo preview.
- **Button float** (`box-shadow: 0 12px 28px rgba(11, 13, 12, .3)`): the floating phone.

### Named Rules
**The Floating-Only Rule.** A shadow means the element sits over other content. Anything in the flow of the page (rows, figures, images, sections) stays flat.

## Shapes

Soft, after the client's reference ortorad.pl. Buttons, the menu toggle, the photo badge and the floating phone are pills. The visit card and the dropdown carry a 20px corner. Photographs, the strip, the dark bands (instruments, closing) and the service-tile grid share one shape: three 20px corners and one large corner (48 to 112px), alternating sides from block to block; the hero photo has only its large corner, where it meets the copy. Rows, tables, stages and tiles inside the grid stay square. Form is drawn with lines: a 2px ink rule opens the price table, visit list, ruled list and FAQ; a 1px ink rule opens stages, figures, facts and reviews; 1px hairlines divide rows and stage columns. Photographs are cropped 4:5 for people and instruments, 3:2 or 1:1 for detail splits, and as a 240 to 560px full-bleed strip. Instrument photos are masked to fade at the bottom (from 72%) and sides (10%) into the black band. Directional arrows, the dropdown chevron and the FAQ plus are line drawings at 1.5px stroke.

## Components

### Buttons
Quiet, rectangular and decisive; the green is the message.
- **Shape:** near-square (2px corner), minimum 52px tall (44px in the header), 26px horizontal padding, 600 at 16px.
- **Book / Call:** Bottle Green fill, white text. Used for every booking and phone action, including full-width inside the visit card.
- **Hover / Focus:** fill deepens to Deep Bottle Green over 0.2s on the system ease; focus is a 2px green outline offset 3px (On-Black outline inside black bands and the footer).
- **Text link action:** 600 weight underlined text beside the button ("lub zadzwoń"), turning green on hover. There is no outlined or ghost button besides the mobile menu toggle.

### Navigation
- **Header:** sticky white bar, 76px (64px mobile), hairline bottom border; logo at 116px, 16px sentence-case links (500) with 30px gaps, the main phone number in 600, then the green booking button.
- **Dropdown:** triggers carry a drawn chevron that flips on open; hover and open states underline 2px at 8px offset. The panel is a 380px white sheet with hairline border and Panel drop, listing services as ruled rows with tabular prices in Measured Grey on the right. One panel open at a time; closes on outside click and Escape, returning focus.
- **Mobile:** bordered "Menu" toggle opens a full-width sheet of ruled 18px links grouped under Label headings; closes on link choice or when the window widens.
- **Breadcrumbs:** 14px Measured Grey, hairline slashes.

### Visit Card (signature)
The first viewport's working action: a white index card over the hero photo, 420px wide, with Card lift. A 22px Title, then a 2px ink-ruled list of visit types (name left, tabular price in Measured Grey right, drawn arrow), then the full-width green call button and a 13px note. Row hover turns name and arrow green.

### Price Table (signature)
The services ledger, reused on every page. A 2px ink top rule, then rows on a four-column grid: service name at Row size, "who" in Label style, right-aligned tabular price (with a 13px secondary line such as the Saturday price), and an 18px drawn arrow. On hover the name slides 8px right and turns green, the arrow moves 4px. The compact variant (16px rows) closes subpages as related links.

### Pointer Preview (signature)
On fine pointers, hovering a price-table row shows that service's photo in a 220px, 4:5 frame beside the cursor, offset 24px and trailing it with an easing of 0.2 of the remaining distance per frame; it fades in over 0.25s. Disabled on touch and under reduced motion.

### Instrument Band
Studio Black band at section padding, Headline in On-Black, then a three- or two-column set of 4:5 instrument photos with edge-fade masks, each followed by a 500 20px name and an On-Black Grey description; a 13px provenance note closes the band.

### Stages
A numbered sequence, used only where order is the content (the eye exam, the glaucoma exam, the children's visit, the TREE fitting). A 1px ink top rule, equal columns divided by hairline verticals, each with a huge 75%-width tabular numeral, a 600 18px title and a 16px grey description; an optional hairline-topped footer line carries price and call link.

### Figures
Three real numbers in a row (223, 5,0, 200 zł), set at Figure size between a 1px ink top rule and a hairline bottom rule, each with a 15px grey caption.

### Facts Table
Definition rows for hours, phones, e-mail, duration: Label-style term in a 9.5rem column (7rem mobile), value beside it, hairline between rows, 1px ink top rule.

### FAQ
Native disclosure rows under a 2px ink rule: 500 18px question, a drawn plus that rotates 45 degrees to a cross on open, answer in Measured Grey up to 46em.

### Closing Band
Salon Black band ending each subpage: On-Black Headline, a grey line beneath, the green call button aligned right (stacked beneath on mobile).

### Footer
Salon Black, the logo on a white plate, contact facts in two ruled columns with faint on-black hairlines, 13px legal line.

### Service Tiles
Ortorad's service grid: eight tiles, four across (two on tablet and phone), 8px gaps, the grid's top-left and bottom-right corners large. Photo tiles carry their label on a white pill; solid tiles (ink or mist; never green, which stays reserved for booking) carry a 44px line icon at the top and the label with a drawn arrow at the bottom. Each tile is a link to the service; hover scales the photo 4% or deepens the fill.

### Glasses Types
Złotno's glasses-type row, drawn as ruled columns rather than cards: five columns under a 1px ink rule, hairline dividers, a 48px line icon in bottle green, a 600 18px name and a 16px grey line. Icons are authored SVG at 1.75px stroke, one family across tiles and types.

### Floating Phone
A 56px ink circle fixed 20px from the bottom-right corner on every page, with a 24px line-drawn handset and Button float; above 1100px it widens into a pill that also shows the number, as on ortorad.pl. Hover turns it bottle green. The one-tap call when the header button is hidden.

### Photo Badge (mockup provenance)
A square 12px label on a 62% Salon Black scrim, pinned 12px from the bottom-left of an illustrative photo ("zdjęcie poglądowe"; top-left in the mobile hero). It exists to mark placeholder imagery and leaves with it when real photography arrives.

## Do's and Don'ts

### Do:
- **Do** put lists of services, visit types, facts and questions in ruled rows under an ink top rule, with prices tabular and right-aligned.
- **Do** keep Bottle Green as the only fill colour for actions, and use it for booking or calling only.
- **Do** set display and figure type light (200 to 300) and large; use the 87.5% width Label in sentence case for small structural text.
- **Do** place instrument and object photography on Studio Black with the edge-fade mask so no photo reads as a rectangle.
- **Do** end every page with a clear call: closing band or contact block, plus the floating phone.
- **Do** mark every illustrative or rights-unconfirmed photo with the photo badge or a band note until it is replaced.

### Don't:
- **Don't** invent new radii: pill, 20px soft corner and the one large corner are the whole vocabulary; no organic blob shapes.
- **Don't** add a second accent colour or reintroduce navy and gold.
- **Don't** put services in cards or tiles; the ruled table is the service pattern on every page.
- **Don't** number anything that is not an ordered sequence; numerals belong to the Stages pattern only.
- **Don't** add shadows to elements that sit in the page flow.
