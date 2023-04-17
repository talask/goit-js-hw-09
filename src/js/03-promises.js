import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', goCreatePromises);

function goCreatePromises(e) {
  e.preventDefault();
  const nstPromise = {};

  new FormData(e.currentTarget).forEach((value, name) => {
    nstPromise[name] = Number(value.trim());
  });

  if(nstPromise.amount <= 0 || nstPromise.delay < 0 || nstPromise.step < 0) {
     Notiflix.Notify.warning("Wrong value(s) in field(s). Please fill form correctly");
     return;
  }
  form.reset();
  
  for(let i = 0; i < nstPromise.amount; i += 1) {

    const timeDelay = nstPromise.delay + i*nstPromise.step;

    createPromise(i, timeDelay)
    .then((res) => {
      Notiflix.Notify.success(res);
    })
    .catch((rej) => {  
      Notiflix.Notify.failure(rej);
    });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
    // Fulfill
      res(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
    // Reject
      rej(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  });
}
