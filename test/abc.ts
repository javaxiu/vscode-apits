import api from './test.api';

api.getDemandData('').then((a: string) => {
  console.log(a);
});