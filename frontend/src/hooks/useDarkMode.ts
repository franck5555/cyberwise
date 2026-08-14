import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  return isDarkMode;
};

export default useDarkMode;