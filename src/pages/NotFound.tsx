
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import GridBackground from "@/components/GridBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add matrix background style
    document.body.classList.add('bg-matrix-dark');
    
    return () => {
      document.body.classList.remove('bg-matrix-dark');
    };
  }, [location.pathname]);

  return (
    <>
      <GridBackground />
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <div className="text-center neo-blur p-8 rounded-lg max-w-md">
          <div className="text-6xl font-bold text-matrix-green mb-4 animate-pulse-glow">404</div>
          <h1 className="text-2xl font-bold mb-4 text-matrix-green">ACCESS DENIED</h1>
          <p className="text-matrix-green/80 mb-6">The resource you are looking for does not exist in this system.</p>
          <div className="inline-block">
            <Link 
              to="/" 
              className="matrix-button inline-flex items-center justify-center gap-2 px-6"
            >
              <span>RETURN HOME</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
