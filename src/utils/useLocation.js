import { useState, useEffect } from 'react';

/**
 * Custom hook to detect user's location based on IP address
 * Returns true if user is in India, false otherwise
 * Falls back to false (international pricing) if detection fails
 */
export const useLocation = () => {
    const [isIndia, setIsIndia] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const detectLocation = async () => {
            // Check localStorage cache first (valid for 24 hours)
            const cached = localStorage.getItem('userLocation');
            const cacheTime = localStorage.getItem('userLocationTime');
            const now = Date.now();
            const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

            if (cached && cacheTime && (now - parseInt(cacheTime)) < CACHE_DURATION) {
                const cachedIsIndia = cached === 'true';
                console.log('📍 Using cached location:', cachedIsIndia ? 'India (INR)' : 'International (USD)');
                setIsIndia(cachedIsIndia);
                setIsLoading(false);
                return;
            }

            try {
                // Try ipapi.co first (reliable, free, no API key needed)
                console.log('🌐 Detecting location...');
                const response = await fetch('https://ipapi.co/json/');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Debug logging
                console.log('📍 Location API response:', data);
                
                // Check country code (IN) or country name
                const countryCode = data.country_code?.toUpperCase();
                const countryName = data.country_name?.toLowerCase();
                
                if (countryCode === 'IN' || countryName === 'india') {
                    console.log('✅ Location detected: India - Showing INR pricing (₹10,000, ₹20,000, etc.)');
                    setIsIndia(true);
                    // Cache the result
                    localStorage.setItem('userLocation', 'true');
                    localStorage.setItem('userLocationTime', now.toString());
                } else {
                    console.log(`📍 Location detected: ${data.country_name || 'Unknown'} (${countryCode}) - Showing USD pricing`);
                    setIsIndia(false);
                    // Cache the result
                    localStorage.setItem('userLocation', 'false');
                    localStorage.setItem('userLocationTime', now.toString());
                }
            } catch (error) {
                console.error('❌ Location detection failed:', error);
                
                // Try fallback API
                try {
                    console.log('🔄 Trying fallback API...');
                    const fallbackResponse = await fetch('https://ip-api.com/json/?fields=country,countryCode,status');
                    const fallbackData = await fallbackResponse.json();
                    
                    if (fallbackData.status === 'success') {
                        const countryCode = fallbackData.countryCode?.toUpperCase();
                        const countryName = fallbackData.country?.toLowerCase();
                        
                        if (countryCode === 'IN' || countryName === 'india') {
                            console.log('✅ Location detected via fallback: India - Showing INR pricing');
                            setIsIndia(true);
                            localStorage.setItem('userLocation', 'true');
                            localStorage.setItem('userLocationTime', now.toString());
                        } else {
                            console.log(`📍 Location detected via fallback: ${fallbackData.country} - Showing USD pricing`);
                            setIsIndia(false);
                            localStorage.setItem('userLocation', 'false');
                            localStorage.setItem('userLocationTime', now.toString());
                        }
                    } else {
                        throw new Error('Fallback API also failed');
                    }
                } catch (fallbackError) {
                    console.error('❌ All location APIs failed:', fallbackError);
                    console.log('⚠️ Defaulting to international (USD) pricing');
                    setIsIndia(false);
                }
            } finally {
                setIsLoading(false);
            }
        };

        detectLocation();
    }, []);

    return { isIndia, isLoading };
};

