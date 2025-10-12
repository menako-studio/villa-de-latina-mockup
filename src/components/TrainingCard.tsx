import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Training } from '@/types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface TrainingCardProps {
  training: Training;
}

export default function TrainingCard({ training }: TrainingCardProps) {
  const getStatusBadge = (status: Training['status']) => {
    const badges = {
      upcoming: 'bg-red-100 text-red-700 border border-red-200',
      ongoing: 'bg-green-100 text-green-700 border border-green-200',
      completed: 'bg-gray-100 text-gray-600 border border-gray-200',
      cancelled: 'bg-red-100 text-red-700 border border-red-200',
    };
    
    const labels = {
      upcoming: 'Akan Datang',
      ongoing: 'Sedang Berlangsung',
      completed: 'Selesai',
      cancelled: 'Dibatalkan',
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  // Generate placeholder image from Unsplash with relevant keywords
  const getImageUrl = () => {
    if (training.image) return training.image;
    const keywords = encodeURIComponent('training,meeting,conference,workshop');
    return `https://source.unsplash.com/800x600/?${keywords}&${training.id}`;
  };

  return (
    <Link href={`/training/${training.slug}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100">
        {/* Image Section - Meetup style with aspect ratio */}
        <div className="relative h-48 w-full bg-gray-200">
          <Image
            src={getImageUrl()}
            alt={training.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            {getStatusBadge(training.status)}
          </div>
          {training.price === 0 && (
            <div className="absolute top-3 left-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                GRATIS
              </span>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          {/* Date & Time */}
          <div className="flex items-center text-sm text-red-600 font-medium mb-2">
            <CalendarDaysIcon className="h-4 w-4 mr-2" />
            <span>
              {format(training.startDate, 'EEE, dd MMM • HH:mm', { locale: id })}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
            {training.title}
          </h3>
          
          {/* Location */}
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span>{training.location}</span>
          </div>
          
          {/* Participants */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <UserGroupIcon className="h-4 w-4 mr-2" />
              <span>
                {training.maxParticipants 
                  ? `${training.currentParticipants} dari ${training.maxParticipants} peserta`
                  : `${training.currentParticipants} peserta`
                }
              </span>
            </div>
            
            {training.price > 0 && (
              <span className="text-lg font-bold text-gray-900">
                Rp {training.price.toLocaleString('id-ID')}
              </span>
            )}
          </div>
          
          {/* Instructor */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Instruktur: <span className="font-medium text-gray-900">{training.instructor}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}