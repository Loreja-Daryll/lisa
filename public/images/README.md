# Photos go here

Drop the real photos in this folder using these EXACT filenames — the code is
already wired to look for them, no code changes needed once they're added:

- `hero-portrait.jpg` (or .png) — the main hero photo, top of the page
- `final-portrait.jpg` (or .png) — the photo near "Let's rewrite your story"

## Recommended specs
- Aspect ratio: 4:5 (portrait orientation) — matches the frame shape already in the design
- Minimum size: 1200 x 1500px (so it stays sharp on large screens)
- Format: .jpg for photos (smaller file size), .png only if transparency is needed

## What happens automatically
- If the file isn't here yet: the gradient placeholder with the "Photo — swap for
  editorial portrait" label keeps showing, like it does now.
- The moment a correctly-named file is added here: it replaces the gradient
  automatically, the placeholder label disappears, and the photo fills the frame
  (cropped to fit, same as Instagram's photo cropping).

## If you want to use a different filename
Update the `src="/images/..."` path in `src/components/Hero.tsx` (for the hero
photo) or `src/components/FinalCTA.tsx` (for the final photo) to match.
