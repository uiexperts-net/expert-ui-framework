import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LayoutComponent from './LayoutComponent';

test('renders layout with header, content, and footer', () => {
  render(
    <LayoutComponent
      header={<h1>Test Header</h1>}
      content={<p>Test Content</p>}
      footer={<p>Test Footer</p>}
    />
  );

  // Check that header, content, and footer are rendered correctly
  const header = screen.getByText(/test header/i);
  const content = screen.getByText(/test content/i);
  const footer = screen.getByText(/test footer/i);

  expect(header).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

test('renders dynamic content in layout', () => {
  const dynamicHeader = "Dynamic Header";
  const dynamicContent = "Dynamic Content";
  const dynamicFooter = "Dynamic Footer";

  render(
    <LayoutComponent
      header={<h1>{dynamicHeader}</h1>}
      content={<p>{dynamicContent}</p>}
      footer={<p>{dynamicFooter}</p>}
    />
  );

  // Verify dynamic values are rendered
  const header = screen.getByText(dynamicHeader);
  const content = screen.getByText(dynamicContent);
  const footer = screen.getByText(dynamicFooter);

  expect(header).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
