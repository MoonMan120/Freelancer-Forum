/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const fLancers = Array.from({ length: NUM_FREELANCERS }, createLancers);

function createLancers() {
  const name = N(NAMES);
  const occupation = N(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}

function N(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function lancerRows({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
<td>${name}</td>
<td>${occupation}</td>
<td>${rate}</td>
`;
  return $tr;
}

function freeRows() {
  const $tbody = document.createElement(`tbody`);
  const $fLancers = fLancers.map(lancerRows);
  $tbody.replaceChildren($fLancers);
  return $tbody;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
<h1>Freelancer Forum</h1>
<table>
<thead>
<tr>
<th>Name</th>
<th>Occupation</th>
<th>Rate</th>
</tr>
</thead>
<tbody id="lancerRows"></tbody>
</table>
`;
  $app.querySelector(`#lancerRows`).replaceWith(lancerRows());
}
render();
