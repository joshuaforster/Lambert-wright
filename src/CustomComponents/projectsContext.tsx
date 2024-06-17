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
      title: 'Leicester Extension',
      description: 'This project involved the extension of a residential property in Leicester...',
      location: 'Leicester, UK',
      customerName: 'John Doe',
      projectType: 'renovation',
      images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
        'https://images.unsplash.com/photo-1580587771125-86005b3b5f79',
      ],
      keyFeatures: [
        'Air Conditioning',
        'Spacious Interiors',
        'Luxurious Master Suite',
      ],
    },
    {
      id: '2',
      title: 'Nottingham Renovation',
      description: 'Complete renovation of a historic building in Nottingham...',
      location: 'Nottingham, UK',
      customerName: 'Jane Smith',
      projectType: 'renovation',
      images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
        'https://images.unsplash.com/photo-1580587771125-86005b3b5f79',
      ],
      keyFeatures: [
        'Modern Kitchen',
        'Energy Efficient Windows',
        'Smart Home Integration',
      ],
    },
    {
      id: '3',
      title: 'Derby Rebuild',
      description: 'Rebuilding a commercial property in Derby from the ground up...',
      location: 'Derby, UK',
      customerName: 'Mark Johnson',
      projectType: 'rebuild',
      images: [
        'https://images.unsplash.com/photo-1556742208-999815fca738',
        'https://images.unsplash.com/photo-1580587771125-86005b3b5f79',
      ],
      keyFeatures: [
        'State-of-the-Art Infrastructure',
        'Sustainable Materials',
        'Open Plan Office',
      ],
    },
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