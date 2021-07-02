const person = { name: 'Jack William', age: 25, job: "Progammer", gfName: "Jekky William", address: "usa, california", phone: 039430584, friends: ['Tom Ketty', 'John Hussy', 'Jerry Simons'] }

const { phone, address } = person

// const gfName = person.gfName
// const phone = person.phone
// console.log(gfName, phone);
// console.log(phone, address);

const friends = ['Sabbir', 'Helal', 'Imran', 'Wasim', 'Murshed']
const [firstFriend, nextFriend, ...restFriends] = friends
console.log(restFriends);