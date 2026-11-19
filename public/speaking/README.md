Photos for the /speaking page.

Drop image files here, then uncomment/add an entry in the `photos` array at the
top of `src/pages/speaking.astro`:

    const photos = [
      { src: '/speaking/your-file.jpg', alt: 'Short description of what is happening' },
    ];

The photo section renders nothing while that array is empty, so the page is
always safe to ship.

Guidance:
- Give each photo a `shape`: 'portrait' renders at 4:5, 'wide' at 3:2.
- A portrait next to a wide photo lines up at the same height on its own.
  Other combinations of 1, 2 or 3 photos use equal columns.
- Export at web size (about 1200px wide for a portrait, 1600px for a wide one).
- The Willow logo may show, but never one of Willow's blue cover slides, and
  participants stay out of frame (Kjell, 2026-11-19).
- Keep alt text descriptive of what is actually happening in the photo, and
  don't name an event or a client.
