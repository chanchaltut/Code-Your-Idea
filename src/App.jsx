import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

// Lazy load routes for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PlainBlogPage = lazy(() => import('./pages/PlainBlogPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const PlainArticlePage = lazy(() => import('./pages/PlainArticlePage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
      <p className="text-white/60 text-sm">Loading...</p>
    </div>
  </div>
);

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<PlainBlogPage />} />
          <Route path="/blog/:slug" element={<PlainArticlePage />} />
          <Route path="/blog-old" element={<BlogPage />} />
          <Route path="/blog-old/:slug" element={<ArticlePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
