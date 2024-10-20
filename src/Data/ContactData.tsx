export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}

const today = new Date();

export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 2,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 3,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 4,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 5,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 4,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 5,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 4,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
  {
    id: 5,
    name: "Manish Chaurasiya",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/ ${today.getFullYear()}`,
    preference: "Work from home",
  },
];
