import { faker } from '@faker-js/faker';

export function createRandomNote() {
  return {
    title: faker.company.companyName(),
    description: faker.lorem.paragraph(),
    create_timestamp: new Date(),
    // create_timestamp: faker.date.past(),
  };
}
