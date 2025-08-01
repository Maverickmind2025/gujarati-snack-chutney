import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 w-[120px] h-[50px] rounded-lg transition-all duration-300",
        "bg-primary text-primary-foreground font-medium text-sm",
        "shadow-warm hover:brightness-90 active:scale-95",
        "flex items-center justify-center gap-1",
        isVisible 
          ? "opacity-100 translate-y-0 pointer-events-auto" 
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <span className="text-lg">↑</span>
      <span>Top</span>
    </button>
  );
};

export default BackToTop;