import jewelPage from '../../public/Jewelpage.jpg';
import leMondays from '../../public/leMondays.png';
import managementSoftware from '../../public/ManagementSoftware.png';
import carelyoDashboard from '../../public/CarelyoDashboard.png';
import Ecommerce from '../../public/ECommerce.png';

export const items = [
  {
    title: 'User Management Software',
    action: 'Action 1',
    image: managementSoftware,
    content:
      'This is the work I did for my exam. It is more of a mockup/prototype than a finished project. The project is based on the work I did at Swedcon during my internship, for a project called Carelyo. In short, the application consumes an API, which I also created, and displays metrics regarding the users. Not shown in the images is the User/Revenue table where users information is displayed along with the revenue from the tickets that have been sold. The backend is built with C# .Net 6 and Entity Framework, while the frontend is built with React + Vite.',
    alt: 'Picture of user management website',
  },
  {
    title: 'Le Mondays',
    action: 'Action 2',
    image: leMondays,
    content:
      'This website is built using React + Vite and hosted on Netlify. It serves as a hub for the band Le Mondays, featuring a set of links with animations shown on the full site. ',
    alt: 'Picture of website le-mondays',
    link: (
      <span>
        You can visit the site here:&nbsp;
        <a
          href='https://le-mondays.com'
          target='_blank'
          className='text-sky-500 hover:underline'
        >
          le-mondays.com
        </a>
      </span>
    ),
  },
  {
    title: 'Carelyo Dashboard',
    action: 'Action 3',
    image: carelyoDashboard,
    content:
      'This is the website I worked on during my internship. It is built using React + Vite. The web app serves as an internal system that, similar to my exam work, displays information and relevant metrics for the admin regarding users. I contributed to most parts of the website, but I spent the most time working on the dashboard. The dashboard uses react-grid-layout to allow the user to create their own widgets and set their size and location within the dashboard container. Users can open a menu where they are prompted to specify the type of component they want to add and the information they want to display. In total, I committed around 20,000 lines of code just for this site.',
    alt: 'Picture of Carelyo Dashboard',
  },

  {
    title: 'Untitled Jewelry Website',
    action: 'Action 5',
    image: jewelPage,
    content:
      'This website is built using React + Vite with Tailwind. I created this during my internship. It is an e-commerce site for a jeweler, incorporating a lot of animation and components to make the site stand out. All the functionality is there except, at the time of creation, no backend existed and there was no login/ability to purchase.',
    alt: 'picture of untitled jewelry page',
  },
];
