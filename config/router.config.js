module.exports = [
  {
    path: '/about',
    name: '导航1',
    icon: 'Mail',
  },
  {
    name: '导航2',
    icon: 'MoveToInbox',
    items: [
      {
        path: '/about',
        name: '子导航1',
        icon: 'MoveToInbox',
      },
      {
        path: '/about',
        name: '子导航2',
        icon: 'MoveToInbox',
      },
      {
        path: '/about',
        name: '子导航3',
        icon: 'MoveToInbox',
      },
    ],
  },
  {
    path: '/',
    name: '导航3',
    icon: 'Backup',
  },
  {
    name: '分割线',
  },
  {
    path: '/test',
    name: '导航4',
    icon: 'Build',
  },
]