// assets
import { IconDashboard, IconReportMoney, IconUserCheck } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconReportMoney, IconUserCheck };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'E-commerce',
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
      type: 'collapse',
      url: '/dashboard/pedidos',
      icon: icons.IconReportMoney,
      breadcrumbs: false,
      children: [
        {
          id: 'lista-pedidos',
          title: 'Lista Pedidos',
          type: 'item',
          url: '/dashboard/pedidos',
          // target: true
        },
        {
          id: 'lista-pedidos',
          title: 'Adicionar',
          type: 'item',
          url: '/dashboard/pedidos/adicionar',
          target: true
        },
        {
          id: 'lista-pedidos',
          title: 'Detalhes',
          type: 'item',
          url: '/dashboard/pedidos/detalhes',
          target: true
        }
      ]
    },
    {
      id: 'clientes',
      title: 'Clientes',
      type: 'item',
      url: '/dashboard/clientes',
      icon: icons.IconUserCheck,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
