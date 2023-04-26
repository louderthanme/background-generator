const firstName = document.querySelector('#firstname');
const middleName = document.querySelector('#middlename');
const lastName = document.querySelector('#lastname');
const usernameForm = document.querySelector('#usernameform');
const btn = document.querySelector('button');
const pName = document.querySelector('#fullname')
const pUser = document.querySelector('#usrsuggest')

usernameForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    first = firstName.value[0] + firstName.value[1]
    middle = middleName.value[0] + middleName.value[1]
    last = lastName.value[0] + lastName.value[1]
    await usernamePicker(first, middle, last);
})

const usernamePicker = async (first, middle, last) => {
    if (!middle) {
        const one = await noun(first);
        const two = await noun(last);
        const textOne = one.slice(2);
        const textTwo = two.slice(2);

        const usableFirstName = firstName.value.slice(2);
        const usableLastName = lastName.value.slice(2);


        pName.innerHTML = `<span>${first}</span>` + usableFirstName + ' ' + `<span>${last}</span>` + usableLastName



        pUser.innerHTML = `<span>${first}</span>` + textOne + `<span>${last}</span>` + textTwo



        console.log(one, two)
    } else {
        const one = await noun(first);
        const two = await noun(middle);
        const three = await noun(last);
        const textOne = one.slice(2);
        const textTwo = two.slice(2);
        const textThree = three.slice(2);

        const usableFirstName = firstName.value.slice(2);
        const usableMiddleName = middleName.value.slice(2);
        const usableLastName = lastName.value.slice(2);


        pName.innerHTML = `<span>${first}</span>` + usableFirstName + ' ' + `<span>${middle}</span>` + usableMiddleName + ' ' + `<span>${last}</span>` + usableLastName
        pUser.innerHTML = `<span>${first}</span>` + textOne + `<span>${middle}</span>` + textTwo + `<span>${last}</span>` + textThree
        console.log(one, two, three)
    }
    reset();
}


const noun = async (letter) => {
    let randNum = Math.floor(Math.random() * 100 + 1);
    try {
        const res = await axios.get(`http://api.datamuse.com/words?sp=${letter}????`);
        return res.data[randNum].word
    } catch (e) {
        console.log(`didn't work ${e}`)
    }


}

const reset = () => {
    firstName.value = '';
    middleName.value = '';
    lastName.value = '';
}
