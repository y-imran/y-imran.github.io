export interface TimelineItem {
  title: string;
  subTitle: string;
  description: string;
}

export interface Timeline {
  education: TimelineItem[];
  projects: TimelineItem[];
  achievements: TimelineItem[];
}

const timeline: Timeline = {
  projects  : [
    {
      title: 'UFO Sightings',
      subTitle: 'Viz of the Day (VOTD)',
      description:
        'The Viz of the Day achievement on Tableau Public is awarded for the creative interactive dashboard titled "UFO Sighting Patterns", marking my first-ever submission for MakeoverMonday. The winning dashboard features an advanced radial clock visualization mapping out 1,317 reported UFO sightings, highlighting that 47% of events occur between 6 PM and 10 PM.',
    },
    {
      title: 'Laboratory Management System',
      subTitle: 'Tableau Public',
      description:
        'Laboratory Management System visualization is a comprehensive healthcare dashboard featured on my Tableau Public profile, seamlessly bridging my background in Clinical Laboratory Sciences with my expertise in data analytics. The project transforms complex raw diagnostic and operational data into clear, actionable business intelligence. It focuses on critical medical metrics such as test volumes, turnaround times, and sample workflows, demonstrating how domain-driven data storytelling can optimize laboratory efficiency and drive better clinical decision-making.',
    },
  ],
  achievements: [
    {
      title: 'Salesforce Certified Tableau Desktop Foundations',
      subTitle: 'Tableau Desktop Specialist',
      description: "The certificate validates the foundational skills and a core understanding of Tableau Desktop. It verifies a hands-on ability to connect to data sources, import datasets, perform data preparation, build interactive charts, and write calculations."
    },
    {
      title: 'From Self-Taught to Viz of the Day: The Journey',
      subTitle: 'Guest Speaker',
      description: 'Organized by the Pakistan Tableau User Group for their sixth virtual meetup, this session showcases how a Viz of the Day (VOTD) begins with curiosity, a laptop, and no formal data background. In this session, I walk the audience through the story behind my first Tableau Viz of the Day ("UFO Sighting Patterns"), explaining how the idea took shape, the design decisions made along the way, the parts that did not work, and what I learned building a data portfolio completely from scratch.'
    },
  ],
  education: [
    {
      title: 'Jinnah Sindh Medical University',
      subTitle: '2022 — 2026',
      description:
        'Bachelor of Medical Technology',
    },
    {
      title: 'SMB Fatima Jinnah College',
      subTitle: '2019 — 2021',
      description:
        'Higher Secondary Certificate (HSC) in Pre-Medical',
    },
  ],
};

export default timeline;