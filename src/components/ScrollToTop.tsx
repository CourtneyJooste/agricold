import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

interface ScrollToTopProps {
  scrollId?: string;
  config?: ScrollToOptions;
  children?: any;
}

export const useScrollToTop = ({ scrollId, config }: ScrollToTopProps) => {
  const history = useHistory()

  useEffect(() => {
    const unlisten = history.listen(() => {
      if (scrollId) {
        const el = document.getElementById(scrollId)
        if (el) el.scrollTo(config);
      } else {
        window.scrollTo(config)
      }
    })

    return () => { unlisten() }
  }, [scrollId, config, history])
}

const CONFIG: ScrollToOptions = { top: 0, left: 0, behavior: 'smooth' }

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollId, config = CONFIG, children }) => {
  useScrollToTop({ scrollId, config })
  return children || null
}

export default ScrollToTop
