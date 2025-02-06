import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'

// Provider imports - these wrap the app with different contexts
import {DataProvider} from "/src/providers/DataProvider"
import {LanguageProvider} from "/src/providers/LanguageProvider"
import {ThemeProvider} from "/src/providers/ThemeProvider"
import {GlobalStateProvider} from "/src/providers/GlobalStateProvider"
import {FeedbacksProvider} from "/src/providers/FeedbacksProvider"
import {WindowProvider} from "/src/providers/WindowProvider"

// Main component imports
import App from "/src/components/App.jsx"
import Preloader from "/src/components/Preloader.jsx"

// AppProviders component: Wraps all context providers in a specific order
const AppProviders = ({ children }) => (
    <DataProvider>
        <LanguageProvider>
            <FeedbacksProvider>
                <WindowProvider>
                    <ThemeProvider>
                        <GlobalStateProvider>
                            {children}
                        </GlobalStateProvider>
                    </ThemeProvider>
                </WindowProvider>
            </FeedbacksProvider>
        </LanguageProvider>
    </DataProvider>
)

// Container reference to prevent multiple initializations
let container = null

// Wait for DOM to be fully loaded before mounting React
document.addEventListener('DOMContentLoaded', function(event) {
    // Prevent double initialization
    if(container)
        return

    // Get the root element where React will mount
    container = document.getElementById('root')
    
    // Create and render the React application
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <Preloader>
                <AppProviders>
                    <App/>
                    <Analytics />
                </AppProviders>
            </Preloader>
        </StrictMode>
    )
})
