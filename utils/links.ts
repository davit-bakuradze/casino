type Sublink = {
   label: string
   href: string
}

type LinkGroup = {
   group: string
   sublinks: Sublink[]
}

export const links: LinkGroup[] = [
   {
      group: 'games',
      sublinks: [
         {
            label: 'slots',
            href: '/slots',
         },
         {
            label: 'live dealers',
            href: '/live-dealers',
         },
         {
            label: 'table games',
            href: '/table-games',
         },
         {
            label: 'video poker',
            href: '/video-poker',
         },
         {
            label: 'crash',
            href: '/crash',
         },
      ],
   },
   {
      group: 'promotions',
      sublinks: [
         {
            label: 'welcome bonus',
            href: '/welcome-bonus',
         },
         {
            label: 'cash back deals',
            href: '/cash-back-deals',
         },
         {
            label: 'weekly cashback',
            href: '/weekly-cashback',
         },
         {
            label: 'tournaments',
            href: '/tournaments',
         },
         {
            label: 'VIP club',
            href: '/vip-club',
         },
      ],
   },
   {
      group: 'banking',
      sublinks: [
         {
            label: 'deposite options',
            href: '/welcome-bonus',
         },
         {
            label: 'withdraw options',
            href: '/cash-back-deals',
         },
         {
            label: 'refund policty',
            href: '/weekly-cashback',
         },
         {
            label: 'payment security',
            href: '/tournaments',
         },
         {
            label: 'AML Policy',
            href: '/vip-club',
         },
      ],
   },
   {
      group: 'casino',
      sublinks: [
         {
            label: 'Terms & Conditions',
            href: '/welcome-bonus',
         },
         {
            label: 'Privacy Policy',
            href: '/cash-back-deals',
         },
         {
            label: 'Bonus Terms',
            href: '/weekly-cashback',
         },
         {
            label: 'Affiliate Program',
            href: '/tournaments',
         },
         {
            label: 'About CASINO',
            href: '/vip-club',
         },
      ],
   },
   {
      group: 'Customer Care',
      sublinks: [
         {
            label: 'Live Chat',
            href: '/welcome-bonus',
         },
         {
            label: 'Phone Support',
            href: '/cash-back-deals',
         },
         {
            label: 'Email Support',
            href: '/weekly-cashback',
         },
         {
            label: 'Help Desk',
            href: '/tournaments',
         },
         {
            label: 'Responsible Gaming',
            href: '/vip-club',
         },
      ],
   },
]
