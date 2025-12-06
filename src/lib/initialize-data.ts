// Utility untuk seed/initialize data pelatihan
import { localDb } from './local-db';
import { seedTrainings } from './seed-trainings';

export async function initializeTrainings(): Promise<void> {
  try {
    // Check if trainings already exist
    const existingTrainings = await localDb.getAll();
    
    if (existingTrainings.length === 0) {
      console.log('Initializing trainings with seed data...');
      
      // Create all seed trainings
      for (const training of seedTrainings) {
        await localDb.create(training);
      }
      
      console.log(`Successfully created ${seedTrainings.length} trainings`);
    } else {
      console.log(`Found ${existingTrainings.length} existing trainings`);
    }
  } catch (error) {
    console.error('Error initializing trainings:', error);
  }
}

// Function to reset data (for development)
export async function resetTrainings(): Promise<void> {
  try {
    localDb.clear();
    await initializeTrainings();
    console.log('Trainings reset successfully');
  } catch (error) {
    console.error('Error resetting trainings:', error);
  }
}
