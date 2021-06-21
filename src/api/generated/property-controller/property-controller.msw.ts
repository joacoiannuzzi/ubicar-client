/*
 * Generated by orval v5.4.8 🍺
 * Do not edit manually.
 * Api Documentation
 * Api Documentation
 * OpenAPI spec version: 1.0
 */
import { rest } from "msw";
import faker from "faker";

export const getCreatePropertyUsingPOSTMock = () => ({
  address: {
    department: faker.random.word(),
    id: (() => faker.datatype.uuid())(),
    number: faker.datatype.number(),
    postalCode: faker.random.word(),
    street: faker.random.word(),
    town: {
      city: {
        id: (() => faker.datatype.uuid())(),
        name: faker.random.word(),
        state: {
          country: {
            id: (() => faker.datatype.uuid())(),
            name: faker.random.word(),
          },
          id: (() => faker.datatype.uuid())(),
          name: faker.random.word(),
        },
      },
      id: (() => faker.datatype.uuid())(),
      name: faker.random.word(),
    },
  },
  amenities: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    id: (() => faker.datatype.uuid())(),
    label: faker.random.word(),
    properties: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
      () => ({
        address: {
          department: faker.random.word(),
          id: (() => faker.datatype.uuid())(),
          number: faker.datatype.number(),
          postalCode: faker.random.word(),
          street: faker.random.word(),
          town: {
            city: {
              id: (() => faker.datatype.uuid())(),
              name: faker.random.word(),
              state: {
                country: {
                  id: (() => faker.datatype.uuid())(),
                  name: faker.random.word(),
                },
                id: (() => faker.datatype.uuid())(),
                name: faker.random.word(),
              },
            },
            id: (() => faker.datatype.uuid())(),
            name: faker.random.word(),
          },
        },
        comments: faker.random.word(),
        condition: faker.helpers.randomize(["RENT", "SALE"]),
        constructionDate: faker.datatype.number(),
        contacts: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            email: (() => faker.internet.email())(),
            id: (() => faker.datatype.uuid())(),
            label: faker.random.word(),
          })
        ),
        coveredSquareFoot: faker.datatype.number(),
        creationDate: faker.date.recent(),
        environments: faker.datatype.number(),
        expenses: faker.datatype.number(),
        fullBaths: faker.datatype.number(),
        id: (() => faker.datatype.uuid())(),
        levels: faker.datatype.number(),
        likes: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            birthDate: faker.helpers.randomize([
              faker.date.recent(),
              undefined,
            ]),
            email: (() => faker.internet.email())(),
            id: (() => faker.datatype.uuid())(),
            likedProperties: [
              ...Array(faker.datatype.number({ min: 1, max: 10 })),
            ].map(() => ({
              address: {
                department: faker.random.word(),
                id: (() => faker.datatype.uuid())(),
                number: faker.datatype.number(),
                postalCode: faker.random.word(),
                street: faker.random.word(),
                town: {
                  city: {
                    id: (() => faker.datatype.uuid())(),
                    name: faker.random.word(),
                    state: {
                      country: {
                        id: (() => faker.datatype.uuid())(),
                        name: faker.random.word(),
                      },
                      id: (() => faker.datatype.uuid())(),
                      name: faker.random.word(),
                    },
                  },
                  id: (() => faker.datatype.uuid())(),
                  name: faker.random.word(),
                },
              },
              comments: faker.random.word(),
              condition: faker.helpers.randomize(["RENT", "SALE"]),
              constructionDate: faker.datatype.number(),
              contacts: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                email: (() => faker.internet.email())(),
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              })),
              coveredSquareFoot: faker.datatype.number(),
              creationDate: faker.date.recent(),
              environments: faker.datatype.number(),
              expenses: faker.datatype.number(),
              fullBaths: faker.datatype.number(),
              id: (() => faker.datatype.uuid())(),
              levels: faker.datatype.number(),
              links: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
                () => faker.random.word()
              ),
              materials: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              })),
              openHouse: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                day: faker.date.recent(),
                finalTime: faker.random.word(),
                id: (() => faker.datatype.uuid())(),
                initialTime: faker.random.word(),
              })),
              parkDescription: faker.random.word(),
              price: faker.datatype.number(),
              rooms: faker.datatype.number(),
              security: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              })),
              squareFoot: faker.datatype.number(),
              style: {
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              },
              title: faker.random.word(),
              toilets: faker.datatype.number(),
              type: faker.helpers.randomize([
                "Casa",
                "Cochera",
                "Compartido",
                "Consultorio",
                "Country",
                "Departamento",
                "Edificio",
                "Flat",
                "Galpon",
                "Hotel",
                "Local",
                "Loft",
                "Oficina",
                "PH",
                "Quinta",
                "Terreno",
              ]),
            })),
            password: faker.helpers.randomize([faker.random.word(), undefined]),
            userName: faker.random.word(),
            userOrigin: faker.helpers.randomize(["GOOGLE", "UBICAR"]),
            userRole: {
              active: faker.datatype.boolean(),
              creationDate: faker.date.recent(),
              description: faker.random.word(),
              id: (() => faker.datatype.uuid())(),
              permissions: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                active: faker.datatype.boolean(),
                creationDate: faker.date.recent(),
                description: faker.random.word(),
                id: (() => faker.datatype.uuid())(),
                slug: faker.random.word(),
                title: faker.random.word(),
                userRoles: [
                  ...Array(faker.datatype.number({ min: 1, max: 10 })),
                ].map(() => ({
                  active: faker.datatype.boolean(),
                  creationDate: faker.date.recent(),
                  description: faker.random.word(),
                  id: (() => faker.datatype.uuid())(),
                  slug: faker.random.word(),
                  title: faker.random.word(),
                })),
              })),
              slug: faker.random.word(),
              title: faker.random.word(),
            },
          })
        ),
        links: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() =>
          faker.random.word()
        ),
        materials: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            id: (() => faker.datatype.uuid())(),
            label: faker.random.word(),
          })
        ),
        openHouse: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            day: faker.date.recent(),
            finalTime: faker.random.word(),
            id: (() => faker.datatype.uuid())(),
            initialTime: faker.random.word(),
          })
        ),
        parkDescription: faker.random.word(),
        price: faker.datatype.number(),
        rooms: faker.datatype.number(),
        security: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            id: (() => faker.datatype.uuid())(),
            label: faker.random.word(),
          })
        ),
        squareFoot: faker.datatype.number(),
        style: {
          id: (() => faker.datatype.uuid())(),
          label: faker.random.word(),
        },
        title: faker.random.word(),
        toilets: faker.datatype.number(),
        type: faker.helpers.randomize([
          "Casa",
          "Cochera",
          "Compartido",
          "Consultorio",
          "Country",
          "Departamento",
          "Edificio",
          "Flat",
          "Galpon",
          "Hotel",
          "Local",
          "Loft",
          "Oficina",
          "PH",
          "Quinta",
          "Terreno",
        ]),
      })
    ),
  })),
  comments: faker.random.word(),
  condition: faker.helpers.randomize(["RENT", "SALE"]),
  constructionDate: faker.datatype.number(),
  contacts: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    email: (() => faker.internet.email())(),
    label: faker.random.word(),
  })),
  coveredSquareFoot: faker.datatype.number(),
  environments: faker.datatype.number(),
  expenses: faker.datatype.number(),
  fullBaths: faker.datatype.number(),
  id: (() => faker.datatype.uuid())(),
  levels: faker.datatype.number(),
  links: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() =>
    faker.random.word()
  ),
  materials: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    id: (() => faker.datatype.uuid())(),
    label: faker.random.word(),
  })),
  openHouse: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    day: faker.date.recent(),
    finalTime: faker.random.word(),
    initialTime: faker.random.word(),
  })),
  parkDescription: faker.random.word(),
  price: faker.datatype.number(),
  rooms: faker.datatype.number(),
  security: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    id: (() => faker.datatype.uuid())(),
    label: faker.random.word(),
  })),
  squareFoot: faker.datatype.number(),
  style: { id: (() => faker.datatype.uuid())(), label: faker.random.word() },
  title: faker.random.word(),
  toilets: faker.datatype.number(),
  type: faker.helpers.randomize([
    "Casa",
    "Cochera",
    "Compartido",
    "Consultorio",
    "Country",
    "Departamento",
    "Edificio",
    "Flat",
    "Galpon",
    "Hotel",
    "Local",
    "Loft",
    "Oficina",
    "PH",
    "Quinta",
    "Terreno",
  ]),
});

