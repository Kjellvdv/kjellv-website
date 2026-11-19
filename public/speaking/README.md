Photos for the /speaking page.

Drop image files here, then uncomment/add an entry in the `photos` array at the
top of `src/pages/speaking.astro`:

    const photos = [
      { src: '/speaking/your-file.jpg', alt: 'Short description of what is happening' },
    ];

The photo section renders nothing while that array is empty, so the page is
always safe to ship.

Guidance:
- Crop to portrait 4:5; the page renders every photo at 4:5.
- 1, 2, or 3 photos all lay out correctly.
- Keep alt text descriptive of what is actually happening in the photo.
