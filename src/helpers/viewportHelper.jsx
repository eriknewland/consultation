import { useState } from 'react';

export default function useViewportVisibility() {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true);
  };

  const onExitViewport = () => {
    setVisible(false);
  };

  return [visible, onEnterViewport, onExitViewport];
}
