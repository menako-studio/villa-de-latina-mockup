import React from 'react';
import TrainingCard from './TrainingCard';
import { Training } from '@/types';

interface TrainingListProps {
  trainings: Training[];
  loading?: boolean;
  title?: string;
}

export default function TrainingList({ trainings, loading, title }: TrainingListProps) {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
        ))}
      </div>
    );
  }

  if (trainings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Belum ada pelatihan yang tersedia</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainings.map((training) => (
          <TrainingCard key={training.id} training={training} />
        ))}
      </div>
    </div>
  );
}