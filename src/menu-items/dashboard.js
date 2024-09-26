// assets
import { IconDashboard, IconReportMoney } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconReportMoney };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard da Iô',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Visão Geral',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'pedidos',
      title: 'Pedidos',
      type: 'item',
      url: '/dashboard/pedidos',
      icon: icons.IconReportMoney,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
