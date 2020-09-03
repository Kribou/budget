import { addDecorator } from '@storybook/react';
import withRouter from '../stories/decorators/withRouter';
import withIcons from '../stories/decorators/withIcons';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from '../stories/configs/contexts';
import withProvider from '../stories/decorators/withProvider';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withIcons);
addDecorator(withContexts(contexts));
addDecorator(withProvider);
addDecorator(withRouter);
addDecorator(withKnobs);
