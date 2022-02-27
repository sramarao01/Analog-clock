setInterval(()=>{
    let d=new Date()
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();
    let hour_rotation=30*hours+minutes/2;
    let minutes_rotation=6*minutes;
    let second_rotation=6*seconds;
    hou.style.transform=`rotate(${hour_rotation}deg)`;
    minut.style.transform=`rotate(${minutes_rotation}deg)`;
    secon.style.transform=`rotate(${second_rotation}deg)`;
}


,1000)