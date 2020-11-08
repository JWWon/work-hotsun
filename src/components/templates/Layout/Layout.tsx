import React from 'react';

import * as s from './Layout.style';

const Layout: React.FC = ({ children }) => (
  <div>
    <s.GlobalStyle />
    {children}
  </div>
);

export default Layout;
