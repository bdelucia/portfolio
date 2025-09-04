import { useState, useEffect } from 'react';

interface UseVerticalScrollOptions {
  scrollOffset?: number;
  bottomThreshold?: number;
  scrollBehavior?: ScrollBehavior;
}

interface UseVerticalScrollReturn {
  currentSection: number;
  totalSections: number;
  isDownVisible: boolean;
  isMobileLandscape: boolean;
  scrollToNextSection: () => void;
}

const useVerticalScroll = ({
  scrollOffset = 0.9,
  bottomThreshold = 50,
  scrollBehavior = 'smooth',
}: UseVerticalScrollOptions = {}): UseVerticalScrollReturn => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isDownVisible, setIsDownVisible] = useState(true);

  // Detect if we're on mobile landscape
  const isMobileLandscapeCheck = () => {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return isLandscape && isMobile;
  };

  const [isMobileLandscape, setIsMobileLandscape] = useState(
    isMobileLandscapeCheck()
  );

  // Get the actual viewport height accounting for browser chrome
  const getViewportHeight = () => {
    return window.visualViewport?.height || window.innerHeight;
  };

  // Calculate total sections based on page height
  const getTotalSections = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = getViewportHeight();
    return Math.ceil(totalHeight / viewportHeight);
  };

  const [totalSections, setTotalSections] = useState(getTotalSections());

  const scrollToNextSection = () => {
    const viewportHeight = getViewportHeight();
    const totalHeight = document.documentElement.scrollHeight;
    const totalSectionsCount = getTotalSections();
    const nextSection = currentSection + 1;

    const scrollOffsetValue = isMobileLandscape
      ? viewportHeight * scrollOffset
      : viewportHeight;

    // If going to last section and it's shorter than viewport, scroll to bottom
    if (nextSection === totalSectionsCount - 1) {
      window.scrollTo({
        top: totalHeight - viewportHeight,
        behavior: scrollBehavior,
      });
    } else {
      const scrollTo = nextSection * scrollOffsetValue;
      window.scrollTo({
        top: scrollTo,
        behavior: scrollBehavior,
      });
    }

    setCurrentSection(nextSection);
  };

  // Update state based on scroll position and viewport changes
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = getViewportHeight();
      const totalHeight = document.documentElement.scrollHeight;
      const totalSectionsCount = getTotalSections();

      // Check if we're at the bottom
      const isAtBottom =
        scrolled + viewportHeight >= totalHeight - bottomThreshold;

      const currentSectionNum = isAtBottom
        ? totalSectionsCount - 1
        : Math.round(scrolled / viewportHeight);

      setCurrentSection(currentSectionNum);
      setTotalSections(totalSectionsCount);
      setIsDownVisible(!isAtBottom);
    };

    const handleViewportChange = () => {
      setIsMobileLandscape(isMobileLandscapeCheck());
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleViewportChange);

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleViewportChange);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          'resize',
          handleViewportChange
        );
      }
    };
  });

  return {
    currentSection,
    totalSections,
    isDownVisible,
    isMobileLandscape,
    scrollToNextSection,
  };
};

export default useVerticalScroll;
