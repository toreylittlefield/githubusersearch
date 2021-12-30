import { useEffect, useState } from "react";



const JoinedDate = (props) => {

    const [realDate, setrealDate] = useState('')


    async function getrealDate() {

        const array1 = await props.searchUser.created_at.split('');
        const newArray = []

        for (let i = 0; i < 10; i++) {
            newArray.push(array1[i])
        }

        const date = new Date(newArray.join(''))

        const dateString = date.toDateString();

        setrealDate(dateString)

        console.log(dateString)

        return dateString;
    }

    useEffect(() => {
        getrealDate();
    }, [getrealDate])



    return <p>Joined {realDate} </p>

}

export default JoinedDate;