import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', goCreatePromises);

function goCreatePromises(e) {
  e.preventDefault();
  const nstPromise = {};

  new FormData(e.currentTarget).forEach((value, name) => {
    nstPromise[name] = value;
  });
    
  for(let i = 0; i <= Number(nstPromise.amount); i += 1) {

    const timeDelay = Number(nstPromise.delay) + i*nstPromise.step;
    
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
