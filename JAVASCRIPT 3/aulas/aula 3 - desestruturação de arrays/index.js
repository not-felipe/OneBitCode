const person = {
  name: "Felipe",
  job: "Student",
  parents: ["Michelle", "Luciano"],
};

const { job, name, parents } = person;
const [father, mother] = parents;
console.log(
  `Hello, my name is ${name}, I am a ${job} and the name of my parents are ${father} and ${mother}.`
);

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = createUser(person);
console.log(luke);
