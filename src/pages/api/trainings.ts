import { NextApiRequest, NextApiResponse } from 'next';
import { adminDb } from '@/lib/firebase-admin';
import { Training } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { status, limit } = req.query;
      
      let query = adminDb.collection('trainings');
      
      // Filter by status if provided
      if (status && status !== 'all') {
        query = query.where('status', '==', status);
      }
      
      // Add ordering
      query = query.orderBy('startDate', 'asc');
      
      // Add limit if provided
      if (limit) {
        query = query.limit(parseInt(limit as string));
      }
      
      const snapshot = await query.get();
      const trainings: Training[] = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        trainings.push({
          id: doc.id,
          ...data,
          startDate: data.startDate.toDate(),
          endDate: data.endDate.toDate(),
          createdAt: data.createdAt.toDate(),
          updatedAt: data.updatedAt.toDate(),
        } as Training);
      });
      
      res.status(200).json({ trainings });
    } catch (error) {
      console.error('Error fetching trainings:', error);
      res.status(500).json({ error: 'Failed to fetch trainings' });
    }
  } else if (req.method === 'POST') {
    try {
      const trainingData = req.body;
      
      // Add timestamps
      const now = new Date();
      const training = {
        ...trainingData,
        startDate: new Date(trainingData.startDate),
        endDate: new Date(trainingData.endDate),
        createdAt: now,
        updatedAt: now,
      };
      
      const docRef = await adminDb.collection('trainings').add(training);
      
      res.status(201).json({ 
        id: docRef.id, 
        message: 'Training created successfully' 
      });
    } catch (error) {
      console.error('Error creating training:', error);
      res.status(500).json({ error: 'Failed to create training' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}