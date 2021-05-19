let result = '';
const values = document.querySelectorAll('#values li');
const URLs = document.querySelectorAll('#urls li');
const num = values.length;
const parser = new DOMParser();

const DEBUG = false;

document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    // здесь напишите код, последовательно отправляющий запросы
    // согласно спецификации kodaktor.ru/async_tasks

    t.textContent = "Patience.";

    for (let i = 0; i < num; i++) {
      let query = URLs[i].textContent + values[i].textContent + '/' + result;

      if (DEBUG) {
        console.log("Query is " + query);
      }

      let resp = await(fetch(query).then(s => s.text()));

      if (DEBUG) {
        console.log("Response is " + resp);
      }

      let tempDoc = parser.parseFromString(resp, 'text/html');
      result = tempDoc.querySelector('span').textContent;
      t.textContent += '.';
    }

    t.textContent = `Result is ${result}`;
  }
); 