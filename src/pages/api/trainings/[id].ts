import { NextApiRequest, NextApiResponse } from 'next';
import { adminDb } from '@/lib/firebase-admin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const doc = await adminDb.collection('trainings').doc(id as string).get();
      
      if (!doc.exists) {
        return res.status(404).json({ error: 'Training not found' });
      }
      
      const data = doc.data();
      const training = {
        id: doc.id,
        ...data,
        startDate: data.startDate.toDate(),
        endDate: data.endDate.toDate(),
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      };
      
      res.status(200).json({ training });
    } catch (error) {
      console.error('Error fetching training:', error);
      res.status(500).json({ error: 'Failed to fetch training' });
    }
  } else if (req.method === 'PUT') {
    try {
      const trainingData = req.body;
      
      // Update timestamp
      const updatedTraining = {
        ...trainingData,
        startDate: new Date(trainingData.startDate),
        endDate: new Date(trainingData.endDate),
        updatedAt: new Date(),
      };
      
      await adminDb.collection('trainings').doc(id as string).update(updatedTraining);
      
      res.status(200).json({ message: 'Training updated successfully' });
    } catch (error) {
      console.error('Error updating training:', error);
      res.status(500).json({ error: 'Failed to update training' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await adminDb.collection('trainings').doc(id as string).delete();
      
      res.status(200).json({ message: 'Training deleted successfully' });
    } catch (error) {
      console.error('Error deleting training:', error);
      res.status(500).json({ error: 'Failed to delete training' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}