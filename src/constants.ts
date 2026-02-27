export const PAGES = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  EDUCATION: "education",
  COURSES: "courses",
  PROJECTS: "projects",
  CONTACTS: "contacts",
} as const;

export const MENU = [
  {
    name: PAGES.ABOUT,
  },
  {
    name: PAGES.EXPERIENCE,
  },
  {
    name: PAGES.EDUCATION,
  },
  {
    name: PAGES.COURSES,
  },
  {
    name: PAGES.PROJECTS,
  },
  {
    name: PAGES.CONTACTS,
  },
];

export const EXPERIENCE = {
  company: "company",
  active: "active",
  title: "title",
  start: "start",
  end: "end",
  description: "description",
};

export const COURSES = {
  valid: "valid",
  name: "name",
  school: "school",
  type: "type",
  description: "description",
};

export const EDUCATION = {
  name: "name",
  speciality: "speciality",
  degree: "degree",
};

export const PROJECTS = {
  description: "description",
  stack: "stack",
  github: "github",
  deploy: "deploy",
};
