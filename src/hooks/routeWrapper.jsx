import React from 'react';
import { Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function RouteWrapper() {
  return (
    <TransitionGroup>
      <CSSTransition key={window.location.pathname} classNames="fade" timeout={3000}>
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
}

export default RouteWrapper;
