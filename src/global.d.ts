type Message = {
  id: number;
  text: string;
  createdAt: string;
  updatedAt?: string;
  user: {
    username: string;
    name: string;
  };
};
