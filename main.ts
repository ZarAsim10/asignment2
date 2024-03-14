//ASSIGNMENT 2
//OBJECTS

//objects => {} => {key:value} pair

//EXAMPLE # 1

type details = {
    Name : string
    Number_of_Friends: number
    IsFollowing: boolean
}

let profile_Name = {
    Name: "Anum khan",
    Number_of_Friends: 256,
    IsFollowing: true
}
   
console.log(profile_Name);


//EXAMPLE # 2


type  Product = {
    title: string,
    rating : number
    offer : number
    Price: bigint
    IsAvailable: boolean
    parts: [arrayOfstring]

'Const' ; Product = {
    title: "DawlanceFridge",
    rating : 4,
    offer : 5,
    Price: 85000n,
    IsAvailable: true
    parts: ['compressor' , 'gaskit' , 'thermostat', 'condenser']
}

console.log(Product);

