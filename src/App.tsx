import DataTable, { TColumn } from "@/Components/Table/DataTable.tsx";

type Users = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
};
function App() {
    const columnHeaders: TColumn<Users>[] = [
        { objectKey: "id", displayName: "User ID" },
        { objectKey: "firstName", displayName: "First Name" },
        { objectKey: "lastName", displayName: "Last Name" },
        { objectKey: "email", displayName: "Email" },
        { objectKey: "phoneNumber", displayName: "Phone Number" },
        { objectKey: "dateOfBirth", displayName: "Date Of Birthday" },
    ];
    const data: Users[] = [
        {
            id: 77662,
            firstName: "Michael",
            lastName: "Miller",
            email: "elizabeth.miller@example.com",
            phoneNumber: "+1-726-784-7686",
            dateOfBirth: "1993-03-10 00:00:00",
        },
        {
            id: 43949,
            firstName: "Mary",
            lastName: "Miller",
            email: "james.davis@example.com",
            phoneNumber: "+1-194-226-3193",
            dateOfBirth: "1960-08-05 00:00:00",
        },
        {
            id: 58814,
            firstName: "Elizabeth",
            lastName: "Johnson",
            email: "robert.davis@example.com",
            phoneNumber: "+1-879-191-6228",
            dateOfBirth: "1988-08-18 00:00:00",
        },
        {
            id: 43308,
            firstName: "Robert",
            lastName: "Garcia",
            email: "john.williams@example.com",
            phoneNumber: "+1-579-164-9345",
            dateOfBirth: "2004-09-26 00:00:00",
        },
        {
            id: 80000,
            firstName: "John",
            lastName: "Miller",
            email: "john.martinez@example.com",
            phoneNumber: "+1-357-307-6663",
            dateOfBirth: "1969-03-27 00:00:00",
        },
        {
            id: 20735,
            firstName: "Mary",
            lastName: "Brown",
            email: "linda.brown@example.com",
            phoneNumber: "+1-248-546-4952",
            dateOfBirth: "1950-10-15 00:00:00",
        },
        {
            id: 15417,
            firstName: "Robert",
            lastName: "Rodriguez",
            email: "robert.smith@example.com",
            phoneNumber: "+1-302-726-2602",
            dateOfBirth: "1999-02-26 00:00:00",
        },
        {
            id: 43604,
            firstName: "Robert",
            lastName: "Rodriguez",
            email: "patricia.johnson@example.com",
            phoneNumber: "+1-826-197-8216",
            dateOfBirth: "1973-09-06 ",
        },
        {
            id: 37876,
            firstName: "Linda",
            lastName: "Garcia",
            email: "patricia.jones@example.com",
            phoneNumber: "+1-456-140-5604",
            dateOfBirth: "1959-02-19 00:00:00",
        },
        {
            id: 84525,
            firstName: "William",
            lastName: "Martinez",
            email: "robert.smith@example.com",
            phoneNumber: "+1-486-919-5606",
            dateOfBirth: "1957-10-18 00:00:00",
        },
        {
            id: 20735,
            firstName: "Mary",
            lastName: "Brown",
            email: "linda.brown@example.com",
            phoneNumber: "+1-248-546-4952",
            dateOfBirth: "1950-10-15 00:00:00",
        },
        {
            id: 15417,
            firstName: "Robert",
            lastName: "Rodriguez",
            email: "robert.smith@example.com",
            phoneNumber: "+1-302-726-2602",
            dateOfBirth: "1999-02-26 00:00:00",
        },
        {
            id: 43604,
            firstName: "Robert",
            lastName: "Rodriguez",
            email: "patricia.johnson@example.com",
            phoneNumber: "+1-826-197-8216",
            dateOfBirth: "1973-09-06 ",
        },
        {
            id: 37876,
            firstName: "Linda",
            lastName: "Garcia",
            email: "patricia.jones@example.com",
            phoneNumber: "+1-456-140-5604",
            dateOfBirth: "1959-02-19 00:00:00",
        },
        {
            id: 84525,
            firstName: "Bonny",
            lastName: "Kato",
            email: "bonny.kato@example.com",
            phoneNumber: "+1-486-919-5606",
            dateOfBirth: "1957-10-18 00:00:00",
        },
    ];

    return (
        <div
            className={
                "h-screen flex justify-center items-center bg-[#333333] text-white/60"
            }
        >
            <DataTable<Users> columnHeaders={columnHeaders} data={data} />
        </div>
    );
}

export default App;
