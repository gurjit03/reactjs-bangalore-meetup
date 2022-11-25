import { faker } from "@faker-js/faker";

const MIN_AGE = 20;
const MAX_AGE = 30;

const friends = [
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face1.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face2.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face3.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face4.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face1.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face2.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face3.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face4.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face1.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face2.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face3.svg",
  },
  {
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: MIN_AGE, max: MAX_AGE }),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(),
    src: "/face4.svg",
  },
];

export default friends;
