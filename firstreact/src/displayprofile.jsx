const user={
    name:"John",
    age :21,
    profilepic:"https://i.imgur.com/yXOvdOSs.jpg",
}


function Displayprofile(){
    return(
        <>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <img 
        src={user.profilepic} 
        alt="profilepic"
        style={{
            borderRadius :"50px",  
        }}
        />
        <br/>
        </>
    )
}

export {Displayprofile};
