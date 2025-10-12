import React, { useState } from 'react';
import Head from 'next/head';
import TrainingForm from '@/cms/components/TrainingForm';
import { useTrainings } from '@/hooks/useTrainings';
import { Training } from '@/types';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function CMSPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingTraining, setEditingTraining] = useState<Training | null>(null);
  const { trainings, loading } = useTrainings('all');

  const handleCreateTraining = async (data: Partial<Training>) => {
    try {
      const response = await fetch('/api/trainings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create training');
      }

      alert('Pelatihan berhasil dibuat!');
      setShowForm(false);
    } catch (error) {
      console.error('Error creating training:', error);
      alert('Gagal membuat pelatihan. Silakan coba lagi.');
    }
  };

  const handleUpdateTraining = async (data: Partial<Training>) => {
    if (!editingTraining) return;

    try {
      const response = await fetch(`/api/trainings/${editingTraining.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update training');
      }

      alert('Pelatihan berhasil diupdate!');
      setEditingTraining(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating training:', error);
      alert('Gagal mengupdate pelatihan. Silakan coba lagi.');
    }
  };

  const handleDeleteTraining = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus pelatihan ini?')) {
      return;
    }

    try {
      const response = await fetch(`/api/trainings/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete training');
      }

      alert('Pelatihan berhasil dihapus!');
    } catch (error) {
      console.error('Error deleting training:', error);
      alert('Gagal menghapus pelatihan. Silakan coba lagi.');
    }
  };

  const handleEdit = (training: Training) => {
    setEditingTraining(training);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTraining(null);
  };

  return (
    <>
      <Head>
        <title>CMS Admin - Villa Kuningan Training Center</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                CMS Admin - Villa Kuningan Training Center
              </h1>
              <div className="flex space-x-2">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {showForm ? (
            <TrainingForm
              training={editingTraining}
              onSubmit={editingTraining ? handleUpdateTraining : handleCreateTraining}
              onCancel={handleCancelForm}
            />
          ) : (
            <div>
              {/* Action Bar */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Daftar Pelatihan ({trainings.length})
                </h2>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Tambah Pelatihan
                </button>
              </div>

              {/* Training List */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                  <p className="mt-4 text-gray-500">Memuat data...</p>
                </div>
              ) : trainings.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Belum ada pelatihan yang dibuat</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Buat Pelatihan Pertama
                  </button>
                </div>
              ) : (
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Pelatihan
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tanggal
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Peserta
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Harga
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {trainings.map((training) => (
                          <tr key={training.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {training.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {training.category} • {training.instructor}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {training.startDate.toLocaleDateString('id-ID')}
                              </div>
                              <div className="text-sm text-gray-500">
                                {training.startDate.toLocaleTimeString('id-ID', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  training.status === 'upcoming'
                                    ? 'bg-blue-100 text-blue-800'
                                    : training.status === 'ongoing'
                                    ? 'bg-green-100 text-green-800'
                                    : training.status === 'completed'
                                    ? 'bg-gray-100 text-gray-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {training.status === 'upcoming'
                                  ? 'Akan Datang'
                                  : training.status === 'ongoing'
                                  ? 'Berlangsung'
                                  : training.status === 'completed'
                                  ? 'Selesai'
                                  : 'Dibatalkan'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {training.maxParticipants
                                ? `${training.currentParticipants}/${training.maxParticipants}`
                                : training.currentParticipants}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {training.price === 0
                                ? 'Gratis'
                                : `Rp ${training.price.toLocaleString('id-ID')}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() => handleEdit(training)}
                                  className="text-primary-600 hover:text-primary-900 p-1"
                                  title="Edit"
                                >
                                  <PencilIcon className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteTraining(training.id)}
                                  className="text-red-600 hover:text-red-900 p-1"
                                  title="Hapus"
                                >
                                  <TrashIcon className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}