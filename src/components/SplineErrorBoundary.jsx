import React from 'react';

/**
 * Error Boundary specifically for Spline 3D components
 * Prevents the entire app from crashing when Spline fails to load
 * (e.g., due to network issues, WebGL unavailability, etc.)
 */
class SplineErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error for debugging (only in development)
        if (process.env.NODE_ENV === 'development') {
            console.warn('Spline 3D model failed to load:', error);
            console.warn('Error info:', errorInfo);
        }
        
        // Optionally log to error tracking service
        if (window.gtag) {
            window.gtag('event', 'exception', {
                description: `Spline Error: ${error?.toString()}`,
                fatal: false,
            });
        }
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return this.props.fallback || (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <svg 
                                className="w-16 h-16 text-white/40" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
                                />
                            </svg>
                        </div>
                        <p className="text-white/60 text-sm">3D Scene Unavailable</p>
                        <p className="text-white/40 text-xs mt-2">Please check your connection</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default SplineErrorBoundary;



