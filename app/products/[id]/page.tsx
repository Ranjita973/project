export default async function products({ 
    params 
}: {
    params: Promise< { id: string }>;
}){
    const { id } = await params;
    return(
        <div>
            <h1>products {id} </h1>
        </div>
    )
}

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

// export default async function Page() {
//   const users = await getUsers();

//   return (
//     <div>
//       <h1>User List</h1>
//       {users.map((user: any) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }
