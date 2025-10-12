import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, where, Timestamp, doc, DocumentSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Training } from '@/types';

export function useTrainings(filter?: 'upcoming' | 'ongoing' | 'all') {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If Firebase is not configured, return demo data
    if (!db) {
      setTrainings([]);
      setLoading(false);
      setError('Firebase not configured. Please check environment variables.');
      return;
    }

    let q = query(collection(db, 'trainings'), orderBy('startDate', 'asc'));

    if (filter === 'upcoming') {
      q = query(
        collection(db, 'trainings'),
        where('startDate', '>', Timestamp.now()),
        orderBy('startDate', 'asc')
      );
    } else if (filter === 'ongoing') {
      const now = Timestamp.now();
      q = query(
        collection(db, 'trainings'),
        where('startDate', '<=', now),
        where('endDate', '>=', now),
        orderBy('startDate', 'asc')
      );
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot: any) => {
        const trainingsData: Training[] = [];
        snapshot.forEach((doc: any) => {
          const data = doc.data();
          trainingsData.push({
            id: doc.id,
            ...data,
            startDate: data.startDate.toDate(),
            endDate: data.endDate.toDate(),
            createdAt: data.createdAt.toDate(),
            updatedAt: data.updatedAt.toDate(),
          } as Training);
        });
        setTrainings(trainingsData);
        setLoading(false);
      },
      (error: any) => {
        console.error('Error fetching trainings:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [filter]);

  return { trainings, loading, error };
}

export function useTraining(id: string) {
  const [training, setTraining] = useState<Training | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    // If Firebase is not configured, return error
    if (!db) {
      setTraining(null);
      setLoading(false);
      setError('Firebase not configured. Please check environment variables.');
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, 'trainings', id),
      (docSnapshot: DocumentSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setTraining({
            id: docSnapshot.id,
            ...data,
            startDate: data?.startDate.toDate(),
            endDate: data?.endDate.toDate(),
            createdAt: data?.createdAt.toDate(),
            updatedAt: data?.updatedAt.toDate(),
          } as Training);
        } else {
          setTraining(null);
        }
        setLoading(false);
      },
      (error: any) => {
        console.error('Error fetching training:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [id]);

  return { training, loading, error };
}