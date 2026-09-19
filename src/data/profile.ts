export interface Profile {
  name: string;
  title: string;
  avatar: string;
  contacts: {
    email: string;
    location: string;
  };
  socials: {
    name: string;
    url: string;
    icon: string;
  }[];
}

const profile: Profile = {
  name: 'Yusra Imran',
  title: 'Data Analyst',
  avatar: '/images/profile.png',
  contacts: {
    email: 'yusraimran@proton.me',
    location: 'Karachi, Pakistan',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/y-imran',
      icon: '/icons/github.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yusra-imran/',
      icon: '/icons/linkedin.svg',
    },
    {
      name: 'X',
      url: 'https://x.com/_yimran',
      icon: '/icons/x.svg',
    },
    {
      name: 'Tableau',
      url: 'https://public.tableau.com/app/profile/yusra.imran/vizzes',
      icon: '/icons/tableau.svg',
    },
  ],
};

export default profile;