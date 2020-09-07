/* Global slide configuration */
Reveal.initialize({
  hash: true,
  transition: 'none',
  controls: false,
  progress: false,
  slideNumber: false,
  overview: true,
  slideNumber: 'c/t',
  showSlideNumber: 'speaker',
  totalTime: "1800",
  pdfSeparateFragments: false,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom, RevealSearch]
});

/* Log some presentation info to the console */
console.log('Total slides: ' + Reveal.getTotalSlides());
console.log('Scale: ' + Reveal.getScale());
console.log('Computed: ' + JSON.stringify(Reveal.getComputedSlideSize()));
