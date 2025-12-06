import { NextApiRequest, NextApiResponse } from 'next';
import { localDb } from '@/lib/local-db';
import { initializeTrainings } from '@/lib/initialize-data';
import { Training } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Auto-initialize data if empty (first time load)
      await initializeTrainings();
      
      const { status, limit } = req.query;
      
      const trainings = await localDb.getAll({
        status: status as string,
        limit: limit ? parseInt(limit as string) : undefined,
      });
      
      res.status(200).json({ trainings });
    } catch (error) {
      console.error('Error fetching trainings:', error);
      res.status(500).json({ error: 'Failed to fetch trainings' });
    }
  } else if (req.method === 'POST') {
    try {
      const trainingData = req.body;
      
      // Validate required fields
      if (!trainingData.title || !trainingData.description || !trainingData.startDate || !trainingData.endDate) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const training = await localDb.create(trainingData);
      
      res.status(201).json({ 
        id: training.id, 
        message: 'Training created successfully',
        training
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