export const getEditPropertyUsingPUTMock = () => ({
  address: {
    department: faker.random.word(),
    id: (() => faker.datatype.uuid())(),
    number: faker.datatype.number(),
    postalCode: faker.random.word(),
    street: faker.random.word(),
    town: {
      city: {
        id: (() => faker.datatype.uuid())(),
        name: faker.random.word(),
        state: {
          country: {
            id: (() => faker.datatype.uuid())(),
            name: faker.random.word(),
          },
          id: (() => faker.datatype.uuid())(),
          name: faker.random.word(),
        },
      },
      id: (() => faker.datatype.uuid())(),
      name: faker.random.word(),
    },
  },
  amenities: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    id: (() => faker.datatype.uuid())(),
    label: faker.random.word(),
    properties: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
      () => ({
        address: {
          department: faker.random.word(),
          id: (() => faker.datatype.uuid())(),
          number: faker.datatype.number(),
          postalCode: faker.random.word(),
          street: faker.random.word(),
          town: {
            city: {
              id: (() => faker.datatype.uuid())(),
              name: faker.random.word(),
              state: {
                country: {
                  id: (() => faker.datatype.uuid())(),
                  name: faker.random.word(),
                },
                id: (() => faker.datatype.uuid())(),
                name: faker.random.word(),
              },
            },
            id: (() => faker.datatype.uuid())(),
            name: faker.random.word(),
          },
        },
        comments: faker.random.word(),
        condition: faker.helpers.randomize(["RENT", "SALE"]),
        constructionDate: faker.datatype.number(),
        contacts: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            email: (() => faker.internet.email())(),
            id: (() => faker.datatype.uuid())(),
            label: faker.random.word(),
          })
        ),
        coveredSquareFoot: faker.datatype.number(),
        creationDate: faker.date.recent(),
        environments: faker.datatype.number(),
        expenses: faker.datatype.number(),
        fullBaths: faker.datatype.number(),
        id: (() => faker.datatype.uuid())(),
        levels: faker.datatype.number(),
        likes: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            birthDate: faker.helpers.randomize([
              faker.date.recent(),
              undefined,
            ]),
            email: (() => faker.internet.email())(),
            id: (() => faker.datatype.uuid())(),
            likedProperties: [
              ...Array(faker.datatype.number({ min: 1, max: 10 })),
            ].map(() => ({
              address: {
                department: faker.random.word(),
                id: (() => faker.datatype.uuid())(),
                number: faker.datatype.number(),
                postalCode: faker.random.word(),
                street: faker.random.word(),
                town: {
                  city: {
                    id: (() => faker.datatype.uuid())(),
                    name: faker.random.word(),
                    state: {
                      country: {
                        id: (() => faker.datatype.uuid())(),
                        name: faker.random.word(),
                      },
                      id: (() => faker.datatype.uuid())(),
                      name: faker.random.word(),
                    },
                  },
                  id: (() => faker.datatype.uuid())(),
                  name: faker.random.word(),
                },
              },
              comments: faker.random.word(),
              condition: faker.helpers.randomize(["RENT", "SALE"]),
              constructionDate: faker.datatype.number(),
              contacts: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                email: (() => faker.internet.email())(),
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              })),
              coveredSquareFoot: faker.datatype.number(),
              creationDate: faker.date.recent(),
              environments: faker.datatype.number(),
              expenses: faker.datatype.number(),
              fullBaths: faker.datatype.number(),
              id: (() => faker.datatype.uuid())(),
              levels: faker.datatype.number(),
              links: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
                () => faker.random.word()
              ),
              materials: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              })),
              openHouse: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                day: faker.date.recent(),
                finalTime: faker.random.word(),
                id: (() => faker.datatype.uuid())(),
                initialTime: faker.random.word(),
              })),
              parkDescription: faker.random.word(),
              price: faker.datatype.number(),
              rooms: faker.datatype.number(),
              security: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              })),
              squareFoot: faker.datatype.number(),
              style: {
                id: (() => faker.datatype.uuid())(),
                label: faker.random.word(),
              },
              title: faker.random.word(),
              toilets: faker.datatype.number(),
              type: faker.helpers.randomize([
                "Casa",
                "Cochera",
                "Compartido",
                "Consultorio",
                "Country",
                "Departamento",
                "Edificio",
                "Flat",
                "Galpon",
                "Hotel",
                "Local",
                "Loft",
                "Oficina",
                "PH",
                "Quinta",
                "Terreno",
              ]),
            })),
            password: faker.helpers.randomize([faker.random.word(), undefined]),
            userName: faker.random.word(),
            userOrigin: faker.helpers.randomize(["GOOGLE", "UBICAR"]),
            userRole: {
              active: faker.datatype.boolean(),
              creationDate: faker.date.recent(),
              description: faker.random.word(),
              id: (() => faker.datatype.uuid())(),
              permissions: [
                ...Array(faker.datatype.number({ min: 1, max: 10 })),
              ].map(() => ({
                active: faker.datatype.boolean(),
                creationDate: faker.date.recent(),
                description: faker.random.word(),
                id: (() => faker.datatype.uuid())(),
                slug: faker.random.word(),
                title: faker.random.word(),
                userRoles: [
                  ...Array(faker.datatype.number({ min: 1, max: 10 })),
                ].map(() => ({
                  active: faker.datatype.boolean(),
                  creationDate: faker.date.recent(),
                  description: faker.random.word(),
                  id: (() => faker.datatype.uuid())(),
                  slug: faker.random.word(),
                  title: faker.random.word(),
                })),
              })),
              slug: faker.random.word(),
              title: faker.random.word(),
            },
          })
        ),
        links: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() =>
          faker.random.word()
        ),
        materials: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            id: (() => faker.datatype.uuid())(),
            label: faker.random.word(),
          })
        ),
        openHouse: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            day: faker.date.recent(),
            finalTime: faker.random.word(),
            id: (() => faker.datatype.uuid())(),
            initialTime: faker.random.word(),
          })
        ),
        parkDescription: faker.random.word(),
        price: faker.datatype.number(),
        rooms: faker.datatype.number(),
        security: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(
          () => ({
            id: (() => faker.datatype.uuid())(),
            label: faker.random.word(),
          })
        ),
        squareFoot: faker.datatype.number(),
        style: {
          id: (() => faker.datatype.uuid())(),
          label: faker.random.word(),
        },
        title: faker.random.word(),
        toilets: faker.datatype.number(),
        type: faker.helpers.randomize([
          "Casa",
          "Cochera",
          "Compartido",
          "Consultorio",
          "Country",
          "Departamento",
          "Edificio",
          "Flat",
          "Galpon",
          "Hotel",
          "Local",
          "Loft",
          "Oficina",
          "PH",
          "Quinta",
          "Terreno",
        ]),
      })
    ),
  })),
  comments: faker.random.word(),
  condition: faker.helpers.randomize(["RENT", "SALE"]),
  constructionDate: faker.datatype.number(),
  contacts: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    email: (() => faker.internet.email())(),
    label: faker.random.word(),
  })),
  coveredSquareFoot: faker.datatype.number(),
  environments: faker.datatype.number(),
  expenses: faker.datatype.number(),
  fullBaths: faker.datatype.number(),
  id: (() => faker.datatype.uuid())(),
  levels: faker.datatype.number(),
  links: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() =>
    faker.random.word()
  ),
  materials: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    id: (() => faker.datatype.uuid())(),
    label: faker.random.word(),
  })),
  openHouse: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    day: faker.date.recent(),
    finalTime: faker.random.word(),
    initialTime: faker.random.word(),
  })),
  parkDescription: faker.random.word(),
  price: faker.datatype.number(),
  rooms: faker.datatype.number(),
  security: [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    id: (() => faker.datatype.uuid())(),
    label: faker.random.word(),
  })),
  squareFoot: faker.datatype.number(),
  style: { id: (() => faker.datatype.uuid())(), label: faker.random.word() },
  title: faker.random.word(),
  toilets: faker.datatype.number(),
  type: faker.helpers.randomize([
    "Casa",
    "Cochera",
    "Compartido",
    "Consultorio",
    "Country",
    "Departamento",
    "Edificio",
    "Flat",
    "Galpon",
    "Hotel",
    "Local",
    "Loft",
    "Oficina",
    "PH",
    "Quinta",
    "Terreno",
  ]),
});

export const getPropertyControllerMSW = () => [
  rest.post("*/property/create", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getCreatePropertyUsingPOSTMock())
    );
  }),
  rest.put("*/property/:id", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, "Mocked status"),
      ctx.json(getEditPropertyUsingPUTMock())
    );
  }),
];
