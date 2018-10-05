function queueTime (queue, cashiers, time = 0) {
  const tills = Array(cashiers).fill([]);
  queue.forEach( job => );

  const dequeual = (q, n = 0) => {
    tills.map( till => [...till, q.shift()] );
    n === cashiers ? Math.min(...cashiers[0]) < Math.min(...cashiers[0]) : minJob(q, ++n, q.length ? [...acc, q.shift()] : acc);
  time += minJob(queue);
  return queue.length ? queueTime(queue, cashiers, time) : time;
}

console.log(queueTime([5,3,11,7], 2));