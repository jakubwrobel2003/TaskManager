`use strict`;

const boss = {
  name: `Boss`,
  login: `boss1`,
  pin: 1111,
  reed: true,
  edit: true,
  status: true,
  delete: true,
  add: true,
  darkMode: false,
};
const waiter1 = {
  name: `Max`,
  login: `waiter1`,
  pin: 2222,
  reed: true,
  edit: true,
  status: true,
  delete: true,
  add: true,
  darkMode: false,
};
const manager = {
  name: `Vlad`,
  login: `manager1`,
  pin: 3333,
  reed: true,
  edit: true,
  status: true,
  delete: false,
  add: true,
  darkMode: false,
};
const accounts = [boss, waiter1, manager];
console.log(accounts);
const inputLogin = document.querySelector(`.input-login`);
const inputPin = document.querySelector(`.input-pin`);
const btnLogin = document.querySelector(`.btn-login`);
console.log(inputLogin, inputPin, btnLogin);
btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();
  const curAccount = accounts.find(
    (acc) => acc.login === inputLogin.value && acc.pin === inputPin.value
  );
  if (curAccount) {
    console.log(`hi`);
  } else {
    console.log(`no`);
  }
});
