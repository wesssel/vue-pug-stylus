import { storiesOf } from '@storybook/vue';

import ItemList from './index.vue';

storiesOf('Item List', module)
  .add('list of jazz artists', () => ({
    components: { ItemList },
    template: '<ItemList />',
  }))
