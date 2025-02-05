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

## 🔄 Application Flow

The application follows a hierarchical component structure for rendering content:

### Core Rendering Flow

1. **Entry Point (`App.jsx`)**
   - Initializes core application wrapper
   - Sets up feedback systems (notifications, modals, spinners)
   - Renders main `Portfolio` component
   - Manages image caching through `ImageCache`

2. **Portfolio Layout (`Portfolio.jsx`)**
   - Manages the main layout structure
   - Handles navigation sidebar
   - Controls section rendering through `MainSlider`
   - Manages mobile/desktop navigation components

3. **Section Management (`MainSlider.jsx`)**
   - Renders individual sections based on JSON configuration
   - Handles section transitions and animations
   - Manages section visibility and loading states

4. **Section Component (`Section.jsx`)**
   - Renders individual section content
   - Manages section header and content layout
   - Controls section transitions and scrolling behavior
   - Maps article components based on configuration

### Data Flow

1. **JSON Configuration**
   ```
   public/data/
   ├── settings.json       # Global settings
   ├── structure.json      # Section structure
   └── sections/          
       ├── cover.json      # Section-specific content
       ├── experience.json
       └── ...
   ```

2. **Provider Chain**
   ```
   DataProvider
   └── LanguageProvider
       └── FeedbacksProvider
           └── WindowProvider
               └── ThemeProvider
                   └── GlobalStateProvider
   ```

3. **Section Rendering Process**
   - `structure.json` defines section order and configuration
   - Each section loads content from corresponding JSON file
   - Content is processed through providers for:
     - Language localization
     - Theme application
     - Responsive layout
     - State management

### Component Hierarchy

```
App
├── AppFeedbacks (Modals, Notifications)
├── ImageCache
└── Portfolio
    ├── NavSidebar (Desktop)
    ├── NavHeaderMobile (Mobile)
    ├── MainSlider
    │   └── Section
    │       ├── SectionHeader
    │       └── SectionContent
    │           └── ArticleComponent
    └── NavTabController (Mobile)
```

### State Management

- **Global State**: Manages active section, navigation state
- **Window Provider**: Handles responsive breakpoints, device detection
- **Language Provider**: Manages translations and language switching
- **Feedback Provider**: Controls modals, notifications, loading states
- **Theme Provider**: Manages light/dark theme switching

This architecture allows for:
- Dynamic content management through JSON
- Seamless section transitions
- Responsive layout adaptation
- Multi-language support
- Theme customization

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

1. Install dependencies:

```bash
npm install
```

1. Start development server:

```bash
npm run dev
```

1. Build for production:

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

1. **Styling**:
   - Global SCSS variables in `src/styles/_variables.scss`
   - Component-specific styles in their respective `.scss` files
   - Bootstrap overrides in `src/styles/_customs.scss`

1. **Adding Languages**:
   - Add new language in `settings.json`
   - Add translations in each section's JSON file:

   ```json
   "locales": {
     "en": {"title": "Portfolio"},
     "es": {"title": "Portafolio"}
   }
   ```

## 📝 Project Structure

```text
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
