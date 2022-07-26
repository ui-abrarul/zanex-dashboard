import user1 from '../../../assets/salestableuser.jpg'
import user2 from '../../../assets/user2.jpeg'
import user3 from '../../../assets/user3.jpeg'
import user4 from '../../../assets/user4.jpeg'
import user5 from '../../../assets/user5.jpeg'
import { Link } from "react-router-dom";


  export const columns = [
    {
        name: "S.NO",
        selector: row => [row.sno],
        maxWidth: "50px",
        sortable: true,
        cell: row => <span className="text-muted">{row.sno}</span>
    },
    {
        name: "	NAME",
        grow: 2,
        selector: row => <div>{row.name}</div>,
        sortable: true,
        cell: row => <div className="d-flex">

            <img className="avatar" alt="" src={row.img} />
            <div className="table__info">
                <h6>{row.name}</h6>
                <span className='text-muted'>{row.email}</span>
            </div>
        </div>
    },
    {
        name: "DATE",
        selector: row => [row.date],
        sortable: true,
        cell: row => <span className="fw-medium text-muted">{row.date}</span>
    },
    {
        name: "AMOUNT",
        selector: row => [row.amount],
        sortable: true,
        cell: row => <span className="fw-medium text-muted">{row.amount}</span>
    },
    {
        name: "STATUS",
        selector: row => [row.status],
        sortable: true,
        cell: row => <span className={`fw-medium status text-${row.color}`}>{row.status}</span>
    },
    {
        name: "ACTION",
        selector: row => [row.action],
        sortable: true,
        cell: row => <span className="">
                <Link to="#" className="pre--btn btn-primary" ><svg className="table-edit" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" /></svg></Link>
                <Link to="#" className="pre--btn btn-danger"><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" /></svg></Link>
        </span>
    },
]

export const data = [
    {
        id: "1",
        sno: 1,
        name: "Jake poole",
        img: user1,
        amount: "$5.321.2",
        email: "jacke123@gmail.com",
        date: "20-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "2",
        sno: 2,
        name: "Virginia Gray",
        img: user2,
        amount: "$53,3654",
        email: "virginia456@gmail.com",
        date: "20-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "3",
        sno: 3,
        name: "Jacob Thomson",
        img: user3,
        amount: "$1,56,3654",
        email: "jacobthomson@gmail.com",
        date: "20-11-2020",
        status: "Pending",
        color: "primary",
    },
    {
        id: "4",
        sno: 4,
        name: "Trevor Thomson",
        img: user4,
        amount: "$12.3",
        email: "trevor@gmail.com",
        date: "19-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "5",
        sno: 5,
        name: "Kylie north",
        img: user5,
        amount: "$5.312.2",
        email: "kylie@gmail.com",
        date: "19-11-2020",
        status: "Pending",
        color: "primary",
    },
    {
        id: "6",
        sno: 6,
        name: "Jan Hodges",
        img: user1,
        amount: "$5.312.2",
        email: "jan@gmail.com",
        date: "19-11-2020",
        status: "Cancel",
        color: "danger",
    },
    {
        id: "7",
        sno: 7,
        name: "Trevor Thomson",
        img: user2,
        amount: "$2,24,1421",
        email: "trevor@gmail.com",
        date: "18-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "8",
        sno: 8,
        name: "Kylie north",
        img: user3,
        amount: "$5.312.2",
        email: "kylie@gmail.com",
        date: "18-11-2020",
        status: "Cancel",
        color: "danger",
    },
    {
        id: "9",
        sno: 9,
        name: "Emily Lewis",
        img: user4,
        amount: "$9.321.2",
        email: "emily@gmail.com",
        date: "18-11-2020",
        status: "Pending",
        color: "primary",
    },
    {
        id: "10",
        sno: 10,
        name: "Jan Hodges",
        img: user5,
        amount: "$243,654",
        email: "jan@gmail.com",
        date: "17-11-2020",
        status: "Pending",
        color: "primary",
    },
    {
        id: "11",
        sno: 11,
        name: "Trevor Thomson",
        img: user1,
        amount: "$243,654",
        email: "trevor@gmail.com",
        date: "17-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "12",
        sno: 12,
        name: "Jake poole",
        img: user2,
        amount: "$5.321.2",
        email: "jacke123@gmail.com",
        date: "20-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "13",
        sno: 13,
        name: "Virginia Gray",
        img: user3,
        amount: "$53,3654",
        email: "virginia456@gmail.com",
        date: "20-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "14",
        sno: 14,
        name: "Jacob Thomson",
        img: user4,
        amount: "$1,56,3654",
        email: "jacobthomson@gmail.com",
        date: "20-11-2020",
        status: "Pending",
        color: "primary",
    },
    {
        id: "15",
        sno: 15,
        name: "Trevor Thomson",
        img: user5,
        amount: "$12.3",
        email: "trevor@gmail.com",
        date: "19-11-2020",
        status: "Success",
        color: "success",
    },
    {
        id: "16",
        sno: 16,
        name: "Kylie north",
        img: user1,
        amount: "$5.312.2",
        email: "kylie@gmail.com",
        date: "19-11-2020",
        status: "Pending",
        color: "primary",
    }
]
