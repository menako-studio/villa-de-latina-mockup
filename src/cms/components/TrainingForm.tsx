import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Training } from '@/types';

interface TrainingFormProps {
  training?: Training;
  onSubmit: (data: Partial<Training>) => Promise<void>;
  onCancel: () => void;
}

export default function TrainingForm({ training, onSubmit, onCancel }: TrainingFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: training ? {
      title: training.title,
      description: training.description,
      shortDescription: training.shortDescription,
      startDate: training.startDate.toISOString().slice(0, 16),
      endDate: training.endDate.toISOString().slice(0, 16),
      location: training.location,
      price: training.price,
      maxParticipants: training.maxParticipants,
      status: training.status,
      category: training.category,
      instructor: training.instructor,
      instructorBio: training.instructorBio,
      image: training.image,
    } : {},
  });

  const onFormSubmit = async (data: any) => {
    setLoading(true);
    try {
      await onSubmit({
        ...data,
        price: Number(data.price) || 0,
        maxParticipants: Number(data.maxParticipants),
        currentParticipants: training?.currentParticipants || 0,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {training ? 'Edit Pelatihan' : 'Tambah Pelatihan Baru'}
      </h2>

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Pelatihan *
            </label>
            <input
              type="text"
              {...register('title', { required: 'Judul pelatihan wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Singkat
            </label>
            <input
              type="text"
              {...register('shortDescription')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Deskripsi singkat untuk preview"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Lengkap *
            </label>
            <textarea
              rows={6}
              {...register('description', { required: 'Deskripsi wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Deskripsi lengkap pelatihan..."
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal & Waktu Mulai *
            </label>
            <input
              type="datetime-local"
              {...register('startDate', { required: 'Tanggal mulai wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.startDate && (
              <p className="text-red-600 text-sm mt-1">{errors.startDate.message}</p>
            )}
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal & Waktu Selesai *
            </label>
            <input
              type="datetime-local"
              {...register('endDate', { required: 'Tanggal selesai wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.endDate && (
              <p className="text-red-600 text-sm mt-1">{errors.endDate.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lokasi *
            </label>
            <input
              type="text"
              {...register('location', { required: 'Lokasi wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Villa Kuningan, Jawa Barat"
            />
            {errors.location && (
              <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori *
            </label>
            <input
              type="text"
              {...register('category', { required: 'Kategori wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Pembinaan UMKM, Kepemimpinan, dll"
            />
            {errors.category && (
              <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Harga (Rp)
            </label>
            <input
              type="number"
              {...register('price')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="0 untuk gratis"
            />
          </div>

          {/* Max Participants */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maksimal Peserta
            </label>
            <input
              type="number"
              {...register('maxParticipants')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Kosongkan jika tidak terbatas"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status *
            </label>
            <select
              {...register('status', { required: 'Status wajib dipilih' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Pilih Status</option>
              <option value="upcoming">Akan Datang</option>
              <option value="ongoing">Sedang Berlangsung</option>
              <option value="completed">Selesai</option>
              <option value="cancelled">Dibatalkan</option>
            </select>
            {errors.status && (
              <p className="text-red-600 text-sm mt-1">{errors.status.message}</p>
            )}
          </div>

          {/* Instructor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Instruktur *
            </label>
            <input
              type="text"
              {...register('instructor', { required: 'Nama instruktur wajib diisi' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            {errors.instructor && (
              <p className="text-red-600 text-sm mt-1">{errors.instructor.message}</p>
            )}
          </div>

          {/* Instructor Bio */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio Instruktur
            </label>
            <textarea
              rows={3}
              {...register('instructorBio')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Pengalaman dan latar belakang instruktur..."
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Gambar
            </label>
            <input
              type="url"
              {...register('image')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Menyimpan...' : (training ? 'Update' : 'Simpan')}
          </button>
        </div>
      </form>
    </div>
  );
}