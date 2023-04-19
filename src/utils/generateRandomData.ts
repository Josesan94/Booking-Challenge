import { faker } from '@faker-js/faker';
import { Staff } from '../App';

export const generateRandomStaff = (count: number) => {
  const staff:Staff[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const isAvailable = Math.random() < 0.5;
    staff.push({ firstName: `${firstName}`, lastName:`${lastName}`, isAvailable: isAvailable });
  }
  return staff;
  };


