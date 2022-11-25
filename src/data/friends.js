import { faker } from "@faker-js/faker";

const PARAGRAPHS = 5;

const friends = [
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face1.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face2.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face3.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face4.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face1.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face2.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face3.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face4.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face1.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face2.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face3.svg",
  },
  {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph(PARAGRAPHS),
    src: "/face4.svg",
  },
];

export default friends;
