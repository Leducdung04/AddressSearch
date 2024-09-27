import React, { useEffect, useState } from 'react';
import Wellcome from './src/screens/Wellcome';
import AddressSearchScreen from './src/screens/AddressSearchScreen';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); 
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);
  return showWelcome ? <Wellcome /> : <AddressSearchScreen />; 
}
