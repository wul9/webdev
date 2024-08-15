export interface Project {
  name: string;
  progress: string;
  tasks: string[];
  id: string;
  members: string[];
}

export interface Member {
  firstName: string;
  lastName: string;
  profilePic: string;
  projects: string[];
  email: string;
  id: string;
}
