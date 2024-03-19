import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 5,
  // A string specifying the total duration of the test run.
  duration: '15s',
};

//
export default function() {
  const res = http.get('https://randomuser.me/api/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
