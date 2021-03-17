import { NoMatch } from './Components/NoMatch';
import { Table } from './Components/Table';

export const routes = [
    {
        path: '/table',
        component: Table,
    },
    {
        component: NoMatch,
    },
];
