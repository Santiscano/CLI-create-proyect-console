export const createAuthContextInterface = () => {
  const data = `export interface Data {
  email?: string;
  password?: string;
  username?: string;
}

export interface Strategy{
  signup( data:Data ): string;
  signin( data:Data ): string;
}

`;

  return data;
};
