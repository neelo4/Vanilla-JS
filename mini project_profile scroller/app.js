const data = [
    {
        name:'Neelofar Khan',
        age :21,
        gender:'female',
        lookingfor:'male',
        location:'Boston MA',
        image:'https://randomuser.me/api/portraits/women/82.jpg'
        
    },
    {
        name:'Zeenat Khan',
        age :21,
        gender:'female',
        lookingfor:'male',
        location:'England',
        image:'https://randomuser.me/api/portraits/women/82.jpg'
        
    },
    {
        name:'Amaan',
        age :30,
        gender:'male',
        lookingfor:'female',
        location:'Miami FL',
        image:'https://randomuser.me/api/portraits/men/82.jpg'
        
    }
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name : ${currentProfile.name}</li>
        <li class="list-group-item">Age : ${currentProfile.age}</li>
        <li class="list-group-item">gender : ${currentProfile.gender}</li>
        <li class="list-group-item">location : ${currentProfile.location}</li>
        
        
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `<img src = "${currentProfile.image}">`;
}else{
    window.location.reload();
}
}
//profile iterator
function profileIterator(profiles){
    let nextIndex =0;

    return{
        next : function(){
            return nextIndex < profiles.length ? //then
            {value: profiles[nextIndex++], done:false} : //else
            {done:true}

        }
    };

}