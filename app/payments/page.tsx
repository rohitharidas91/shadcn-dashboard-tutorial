import { columns, type Payment } from "./columns";
import { DataTable } from "./data-table";

export const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      username: "John Doe",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      username: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: "6c84fb90",
      amount: 200,
      status: "success",
      username: "Alice Johnson",
      email: "alice@example.com",
    },
    {
      id: "9a7b3c1d",
      amount: 50,
      status: "failed",
      username: "Bob Brown",
      email: "bob@example.com",
    },
    {
      id: "2e5f8a0b",
      amount: 300,
      status: "pending",
      username: "Charlie Davis",
      email: "charlie@example.com",
    },
    {
      id: "1d4c7b9a",
      amount: 75,
      status: "processing",
      username: "Diana Evans",
      email: "diana@example.com",
    },
    {
      id: "8f0e2d5c",
      amount: 150,
      status: "success",
      username: "Ethan Foster",
      email: "ethan@example.com",
    },
    {
      id: "3b6a9c2d",
      amount: 25,
      status: "failed",
      username: "Fiona Green",
      email: "fiona@example.com",
    },
    {
      id: "5e8d1b4a",
      amount: 400,
      status: "pending",
      username: "George Harris",
      email: "george@example.com",
    },
    {
      id: "0c3f6a9b",
      amount: 90,
      status: "processing",
      username: "Hannah Irving",
      email: "hannah@example.com",
    },
    {
      id: "7d2e5c8f",
      amount: 220,
      status: "success",
      username: "Ian Jackson",
      email: "ian@example.com",
    },
    {
      id: "4a9b1d3c",
      amount: 60,
      status: "failed",
      username: "Julia King",
      email: "julia@example.com",
    },
    {
      id: "9c6f3a0b",
      amount: 350,
      status: "pending",
      username: "Kevin Lewis",
      email: "kevin@example.com",
    },
    {
      id: "2b5d8e1c",
      amount: 110,
      status: "processing",
      username: "Laura Miller",
      email: "laura@example.com",
    },
    {
      id: "8a1c4f9d",
      amount: 180,
      status: "success",
      username: "Michael Nelson",
      email: "michael@example.com",
    },
    {
      id: "3d7e2b5a",
      amount: 45,
      status: "failed",
      username: "Nina Oliver",
      email: "nina@example.com",
    },
    {
      id: "6f0a9c3b",
      amount: 500,
      status: "pending",
      username: "Oscar Parker",
      email: "oscar@example.com",
    },
    {
      id: "1b4d7e2c",
      amount: 135,
      status: "processing",
      username: "Paula Quinn",
      email: "paula@example.com",
    },
    {
      id: "5c8f1a0d",
      amount: 275,
      status: "success",
      username: "Quincy Roberts",
      email: "quincy@example.com",
    },
    {
      id: "0e3b6d9a",
      amount: 85,
      status: "failed",
      username: "Rachel Scott",
      email: "rachel@example.com",
    },
    {
      id: "7a2c5f8b",
      amount: 600,
      status: "pending",
      username: "Sam Taylor",
      email: "sam@example.com",
    },
    {
      id: "4d9e1b3c",
      amount: 160,
      status: "processing",
      username: "Tina Underwood",
      email: "tina@example.com",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="p-4">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="text-2xl font-bold">All Payments</h1>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default PaymentsPage;
