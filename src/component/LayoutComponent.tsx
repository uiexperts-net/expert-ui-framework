import React from 'react';

export interface LayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ header, content, footer }) => {
  return (
    <div>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default LayoutComponent;
