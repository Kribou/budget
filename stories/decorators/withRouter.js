import StoryRouter from 'storybook-react-router';
import { linkTo } from '@storybook/addon-links';

const links = {
  '/login': linkTo('Login modal', 'Login modal'),
  '/account/reset/request': linkTo('Login modal', 'Password Reset Init'),
  '/account/register': linkTo('Login modal', 'Register'),
};

const routerProps = { initialEntries: ['/'] };

const router = StoryRouter(links, routerProps);

export default router;
