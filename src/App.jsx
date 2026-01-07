import { AppProvider } from './context/AppContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import AICoach from './components/AICoach';

function App() {
    return (
        <AppProvider>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <Header />

                    {/* Content */}
                    <MainContent />
                </div>

                {/* AI Coach */}
                <AICoach />
            </div>
        </AppProvider>
    );
}

export default App;
