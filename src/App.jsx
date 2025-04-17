import { useEffect, useState } from 'react';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('App installed');
        } else {
          console.log('App installation rejected');
        }
        setDeferredPrompt(null);
        setShowInstallBtn(false);
      });
    }
  };

  return (
    <div>
      <h1>{`Ajeeth `}</h1>
      {showInstallBtn && <button onClick={handleInstallClick}>Install App</button>}
    </div>
  );
}

export default App;