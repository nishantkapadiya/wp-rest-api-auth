// pages/api/generate-token.js
import { generateAndValidateToken } from '../utils/auth';

export default async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  try {
    const username = 'vra';
    const password = 'this.admin';

    const isValid = await generateAndValidateToken(username, password);

    if (isValid) {
      res.status(200).json({ message: 'Token is valid' });
    } else {
      res.status(401).json({ message: 'Token is not valid' });
    }
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};
