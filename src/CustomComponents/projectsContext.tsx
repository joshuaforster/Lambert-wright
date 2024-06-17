import React, { createContext, useContext, ReactNode } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  customerName: string;
  images: string[];
  keyFeatures: string[];
  projectType: string;
}

interface ProjectsContextProps {
  projects: Project[];
}

interface ProjectsProviderProps {
  children: ReactNode;
}

const ProjectsContext = createContext<ProjectsContextProps | undefined>(undefined);

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Burton Overy Bathroom Renovation',
      description: 'This project involved the complete renovation of a luxurious bathroom in a charming residence in Burton Overy. The transformation included the installation of modern fixtures, elegant tiling, and bespoke cabinetry, enhancing both functionality and aesthetic appeal. The serene ambiance and meticulous craftsmanship reflect our commitment to excellence in bathroom renovations.',
      location: 'Burton Overy, UK',
      customerName: 'John Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_01.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_02.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_03.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_04.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_05.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_06.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_07.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_09.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_10.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_11.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_12.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_14.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_15.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_16.jpg',
        '/images/Renovations/Full House Renovation Burton Overy/BurtonOvery3_17.jpg'
      ],
      keyFeatures: [
        'Modern Fixtures and Fittings',
        'Elegant and Functional Tiling',
        'Bespoke Cabinetry for Storage',
        'Serene and Luxurious Ambiance',
      ],
    },
    {
      id: '2',
      title: 'Great Glen Bathroom',
      description: 'A stunning bathroom renovation project in Great Glen...',
      location: 'Great Glen, UK',
      customerName: 'John Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Bathroom Great Glen/greatglen01.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen02.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen03.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen04.jpg',
        '/images/Renovations/Bathroom Great Glen/greatglen05.jpg',
      ],
      keyFeatures: [
        'Modern Fixtures',
        'Luxurious Bath',
        'Spa-like Ambience',
      ],
    },
    {
      id: '3',
      title: 'Bathroom Burton Overy',
      description: 'A beautiful bathroom renovation project in Burton Overy...',
      location: 'Burton Overy, Leicester, UK',
      customerName: 'Jane Doe',
      projectType: 'renovation',
      images: [
        '/images/Renovations/Bathroom Burton Overy/Bathroom01.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom02.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom03.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom04.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom05.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom06.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom07.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom08.jpg',
        '/images/Renovations/Bathroom Burton Overy/Bathroom09.jpg',
      ],
      keyFeatures: [
        'Modern Fixtures',
        'Luxurious Bath',
        'Spa-like Ambience',
      ],
    },
    {
      id: '4',
      title: 'Kitchen Extension Leicester',
      description: 'Extension and modernization of a kitchen space in Leicester...',
      location: 'Leicester, UK',
      customerName: 'AB Dixon',
      projectType: 'extension',
      images: [
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen1.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen2.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen3.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen4.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen5.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen6.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen7.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen8.jpg',
        '/images/Renovations/Kitchen Extension Leicester/abdixon_kitchen10.jpg',
      ],
      keyFeatures: [
        'Spacious Layout',
        'Natural Light Integration',
        'Modern Appliances',
      ],
    }
    // Add more projects as needed
  ];

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};