# Antoine Gaton - Software Engineer Portfolio

A modern, responsive portfolio website built with React and Vite, featuring dynamic content management, multi-language support, and interactive components.

## 🌟 Key Features

- 🌐 **Multi-language Support** (English/Spanish/French/Korean)
- 🎨 **Theme System** with light/dark modes
- 📱 **Mobile-First** responsive design
- 📂 **JSON-powered Content** management
- 🛠 **Modern Tech Stack** (React, Bootstrap, Vite)
- 📈 **Interactive Components** (Swiper, Chart.js, Three.js)
- ✉️ **Contact Form** with EmailJS integration

## 💻 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **UI Framework**: React Bootstrap 
- **Styling**: SCSS + Bootstrap 5
- **Libraries**: 
  - Swiper for carousels
  - Chart.js for data visualization
  - Three.js for 3D graphics
  - EmailJS for contact form
  - Smooth Scrollbar for scrolling

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/AntoineGaton/AntoineDashboardPortfolio.git
cd AntoineDashboardPortfolio
```


2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## ⚙️ Configuration

### Core Settings
Edit `public/data/settings.json` to configure:
- Profile information
- Supported languages
- Theme options
- EmailJS settings

```json
{
  "profile": {
    "name": "Antoine Gaton",
    "role": "Software Engineer",
    "logoUrl": "images/svg/logo.svg"
  },
  "supportedLanguages": [
    {
      "name": "English",
      "id": "en",
      "default": true
    }
  ]
}
```

### Content Management
All content is managed through JSON files in `public/data/sections/`:

- `cover.json` - Landing page content
- `experience.json` - Work experience
- `education.json` - Educational background
- `skills.json` - Technical skills
- `portfolio.json` - Project showcase
- `achievements.json` - Notable achievements

## 🎨 Customization

1. **Content**: 
   - Update JSON files in `public/data/sections/`
   - Add images to `public/images/`
   - Modify section structure in `structure.json`

2. **Styling**:
   - Global SCSS variables in `src/styles/_variables.scss`
   - Component-specific styles in their respective `.scss` files
   - Bootstrap overrides in `src/styles/_customs.scss`

3. **Adding Languages**:
   - Add new language in `settings.json`
   - Add translations in each section's JSON file:
   ```json
   "locales": {
     "en": {"title": "Portfolio"},
     "es": {"title": "Portafolio"}
   }
   ```

## 📝 Project Structure

```
AntoineDashboardPortfolio/
├── public/
│   ├── data/           # JSON content files
│   └── images/         # Static assets
├── src/
│   ├── components/     # React components

│   ├── providers/      # Context providers
│   ├── helpers/        # Utility functions
│   └── styles/         # SCSS files
└── vite.config.js      # Vite configuration
```

## 📄 License

MIT License - Feel free to use for personal or commercial projects. Attribution appreciated.

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by Antoine Gaton
```
