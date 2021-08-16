import { render, screen } from '@testing-library/react';
import { LinkWrapper } from '.';
// import { LinkWrapper } from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>);

    const children = screen.getByText(/anything/i);

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-link');
  });
});
