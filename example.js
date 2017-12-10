import Yosuga from 'yosuga';

const yosuga = new Yosuga({
  icon: 'icon.png',
  name: 'Yosuga DEMO',
  main: 'sass',
});

yosuga
  .prepare()
  .then(() => {
    yosuga.serve();
  })
  .catch(err => {
    console.log(err);
  });
