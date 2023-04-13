/* eslint-disable react/jsx-filename-extension */
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Routes, useLocation,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import HomePage from './components/homepage';
import AboutUs from './components/aboutUs/aboutUs';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Process from './components/process/process';
import Portfolio from './components/portfolio/portfolio';
import Team from './components/team/team';
import Testimonials from './components/testimonials/testimonials';
import Classroom from './components/classroom/classroom';
import './styles/animatedRoutes.css';

const HomePage = lazy(() => import('./components/homepage/homepage'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={1000}>
        <Suspense fallback={(
          <div
            style={{
              height: '100vh',
              width: '100%',
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMTEwNDU0LTViMzMtNDQxNi1iZjliLTcyOTkyYzdjYjU2ZlwvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9LDpLmLlbA507H7fKa8aEDxFr8k3SlwCGC1zuJ13d1w) no-repeat center center fixed',
              fontSize: '3rem',
            }}
          >
            {/* Loading... */}
          </div>
)}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/classroom" element={<Classroom />} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />

    </Router>
  );
}

export default App;
