# Narendra Homeopathy React

React and Vite conversion of the Narendra Classical Homeopathic Clinic website.

The project keeps the original PHP website separate and reuses its existing visual assets, Bootstrap classes, CSS, colors, fonts, spacing, images, and responsive layout patterns.

## Project Information

- Project name: `narendra-homeopathy-react`
- Framework: React
- Build tool: Vite
- Routing: React Router
- HTTP client: Axios
- Styling: Existing PHP website CSS and Bootstrap assets
- Original PHP project: `../Narendra_homepathy`
- Development URL: `http://127.0.0.1:5173/`

## Requirements

Install the following before running the project:

- Node.js 18 or newer
- npm 9 or newer
- A browser such as Chrome, Edge, or Firefox

Check installed versions:

```bash
node --version
npm --version
```

## Installation

Open a terminal in this folder:

```bash
cd narendra-homeopathy-react
```

Install dependencies:

```bash
npm install
```

## Run in Development

Start the Vite development server:

```bash
npm run dev
```

To make the server available on the local network:

```bash
npm run dev -- --host 0.0.0.0
```

The default local address is:

```text
http://127.0.0.1:5173/
```

Vite automatically reloads the browser when files in `src` or relevant public assets change.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production files are written to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Environment Configuration

The form components use Axios through `src/services/api.js`.

By default, requests use the current frontend origin. To connect the React frontend to the existing PHP backend, create a `.env.local` file in this project folder:

```env
VITE_API_URL=http://localhost/Narendra_homepathy/public_html
```

Use the URL that serves the PHP project in your local environment. For example, if Apache serves the PHP site at `http://localhost/narendra-homepathy/public_html`, use:

```env
VITE_API_URL=http://localhost/narendra-homepathy/public_html
```

Restart Vite after changing environment variables.

The current form endpoints are:

- Appointment form: `POST /appoinment.php`
- Contact form: `POST /mail.php`

The PHP backend must be running for email delivery and database operations to work. Browser CORS configuration may also be required when the frontend and PHP backend run on different origins.

## Available Routes

| Route | React page | Purpose |
| --- | --- | --- |
| `/` | `Home.jsx` | Home page, slider, clinic cards, introduction, and disease cards |
| `/about` | `About.jsx` | Clinic information and statistics |
| `/doctor` | `Doctor.jsx` | Dr. S. M. Gaikwad profile and statistics |
| `/acute` | `AcuteDisease.jsx` | Acute disease information and treatment cards |
| `/chronic` | `ChronicDisease.jsx` | Chronic disease categories and treatment cards |
| `/blogs` | `Blogs.jsx` | Homeopathy blog cards |
| `/articles` | `Articles.jsx` | Homeopathy articles |
| `/contact` | `Contact.jsx` | Contact details, Google Map, and contact form |
| `/appointment` | `AppointmentForm.jsx` | Appointment form |
| `/why-homeopathy` | `SiteInfo.jsx` | Why Homeopathy information |
| `/other` | `SiteInfo.jsx` | Activities information |
| `/news` | `SiteInfo.jsx` | News information |
| `/gallery` | `SiteInfo.jsx` | Gallery information |

Unknown routes currently fall back to the home page.

## Folder Structure

```text
narendra-homeopathy-react/
├── public/
│   ├── bootstrap.min.css
│   ├── images/
│   │   └── Original clinic images
│   ├── img/
│   │   └── Legacy image path used by the copied stylesheet
│   └── style.css
├── src/
│   ├── components/
│   │   ├── AppointmentForm/
│   │   ├── BlogCard/
│   │   ├── ContactForm/
│   │   ├── Counter/
│   │   ├── DiseaseCard/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   └── Navbar/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AcuteDisease.jsx
│   │   ├── Articles.jsx
│   │   ├── Blogs.jsx
│   │   ├── ChronicDisease.jsx
│   │   ├── Contact.jsx
│   │   ├── Doctor.jsx
│   │   ├── Home.jsx
│   │   └── SiteInfo.jsx
│   ├── router/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Shared Components

### Navbar

`src/components/Navbar/Navbar.jsx` contains:

- Social media links
- Clinic logo
- Phone numbers
- Appointment button
- Responsive Bootstrap navigation
- Treatment, Activities, and Media dropdown menus

### Footer

`src/components/Footer/Footer.jsx` contains:

- Clinic introduction
- Social links
- Quick links
- Service links
- Phone, email, opening hours, and address information
- WhatsApp floating link

### Hero

`src/components/Hero/Hero.jsx` provides the inner-page banner and breadcrumb-style home link.

### Slider

`src/components/Hero/Slider.jsx` provides the home page image slider with:

- Automatic slide changes
- Previous and next controls
- Slide indicators
- Original banner images

### DiseaseCard and BlogCard

These components keep repeated disease and blog layouts consistent across pages while preserving the original Bootstrap grid classes and CSS hooks.

### Forms

- `AppointmentForm.jsx` handles appointment details, validation, status messages, and Axios submission.
- `ContactForm.jsx` handles contact details, validation, status messages, and Axios submission.

## Assets and Styling

The original image files are stored in `public/images/` using their existing names. Images are referenced from JSX with paths such as:

```jsx
<img src="/images/drsandip.jpg" alt="Dr. S.M. Gaikwad" />
```

The original stylesheet is available at `public/style.css` and is loaded from `index.html`. Bootstrap is loaded from `public/bootstrap.min.css`.

The duplicate `public/img/` directory exists because the original CSS contains relative paths such as:

```css
background-image: url(img/footer-img.png);
```

Do not remove `public/img/` unless those CSS paths are changed to `/images/`.

## Adding a New Page

1. Create a page component in `src/pages/`.
2. Import it in `src/router/AppRouter.jsx`.
3. Add a `<Route>` entry.
4. Use `Hero`, `Navbar`, `Footer`, and existing card/form components where appropriate.
5. Keep image files in `public/images/` and preserve the original filename when possible.
6. Run the production build:

```bash
npm run build
```

## Backend Notes

This React project replaces PHP page rendering with client-side React rendering. It does not replace the PHP/MySQL backend.

The original PHP project remains outside this folder and should not be modified by frontend changes. The following backend responsibilities still belong to PHP:

- Email delivery
- Appointment database insertion
- Contact email processing
- CAPTCHA/session handling
- MySQL queries
- Dynamic banner, blog, news, gallery, and CMS content

For production deployment, configure the PHP backend URL with `VITE_API_URL`, enable CORS if needed, and deploy the Vite `dist/` directory to a web server that supports SPA fallback to `index.html`.

## Troubleshooting

### Port 5173 is already in use

Start Vite on another port:

```bash
npm run dev -- --port 5174
```

### Images are missing

Confirm the files exist in both:

```text
public/images/
public/img/
```

Also check that image filename capitalization and spaces match the original files.

### Forms do not send

Confirm all of the following:

1. The PHP backend is running.
2. `VITE_API_URL` points to the PHP server.
3. The PHP server allows requests from the Vite origin.
4. The PHP email service is configured.
5. The browser developer console has no CORS or network errors.

### Refreshing a route returns 404

Configure the production web server to serve `index.html` for unknown frontend routes. This is required for React Router browser URLs such as `/about` and `/contact`.

## Validation

Run the production build before deployment:

```bash
npm run build
```

A successful build confirms that the React source, imports, routes, and Vite configuration compile correctly.
