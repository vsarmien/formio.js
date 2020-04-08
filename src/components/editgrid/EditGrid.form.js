import baseEditForm from '../_classes/component/Component.form';

import EditGridEditData from './editForm/EditGrid.edit.data';
import EditGridEditDisplay from './editForm/EditGrid.edit.display';
import EditGridEditTemplates from './editForm/EditGrid.edit.templates';

export default (...extend) => baseEditForm([
  {
    label: 'Templates',
    key: 'templates',
    weight: 5,
    components: EditGridEditTemplates,
  },
  {
    key: 'display',
    components: EditGridEditDisplay,
  },
  {
    key: 'data',
    components: EditGridEditData,
  },
], ...extend);
