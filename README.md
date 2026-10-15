# Thai Ha Nguyen — Academic portfolio

Responsive, build-free GitHub Pages website. Plain HTML, CSS and JavaScript.

## Preview

Run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Publish

Push to the repository. In GitHub **Settings → Pages**, choose **Deploy from a branch**, your publishing branch, and **/ (root)**, then save. The repository `HaNGUYEN-96.github.io` serves at https://hanguyen-96.github.io/ after deployment.

## Update

- `index.html`: biography, projects, publications, education, experience, readings, contact.
- `cv.html`: public academic CV with print/save-as-PDF button. Update shared content on both pages.
- `assets/css/style.css`: appearance, mobile layout and print styles.
- `assets/js/main.js`: navigation and publication filters.
- `about.html` and `projects.html`: compatibility redirects.

To add a reading, replace the notebook introduction with an article including title, author, source link and personal notes. No reading history is implied by the initial content.

To add scholarly work, copy an `article.publication`, setting `data-type` to `journal`, `conference` or `patent`.

## Content provenance

Based on the November 2025 CV and 2026 Deakin records. Master of Data Science conferred 28 September 2026. Ongoing appointments and submitted manuscript status are qualified as of November 2025. No final aggregate WAM is claimed. Publication links come from the CV.

Public pages omit phone numbers, street addresses, student identifiers and referee contacts. Original academic records are not included. Google Fonts have local fallbacks. Core content works without JavaScript.
